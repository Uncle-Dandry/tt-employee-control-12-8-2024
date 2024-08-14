import React, {
  type FC,
  type ChangeEvent,
  type FormEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import type { Employee, FormErrors } from 'types';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  setEmployees,
  updateEmployee,
  addEmployee,
} from 'store/components/slices/employeeSlice';

import {
  DateRegex,
  PhoneRusRegex,
  trimFormValues,
} from 'utils';

import employeeData from 'employees.json';

import './EmployeeForm.scss';

const EmployeeForm: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const employees = useAppSelector((state) => state.employees.employees);
  const employee = useAppSelector((state) => 
    state.employees.employees.find(emp => emp.id === Number(id)),
  );

  const [formData, setFormData] = useState<Employee>(employee || {
    id: id ? Number(id) : employees.length + 1,
    name: '',
    isArchive: false,
    role: 'cook',
    phone: '',
    birthday: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const dispatch = useAppDispatch();

  useEffect(
    () => {
      if (employees.length === 0) {
        dispatch(setEmployees(
          employeeData as unknown as Employee[],
        ));
      }
    },
    [employees, dispatch],
  );

  useEffect(
    () => {
      if (employee) {
        setFormData(employee);
      }
    },
    [employee],
  );

  const validate = useCallback(
    () => {
      const newErrors: FormErrors = {};

      const trimmedFormData = trimFormValues(formData);

      if (!trimmedFormData.name.trim()) {
        newErrors.name = 'Имя не может быть пустым';
      }

      if (!PhoneRusRegex.test(trimmedFormData.phone)) {
        newErrors.phone = 'Номер телефона некорректен';
      }

      if (!DateRegex.test(trimmedFormData.birthday)) {
        newErrors.birthday = 'Дата должна быть в формате ДД.ММ.ГГГГ';
      }

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    },
    [formData, setErrors],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value,
      type,
    } = e.target;
  
    if (type === 'checkbox') {
      const inputElement = e.target as HTMLInputElement;
      setFormData(prevData => ({
        ...prevData,
        [name]: inputElement.checked,
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (validate()) {
        if (id) {
          dispatch(updateEmployee(formData));
        } else {
          dispatch(addEmployee(formData));
        }

        navigate('/');
      }
    },
    [
      id,
      formData,
      dispatch,
      navigate,
      validate,
    ],
  );

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <div className="employee-form__row">
        <div className="employee-form__field">
          <label htmlFor="name">
            Имя
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="employee-form__error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="employee-form__field">
          <label
            htmlFor="phone"
          >
            Телефон
          </label>

          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
          />

          {errors.phone && (
            <span className="employee-form__error">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="employee-form__row">
        <div className="employee-form__field">
          <label htmlFor="birthday">
            Дата рождения
          </label>

          <input
            id="birthday"
            type="text"
            name="birthday"
            placeholder="Дата рождения"
            value={formData.birthday}
            onChange={handleChange}
          />

          {errors.birthday && (
            <span className="employee-form__error">
              {errors.birthday}
            </span>
          )}
        </div>

        <div className="employee-form__field">
          <label htmlFor="role">
            Роль
          </label>

          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="cook">
              Повар
            </option>

            <option value="waiter">
              Официант
            </option>

            <option value="driver">
              Водитель
            </option>
          </select>
        </div>
      </div>

      <div className="employee-form__field">
        <label
          htmlFor="isArchive"
          className="employee-form__checkbox__label"
        >
          Архивировать

          <input
            id="isArchive"
            type="checkbox"
            name="isArchive"
            checked={formData.isArchive}
            onChange={handleChange}
          />
        </label>
      </div>

      <button
        className="employee-form__submit"
        type="submit"
      >
        Сохранить
      </button>
    </form>
  );
};

export default memo(EmployeeForm);

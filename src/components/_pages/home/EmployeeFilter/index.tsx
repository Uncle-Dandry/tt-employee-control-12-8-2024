import React, {
  type FC,
  memo,
  useCallback,
} from 'react';

import type { EmployeeRole } from 'types';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setIsArchived, setRole } from 'store/components/slices/employeeSortFilterSlice';

import './EmployeeFilter.scss';

const EmployeeFilter: FC = () => {
  const { role, isArchived } = useAppSelector((state) => state.employeeSortFilter);
  const dispatch = useAppDispatch();

  const handleRoleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setRole(event.target.value as EmployeeRole));
    },
    [dispatch],
  );

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsArchived(event.target.checked));
  };

  return (
    <div className="employee-filter">
      <select
        className="employee-filter__select"
        value={role}
        onChange={handleRoleChange}
      >
        <option value="">
          Все должности
        </option>

        <option value="driver">
          Водитель
        </option>

        <option value="waiter">
          Официант
        </option>

        <option value="cook">
          Повар
        </option>
      </select>

      <label className="employee-filter__checkbox-label">
        <input
          className="employee-filter__checkbox"
          type="checkbox"
          checked={isArchived}
          onChange={handleStatusChange}
        />
        В архиве
      </label>
    </div>
  );
};

export default memo(EmployeeFilter);

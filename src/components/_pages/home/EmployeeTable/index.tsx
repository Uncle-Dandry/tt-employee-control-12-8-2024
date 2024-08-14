import React, {
  type FC,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import type {
  Employee,
  SortOption,
} from 'types';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setEmployees } from 'store/components/slices/employeeSlice';
import { setSort, setSortDirection } from 'store/components/slices/employeeSortFilterSlice';
import { selectFilteredEmployees } from 'store/components/selector';

import { parseDate } from 'utils';

import employeeData from 'employees.json';

import './EmployeeTable.scss';

const EmployeeTable: FC = () => {
  const filteredEmployees = useSelector(selectFilteredEmployees);

  const {
    sort: sortBy,
    sortDirection,
  } = useAppSelector((state) => state.employeeSortFilter);

  const dispatch = useAppDispatch();

  useEffect(
    () => {
      if (filteredEmployees.length === 0) {
        dispatch(setEmployees(
          employeeData as unknown as Employee[],
        ));
      }
    },
    [filteredEmployees, dispatch],
  );

  const sortedEmployees = useMemo(
    () => {
      return [...filteredEmployees].sort((a, b) => {
        if (sortBy === 'name') {
          return sortDirection === 'asc' 
            ? a.name.localeCompare(b.name) 
            : b.name.localeCompare(a.name);
        } else if (sortBy === 'birthday') {
          const dateA = parseDate(a.birthday).getTime();
          const dateB = parseDate(b.birthday).getTime();

          return sortDirection === 'asc' 
            ? dateA - dateB 
            : dateB - dateA;
        }

        return 0;
      });
    },
    [
      filteredEmployees,
      sortDirection,
      sortBy,
    ],
  );
  
  const handleSort = useCallback(
    (key: SortOption) => {
      if (sortBy === key) {
        dispatch(setSortDirection(
          sortDirection === 'asc'
            ? 'desc'
            : 'asc',
        ));
      } else {
        dispatch(setSort(key));
        dispatch(setSortDirection('asc'));
      }
    },
    [
      dispatch,
      sortBy,
      sortDirection,
    ],
  );

  return (
    <div className="employee-table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th className="employee-table__header">
              <button
                className="employee-table__sort-button"
                onClick={handleSort.bind(null, 'name')}
              >
                Name
              </button>
            </th>

            <th className="employee-table__header">
              Phone
            </th>

            <th className="employee-table__header">
              Role
            </th>

            <th className="employee-table__header">
              <button
                className="employee-table__sort-button"
                onClick={handleSort.bind(null, 'birthday')}
              >
                Birthday
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedEmployees.map((employee: Employee) => (
            <tr className="employee-table__row" key={employee.id}>
              <td className="employee-table__cell" colSpan={4}>
                <Link className="employee-table__link" to={`/employee/${employee.id}`}>
                  <div className="employee-table__item">
                    <div className="employee-table__name">
                      <strong>
                        {employee.name}
                      </strong>
                    </div>

                    <div className="employee-table__phone">
                      {employee.phone}
                    </div>

                    <div className="employee-table__role">
                      {employee.role}
                    </div>

                    <div className="employee-table__birthday">
                      {employee.birthday}
                    </div>
                  </div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

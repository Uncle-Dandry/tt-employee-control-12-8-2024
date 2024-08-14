import React, {
  type FC,
} from 'react';

import { ContentLayout } from 'components/_layouts';
import { EmployeeForm } from 'components/_pages/employee';

import 'styles/_pages/Employee.scss';

const EmployeePage: FC = () => {
  return (
    <ContentLayout
      classes={{
        root: 'employee-page__root',
        content: 'employee-page__content',
      }}
    >
      <h1 className="employee-page__title">
        Редактирование данных работника 
      </h1>

      <EmployeeForm />
    </ContentLayout>
  );
};

export default EmployeePage;

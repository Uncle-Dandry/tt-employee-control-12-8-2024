import React, {
  type FC,
} from 'react';

import { ContentLayout } from 'components/_layouts';
import { EmployeeForm } from 'components/_pages/employee';

import 'styles/_pages/CreateEmployeePage.scss';

const CreateEmployeePage: FC = () => {
  return (
    <ContentLayout
      classes={{
        root: 'create-employee-page__root',
        content: 'create-employee-page__content',
      }}
    >
      <h1 className="create-employee-page__title">
        Добавление работника 
      </h1>

      <EmployeeForm />
    </ContentLayout>
  );
};

export default CreateEmployeePage;

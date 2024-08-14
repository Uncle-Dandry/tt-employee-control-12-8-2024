import React, {
  type FC,
} from 'react';

import { ContentLayout } from 'components/_layouts';
import { EmployeeFilter, EmployeeTable } from 'components/_pages/home';

import 'styles/_pages/Home.scss';

const HomePage: FC = () => {
  return (
    <ContentLayout
      classes={{
        root: 'home-page__root',
        content: 'home-page__content',
      }}
    >
      <h1 className="home-page__title">
        Работники месяца
      </h1>

      <EmployeeFilter />

      <EmployeeTable />
    </ContentLayout>
  );
};

export default HomePage;

import React, {
  type FC,
  type ReactNode,
  memo,
} from 'react';
import classNames from 'classnames';

import './ContentLayout.scss';

interface ContentLayoutClassesProps {
  root?: string;
  content?: string;
}

interface ContentLayoutProps {
  classes?: ContentLayoutClassesProps;
  id?: string;
  component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  classes: {
    root = '',
    content = '',
  } = {},
  id,
  component: Component = 'div',
  children,
}) => {
  return (
    <Component
      className={classNames('content-layout-root', root)}
      id={id}
    >
      <div
        className={classNames('content-layout-wrapper', content)}
      >
        {children}
      </div>
    </Component>
  );
};

export default memo(ContentLayout);

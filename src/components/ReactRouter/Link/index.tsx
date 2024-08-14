import React, {
  type FC,
  type PropsWithChildren,
} from 'react';

interface LinkProps {
  className?: string;
  to: string;
}

const Link: FC<PropsWithChildren<LinkProps>> = ({
  className = '',
  to,
  children,
}) => {
  const preventReload = (event: any) => {
    event.preventDefault();
    window.history.pushState({}, '', to);

    const navigationEvent = new PopStateEvent('navigate');
    window.dispatchEvent(navigationEvent);
  };

  return (
    <a
      className={className}
      href={to}
      onClick={preventReload}
    >
      {children}
    </a>
  );
};

export default Link;

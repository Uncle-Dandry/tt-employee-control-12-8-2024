import React, {
  type FC,
  useEffect,
  useState,
} from 'react';

interface RouteProps {
  path: string;
  component: React.ComponentType;
}

const Route: FC<RouteProps> = ({
  path,
  component: Component,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(
    () => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
      };
      
      window.addEventListener('navigate', onLocationChange);
      return () => window.removeEventListener('navigate', onLocationChange);
    },
    [],
  );

  return currentPath === path ? <Component /> : null;
};

export default Route;

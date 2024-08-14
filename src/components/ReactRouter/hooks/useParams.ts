import { useEffect, useState } from 'react';

const useParams = <T extends Record<string, string>>() => {
  const [params, setParams] = useState<T | null>(null);

  useEffect(
    () => {
      const getParams = () => {
        const path = window.location.pathname;
        const pathSegments = path.split('/').filter(Boolean);
  
        const routePattern = ['/', ':id'];
        const params: Record<string, string> = {};
  
        routePattern.forEach((segment, index) => {
          if (segment.startsWith(':')) {
            const paramName = segment.slice(1);
            params[paramName] = pathSegments[index];
          }
        });
  
        setParams(params as T);
      };
  
      getParams();
  
      window.addEventListener('navigate', getParams);
      return () => window.removeEventListener('navigate', getParams);
    },
    [],
  );

  return params;
};

export default useParams;

export function useLocalizedPath() {
  const getLocalizedPath = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const pathParts = cleanPath.split('/').filter(Boolean);
    
    if (pathParts[0] === 'en' || pathParts[0] === 'id') {
      const remaining = pathParts.slice(1).join('/');
      return remaining ? `/${remaining}` : '/';
    }
    
    return cleanPath === '' ? '/' : cleanPath;
  };

  return { getLocalizedPath };
}

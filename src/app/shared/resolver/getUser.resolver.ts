import { ResolveFn } from '@angular/router';

export const getUserResolver: ResolveFn<any> = (routeActive) => {
  const id = routeActive.paramMap.get('id');
  return {
    id: id,
  };
};

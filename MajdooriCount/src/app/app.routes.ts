import { Route } from '@angular/router';
import { libUserRegistrationRoutes } from '@my-office-app-workspace/lib-user-registration';

export const appRoutes: Route[] = [...libUserRegistrationRoutes,
    {path:'' ,redirectTo:'userRegister',pathMatch:'full'}
];

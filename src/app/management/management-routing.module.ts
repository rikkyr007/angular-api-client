import { NgModule }                         from "@angular/core";
import { RouterModule, Routes }             from "@angular/router";

// Environtment
import { environment }                      from '../../environments/environment'
import { NgxPermissionsGuard }              from 'ngx-permissions';
import { AuthGuard }                        from '../auth/auth.guard'

// Package
import { ManagementComponent }              from './management.component';


const routes: Routes = [
    {   path: '',             
        component: ManagementComponent,
        canActivate : [AuthGuard],
        canLoad: [NgxPermissionsGuard],
        children: [
            { path : '',                            redirectTo  : 'dashboard' },
            { path : 'dashboard',                   loadChildren: "./component/dashboard/dashboard.module#DashboardModule"},
        ]
    }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ManagementRoutingModule { }
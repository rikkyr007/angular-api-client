import { NgModule }                           from "@angular/core";
import { CommonModule }                       from '@angular/common';
import { ReactiveFormsModule }                from '@angular/forms';
import { HttpClientModule }                   from '@angular/common/http';

// Lazy Load routing
import { ManagementRoutingModule }            from "./management-routing.module";

// Component
import { ManagementComponent }           from "./management.component";

// Package
import { NgxPermissionsModule }       from 'ngx-permissions';
import { KeysPipe }                   from '../shared/pipe/keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [
    ManagementComponent,
    KeysPipe
  ],
  providers: []
})
export class ManagementModule {}
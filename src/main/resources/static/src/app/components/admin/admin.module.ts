import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminDashboardMainComponent } from './admin-dashboard-main/admin-dashboard-main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ProveedorAdminRegisterComponent } from './proveedor-admin-register/proveedor-admin-register.component';
import {FormsModule} from "@angular/forms";
import { CuadrillasAdminComponent } from './cuadrillas-admin/cuadrillas-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    NavbarAdminComponent,
    HomeAdminComponent,
    AdminDashboardMainComponent,
    ProveedorAdminRegisterComponent,
    CuadrillasAdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
  ]
})
export class AdminModule { }

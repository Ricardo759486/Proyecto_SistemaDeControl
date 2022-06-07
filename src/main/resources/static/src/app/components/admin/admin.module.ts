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
import { MaterialAdminComponent } from './material-admin/material-admin.component';
import { CuadrillasAdminComponent } from './cuadrillas-admin/cuadrillas-admin.component';
import {TablaProveedorComponent} from "./tabla-proveedor/tabla-proveedor.component";
import { ClienteAdminComponent } from './cliente-admin/cliente-admin.component';
import { ZonaAdminComponent } from './zona-admin/zona-admin.component';
import { MaterialcuadrillaAdminComponent } from './materialcuadrilla-admin/materialcuadrilla-admin.component';
import { OrdentrabajoAdminComponent } from './ordentrabajo-admin/ordentrabajo-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    NavbarAdminComponent,
    HomeAdminComponent,
    AdminDashboardMainComponent,
    ProveedorAdminRegisterComponent,
    MaterialAdminComponent,
    CuadrillasAdminComponent,
    TablaProveedorComponent,
    ClienteAdminComponent,
    ZonaAdminComponent,
    MaterialcuadrillaAdminComponent,
    OrdentrabajoAdminComponent,
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

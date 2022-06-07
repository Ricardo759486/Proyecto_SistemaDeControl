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
import { ProveedorAdminRegisterComponent } from './proveedor/proveedor-admin-register/proveedor-admin-register.component';
import { FormsModule } from "@angular/forms";
import { MaterialAdminRegisterComponent } from './material/material-admin-register/material-admin-register.component';
import { TablaProveedorComponent} from "./proveedor/tabla-proveedor/tabla-proveedor.component";
import { ClienteAdminComponent } from './cliente-admin/cliente-admin.component';
import { ZonaAdminComponent } from './zona-admin/zona-admin.component';
import {
  CuadrillaAdminRegisterComponent
} from "./cuadrilla/cuadrilla-admin-register/cuadrillas-admin-register.component";
import { MaterialcuadrillaAdminComponent } from './materialcuadrilla-admin/materialcuadrilla-admin.component';
import { OrdentrabajoAdminComponent } from './ordentrabajo-admin/ordentrabajo-admin.component';
import { ParametroAdminComponent } from './parametro/parametro-admin-register/parametro-admin.component';
import { TelefonoAdminComponent } from './telefono-admin/telefono-admin.component';
import { ProveedorAdminPageComponent } from './proveedor/proveedor-admin-page/proveedor-admin-page.component';
import { ParametroAdminPageComponent } from './parametro/parametro-admin-page/parametro-admin-page.component';
import { TablaParametroComponent } from './parametro/tabla-parametro/tabla-parametro.component';
import {TablaUsuarioComponent} from "./Usuario/tabla-usuario/tabla-usuario.component";
import {UsuarioAdminPageComponent} from "./Usuario/usuario-admin-page/usuario-admin-page.component";
import {UsuarioAdminRegisterComponent} from "./Usuario/usuario-admin-register/usuario-admin-register.component";


@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    NavbarAdminComponent,
    HomeAdminComponent,
    AdminDashboardMainComponent,
    ProveedorAdminRegisterComponent,
    MaterialAdminRegisterComponent,
    CuadrillaAdminRegisterComponent,
    TablaProveedorComponent,
    ClienteAdminComponent,
    ZonaAdminComponent,
    MaterialcuadrillaAdminComponent,
    OrdentrabajoAdminComponent,
    ParametroAdminComponent,
    TelefonoAdminComponent,
    ProveedorAdminPageComponent,
    ParametroAdminPageComponent,
    TablaParametroComponent,
    UsuarioAdminPageComponent,
    TablaUsuarioComponent,
    UsuarioAdminRegisterComponent,
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

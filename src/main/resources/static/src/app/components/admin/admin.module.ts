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
import { ClienteAdminRegisterComponent } from './Cliente/cliente-admin-register/cliente-admin-register.component';
import { ZonaAdminRegisterComponent } from './Zona/zona-admin-register/zona-admin-register.component';
import { MaterialcuadrillaAdminRegisterComponent } from './MaterialCuadrilla/materialcuadrilla-admin-register/materialcuadrilla-admin-register.component';
import { OrdentrabajoAdminRegisterComponent } from './OrdenTrabajo/ordentrabajo-admin-register/ordentrabajo-admin-register.component';
import { ParametroAdminRegisterComponent } from './parametro/parametro-admin-register/parametro-admin-register.component';
import { TelefonoAdminRegisterComponent } from './Telefono/telefono-admin-register/telefono-admin-register.component';
import { MaterialAdminPageComponent } from './material/material-admin-page/material-admin-page.component';
import { TablaMaterialComponent } from './material/tabla-material/tabla-material.component';
import {TablaUsuarioComponent} from "./Usuario/tabla-usuario/tabla-usuario.component";
import {UsuarioAdminPageComponent} from "./Usuario/usuario-admin-page/usuario-admin-page.component";
import {UsuarioAdminRegisterComponent} from "./Usuario/usuario-admin-register/usuario-admin-register.component";
import { ProveedorAdminPageComponent } from './proveedor/proveedor-admin-page/proveedor-admin-page.component';
import { ParametroAdminPageComponent } from './parametro/parametro-admin-page/parametro-admin-page.component';
import { TablaParametroComponent } from './parametro/tabla-parametro/tabla-parametro.component';
import { CuadrillasAdminRegisterComponent} from "./cuadrilla/cuadrilla-admin-register/cuadrillas-admin-register.component";
import {CuadrillaAdminPageComponent} from "./cuadrilla/cuadrilla-admin-page/cuadrilla-admin-page.component";
import { TablaCuadrillaComponent } from './cuadrilla/tabla-cuadrilla/tabla-cuadrilla.component';
import { TiposervicioAdminPageComponent } from './tiposervicio/tiposervicio-admin-page/tiposervicio-admin-page.component';
import { TiposervicioAdminRegisterComponent } from './tiposervicio/tiposervicio-admin-register/tiposervicio-admin-register.component';
import { TablaTiposervicioComponent } from './tiposervicio/tabla-tiposervicio/tabla-tiposervicio.component';

@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    NavbarAdminComponent,
    HomeAdminComponent,
    AdminDashboardMainComponent,
    ProveedorAdminRegisterComponent,
    MaterialAdminRegisterComponent,
    TablaProveedorComponent,
    ClienteAdminRegisterComponent,
    ZonaAdminRegisterComponent,
    MaterialcuadrillaAdminRegisterComponent,
    OrdentrabajoAdminRegisterComponent,
    ParametroAdminRegisterComponent,
    TelefonoAdminRegisterComponent,
    ProveedorAdminPageComponent,
    ParametroAdminPageComponent,
    TablaParametroComponent,
    MaterialAdminPageComponent,
    TablaMaterialComponent,
    UsuarioAdminPageComponent,
    TablaUsuarioComponent,
    UsuarioAdminRegisterComponent,
    ProveedorAdminPageComponent,
    ParametroAdminPageComponent,
    TablaParametroComponent,
    CuadrillasAdminRegisterComponent,
    CuadrillaAdminPageComponent,
    TablaCuadrillaComponent,
    TiposervicioAdminPageComponent,
    TiposervicioAdminRegisterComponent,
    TablaTiposervicioComponent,

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

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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { ProveedorAdminModalComponent } from './proveedor/proveedor-admin-modal/proveedor-admin-modal.component';
import {MatSelectModule} from "@angular/material/select";
import { CuadrillaAdminModalComponent } from './cuadrilla/cuadrilla-admin-modal/cuadrilla-admin-modal.component';
import {UsuarioAdminModalComponent} from "./Usuario/usuario-admin-modal/usuario-admin-modal.component";
import { ClienteAdminModalComponent } from './Cliente/cliente-admin-modal/cliente-admin-modal.component';
import {TablaClienteComponent} from "./Cliente/tabla-cliente/tabla-cliente.component";
import {ClienteAdminPageComponent} from "./Cliente/cliente-admin-page/cliente-admin-page.component";
import {ProveedorAdminEditarComponent} from "./proveedor/proveedor-admin-editar/proveedor-admin-editar.component";
import {
  MaterialcuadrillaAdminModalComponent
} from "./MaterialCuadrilla/materialcuadrilla-admin-modal/materialcuadrilla-admin-modal.component";
import {
  TablaMaterialcuadrillaComponent
} from "./MaterialCuadrilla/tabla-materialcuadrilla/tabla-materialcuadrilla.component";
import {
  MaterialcuadrillaAdminPageComponent
} from "./MaterialCuadrilla/materialcuadrilla-admin-page/materialcuadrilla-admin-page.component";
import { ClienteAdminEditarComponent } from './Cliente/cliente-admin-editar/cliente-admin-editar.component';
import {TelefonoAdminPageComponent} from "./Telefono/telefono-admin-page/telefono-admin-page.component";
import {TelefonoAdminModalComponent} from "./Telefono/telefono-admin-modal/telefono-admin-modal.component";
import {TablaTelefonoComponent} from "./Telefono/tabla-telefono/tabla-telefono.component";
import { CuadrillaAdminEditarComponent } from './cuadrilla/cuadrilla-admin-editar/cuadrilla-admin-editar.component';
import { MaterialcuadrillaAdminEditarComponent } from './MaterialCuadrilla/materialcuadrilla-admin-editar/materialcuadrilla-admin-editar.component';
import { UsuarioAdminEditarComponent } from './Usuario/usuario-admin-editar/usuario-admin-editar.component';
import {OrdentrabajoAdminPageComponent} from "./OrdenTrabajo/ordentrabajo-admin-page/ordentrabajo-admin-page.component";
import {TablaOrdentrabajoComponent} from "./OrdenTrabajo/tabla-ordentrabajo/tabla-ordentrabajo.component";
import {
  OrdentrabajoAdminModalComponent
} from "./OrdenTrabajo/ordentrabajo/ordentrabajo-admin-modal/ordentrabajo-admin-modal.component";
import { OrdentrabajoAdminEditarComponent } from './OrdenTrabajo/ordentrabajo-admin-editar/ordentrabajo-admin-editar.component';
import { MaterialAdminModalComponent } from './material/material-admin-modal/material-admin-modal.component';
import { MaterialAdminEditarComponent } from './material/material-admin-editar/material-admin-editar.component';
import { ParametroAdminModalComponent } from './parametro/parametro-admin-modal/parametro-admin-modal.component';
import { ParametroAdminEditarComponent } from './parametro/parametro-admin-editar/parametro-admin-editar.component';
import {
  TipodocumentoAdminPageComponent
} from "./TipoDocumento/tipodocumento-admin-page/tipodocumento-admin-page.component";
import {TablaTipodocumentoComponent} from "./TipoDocumento/tabla-tipodocumento/tabla-tipodocumento.component";
import {
  TipodocumentoAdminModalComponent
} from "./TipoDocumento/tipodocumento-admin-modal/tipodocumento-admin-modal.component";
import {
  TipodocumentoAdminEditarComponent
} from "./TipoDocumento/tipodocumento-admin-editar/tipodocumento-admin-editar.component";
import {
  TipodocumentoAdminRegisterComponent
} from "./TipoDocumento/tipodocumento-admin-register/tipodocumento-admin-register.component";
import {
  TiposervicioAdminRegisterComponent
} from "./TipoServicio/tiposervicio-admin-register/tiposervicio-admin-register.component";
import {TiposervicioAdminPageComponent} from "./TipoServicio/tiposervicio-admin-page/tiposervicio-admin-page.component";
import {TablaTiposervicioComponent} from "./TipoServicio/tabla-tiposervicio/tabla-tiposervicio.component";
import {
  TiposervicioAdminModalComponent
} from "./TipoServicio/tiposervicio-admin-modal/tiposervicio-admin-modal.component";
import {
  TiposervicioAdminEditarComponent
} from "./TipoServicio/tiposervicio-admin-editar/tiposervicio-admin-editar.component";
import {
  TurnotrabajoRegisterPageComponent
} from "./TurnoTrabajo/turnotrabajo-admin-page/turnotrabajo-register-page.component";
import {TablaTurnotrabajoComponent} from "./TurnoTrabajo/tabla-turnotrabajo/tabla-turnotrabajo.component";
import {
  TurnotrabajoRegisterRegisterComponent
} from "./TurnoTrabajo/turnotrabajo-admin-register/turnotrabajo-register-register.component";
import {
  TurnotrabajoAdminModalComponent
} from "./TurnoTrabajo/turnotrabajo-admin-modal/turnotrabajo-admin-modal.component";
import {
  TurnotrabajoAdminEditarComponent
} from "./TurnoTrabajo/turnotrabajo-admin-editar/turnotrabajo-admin-editar.component";
import {ZonaAdminPageComponent} from "./Zona/zona-admin-page/zona-admin-page.component";
import {TablaZonaComponent} from "./Zona/tabla-zona/tabla-zona.component";
import {ZonaAdminModalComponent} from "./Zona/zona-admin-modal/zona-admin-modal.component";
import { ZonaAdminEditarComponent } from './Zona/zona-admin-editar/zona-admin-editar.component';
import {AuditoriaAdminPageComponent} from "./Auditoria/auditoria-admin-page/auditoria-admin-page.component";
import {TablaAuditoriaComponent} from "./Auditoria/tabla-auditoria/tabla-auditoria.component";
import { TelefonoAdminEditarComponent } from './Telefono/telefono-admin-editar/telefono-admin-editar.component';


@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    NavbarAdminComponent,
    HomeAdminComponent,
    AdminDashboardMainComponent,
    MaterialAdminRegisterComponent,
    OrdentrabajoAdminRegisterComponent,
    ParametroAdminPageComponent,
    TablaMaterialComponent,
    UsuarioAdminPageComponent,
    TablaUsuarioComponent,
    UsuarioAdminRegisterComponent,
    ParametroAdminPageComponent,
    CuadrillasAdminRegisterComponent,
    CuadrillaAdminPageComponent,
    TablaCuadrillaComponent,
    CuadrillaAdminModalComponent,
    UsuarioAdminModalComponent,

    ClienteAdminRegisterComponent,
    TablaClienteComponent,
    ClienteAdminPageComponent,
    ClienteAdminModalComponent,
    ClienteAdminEditarComponent,

    ProveedorAdminRegisterComponent,
    TablaProveedorComponent,
    ProveedorAdminPageComponent,
    ProveedorAdminModalComponent,
    ProveedorAdminEditarComponent,


    MaterialcuadrillaAdminRegisterComponent,
    TablaMaterialcuadrillaComponent,
    MaterialcuadrillaAdminPageComponent,
    MaterialcuadrillaAdminModalComponent,
    MaterialcuadrillaAdminEditarComponent,

    CuadrillaAdminEditarComponent,
    CuadrillaAdminEditarComponent,
    MaterialcuadrillaAdminModalComponent,
    TablaMaterialcuadrillaComponent,
    MaterialcuadrillaAdminPageComponent,
    MaterialcuadrillaAdminRegisterComponent,
    TelefonoAdminModalComponent,
    TelefonoAdminRegisterComponent,
    TelefonoAdminPageComponent,
    TablaTelefonoComponent,
    UsuarioAdminEditarComponent,

    TablaOrdentrabajoComponent,
    OrdentrabajoAdminModalComponent,
    OrdentrabajoAdminRegisterComponent,
    OrdentrabajoAdminPageComponent,
    OrdentrabajoAdminEditarComponent,

    MaterialAdminModalComponent,
    MaterialAdminEditarComponent,
    MaterialAdminPageComponent,
    TablaMaterialComponent,

    ParametroAdminModalComponent,
    ParametroAdminEditarComponent,
    ParametroAdminRegisterComponent,
    TablaParametroComponent,

    TipodocumentoAdminModalComponent,
    TipodocumentoAdminEditarComponent,
    TipodocumentoAdminPageComponent,
    TipodocumentoAdminRegisterComponent,
    TablaTipodocumentoComponent,

    TiposervicioAdminModalComponent,
    TiposervicioAdminEditarComponent,
    TiposervicioAdminRegisterComponent,
    TiposervicioAdminPageComponent,
    TablaTiposervicioComponent,

    TurnotrabajoAdminModalComponent,
    TurnotrabajoAdminEditarComponent,
    TurnotrabajoRegisterPageComponent,
    TurnotrabajoRegisterRegisterComponent,
    TablaTurnotrabajoComponent,

    ZonaAdminModalComponent,
    ZonaAdminEditarComponent,
    ZonaAdminPageComponent,
    ZonaAdminRegisterComponent,
    TablaZonaComponent,

    AuditoriaAdminPageComponent,
    TablaAuditoriaComponent,
    TelefonoAdminEditarComponent,

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
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})

export class AdminModule { }

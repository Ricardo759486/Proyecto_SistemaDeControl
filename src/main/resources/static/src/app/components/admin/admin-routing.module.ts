import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {AdminDashboardMainComponent} from "./admin-dashboard-main/admin-dashboard-main.component";
import {ProveedorAdminRegisterComponent} from "./proveedor/proveedor-admin-register/proveedor-admin-register.component";
import {CuadrillasAdminComponent} from "./cuadrillas-admin/cuadrillas-admin.component";
import {MaterialAdminComponent} from "./material-admin/material-admin.component";
import {ZonaAdminComponent} from "./zona-admin/zona-admin.component";
import {MaterialcuadrillaAdminComponent} from "./materialcuadrilla-admin/materialcuadrilla-admin.component";
import {ClienteAdminComponent} from "./cliente-admin/cliente-admin.component";
import {OrdentrabajoAdminComponent} from "./ordentrabajo-admin/ordentrabajo-admin.component";
import {ParametroAdminComponent} from "./parametro-admin/parametro-admin.component";
import {TelefonoAdminComponent} from "./telefono-admin/telefono-admin.component";
import {ProveedorAdminPageComponent} from "./proveedor/proveedor-admin-page/proveedor-admin-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeAdminComponent },
  { path: 'dashboard', component: AdminDashboardMainComponent },
  //muestra
  { path: 'provedor_admin', component: ProveedorAdminPageComponent },
  ///

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

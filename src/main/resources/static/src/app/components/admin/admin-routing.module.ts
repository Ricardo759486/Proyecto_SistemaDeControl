import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {AdminDashboardMainComponent} from "./admin-dashboard-main/admin-dashboard-main.component";
import {ProveedorAdminPageComponent} from "./proveedor/proveedor-admin-page/proveedor-admin-page.component";
import {CuadrillaAdminPageComponent} from "./cuadrilla/cuadrilla-admin-page/cuadrilla-admin-page.component";
import {UsuarioAdminPageComponent} from "./Usuario/usuario-admin-page/usuario-admin-page.component";
import {ClienteAdminPageComponent} from "./Cliente/cliente-admin-page/cliente-admin-page.component";
import {
  MaterialcuadrillaAdminPageComponent
} from "./MaterialCuadrilla/materialcuadrilla-admin-page/materialcuadrilla-admin-page.component";
import {TelefonoAdminPageComponent} from "./Telefono/telefono-admin-page/telefono-admin-page.component";
import {OrdentrabajoAdminPageComponent} from "./OrdenTrabajo/ordentrabajo-admin-page/ordentrabajo-admin-page.component";
import {MaterialAdminPageComponent} from "./material/material-admin-page/material-admin-page.component";
import {ParametroAdminPageComponent} from "./parametro/parametro-admin-page/parametro-admin-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeAdminComponent },
  { path: 'dashboard', component: AdminDashboardMainComponent },
  //muestra
  { path: 'provedor_admin', component: ProveedorAdminPageComponent },
  { path: 'cuadrilla_admin', component: CuadrillaAdminPageComponent },
  { path: 'usuario_admin', component: UsuarioAdminPageComponent },
  { path: 'cliente_admin', component: ClienteAdminPageComponent },
  { path: 'materialCuadrilla_admin', component: MaterialcuadrillaAdminPageComponent},
  { path: 'telefono_admin', component: TelefonoAdminPageComponent},
  { path: 'ordentrabajo_admin', component: OrdentrabajoAdminPageComponent},
  { path: 'material_admin', component: MaterialAdminPageComponent},
  { path: 'parametro_admin', component: ParametroAdminPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

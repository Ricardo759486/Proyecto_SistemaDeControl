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


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeAdminComponent },
  { path: 'dashboard', component: AdminDashboardMainComponent },
  //muestra
  { path: 'provedor_admin', component: ProveedorAdminPageComponent },
  { path: 'cuadrilla_admin', component: CuadrillaAdminPageComponent },
  { path: 'usuario_admin', component: UsuarioAdminPageComponent },
  { path: 'cliente_admin', component: ClienteAdminPageComponent },
  { path: 'materialcuadrilla_admin', component: MaterialcuadrillaAdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {AdminDashboardMainComponent} from "./admin-dashboard-main/admin-dashboard-main.component";
<<<<<<< HEAD
=======

>>>>>>> 3c626a14e500e8877cbb9ddeb2a1c5a119a04c3b
import {ProveedorAdminPageComponent} from "./proveedor/proveedor-admin-page/proveedor-admin-page.component";
import {CuadrillaAdminPageComponent} from "./cuadrilla/cuadrilla-admin-page/cuadrilla-admin-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeAdminComponent },
  { path: 'dashboard', component: AdminDashboardMainComponent },
  //muestra
  { path: 'provedor_admin', component: ProveedorAdminPageComponent },
  { path: 'cuadrilla_admin', component: CuadrillaAdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

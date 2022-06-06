import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {AdminDashboardMainComponent} from "./admin-dashboard-main/admin-dashboard-main.component";
import {ProveedorAdminRegisterComponent} from "./proveedor-admin-register/proveedor-admin-register.component";



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeAdminComponent },
  { path: 'dashboard', component: AdminDashboardMainComponent },
  { path: 'provedor_register', component: ProveedorAdminRegisterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {AdminDashboardMainComponent} from "./admin-dashboard-main/admin-dashboard-main.component";
import {ProveedorAdminRegisterComponent} from "./proveedor-admin-register/proveedor-admin-register.component";
import {CuadrillasAdminComponent} from "./cuadrillas-admin/cuadrillas-admin.component";
import {MaterialAdminComponent} from "./material-admin/material-admin.component";
import {ZonaAdminComponent} from "./zona-admin/zona-admin.component";
import {MaterialcuadrillaAdminComponent} from "./materialcuadrilla-admin/materialcuadrilla-admin.component";
import {ClienteAdminComponent} from "./cliente-admin/cliente-admin.component";
import {OrdentrabajoAdminComponent} from "./ordentrabajo-admin/ordentrabajo-admin.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeAdminComponent },
  { path: 'dashboard', component: AdminDashboardMainComponent },
  { path: 'cliente', component: ClienteAdminComponent },
  { path: 'provedor_register', component: ProveedorAdminRegisterComponent },
  { path: 'cuadrilla_register', component: CuadrillasAdminComponent },
  { path: 'material_register', component: MaterialAdminComponent },
  { path: 'zona_register', component: ZonaAdminComponent },
  { path: 'materialcuadrilla_register', component: MaterialcuadrillaAdminComponent },
  { path: 'ordentrabajo_register', component: OrdentrabajoAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

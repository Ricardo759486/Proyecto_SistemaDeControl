import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AdminComponent} from "../../admin/admin.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: 'admin', loadChildren: () => import('src/app/components/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

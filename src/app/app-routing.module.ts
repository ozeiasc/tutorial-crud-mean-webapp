import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FuncListComponent} from './func-list/func-list.component';
import {FuncAddComponent} from './func-add/func-add.component';
import {FuncEditComponent} from './func-edit/func-edit.component';
import {FuncGetComponent} from './func-get/func-get.component';

const routes: Routes = [
  {path: 'funcionarios', component: FuncListComponent},
  {path: 'funcionarios/adicionar', component: FuncAddComponent},
  {path: 'funcionarios/:id', component: FuncGetComponent},
  {path: 'funcionarios/:id/editar', component: FuncEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

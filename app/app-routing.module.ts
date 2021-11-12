import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './to-do-details/to-do-details.component';
import { TodoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {path:"todo-list",component:TodoListComponent},
  {path:"todo-details",component:TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

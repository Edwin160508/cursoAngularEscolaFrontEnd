import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component'
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';


const routes: Routes = [
  {path:'app-data-binding', component: DataBindingComponent},
  {path:'app-ng-if-for',component: NgIfNgForComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

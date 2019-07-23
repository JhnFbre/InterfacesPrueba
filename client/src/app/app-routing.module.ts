import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspolListComponent } from './components/espol-list/espol-list.component'
const routes: Routes = [
    {
      path: '',
      redirectTo:'/espol',
      pathMatch:'full'
    },
    {
      path:'espol',
      component: EspolListComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

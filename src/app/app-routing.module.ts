import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [

{
  path:'',component:MainContentComponent
},
{
  path:'gallery',component:GalleryComponent
},
{
  path:'employee',component:EmployeeComponent

},
{
  path:'add-employee',component:AddEmployeeComponent

},
{
  path:'lead',component:LeadsComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPhoneComponent } from 'src/phone/list-phone/list-phone.component';
import { PhoneCreateComponent } from '../phone/create-phone/create-phone.component';
import { EditPhoneComponent } from 'src/phone/edit-phone/edit-phone.component';
import { DetailPhoneComponent } from 'src/phone/detail-phone/detail-phone.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path: '', component: ListPhoneComponent },
  { path: 'detail/:id', component: DetailPhoneComponent },
  { path: 'create', component: PhoneCreateComponent },
  { path: 'update/:id', component: EditPhoneComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

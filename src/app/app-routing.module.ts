import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatlleComponent } from './seatlle/seatlle.component'
import { SanJoseComponent } from './san-jose/san-jose.component'
import { BurbankComponent } from './burbank/burbank.component'
import { DallasComponent } from './dallas/dallas.component'
import { DcComponent } from './dc/dc.component'
import { ChicagoComponent } from './chicago/chicago.component'

const routes: Routes = [
  {path:"SEA", component:SeatlleComponent},
  {path:"SJC", component:SanJoseComponent},
  {path:"BBK", component:BurbankComponent},
  {path:"DAL", component:DallasComponent},
  {path:"WSH", component:DcComponent},
  {path:"CHI", component:ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

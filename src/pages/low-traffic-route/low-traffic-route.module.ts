import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LowTrafficRoutePage } from './low-traffic-route';

@NgModule({
  declarations: [
    LowTrafficRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(LowTrafficRoutePage),
  ],
})
export class LowTrafficRoutePageModule {}

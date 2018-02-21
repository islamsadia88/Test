import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearestHospitalsPage } from './nearest-hospitals';

@NgModule({
  declarations: [
    NearestHospitalsPage,
  ],
  imports: [
    IonicPageModule.forChild(NearestHospitalsPage),
  ],
})
export class NearestHospitalsPageModule {}

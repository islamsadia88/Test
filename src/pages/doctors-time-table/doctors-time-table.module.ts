import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorsTimeTablePage } from './doctors-time-table';

@NgModule({
  declarations: [
    DoctorsTimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorsTimeTablePage),
  ],
})
export class DoctorsTimeTablePageModule {}

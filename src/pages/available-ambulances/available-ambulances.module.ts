import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableAmbulancesPage } from './available-ambulances';

@NgModule({
  declarations: [
    AvailableAmbulancesPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableAmbulancesPage),
  ],
})
export class AvailableAmbulancesPageModule {}

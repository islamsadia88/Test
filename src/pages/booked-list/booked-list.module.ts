import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookedListPage } from './booked-list';

@NgModule({
  declarations: [
    BookedListPage,
  ],
  imports: [
    IonicPageModule.forChild(BookedListPage),
  ],
})
export class BookedListPageModule {}

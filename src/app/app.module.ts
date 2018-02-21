import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EmergencyServicesPage } from '../pages/emergency-services/emergency-services';
import { AppointmentServicesPage } from '../pages/appointment-services/appointment-services';
import { AvailableAmbulancesPage } from '../pages/available-ambulances/available-ambulances';
import { NearestHospitalsPage } from '../pages/nearest-hospitals/nearest-hospitals';
import { MapPage } from '../pages/map/map';
import { LowTrafficRoutePage } from '../pages/low-traffic-route/low-traffic-route';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { BookAppointmentPage } from '../pages/book-appointment/book-appointment';
import { DoctorsListPage } from '../pages/doctors-list/doctors-list';
import { BookingConfirmationPage } from '../pages/booking-confirmation/booking-confirmation';
import { BookedListPage } from '../pages/booked-list/booked-list';
import { TrackPage } from '../pages/track/track';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { DataServicesProvider } from '../providers/data-services/data-services';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmergencyServicesPage,
    AppointmentServicesPage,
    AvailableAmbulancesPage,
    NearestHospitalsPage,
    MapPage,
    LowTrafficRoutePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    BookAppointmentPage,
    DoctorsListPage,
    BookingConfirmationPage,
    BookedListPage,
    TrackPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmergencyServicesPage,
    AppointmentServicesPage,
    AvailableAmbulancesPage,
    NearestHospitalsPage,
    MapPage,
    LowTrafficRoutePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    BookAppointmentPage,
    DoctorsListPage,
    BookingConfirmationPage,
    BookedListPage,
    TrackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SMS,
    CallNumber,
    DataServicesProvider,
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { MapComponent } from './map/map.component';
import { ItemComponent } from './item/item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RatingComponent } from './rating/rating.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    MapComponent,
    ItemComponent,
    SidebarComponent,
    ContactsComponent,
    ProfileComponent,
    RatingComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'shift'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,


    AngularFireStorageModule, AppRoutingModule // imports firebase/storage only needed for storage features
    , AgmCoreModule.forRoot({apiKey: 'AIzaSyDto-rKAiwBF-dAXkGd562U1pJtJUU3p3Q'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

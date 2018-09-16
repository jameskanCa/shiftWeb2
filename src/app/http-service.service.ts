import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseApp } from '../../node_modules/@angular/fire';
import 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  image: string;
  constructor(firebaseApp: FirebaseApp) {
    }


}

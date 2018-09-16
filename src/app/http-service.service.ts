import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
    items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
   }
}

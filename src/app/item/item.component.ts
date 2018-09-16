import { Component, OnInit } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/storage';
import { HttpServiceService } from '../http-service.service';
import { FirebaseApp } from '../../../node_modules/@angular/fire';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 // items: Observable<any[]>;
 image: string;
  constructor(firebaseApp: FirebaseApp) {
    const storageRef = firebaseApp.storage().ref().child('pictures');
    storageRef.getDownloadURL().then(url => this.image = url);
  }

  ngOnInit() {
  }


}

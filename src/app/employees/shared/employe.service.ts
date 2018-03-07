import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Employe } from './employe';
import { Demo } from '../demo';
import { Discussion } from '../../community-users/shared/discussion';
@Injectable()
export class EmployeService {

  itemsCollection: AngularFirestoreCollection<Employe>;
  items: Observable<Employe[]>;
  itemDoc: AngularFirestoreDocument<Employe>;

  itemsCollection_discussion: AngularFirestoreCollection<Discussion>;
  items_discussion: Observable<Discussion[]>;
  itemDoc_discussion: AngularFirestoreDocument<Discussion>;


  employe_name: string;
  employe_salary: string;
  employe_office: string;
  employe_position: string;

  employelist: AngularFireList<any> = <any>[];

  /*seletedEmployee: Employe = <Employe>{
    Employe_name: 'umer',
    salary: '2500',
    office: 'wah',
    position: 'manager',
     demo: <Demo>{
      demo_name: 'farooq',
      demo_office: 'islamabadcantt'
    }
  };
*/
// tslint:disable-next-line:whitespace
  demolist: Demo  = <Demo>{
    demo_name: 'farooq',
    demo_office: 'islamabadcantt'
  };

  demo: Demo[] = [];

  seletedEmployee: Employe = <Employe>{
    Employe_name: 'umer',
    salary: '2500',
    office: 'wah',
    position: 'manager'
  };


  /*employe: Employe = <Employe>{
    $key: 'KHaQ0HOzyFHc0S54xiQx',
    Employe_name: 'umer',
    salary: '250085',
    office: 'wah',
    position: 'manager',
    demo: <Demo>{
      demo_name: 'farooq',
      demo_office: 'islamabadcantt'
    }
  };*/
  constructor(public afs: AngularFirestore) {

    this.itemsCollection_discussion = this.afs.collection('discussion', ref => ref.orderBy('votes', 'asc'));
    this.items_discussion = this.itemsCollection_discussion.valueChanges();

    this.itemsCollection = this.afs.collection('employees', ref => ref.orderBy('salary', 'asc'));
    this.items = this.itemsCollection.valueChanges();


    /*this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Employe;
        data.$key = a.payload.doc.id;
        return data;
      });
    });*/
    this.demo.push(this.demolist);
    this.seletedEmployee.demo = this.demo;
  }
  /*
  getData(){
    this.employelist = this.firebase.list('employees');
    console.log(this.employelist);
    return this.employelist;
  }
  insertEmployee(employee : Employe){
    this.employe_name = employee.getname();
    this.employe_office = employee.getoffice();
    this.employe_position = employee.getposition();
    this.employe_salary = employee.getsalary();
    console.log(this.employe_name);
    console.log(this.employe_office);
    console.log(this.employe_position);
    console.log(this.employe_salary);

    const promise = this.employelist.push( {
      Employe_name: this.employe_name,
      position:   this.employe_position,
      office: this.employe_office,
      salary: this.employe_salary

    });
    console.log(promise.key);
  }
  deleteEmployee($key: string){
    this.employelist.remove($key);
  }
  */
  getData(): Observable<Employe[]> {
    this.items.subscribe(data => console.log(data));
    return this.items;
  }
  adddiscussion(item: Discussion) {
    this.itemsCollection_discussion.add(item);
  }
  addItem(item: Employe) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Employe) {
    this.itemDoc = this.afs.doc(`employees/${item.$key}`);
    this.itemDoc.delete();
  }

  updateItem(item: Employe) {
    this.itemDoc = this.afs.doc(`employees/${item.$key}`);
    this.itemDoc.update(item);
  }
}

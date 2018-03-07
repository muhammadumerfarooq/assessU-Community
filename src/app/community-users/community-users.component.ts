import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Discussion } from '../community-users/shared/discussion';
import 'rxjs/add/observable/interval';
import { Users } from '../community-users/shared/users';
import { UsersService } from '../community-users/users/users.service';
import { CommunityuserService } from '../community-users/communityuser.service';
import { Message } from './shared/message';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataserviceService } from '../community-users/dataservice.service';
@Component({
  selector: 'app-community-users',
  templateUrl: './community-users.component.html',
  styleUrls: ['./community-users.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class CommunityUsersComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  itemCount: number = 4;
  // tslint:disable-next-line:no-inferrable-types
  btnText: string = 'Insert';
    // tslint:disable-next-line:no-inferrable-types
  goalText: string = '';
  goals = [];
  date: Date;
  Users: Users = <Users>{
    useremail: '140321@nu.edu.pk  ',
    username: 'umer'
  };
  mesagelist: Message = <Message>{

    answer: '',
    answer_useremail: 'khan',
    votes: ''
  };
  mesagelist2: Message = <Message>{

    answer: '',
    answer_useremail: 'bahadur',
    votes: ''
  };
  messages: Message[] = [];

  Discussion: Discussion = <Discussion>{
    discussion_key: 'S39ahhy4YrpEjAFdmpv4',
    discussion_topic: 'hellome',
    discussion_email: '',
    votes: '',
  };
  UsersList: Users[] = [];
  DiscussionList: Discussion[] = [];

   itemsCollection_discussion: AngularFirestoreCollection<Discussion>;
   items_discussion: Observable<Discussion[]>;
   itemDoc_discussion: AngularFirestoreDocument<Discussion>;
    items_users: Observable<Users[]>;
  private sub;
  // tslint:disable-next-line:max-line-length
  constructor(private _data: DataserviceService, af: AngularFirestore, private communityuserService: CommunityuserService, private userservice: UsersService) {
    this.messages.push(this.mesagelist);
    this.messages.push(this.mesagelist2);

    this.Discussion.messages = this.messages;

    /*this.sub = Observable.interval(10000)
    .subscribe((val) => { console.log('called'); });
*/  // this.userservice.getuserData().then(list => this.UsersList = list);
   // this.communityuserService.adddiscussion(this.Discussion);
    this.communityuserService.updatediscussion(this.Discussion);
   // this.communityuserService.getData().then(list => this.DiscussionList = list);
  // this.communityuserService.adddiscussion(this.Discussion);
 //   console.log('userlist ' + this.UsersList.length + ' ' );
}
  showdata() {
    console.log('list ' + this.UsersList.length);
  }

  ngOnInit() {

    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;

    this._data.changeGoal(this.goals);
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}

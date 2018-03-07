import { Component, OnInit } from '@angular/core';
import { Employe } from '../employees/shared/employe';
import { EmployeService } from '../employees/shared/employe.service';
import { Console } from '@angular/core/src/console';
import { Demo } from '../employees/demo';
import { Discussion } from '../community-users/shared/discussion';
import { Message } from '../community-users/shared/message';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  demolist: Demo = <Demo>{
    demo_name: 'farooq',
    demo_office: 'islamabadcantt'
  };
  mesagelist: Message = <Message>{

    answer: '',
    answer_useremail: '',
    votes: ''
  };
  messages: Message[] = [];

  Discussion: Discussion = <Discussion> {
  discussion_key: '',
  discussion_topic: '',
  votes: '',
};

  demo: Demo[] = [];

  employe: Employe = <Employe>{
    Employe_name: 'umer',
    salary: '2500',
    office: 'wah',
    position: 'manager'
  };
  constructor(private employe_Service: EmployeService) { }
  private sub;
  ngOnInit() {
   // this.demo.push(this.demolist);
   // this.employe.demo = this.demo;
  //  this.employe_Service.addItem(this.employe);
  this.messages.push(this.mesagelist);
  this.Discussion.messages = this.messages;

    // this.employe_Service.getData();
    // this.employe_Service.updateItem(this.employe);
    /*console.log(this.employe_Service.employe_name );
    console.log(this.employe_Service.employe_office);
    console.log(this.employe_Service.employe_position);
    console.log(this.employe_Service.employe_salary);*/
    this.sub = Observable.interval(10000)
      .subscribe((val) => { console.log('called'); });

  }

}

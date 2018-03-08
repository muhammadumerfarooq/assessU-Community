import { Component, OnInit, Inject } from '@angular/core';
import { Users } from '../shared/users';
import { Discussion } from '../shared/discussion';
import { AddQuestionService } from '../add-question.service';
import { Message } from '../shared/message';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-adddiscussion',
  templateUrl: './adddiscussion.component.html',
  styleUrls: ['./adddiscussion.component.css']
})
export class AdddiscussionComponent implements OnInit {
  messagelist: Message = <Message>{
   answer: '',
   answer_useremail: '',
   votes: '',
 };
  messages: Message[] = [];

  Discussion: Discussion = <Discussion>{
    discussion_key: '',
    discussion_topic: '',
    discussion_email: 'umer@nu.edu.pk',
    discussion_question: '',
    votes: '0',
    status: 'open'
  };

  // tslint:disable-next-line:no-inferrable-types
  topic: string = '';
  // tslint:disable-next-line:no-inferrable-types
  question: string = '';

  constructor(private AddQuestion: AddQuestionService, private route: ActivatedRoute,
    private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService ) {
    this.messages.push(this.messagelist);
    this.Discussion.messages = this.messages;

  }

  ngOnInit() {
  }

  addquestions() {
    if (this.topic !== '' && this.question !== '') {
    // this.Discussion.discussion_email = '';
     this.Discussion.discussion_question = this.question;
     this.Discussion.discussion_topic = this.topic;
     this.AddQuestion.adddiscussion(this.Discussion);
      this.AddQuestion.getDiscussionData(this.Discussion.discussion_email);
      this.saveInLocal('useremail', this.Discussion.discussion_email);
    } else {
    }
  }
  saveInLocal(key, val): void {
    console.log('==> recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
     // this.data[key] = this.storage.get(key);

  }
  CommunityPage() {
    this.router.navigateByUrl('/community-users');
  }
}

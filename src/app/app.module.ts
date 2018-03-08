import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeComponent } from './employees/employe/employe.component';
// import { EmployeService } from './employees/shared/employe.service';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { CommunityUsersComponent } from './community-users/community-users.component';
import { CommunityuserService } from './community-users/communityuser.service';
import { UsersService } from './community-users/users/users.service';
import { DataserviceService } from './community-users/dataservice.service';
// import { SelectedDiscussionComponent } from './community-users/selected-discussion/selected-discussion.component';
import { routing } from './app.routes';
import { ViewOnlyService } from './community-users/view-only.service';
import { UpdateServiceService } from './community-users/update-service.service';
import { AdddiscussionComponent } from './community-users/adddiscussion/adddiscussion.component';
import { AddQuestionService } from './community-users/add-question.service';
import { StorageServiceModule } from 'angular-webstorage-service';
import { GetuserinfoService } from './community-users/getuserinfo.service';
import { UserLoginComponent } from './community-users/adddiscussion/user-login.component';
import { AdduserdataService } from './community-users/users/adduserdata.service';

@NgModule({
  declarations: [
    AppComponent,
    CommunityUsersComponent,
    // SelectedDiscussionComponent,
    AdddiscussionComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    routing,
    StorageServiceModule
  ],
  // tslint:disable-next-line:max-line-length
  providers: [GetuserinfoService, AngularFirestore, AdduserdataService, CommunityuserService, UsersService, DataserviceService, ViewOnlyService, UpdateServiceService, AddQuestionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

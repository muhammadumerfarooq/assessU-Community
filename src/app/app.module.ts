import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeComponent } from './employees/employe/employe.component';
import { EmployeService } from './employees/shared/employe.service';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { CommunityUsersComponent } from './community-users/community-users.component';
import { CommunityuserService } from './community-users/communityuser.service';
import { UsersService } from './community-users/users/users.service';
import { DataserviceService } from './community-users/dataservice.service';
import { SelectedDiscussionComponent } from './community-users/selected-discussion/selected-discussion.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeComponent,
    CommunityUsersComponent,
    SelectedDiscussionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeService, AngularFirestore, CommunityuserService, UsersService, DataserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

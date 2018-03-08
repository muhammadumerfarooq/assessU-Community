import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { provideRoutes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommunityUsersComponent } from './community-users/community-users.component';
// import { SelectedDiscussionComponent } from './community-users/selected-discussion/selected-discussion.component';
import { AdddiscussionComponent } from './community-users/adddiscussion/adddiscussion.component';
import { UserLoginComponent } from './community-users/adddiscussion/user-login.component';
export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'user-login', pathMatch: 'full' },
    { path: 'community-users', component: CommunityUsersComponent },
    { path: 'add-discussion', component: AdddiscussionComponent },
    { path: 'user-login', component: UserLoginComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });


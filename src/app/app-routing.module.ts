import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from "./auth-guard.guard";

// steps of using routing
// 0. initialize
// 1. config route table: 请求路径的时候，导航到的组件
// 2. 配置路由出口以及路由导航链接

import {SigninComponent} from './signin/signin.component'
import {SignupComponent} from './signup/signup.component'

import {ContactListComponent} from './contact-list/contact-list.component'
import { ContactEditComponent } from "./contact-edit/contact-edit.component";
import { ContactNewComponent } from "./contact-new/contact-new.component";

import { TagListComponent } from "./tag-list/tag-list.component";
import { TagNewComponent } from "./tag-new/tag-new.component";
import { TagEditComponent } from "./tag-edit/tag-edit.component";
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contacts', component: LayoutComponent, canActivate: [AuthGuardGuard], children: [
    {path: '', component: ContactListComponent},
    {path: 'new', component: ContactNewComponent},
    {path: 'edit/:id', component: ContactEditComponent}
  ]},
  {path: 'tags', component: LayoutComponent, canActivate: [AuthGuardGuard], children: [
    {path: '', component: TagListComponent},
    {path: 'new', component: TagNewComponent},
    {path: 'edit/:id', component: TagEditComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

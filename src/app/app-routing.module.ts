import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {MembersResolver} from './resolvers/members.resolver';
import {MemberResolver} from './resolvers/member.resolver';


const routes: Routes = [
    {path: '', redirectTo: 'member-list', pathMatch: 'full'},
    {path: 'member-list', component: MemberListComponent},
    {
        path: 'member-form', component: MemberFormComponent, resolve: {memberOptions: MembersResolver}
    },
    {
        path: 'member-form/:id', component: MemberFormComponent, resolve: {member: MemberResolver, memberOptions: MembersResolver}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

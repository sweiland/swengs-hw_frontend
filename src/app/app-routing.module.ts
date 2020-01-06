import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {MembersResolver} from './resolvers/members.resolver';
import {MemberResolver} from './resolvers/member.resolver';
import {HabitListComponent} from './habit-list/habit-list.component';
import {HabitFormComponent} from './habit-form/habit-form.component';
import {TypeResolver} from './resolvers/type.resolver';
import {HabitResolver} from './resolvers/habit.resolver';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'member-list', component: MemberListComponent, canActivate: [AuthGuard]},
    {
        path: 'member-form', component: MemberFormComponent, resolve: {memberOptions: MembersResolver}, canActivate: [AuthGuard]
    },
    {
        path: 'member-form/:id',
        component: MemberFormComponent,
        resolve: {member: MemberResolver, memberOptions: MembersResolver},
        canActivate: [AuthGuard]
    },
    {path: 'habit-list', component: HabitListComponent, canActivate: [AuthGuard]},
    {
        path: 'habit-form',
        component: HabitFormComponent,
        resolve: {memberOptions: MembersResolver, typeOptions: TypeResolver},
        canActivate: [AuthGuard]
    },
    {
        path: 'habit-form/:id',
        component: HabitFormComponent,
        resolve: {habit: HabitResolver, memberOptions: MembersResolver, typeOptions: TypeResolver}, canActivate: [AuthGuard]
    },
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

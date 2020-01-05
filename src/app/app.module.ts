import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MemberListComponent} from './member-list/member-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule, MatDatepickerModule,
    MatInputModule,
    MatMenuModule, MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {MemberFormComponent} from './member-form/member-form.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitFormComponent } from './habit-form/habit-form.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
    declarations: [
        AppComponent,
        MemberListComponent,
        MemberFormComponent,
        HabitListComponent,
        HabitFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatCardModule,
        MatDatepickerModule,
        MatMomentDateModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { ProcessingComponent } from './processing/processing.component';
import { ActivityComponent } from './activity/activity.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UserService } from './services/user.service';

 
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProcessingComponent,
    ActivityComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}


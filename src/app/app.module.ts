import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EnumToStringPipe } from './pipes/enum-to-string.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCardModule } from '@angular/material/card'; 
import {  MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select'; 

import { UserListComponent } from './components/user-list/user-list.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatInputModule } from '@angular/material/input'; 

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MessageBoxComponent,
    UserDetailsComponent,
    EnumToStringPipe,
    FilterUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

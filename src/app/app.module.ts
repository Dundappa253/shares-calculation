import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddShareDetailPopup } from './popup/add-share-detail-popup';



@NgModule({
  declarations: [
    AppComponent,
    AddShareDetailPopup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [AddShareDetailPopup],
  bootstrap: [AppComponent],
  entryComponents:[AddShareDetailPopup]
})
export class AppModule { }

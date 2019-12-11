import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { PensionersComponent } from './pensioners/pensioners.component';
import { PensionerComponent } from './pensioner/pensioner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableBaseComponent} from "./table-base/table-base.component";
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule, MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PensionerAddFormComponent } from './pensioner-add-form/pensioner-add-form.component';
import {MessageComponent} from "./message/message.component";
import {SnackbarService} from "./snackbar.service";
import {FormService} from "./form.service";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TableBaseComponent,
    PensionersComponent,
    PensionerComponent,
    PensionerAddFormComponent,
    MessageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  providers: [
    AppService,
    FormService,
    SnackbarService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  entryComponents: [
    MessageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SpecificProjectComponent } from './specific-project/specific-project.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectsListComponent,
    SpecificProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

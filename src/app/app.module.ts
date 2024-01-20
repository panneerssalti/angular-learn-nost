import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComAComponent } from './com-a/com-a.component';
import { NoEncapsulationComponent } from './encapsulation/no-encapsulation/no-encapsulation.component';
import { ShadowEncapsulationComponent } from './encapsulation/shadow-encapsulation/shadow-encapsulation.component';
import { EmulatedEncapsulationComponent } from './encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ChildSetterComponent } from './parent-child/child-setter/child-setter.component';
import { ChildVersionComponent } from './parent-child/child-version/child-version.component';

@NgModule({
  declarations: [
    AppComponent,
    ComAComponent,
    NoEncapsulationComponent,
    ShadowEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ParentComponent,
    ChildComponent,
    ChildSetterComponent,
    ChildVersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

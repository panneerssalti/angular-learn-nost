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
import { ChildLocalVariableComponent } from './parent-child/child-local-variable/child-local-variable.component';
import { TemplatesComponent } from './templates/templates.component';
import { ChildComComponent } from './parent-child-com/child-com/child-com.component';
import { ParentComComponent } from './parent-child-com/parent-com/parent-com.component';
import { CpParentComponent } from './content-projection/cp-parent/cp-parent.component';
import { CpChildComponent } from './content-projection/cp-child/cp-child.component';
import { AdComponentComponent } from './dynamic-component/ad-component/ad-component.component';
import { TemplateExperimentComponent } from './templates/template-experiment/template-experiment.component';
import { PipesComponent } from './pipes/pipes.component';
import { ConcatenatePipe } from './pipes/concatenate.pipe';
import { DirectiveCheckComponent } from './directive-check/directive-check.component';

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
    ChildVersionComponent,
    ChildLocalVariableComponent,
    TemplatesComponent,
    ChildComComponent,
    ParentComComponent,
    CpParentComponent,
    CpChildComponent,
    AdComponentComponent,
    TemplateExperimentComponent,
    PipesComponent,
    ConcatenatePipe,
    DirectiveCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

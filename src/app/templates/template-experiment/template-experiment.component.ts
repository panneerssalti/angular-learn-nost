import { Component } from '@angular/core';

@Component({
  selector: 'app-template-experiment',
  templateUrl: './template-experiment.component.html',
  styleUrl: './template-experiment.component.css'
})
export class TemplateExperimentComponent {
  variableOne:string = 'panneer';
  stringArray:string[] = ['one','two','three','four'];
  classArray:string[] = ['blue-text', 'underline-text'];
  classObject:Record<string,boolean> = {'blue-text':true,'underline-text':true};

}

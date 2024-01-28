import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {

  constructor(private el:ElementRef) { }
  @Input({
    required:false
  }) appHighlight = '';
  @Input() defaultColor = '';

  @HostListener('mouseenter') onMouseEnter():void{
      this.highlight(this.appHighlight||this.defaultColor||'red');
  }

  highlight(color:string):void{
    this.el.nativeElement.style.backgroundColor = color;
  }

}

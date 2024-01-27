import { Component, ContentChild, Directive, HostBinding, HostListener, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appContent]'
})
export class ContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Directive({selector: 'button[appContentToggle]',})
export class ContentToggleDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.cpChild.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.cpChild.contentId;
  @HostListener('click') toggleContent() {
    this.cpChild.expanded = !this.cpChild.expanded;
  }
  constructor(public cpChild: CpChildComponent) {}
}

let nextId = 0;

@Component({
  selector: 'app-cp-child',
  templateUrl: './cp-child.component.html',
  styleUrl: './cp-child.component.css'
})
export class CpChildComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;

  @ContentChild(ContentDirective) content!: ContentDirective;
}

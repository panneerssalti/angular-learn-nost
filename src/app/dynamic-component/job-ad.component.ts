import { Component, Input } from '@angular/core';

@Component({
    template: `
    <div>
      <h4>{{ headline }}</h4>
      {{ body }}
    </div>
  `
})
export class AdComponentComponent {
    @Input() headline!: string;
    @Input() body!: string;
}

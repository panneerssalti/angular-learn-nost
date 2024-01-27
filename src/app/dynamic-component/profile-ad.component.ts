import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div>
      <h3>Featured Hero Profile</h3>
      <h4>{{ name }}</h4>
      <p>{{ bio }}</p>
      <strong>Hire this hero today!</strong>
    </div>
  `,
})
export class HeroProfileComponent {
  @Input() name!: string;
  @Input() bio!: string;
}
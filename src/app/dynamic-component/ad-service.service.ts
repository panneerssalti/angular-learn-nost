import { Injectable, Type } from "@angular/core";
import { HeroProfileComponent } from "./profile-ad.component";
import { AdComponentComponent } from "./job-ad.component";

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      {
        component: HeroProfileComponent,
        inputs: { name: 'Dr. IQ', bio: 'Smart as they come' },
      },
      {
        component: HeroProfileComponent,
        inputs: { name: 'Bombasto', bio: 'Brave as they come' },
      },
      {
        component: AdComponentComponent,
        inputs: {
          headline: 'Hiring for several positions',
          body: 'Submit your resume today!',
        },
      },
      {
        component: AdComponentComponent,
        inputs: {
          headline: 'Openings in all departments',
          body: 'Apply today',
        },
      },
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}
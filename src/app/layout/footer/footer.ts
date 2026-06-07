import { Component } from '@angular/core';
import { SOCIAL_NETWORKS } from '../../core/social-networks';

@Component({
  selector: 'migala-footer',
  templateUrl: './footer.html'
})
export class Footer {
  protected readonly socialNetworks = SOCIAL_NETWORKS;
}

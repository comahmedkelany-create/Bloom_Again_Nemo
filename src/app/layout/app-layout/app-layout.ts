import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FlowersBackgroundComponent } from '../../components/background/flowers-background/flowers-background';
import { EnvelopeComponent } from '../../components/envelope/envelope';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [FlowersBackgroundComponent, EnvelopeComponent],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {
  isEnvelopeOpen = signal(false);

  toggleEnvelope() {
    this.isEnvelopeOpen.update((value) => !value);
  }
}

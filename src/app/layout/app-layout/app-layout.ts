import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FlowersBackgroundComponent } from '../../components/background/flowers-background/flowers-background';
import { EnvelopeComponent } from '../../components/envelope/envelope';
import { Message } from '../../models/message/message.model';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [FlowersBackgroundComponent, EnvelopeComponent],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {
  isEnvelopeOpen = signal(false);

  // Sample message - will be replaced by MessageService in Phase 4
  currentMessage = signal<Message>({
    id: 1,
    slug: 'bloom-again',
    title: 'Bloom Again',
    stationery: 'RoseGarden',
    message: [
      'تزهر الأزهار مرة أخرى.',
      'مثل كل شيء جميل، تعود الذكريات.',
      'شكراً لك على هذه اللحظة الخاصة.',
    ],
  });

  toggleEnvelope() {
    this.isEnvelopeOpen.update((value) => !value);
  }
}

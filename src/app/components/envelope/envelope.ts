import { Component, Input } from '@angular/core';
import { LetterComponent } from '../letter/letter';
import { Message } from '../../models/message/message.model';

@Component({
  selector: 'app-envelope',
  standalone: true,
  imports: [LetterComponent],
  templateUrl: './envelope.html',
  styleUrl: './envelope.css',
})
export class EnvelopeComponent {
  @Input()
  isOpen = false;

  @Input()
  message: Message | null = null;
}

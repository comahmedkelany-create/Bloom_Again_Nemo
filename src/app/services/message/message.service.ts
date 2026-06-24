import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Message } from '../../models/message/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [];
  private isLoaded = false;

  constructor(private http: HttpClient) {}

  /**
   * Load messages from messages.json
   * Caches the result for subsequent calls
   */
  async load(): Promise<Message[]> {
    if (this.isLoaded) {
      return this.messages;
    }

    const data = await firstValueFrom(
      this.http.get<{ messages: Message[] }>('data/content/messages.json'),
    );

    this.messages = data.messages || [];
    this.isLoaded = true;

    return this.messages;
  }

  /**
   * Get all messages
   */
  getAll(): Message[] {
    return [...this.messages];
  }

  /**
   * Get message by ID
   */
  getById(id: number): Message | undefined {
    return this.messages.find((msg) => msg.id === id);
  }

  /**
   * Get message by slug
   */
  getBySlug(slug: string): Message | undefined {
    return this.messages.find((msg) => msg.slug === slug);
  }

  /**
   * Check if message exists
   */
  exists(id: number): boolean {
    return this.messages.some((msg) => msg.id === id);
  }

  /**
   * Check if message exists by slug
   */
  existsBySlug(slug: string): boolean {
    return this.messages.some((msg) => msg.slug === slug);
  }
}

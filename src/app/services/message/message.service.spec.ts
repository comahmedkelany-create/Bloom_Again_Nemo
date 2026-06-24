import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { Message } from '../../models/message/message.model';

describe('MessageService', () => {
  let service: MessageService;
  let httpMock: HttpTestingController;

  const mockMessages: Message[] = [
    {
      id: 1,
      slug: 'bloom-again',
      title: 'Bloom Again',
      stationery: 'RoseGarden',
      message: ['تزهر الأزهار مرة أخرى.', 'مثل كل شيء جميل، تعود الذكريات.'],
    },
    {
      id: 2,
      slug: 'second-message',
      title: 'Second Message',
      stationery: 'LavenderSky',
      message: ['هذه الرسالة الثانية.'],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService],
    });

    service = TestBed.inject(MessageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load messages from JSON', async () => {
    const loadPromise = service.load();

    const req = httpMock.expectOne('data/content/messages.json');
    expect(req.request.method).toBe('GET');

    req.flush({ messages: mockMessages });

    const result = await loadPromise;
    expect(result.length).toBe(2);
    expect(result[0].slug).toBe('bloom-again');
  });

  it('should cache messages on subsequent loads', async () => {
    // First load
    const firstLoad = service.load();
    const req1 = httpMock.expectOne('data/content/messages.json');
    req1.flush({ messages: mockMessages });
    await firstLoad;

    // Second load - should not make another HTTP request
    const secondLoad = service.load();
    const result = await secondLoad;

    expect(result.length).toBe(2);
    httpMock.expectNone('data/content/messages.json');
  });

  it('should get all messages', async () => {
    await service.load();
    const req = httpMock.expectOne('data/content/messages.json');
    req.flush({ messages: mockMessages });

    const all = service.getAll();
    expect(all.length).toBe(2);
  });

  it('should get message by ID', async () => {
    await service.load();
    const req = httpMock.expectOne('data/content/messages.json');
    req.flush({ messages: mockMessages });

    const message = service.getById(1);
    expect(message?.slug).toBe('bloom-again');
  });

  it('should return undefined for non-existent ID', async () => {
    await service.load();
    const req = httpMock.expectOne('data/content/messages.json');
    req.flush({ messages: mockMessages });

    const message = service.getById(999);
    expect(message).toBeUndefined();
  });

  it('should get message by slug', async () => {
    await service.load();
    const req = httpMock.expectOne('data/content/messages.json');
    req.flush({ messages: mockMessages });

    const message = service.getBySlug('bloom-again');
    expect(message?.id).toBe(1);
  });

  it('should return undefined for non-existent slug', async () => {
    await service.load();
    const req = httpMock.expectOne('data/content/messages.json');
    req.flush({ messages: mockMessages });

    const message = service.getBySlug('non-existent');
    expect(message).toBeUndefined();
  });

  it('should check if message exists by ID', async () => {
    await service.load();
    const req = httpMock.expectOne('data/content/messages.json');
    req.flush({ messages: mockMessages });

    expect(service.exists(1)).toBe(true);
    expect(service.exists(999)).toBe(false);
  });

  it('should check if message exists by slug', async () => {
    await service.load();
    const req = httpMock.expectOne('data/content/messages.json');
    req.flush({ messages: mockMessages });

    expect(service.existsBySlug('bloom-again')).toBe(true);
    expect(service.existsBySlug('non-existent')).toBe(false);
  });
});

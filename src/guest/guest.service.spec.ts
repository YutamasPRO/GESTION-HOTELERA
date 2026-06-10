import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GuestService } from './guest.service';
import { Guest } from './entities/guest.entity';

describe('GuestService', () => {
  let service: GuestService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GuestService,
        {
          provide: getRepositoryToken(Guest),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<GuestService>(GuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

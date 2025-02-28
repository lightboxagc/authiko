import { Test, TestingModule } from '@nestjs/testing';
import { AuthikoService } from './authiko.service';

describe('AuthikoService', () => {
  let service: AuthikoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthikoService],
    }).compile();

    service = module.get<AuthikoService>(AuthikoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

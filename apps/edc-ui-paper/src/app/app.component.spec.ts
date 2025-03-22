import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Emby Data Check: AppComponent for Angular UI using the Paper Design', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture).toBeTruthy();
  });
});

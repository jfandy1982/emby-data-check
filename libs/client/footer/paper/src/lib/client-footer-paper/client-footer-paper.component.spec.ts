import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFooterPaperComponent } from './client-footer-paper.component';

describe('ClientFooterPaperComponent', () => {
  let component: ClientFooterPaperComponent;
  let fixture: ComponentFixture<ClientFooterPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFooterPaperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientFooterPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

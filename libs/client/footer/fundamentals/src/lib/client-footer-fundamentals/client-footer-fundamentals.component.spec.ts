import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFooterFundamentalsComponent } from './client-footer-fundamentals.component';

describe('ClientFooterFundamentalsComponent', () => {
  let component: ClientFooterFundamentalsComponent;
  let fixture: ComponentFixture<ClientFooterFundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFooterFundamentalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientFooterFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

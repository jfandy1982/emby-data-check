import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFooterNordComponent } from './client-footer-nord.component';

describe('ClientFooterNordComponent', () => {
  let component: ClientFooterNordComponent;
  let fixture: ComponentFixture<ClientFooterNordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFooterNordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientFooterNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

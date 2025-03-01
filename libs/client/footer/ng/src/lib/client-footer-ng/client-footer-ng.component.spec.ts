import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFooterNgComponent } from './client-footer-ng.component';

describe('ClientFooterNgComponent', () => {
  let component: ClientFooterNgComponent;
  let fixture: ComponentFixture<ClientFooterNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFooterNgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientFooterNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

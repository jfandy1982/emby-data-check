import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientHeaderFundamentalsComponent } from './client-header-fundamentals.component';

describe('ClientHeaderFundamentalsComponent', () => {
  let component: ClientHeaderFundamentalsComponent;
  let fixture: ComponentFixture<ClientHeaderFundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientHeaderFundamentalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientHeaderFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientHeaderNordComponent } from './client-header-nord.component';

describe('ClientHeaderNordComponent', () => {
  let component: ClientHeaderNordComponent;
  let fixture: ComponentFixture<ClientHeaderNordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientHeaderNordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientHeaderNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

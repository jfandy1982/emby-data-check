import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientHeaderNgComponent } from './client-header-ng.component';

describe('ClientHeaderNgComponent', () => {
  let component: ClientHeaderNgComponent;
  let fixture: ComponentFixture<ClientHeaderNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientHeaderNgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientHeaderNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

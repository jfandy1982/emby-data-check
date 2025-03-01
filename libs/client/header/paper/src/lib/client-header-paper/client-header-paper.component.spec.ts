import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientHeaderPaperComponent } from './client-header-paper.component';

describe('ClientHeaderPaperComponent', () => {
  let component: ClientHeaderPaperComponent;
  let fixture: ComponentFixture<ClientHeaderPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientHeaderPaperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientHeaderPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStartComponent } from './server-start.component';

describe('ServerStartComponent', () => {
  let component: ServerStartComponent;
  let fixture: ComponentFixture<ServerStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerStartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

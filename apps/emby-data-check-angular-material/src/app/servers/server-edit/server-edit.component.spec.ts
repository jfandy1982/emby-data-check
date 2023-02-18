import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEditComponent } from './server-edit.component';

describe('ServerEditComponent', () => {
  let component: ServerEditComponent;
  let fixture: ComponentFixture<ServerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

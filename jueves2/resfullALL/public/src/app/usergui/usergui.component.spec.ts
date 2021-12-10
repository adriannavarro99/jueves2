import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserguiComponent } from './usergui.component';

describe('UserguiComponent', () => {
  let component: UserguiComponent;
  let fixture: ComponentFixture<UserguiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserguiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

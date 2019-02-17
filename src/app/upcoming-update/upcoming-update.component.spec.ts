import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingUpdateComponent } from './upcoming-update.component';

describe('UpcomingUpdateComponent', () => {
  let component: UpcomingUpdateComponent;
  let fixture: ComponentFixture<UpcomingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

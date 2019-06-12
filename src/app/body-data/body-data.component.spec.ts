import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDataComponent } from './body-data.component';

describe('BodyDataComponent', () => {
  let component: BodyDataComponent;
  let fixture: ComponentFixture<BodyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

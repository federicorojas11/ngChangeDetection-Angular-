import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZoneComponent } from './ng-zone.component';

describe('NgZoneComponent', () => {
  let component: NgZoneComponent;
  let fixture: ComponentFixture<NgZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

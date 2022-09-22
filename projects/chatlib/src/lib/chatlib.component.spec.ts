import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlibComponent } from './chatlib.component';

describe('ChatlibComponent', () => {
  let component: ChatlibComponent;
  let fixture: ComponentFixture<ChatlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatlibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

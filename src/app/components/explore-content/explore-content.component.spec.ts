import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreContentComponent } from './explore-content.component';

describe('ExploreContentComponent', () => {
  let component: ExploreContentComponent;
  let fixture: ComponentFixture<ExploreContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

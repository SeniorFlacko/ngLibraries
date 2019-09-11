import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRatingComponent } from './angular-rating.component';

describe('AngularRatingComponent', () => {
  let component: AngularRatingComponent;
  let fixture: ComponentFixture<AngularRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularRatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a new rating that equals to the index of the current star', () => {
    const emitMethod = spyOn(component.ratingChanged, 'emit');
    component.changeRating(6);
    expect(emitMethod).toHaveBeenCalled();
  });
});

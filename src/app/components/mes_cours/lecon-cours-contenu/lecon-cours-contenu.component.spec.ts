import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursContenuComponent } from './cours-contenu.component';

describe('CoursDetailsComponent', () => {
  let component: CoursContenuComponent;
  let fixture: ComponentFixture<CoursContenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursContenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCoursDialogComponent } from './ajouter-cours-dialog.component';

describe('AjouterCoursDialogComponent', () => {
  let component: AjouterCoursDialogComponent;
  let fixture: ComponentFixture<AjouterCoursDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterCoursDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCoursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

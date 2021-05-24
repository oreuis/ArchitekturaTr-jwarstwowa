import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDramaComponent } from './add-edit-drama.component';

describe('AddEditDramaComponent', () => {
  let component: AddEditDramaComponent;
  let fixture: ComponentFixture<AddEditDramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

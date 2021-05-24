import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDramaComponent } from './show-drama.component';

describe('ShowDramaComponent', () => {
  let component: ShowDramaComponent;
  let fixture: ComponentFixture<ShowDramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

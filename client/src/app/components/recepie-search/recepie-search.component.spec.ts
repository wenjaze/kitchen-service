import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieSearchComponent } from './recepie-search.component';

describe('RecepieSearchComponent', () => {
  let component: RecepieSearchComponent;
  let fixture: ComponentFixture<RecepieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepieSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

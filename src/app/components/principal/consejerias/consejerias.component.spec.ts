import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejeriasComponent } from './consejerias.component';

describe('ConsejeriasComponent', () => {
  let component: ConsejeriasComponent;
  let fixture: ComponentFixture<ConsejeriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsejeriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsejeriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

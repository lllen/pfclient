import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerAddFormComponent } from './pensioner-add-form.component';

describe('PensionerAddFormComponent', () => {
  let component: PensionerAddFormComponent;
  let fixture: ComponentFixture<PensionerAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionerAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

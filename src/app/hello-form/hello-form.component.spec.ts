import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFormComponent } from './hello-form.component';

describe('HelloFormComponent', () => {
  let component: HelloFormComponent;
  let fixture: ComponentFixture<HelloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

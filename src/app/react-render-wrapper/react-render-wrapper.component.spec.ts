import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactRenderWrapperComponent } from './react-render-wrapper.component';

describe('ReactRenderWrapperComponent', () => {
  let component: ReactRenderWrapperComponent;
  let fixture: ComponentFixture<ReactRenderWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactRenderWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactRenderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

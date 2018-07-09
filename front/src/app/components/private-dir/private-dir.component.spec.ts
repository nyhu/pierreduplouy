import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDirComponent } from './private-dir.component';

describe('PrivateDirComponent', () => {
  let component: PrivateDirComponent;
  let fixture: ComponentFixture<PrivateDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

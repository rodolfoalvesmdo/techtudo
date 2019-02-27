import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebooksPage } from './notebooks.page';

describe('NotebooksPage', () => {
  let component: NotebooksPage;
  let fixture: ComponentFixture<NotebooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

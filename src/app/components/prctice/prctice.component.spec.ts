import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcticeComponent } from './prctice.component';

describe('PrcticeComponent', () => {
  let component: PrcticeComponent;
  let fixture: ComponentFixture<PrcticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrcticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrcticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

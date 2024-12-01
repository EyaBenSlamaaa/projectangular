import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolismeComponent } from './symbolisme.component';

describe('SymbolismeComponent', () => {
  let component: SymbolismeComponent;
  let fixture: ComponentFixture<SymbolismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymbolismeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

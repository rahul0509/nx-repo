import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLayerComponent } from './tile-layer.component';

describe('TileLayerComponent', () => {
  let component: TileLayerComponent;
  let fixture: ComponentFixture<TileLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileLayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

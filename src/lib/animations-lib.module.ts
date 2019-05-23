import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from './overlay/overlay.module';

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [OverlayModule]
})
export class AnimationsLibModule {}

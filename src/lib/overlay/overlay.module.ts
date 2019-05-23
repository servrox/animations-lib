import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayComponent } from './overlay.component';

@NgModule({
  declarations: [OverlayComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [OverlayComponent]
})
export class OverlayModule {}

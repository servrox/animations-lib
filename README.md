# servrox's AnimationsLib

Fancy angular library containing easy to use and customizable animation elements.

![Live Demo](http://g.recordit.co/H64YQuYuQs.gif)

## Getting Started

### 1. Import module (e.g. OverlayModule)

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { OverlayModule } from '@servrox/animations-lib';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 2. Use in template (every input variable is optional)

```
<ss-ani-lib-overlay
    *ngIf="<boolean>"
    [count]="<number>"
    [useRandomColor]="<boolean>"
    [speed]="<number>"
    [logo]="<string>">
</ss-ani-lib-overlay>

or

<ss-ani-lib-overlay></ss-ani-lib-overlay>
```

Defaults:

```
count: number = 20,
useRandomColor: boolean = true,
speed: number = 1600,
logo: string
```

## Built With

- [Angular CLI](https://github.com/angular/angular-cli) - version 7.2.0
- [Nx](https://nx.dev/) - @nrwl/nx 7.8.1

## Authors

- **Marcel Mayer** -
  [servrox.solutions](http://servrox.solutions)

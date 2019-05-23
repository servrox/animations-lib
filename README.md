[![Build Status](https://travis-ci.org/servrox/animations-lib.svg?branch=master)](https://travis-ci.org/servrox/animations-lib)
<img src="https://img.shields.io/badge/servrox-approved-brightgreen.svg?style=flat&link=http://servrox.solutions&link=http://servrox.solutions&logo=data:image/png;base64,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" />

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

### 2. Use in template (e.g. OverlayModule -> every input variable is optional)

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

Defaults for OverlayModule:

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

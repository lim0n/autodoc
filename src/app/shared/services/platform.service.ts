import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  readonly isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId: object
  ) {
    this.isServer = isPlatformServer(this._platformId)
  }
}

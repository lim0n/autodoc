import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollTo(
    targetElement: HTMLElement | string,
    indent: number = 150,
  ): void {

    if(!targetElement) {
      return;
    }

    const anchor = typeof targetElement == 'string' ? document.querySelector(targetElement) : targetElement;
    if (!anchor) {
      return;
    }

    const start = window.pageXOffset;
    const startTime = 'new' in window.performance ? performance.now() : new Date().getTime();
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
    indent = indent > anchorTop ? anchorTop : indent;
    const anchorOffset = anchorTop - indent;
    const anchorOffsetToScroll = Math.round(documentHeight - anchorOffset < windowHeight
      ? documentHeight - windowHeight
      : anchorOffset);

    window.scrollTo(0, anchorOffsetToScroll);
  }
}

import { Scroll } from "@angular/router";

export function prevNextRouteMatch(prev: Scroll, current: Scroll): boolean {
    if (current?.anchor) { return true; }
    const previousDependableUrl = prev.routerEvent.url.split('#')[0].split('?')[0];
    const currentDependableUrl = current.routerEvent.url.split('#')[0].split('?')[0];
    return previousDependableUrl === currentDependableUrl;
}
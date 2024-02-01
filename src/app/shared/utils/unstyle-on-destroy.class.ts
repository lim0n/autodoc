import { Component, OnDestroy } from "@angular/core";

@Component({
    template: ''
})
export abstract class StyleCleaner implements OnDestroy {
    static style: HTMLStyleElement | null = null;

    protected constructor(private readonly documentRef: Document) {

        if (this.style !== null) {
            this.addTheme();
            return;
        }

        const styles = this.documentRef.head.querySelectorAll('style');

        (this.constructor as typeof StyleCleaner).style = styles[styles.length - 1];
    }

    get style(): HTMLStyleElement | null {
        return (this.constructor as typeof StyleCleaner).style;
    }

    ngOnDestroy(): void {
        this.removeTheme();
    }

    private addTheme(): void {
        if (this.style && !this.documentRef.head.contains(this.style)) {
            for(let i = this.style.attributes.length - 1; i >= 0; i--) {
                this.style.removeAttribute(this.style.attributes[i].name);
            }

            this.documentRef.head.appendChild(this.style)
        }
    }

    private removeTheme(): void {
        if (this.style && this.documentRef.head.contains(this.style)) {
            this.documentRef.head.removeChild(this.style);
        }
    }
}
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function urlValidator(control: AbstractControl): ValidationErrors | null {
    if(controlValidator(control)) return null;

    let success = control.value.startsWith('http://') || control.value.startsWith('https://');

    if (success) return null;

    return {
        'url': true 
    };
}

export function wordsVaidators(minWords: number): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl) => {
        if(controlValidator(control)) return null;

        let words = String(control.value).split(' ').filter(word => word);

        if(words.length >= minWords) return null;

        return {
            'words': {
                actual: words.length,
                minimum: minWords
            } 
        };
    }
}

function controlValidator(control: AbstractControl): boolean {
    if (!control) return true;
    if (!control.value) return true;
    if (typeof(control.value) !== 'string') return true;

    return false;
}
import { Injectable } from "@angular/core"

export class TranslationSet {
    public language: string = 'es'
    public values: { [key: string]: string } = {}
}

@Injectable()
export class TranslationService {
    public languages = ['es', 'eng']

    public language = 'es'

    private dictionary: { [key: string]: TranslationSet } = {
        ger: {
            language: 'es',
            values: {
                firstName: 'Nombre',
                lastName: 'Apellido',
                email: 'correo'
            },
        },
        eng: {
            language: 'eng',
            values: {
                example: 'Example',
            },
        },
    }

    constructor() { }

    translate(key: string): string {
        if (this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[key]
        }
        return this.dictionary[this.language].values[key]
    }
}
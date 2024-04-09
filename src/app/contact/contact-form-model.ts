
export class ContactFormModel {
    constructor(
        public prenom: string,
        public nom: string,
        public mail: string,
        public entreprise?: string,
        public message?: string
    ) { }
}

export class ContacDTO {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public emailAddress: string = '',
        public phoneNumber: string = '',
        public address: string = '',
        public reportType: string = '',
        public propertyType: string = '',
        public purposeType: string = '',
        public dwellingStyle: string = '',
        public dwellingType: string = '',
        public adicionalInformation: string = '',
        public purchasePurposeType: string = '',
        public newConstructionPurposeType: string = '',
        public purchasePricePurposeType: string = '',
        public purchaseModelHause: string = '',
        public refinancePurposeType: string = '',
        public lenderPurchose: string = '',
        public refinanceAmount: string = '',
        public loanValueRatio: string = '',
        public relocationType: string = '',
    ) {}
}

export default interface QuoteData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    clientType: string;
    // pro field
    companyName: string;
    field: string;
    siren: string;
    address: string;
    postcode: string;
    city: string;

    category: string;
    project: Array<string>;
    message: string;

}

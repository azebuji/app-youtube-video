export function formatDocument(document: string) : string {
    return document.length > 11 ? document.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5") : document.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatPhone(phone: string) : string {
    return phone.length > 10 ? phone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3") : phone.replace(/^(\d\d)(\d{4})(\d{4}).*/, "($1) $2-$3");
}

export function formatMoney(money?: string) : string {
    let result = money ? money.replace('.', ',') : '0,00';
    return result.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function formatNumber(the_number?: string) : string {
    return the_number ? parseFloat(the_number).toString().replace(".", ",") : '0';
}
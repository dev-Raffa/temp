
export function maskDate(value: string = ''): string {
    
    const digits = value
        .replace(/\D/g, '')
        .slice(0, 8);

    if (!digits) return '';

    const day = digits.slice(0, 2);
    const month = digits.length > 2 ? digits.slice(2, 4) : '';
    const year = digits.length > 4 ? digits.slice(4, 8) : '';

    if (digits.length < 3 && day) return day 
    if (digits.length < 5 && month) return `${day}/${month}`
    if (year) return `${day}/${month}/${year}`

    return digits
}

export function isValidDate(value: string) {
    if(typeof value !== "string") return false;
    if(value.length < 10) return false

}
export function setCookie(name: string, value: string, days: number) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieValue = `${name}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
}
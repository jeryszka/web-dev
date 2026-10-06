/**
 * Lista umiejętności prezentowanych na stronie.
 *
 * @type {Array<{nazwa: string, poziom: number, kategoria: string}>}
 */

export const skills = [
    { nazwa: "HTML", poziom: 4, kategoria: "frontend" },
    { nazwa: "CSS", poziom: 3, kategoria: "frontend" },
    { nazwa: "JavaScript", poziom: 3, kategoria: "frontend" },
    { nazwa: "SQL", poziom: 2, kategoria: "backend" },
    { nazwa: "Git", poziom: 2, kategoria: "narzedzia" },
    { nazwa: "Praca w zespole", poziom: 2, kategoria: "miekkie" }
];

/**
 * Adres publicznego API użytkowników.
 *
 * @type {string}
 */

export const ADRES_API =
    "https://jsonplaceholder.typicode.com/users";
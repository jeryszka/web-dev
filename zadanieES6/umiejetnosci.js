/**
 * Zwraca umiejętności należące do wskazanej kategorii.
 *
 * @param {Array<Object>} lista - pełna lista umiejętności
 * @param {string} kategoria - nazwa kategorii albo "wszystkie"
 * @returns {Array<Object>} nowa tablica; pusta, gdy nic nie pasuje
 */

export const filtrujPoKategorii = (lista, kategoria) =>
    kategoria === "wszystkie"
        ? [...lista]
        : lista.filter(u => u.kategoria === kategoria);

/**
 * Oblicza średni poziom umiejętności.
 *
 * @param {Array<Object>} lista - lista umiejętności
 * @returns {number} średni poziom umiejętności
 */

export const sredniPoziom = (lista) => {
    if (lista.length === 0) {
        return 0;
    }

    const suma = lista.reduce((razem, { poziom }) => razem + poziom, 0);

    return Math.round((suma / lista.length) * 10) / 10;
};

/**
 * Tworzy tekstowe podsumowanie listy umiejętności.
 *
 * @param {Array<Object>} lista - lista umiejętności
 * @returns {string} tekst podsumowania
 */

export const podsumowanie = (lista) =>
    lista.length === 0
        ? "Brak umiejętności w tej kategorii."
        : `Umiejętności: ${lista.length} · średni poziom: ${sredniPoziom(lista)}`;

/**
 * Buduje HTML listy umiejętności.
 *
 * @param {Array<Object>} lista - lista umiejętności
 * @returns {string} gotowy kod HTML
 */

export const budujListe = (lista) =>
    lista
        .map(({ nazwa, poziom }) => `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5">
                    ${"●".repeat(poziom)}${"○".repeat(5 - poziom)}
                </span>
            </li>
        `)
        .join("");
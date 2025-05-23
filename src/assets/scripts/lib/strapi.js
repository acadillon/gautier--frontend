//lib/strapi.js

/**
 * Fetches data from the Strapi API
 * @param {Object} options - The options object
 * @param {string} options.endpoint - The endpoint to fetch from
 * @param {Object} [options.query] - The query parameters to add to the url
 * @param {string} [options.wrappedByKey] - The key to unwrap the response from
 * @param {boolean} [options.wrappedByList] - If the response is a list, unwrap it
 * @param {string} [options.locale] - The locale for the content
 * @returns {Promise}
 */

export default async function fetchApi({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
    locale,
}) {
    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }


    const API_URL = 'https://railwayapp-strapi-production-1c2f.up.railway.app'; // URL de base de votre API
    const url = new URL(`${API_URL}/api/${endpoint}`);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }

    // Ajout du paramètre locale à l'URL si spécifié
    if (locale) {
        url.searchParams.append('locale', locale);
    }

    try {
        const res = await fetch(url.toString());
        let data = await res.json();

        if (wrappedByKey) {
            data = data[wrappedByKey];
        }

        if (wrappedByList) {
            data = data[0];
        }

        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw error;
    }
}

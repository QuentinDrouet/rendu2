const axios = require('axios');

class FestivalApi {
    constructor() {
        this.baseURL = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals';
    }

    async search(options = {}) {
        const params = new URLSearchParams(options).toString();
        const response = await axios.get(`${this.baseURL}&${params}`);
        return response.data;
    }

    async searchByCity(city) {
        const options = {
            q: city
        };
        return this.search(options);
    }

    async searchByRegion(region) {
        const options = {
            facet: ['region'],
            'refine.region': region
        };
        return this.search(options);
    }

    async searchByDomain(domain) {
        const options = {
            facet: ['domaine'],
            'refine.domaine': domain
        };
        return this.search(options);
    }

    async searchByMonth(month) {
        const options = {
            facet: ['mois_habituel_de_debut'],
            'refine.mois_habituel_de_debut': month
        };
        return this.search(options);
    }

    async getAll() {
        const options = {
            rows: 10,
            facet: ['region', 'domaine', 'complement_domaine', 'departement', 'mois_habituel_de_debut']
        };
        return this.search(options);
    }

    async customSearch(customOptions) {
        return this.search(customOptions);
    }
}

module.exports = FestivalApi;

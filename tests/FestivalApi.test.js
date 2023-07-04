const FestivalApi = require('../index.js');

describe('FestivalApi', () => {
    let api;

    beforeAll(() => {
        api = new FestivalApi();
    });

    test('searchByRequest returns data', async () => {
        const results = await api.searchByRequest('Marseille');
        expect(results).toBeDefined();
        expect(results.records).toBeInstanceOf(Array);
    });

    test('searchByRegion returns data', async () => {
        const results = await api.searchByRegion('Auvergne-Rhône-Alpes');
        expect(results).toBeDefined();
        expect(results.records).toBeInstanceOf(Array);
    });

    test('searchByDomain returns data', async () => {
        const results = await api.searchByDomain('Musiques actuelles');
        expect(results).toBeDefined();
        expect(results.records).toBeInstanceOf(Array);
    });

    test('searchByMonth returns data', async () => {
        const results = await api.searchByMonth('05 (mai)');
        expect(results).toBeDefined();
        expect(results.records).toBeInstanceOf(Array);
    });

    test('getAll returns data', async () => {
        const results = await api.getAll();
        expect(results).toBeDefined();
        expect(results.records).toBeInstanceOf(Array);
    });
});

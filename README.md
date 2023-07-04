# Festival API Library 🎶

The Festival API Library is a JavaScript interface for retrieving festival data from the French government's [culture API](https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/). This library uses Axios to make HTTP requests and can filter festivals by city, region, domain, and month.

## 🛠 Installation

Use npm to install the Festival API Library.

```bash
npm i iim-quentin-opensource-rendu2
```

## 🚀 Usage

Here is how to use the Festival API Library in your project:

```javascript
const FestivalApi = require('iim-quentin-opensource-rendu2');

const api = new FestivalApi();

// Search by request
api.searchByRequest('Marseille').then(console.log);

// Search by region
api.searchByRegion('Auvergne-Rhône-Alpes').then(console.log);

// Search by domain
api.searchByDomain('Contemporary Music').then(console.log);

// Search by month
api.searchByMonth('05 (May)').then(console.log);

// Retrieve the first 10 records
api.getAll().then(console.log);

api.advancedSearch({facet: ['domaine', 'region'], 'refine.domaine': 'Musiques actuelles'}).then(console.log);
```

## ⚙️ Methods

- searchByRequest(request) : Search with whatever you want
- searchByRegion(region)
- searchByDomain(domain)
- searchByMonth(month)
- getAll(numberOfRows) : Retrieve a specified number of records (defaults to 10 if not specified).

## 🔬 Tests

To run the tests, use the following command:

```bash
npm run test
```

## 🧹 Linter

To run ESLint on the source code, use the following command:

```bash
npm run lint
```

## 🤝 Contributing

Contributions are welcome. To contribute, please fork the repository, create a new branch, make your changes, and open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit/) file for more details.



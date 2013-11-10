var config = {
  "title":"CartoMalaysia",
  "center":[109,4],
  "scale":2500,
  "fields": [
    {
      "name": "(no scale)",
      "id": "none"
    },
    {
      "name": "Population Estimate",
      "id": "popest",
      "key": "POPESTIMATE%d"
    },
    {
      "name": "Equal Size", 
      "id": "eqsize",
      "key": "EQSIZE%d"
    },
  ],
  "years": [2010], // This should be factored out to stats.json
  "states_url":"./public/data/states.topojson",
  "stats_url":"./public/data/stats.csv"
};
import { writeFileSync } from 'fs';
import { loadData } from './load.js';
import { addSeason } from './series-service.js';

// 1. load original data
const data = loadData();

// season example from C2
const season = {
  number: 1,
  episodes: [{ id: 801, title: 'First Contact', rating: 8.0, duration: 44 }],
};

// 2. add season to Desert Signal (id: 5)
const updatedSeries = addSeason(data.series, 5, season);

// 3. create updated data object
const updatedData = {
  ...data,
  series: updatedSeries,
};

// save to series-updated.json with 2 spaces indent
writeFileSync('series-updated.json', JSON.stringify(updatedData, null, 2));
const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DetailView = require('./views/detail_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#countries');

  const selectView = new SelectView(selectElement);
  selectView.bindEvents()

  const container = document.querySelector('#country');

  const detailView = new DetailView(container);
  detailView.bindEvents();

  const countries = new Countries();
  countries.bindEvents();
  countries.getData();
});

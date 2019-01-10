const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
}

Countries.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:selected', (event) => {
    console.log(event.detail);
    const index = event.detail;
    const countrySelected = this.selectCountry(index);
    PubSub.publish('Country:selected', countrySelected);
  })
};

Countries.prototype.selectCountry = function (index) {
  return this.countries[index];
};


Countries.prototype.getData = function(){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200){
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    this.countries = data;

    PubSub.publish('Countries:ready', this.countries);
  });

  xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();

}



module.exports = Countries;

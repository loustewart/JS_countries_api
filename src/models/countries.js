const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
}

Countries.prototype.bindEvents = function(){

}

Countries.prototype.getData = function(){
  // Make request to API and publish data from in here.
}

module.exports = Countries;

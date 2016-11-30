export default {
  getItems() {
    return fetch('https://nuvi-challenge.herokuapp.com/activities', {credentials: 'SESSION'})
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
        return json;
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
    
  }
};

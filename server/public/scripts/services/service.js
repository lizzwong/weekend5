app.service('SwapiService', ['$http', function($http){
    let self = this;

    self.findResults = {list: []};
    self.favorites = {list: []};

    self.find = function (category, specificSearch){
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${category}/?search=${specificSearch}`
        })
        .then(function (response){
            self.findResults.list = response.data.results;
            console.log(self.findResults.list);
            
        })
        .catch(function (error){
            console.log('error on search:', error);
            
        })
    }

    self.favorite = function (item){
        $http({
            method: 'POST',
            url:`/favorites`,
            data: {name: item.name, url: item.url}
        })
        .then(function(response){
            console.log('Favorite added', response);
            self.getFavorites();
        })
        .catch(function(error){
            console.log('Could not add', error);
            
        })
    }

    self.getFavorites = function (){
        $http({
            method: 'GET',
            url: `/favorites`,
        })
        .then(function (response) {
            self.favorites.list = response.data;
            console.log(self.favorites.list);
        })
        .catch(function (error) {
            console.log('Error on favorites:', error);

        })
    }

    self.deleteFavorite = function (item){
        $http({
            method: 'DELETE',
            url: `/favorites/${item._id}`,
        })
        .then(function(response){
            console.log('Item Deleted', response);
            self.getFavorites();
        })
        .catch(function(error){
            console.log('Error on Delete', error);
            
        })
    }
}])
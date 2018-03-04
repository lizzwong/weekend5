const favoriteController = app.controller('FavoriteController', ['SwapiService', function(SwapiService){
    let self = this;
    

    self.getFavorites = SwapiService.getFavorites;
    SwapiService.getFavorites();

    self.favorites = SwapiService.favorites;

    self.deleteFavorite = SwapiService.deleteFavorite;
    

}])
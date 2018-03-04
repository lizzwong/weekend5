const findController = app.controller('FindController', ['SwapiService', function (SwapiService) {

    let self = this;

    self.find = SwapiService.find;

    self.findResults = SwapiService.findResults;

    self.favorite = SwapiService.favorite;
    

}])
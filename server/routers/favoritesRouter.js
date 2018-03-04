const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        url: String,
        }
)

const Favorite = mongoose.model('Favorite', FavoriteSchema, 'swapi' );


router.get('/', (request,response) =>{
    Favorite.find({}, (error, foundFavorites)=>{
        if (error){
            console.log('Error on finding Favorites:', error);
           response.sendStatus(500); 
        }
        else {
            console.log('Favorites found');
            response.send(foundFavorites);
        }
    })
});

router.post('/', (request, response) => {
    let newFavorite = new Favorite (request.body);
    console.log('New favorite is:', request.body);
    newFavorite.save((error, savedFavorite) => {
        if (error) {
            console.log('error adding Favorite', error);
            response.sendStatus(500);
        }
        else {
            console.log('Favorite added');
            response.sendStatus(201);
        }
    })
});

router.delete('/delete/:id', (request, response)=>{
    let id = request.params.id;
    console.log('Favorite to delete is', resquest.body);
    Facorite.findByIdAndRemove(
        {"_id":id},
        (error, deleteEmployee) =>{
            if (error){
                console.log('Error on delete Favorite',error);
                response.sendStatus(500);  
            }
            else {
                response.sendStatus(200);
            }
    })
})

module.exports = router;
const { Mark } = require("../models/mark.model");
const {Place} = require("../models/place.model")

class placeController{
    static async addPlace(req,res){
        const {name,description,photo,latitude,longitude} = req.body;
        try{
            await Place.create({name,description,photo,latitude,longitude})
            return res.status(200).json({message:"OK"});
        }catch(e){
            return res.status(400).json({message:"Data is wrong!"});
        }
    }
    static async getPlaces(req,res){
        const places = await Place.findAll()
        for(let i = 0; i < places.length;i++){
            const marks = await Mark.findAll(
                {
                    where:{place_id:places[i].id}
                });
            let rating = 0;
            for(let j = 0; j < marks.length;j++){
                rating += marks[j].mark;
            }
            rating = rating/marks.length;
            places[i].rating = rating;
        }
        res.json(places);
    }
}

module.exports = {placeController}
const {Mark} = require("../models/mark.model")
const {Op} = require("sequelize")

class markController{
    static async setMark(req,res){
        const {placeId,mark} = req.body;
        try{
            if(!await Mark.findOne({where:{[Op.and]:[{user_id:req.user.id},{place_id:placeId}]}})){
                await Mark.create({
                    user_id:req.user.id,
                    place_id:placeId,
                    mark
                })
                return res.status(200).json({message:"OK"});
            }else{
                console.log(await Mark.findOne({where:{[Op.and]:[{user_id:req.user.id},{place_id:placeId}]}}))
                return res.status(400).json({message:"You have already rated it before!"});
            }
        }catch(e){
            return res.status(400).json({message:"Data is wrong!"});
        }
    }
    static async getPlaces(req,res){
        const places = await Place.findAll()
        res.json(places);
    }
}

module.exports = {markController}
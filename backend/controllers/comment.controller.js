const {Comment} = require("../models/comment.model")
const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");

class commentController{
    static async addComment(req,res){
        const {placeId,text} = req.body;
        try{
            await Comment.create({
                author_id:req.user.id,
                place_id:placeId,
                text
            })
            return res.status(200).json({message:"OK"});
        }catch(e){
            return res.status(400).json({message:"All fields must be filled!"});
        }
    }
    static async getComments(req,res){
        //const places = await Comment.findAll({where:{place_id:req.query.place_id}})
        User.hasOne(Comment, {foreignKey: 'author_id'})
        User.belongsTo(User, {foreignKey: 'id'})
        const places = await User.findAll({
            include: [{
              model: Comment,
              required: false,
              where:{place_id:req.query.place_id}
            }]        
          })
        
        res.json(places);
    }
}

module.exports = {commentController}
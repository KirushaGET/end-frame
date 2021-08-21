const {CommentMark} = require("../models/comment-mark.model")
const {Op} = require("sequelize")

class commentMarkController{
    static async setMark(req,res){
        const {commentId,mark} = req.body;
        try{
            if(!await CommentMark.findOne({where:{[Op.and]:[{user_id:req.user.id},{comment_id:commentId}]}})){
                await CommentMark.create({
                    user_id:req.user.id,
                    comment_id:commentId,
                    mark
                })
                return res.status(200).json({message:"OK"});
            }else{
                return res.status(400).json({message:"You have already rated it before!"});
            }
        }catch(e){
            return res.status(400).json({message:"Data is wrong!"});
        }
    }
}

module.exports = {commentMarkController}
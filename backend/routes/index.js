const {Router} = require("express")
const {userController} = require("../controllers/user.controller")
const {placeController} = require("../controllers/place.controller")
const {commentController} = require("../controllers/comment.controller")
const {markController} = require("../controllers/mark.controller")
const {commentMarkController} = require("../controllers/comment-mark.controller")

const {Validation} = require("../middlewares/validation")
const {jwtVerify} = require("../middlewares/jwt")

const router = Router()

router.post("/registration",Validation.registrationValidator,userController.registration)
router.post("/login",Validation.loginValidator,userController.login)

router.post("/add-place",jwtVerify,placeController.addPlace)
router.get("/get-places",jwtVerify,placeController.getPlaces)

router.post("/add-comment",jwtVerify,commentController.addComment)
router.get("/get-comment",jwtVerify,commentController.getComments)

router.post("/set-mark",jwtVerify,markController.setMark)
router.post("/set-comment-mark",jwtVerify,commentMarkController.setMark)


module.exports = {router}
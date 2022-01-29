// import the methods from the comment-controller file
const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//route /api/comments/:pizzaId
// use the addComment() method as a POST callback

router.route('/:pizzaId').post(addComment);


// route for /api/comments/:pizzaId/:commentId
// use the removeComment method as a DELETE callback
// need two parameters for  delete because we need to which pizza the comment originated from
router.route('/:pizzaId/:commentId').delete(removeComment);


module.exports = router;
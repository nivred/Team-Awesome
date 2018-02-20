const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/login")
  .get(userController.findByEmail)
  // .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/register")
  .post(userController.createNew);
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;

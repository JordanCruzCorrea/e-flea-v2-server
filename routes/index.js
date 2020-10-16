const { Router } = require("express");
const RateLimit = require("express-rate-limit");
const controllers = require("../controllers");

const router = Router();

const limiter = RateLimit({
  windowMs: 10 * 1000, // 10 secs
  max: 1,
});

router.get("/", (req, res) => res.send("root, ya bitch"));

router.get("/items", controllers.getAllItems);
router.get("/items/:id", controllers.getItemById);
router.post("/items", limiter, controllers.createItem);
router.put("/items/:id/edit", limiter, controllers.updateItem);
router.delete("/items/:id", limiter, controllers.deleteItem);

router.post("/sign-up", limiter, controllers.signUp);
router.post("/sign-in", limiter, controllers.signIn);
router.put("/change-password/:id", limiter, controllers.changePassword);
router.get("/users/:id", controllers.getUserById);

// router.get('/items/:id', controllers.getAllItemsByUserId)

module.exports = router;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { Item, User } = require("../models");
const { Item } = require("../models");
const { User } = require("../models");

const SALT_ROUNDS = 11;
const TOKEN_KEY = "jordanandrewyev";

const signUp = async (req, res, next) => {
  try {
    const { username, email, password, photo } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      username,
      email,
      photo,
      password_digest,
    });
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      photo: user.photo,
    };
    const token = jwt.sign(payload, TOKEN_KEY);
    res.json({ user, token });
  } catch (error) {
    console.log(`There was an error: ${error}`);
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (await bcrypt.compare(password, user.dataValues.password_digest)) {
      const payload = {
        id: user.id,
        username: user.username,
        password: user.password,
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      res.status(401).send("Username or Password is invalid- try again.");
    }
  } catch (error) {
    console.log(`There was an error: ${error}`);
    next(error);
  }
};

const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const updated = await User.update(
      { password_digest: password_digest },
      {
        where: { id: id },
      }
    );
    const updatedUser = await User.findOne({
      where: { id: id },
    });
    return res.json({ password: updatedUser });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createItem = async (req, res, next) => {
  try {
    console.log("req.body:", req.body);
    const createdItem = await Item.create(req.body);
    return res.status(201).json({
      createdItem,
    });
  } catch (error) {
    console.log(`There was an error: ${error}`);
    next(error);
  }
};

const getAllItems = async (req, res, next) => {
  try {
    const items = await Item.findAll();
    return res.json(items);
  } catch (error) {
    console.log(`There was an error: ${error.message}`);
    res.status(500).send(error.message);
  }
};

//do we need getAllUsers?

const getItemById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await Item.findOne({
      where: { id: id },
    });
    if (item) {
      return res.status(200).json({ item });
    }
    return res.status(404).send("Item not found!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
    });
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("User not found!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("ITEM", req.body, "id", id);
    const [updated] = await Item.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedItem = await Item.findOne({ where: { id: id } });
      return res.status(202).json({ item: updatedItem });
    }
    throw new Error("Item not found!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Item.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(202).send("Item");
    }
    throw new Error("Item not found");
  } catch (error) {
    console.log(`There was an error: ${error}`);
    next(error);
  }
};

const getAllItemsbyUserId = async (req, res) => {
  const items = await Item.findAll({
    include: [
      {
        model: User,
      },
    ],
  });

  console.log(
    "All items associated with their respective User",
    JSON.stringify(items, null, 4)
  );
};

//     const items = await Item.findAll({
//       include: [{
//         model: User,
//       }]
//     });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

module.exports = {
  signUp,
  signIn,
  changePassword,
  createItem,
  getAllItems,
  getItemById,
  getUserById,
  updateItem,
  deleteItem,
  getAllItemsbyUserId,
};

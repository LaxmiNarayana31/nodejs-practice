const User = require("../models/user.js");
export const getAllUsers = async (req, resp) => {
  const users = await User.find({});

  const keyword = req.query.keyword;
  console.log(keyword);

  read.json({
    success: true,
    users,
  });
};

export const newUser = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "User created successfully",
  });
};

export const specialFunc = async (req, res) => {
  res.json({
    success: true,
    message: "Hello JavScript",
  });
};

export const getUserDetail = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

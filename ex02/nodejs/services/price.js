const Prices = require("../models/prices");

const findById = async (id) => {
  return await Prices.findById(id);
}

const findAll = async () => {
  const price = await Prices.find();
  return price;
}

const create = async (newPrice) => {
  const createdPrice = await Prices.create(newPrice);
  return createdPrice;
}

const update = async (id, price, source) => {
  var data = {
    price: price,
    source: source
  };
  const result = await Prices.findByIdAndUpdate(id, data);
  await Prices.save();
  return result;
}

const remove = async (id) => {
  await Prices.findByIdAndDelete(id);
  return {
    success: true,
    msg: "deleted"
  };
}

module.exports = {
  update,
  remove,
  findAll,
  create,
  findById
}
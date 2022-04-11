const Categories = require('../models/categories')


const findById = async (id) => {
  return await Categories.findById(id);
}

const findCategorizedItems = async () => {
    return await Categories.aggregate([
      {
        $lookup: {
          from: "items",
          localField: "_id",
          foreignField: "category",
          as: "items"
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          desc: 1,
          imageUrl: 1,
          items: {
            _id: 1,
            name: 1,
            category: 1,
            desc: 1,
          }
        }
      }
    ])
}

const create = async (newCategory) => {
    const createdCate = await Categories.create(newCategory);
    return createdCate;
}

const findAll = async () => {
    const result = await Categories.find();
    return result;
}

const remove = async (id) => {
    await Categories.findByIdAndDelete(id);
    return {
        success: true,
        msg: "deleted"
    };
}

const update = async (id, name1, desc1, imageUrl1) => {
    var data = {
      name : name1,
      desc : desc1,
      imageUrl : imageUrl1
    };
    const result = await Categories.findByIdAndUpdate(id, data);
    return result;
}

module.exports = {
    findCategorizedItems,
    create,
    findAll,
    findById,
    remove,
    update
}
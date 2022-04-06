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
  try{
    const result = await Categories.find();
    return {
        success: true,
        data: result
    };
  }catch (err){
      return {
          success: false,
          error: err || 'error'
      }
  }
}

module.exports = {
    findCategorizedItems,
    create,
    findAll,
    findById
}
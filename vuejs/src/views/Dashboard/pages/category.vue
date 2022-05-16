<script >
import categoryApi from "@/libs/apis/category";
export default {
  data() {
    return {
      categories: [],
      name: "",
      desc: "",
      imageUrl: "",
      _id: "",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const { name, desc, imageUrl } = this;
      const result = await categoryApi.create({ name, desc, imageUrl });
      if (!result) {
        alert(result.error);
        return;
      }

      this.categories = await categoryApi.all();
      this.name = this.desc = this.imageUrl = "";
    },
    async onDelete(e) {
      e.preventDefault()
      const { id } = this;
      if(!confirm(`Are you sure you want to delete?`)){
        return;
      }
      const result = await categoryApi.delete(id);
      if (!result) {
        alert(result.error);
        return;
      }
      this.categories = await categoryApi.all();
    },
    onEdit(category) {
      this.cateModalShown = true;
      this.selectedCategory = category;
    },
    async Edit(e) {
      e.preventDefault();
      const { name, desc, imageUrl, selectedCategory } = this;
      const result = await categoryApi.update({
        name,
        desc,
        imageUrl,
        category: selectedCategory?._id
      });

      console.log(result);
      if(result.error) {
        alert(result.error);
        return;
      }

      this.categories = await categoryApi.all();
      this.name = this.desc = this.imageUrl = this.selectedCategory = "";
    }
  },
  async mounted() {
    this.categories = await categoryApi.all();
  },
};
</script>

<template >
  <main>
    <div class="bg-gray-500 text-white py-2 text-lg text-center">
      <h1>Category</h1>
    </div>

    <div class="py-2">
      <form @submit="onSubmit" method="post">
        <div class="flex flex-row py-2 px-2 space-x-2 bg-gray-100">
          <div>
            <input
              v-model="name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              v-model="desc"
              name="desc"
              type="text"
              placeholder="Description"
              required
            />
          </div>
          <div>
            <input
              v-model="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="ImageURL"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-500 text-white p-1 px-2 rounded-md"
            >
              Add new
            </button>
          </div>
        </div>
      </form>
    </div>
    <div>
      <table id="customers">
        <tr class="bg-gray-200">
          <th>Name</th>
          <th>Description</th>
          <th>ImageURL</th>
          <th>Action</th>
        </tr>

        <tr v-for="cate in categories" :key="cate.name">
          <td>{{ cate.name }}</td>
          <td>{{ cate.desc }}</td>
          <td>{{ cate.imageUrl }}</td>
          <td>
              <div class="flex flex-col space-y-2">
              <button v-on:click="onEdit(category)"
              class="hover:text-green-600 hover:font-bold">Edit</button>
              <button 
              v-on:click="onDelete"
              class="hover:text-green-600 hover:font-bold">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div
      v-if="cateModalShown && selectedCategory"
      class="
        flex
        justify-center
        items-center
        absolute
        top-0
        left-0
        bottom-0
        right-0
      "
    >
      <div class="w-72 h-96 bg-white rounded-lg shadow-md">
        <form @submit="Edit" method="patch">
          <div class="h-full w-full flex flex-col">
            <div class="flex flex-grow-0 relative p-2 py-3">
              <div class="font-bold text-center w-full">
                {{ selectedCategory?.name }}
              </div>
            </div>
            <div class="w-full flex flex-grow p-2">
              <div class="w-full flex flex-col space-y-3">
                <div class="border">
                  <input
                    required
                    v-model="desc"
                    class="w-full h-10 px-1"
                    type="text"
                    placeholder="Description"
                  />
                </div>
                <div class="border">
                  <input
                    required
                    v-model="imageUrl"
                    class="w-full h-10 px-1"
                    type="text"
                    placeholder="input"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-grow-0 py-1 justify-center space-x-2">
              <button
                v-on:click="cateModalShown = false"
                class="
                  p-2
                  px-3
                  text-gray-500
                  rounded-md
                  cursor-pointer
                  border border-gray-100
                "
              >
                Cancel
              </button>
              <button
                type="submit"
                class="
                  bg-blue-500
                  p-2
                  px-3
                  text-white
                  rounded-md
                  cursor-pointer
                "
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
</style>
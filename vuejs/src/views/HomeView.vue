<script >
import productApi from "../libs/apis/product";
import categoryApi from "@/libs/apis/category";
import itemApi from "@/libs/apis/item";
import priceApi from "@/libs/apis/price";
export default {
  components: {
   
  },
  data() {
    return {
      products:[],
      categories:[],
      items:[],
      prices:[],
    };
  },
  async mounted() {
    this.products = await productApi.all();
    this.categories = await categoryApi.all();
    this.items = await itemApi.all();
    // this.price = await priceApi.all();
  },
  methods: {},
};
</script>

<template>
  <main>
    <div class="bg-gray-100 py-2 text-center text-lg relative">
      TopOne.com

      <div
        class="
          absolute
          text-white
          right-2
          top-2
          bg-gray-400
          px-2
          rounded-md
          cursor-pointer
        "
      >
        <router-link to="/dashboard"><div class="">Dashboard</div></router-link>
      </div>
    </div>
    <div class="absolute left-20 px-10 space-y-2">
          <div class="flex flex-row top-2 py-2 px-2 space-x-1 bg-gray-100">
          <div class="p-5 border border-gray-500" v-for="product in products" :key="product._id">
            {{ product.title }}
            <p v-for="price in product?.prices" :key="price._id" class="space-x-3">
                <span>{{ price.source }}</span> 
                <span>{{ price.price }}$</span>
            </p>
          </div>
        </div>
    </div>
    <div class="flex width-90px">
        <div class="flex p-6 space-y-2 bg-gray-200">
              <ol style="list-style-type: inherit">
                <li v-for="category in categories" :key="category._id">
                  <h2><b>{{ category.name }}</b></h2>
                  <ol>
                    <li v-for="item in items" :key="item._id">
                        {{ item.name }}
                    </li>
                  </ol>
                </li>
              </ol>
        </div>
    </div>
  </main>
</template>

<style>
</style>
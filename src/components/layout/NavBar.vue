<template>
<nav  class="bg-purple-900 text-white font-bold 
            uppercase flex justify-around border-y2 purple-900">
    <RouterLink v-for="category in categories" :key="category.id" 
    :to="{name: 'category',params:{id:category.id}}"
    class="p-2 hover:bg-white hover:text-purple-900 rounded-lg"
   
    >
        
        
        
        
        {{ category.name }}
    </RouterLink>
</nav>
</template>

<script>
import { http } from "@utils/http.mjs";
export default{
    data(){
        return{
            categories: []
        }
    },
    methods:{
        async getCategories(){
            const response = await http.get('/categories');
            this.categories=response.data.data;
        }
    },
    mounted(){
        this.getCategories();
    }
}
</script>
<template>
    
    <PageLayout>
        <h1 class="text-purple-900 font-bold text-center my-10 text-2xl">{{ category.name }} filmek</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <BaseCard v-for="film in films" :key="film.id" :film="film" />
        </div>
    </PageLayout>

</template>

<script>
    import PageLayout from "@layouts/PageLayout.vue"
    import BaseCard from "@components/BaseCard.vue"
    import {http} from "@utils/http.mjs"

    export default {
        data(){
            return{
                category: {},
                films: []
            }
        },
        methods : {
           async getData(){
                const response = await http.get(`/categories/${this.$route.params.id}`)
                this.category = response.data.data;
                const response2 = await http.get('/films');
                this.films = response2.data.data.filter(x=> x.category_id == this.$route.params.id)
            }
        },
        watch:{
            "$route"(){
                this.getData();
            }
        },
        mounted(){
            this.getData();
        },
        components: {
            PageLayout,BaseCard
        }
    }
</script>
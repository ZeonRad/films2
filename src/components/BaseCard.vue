<template>
    <div class="border-2 border-purple-900 rounded lg">
        <h2 class="bg-purple-900 text-white text-center font-bold p-2">{{ film.title }}</h2>
        <h3 class="text-center font-bold italic">{{ film.year }}</h3>
        <RouterLink :to="{name:'film',params:{id: film.id}}"
        class="mx-auto block border-2 border-purple-900 rounded-lg w-[80%] py-2 text-center font-bold
        mb-2 text-purple-900 hover:text-white"
        >Részletek
            
        </RouterLink>
    </div>
</template>

<script>
export default{
    props: {
        film: Object
    }
}
</script>
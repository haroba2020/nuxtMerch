<template>
    <div>
        <h2>Products</h2>
        <div class="grid grid-cols-4 gap-5"> 
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    //fetch the products
    const {data:products} = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title:'Nuxt merch | merch',
        meta:[
            { name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })

</script>

<style  scoped>
    h2{
        margin-bottom: 20px;
        font-size:36px;
    }
    p{
        margin: 36px;
    }
</style>
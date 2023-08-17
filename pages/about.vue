<template>
    <div>
        <h2>About</h2>
        <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Explicabo
            sit atque eos consectetur eum repellendus officiis tenetur neque a quas?
        </p>
        <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Explicabo
            sit atque eos consectetur eum repellendus officiis tenetur neque a quas?
        </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/currency/:jimbo',{
        method:'post',
        body:{age:30}

    })
    console.log(data)
</script>

<style  scoped>
    h2{
        margin-left: 30px;
        font-size:36px;
    }
    p{
        margin: 36px;
    }
</style>
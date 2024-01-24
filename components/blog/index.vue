<template>
    <div class="container media-container">
        <BlogCard v-for="card in blog" :key="card.id" :card="card" />
    </div>
</template>

<script setup>
const blog = ref([])

onBeforeMount(() => {
    blog.value = [
        {
            id: 1,
            image: '/Card.png',
            authorName: 'TOMAS LAURINAVICIUS',
            title: "How to Reinstall WordPress: 5 Different Methods Depending On Your Needs",
            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it and how to get started.'
        },
        {
            id: 2,
            image: '/Card.png',
            authorName: 'TOMAS LAURINAVICIUS',
            title: "How to Reinstall WordPress: 5 Different Methods Depending On Your Needs",
            description: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it and how to get started.'
        }
    ]
})

</script>

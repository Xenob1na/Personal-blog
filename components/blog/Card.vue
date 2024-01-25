<template>
    <section class="blog-card">
        <div class="blog-card__container">
            <nuxt-link :to="`blog-${card.id}`">
                <div class="blog-card__img">
                    <img :src="card.image" alt="blog" class="card-img">
                </div>
            </nuxt-link>
            <div class="blog-card__content content">
                <p class="content__author-name">BY {{ card.authorName }}</p>
                <h3 class="content__title">{{ card.title }}</h3>
                <p class="content__description">{{ card.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    card: Object
})
</script>

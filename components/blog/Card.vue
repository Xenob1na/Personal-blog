<template>
    <section class="blog-card">
        <div class="blog-card__container">
            <nuxt-link :to="`blog-${card.id}`">
                <div class="blog-card__img">
                    <img :src="card.image" alt="blog" class="card-img">
                </div>
            </nuxt-link>
            <div class="blog-card__content content">
                <p class="content__author-name">BY {{ card.author }}</p>
                <h3 class="content__title">{{ card.title }}</h3>
                <p class="content__description">{{ card.content }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
    category: string;
}

const props = defineProps<{
    card: Blog
}>()
</script>

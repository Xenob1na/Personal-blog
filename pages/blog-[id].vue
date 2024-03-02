<template>
    <MainLayout>
        <section class="blog-item">
            <div class="container blog-item__container">
                <div class="blog-item__content-header content-header">
                    <h1 class="content-header__title">{{ blog.title }}</h1>
                    <p class="content-header__category">Category: {{ blog.category }}</p>
                    <p class="content-header__author-name">BY {{ blog.author }}</p>
                    <div class="content-header__views views">
                        <Icon name="mdi:eye-outline" class="views__icon" />
                        <p class="views__counter">100 просмотров</p>
                    </div>
                </div>
                <div class="blog-item__content-main content-main">
                    <div class="content-main__post-img">
                        <img :src="blog.image" alt="post-preview" class="post-preview">
                    </div>
                    <p class="content-main__description">{{ blog.content }}</p>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
const route = useRoute()

interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
    category: string;
}

const blog = ref<Blog[]>([])

const blogById = async () => {
    try {
        const result: any = await $fetch(`http://localhost:3001/api/v1/blogs/Blogs/` + route.params.id)
        blog.value = result?.data as Blog[]
    } catch (error) {

    }
}

onMounted(() => { blogById() })
</script>
<template>
    <MainLayout>
        <div>
            <ClientOnly>

                <template #fallback>

                    <Loader />
                </template>
            </ClientOnly>

            <Loader v-if="isLoading" />

            <div v-else-if="isBlog" class="container media-container">
                <BlogCard v-for="card in blog" :key="card.id" :card="card" />
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../../layouts/MainLayout.vue';

import { useBlogStore } from '../../stores/blog'
import { storeToRefs } from 'pinia';

const { getBlogs } = useBlogStore()
const { blogs } = storeToRefs(useBlogStore())


interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
    category: string;
}


const blog = ref<Blog[]>([])
const isBlog = ref(false)
const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    try {
        await getBlogs()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
})

onBeforeMount(() => {
    watchEffect(() => {
        blog.value = blogs.value
        if (blogs && blogs.value.length >= 1) {
            isBlog.value = true
        } else {
            isBlog.value = false
        }
    })
})

watch(() => blog.value, () => {
    blog.value = blogs.value
    if (blogs && blogs.value.length >= 1) {
        isBlog.value = true
    } else {
        isBlog.value = false
    }
}, { deep: true })

</script>

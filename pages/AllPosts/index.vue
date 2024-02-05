<template>
    <div>
        <Loader v-if="isPendding" />
        <ClientOnly>

            <template #fallback>

                <Loader />
            </template>
        </ClientOnly>
        <div v-if="isBlog" class="container media-container">
            <BlogCard v-for="card in blog" :key="card.id" :card="card" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '../../stores/blog'
import { storeToRefs } from 'pinia';

const { getNotes } = useBlogStore()
const { blogs, isPendding } = storeToRefs(useBlogStore())


interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    authorName: string;
}


const blog = ref<Blog[]>([])
const isBlog = ref(false)

onMounted(async () => {
    try {
        await getNotes()
    } catch (error) {
        console.log(error)
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

<template>
    <div class="dashboard">
        <div class="dashboard__container container">
            <h1 class="dashboard__title">
                Dashboard
            </h1>
            <div class="dashboard__table">
                <ClientOnly>

                    <template #fallback>

                        <Loader />
                    </template>
                </ClientOnly>
                <Loader v-if="isLoading" />

                <div v-else-if="isBlog">
                    <AdminDashboardItem v-for="dashboard in blog" :key="dashboard.id" :dashboard="dashboard" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from "../../stores/blog"
import { storeToRefs } from 'pinia';

const { getBlogs } = useBlogStore()
const { blogs } = storeToRefs(useBlogStore())

interface Dashboard {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
    category: string;
}

const blog = ref<Dashboard[]>([])
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
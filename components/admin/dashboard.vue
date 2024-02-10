<template>
    <div class="dashboard">
        <div class="dashboard__container container">
            <h1 class="dashboard__title">
                Dashboard
            </h1>
            <div class="dashboard__table">
                <Loader v-if="isPendding" />
                <ClientOnly>

                    <template #fallback>

                        <Loader />
                    </template>
                </ClientOnly>

                <div v-if="isBlog">
                    <AdminDashboardItem v-for="dashboard in blog" :key="dashboard.id" :dashboard="dashboard"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from "../../stores/blog"
import { storeToRefs } from 'pinia';

const { getNotes } = useBlogStore()
const { blogs, isPendding } = storeToRefs(useBlogStore())

interface Dashboard {
    id: number;
    title: string;
    description: string;
}

const blog = ref<Dashboard[]>([])
const isBlog = ref(false)
onMounted(async () => {
    try {
        await getNotes()
    } catch (error) {
        console.log(error)
    }
})



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
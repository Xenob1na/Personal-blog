<template>
    <section class="Main">
        <AuthorCard />
        <Blog />
        <!-- {{ blogs }} -->
    </section>
</template>

<!-- <script setup lang="ts">
import {useBlogStore} from '../stores/blog'
import { storeToRefs } from 'pinia';

const { getNotes } = useBlogStore()
const { blogs } = storeToRefs(useBlogStore())

onMounted(() => {
    getNotes()
})
</script> -->
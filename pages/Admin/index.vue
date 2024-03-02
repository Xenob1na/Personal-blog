<template>
    <AdminLayout>
        <section class="Admin">
            <admin />
        </section>
    </AdminLayout>
</template>

<script setup lang="ts">
 definePageMeta({
    middleware: 'auth' 
})
import AdminLayout from "../../layouts/AdminLayout.vue";
</script>
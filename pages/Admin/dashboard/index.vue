<template>
    <AdminLayout>
        <div class="container" style="margin-top: 50px;">
            <AdminDashboard />
        </div>
    </AdminLayout>
</template>

<script setup lang="ts">
 definePageMeta({
    middleware: 'auth' 
})
import AdminLayout from "../../layouts/AdminLayout.vue";
</script>
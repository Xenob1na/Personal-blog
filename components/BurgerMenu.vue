<template>
    <div class="mobile-nav-wrapper">
        <nav class="mobile-nav" >
            <span class="mobile-nav__btn-close"
                            @click="$emit('close')">
                        <Icon name="material-symbols:close" size="20"/>
                        </span>
            <ul class="mobile-nav__list">
                <li class="mobile-nav__item" v-for="(item, index) in nav" :key="item.name">
                <nuxt-link :to="item.path" class="mobile-nav__link">
                    {{ item.name }}
                </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
const nav = ref([
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'New',
        path: '/New'
    },
    {
        name: 'All Posts',
        path: '/AllPosts'
    },
    {
        name: 'Subscribe',
        path: '/Subscribe'
    },

])
</script>
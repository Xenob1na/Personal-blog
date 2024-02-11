<template>
    <section class="create-post">
        <div class="create-post__container container">
            <h1 class="create-post__title">Create Post</h1>
            <form action="" class="create-post__form form" @submit.prevent="">
                <div class="form__input-wrapper">
                    <label for="title" class="form__label"><b>Title</b></label>
                    <input type="text" class="form__input-title" v-model="blog.title"/>
                </div>
                <div class="form__input-wrapper">
                    <label for="description" class="form__label"><b>Description</b></label>
                    <input type="text" class="form__input-description" v-model="blog.description"/>
                </div>
                <div class="form__input-wrapper">
                    <label for="body" class="form__label"><b>Body</b></label>
                    <textarea name="body"  class="form__input-body" v-model="blog.body"></textarea>
                </div>
                <div class="form__input-wrapper">
                    <label for="image" class="form__label"><b>Image</b></label>
                    <input type="text" class="form__input-image" v-model="blog.image"/>
                </div>
                <div class="form__input-wrapper">
                    <label for="title" class="form__label"><b>Author name</b></label>
                    <input type="text" class="form__input-author" v-model="blog.authorName"/>
                </div>
                <button class="form__button" @click="onSubmit">Create</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useBlogStore } from "../../stores/blog"

const { addBlog } = useBlogStore()


const blog = reactive({
    title: "",
    description: "",
    body: "",
    image: "",
    authorName: ""
})

const onSubmit = async () => {
    try {
        if (blog.title && blog.description && blog.body && blog.image && blog.authorName !=='') {
            await addBlog(blog)
            blog.title = ""
            blog.description = ""
            blog.body = ""
            blog.image = ""
            blog.authorName = ""
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
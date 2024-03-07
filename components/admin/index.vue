<template>
    <section class="create-post">
        <div class="create-post__container container">
            <h1 class="create-post__title">Create Post</h1>
            <form action="" class="create-post__form form" @submit.prevent="">
                <div class="form__input-wrapper">
                    <label for="title" class="form__label"><b>Title</b></label>
                    <input type="text" class="form__input-title" v-model="blog.title" />
                </div>
                <div class="form__input-wrapper">
                    <label for="body" class="form__label"><b>Body</b></label>
                    <textarea name="body" class="form__input-body" v-model="blog.content"></textarea>
                </div>
                <div class="form__input-wrapper">
                    <label for="image" class="form__label"><b>Image</b></label>
                    <input type="text" class="form__input-image" v-model="blog.image" />
                </div>
                <div class="form__input-wrapper">
                    <label for="title" class="form__label"><b>Author name</b></label>
                    <input type="text" class="form__input-author" v-model="blog.author" />
                </div>
                <div class="form__input-wrapper">
                    <label for="title" class="form__label"><b>Category</b></label>
                    <input type="text" class="form__input-description" v-model="blog.category" />
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
    content: "",
    image: "",
    author: "",
    category: ""
})

const onSubmit = async () => {
    try {
        if (blog.title && blog.content && blog.author && blog.category !== '') {
            await addBlog(blog)
            blog.title = ""
            blog.content = ""
            blog.author = ""
            blog.image = ""
            blog.category = ""
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
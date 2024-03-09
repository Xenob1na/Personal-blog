<template>
    <AdminLayout>
        <section class="edit-post">
            <div class="edit-post__container container">
                <h1 class="edit-post__title">Edit Post</h1>
                <form action="" class="edit-post__form form" @click.prevent="">
                    <div class="edit__input-wrapper">
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
                    <button class="form__button" @click="upadateBlog">Remove</button>
                </form>
            </div>
        </section>
    </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '~/layouts/AdminLayout.vue';

const route = useRoute()
const router = useRouter()


const blog = reactive({
    title: "",
    content: "",
    image: "",
    author: "",
    category: ""
})


interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    author: string;
    category: string;
}

const fetchData = async () => {
    try {
        const result: any = await $fetch('http://localhost:3001/api/v1/blogs/Blogs/' + route.params.id);
        const data = result?.data as Blog;

        blog.title = data.title;
        blog.content = data.content;
        blog.image = data.image;
        blog.author = data.author;
        blog.category = data.category;
    } catch (error) {
        console.log(error);
    }
}


const upadateBlog = async () => {
    const token = useCookie('accessToken')
    try {
        await $fetch('http://localhost:3001/api/v1/blogs/Blogs/' + route.params.id, {
            method: 'PUT',
            body: blog,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token.value}`
            }
        })
        router.push('/Admin/dashboard')
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => fetchData())
</script>
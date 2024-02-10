<template>
    <AdminLayout>
        <section class="edit-post">
            <div class="edit-post__container container">
                <h1 class="edit-post__title">Edit Post</h1>
                <form action="" class="edit-post__form form">
                    <div class="edit__input-wrapper">
                        <label for="title" class="form__label"><b>Title</b></label>
                        <input type="text" class="form__input-title" />
                    </div>
                    <div class="form__input-wrapper">
                        <label for="description" class="form__label"><b>Description</b></label>
                        <input type="text" class="form__input-description" />
                    </div>
                    <div class="form__input-wrapper">
                        <label for="body" class="form__label"><b>Body</b></label>
                        <textarea name="body" class="form__input-body"></textarea>
                    </div>
                    <div class="form__input-wrapper">
                        <label for="image" class="form__label"><b>Image</b></label>
                        <input type="text" class="form__input-image" />
                    </div>
                    <div class="form__input-wrapper">
                        <label for="title" class="form__label"><b>Author name</b></label>
                        <input type="text" class="form__input-author" />
                    </div>
                    <button class="form__button">Create</button>
                </form>
            </div>
        </section>
    </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '~/layouts/AdminLayout.vue';
</script>
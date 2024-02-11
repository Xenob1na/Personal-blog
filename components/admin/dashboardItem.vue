<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td style="max-width: 400px;">{{ dashboard.title }}</td>
            <td style="max-width: 400px;">{{ dashboard.description }}</td>
            <td>
                <button class="dashboard__btn-delete" @click="onDeleteBlog(dashboard.id)">
                    <Icon name="mdi:delete-outline" size="20" color="white" />
                </button>
                <nuxt-link to="dashboard/edit-dashboard">
                    <button class="dashboard__btn-edit">
                        <Icon name="mdi:pencil-outline" size="20" color="white" />
                    </button>
                </nuxt-link>
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import { useBlogStore } from '../../stores/blog'

const { deletBlog } = useBlogStore()


const onDeleteBlog = async (id: number) => {
    let res = confirm('Вы действительно хотите удалить Пост?')

    if (!res) return

    try {
        await deletBlog(id)
    } catch (error) {
        console.log(error)
    }
}

interface Dashboard {
    id: number;
    title: string;
    description: string;
}

const props = defineProps<{
    dashboard: Dashboard
}>()
</script>
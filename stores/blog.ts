import { defineStore } from "pinia";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
}

export const useBlogStore = defineStore("blog", {
  state: () => {
    return {
      isCloseOverlay: false,
      blogs: [] as Blog[],
    };
  },
  actions: {
    async getBlogs() {
      try {
        const result: any = await $fetch(
          "http://localhost:3001/api/v1/blogs/Blogs"
        );
        this.blogs = result?.data as Blog[];
      } catch (error) {
        console.log(error);
      }
    },
    async deletBlog(id: number) {},
    async addBlog(blog: any) {},

    async updateBlog(blog: any) {},
  },
});

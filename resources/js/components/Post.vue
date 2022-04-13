<template>
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <h4 class="card-title">{{ category?category.name: '&nbsp;' }}</h4>
            <p class="card-title">{{ content }}</p>

            <router-link class="btn btn-primary" :to="{name: 'single-post', params: {slug: post.slug}}">Vedi articolo completo</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Post',
    props: ['title', 'content', 'slug', 'tags', 'category'],
    data() {
        return {
            strTagliaTesto: 50
        }
    },

    methods: {
        tagliaTesto(text) {
            if(text.lenght > this.strTagliaTesto) {
                return text.substring(this.strTagliaTesto) + '...';
            } else {
                return text;
            }
        }
    }

}
</script>

<style>

</style>
<template>
   <div class="col">
    <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" :src="post.img" role="img" aria-label="Placeholder: Thumbnail" focusable="false">
            <div class="user_tag"><UserTag :imgUrl="post.author.avatar.url" :userName="post.author.username" :carName="post.author.main_auto_name"></UserTag></div>
            <div class="card-body">
            <p class="card-text">    {{ post.text }}  </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small class="text-muted">{{ post.date }}</small>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import UserTag from './UserTag.vue';
    export default {
    components: {
        UserTag
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    }
    }
</script>

<style scooped>

    .user_tag{
        margin: 10px;
    }

    .card-text{
    height: 139px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    }
</style>
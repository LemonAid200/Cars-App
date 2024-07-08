<template>
    <div class="comment">
        <UserTag :imgUrl="Avatar" :carName="UsersCar" :userName="UserName"></UserTag>
        <p class="comment_text">{{ Text }}</p>
    </div>
</template>

<script>
import UserTag from './UserTag.vue'
    export default {
        name: 'Comment',
        props: {
            UserName: String,
            UsersCar: String,
            Avatar: String,
            Date: String,
            Text: String
        },
        components: {
            UserTag
        }
    }
</script>

<style scooped>
    .comment{

    }
    .comment_text{
        text-align: left;
        margin-left: 50px;
        margin-top: 15px;
        border-bottom: 1px solid #e5f2ff;
    }
</style>
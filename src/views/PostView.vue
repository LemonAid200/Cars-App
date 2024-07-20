<template>
  <div class="post" v-if="Object.keys($store.state.posts.postData).length !== 0">
    <h2>{{ $store.state.posts.postData.post.user.main_auto_name }}</h2>
    <img :src="$store.state.posts.postData.post.img" alt="">    

    <div class="user">
      <UserTag :imgUrl="$store.state.posts.postData.post.user.avatar.url" :userName="$store.state.posts.postData.post.user.username" :carName="$store.state.posts.postData.post.user.main_auto_name"></UserTag>
      <p class="post_text">{{ $store.state.posts.postData.post.text }}</p>
    </div>
    <div class="post_comments">
      <Comment v-for="comment in $store.state.posts.postData.comments" 
        :Avatar="comment.user.avatar.url" 
        :UserName="comment.user.username"
        :Text="comment.text"
        :UsersCar="comment.user.main_auto_name"
        :Date="comment.created_at"
        :key="comment.id"
      ></Comment>
    </div>
  </div>
      
      
</template>

<script>
  import UserTag from '@/components/UserTag.vue';
  import Comment from '@/components/Comment.vue';
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'PostView',
    components: {
      UserTag,
      Comment
    },
    data() {
      return {
        postId: 563
      }
    },
    methods: {
      ...mapActions({
        fetchPost: 'posts/fetchPost'
      })
    },
    mounted(){
      if (this.$route.params.id){
        this.postId = this.$route.params.id
        this.fetchPost(this.postId)
      } else if (Object.keys(this.$store.state.posts.postData).length === 0){
        this.fetchPost(this.postId)
      }
    }
  }
</script>

<style scooped>
  .post{
    margin: 0 auto;
    max-width: 500px;
    width: fit-content;
  }

  .post_text{
    max-width: 600px;
    text-align: left;
    margin-top: 10px;
  }

  .post img {
    max-width: 500px;
  }
  .user {
    padding: 10px 10px 0 10px;
    margin: 10px;
    border-bottom: 1px solid #e5f2ff;
  }

  .user_info {
    margin-top: 10px;
    text-align: left;
  }
  /* .user_info__carName {
  }
  .user_info__carModel {
  } */
  .user_info__city {
    color: rgb(165, 165, 165);
  }
</style>
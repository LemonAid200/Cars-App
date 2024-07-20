<template>
  <div class="car_wrapper" v-if="Object.keys($store.state.cars.carData).length !== 0">
    <div class="car">
      <h2>{{ carModel }}</h2>
      <img class="car_img" :src="carImage" alt="">
      

      <div class="user">
        <UserTag :imgUrl="user.avatar.url" :userName="user.username" :carName="user.main_auto_name"></UserTag>
 
        <div class="user_info">
          <div class="user_info__carName"><b>{{ carModel }}</b></div>
          <div class="user_info__carModel">{{ carSpecs }}</div>
          <div class="user_info__city"></div>
        </div>
      </div>
    </div>
      
    <div class="car_posts">
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <PostCard v-for="post in $store.state.posts.postsList.posts" :post="post" @viewPost="goToPost(post.id)" :key="post.id"></PostCard>
            </div>  
          </div>    
        </div>
    </div>

  </div>
    </template>

<script>
  import UserTag from '@/components/UserTag.vue'
  import PostCard from '@/components/PostCard.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'CarView',
    components: {
      PostCard,
      UserTag
    },
    data(){
      return {
        carId: 49,
      }
    },
    computed: {
      ...mapGetters({
        carSpecs: 'cars/carSpecs',
        carModel: 'cars/carModel',
        carImage: 'cars/carImage',
        user: 'cars/carUser',
    })
    },
    methods: {
      ...mapActions({
        fetchCar: 'cars/fetchCar',
        fetchPosts: 'posts/fetchPostsList'
      }),
      goToPost(id){
        this.$router.push({name: 'post', params: { id: id }})

      }
    },
    mounted(){
      if (this.$route.params.id && this.$route.params.id != this.carId){
        this.carId = this.$route.params.id
        this.fetchCar(this.carId)
        this.fetchPosts(this.carId)
      } else if (Object.keys(this.$store.state.cars.carData).length === 0){
        this.fetchCar(this.carId)
        this.fetchPosts(this.carId)
      }
    }
  }

  
</script>

<style scooped>
  .car{
    margin: 0 auto;
    max-width: 500px;
  }
  .car_img {
    width: 100%;
    max-width: 500px;
  }
  .user {
    margin: 10px;
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
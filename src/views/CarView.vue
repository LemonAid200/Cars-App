<template>
    <div class="car">
      <h2>{{ car.brand_name + ' ' +  car.model_name }}</h2>
      <img :src="car.images[0].thumbnail_url" alt="">
      

      <div class="user">
        <UserTag :imgUrl="user.avatar.url" :userName="user.username" :carName="user.main_auto_name"></UserTag>
 
        <div class="user_info">
          <div class="user_info__carName"><b>{{ car.brand_name + ' ' +  car.model_name }}</b></div>
          <div class="user_info__carModel">{{ carModel }}</div>
          <div class="user_info__city"></div>
        </div>
      </div>
    </div>
      
      <div class="car_posts">
        <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <PostCard v-for="post in $store.state.posts.postsList" :post="post" :key="post.id"></PostCard>
      </div>  
    </div>    
  </div>
      </div>
</template>

<script>
  import UserTag from '@/components/UserTag.vue'
  import PostCard from '@/components/PostCard.vue'

  export default {
    name: 'CarView',
    components: {
      PostCard,
      UserTag
    },
    data(){
      return {
        "car": {
          "id": 49,
          "for_sale": 0,
          "brand_name": "Volkswagen",
          "model_name": "Tiguan",
          "year": 2018,
          "price": null,
          "brand_id": 49,
          "model_id": 5,
          "engine_id": 82,
          "transmission_id": 2,
          "place_id": "ChIJZf-0KTq_SkERpxQXi49I6WU",
          "name": "Volkswagen Tiguan TSI AT 2018 г.",
          "city_name": "",
          "country_name": "",
          "transmission_name": "AT",
          "place_name": "",
          "images": [
            {
              "id": 771,
              "is_primary": true,
              "size": 81685,
              "index": 0,
              "url": "http://am111.05.testing.place/uploads/user/37/auto/49/fc40ee0a0dbf97b2e504b2f48438a8ba.jpg",
              "thumbnail_url": "http://am111.05.testing.place/uploads/user/37/auto/49/fc40ee0a0dbf97b2e504b2f48438a8ba_w500.jpg",
              "image500": "http://am111.05.testing.place/uploads/user/37/auto/49/fc40ee0a0dbf97b2e504b2f48438a8ba_w500.jpg",
              "image100": "http://am111.05.testing.place/uploads/user/37/auto/49/fc40ee0a0dbf97b2e504b2f48438a8ba_w100.jpg"
            },
            {
              "id": 774,
              "is_primary": false,
              "size": 85444,
              "index": 1,
              "url": "http://am111.05.testing.place/uploads/user/37/auto/49/8259070a7d50bf391d04305e88044230.jpg",
              "thumbnail_url": "http://am111.05.testing.place/uploads/user/37/auto/49/8259070a7d50bf391d04305e88044230_w500.jpg",
              "image500": "http://am111.05.testing.place/uploads/user/37/auto/49/8259070a7d50bf391d04305e88044230_w500.jpg",
              "image100": "http://am111.05.testing.place/uploads/user/37/auto/49/8259070a7d50bf391d04305e88044230_w100.jpg"
            },
            {
              "id": 777,
              "is_primary": false,
              "size": 70610,
              "index": 2,
              "url": "http://am111.05.testing.place/uploads/user/37/auto/49/1afed15a50cb12d45984ecc54eca3539.jpg",
              "thumbnail_url": "http://am111.05.testing.place/uploads/user/37/auto/49/1afed15a50cb12d45984ecc54eca3539_w500.jpg",
              "image500": "http://am111.05.testing.place/uploads/user/37/auto/49/1afed15a50cb12d45984ecc54eca3539_w500.jpg",
              "image100": "http://am111.05.testing.place/uploads/user/37/auto/49/1afed15a50cb12d45984ecc54eca3539_w100.jpg"
            }
          ],
          "in_selection_count": 0,
          "followers_count": 15,
          "follow": false,
          "engine": "2.0 TSI",
          "engine_name": "TSI",
          "engine_volume": "2.0",
          "is_moderated": true
        },
        "user": {
          "id": 37,
          "username": "lexer7",
          "avatar": {
            "path": "uploads/user/37/avatars/hkVsjX1d8CUWIfNRLk4Bo29NBMFsAio1sQiKSV5o.jpg",
            "url": "http://am111.05.testing.place/uploads/user/37/avatars/hkVsjX1d8CUWIfNRLk4Bo29NBMFsAio1sQiKSV5o.jpg"
          },
          "auto_count": 1,
          "main_auto_name": "Volkswagen Tiguan"
        }
      }
    },
    computed: {
      carModel(){
        return this.car.engine + ' ' + this.car.transmission_name + ' · ' + this.car.year
      }
    }
  }

  
</script>

<style scooped>
  .car{
    margin: 0 auto;
    width: fit-content;
  }
  .car img {
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
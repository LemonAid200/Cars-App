<template>
  <div class="post">
    <h2>{{ post.post.user.main_auto_name }}</h2>
    <img :src="post.post.img" alt="">    

    <div class="user">
      <UserTag :imgUrl="post.post.user.avatar.url" :userName="post.post.user.username" :carName="post.post.user.main_auto_name"></UserTag>
      <p class="post_text">{{ post.post.text }}</p>
    </div>
    <div class="post_comments">
      <Comment v-for="comment in post.comments" 
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
  export default {
    name: 'PostView',
    components: {
      UserTag,
      Comment
    },
    data() {
      return {
        post: {
  "car_id": 40,
  "post": {
    "id": 121,
    "text": "Поскольку после аварии пострадали два передних колеса (ПП было просто в кашу, левое можно было восстановить) возник вопрос по поиску колес. Бюджет был уже крайне ограничен, поэтому вариант покупать такие же новые колёса сразу отпал. Б/у ничего подобного не было, 2 колеса продавать никто не хотел и возник ступор…\r\nНо тут на авито появился отличный вариант!\r\n\r\nВсего за 5тыс рублей я мог получить 4 колеса на родных литых дисках Toyota/Lexus. По параметрам все подходило.\r\nВ этот же день приехали, посмотрели, было пару небольших недочетов, но они оказались незначительными. В итоге спустя 10 минут мы уже возвращались с Волжского с комплектом \"новых\" колес.\r\nВнешний вид у них был подуставший, поэтому покупались диски для дальнейшей покраски.\r\n\r\nЗабрал на радостях машину и заметил нереальную трясучку руля и непотяные звуки при повороте. А про симфонии издающиеся на неровностях я вообще молчу.\r\nВернулся назад, начали смотреть колеса и как выяснилось, ЦО диска было меньше и оно пролезло только 1мм и держалось только на болтах. Решено было стачивать ЦО диска, чтобы он налез.\r\nЦелый день я объезжал кучу сервисов и шиномонтажек и даже в местах, где написано правка/ремонт дисков, я получал отказ от этой работы.\r\n\r\nВ конце концов я решил позвонить своему хорошему знакомому PRAvich, который делал мне MD-Tuning. И о чудо, он сразу же дал мне контакт человека, который может все сделать.\r\n\r\nНа след день я доехал до него и спустя пару-тройку часов все встало как родное! Дядь Саш, если читаешь, спасибо тебе огромнейшее!)",
    "like_count": 6,
    "created_at": "2018-12-24 17:01:45",
    "comment_count": 1,
    "img": "http://am111.05.testing.place/uploads/user/29/auto/40/post/121/12676e6544cc8f5ffe56c37ac0ceeb9b.jpg",
    "user": {
      "id": 29,
      "username": "youforia",
      "avatar": {
        "path": "uploads/user/29/avatars/PPlt1dKOyNAjALxjnQPcR4TxmSzm6NNSJdZCaelp.jpg",
        "url": "http://am111.05.testing.place/uploads/user/29/avatars/PPlt1dKOyNAjALxjnQPcR4TxmSzm6NNSJdZCaelp.jpg"
      },
      "auto_count": 3,
      "main_auto_name": "BMW X5"
    },
    "author": {
      "id": 29,
      "username": "youforia",
      "avatar": {
        "path": "uploads/user/29/avatars/PPlt1dKOyNAjALxjnQPcR4TxmSzm6NNSJdZCaelp.jpg",
        "url": "http://am111.05.testing.place/uploads/user/29/avatars/PPlt1dKOyNAjALxjnQPcR4TxmSzm6NNSJdZCaelp.jpg"
      },
      "auto_count": 3,
      "main_auto_name": "BMW X5"
    },
    "mentions": []
  },
  "comments": [
    {
      "id": 581,
      "text": "за 5к столько добра? ORLY?",
      "created_at": "2019-03-30 12:20:15",
      "img": null,
      "img_size": null,
      "user": {
        "id": 96,
        "username": "kosh1987",
        "avatar": {
          "path": "uploads/user//avatars/383f0451e2db53f094a00e55e2cda3d7.jpg",
          "url": "http://am111.05.testing.place/uploads/user//avatars/383f0451e2db53f094a00e55e2cda3d7.jpg"
        },
        "auto_count": 1,
        "main_auto_name": "Mazda 3"
      },
      "mentions": []
    }
  ]
}
      }
    }
  }
</script>

<style scooped>
  .post{
    margin: 0 auto;
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
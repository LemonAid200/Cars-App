<template>
    <div class="user_head">
        <img :src="imgUrl" alt="avatar">
        <div class="user_head__name"><b>{{ userName }}</b></div>
        <div class="user_head__carName">{{ carName }}</div>
    </div>
</template>
<script>
    export default {
        name:'UserTag',
        props: {
            imgUrl: String,
            userName: String,
            carName: String
        }
    }
</script>

<style scooped>
  .user_head {
    display: grid;
    grid-template-columns: 70px 1fr;
    justify-content: start;
    text-align: left;

  }
  .user_head img {
    height: 50px;
    width: 50px;
    grid-column: 1 / 1;
    grid-row: 1 / 3;
  }
  .user_head__name {
    
  }
  .user_head__carName {
    color: rgb(165, 165, 165);
  }
</style>
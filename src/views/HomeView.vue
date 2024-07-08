<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <CarCard v-for="car in $store.state.cars.carsList" :car="car" :key="car.id"></CarCard>
      </div>  
    </div>    
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    CarCard
  },
  data(){
  },
  methods: {
    ...mapActions({
      fetchCarsList: 'cars/fetchCarsList'
    })
  },
  mounted() {
    console.log('mounted')
    this.fetchCarsList()
  }
}
</script>
<style scooped>

</style>
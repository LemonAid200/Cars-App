import { createStore } from 'vuex'
import { carsModule } from './carsModule'
import { postsModule } from './postsModule'

export default createStore({
  modules: {
    carsList: carsModule,
    postsList: postsModule
  }
})

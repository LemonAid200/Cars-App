import { createStore } from 'vuex'
import { carsModule } from './carsModule'

export default createStore({
  modules: {
    carsList: carsModule
  }
})

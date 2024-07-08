import axios from "axios"

export const carsModule = {
    state: () => ({
        carsList: []
    }),
    getters: {
      
    },
    mutations: {
      setCarsList(state, carsList){
        state.carsList = carsList
        console.log('setCarsList')
      }
    },
    actions: {
      async fetchCarsList({state, commit}){
        try {
          console.log('fetching')
          const response = await axios.get('http://am111.05.testing.place/api/v1/cars/list')
          commit('setCarsList', response.data)
        } catch (e) {
          console.error(e)
        }
      }
    },
    namespaced: true
}
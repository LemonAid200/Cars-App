import axios from "axios"

export const carsModule = {
    state: () => ({
        carsList: [],
        carData: {}
    }),
    getters: {
      carSpecs(state){
        return state.carData.car.engine + ' ' + state.carData.car.transmission_name + ' · ' + state.carData.car.year
      },
      carModel(state){
        return state.carData.car.brand_name + ' ' +  state.carData.car.model_name
      },
      carImage(state){
        return state.carData.car.images[0].thumbnail_url
      },
      carUser(state){
        return state.carData.user
      }
    },
    mutations: {
      setCarsList(state, carsList){
        state.carsList = carsList
      },
      setCarData(state, car){
        state.carData = car
      }
    },
    actions: {
      async fetchCarsList({ state, commit }){
        try {
          const response = await axios.get('http://am111.05.testing.place/api/v1/cars/list')
          commit('setCarsList', response.data)
        } catch (e) {
          console.error(e)
        }
      },
      async fetchCar({ state, commit }, id){
        try {
          const response = await axios.get(`http://am111.05.testing.place/api/v1/car/${id}`)
          commit('setCarData', response.data)
          console.log(response.data)
        } catch (e){
          console.error(e)
        }
      }
    },
    namespaced: true
}
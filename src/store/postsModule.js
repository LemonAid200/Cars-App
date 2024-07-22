import axios from "axios"

export const postsModule = {
    state: () => ({
        postsList: [],
        postData: {}
    }),
    mutations: {
      setPostsList(state, postsList){
        state.postsList = postsList
      },
      setPostData(state,  postData){
        state.postData = postData
      }
    },
    actions: {
      async fetchPostsList({commit}, id){
        try {
          const response = await axios.get(`https://am111.05.testing.place/api/v1/car/${id}/posts`)
          commit('setPostsList', response.data)
        } catch (e) {
          console.error(e)
        }
      },
      async fetchPost({commit}, id){
        try {
          const response = await axios.get(`https://am111.05.testing.place/api/v1/post/${id}`)
          commit('setPostData', response.data)
        } catch (e) {
          console.error(e)
        }
      }
    },
    namespaced: true
}
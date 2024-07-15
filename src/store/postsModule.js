import axios from "axios"

export const postsModule = {
    state: () => ({
        postsList: [],
        postData: {}
    }),
    mutations: {
      setPostsList(state, postsList){
        state.postsList = postsList
        console.log('setPostsList')
      },
      setPostData(state,  postData){
        state.postData = postData
        console.log('set postData')
      }
    },
    actions: {
      async fetchPostsList({commit}, id){
        try {
          const response = await axios.get(`http://am111.05.testing.place/api/v1/car/${id}/posts`)
          console.log(response.data, 'fetching posts')
          commit('setPostsList', response.data)
        } catch (e) {
          console.error(e)
        }
      },
      async fetchPost({commit}, id){
        try {
          const response = await axios.get(`http://am111.05.testing.place/api/v1/post/${id}`)
          console.log(response.data, 'fetching POST')
          commit('setPostData', response.data)
        } catch (e) {
          console.error(e)
        }
      }
    },
    namespaced: true
}
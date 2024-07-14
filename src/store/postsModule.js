import axios from "axios"

export const postsModule = {
    state: () => ({
        postsList: [
            {
              "id": 317,
              "text": "Фух, что-то никак не мог добраться до бортовика. Под конец года, конечно, работы много и с долгами в Новый год не хочется. У Вас, кстати, нет запар перед Новым Годом? Подарки всем купи, дела все сделай. При этом повсюду очень много людей, которые хотят всего того же самого.\r\nСегодня, спустя две с небольшим недели я поставил машину на учёт. Сначала, когда забрал ее из салона, я как-то не торопился, думал покататься пару дней и поехать ставить на учёт, но, видимо, перед Новым Годом народу много не только в магазинах, но и в ГИБДД, потому что сайт госуслуг любезно предложил мне дату через девять дней от даты подачи заявления. Ну, куда деваться, решил, раз прилетаю на штраф, то необходимо оставшееся до регистрации время окупать отсутствие номеров, благо, камер в округе много…)\r\nВсе-таки, как бы мы не любили хаять наше дорогое правительство и государственные структуры, а с появлением возможности подавать документы и вставать в очередь электронно процесс стал значительно приятней, потому весь процесс регистрации с площадкой и всеми документами занял порядка 30 минут (особенно позабавил инспектор выполнявший финальные действия, потому что он гораздо сильнее был увлечён трансляцией матча Арсенал — Тотенхэм, чем приемом документов (Кто победил, кстати?)",
              "like_count": 6,
              "created_at": "2018-12-29 15:36:49",
              "comment_count": 1,
              "img": "http://am111.05.testing.place/uploads/user/37/auto/49/post/317/29172dc67491a591f9f04d88d76d684b.jpg",
              "author": {
                "id": 37,
                "username": "lexer7",
                "avatar": {
                  "path": "uploads/user/37/avatars/hkVsjX1d8CUWIfNRLk4Bo29NBMFsAio1sQiKSV5o.jpg",
                  "url": "http://am111.05.testing.place/uploads/user/37/avatars/hkVsjX1d8CUWIfNRLk4Bo29NBMFsAio1sQiKSV5o.jpg"
                },
                "auto_count": 1,
                "main_auto_name": "Volkswagen Tiguan"
              }
            },
            {
              "id": 253,
              "text": "Вообще сегодня я планировал поставить машину на оклейку прозрачной матовой пленкой, кстати, как думаете в мате будет смотреться круче или хуже? Мне кажется, что интересней, потому что матовая плёнка сделает все грани кузова, а их много, более выразительными. Но, пленка ещё не приехала в сервис, поэтому процедура переносится на следующую неделю.\r\n\r\nПравда, у меня тут возник следующий вопрос. Кто каким бензином заправляется и что посоветует? Дело в том, что на лючке написано заправлять 98, а у меня в округе ни на одной заправке его нет. Точнее есть 100 на BP, но про неё вечно какие-то не очень хорошие отзывы слышу. Поэтому пока залил 95. Но и тут возникает вопрос — что лучше? 95 простой или 95 экто/g drive/ultimate? На прошлой машине (opel astra j GTC) заправлялся 95 экто и к 36 тысячам пробега прилетел на капиталку двигателя. Благо машина была на гарантии и все починили, но ОД уверял меня, что это из-за плохого бензина и рекомендовал заправляться обычным 95, потому что в нем нет никаких присадок. ОД ВАГа сказал наоборот, заправляйте 95 с присадками. Поэтому хочу услышать Ваше мнение — чем заправляетесь?",
              "like_count": 6,
              "created_at": "2018-12-27 20:56:28",
              "comment_count": 2,
              "img": "http://am111.05.testing.place/uploads/user/37/auto/49/post/253/51e3d7aaa76d3968cc4904bcb20e3172.jpg",
              "author": {
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
        ],
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
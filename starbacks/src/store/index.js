import { createStore } from 'vuex'

export default createStore({
  // どういうデータを保存するか
  state: {
    count: 0,
    memos: []
  },
  // データのget
  getters: {
    getCount: (state)=> {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  // データの変更
  mutations: {
    /* メモを保存する */
    save (state, newMemo) {
      if (newMemo.id) {
        let x = state.memos.find(memo => memo.id === newMemo.id)
        x.title = newMemo.title
        x.content = newMemo.content
      } else {
        newMemo.id = ++state.count
        state.memos.push(newMemo)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

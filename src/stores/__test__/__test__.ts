import { defineStore } from 'pinia'
import { testRequest } from "@/service/__test__/test";

const useTestStore = defineStore('test',{

  state: ():any => {
    return { testData:null}
  },

  actions:{
    async testAction() {
      this.testData = await testRequest()
    }
  }
})

export default useTestStore
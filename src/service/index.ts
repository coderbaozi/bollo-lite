import Request from './request'

// replace ajax lib may be causes a name conflict
const fetch = new Request({
  baseURL: '',
  timeout: 3000,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFilureFn: (err :any) => {
      return err
    },
    responseSuccessFn: (res :any) => {
      return res
    },
    responseFilureFn: (err: any) => {
      return err
    }
  }
})

export default fetch
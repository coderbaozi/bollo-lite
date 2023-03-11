import Request from './request'

// replace ajax lib may be causes a name conflict
const fetcher = new Request({
  // test example
  baseURL: 'https://v.api.aa1.cn/api/yiyan/index.php',
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

export default fetcher
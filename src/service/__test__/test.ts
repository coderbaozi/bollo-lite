import fetcher from "../index"

export async function testRequest() {
  return await fetcher.get({url:``})
}
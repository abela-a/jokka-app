export default function (context, inject) {
  const appId = 'AU76LZPZMU'
  const apiKey = '2712e9e5eb310f50fe7ff1e1ff1e0dbd'

  inject('dataApi', {
      getHome
  })

  async function getHome(homeId){
    const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
      headers:{
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,
      }
    })
    const json = await response.json()
    return json
  }
}
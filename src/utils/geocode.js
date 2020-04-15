const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?limit=1&access_token=pk.eyJ1IjoiYmhhdnJveTA3IiwiYSI6ImNrODlucXhvYjA3ejQzbnBrbjR6Zmp2ZTkifQ.5-ppwa-HTqQcNBax08Jyhg'
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            callback('no net connection',undefined)
        }
        else if(response.body.features.length===0)
        {
            callback('no location ',undefined)
        }
        else{
            callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })


        }

    })


}
module.exports = geocode
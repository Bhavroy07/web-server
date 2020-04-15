const request=require('request')
const forecast= (latitude,longitude,callback)=>{ 
    const url='https://api.darksky.net/forecast/c1c54c92f81b7830dfaf504229370b9c/'+latitude+','+longitude 
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('no net connection',undefined)
        }
        else if(response.body.error)
        {
            callback('wrong coordinates',undefined)
        }
        else{callback(undefined,{
            temperature:response.body.currently.temperature,
            preci:response.body.currently.precipProbability,
            latitude:latitude,
            longitude:longitude
        })
        }
        
    })

}
module.exports=forecast

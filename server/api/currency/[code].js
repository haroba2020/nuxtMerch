export default defineEventHandler(async(event)=>{
    const {code} = event.context.params
    const securityKey = useRuntimeConfig().securityKey

    return{
        params:code + securityKey
    }
})
export default defineEventHandler(async(event) => {
  const {name}=getQuery(event)

  const {age} = await readBody(event)

  //Api call with private key
  // const {data} = await $fetch('')
  return {
    messange: `hello ${name} you are ${age} years old`
  }
})

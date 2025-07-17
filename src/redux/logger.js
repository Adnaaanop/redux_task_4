const logger=(store)=>(next)=>(action)=>{
    console.log("Dispatching ",action)
    next(action)
    console.log("Next state: ",store.getState())
}
export default logger
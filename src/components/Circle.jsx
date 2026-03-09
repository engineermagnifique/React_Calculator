const Circle=({prop,status})=>{
    console.log(status);
    return(
        <div className={`w-14 h-14 rounded-full ${status==='correct' ? 'bg-blue-500' : status==='fail'? 'bg-red-500':'bg-gray-500'} flex items-center justify-center text-white font-bold`}>{prop}</div>
    )
}
export default Circle;
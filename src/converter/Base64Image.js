//Image to base 64 converter function
async function ImagetoBase64(file){
const reader = new FileReader()
reader.readAsDataURL(file)

const base64ToImage = new Promise ((resolve,reject)=>{
    reader.onload  =()=>resolve(reader.result)
    reader.onerror = (err)=>reject(err)
})
return base64ToImage
}
export  {ImagetoBase64}

let count = new XMLHttpRequest
console.log(count)
count.open("GET","https://restcountries.com/v3.1/all");
count.send()
count.onload=function(){
const data = JSON.parse(count.response)
for(let i=0; i<data.length;i++){

   console.log(data[i].name.common)
   console.log(data[i].region)
   console.log(data[i].subregion)
   console.log(data[i].population)
   console.log("--------------------------")
 
}

}
 
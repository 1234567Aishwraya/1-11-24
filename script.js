let clockwatch = document.createElement("div")
clockwatch.className="clockwatch"

document.body.appendChild(clockwatch)

function print(){
    setInterval(()=>{
        let date=new Date();
        clockwatch.innerText= date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds()
    },1000)
}
print()

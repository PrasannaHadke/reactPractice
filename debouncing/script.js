const increment_btn = document.querySelector('.increment_btn')
const btnPress = document.querySelector('.increment_pressed')
const count = document.querySelector('.increment_count')


let triggerCount = 0;
let pressedCount = 0;

const myDebounce = (cb,d)=>{
let timer;
return function(...args){
    if (timer) clearTimeout(timer)
    timer = setTimeout(()=>{
        cb(...args)
    },d)
}
}

const debouncedCount = myDebounce(()=>{ 
    triggerCount += 1;
    count.innerHTML = ++triggerCount;
},800)

increment_btn.addEventListener("click",(e)=>{
    btnPress.innerHTML = ++pressedCount;
    debouncedCount()
})
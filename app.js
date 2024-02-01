

let output=document.getElementById("output")
    let input=document.getElementById("input").value
function register(){
    let output=document.getElementById("output")
    let input=document.getElementById("input").value
    if(input.length==0){
    //     output.innerHTML="please enter below field"
    //     output.classList.remove("d-none")
    //     output.classList.add("error")
    // setTimeout(()=>{
    //     output.classList.remove("success")
    //     output.classList.add("d-none")
    //     // output.innerHTML=""
    // },2000)
    let error=document.getElementById("error")
            error.innerHTML="please fill below field"
            output.classList.remove("d-none")
            output.classList.add("error")
         setTimeout(()=>{
        let error=document.getElementById("error")
            output.classList.remove("error")
            output.classList.add("d-none")
            // input.innerHTML=""
    },2000)
    }
    else{
        output.classList.remove("d-none")
            output.classList.add("success")
            output.innerHTML="Task added"
        setTimeout(()=>{
            output.classList.remove("error")
            output.classList.add("d-none")
            output.innerHTML=""
            // input.innerHTML=""
        },2000)
    }
    // ----------------------------------------------------------------------------------------------------
    let secondContainer=document.getElementById("secondContainer")
    let clearBtn=document.getElementById("clearBtn")


    if(input==""){
        div.classList.add('d-none')
    }
    else{
        let div=document.createElement("div")
    let checkbox=document.createElement("input")
    checkbox.type='checkbox'
    let para=document.createElement("p")
    let btn=document.createElement("button")
    btn.innerHTML="Delete"
    btn.classList.add('btn')
    btn.addEventListener("click",()=>{
        div.classList.remove("todo-list")
        div.classList.add("d-none")
    })
    clearBtn.addEventListener("click",()=>{
        secondContainer.classList.remove("secondContainer")
        // secondContainer.classList.add("d-none")
        secondContainer.innerHTML=""
    })
    
    div.classList.add('todo-list')
    checkbox.classList.add('check')
    para.classList.add('text')
    div.appendChild(checkbox)
    div.appendChild(para)
    div.appendChild(btn)
    secondContainer.appendChild(div)

    para.innerHTML=input
    }  
        
    
    
    
}
    
 




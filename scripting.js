
let lead = []
let inputbox = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let savebtn = document.getElementById("save-btn")
let deletbtn = document.getElementById("DEL-el")
let tabbtn = document.getElementById("tab-el")
let leadsFromStore = JSON.parse(localStorage.getItem("lead"))
if(leadsFromStore){
    lead = leadsFromStore 
    renderRead(lead)
}

 tabbtn.addEventListener("click" , function(){
    chrome.tab.query({active: true,currentWindoe: true},function(tabs){
        lead.push(tabs[0].url)
        localStorage.setItem("lead",JSON.stringify("lead"))
        renderRead(lead)
    })
 })

deletbtn.addEventListener('dblclick',function(){
    localStorage.clear()
    lead = []
    renderRead(lead)
})

savebtn.addEventListener("click", function() {
        lead.push(inputbox.value)
        inputbox.value = ""
        localStorage.setItem("lead",JSON.stringify(lead))
        renderRead(lead)
})

function renderRead(lead){
    let listlead = ""
    for(let i=0 ; i<lead.length ; i++){
      listlead += `
        <li>  
            <a href='${lead[i]}' target='black'> 
              ${ lead[i]} 
            </a>
        </li>` 
   }

   ulEl.innerHTML = listlead
}














  // ulEl.innerHTML += "<li>"+ lead[i] +  "</li>"   
        // let li = document.createElement("li")
       // li.textContent +=lead[i]
       // ulEl.appendChild(li)
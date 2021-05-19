const searchwrappers = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
const icon = document.querySelector(".icon");

// if user press any-key and release
inputBox.onkeyup = (e) =>{
    let userData = e.target.value;
    let emptyArry = [];
    if(userData){
        emptyArry = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArry = emptyArry.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchwrappers.classList.add("active");
        showsuggestions(emptyArry);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
            
        }
       
    }else{
        searchwrappers.classList.remove("active");
    }
    
}
function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchwrappers.classList.remove("active");
}

function showsuggestions(list) {
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
icon.addEventListener("click", ()=>{
    let val = inputBox.value;
    document.querySelector("a").setAttribute("href","https://www.google.com/search?q=" + val);
    // document.querySelector("a").setAttribute("href","https://www.youtube.com/results?search_query=+" + val);
})

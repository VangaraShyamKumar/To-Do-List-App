const inputValue = document.getElementById("input-box");
const listItems = document.getElementById("list-container");

function addTask()
{
  if(inputValue.value === '')
    {
      alert("ENTER YOUR TEXT");
    }
    else
    {
      let li = document.createElement("li");
      li.innerHTML = inputValue.value;
      listItems.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML='\u00d7';
      li.appendChild(span);
    }
    inputValue.value=" ";
    storeData();
}

listItems.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("options");
    storeData();

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    storeData();

  }
}, false);

function storeData()
{
  localStorage.setItem("data",listItems.innerHTML);
}

function showData()
{
  listItems.innerHTML=localStorage.getItem("data");
}
showData();
// variables 
document.querySelector('form').addEventListener('submit',addToList);


function addToList(e)
{
    const inputval = document.querySelector('#no').value;
    if(inputval === null || inputval === '' || Number(inputval) <=0)
    {
      alert("Enter a Number > 0");
    }
    else
    {
        loadData(Number(inputval));
    }
 

    e.preventDefault();
}


// load Data from the API 
function loadData(numberofJokes)
{
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberofJokes}`, true);
  
  xhr.onload = function()
  {
    const theObj = JSON.parse(this.responseText);
    const theJokes = theObj.value;
    let sum = 0;
    const idList = theJokes.map(item =>{item.id});
    theJokes.forEach(element => {
    //   console.log(element.id + ' ' + element.joke );
       updateUI(numberofJokes,element.id,element.joke);
       sum +=element.id;
    });
    updateTotal(sum);
    
  }
  

  xhr.send();
}

// Update UI
function updateUI(num,id, joke)
{
const ul = document.querySelector('#list');
const li = document.createElement('li');

li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lh-condensed');

li.innerHTML = `
<div>
<h6 class="my-0">New Joke</h6>
<small class="text-muted">${joke}</small>
</div>
<span class="text-muted">$${id}</span>
`  ;
ul.appendChild(li);
document.querySelector('#total').innerHTML =num;
}


// Update Sum
// Update UI
function updateTotal(sum)
{
   
const li = document.querySelector('#sum');
   li.innerHTML =`$${sum}`;
}
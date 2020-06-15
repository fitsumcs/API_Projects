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
    theJokes.forEach(element => {
    //    console.log(typeof element.id + ' ' + element.joke );
       updateUI(element.id,element.joke);
    });
  }

  xhr.send();
}


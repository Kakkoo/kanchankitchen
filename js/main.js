var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);

xhr.send();

xhr.onload = function() {
    if(xhr.status === 200){
       var myStuff = JSON.parse(xhr.responseText);
       console.log(myStuff);
    }
}
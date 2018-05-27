fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((res) => {
        createCards(res);
    })
    .catch(err => console.log(err))


function createCards(result) {
    var details = document.getElementById('userDetails');
    details.innerHTML += "UserId: " + result.userId  ;
    details.innerHTML += "Id:   " + result.id  ;
    details.innerHTML += "Title: " + result.title  ;
    details.innerHTML += "Completed:  " + result.completed  ;
}

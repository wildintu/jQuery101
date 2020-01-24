//both are sibling elements
function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'Milk and bread';
    list.appendChild(item);
}

$('#button-id').click(function() {
    let item = '<li>Apples and oranges</li>';
    $('#grocery-list').append(item);
    //or option below
    //$('#grocery-list').append('<li>Apples and oranges</li>');
});

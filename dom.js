//both are sibling elements
function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'Milk and bread';
    list.appendChild(item);
}

$('#button-id').click(function() {
    let item = '<li class="red">Apples and oranges</li>';
    $('#grocery-list').append(item);
    //or option below
    //$('#grocery-list').append('<li>Apples and oranges</li>');
});

$('#style-me').click(function() {
    $('.red').css('color', 'red');
});

$(document).ready(function() {
    $('<div></div>').css({
        'background-color': 'red',
        'height': '100px',
        'width': '100px'
    }).insertAfter('#grocery-list');
});
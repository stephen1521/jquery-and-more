let myDiv = $('<div></div>');
let myBody = $('#myBody');

myBody.append(myDiv);
myDiv.text('Click Here');
let myUl = $('<ul></ul>');
myBody.append(myUl);

let myInput = $('#myInput');
myDiv.on('click', () => {
    let listItem = $('<li></li>');
    listItem.text(myInput.val());
    myUl.append(listItem);
    myInput.val('');
});


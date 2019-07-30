var header = $('h1')
var message = $('.message')


// console.log(header);
// console.log(message);

var button = $('.submit');
console.log(button)

var gallery = $('.peppa');

button.on("click", sayhello);

function sayhello() {
  event.preventDefault();
  var name = $('.name-input');
  message.text(`we've been waiting all summer, and we're so glad you're finally here!!!! ${name.val()}!`);
  gallery.empty()
  gallery.append(`<img src="https://junkee.com/wp-content/uploads/2018/04/peppapig.jpg">`)
  console.log("we've been waiting all summer, and we're so glad you're finally here!" + name)
}

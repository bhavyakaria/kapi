//This Chrome extention does not use javascript but future js file will go here

function copy(txt) {
    var text = txt;
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('website').addEventListener('click', () => {
        copy('http://bhavyakaria.github.io/');
    });

    document.getElementById('linkedin').addEventListener('click', () => {
        copy('https://www.linkedin.com/in/bhavyakaria/');
    });

    document.getElementById('github').addEventListener('click', () => {
        copy('https://github.com/bhavyakaria');
    });

    document.getElementById('stack-overflow').addEventListener('click', () => {
        copy('https://stackoverflow.com/users/4511489/bhavya-karia');
    });
});
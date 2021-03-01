//This Chrome extention does not use javascript but future js file will go here

function getLocalStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.get(key, function (value) {
                resolve(value);
            });
        }
        catch (ex) {
            reject(ex);
        }
    });
}

function loadData() {
    getLocalStorageValue("total_links").then((res) => {

    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadData();
});


function copy(txt) {
    var text = txt;
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

$(function () {

    loadData();

    $(".add-link-button").on('click', function (e) {
        var idClicked = e.target.id;

        getLocalStorageValue('total_links').then((res) => {
            console.log(JSON.stringify(res));
            alert(JSON.stringify(res));
        });

        $('flex').clone().appendTo('.flex-container');
    });

    $(".copy").on('click', function (e) {
        var idClicked = e.target.id;
        getLocalStorageValue('sample').then(() => {
            alert('Sample');
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    // Fetch text file content using native AJAX
    document.getElementById('fetch-text').addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'textfile.txt', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('text-content').innerText = xhr.responseText;
            }
        };
        xhr.send();
    });
});

$(document).ready(function() {
    // Fetch text file content using jQuery AJAX
    $('#fetch-text-jquery').click(function() {
        $.ajax({
            url: 'textfile.txt',
            method: 'GET',
            success: function(data) {
                $('#text-content-jquery').text(data);
            },
            error: function() {
                alert('Error fetching the text file.');
            }
        });
    });

    // Fetch and display JSON data using getJSON
    $('#fetch-json').click(function() {
        $.getJSON('data.json', function(parsedData) {
            $('#json-content').html(
                '<strong>Name:</strong> ' + parsedData.name + '<br>' +
                '<strong>Age:</strong> ' + parsedData.age + '<br>' +
                '<strong>Email:</strong> ' + parsedData.email
            );
        }).fail(function() {
            alert('Error fetching JSON data.');
        });
    });
});

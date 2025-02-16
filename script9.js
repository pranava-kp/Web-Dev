$(document).ready(function() {
    // Append content to paragraph and list
    $('#append-content').click(function() {
    $('#paragraph').append(' <strong>Appended text.</strong>');
    $('#list').append('<li>New Item</li>');
    });
    // Animate the div and change its color
    $('#animate-div').click(function() {
    $('#animated-div')
    .animate({ width: '300px', height: '150px' }, 1000) // Animation
    .toggleClass('animate-background'); // Change color using CSS class
    });
    })  
$(document).ready(
    function()
    {
    $('#append-content').click(function() 
    {
        $('#paragraph').append(' <strong>Appended text.</strong>');
        $('#list').append('<li>New Item</li>');
    });
    
    $('#animate-div').click(function()
    {
    $('#animated-div')
    .animate({ width: '300px', height: '150px' }, 1000)
    .toggleClass('animate-background');
    });
    })  
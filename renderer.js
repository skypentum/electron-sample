// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
$( function() {
    $( "#drag-form" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<form method="post"></form>'
            $('.render-page').append(result)
        } 
    })
    $( "#drag-text" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<input type="text" name="test-text">'
            if($('.render-page').find('form') == undefined) {
                $('.render-page').append(result)
            } else {
                $('.render-page form').append(result)
            }     
        } 
    })
    $( "#drag-textarea" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<textarea name="test-textarea"></textarea>'
            if($('.render-page').find('form') == undefined) {
                $('.render-page').append(result)
            } else {
                $('.render-page form').append(result)
            }     
        } 
    })
    $( "#drag-label" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<p name="test-label">label</p>'
            if($('.render-page').find('form') == undefined) {
                $('.render-page').append(result)
            } else {
                $('.render-page form').append(result)
            }     
        } 
    })
    $( "#drag-button" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<button>submit</button>'
            if($('.render-page').find('form') == undefined) {
                $('.render-page').append(result)
            } else {
                $('.render-page form').append(result)
            }     
        } 
    })
})
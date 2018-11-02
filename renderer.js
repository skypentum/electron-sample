// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
$( function() {
    $( "#drag-text" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<input type="text" name="test-text">'
            $('.render-page').append(result)
        } 
    })
    $( "#drag-password" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<input type="password" name="test-password">'
            $('.render-page').append(result)
        } 
    })
    $( "#drag-email" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<input type="email" name="test-email">'
            $('.render-page').append(result)
        } 
    })
    $( "#drag-textarea" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {            
            let result = '<textarea name="test-textarea"></textarea>'
            $('.render-page').append(result)    
        } 
    })
    $( "#drag-label" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            Dialogs(prompt).prompt('Label을 입력하세여.', 'Label', function(data) {
                let result = '<div name="test-label">'+data+'</div>'
                $('.render-page').append(result)  
            })
        } 
    })
    $( "#drag-button" ).draggable({ 
        opacity: 0.7, 
        helper: "clone",
        stop: function() {
            let result = '<button class="submit-btn" onclick="formSubmit();">submit</button>'
            $('.render-page').append(result) 
        } 
    })
})

// function formSubmit() {
//     let id = 'ID : ' + $('[name=test-text]').val() + '<br>'
//     let password = 'Password : ' + $('[name=test-password]').val()+ '<br>'
//     let email = 'E-mail : ' + $('[name=test-email]').val()+ '<br>'
//     let content = 'Content : '+ $('[name=test-textarea]').val()+ '<br>'
//     let result = 'Result : <br>' + id + password + email + content
//     let render = '<div class="result-area">'+result+'</div>'
//     $('.render-page').append(render)
// }
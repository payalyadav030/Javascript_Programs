// google bot and crawler
// header, footer, nav, article, aside, section,crumbs, audio and video
// audio - is used to embed sound contents in documents
//audio -> attributes =  loop, controls, muted  
// video-> attributes = loop, controls, muted
// Forms improvements -> create forms and attribute- required (to check whether the form is filled or not), step, minlength,maxlength, min max (for numbers)
// New semantic elements-> mark, figure,data,time,output, progress etc(go through it)
// improvement -> iframe
// MathML -> GO THROUGH IT
// WEB WORKERS
// History API- the Dom window object provides access to the browser's session history through the history object
// back and forward button
// drag and drop button
// full screen




///////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $('#go-back').on('click', function(){
       // console.log(window); // here window means the particular widow we are working on, basically it represnts the entire tags
      // console.log(window.history.length);
      //console.log(window.history.back());
      window.history.back();

    });

    $('#go-forward').on('click', function(){
        window.history.forward();

    });
    $('#go-fullscreen').on('click', function(){
        toggleFullScreen();
    })
    
    function toggleFullScreen(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            if(document.exitFullscreen){
                document.exitFullscreen();
            }
        }
    }
})
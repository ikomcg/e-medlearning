//open close list
const header = document.getElementsByTagName('header')[0]
const img = header.getElementsByTagName('img')[0]
img.addEventListener('click', function(){
    window.location.href = '/index.html'
})
document.getElementById('open-list').addEventListener('click',function(){
    document.getElementById('nav-bar').style.left = '0'
    document.getElementsByTagName('body')[0].classList.add('active-list')
    document.onclick = function(e) {
        if( e.target.id !== 'open-list' && e.target.id !== 'nav-ul' && e.target.id !== 'list-1' && e.target.id !== 'list-2'  && e.target.id !=='list-3' && e.target.id !=='list-4' && e.target.id !== 'nav-bar'){
           
            document.getElementById('nav-bar').style.left = '-500px'
            document.getElementsByTagName('body')[0].classList.remove('active-list')
        }
    }
   
})

window.addEventListener('load', function(){
        windwidth();
})

//search bar style in 1300px below
function windwidth(){
    if(window.innerWidth <= 1300){
        document.getElementsByClassName('bi bi-search-heart')[0].addEventListener('click',function(){
            document.getElementById('div-srch').style.display = 'flex';
            document.onclick = function(e) {
                if(e.target.id !== 'search-button' && e.target.id !=='inpt-srch'){
                    document.getElementById('div-srch').style.display = 'none'
                  
                }
            }
            document.onscroll = function(e){
                document.getElementById('div-srch').style.display = 'none'
            }
        })
    }
}
document.onscroll = function(e){
    document.getElementById('nav-bar').style.left = '-500px'
    document.getElementsByTagName('body')[0].classList.remove('active-list')
}

//search list
document.getElementsByTagName('input')[0].addEventListener('keyup',function(){
    const inp = document.getElementsByTagName('input')[0].value.toLocaleLowerCase();
    const e = inp.replace(" ", "")
    document.getElementsByClassName('search-result')[0].style.display = 'block'
    const resul = document.getElementById('src-result');
    const a = resul.getElementsByTagName('li')
    
   
    for(let i = 0 ; i < a.length ; i++){
     const b = a[i].innerText;
     const c = b.replace(" ", "")
   
        if(!c.toLocaleLowerCase().includes(e)){
           a[i].style.display = 'none'

        }
        else if(c.toLocaleLowerCase().includes(e)){
            a[i].style.display = 'block'
        } 
       
   }
   var totalHidden = resul.querySelectorAll('li[style="display: none;"]').length
   if(totalHidden == 27){
     document.getElementById('no-rslt').style.display = 'block'
   }
   else{
    document.getElementById('no-rslt').style.display = 'none'
   }
})

   
    
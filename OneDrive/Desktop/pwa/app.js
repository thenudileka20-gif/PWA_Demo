document.getElementById('ping').addEventListener("click" , function(){
    document.getElementById('out').textContent="JS is working";
})

if('serviceworker' in navigation){
    navigator.serviceWorker.register('switch.js')
    .then(()=> console.log ('service Worker registered'))
    .catch(err=> console.log('SW registration failed',err));
}
// Chat
{

}

{
}

{
    function domEventPromise(element, eventName) {
        function executor(resolve) {
            function eventHandler(event) {
                resolve(event);
                element.removeEventListener(eventName, eventHandler);
            }
    
            element.addEventListener(eventName, eventHandler);
        }
    
        return new Promise(executor);
    }
    
    const button = document.getElementById('knopka');
    domEventPromise(button, 'click')
        .then(event => console.log('Event "click" happens:', event));
    
}
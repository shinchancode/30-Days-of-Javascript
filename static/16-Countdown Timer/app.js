document.addEventListener('DOMContentLoaded', () =>{
    const timeLeftDisplay = document.querySelector('#time-left')
    const timeDisplay = document.querySelector('#Time-left')
    const startBtn = document.querySelector('#start-button')
    const stopBtn = document.querySelector('#stop-button')

    let timeLeft=10;

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft = timeLeft - 1
        }, 1000)
    }

    function Stop(){
        timeLeft = 0;
        timeLeftDisplay.innerHTML = timeLeft
        return;
    }

    // function resetCount(){
    //         if(timeLeft = 0) {
    //             countDown()
    //         }
    //         timeLeftDisplay.innerHTML = timeLeft
    //         timeLeft = timeLeft - 1
        
    // }

    timeDisplay.addEventListener('input', (e) => {
        timeLeft=e.target.value;
    });
    startBtn.addEventListener('click', countDown)
    stopBtn.addEventListener('click', Stop)
    // resetBtn.addEventListener('click', resetCount)
})
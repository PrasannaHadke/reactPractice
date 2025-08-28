(function(){
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.sec');

    let startBtn = document.querySelector('.start');
    let stopBtn = document.querySelector('.stop');
    let resetBtn = document.querySelector('.reset');

    let countdownTimer = null;

    // START or CONTINUE
    startBtn.addEventListener('click', () => {
        if ((parseInt(hour.value) || 0) === 0 &&
            (parseInt(minute.value) || 0) === 0 &&
            (parseInt(second.value) || 0) === 0) return;

        startBtn.style.display = 'none';
        stopBtn.style.display = 'inline-block';

        countdownTimer = setInterval(timer, 1000);
    });

    // STOP / PAUSE
    stopBtn.addEventListener('click', () => {
        stopInterval();
        stopBtn.style.display = 'none';
        startBtn.style.display = 'inline-block';
        startBtn.innerHTML = 'Continue';
    });

    // RESET
    resetBtn.addEventListener('click', () => {
        stopInterval();
        hour.value = '';
        minute.value = '';
        second.value = '';
        startBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
        startBtn.innerHTML = 'Start';
    });

    function stopInterval() {
        clearInterval(countdownTimer);
    }

    function timer() {
        let h = parseInt(hour.value) || 0;
        let m = parseInt(minute.value) || 0;
        let s = parseInt(second.value) || 0;

        if (h === 0 && m === 0 && s === 0){
            stopInterval();
            hour.value = '';
            minute.value = '';
            second.value = '';
            startBtn.style.display = 'inline-block';
            stopBtn.style.display = 'none';
            startBtn.innerHTML = 'Start';
            return;
        }

        if (s > 0) {
            s--;
        } else {
            if (m > 0) {
                m--;
                s = 59;
            } else if (h > 0) {
                h--;
                m = 59;
                s = 59;
            }
        }

        // Update input fields with leading zeros
        hour.value = h > 9 ? h : "0" + h;
        minute.value = m > 9 ? m : "0" + m;
        second.value = s > 9 ? s : "0" + s;
    }
})();

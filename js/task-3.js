class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            description: document.querySelector('.timer-description'),
            days: document.querySelector('span[data-value="days"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            secs: document.querySelector('span[data-value="secs"]'),
        }
    }

    timer() {
        setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = this.targetDate - currentDate;
            this.updateClock(deltaTime);
        }, 1000);
    };

    updateClock(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.mins.textContent = `${mins}`;
        this.refs.secs.textContent = `${secs}`;
        this.refs.description.textContent = `До Нового года осталось!!!`
    }

    pad(value) {
        return String(value).padStart(2, '0')
    };
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});

countdownTimer.timer();




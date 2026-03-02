package classes;

public class Time {
    private int seconds;
    private int minutes;
    private int hours;

    public Time(int hours, int minutes, int seconds) {
        if (seconds < 60)
            this.seconds = seconds;
        else
            this.seconds = 0;

        if (minutes < 60)
            this.minutes = minutes;
        else
            this.minutes = 0;

        if (hours < 60)
            this.hours = hours;
        else
            this.hours = 0;
    }

    public String toString() {
        return this.hours + ":" + this.minutes + ":" + this.seconds;
    }

    public void addSecond() {
        this.seconds++;
        if (this.seconds == 60) {
            this.minutes++;
            this.seconds = 0;
        }

        if (this.minutes == 60) {
            this.minutes = 0;
            this.hours++;
        }
    }

    public void addSeconds(int seconds) {
        this.seconds += seconds;
        this.minutes += this.seconds / 60;
        this.seconds = this.seconds % 60;

        this.hours += this.minutes / 60;
        this.minutes = this.minutes % 60;

    }
}
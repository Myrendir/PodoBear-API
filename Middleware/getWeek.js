Date.prototype.getWeek = function (dowOffset) {
    dowOffset = typeof (dowOffset) == 'int' ? dowOffset : 0;
    const newYear = new Date(this.getFullYear(), 0, 1);
    let day = newYear.getDay() - dowOffset;
    day = (day >= 0 ? day : day + 7);
    const daynum = Math.floor((this.getTime() - newYear.getTime() -
        (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
    let weeknum;
    if (day < 4) {
        weeknum = Math.floor((daynum + day - 1) / 7) + 1;
        if (weeknum > 52) {
            nYear = new Date(this.getFullYear() + 1, 0, 1);
            nDay = nYear.getDay() - dowOffset;
            nDay = nDay >= 0 ? nday : nday + 7;
            weeknum = nday < 4 ? 1 : 53;
        }
    } else {
        weeknum = Math.floor((daynum + day - 1) / 7)
    }
    return weeknum;
};

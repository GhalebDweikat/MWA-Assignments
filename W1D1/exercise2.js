{
    'use strict';

    function isWeekend(){
        const todayDate = new Date();
        const day = todayDate.getDay();

        const weekdays = [1, 2, 3, 4, 5, 6];
        return weekdays.indexOf(day) === -1;
    }

    console.log(isWeekend());
}
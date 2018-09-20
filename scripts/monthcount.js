'use strict';

const yearsArr = ['год', 'года','лет'],
monthArr = ['месяц', 'месяца', 'месяцев'],
daysArr = ['день', 'дня', 'дней'];

function getData(element, dateStart) {
    let diffDate = new Date(new Date() - dateStart);

    let years = diffDate.toISOString().slice(0, 4) - 1970,
    month = diffDate.getMonth(),
    days = diffDate.getDate();

    if (years === 0) {
        element.html(`${txtToTime (month, monthArr)} и ${txtToTime (days, daysArr)}`);
    }
    else if (month === 0) {
        element.html(`${txtToTime(years, yearsArr)} и ${txtToTime (days, daysArr)}`);
    }
    else {
        element.html(`${txtToTime(years, yearsArr)}, ${txtToTime (month, monthArr)} и ${txtToTime (days, daysArr)}`);
    }
};

function txtToTime (date, arr) {
    let text = '';
    let num = date % 100;

    if (num > 19) {
        num = num % 10;
    }

    if(num === 2 || num === 3 || num === 4) {
        text = `${date} ${arr[1]}`;
    } else if(num === 1) {
        text = `${date} ${arr[0]}`;
    } else {
        text = `${date} ${arr[2]}`;
        }

    return text;
};

getData($('#work_time'), new Date('2016-08-23'));
getData($('#exp-in-work'), new Date('2018-07-06'));

setInterval(function(){
    console.info('update dates');
    getData($('#work_time'), new Date('2016-08-23'));
    getData($('#exp-in-work'), new Date('2018-07-06'));
},100000);
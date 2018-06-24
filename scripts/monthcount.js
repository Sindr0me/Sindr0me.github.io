let workTime = document.querySelector('#work_time');

var sdt = new Date('2016-08-23');
var difdt = new Date(new Date() - sdt);

years= difdt.toISOString().slice(0, 4) - 1970;
month = difdt.getMonth();

function textTimeYears (years, yearsWords) {
    console.log(yearsWords);
    let text = '';

    let num = years % 100;
    if (num > 19) {
        num = num % 10;
    }

    if(num === 2) {
       text = `${years} ${yearsWords[1]}`;
    } else if(num === 1) {
        text = `${years} ${yearsWords[0]}`;
    } else {
        text = `${years} ${yearsWords[2]}`; 
        }
    
    return text;
}

function textTimeMonth(month, monthWords) {
    console.log(monthWords);
    let text = '';

    let num = month % 100;
    if (num > 19) {
        num = num % 10;
    }

    if(num === 2) {
        text = `${month} ${monthWords[1]}`;
     } else if (num === 1) {
         text = `${month} ${monthWords[0]}`;
     } else {
         text = `${month} ${monthWords[2]}`; 
         }
     
     return text;
}

workTime.innerHTML = `${textTimeYears(years, ['год', 'года','лет'])} и ${textTimeMonth (month, ['месяц', 'месяца', 'месяцев'])}`;


function submitForm() {
    const random = require('random')
    const schedule = require('node-schedule');
    const Form = require("google_forms_api")
    const prompt = require('prompt-sync')();

    const winston = require('winston');
    const winstonRotator = require('winston-daily-rotate-file');

    var randomHour = require('random-hour');
    var randomMinute = require('random-minute');
    var randomSecond = require('random-second');

    const form = new Form('REDACTED') // Form id

    const optionSelectorQuestion1 = random.int((min = 1), (max = 5)) // uniform integer in [ min, max ]
    const optionSelectorQuestion2 = random.int((min = 1), (max = 12)) // uniform integer in [ min, max ]

    var question1Option1 = 'Information Systems';
    var question1Option2 = 'Pre-Engineering';
    var question1Option3 = 'Biomedicine';
    var question1Option4 = 'Law & Public Safety';
    var question1Option5 = 'Business & Finance';

    var question2Option1 = 'Aries (March 21 - April 19)';
    var question2Option2 = 'Taurus (April 20 - May 19)';
    var question2Option3 = 'Gemini (May 21 - June 20)';
    var question2Option4 = 'Cancer (June 21 - July 22)';
    var question2Option5 = 'Leo (July 23 - August 22)';
    var question2Option6 = 'Virgo (August 23 - September 22)';
    var question2Option7 = 'Libra (September 23 - October 22)';
    var question2Option8 = 'Scorpio (October 23 - November 21)';
    var question2Option9 = 'Sagittarius (November 22 - December 21)';
    var question2Option10 = 'Capricorn (December 22 - January 19)';
    var question2Option11 = 'Aquarius (January 20 - February 18)';
    var question2Option12 = 'Pisces (February 19 - March 20)';

/*    console.log(optionSelectorQuestion1)
    console.log(optionSelectorQuestion2)*/

    // 1

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 1) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option1,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 2) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option2,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 3) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option3,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 4) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option4,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 5) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option5,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 6) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option6,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 7) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option7,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 8) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option8,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 9) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option9,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 10) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option10,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 11) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option11,
        })
    }

    if (optionSelectorQuestion1 === 1 && optionSelectorQuestion2 === 12) {
        form.setData({
            "entry.253057050": question1Option1,
            "entry.429411091": question2Option12,
        })
    }

    // 2

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 1) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option1,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 2) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option2,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 3) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option3,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 4) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option4,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 5) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option5,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 6) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option6,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 7) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option7,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 8) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option8,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 9) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option9,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 10) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option10,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 11) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option11,
        })
    }

    if (optionSelectorQuestion1 === 2 && optionSelectorQuestion2 === 12) {
        form.setData({
            "entry.253057050": question1Option2,
            "entry.429411091": question2Option12,
        })
    }

    // 3

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 1) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option1,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 2) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option2,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 3) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option3,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 4) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option4,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 5) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option5,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 6) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option6,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 7) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option7,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 8) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option8,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 9) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option9,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 10) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option10,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 11) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option11,
        })
    }

    if (optionSelectorQuestion1 === 3 && optionSelectorQuestion2 === 12) {
        form.setData({
            "entry.253057050": question1Option3,
            "entry.429411091": question2Option12,
        })
    }

    // 4

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 1) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option1,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 2) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option2,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 3) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option3,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 4) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option4,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 5) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option5,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 6) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option6,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 7) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option7,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 8) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option8,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 9) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option9,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 10) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option10,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 11) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option11,
        })
    }

    if (optionSelectorQuestion1 === 4 && optionSelectorQuestion2 === 12) {
        form.setData({
            "entry.253057050": question1Option4,
            "entry.429411091": question2Option12,
        })
    }

    // 5

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 1) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option1,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 2) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option2,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 3) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option3,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 4) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option4,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 5) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option5,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 6) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option6,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 7) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option7,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 8) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option8,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 9) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option9,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 10) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option10,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 11) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option11,
        })
    }

    if (optionSelectorQuestion1 === 5 && optionSelectorQuestion2 === 12) {
        form.setData({
            "entry.253057050": question1Option5,
            "entry.429411091": question2Option12,
        })
    }

    var randomHour = require('random-hour');
    var randomMinute = require('random-minute');
    var randomSecond = require('random-second');

    // var randomHour = randomHour({ twentyFour: true });
    /*    var randomHour = prompt('What is the hour now: ');*/
    /*    var randomMinuteMinValue = prompt('Random minute minimum value: ');*/

    var randomHour = 18 // randomHour({ min: 10, max: 15 }); //

    var randomMinute = randomMinute(); // randomMinute({ min: 52 });

    var randomSecond = randomSecond()

    // console.log('-----')
    // console.log('hour: ' + randomHour)
    // console.log('minute: ' + randomMinute)
    // console.log('second: ' + randomSecond)
    // console.log(' ')

    var date = new Date('September 28, 2021 ' + randomHour + ':' + randomMinute + ':' + randomSecond);

    console.log(form.data)
    console.log(date)

    var j = schedule.scheduleJob(date, function () {
        form.send((res) => {
            console.log("Form has been submitted at " + date + ".")
        })
    });
}

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/main2.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

submitForm()
submitForm()
submitForm()
submitForm()
submitForm()
submitForm()
submitForm()
submitForm()
submitForm()
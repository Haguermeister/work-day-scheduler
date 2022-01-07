const date = luxon.DateTime.now();
var timeBlocks = JSON.parse(localStorage.getItem("timeBlocks"));
if (!timeBlocks) {
    var timeBlocks = [{
        time: 9,
        ref: 0,
        value: '',
        timeDisp: "9 AM"
    }, {
        time: 10,
        ref: 1,
        value: '',
        timeDisp: "10 AM"
    }, {
        time: 11,
        ref: 2,
        value: '',
        timeDisp: "11 AM"
    }, {
        time: 12,
        ref: 3,
        value: '',
        timeDisp: "12 PM"
    }, {
        time: 13,
        ref: 4,
        value: '',
        timeDisp: "1 PM"
    }, {
        time: 14,
        ref: 5,
        value: '',
        timeDisp: "2 PM"
    }, {
        time: 15,
        ref: 6,
        value: '',
        timeDisp: "3 PM"
    }, {
        time: 16,
        ref: 7,
        value: '',
        timeDisp: "4 PM"
    }, {
        time: 17,
        ref: 8,
        value: '',
        timeDisp: "5 PM"
    }];
}
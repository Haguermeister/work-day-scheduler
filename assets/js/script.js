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
$("#calendarDate").text(date.toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));
var main = $("#main");
for (var i = 0; i < timeBlocks.length; i++) {
    main.append(
        $("<form>", { "class": "d-flex col-12 justify-content-center align-items-center formListen" }).append([
            $("<div>", { "class": "p-3 col-2 bg-white borderT" }).text(timeBlocks[i].timeDisp),
            $("<input>", { "class": "p-4 col-8 bg-secondary textD opacity-50 form-control" }, { "type": "text" }).attr("id", i).val(timeBlocks[i].value),
            $("<button>", { "class": "p2 col-2 btn btn-primary" }, { "type": "submit" }).html('<i class="fa fa-save"></i>')
        ]));
    if (timeBlocks[i].time == date.hour) {
        $("#" + timeBlocks[i].ref).addClass("bg-danger text-white");
    }
    else if (timeBlocks[i].time > date.hour) {
        $("#" + timeBlocks[i].ref).addClass("bg-success text-white");
    }
}
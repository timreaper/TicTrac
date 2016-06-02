/**
 * Created by Ed on 02/06/2016.
 */

Handlebars.registerHelper('dateFormatter', function (date) {
    var dateChanged = new Date(date);
    var day = dateChanged.getDate();
    var monthIndex = dateChanged.getMonth();

    var months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];

    return months[monthIndex] + ' ' + day;
});

Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
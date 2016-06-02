/**
 * Created by Ed on 02/06/2016.
 */
var tweets = new function () {
    this.data = {};

    this.load = function () {
        $.getJSON("app/assets/data.json", function (data) {
            tweets.data = data;
        }).done(function () {
            $('#page').html(TicTrac.home(tweets.data));
        }).fail(function () {
            alert("Sorry but the tweets could not be loaded. Please try again later!");
        });
    }
};
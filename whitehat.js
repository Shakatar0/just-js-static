function waitForStep2(callback)
{
    var checkExist = setInterval(function() {
        if (document.getElementById('step-2').getAttribute('class') == 'row step active') {
           clearInterval(checkExist);
           callback(true);
        }
     }, 100); // check every 100ms
}

function checkVoteValidity(callback)
{
    var checkExist = setInterval(function() {
        if (document.getElementById('redirectModal').getAttribute('class') == 'modal fade in') {
           clearInterval(checkExist);
           callback(true);
        }
     }, 100); // check every 100ms
}

document.getElementsByClassName('form-control')[8].value = 'oroor';
document.getElementsByClassName('button')[0].click();

waitForStep2(function() {
    document.getElementsByClassName('btn btn-block btn-success website')[2]
    document.getElementsByClassName('btn btn-block btn-success website')[2]
    document.getElementsByClassName('btn btn-block btn-success website')[2].click();
})
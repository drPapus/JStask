function alertInfo() {
    alert('Заплати за сайт!');
}

(function checkTime(){
    var timeInSec =Math.round(Date.now()/1000);

    if(timeInSec> 1518542058 ){
        alertInfo();
    }

    console.log(timeInSec);
})();

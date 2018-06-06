function Counter(element) {
    var that = this;
    that.element = element;

    var counter = 0;
    var record;
    var flag = true;
    that.init = function () {

        record = document.getElementsByClassName(that.element)[0];

    }

    that.init();

    that.startCount = function (finalValue) {
        if (flag == true) {
            flag = false;
            var startId = setInterval(function () {
                //I found the following piece of code in internet
                record.innerHTML = counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                if (counter >= finalValue) {
                    clearInterval(startId);
                    //I found this piece of code in internet to express Count value with comma.
                    record.innerHTML = finalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                if(finalValue>50000)
                    counter+=512;
                else if(finalValue<50000 && finalValue > 10000)
                    counter+=347;
                else if(finalValue<10000 && finalValue >1000)
                    counter+=58;
                else
                    counter+=23;
            }, 20);


        }

    }

}
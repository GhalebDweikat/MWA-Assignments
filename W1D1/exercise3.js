{
    'use strict';
    const applyCoupon = function(item){
        return function(percentage){
            item.price -= item.price*percentage/100;
            return item;
        }
    }

    const item = {
        "name":"Biscuits",
        "type":"regular",
        "category":"food",
        "price":200
    }



    console.log(applyCoupon(item)(10).price === 180);
}



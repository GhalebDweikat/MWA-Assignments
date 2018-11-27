{
    'use strict';

    String.prototype.filterWords1 = function(blockedWords){
        let words = this.split(' ');

        words = words.map(function(word){
            if(blockedWords.indexOf(word) > -1)
                return `***`;
            else
                return word;
        });

        return words.join(' ');
    }

    console.log( "This house is nice!".filterWords1(['house', 'nice']));


    String.prototype.filterWords2 = function(blockedWords){
        let words = this.split(' ');
        let censorWords = new Promise(function(resolve, reject){
            try {
                words = words.map(function (word) {
                    if (blockedWords.indexOf(word) > -1)
                        return `***`;
                    else
                        return word;
                });
                resolve(words.join(' '));
            }catch (e) {
                reject(e);
            }
        });
        censorWords.then()

    }

    console.log( "This house is nice!".filterWords2(['house', 'nice']));


}
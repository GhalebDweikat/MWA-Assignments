const {Observable, from} = rxjs;
const {map, reduce} = rxjs.operators;

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

    console.log( "1. This house is nice!".filterWords1(['house', 'nice']));

    // Promise

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
        return censorWords;
    }

    "2. This house is nice!".filterWords2(['house', 'nice'])
        .then(d => console.log(d))
        .catch(err => console.log(err));

    // Await

    const filter = async function(input, blockedWords){
        let words = input.split(' ');

        words = words.map(function(word){
            if(blockedWords.indexOf(word) > -1)
                return `***`;
            else
                return word;
        });

        return words.join(' ');
    }


    String.prototype.filterWords3 = async function(blockedWords){
        //return await filter(this, blockedWords);
        return await this.filterWords2(blockedWords);
    }

    "3. This house is nice!".filterWords3(['house', 'nice'])
        .then(d => console.log(d))
        .catch(err => console.log(err));

    // Observable

    String.prototype.filterWords4 = function(blockedWords){
        let words = this.split(' ');
        return from(words)
            .pipe(
                map(o => blockedWords.indexOf(o) > -1?`***`:o),
                reduce((total, current) => {return `${total} ${current}`})
            );
    }

    "4. This house is nice!".filterWords4(['house', 'nice']).subscribe( v => console.log(v));

}
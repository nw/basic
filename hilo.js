
    var min = 1,
        max = 100,
        guesses = [],
        num = randomNum(max),
        found = false;

    console.log("secret number", num);

    while (!found) {
        guess();
    }


    function guess() {
        var low = getHighestLow(),
            high = getLowestHigh(),
            current = {
                num: low + Math.floor((high - low) / 2)
            };

        if (current.num < num){ current.dir = -1; }
        else if (current.num > num){ current.dir = 1; }
        else { current.dir = 0; }


        if (current.num === num) found = true;

        guesses.push(current);

        //console.log(guesses.length, current);

    }

    function getHighestLow() {
        var low = min;

        guesses.forEach(function (guess) {
            if (guess.dir === -1 && guess.num > low) {
                low = guess.num;
            }
        });

        return low;
    }

    function getLowestHigh() {
        var high = max;

        guesses.forEach(function (guess) {
            if (guess.dir === 1 && guess.num < high) {
                high = guess.num;
            }
        });

        return high;

    }

    function randomNum(max) {
        return Math.ceil(Math.random() * max);
    }

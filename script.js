$(function () { 
const randomizer = (min, max) => min + Math.round(Math.random() * (max - min));

    let arr = [16];
    for (let i = 0; i < 16; i++) {
        let n = randomizer(1, 16);
        while (arr.some(index => index == n)) {
            n = randomizer(1, 16);
        }
        arr[i] = n;
        $('.block').eq(i).addClass(`elem${arr[i]}`)
    };
    
    $('#start,.1,.2,.3,.4,.5,.6,.7,.8,.9,.10,.11,.12,.13,.14,.15,.16').sortable({
        connectWith: '.test',
    })
    
    let count = 0;
    function sorter() {
        let i = 0;
        let children = $('.block2').children();
        while (i < children.length) {
            if (!children[i].classList.contains(`elem${i+1}`)) {
                count++
            }
            i++
        }
    }  

    let len = 0;
    function sort() {
        let sortable = $('.block2');
        for (let i = 0; i < 15; i++){
            if (sortable[i].children.length == 0) {
                len++
            }
        }
    }

    $('#check').click(() => {
        sorter()
        sort()
        if (len > 0) {
            alert('Щось не так!')
        }
         else if (count > 0) {
            alert('Щось не так!')
        }
        else {
            alert('Все правильно!')
        }
        count = 0;
        len = 0;
        })    
})




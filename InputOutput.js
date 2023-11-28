// TOGGLE CHINESE CHARACTER
$(document).ready(function(){
    $('#engword1').click(function(){
        $('.character1').toggleClass('active');
        $('.character2nd').toggleClass('active');
        $('.character3rd').toggleClass('active');
        $('.character4th').toggleClass('active');
        console.log("clicked");
    })
})

$(document).ready(function(){
    $('.character1').click(function(){
        $('.first-english-word').toggleClass('active');
        console.log("clicked");
    })
})

$(document).ready(function(){
    $('.character2nd').click(function(){
        $('.second-english-word').toggleClass('active');
        console.log("clicked");
    })
})

$(document).ready(function(){
    $('.character3rd').click(function(){
        $('.third-english-word').toggleClass('active');
        console.log("clicked");
    })
})

$(document).ready(function(){
    $('.character4th').click(function(){
        $('.fourth-english-word').toggleClass('active');
        console.log("clicked");
    })
})

// $(document).ready(function(){
//     $('.character4th').click(function(){
//         $('.final-revealment').toggleClass('active');
//         console.log("clicked");
//     })
// })

$(document).ready(function(){
    $('.final-revealment').click(function(){
        $('.actual-meaning').toggleClass('active');
        console.log("clicked");
    })
})



// RANDOMNESS

// $(document).ready(function(){
//     $('#first-character').click(function(){
//         $('#first-character').toggleClass('character1');
//     })
// })

// var yi = ["偏概全","古为镜","貌取人"];

// var i = Math.floor(Math.random() * yi.length);

// console.log(yi[i]);

// $(document).ready(function() {
    
//     $('#first-character').click(function() {

//         var yi_idiom = $('#last-3-characters');

//         var yi_random_idiom = yi[Math.floor(Math.random() * yi.length)];

//         yi_idiom.text(yi_random_idiom);
//     });
// });





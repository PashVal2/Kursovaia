form_groups = document.querySelectorAll('.group');



form_groups.forEach((group) => {
    var label = group.querySelectorAll('.lForInp')[0];
    group.addEventListener('click', (e) => {
        var inp = group.querySelectorAll('.inp')[0];
        var label = group.querySelectorAll('.lForInp')[0];
        inp.focus()
        label.classList.add('focus')
    })
    
    var inp = group.querySelectorAll('.inp')[0];
    inp.addEventListener('focusout', (e) => {
        var label = group.querySelectorAll('.lForInp')[0];

        if (inp.value == "") {
            label.classList.remove('focus')
        }
    })
    inp.addEventListener('focus', (e) => {
        var inp = group.querySelectorAll('.inp')[0];
        label.classList.add('focus')
    })
})

// menuHome = document.getElementById('home')

// menuHome.classList.add('greenback');
// window.addEventListener('scroll', function() {
//     if (0 == window.scrollY) {
//         menuHome.classList.add('greenback');
//     }
//     if (window.scrollY > 0) {
//         menuHome.classList.remove('greenback');
//     }
// })

document.addEventListener('DOMContentLoaded', () => {

    const about = document.querySelector('.nav li a[href="#"]');
    // Handling the click of ABOUT of navbar
    about.addEventListener('click', () => {
        document.querySelector('.top-section').innerHTML ='';
        document.querySelector('.top-section').innerHTML = '<div class="modal-content"><p>Click the dancing button on the right to go to calculator.</p></div>';
    })
    // Handling the click of logo(myCalc) of navbar
    document.querySelector('#logo-img').addEventListener('click',() => {
        document.querySelector('.top-section').innerHTML ='';
        document.querySelector('.top-section').innerHTML ="<p><span id='first-letter'>D</span>igital &nbsp;<span id='first-letter'>C</span>alculator !<span>Easy to use calculator. Great graphics and accurate result. Add, subtract, multiply and divide. ANYTIME ! &nbsp;ANYWHERE! </span></p>";
    })
    /* When the calculator icon in navbar is clicked, for scrolling the page automatically
    to calculator section */
    document.querySelector('#calc-scroll').addEventListener('click', () => {
        const targetElement = document.querySelector('.calculator');
        targetElement.scrollIntoView({ behavior: 'smooth' });
    })
    const screen = document.querySelector('.screen');
    /* Looping through all the elements with class 'number', getting their respective numbers
    via innerHTML and adding it to the original HTML content inside of element with
    class 'screen'.
     */
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            const val = number.innerHTML;
            screen.innerHTML += val;
        })
    })
    /* Gets all the elements with class 'calc' and on click of each one of them,
    adds class 'clicked' to them. After 1s time, it again removes it. This creates the
    3D button clicking effect on the calculator's buttons.
     */
    document.querySelectorAll('.calc').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.add('clicked');
            setTimeout(() => {
                btn.classList.remove('clicked');
            },100);
        })
    })
    // Handling click of add button.
    document.querySelector('#add').addEventListener('click', () => {
        screen.innerHTML += '+';
    })
    // Handling click of minus button.
    document.querySelector('#minus').addEventListener('click', () => {
        screen.innerHTML += '-';
    })
    // Handling click of divide button.
    document.querySelector('#divide').addEventListener('click', () => {
        screen.innerHTML += '/';
    })
    // Handling click of multiply button.
    document.querySelector('#multiply').addEventListener('click', () => {
        screen.innerHTML += '&times';
    })
    // Handling click of clear button.
    document.querySelector('#c').addEventListener('click', () => {
        screen.innerHTML = '';
    })
    // Handling click of decimal point button.
    document.querySelector('#point').addEventListener('click', () => {
        screen.innerHTML += '.';
    })
    // Handling click of equals button.
    document.querySelector('#equal').addEventListener('click', () => {
    const toCalculate = screen.innerHTML;
    // Replacing all the times character with * so that mathematical calculations can be performed
    const calculatedString = toCalculate.replace(/&times;|×/gi, '*');
    try {
        // Using eval() to calculate the expression and set the result back to the screen
        const result = eval(calculatedString);
        screen.innerHTML = result;
      } catch (error) {
        // Handling invalid input conditions
        screen.innerHTML = 'Error ! Invalid Expression';
      }

    })

    
})
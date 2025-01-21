let calculation = localStorage.getItem('calculation') || '';
    document.querySelector('.js-display-calculation').innerHTML = calculation;

    function updateCalculation(value) {
      calculation += `${value}`;
      console.log(calculation);

      document.querySelector('.js-display-calculation').innerHTML = calculation;

      localStorage.setItem('calculation', calculation);
    }
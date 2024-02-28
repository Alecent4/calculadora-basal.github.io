let form = document.getElementById('calculadora');

form.style.backgroundColor = 'pink';
 
    const CALCULAR = document.getElementById('calcular');
    const ERROR = document.getElementById('error');
    const FLUJO = document.getElementById('flu');
    const MANTENIMIENTO = document.getElementById('man');
    CALCULAR.addEventListener('click', () => {
      const peso = document.getElementById('peso').value

      if (peso > 0){
          ERROR.style.display = 'none'
          let flujo = calcFlujo(peso);
          let mantenimiento = flujo*1.5;
          FLUJO.innerHTML = flujo + ' cc/hr';
          MANTENIMIENTO.innerHTML = 'm+m/2 ' + mantenimiento.toFixed(2) + ' cc/hr';
          FLUJO.style.display = 'block';
          MANTENIMIENTO.style.display = 'block';
      } else {
          ERROR.style.display = 'block';
          FLUJO.style.display = 'none';
          MANTENIMIENTO.style.display = 'none';
      }
    })
    function calcFlujo(peso){
      let resto = peso;
      let flujo = 0;
      if (resto>20){
          let aux = resto-20;
          flujo += aux*1;
          resto -= aux;
      } 
      if (resto>10){
          let aux = resto-10;
          flujo += aux*2;
          resto -= aux;
      }
      flujo += resto*4;
      return flujo;
    }
    function calcFlujoSc(peso) {
 
      const  calcFlujoSc = ((peso * 4) + 7) / (peso + 90);

      const flujo = 2000 * calcFlujoSc;
    
      return flujo.toFixed(2); 
    }
    
  
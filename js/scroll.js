  /* --pocicion inicial */
  let ubicacionPrincipal = window.pageYOffset;
  let $nav = document.querySelector(".header");
  
  /* --evento scroll */
  window.addEventListener("scroll", function() {
      /* --muestra la ubicacion cada vez que hagas scroll */
      //console.log(window.pageYOffset);
  
      /* --donde nos encontramos actualmente */
      let desplazamientoActual = window.pageYOffset;
  
      /* --condicon para ocultar o mostrar el menu */
      if(ubicacionPrincipal > desplazamientoActual) {
          /* --si es mayor o igual se muesta */
          $nav.style.opacity = "1";
          $nav.style.top = "0px";
          console.log('Ubicacion Principal')
          console.log(ubicacionPrincipal)
          console.log('desplazamiento')
          console.log(desplazamientoActual)
      } else {
          /* --sino lo ocultamos añadiendo un top negativo */
          $nav.style.top = "-12vh";
          console.log('Ubicacion Principal')
          console.log(ubicacionPrincipal)
          console.log('desplazamiento')
          console.log(desplazamientoActual)
          $nav.style.opacity = "0";
      }
  
      /* --actulizamos la ubicacion principal */
      ubicacionPrincipal = desplazamientoActual;
  });
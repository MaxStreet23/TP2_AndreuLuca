// Para index.html
$(document).ready(function () {
    // Animación para contador
    $('.counter').each(function () {
      const el = $(this);
      const target = +el.data('target');
      let count = 0;
      const update = () => {
        const inc = Math.ceil(target / 50);
        count += inc;
        if (count >= target) {
          el.text(target);
        } else {
          el.text(count);
          setTimeout(update, 50);
        }
      };
      update();
    });
  
    // Validación del formulario
    $('#email').on('input', function () {
      const isValid = this.checkValidity();
      $(this).toggleClass('is-valid', isValid);
      $(this).toggleClass('is-invalid', !isValid);
    });
  
    // Envío del formulario
    $('#contact-form').on('submit', function (e) {
      e.preventDefault();
      $('#spinner').removeClass('d-none');
      setTimeout(() => {
        $('#spinner').addClass('d-none');
        $('#confirmModal').modal('show');
        $(this)[0].reset();
        $('#email').removeClass('is-valid');
      }, 1000);
    });
  });

  //Filtro para clases.html

  $(".filter-btn").on("click", function () {
    let filterValue = $(this).attr("data-filter");
    if (filterValue == "*") {
      $(".grid-item").show();
    } else {
      $(".grid-item").hide();
      $(filterValue).show();
    }
  });

  //Para entrenadores.html
  $(".progress-bar").each(function () {
    let width = $(this).data("width");
    $(this).css("width", "0%").animate({ width: width + "%" }, 1000);
  });

  //Para contacto.html
  $(document).ready(function () {
    // Validación en tiempo real
    $("#nombre, #email, #mensaje").on("input", function () {
      if (this.checkValidity()) {
        $(this).removeClass("is-invalid").addClass("is-valid");
      } else {
        $(this).removeClass("is-valid").addClass("is-invalid");
      }
    });
  
    // Enviar el formulario
  $("#contact-form").on("submit", function (e) {
      e.preventDefault();
  
      const esValido = this.checkValidity();
      if (esValido) {
        // Mostrar spinner
        $("#spinner").removeClass("d-none");
  
        // Simular envío
        setTimeout(function () {
          $("#spinner").addClass("d-none");
          $("#confirmModal").modal("show"); // Mostrar modal
          $("#contact-form")[0].reset(); // Resetear formulario
          $(".form-control").removeClass("is-valid"); // Reset clases
        }, 1500);
      } else {
        $(this).addClass("was-validated");
      }
    });
  });

  //Para precios.html
  $(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip(); // Activar tooltips
  
    $("#togglePrecios").on("change", function () {
      $(".precio").each(function () {
        const mensual = $(this).data("mensual");
        const anual = $(this).data("anual");
        const esAnual = $("#togglePrecios").is(":checked");
  
        $(this).text(esAnual ? `$${anual}` : `$${mensual}`);
      });
    });
  });

  //Para blog.html
  $(".blog-filter").on("click", function () {
    const filter = $(this).data("filter");
    if (filter === "*") {
      $(".blog-item").show();
    } else {
      $(".blog-item").hide();
      $(filter).fadeIn();
    }
  });
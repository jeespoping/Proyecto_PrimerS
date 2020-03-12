$(function(){
  $('.conte_derecho2').hide();
  //$('#tablaMascota').hide();
  $('.conte_derecho').hide();
  ver_detalle_Propietario();
  //jsBuscar();
  guardarEditado();

});



function agregarPropietario(){

    $(".ver_detalle").on('click', function (e) {

      e.preventDefault();

    var nombre = $("#Password2");
    var apellido = $("#Password3");
    var direccion = $("#Password4");
    var telefono = $("#Password5");

if(nombre.val()=="" || apellido.val()=="" || direccion.val()==""|| telefono.val()==""){
  alert("Debe diligenciar todos los campos para poder continuar");
}else {
  $('#tabladd').append("<tr>" +
  "<td>" + nombre.val() + "</td>" +
  "<td>" + apellido.val() + "</td>" +
  "<td>" + direccion.val() + "</td>" +
  "<td>" + telefono.val() + "</td>" +
 "<td><a <button type='submit' class='btn btn-primary AgregarMascota' id='et' > Agregar Mascota</button>" +   "</tr>")
}
  }) }

    function AgregarMascotas() {

      $('#tabladd').on('click', '.AgregarMascota', function(e) {

        e.preventDefault();
        $('.conte_derecho2').show();
         var tr = $(this).closest('tr');

          var tdpropietario = tr.children("td:nth-child(1)").html();
          $('#labelPropietario').html(tdpropietario);



      });
  }

  function ListarMascotas() {

    $('#ll').on('click',  function(e) {

      e.preventDefault();
      $('#tablaMascota').show();


      e.preventDefault();
      var nombreM = $("#mascota1");
      var tipoM = $("#mascota2");
      var fechaM = $("#mascota3");


      if(nombreM.val()=="" || tipoM.val()=="" || fechaM.val()==""){
        alert("Debe diligenciar todos los campos para poder continuar");
      }else {



    $('#tablaMascota').append("<tr>" +
    "<td>" + nombreM.val() + "</td>" +
    "<td>" + tipoM.val() + "</td>" +
    "<td>" + fechaM.val() + "</td>"
    //+        "<td><a <button type='submit' class='btn btn-primary AgregarMascota' id='et' > Agregar Mascota</button>" +   "</tr>"

    )
      }
    });
}


function ver_detalle_Propietario() {
  $('#tabladd').on('click', '.ver_detalle', function(e) {
    e.preventDefault();

  $('.conte_derecho').show();
      var tr = $(this).closest('tr');



      var tdnombre = tr.children("td:nth-child(1)").html();
      var tdapellido = tr.children("td:nth-child(2)").html();
      var tddireccion = tr.children("td:nth-child(3)").html();
      var tdtelefono = tr.children("td:nth-child(4)").html();
      var tdOpciones = tr.children("td:nth-child(5)").html();


$('#textnombre').val(tdnombre);
$('#textapellido').val(tdapellido);
$('#textdireccion').val(tddireccion);
$('#texttelefono').val(tdtelefono);











  });
}

function guardarEditado(){
  $('#bot').click(function(e){

    e.preventDefault();
      var tr = $("#tabladd").closest('tr');
  var tdnombre = $("#textnombre");
  var tdapellido = $("#textapellido");
  var tddireccion = $("#textdireccion");
  var tdtelefono = $("#texttelefono");

      var nombre = tdnombre.html();
      tdnombre.html(nombre );
      var apellido = tdapellido.html();
      tdapellido.html(apellido );
      var direccion = tddireccion.html();
      tddireccion.html(direccion );
      var telefono = tdtelefono.html();
      tdtelefono.html(telefono );

alert('sddsda')
  });

}


/*
function guardarEdicionUsuario() {
  $('#tabladd').on('click', '.guardar', function(e) {
      e.preventDefault();
      var tr = $(this).closest('tr');
      var tdsocio = tr.children("td:nth-child(1)");
      var tdnombre = tr.children("td:nth-child(2)");
      var tdestatura = tr.children("td:nth-child(3)");
      var tdedad = tr.children("td:nth-child(4)");
      var tdlocalidad = tr.children("td:nth-child(5)");
      var tdOpciones = tr.children("td:nth-child(6)");

      nuevosocio = tdsocio.children("input[type=text]").val();
      tdsocio.html(nuevosocio);

      nuevonombre = tdnombre.children("input[type=text]").val();
      tdnombre.html(nuevonombre);

      nuevaestatura = tdestatura.children("input[type=text]").val();
      tdestatura.html(nuevaestatura);

      nuevaestatura = tdestatura.children("input[type=text]").val();
      tdestatura.html(nuevaestatura);

      nuevoEdad = tdedad.children("input[type=text]").val();
      tdedad.html(nuevoEdad);

     nuevalocalidad = tdlocalidad.children("input[type=text]").val();
      tdlocalidad.html(nuevalocalidad);

      tdOpciones.html( "<td><a <button type='submit' class='btn btn-primary editar' id='et' > editar</button>" +
      " <a href='#' <button type='submit' class='btn btn-primary eliminar' id='elim' > eliminar</button></a>" +
      "</tr>")
  });
}
*/

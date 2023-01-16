// Call the dataTables jQuery plugin
$(document).ready(function() {
	cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios(){
	
  const request = await fetch('users', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
   
  });
  const usuarios = await request.json();

  console.log(usuarios);
  
  let listadoHTML = '';
  
  
  for(let usuario of usuarios){
	  let usuarioTelefono = usuario.phoneNumber == null ? '-' : usuario.phoneNumber;
	  
	  let botonEliminar = '<a href="#" onclick= "eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
	  
	  let usuarioHTML = '<tr><td>'+ usuario.id +'</td><td>'+ usuario.name + ' ' + usuario.lastName + '</td><td>'+ usuario.email +'</td><td>'+ usuarioTelefono +'</td><td>'+ botonEliminar + '</td></tr>';
	  
	  listadoHTML += usuarioHTML;
  }
  
  document.querySelector('#usuarios tbody').outerHTML = listadoHTML;
  
	
}

async function eliminarUsuario(id){
	
	if(!confirm ("¿Desea eliminar este usuario?")){
		return;
	}
	
	const request = await fetch('user/' + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
   
  });
  
  location.reload();
  }

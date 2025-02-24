document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('menu-container').innerHTML = `
    <!-- Header con Logo y Menú utilizando Bootstrap -->
    <nav class="navbar navbar-expand-md container-fluid">
		<div class="container-fluid">
			<div class="menu-logo me-3">
				<img src="Assets/img/Logo/Logo.png" alt="Logo" class="menu-image">
			</div>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse menu-nav" id="navbarNav">
				<ul class='navbar-nav'>
					<li class="nav-item">
						<a class="nav-link text-white" href="Index.html">INICIO</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="Nosotros.html">NOSOTROS</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="Servicio.html">SERVICIOS</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="Contactos.html">CONTACTOS</a>
					</li>
				</ul>
			</div>
		</div>
      </nav>
  `;
});

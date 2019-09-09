
Vue.component("persona",{
		props: ['name','img','datos','indice','link','referencia'],
		template: 
				`
				<div :id="indice">
					<img :src="img" :alt="datos">
					<div class="colorB"></div>
					<div class="contenedor">
						<h2 class="titulo">{{ name }}</h2>
						<div class="boton"><a :href="link" target="_blank" :id="referencia"><h2>Ver Proyecto</h2></a></div>
					</div>
					
				</div>`,
		data: function(){
			return {
				ver: false,
				src: '/images/Kristel_Blaco_negro.png',
				

			}

		},

		data2: function(){
			return{
				ver: false,
				href:'www.google.com',
			}


		},
		methods: {
			ani: function(e){
				this.dat=="Ver Más" ? this.dat=this.datos : this.dat="Ver Más";
				this.ver ? this.ver=false : this.ver=true;
			}

		}
	})

var app = new Vue({
	
	el: "#app",
	data: {
		info:[
			{id: 'p1', name:"Glenda Badilla", img:'images/01.png', datos:"Esto es una foto",href:'https://gmbadilla.github.io/CoffeeTime/'},
			{id: 'p2', name:"Emmanuel Campos", img:'images/02.png', datos:"Esto es una foto",href:'https://pruebaadrianaovares.000webhostapp.com'},
			{id: 'p3', name:"Jackeline Cordero", img:'images/03.png', datos:"Esto es una foto",href:'http://www.grupoangelesheredia.com/'},
			{id: 'p4', name:"Naomi Fallas", img:'images/04.png', datos:"Esto es una foto",href:'www.google.com',href:'https://gmbadilla.github.io/acerosryasa/'},
			{id: 'p5', name:"Adrian González", img:'images/05.png', datos:"Esto es una foto",href:'http://www.adriangonzalezmorera.com/'},
			{id: 'p6', name:"Kristel Hernández", img:'images/06.png', datos:"Esto es una foto",href:'http://www.hazelmontenegrofotografia.com/'},
			{id: 'p7', name:"German Herrera", img:'images/07.png', datos:"Esto es una foto",href:'http://astralvoyagecr.000webhostapp.com/'},
			{id: 'p8', name:"Elias Rojas", img:'images/08.png', datos:"Esto es una foto",href:'https://naturallove.000webhostapp.com/'},
			{id: 'p9', name:"Maria Salgado", img:'images/09.png', datos:"Esto es una foto",href:'http://fisiodinamia.000webhostapp.com/index.html'},
			{id: 'p0', name:"Yerlin Vargas", img:'images/10.png', datos:"Esto es una foto",href:'http://malasuerte.000webhostapp.com/'}
		],

		
	},

	data2: {
		info:[
			{id: 'p01', href:'www.google.com'}

	
		],
	},



	methods: {
		change: function(e){
			e.target.style.color=="red" ? e.target.style.color="blue" : e.target.style.color="red"
		}

	}

});
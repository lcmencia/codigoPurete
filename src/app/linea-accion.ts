export class LineaAccion {

	constructor( valor ) {
		this.id = valor.id;
		this.nombre = valor.nombre;
		this.descripcion = valor.descripcion;
		this.orden = valor.orden;
		this.peso = valor.peso;
		this.acumular = valor.acumular;
		this.tipoAccionId=  valor.tipoAccionId;
		this.estrategiaId  = valor.estategiaID;
		this.unidadMedidaId = valor.unidadMedidaId;
		this.borrado = valor.borrado;
	 }
	id: number;
  	nombre: string;

  	descripcion: string ;
	orden: number;
	peso: number;
	acumular: boolean;
	tipoAccionId: number;
	estrategiaId: number;
	unidadMedidaId: number;
	borrado: boolean;
	acciones: string[ ]
	
}

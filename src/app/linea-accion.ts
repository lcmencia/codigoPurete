export class LineaAccion {

	constructor( id: number,  nombre: string ) {
		this.id = id;
		this.nombre = nombre;
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

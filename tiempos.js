/**
 * @author MaO
 */

function muestraFecha(){
	var progCur = new Date(prompt("Fecha de entrega de programa de curso"));
  	var fecha = progCur.toDateString();
  	/* fecha inicio */
  	var capacitacion = new Date(progCur);
  	capacitacion.setDate(capacitacion.getDate() + 2);
  	var fecha1 = capacitacion.toDateString();
  	/* fecha capacitacion */
  	var unidad1 = new Date(capacitacion);
  	unidad1.setDate(unidad1.getDate()+15);
  	var fecha2 = unidad1.toDateString();
  	/* fecha Unidad 1 */
  	var ajusteUni1 = new Date(unidad1);
  	ajusteUni1.setDate(ajusteUni1.getDate()+9);
  	var fecha3 = ajusteUni1.toDateString();
  	/* fecha ajuste unidad 1 */
  	var unidad2 = new Date(ajusteUni1);
  	unidad2.setDate(unidad2.getDate()+15);
  	var fecha4 = unidad2.toDateString();
  	/* fecha Unidad 2 */
  	var ajusteUni2 = new Date(unidad2);
  	ajusteUni2.setDate(ajusteUni2.getDate()+9);
  	var fecha5 = ajusteUni2.toDateString();
  	/* fecha ajuste unidad 2 */
  	var unidad3 = new Date(ajusteUni2);
  	unidad3.setDate(unidad3.getDate()+15);
  	var fecha6 = unidad3.toDateString();
  	/* fecha Unidad 3 */
  	var ajusteUni3 = new Date(ajusteUni2);
  	ajusteUni3.setDate(ajusteUni3.getDate()+9);
  	var fecha7 = ajusteUni3.toDateString();
  	/* fecha ajuste unidad 3 */
  	var actividades = new Date(ajusteUni3);
  	actividades.setDate(actividades.getDate()+8);
  	var fecha8 = actividades.toDateString();
  	/* fecha actividades */
  	var ajusteActividades = new Date(actividades);
  	ajusteActividades.setDate(ajusteActividades.getDate()+4);
  	var fecha9 = ajusteActividades.toDateString();
  	/* fecha ajuste actividades */
  	var produccion = new Date(ajusteActividades);
  	produccion.setDate(produccion.getDate()+26);
  	var fecha10 = produccion.toDateString();
  	/* produccion */
  	var integracion = new Date(produccion);
  	integracion.setDate(integracion.getDate()+4);
  	var fecha11 = integracion.toDateString();
  	/* integracion */
  	var montaje = new Date(integracion);
  	montaje.setDate(montaje.getDate()+2);
  	var fecha12 = montaje.toDateString();
  	/* produccion */
  	var entrega = new Date(montaje);
  	entrega.setDate(entrega.getDate()+1);
  	var fecha13 = entrega.toDateString();
  	/* entrega */
}
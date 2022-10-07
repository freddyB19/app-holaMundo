const formatearFecha = (fecha) => {
  const format = new Date(fecha);
  return `${format.toLocaleDateString()} ${format.toLocaleTimeString()}`;
}
export default formatearFecha;

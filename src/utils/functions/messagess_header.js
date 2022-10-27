const messagess_header = () => {
  const messagess = [
    `Un programador al nacer no llora, dice 'Hola Mundo'`,
    `Para ser un buen programador se requiere 3% de talento y un 97% de esfuerzo para NO DISTRARSE CON EL INTERNET`,
    `La tecnología permitirá hackear a los seres humanos. -- Yuval Noah`,
    `Cuando escribí este código, solo Dios y yo sabiamos cómo y para qué lo hice. Ahora solo Dios lo sabe.`,
    `¿Sabes cuál es el problema? Imaginarte el algoritmo y no programarlo.`,
    `No hay lugar como 127.0.0.1`,
    `Si al principio no tienes exito, llámale 'Versión 1.0'`,
    `Hay 10 tipos de personas en este mundo, las que entienden binario y las que no.`,
    `Una imagen vale más que mil palabras. Pero ocupa mucho más memoria`,
    `No gastes 6 minutos en hacer algo a mano cuando puedes gastar 6 horas fallando en automatizarlo.`,
    `La vida seria más sencilla si pudieramos echar un vistaso al código fuente.`
  ]

  return messagess[Math.floor(Math.random() * messagess.length)];
}

export default messagess_header;

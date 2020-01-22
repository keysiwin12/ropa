import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  constructor() { }

  ropas : Array<object> = [
    {
      nombre: "camisa",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/polera.jpg",
      creacion: "1957-12-10",
      fabrica: "ASC"
    },
    {
      nombre: "polera",
      bio: "Durante siglos se han documentado prendas y vestidos de hombres y mujeres con capucha. La antigüedad de la producción de este estilo asciende a la Edad Media en Europa, cuando los monjes llevaban las capuchas unidas a la túnica. Este estilo es conocido, al menos, en Inglaterra en el siglo XII y probablemente traído por los normandos en su conquista de Inglaterra. Como su nombre nos indica, la sudadera fue confeccionada para absorber el sudor. En 1920, Benjamin Russell y sus hijos crearon el primer jersey hecho de algodón que sería conocido como suéter (del inglés sweater) y comercializados a los campus universitarios.1​ Antes de la llegada de esta nueva sudadera, los deportistas universitarios estaban equipados con suéteres de lana, los cuales les hacían sudar muchísimo y les irritaba la piel.       Más tarde, en la década de 1930, la sudadera con capucha fue introducida por vez primera por la marca Champion, comercializando la prenda para los trabajadores de Nueva York que trabajaban con temperaturas cercanas a la congelación. Los empleados de los almacenes frigoríficos y los guardabosques demandaban 'algo' que proporcionara más calor que los calzoncillos largos que utilizaban en invierno. La entrepierna estaba cubierta, no tanto así la parte de arriba del cuerpo.    Transcurridos unos años, la sudadera evoluciona y se cuela en los gimnasios.", 
      img: "assets/img/polera.jpg",
      creacion: "1957-12-10",
      fabrica: "ASC"
    },

    {
      nombre: "blusa",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/blusa.jpg",
      creacion: "1958-10-19",
      fabrica: "ASC"
    },
    {
      nombre: "falda",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/falda.jpg",
      creacion: "1950-10-12",
      fabrica: "ASC"
    },
    {
      nombre: "pantalon",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/pantalon.jpg",
      creacion: "1920-05-18",
      fabrica: "ASC"
    },
    {
      nombre: "polo",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/pantalon.jpg",
      creacion: "1948-08-25",
      fabrica: "ASC"
    },
    {
      nombre: "short",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/short.jpg",
      creacion: "1921-05-03",
      fabrica: "ASC"
    },
    {
      nombre: "vestido",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/vestido.jpg",
      creacion: "1935-11-19",
      fabrica: "ASC"
    },
    {
      nombre: "zapatilla",
      bio: "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/zapatilla.jpg",
      creacion: "1948-10-04",
      fabrica: "ASC"
    }
  ];

  getRopas() {
    return this.ropas;
  }


}

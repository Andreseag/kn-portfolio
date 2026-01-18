export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

// data/accordion.ts
export const accordionItemsDesign: AccordionItem[] = [
  {
    id: 1,
    title: "01 Anteproyecto",
    content: `
Esta es una fase creativa. Nosotros, con la colaboración del cliente, atendiendo a un programa de necesidades básico y orientativo, desarrollaremos un primer concepto del proyecto, de manera elemental y más o menos esquemática. Responderemos a las demandas y contemplaremos su factibilidad en todos los aspectos: constructivos, reglamentarios, estratégicos, comerciales, etc. En esta etapa se definen superficies y dimensiones estimadas de los ambientes.

El mismo consistirá en la presentación de planos de planta con definición de equipamiento y mobiliario tentativo, esquemas conceptuales y simulaciones tridimensionales de la propuesta con renders fotorealistas, para brindarles una mejor comprensión de la idea.

Se acuerda una cantidad de 2 reuniones que nos permitirán conocer sus ideas, sus deseos y necesidades. Para proceder a la siguiente fase, deberemos establecer el “diseño definitivo”, aunque posteriormente se podrán realizar modificaciones.
    `,
  },
  {
    id: 2,
    title: "02 Proyecto",
    content: `
Esta segunda etapa consiste en la profundización técnica sobre la base del anteproyecto aprobado. Elaboramos la documentación necesaria para la construcción y cotización global del proyecto.

A lo realizado anteriormente sumaremos la documentación gráfica, técnica y legal indispensable para poder ejecutar el proyecto. Tales como planos de planta, cortes, vistas y detalles constructivos, especificaciones de terminación, planillas de aberturas, planos de instalaciones sanitarias, eléctricas y otros.

Esta instancia es muy importante ya que direcciona el futuro del proyecto, nuestras carpetas de entrega reflejan un profundo compromiso y análisis de los elementos que intervienen en la obra y conforman una documentación detallada que permite minimizar posibles desvíos por imprevistos en el futuro.

Finalizada esta etapa podremos dar comienzo al proceso de construcción. Los trabajos deberán ejecutarse de acuerdo a las reglas del arte de construcción y conforme a lo detallado en el listado de tareas y planos establecidos por nosotros.
    `,
  },
];

// data/accordion.ts
export const accordionItemsEjection: AccordionItem[] = [
  {
    id: 1,
    title: "03 Dirección de obra",
    content: `
Esta tarea consiste en la supervisión del proceso de ejecución y desarrollo de la obra en construcción, tiene por objetivo realizar un control sobre el avance y respetar fielmente las características generales y particulares del proyecto.

Realizaremos un control estricto de las tareas y tiempos sobre el o las empresas contratistas que intervengan en la obra. Avalaremos mediante certificados de avance la liquidación de las tareas realmente ejecutadas. La tarea se complementa con la de gerenciamiento de obra que se constituye en la tarea técnico-administrativa por excelencia.`,
  },
  {
    id: 2,
    title: "04 Gerenciamiento de obra",
    content: `
Consiste en asumir el rol de gerentes de la obra durante su desarrollo, ya sea en el análisis de las variables económicas, técnicas, de recursos humanos y profesionales a intervenir. Garantiza una metodología de control eficiente que se rinde al cliente. Es una solución de gestión a medida de cada obra y su escala.

Disponemos de un equipo interdisciplinario donde intervienen profesionales de todas las áreas vinculadas a la actividad de la construcción: Arquitectos, Ingenieros Civiles, Eléctricos, Agrimensores, Contadores, Escribanos, Especialistas en Higiene y Seguridad y en Administración.

El alcance de este servicio abarca las siguientes tareas:

+ Definición de estrategia de implementación, cantidad y apertura de contratos.
+ Elaboración de cronograma de obras.
+ Elaboración de pliego de bases y condiciones generales para la contratación de obras y/o servicios.
+ Elaboración de contrato tipo de locación de obra y/o servicios.
+ Elaboración de planilla de presupuestos.
+ Elaboración de listado sugerido de posibles proveedores.
+ Llamado a cotización y recepción de ofertas.
+ Estudio de ofertas, nivelación de propuestas y elaboración de comparativas.
+ Llamado a mejoramiento de ofertas, nivelación de las propuestas, re-elaboración de comparativas y elaboración de informe conclusivo para definir contratación.
+ Gestión de compra final y validación de las ofertas.
    `,
  },
];

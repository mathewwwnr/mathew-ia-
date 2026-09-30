/**
 * Configuración central del sitio.
 * DEMO: todos los datos de contacto, equipo, cifras y testimonios son de ejemplo.
 * Para entregar a una clínica real, reemplaza los valores de este archivo.
 */

export const site = {
  demo: true,
  name: "Áurea",
  fullName: "Áurea Clínica Dental",
  tagline: "Odontología estética y rehabilitación oral en Machala",
  url: "https://aurea-dental-demo.vercel.app",
  whatsapp: "593990000000", // formato internacional sin "+"
  phoneDisplay: "+593 99 000 0000",
  email: "citas@aurea-dental.ec",
  address: {
    street: "Av. 25 de Junio (dirección de ejemplo)",
    city: "Machala",
    region: "El Oro",
    country: "Ecuador",
  },
  mapQuery: "Machala, El Oro, Ecuador",
  hours: [
    { days: "Lunes a viernes", time: "09:00 – 19:00" },
    { days: "Sábado", time: "09:00 – 13:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
  agency: "Mathew IA",
};

// DEMO: cifras de ejemplo, reemplazar con datos reales de la clínica.
export const stats = [
  { value: 12, suffix: "", label: "años de experiencia" },
  { value: 4800, suffix: "+", label: "pacientes atendidos" },
  { value: 6, suffix: "", label: "especialidades" },
  { value: 98, suffix: "%", label: "recomendarían la clínica" },
];

export type Service = {
  slug: string;
  name: string;
  kicker: string;
  short: string;
  intro: string;
  forWho: string[];
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  duration: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "diseno-de-sonrisa",
    name: "Diseño de sonrisa",
    kicker: "Estética dental",
    short: "Carillas y contorneado planificados digitalmente según tu rostro.",
    intro:
      "Planificamos la forma, el tamaño y el tono de cada diente en función de tus labios, tu línea media y tus proporciones faciales. Antes de tocar un diente puedes ver una simulación de tu nueva sonrisa.",
    forWho: [
      "Dientes con manchas que no mejoran con blanqueamiento",
      "Dientes desgastados, fracturados o de tamaños desiguales",
      "Espacios pequeños entre dientes",
      "Personas que quieren un cambio estético integral",
    ],
    benefits: [
      { title: "Simulación previa", text: "Ves el resultado propuesto antes de iniciar el tratamiento." },
      { title: "Mínimo desgaste", text: "Priorizamos técnicas conservadoras que preservan el esmalte." },
      { title: "Tono natural", text: "Seleccionamos el color que armoniza con tu piel y tus ojos." },
    ],
    steps: [
      { title: "Valoración y fotografías", text: "Registro fotográfico, escaneo y análisis facial." },
      { title: "Diseño digital", text: "Propuesta de sonrisa y prueba en boca (mock-up)." },
      { title: "Preparación", text: "Preparación mínima de los dientes cuando el caso lo requiere." },
      { title: "Cementado y control", text: "Colocación definitiva de carillas y cita de seguimiento." },
    ],
    duration: "2 a 4 citas, según el material y el número de piezas",
    faqs: [
      { q: "¿Las carillas dañan mis dientes?", a: "Con una planificación adecuada, el desgaste es mínimo y en algunos casos no es necesario. Lo evaluamos en la valoración." },
      { q: "¿Cuánto duran las carillas?", a: "Depende del material y del cuidado. Las carillas de porcelana suelen durar más que las de resina. Te explicamos las diferencias en la cita." },
      { q: "¿Se ven naturales?", a: "El diseño busca un resultado acorde a tu rostro, no una sonrisa genérica. Por eso trabajamos con simulación previa." },
    ],
  },
  {
    slug: "implantes-dentales",
    name: "Implantes dentales",
    kicker: "Rehabilitación oral",
    short: "Reemplazo fijo de piezas perdidas con planificación guiada.",
    intro:
      "Un implante es una raíz artificial de titanio que se integra al hueso y sostiene una corona. Planificamos la posición con estudios de imagen para colocarlo con precisión y recuperar función y estética.",
    forWho: [
      "Pérdida de una o varias piezas dentales",
      "Prótesis removibles que se mueven o incomodan",
      "Personas que quieren una solución fija a largo plazo",
    ],
    benefits: [
      { title: "Planificación con tomografía", text: "Evaluamos hueso y estructuras antes de la cirugía." },
      { title: "Sensación natural", text: "Masticas y hablas como con un diente propio." },
      { title: "Protege el hueso", text: "El implante ayuda a conservar el volumen óseo de la zona." },
    ],
    steps: [
      { title: "Diagnóstico", text: "Examen clínico, tomografía y plan de tratamiento." },
      { title: "Colocación", text: "Cirugía con anestesia local, generalmente ambulatoria." },
      { title: "Integración", text: "Periodo de cicatrización en que el implante se une al hueso." },
      { title: "Corona definitiva", text: "Colocación de la corona y controles periódicos." },
    ],
    duration: "Varios meses en total, según la integración ósea de cada paciente",
    faqs: [
      { q: "¿Duele la colocación del implante?", a: "Se realiza con anestesia local. Después puede haber molestias leves que se controlan con la medicación indicada." },
      { q: "¿Cualquier persona puede recibir un implante?", a: "La mayoría sí, pero depende de la cantidad de hueso y de tu salud general. Lo determinamos en la valoración." },
      { q: "¿Me quedo sin diente durante el tratamiento?", a: "En muchos casos colocamos una prótesis provisional para que no pierdas estética durante el proceso." },
    ],
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    kicker: "Alineadores y brackets",
    short: "Alineadores transparentes y brackets estéticos para cada etapa.",
    intro:
      "Corregimos la posición de los dientes y la mordida con alineadores transparentes o brackets. Te mostramos una proyección digital del movimiento antes de empezar.",
    forWho: [
      "Dientes apiñados o separados",
      "Mordida cruzada, abierta o profunda",
      "Adultos que buscan una opción discreta",
      "Adolescentes en etapa de crecimiento",
    ],
    benefits: [
      { title: "Opciones discretas", text: "Alineadores casi invisibles o brackets del color del diente." },
      { title: "Proyección digital", text: "Ves la secuencia de movimientos antes de iniciar." },
      { title: "Controles programados", text: "Seguimiento periódico para ajustar el plan." },
    ],
    steps: [
      { title: "Estudio de ortodoncia", text: "Radiografías, fotografías y escaneo intraoral." },
      { title: "Plan y proyección", text: "Definimos la técnica y la duración estimada." },
      { title: "Tratamiento activo", text: "Cambios de alineadores o ajustes de brackets." },
      { title: "Retención", text: "Retenedores para mantener el resultado." },
    ],
    duration: "Variable según la complejidad; se define en el estudio inicial",
    faqs: [
      { q: "¿Alineadores o brackets?", a: "Depende del tipo de movimiento que necesitas y de tu disciplina de uso. Los alineadores deben usarse la mayor parte del día." },
      { q: "¿Hay edad límite para la ortodoncia?", a: "No. Con encías y hueso sanos, los adultos también pueden tratarse." },
      { q: "¿Qué pasa al terminar?", a: "Usarás retenedores para evitar que los dientes regresen a su posición anterior." },
    ],
  },
  {
    slug: "blanqueamiento-dental",
    name: "Blanqueamiento dental",
    kicker: "Estética dental",
    short: "Aclaramiento supervisado en consultorio y en casa.",
    intro:
      "Aclaramos el tono de tus dientes con agentes blanqueadores aplicados bajo supervisión profesional, protegiendo encías y controlando la sensibilidad.",
    forWho: [
      "Dientes amarillentos por café, té, vino o tabaco",
      "Personas que quieren preparar su sonrisa para un evento",
      "Pacientes que ya terminaron ortodoncia",
    ],
    benefits: [
      { title: "Supervisión profesional", text: "Evaluamos que el tratamiento sea adecuado para ti." },
      { title: "Protección de encías", text: "Aislamos los tejidos blandos durante la aplicación." },
      { title: "Control de sensibilidad", text: "Indicaciones y productos para reducir molestias." },
    ],
    steps: [
      { title: "Valoración", text: "Revisamos caries, restauraciones y tono inicial." },
      { title: "Limpieza", text: "Profilaxis para retirar placa y manchas superficiales." },
      { title: "Aplicación", text: "Blanqueamiento en consultorio y/o férulas para casa." },
      { title: "Mantenimiento", text: "Recomendaciones para conservar el resultado." },
    ],
    duration: "Una sesión en consultorio, con opción de refuerzo en casa",
    faqs: [
      { q: "¿El blanqueamiento daña el esmalte?", a: "Aplicado con supervisión y en las concentraciones adecuadas, es un procedimiento seguro." },
      { q: "¿Blanquea coronas o carillas?", a: "No. Los materiales restauradores no cambian de color; por eso lo evaluamos antes." },
      { q: "¿Cuánto dura el resultado?", a: "Depende de tus hábitos. Café, tabaco y vino reducen la duración." },
    ],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    kicker: "Tratamiento de conducto",
    short: "Salvamos dientes con dolor o infección sin necesidad de extraerlos.",
    intro:
      "Cuando la pulpa de un diente se inflama o se infecta, la endodoncia limpia y sella los conductos internos para conservar la pieza y eliminar el dolor.",
    forWho: [
      "Dolor intenso o espontáneo en un diente",
      "Sensibilidad prolongada al frío o al calor",
      "Caries profundas o fracturas que alcanzan el nervio",
    ],
    benefits: [
      { title: "Conservas tu diente", text: "Evita la extracción y sus consecuencias." },
      { title: "Alivio del dolor", text: "Eliminamos la causa de la inflamación." },
      { title: "Tecnología rotatoria", text: "Instrumental que agiliza y precisa el tratamiento." },
    ],
    steps: [
      { title: "Diagnóstico", text: "Pruebas clínicas y radiografía." },
      { title: "Limpieza de conductos", text: "Con anestesia local, retiramos el tejido afectado." },
      { title: "Sellado", text: "Rellenamos y sellamos los conductos." },
      { title: "Restauración", text: "Reconstrucción o corona para proteger la pieza." },
    ],
    duration: "1 a 2 citas en la mayoría de los casos",
    faqs: [
      { q: "¿La endodoncia duele?", a: "Se realiza con anestesia local. El objetivo es precisamente eliminar el dolor que ya tienes." },
      { q: "¿El diente queda débil?", a: "Un diente endodonciado suele necesitar una restauración o corona para protegerlo." },
    ],
  },
  {
    slug: "odontologia-general",
    name: "Odontología general",
    kicker: "Prevención",
    short: "Limpiezas, resinas y controles para toda la familia.",
    intro:
      "La base de una sonrisa sana es la prevención. Realizamos limpiezas, restauraciones con resina y revisiones periódicas para detectar problemas a tiempo.",
    forWho: [
      "Chequeos y limpiezas periódicas",
      "Caries y restauraciones antiguas",
      "Niños, adultos y adultos mayores",
    ],
    benefits: [
      { title: "Detección temprana", text: "Tratamientos más simples cuando se detecta a tiempo." },
      { title: "Resinas estéticas", text: "Restauraciones del color del diente." },
      { title: "Plan familiar", text: "Atención para todas las edades en un mismo lugar." },
    ],
    steps: [
      { title: "Revisión", text: "Examen clínico y radiografías si son necesarias." },
      { title: "Limpieza", text: "Remoción de sarro y pulido." },
      { title: "Tratamiento", text: "Resinas u otros procedimientos indicados." },
      { title: "Seguimiento", text: "Recordatorio para tu próximo control." },
    ],
    duration: "Una cita para la mayoría de procedimientos",
    faqs: [
      { q: "¿Cada cuánto debo hacerme una limpieza?", a: "En general se recomienda cada seis meses, aunque depende de tu salud periodontal." },
      { q: "¿Atienden niños?", a: "Sí, atendemos pacientes de todas las edades." },
    ],
  },
];

// DEMO: equipo de ejemplo.
export const team = [
  { name: "Dra. Valeria Ramírez", role: "Directora clínica · Estética dental", initials: "VR" },
  { name: "Dr. Andrés Cedeño", role: "Implantología y rehabilitación oral", initials: "AC" },
  { name: "Dra. Camila Loayza", role: "Ortodoncia", initials: "CL" },
  { name: "Dr. Josué Aguilar", role: "Endodoncia", initials: "JA" },
];

// DEMO: testimonios de ejemplo.
export const testimonials = [
  { name: "María F.", treatment: "Diseño de sonrisa", text: "Me mostraron cómo iba a quedar antes de empezar. El resultado se ve natural y ahora sonrío en las fotos sin pensarlo." },
  { name: "Carlos M.", treatment: "Implantes dentales", text: "Tenía miedo a la cirugía. Me explicaron cada paso y la recuperación fue mucho más tranquila de lo que esperaba." },
  { name: "Daniela P.", treatment: "Ortodoncia", text: "Terminé mi tratamiento con alineadores sin que nadie en el trabajo lo notara. Los controles siempre fueron puntuales." },
  { name: "Jorge V.", treatment: "Endodoncia", text: "Llegué con un dolor fuerte y me atendieron el mismo día. Salí sin dolor y con todo explicado." },
];

export const faqs = [
  { q: "¿Cómo agendo una cita?", a: "Completa el formulario de reserva o escríbenos por WhatsApp. Confirmamos tu horario en el menor tiempo posible." },
  { q: "¿La primera valoración tiene costo?", a: "Consulta las condiciones vigentes al momento de agendar. Te indicamos todo antes de la cita." },
  { q: "¿Qué formas de pago aceptan?", a: "Efectivo, transferencia y tarjetas. Para tratamientos extensos ofrecemos planes de pago por etapas." },
  { q: "¿Atienden emergencias?", a: "Sí. Escríbenos por WhatsApp y te damos prioridad según la disponibilidad del día." },
  { q: "¿Dónde están ubicados?", a: "En el centro de Machala, El Oro. Encontrarás el mapa al final de esta página." },
];

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

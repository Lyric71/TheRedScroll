---
title: "Xiaohongshu: cómo decide el algoritmo qué mostrar"
description: "Los ingenieros de Xiaohongshu han descrito cómo se seleccionan las notas. Sus trabajos permiten comprobar qué se sabe de la distribución y qué cifras siguen sin respaldo."
metaTitle: "Algoritmo de Xiaohongshu: entender la distribución"
metaDescription: "Cómo elige Xiaohongshu las notas del inicio, qué cifras siguen sin publicarse y cómo analizar visitas, guardados, seguidores y búsquedas."
publishDate: 2026-09-15
author: "TheRedScroll"
platforms: ["rednote"]
category: "Plataformas"
keywords: ["algoritmo Xiaohongshu", "alcance Xiaohongshu", "algoritmo RedNote", "búsqueda Xiaohongshu", "estadísticas de notas"]
featured: false
featuredImage: "/images/blog/xiaohongshu-algorithm.webp"
---

Unos cientos de visitas y después, nada. Para explicar ese estancamiento se citan niveles de distribución y puntuaciones de las interacciones. Los trabajos técnicos de Xiaohongshu permiten distinguir qué mecanismos están documentados y qué cifras carecen de respaldo.

| Pregunta | Qué ha publicado la plataforma | Fuente |
|---|---|---|
| ¿La selección tiene etapas? | Sí: recuperación de candidatos, clasificación preliminar y clasificación final | Equipo técnico de Xiaohongshu, marzo de 2023 |
| ¿Cuántas personas ven la nota al principio? | No se ha publicado el tamaño del grupo | No publicado |
| ¿Cuánto vale guardar frente a dar un me gusta? | No hay ponderaciones públicas | No publicado |
| ¿Cuánto tarda en reaccionar? | Antes esperaba unos 30 minutos para recoger interacciones; tras la reforma, actualiza por minutos | Equipo técnico de Xiaohongshu, marzo de 2023 |
| ¿Tienen oportunidad las notas nuevas? | Las notas del último día llegaron a ocupar casi la mitad de las impresiones de inicio | Equipo técnico de Xiaohongshu, marzo de 2023 |
| ¿Qué peso tiene la búsqueda? | 800 millones de búsquedas diarias; el 77 % de los usuarios diarios busca resolver un problema | Cifra de la plataforma y Huxiu, mayo de 2026 |

En dos de las seis preguntas falta un dato público. Sustituirlo por una cifra repetida en otros artículos no resuelve la falta de información. Las fuentes utilizadas aquí se verificaron dos veces en septiembre de 2026.

## Detrás de los niveles hay un proceso de selección

Quienes operan cuentas hablan de «bolsas de tráfico» (流量池). Xiaohongshu (小红书) no publica tamaños de grupo ni los presenta como su modelo. Sus ingenieros explican, en cambio, cómo se seleccionan las notas una vez revisadas.

> En el primer semestre de 2021, los principales módulos de recuperación,
> clasificación preliminar y clasificación final del inicio se actualizaban
> a diario. El equipo reformó los canales de recuperación, los índices y
> el entrenamiento para actualizarlos por minutos.
> Fuente: departamento de tecnología y distribución inteligente de
> Xiaohongshu (小红书技术部), marzo de 2023. https://www.6aiq.com/article/1679451572481

Primero se recuperan notas que podrían interesar a un usuario. Una clasificación preliminar descarta parte de ellas con poco coste de cálculo. La clasificación final ordena las restantes. La selección se repite cada vez que alguien actualiza su página de inicio.

Ese proceso no acredita un primer envío fijo a 200 personas. La nota tiene que ganar posiciones frente a otros contenidos candidatos. Su alcance aumenta mientras sigue consiguiéndolas; los profesionales perciben ese avance como una sucesión de niveles.

El volumen diario de publicaciones muestra cuántas notas compiten por aparecer.

> Los usuarios de Xiaohongshu publican más de 9 millones de notas y dejan
> más de 70 millones de comentarios al día.
> Fuente: conferencia WILL 2026 de Xiaohongshu (小红书), recogida por 100EC
> (网经社), diciembre de 2025. https://www.100ec.cn/detail--6655530.html

Las secuencias de 200, 2.000 y 20.000 visitas circulan entre artículos profesionales sin que las confirme la plataforma o su equipo técnico. Por eso no las incorporamos a nuestra planificación.

## Cuatro señales para interpretar el algoritmo de Xiaohongshu

Los documentos públicos ayudan a entender cuatro aspectos de la difusión inicial. No ofrecen una ponderación que permita convertirlos en una puntuación exacta.

| Señal | Qué interpreta el sistema | Qué puede cambiar la marca | Peso publicado |
|---|---|---|---|
| Tema | Imagen, vídeo, texto y etiquetas en conjunto | Portada, primera frase, temas | Ninguno |
| Correspondencia | Para qué usuarios se selecciona la nota | Las palabras de los compradores | Ninguno |
| Respuesta inicial | Clics, lectura, me gusta, guardados, comentarios, seguidores | Arranque, primera pantalla, pregunta | Ninguno |
| Cumplimiento | Si la nota y la cuenta respetan las normas | Declaración de colaboraciones, afirmaciones veraces | Condición para acceder a la difusión |

**El tema** también se reconoce en la imagen. El texto que la acompaña es solo una parte del material que analiza el sistema.

> La comprensión multimodal del contenido atraviesa los sistemas de
> búsqueda, recomendación y transacciones de Xiaohongshu. Se aplica, entre
> otros usos, al análisis de vídeos cortos, la evaluación de calidad y
> la recuperación mediante varios formatos.
> Fuente: QbitAI (量子位), abril de 2022. https://www.qbitai.com/2022/04/34112.html

La explicación técnica se publicó en 2022. Para una marca deja una tarea concreta: hacer que la portada indique el tema con claridad, en chino.

**La afinidad con el público** se decide desde la recuperación. Si una nota no se selecciona para sus compradores, las clasificaciones posteriores no conseguirán que llegue a ellos. «Chaquetas técnicas» (冲锋衣) puede responder mejor a una necesidad concreta que una cuidada presentación de «ropa de exterior sostenible».

**Las interacciones iniciales** enseñan al modelo qué interesa a los lectores.

> Dar un me gusta o guardar una nota indica interés. Si ese interés es
> nuevo para el usuario, un sistema más rápido puede aprenderlo antes y
> mostrar notas relacionadas durante la misma sesión.
> Fuente: departamento de tecnología y distribución inteligente de
> Xiaohongshu (小红书技术部), marzo de 2023. https://www.6aiq.com/article/1679451572481

**Respetar las normas** permite acceder a la distribución. No es una puntuación que se sume a los me gusta. Más abajo se explican las restricciones posibles.

La fórmula más repetida asigna un punto a los me gusta y a los guardados, cuatro a comentarios y envíos, y ocho a nuevos seguidores. No la respalda ninguna página de Xiaohongshu, charla de sus ingenieros ni documento oficial. El artículo chino citado como origen se limita a llamarla la versión más extendida. No calculamos presupuestos de campaña a partir de esa afirmación.

## Qué se juega una nota durante la primera hora

Las novedades ocupan mucho espacio en Xiaohongshu (小红书). Frente a ese ritmo, el antiguo sistema tardaba cerca de media hora en empezar a recoger las reacciones.

> Las notas publicadas en el último día ya suponían una parte elevada de
> las impresiones de inicio. Durante el periodo descrito, esa proporción
> creció rápidamente hasta acercarse a la mitad.
> Fuente: departamento de tecnología y distribución inteligente de
> Xiaohongshu (小红书技术部), marzo de 2023. https://www.6aiq.com/article/1679451572481

Una nota dispone de poco tiempo antes de competir con otra tanda de contenidos. Al día siguiente, buena parte de la oferta ya se ha renovado.

> El procedimiento tradicional espera unos 30 minutos tras mostrar un
> contenido antes de recoger las interacciones con las que entrenará el modelo.
> Fuente: departamento de tecnología y distribución inteligente de
> Xiaohongshu (小红书技术部), marzo de 2023. https://www.6aiq.com/article/1679451572481

Reducir el tiempo entre la exposición y el aprendizaje era el objetivo de la reforma.

> El paso de actualizaciones diarias a actualizaciones por minutos aumentó
> más de un 10 % el tiempo medio por usuario en el inicio, más de un 15 %
> las interacciones y cerca de un 50 % la eficiencia de las notas nuevas.
> Fuente: departamento de tecnología y distribución inteligente de
> Xiaohongshu (小红书技术部), marzo de 2023. https://www.6aiq.com/article/1679451572481

El seguimiento debe empezar al publicar. Responda a los comentarios y ajuste el horario a los compradores en China, no a la jornada laboral de su sede. Seis notas consecutivas y nueve días de ausencia no sustituyen ese trabajo. Cada nueva publicación compite con una oferta distinta.

## La búsqueda prolonga la vida de una nota

Muchas marcas extranjeras concentran su esfuerzo en las recomendaciones de Xiaohongshu (小红书). Cuando las visitas bajan tras la primera semana, echan en falta una segunda vía: notas preparadas para responder a búsquedas durante más tiempo.

> El 77 % de los usuarios activos diarios de Xiaohongshu utiliza la
> búsqueda para resolver un problema y el 75 % consulta las recomendaciones.
> Fuente: Huxiu (虎嗅), mayo de 2026. https://www.huxiu.com/article/4861801.html

Una misma persona puede usar ambas funciones. Por eso los porcentajes suman más del 100 %. La búsqueda forma parte del uso habitual de buena parte de la audiencia.

> Xiaohongshu superó los 400 millones de usuarios activos mensuales y
> los 800 millones de búsquedas al día.
> Fuente: informe de Xiaohongshu (小红书), recogido por Beijing Business Today
> (北京商报) a través de Sina Finance, mayo de 2026.
> https://finance.sina.com.cn/jjxw/2026-05-27/doc-inhziqxq9291575.shtml

En tres años, las búsquedas diarias han crecido hasta casi triplicar su volumen.

> Xiaohongshu registraba unos 300 millones de búsquedas diarias a mediados
> de 2023 y alrededor de 600 millones en el cuarto trimestre de 2024.
> Fuente: Zhou Tian Finance (周天财经), recogido por 199IT, diciembre de 2024.
> https://www.199it.com/archives/1731824.html

Parte de esa actividad responde a la intención de comprar.

> Cada día, 39 millones de usuarios de Xiaohongshu manifiestan búsqueda de
> productos que comprar, con 140 millones de acciones de este tipo.
> Fuente: 36Kr (36氪), conferencia de comerciantes GROW de Xiaohongshu,
> abril de 2026. https://www.36kr.com/newsflashes/3758099821871879

| | Recomendaciones | Búsqueda |
|---|---|---|
| Inicio | El sistema elige la nota | El usuario expresa una necesidad |
| Periodo más fuerte | Horas | Meses, a veces años |
| Caída | Rápida cuando pierde novedad | Lenta si sigue respondiendo a la consulta |
| Trabajo editorial | Portada, arranque, primera pantalla | Palabras que escribe el comprador |
| Utilidad | Descubrimiento y alcance | Demanda existente |
| Fallo | Las visitas dejan de crecer | La nota no se selecciona para la consulta |

Un mal arranque entre las recomendaciones no agota la vida de una nota. Si resuelve una pregunta que se repite, puede seguir atrayendo lectores durante un año. Los preparativos de la cuenta se explican en nuestra [guía de Xiaohongshu para marcas extranjeras](/es/analisis/xiaohongshu-marketing-foreign-brands/).

## El título y la imagen deben identificar el mismo tema

La plataforma analiza en conjunto la portada, los fotogramas, el título, el texto y las etiquetas. Una fotografía sin indicaciones en chino acompañada de un título en inglés da pocas referencias al sistema y a los lectores locales.

**Escriba también la portada.** Indique en chino qué podrá resolver el lector. Así verá la promesa de la nota antes de pulsar sobre ella.

**Abra el título con la necesidad del comprador.** Procure situar en los primeros veinte caracteres las palabras que buscaría. El lema de marca puede ir después.

Las etiquetas delimitan el asunto. Veinte temas inconexos lo vuelven menos claro, una práctica que todavía se observa en muchas cuentas de marcas extranjeras.

**Cumpla la promesa en la primera pantalla.** El sistema recibe pronto señales de lectura. Cuatro líneas de introducción pueden ser suficientes para que alguien abandone la nota.

Son consejos para editar contenido. Xiaohongshu no ha publicado valores óptimos de densidad de palabras clave, longitud del título o cantidad de etiquetas. No deben presentarse como límites fijados por el algoritmo.

## Seguir en el perfil no garantiza la distribución

Xiaohongshu (小红书) puede actuar sobre la exposición de una nota sin borrarla. Que siga visible en el perfil propio no demuestra que su difusión continúe con normalidad.

> Entre marzo y finales de agosto de 2025, Xiaohongshu bloqueó más de
> 12 millones de cuentas falsas, actuó contra 13,76 millones de notas de
> marketing engañoso y retiró más de 360 millones de comentarios falsos.
> Fuente: China Daily (中国日报网), enero de 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

En seis meses, las actuaciones afectaron a más de trece millones de notas de marketing. Las nuevas normas comunitarias también detallan el comportamiento comercial.

> Xiaohongshu lanzó la Convención de la Comunidad 2.0 el 19 de enero de 2026,
> con un nuevo apartado sobre actividad comercial ordenada (有序经营).
> Fuente: China Daily (中国日报网), enero de 2026.
> https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html

Pagar a creadores fuera de la plataforma es un riesgo frecuente entre las marcas extranjeras. El mercado oficial Pugongying (蒲公英) ofrece el canal para las colaboraciones declaradas.

> Pugongying cobra el 10 % del contrato en el modo estándar y el 20 % en
> la modalidad superior, que añade promoción de la plataforma.
> Fuente: Niaoge Biji (鸟哥笔记), octubre de 2022.
> https://www.niaogebiji.com/article-482538-1.html

A las reglas de la plataforma se añaden las obligaciones legales de identificar la publicidad en China.

> El contenido que promociona productos mediante conocimientos, experiencias
> o reseñas y adjunta un enlace de compra debe identificarse de forma
> destacada como publicidad.
> Fuente: Administración Estatal de Regulación del Mercado
> (国家市场监督管理总局), Medidas de Publicidad en Internet, artículo 9,
> en vigor desde mayo de 2023.
> https://www.gov.cn/gongbao/2023/issue_10506/202306/content_6885261.html

Una comisión evitada no elimina el riesgo de una publicidad sin declarar. También puede resultar más difícil exigir el cumplimiento del encargo y el creador también queda expuesto. En las recomendaciones de producto (种草), la declaración correcta forma parte del trabajo.

Los informes públicos agrupan las sanciones. Las reglas no garantizan una notificación individual en cada caso. Revise las estadísticas de su cuenta para detectar cambios. Las comprobaciones dentro de la aplicación que confirman una limitación, y las otras seis causas de una cuenta estancada, están en [siete razones por las que una cuenta de Xiaohongshu deja de crecer](/es/analisis/xiaohongshu-account-not-growing/).

## Cuatro indicadores para localizar el problema

Los datos de su cuenta se pueden comprobar uno a uno. Los promedios de mercado de un proveedor rara vez ofrecen el detalle necesario para hacer lo mismo.

Visitas, me gusta, guardados, comentarios, envíos, nuevos seguidores y origen del tráfico figuran en el panel. Compararlos entre sí permite decidir dónde intervenir.

**La proporción de visitas respecto a impresiones** ayudan a evaluar la presentación. Si la nota aparece a menudo pero pocos la abren, empiece por la portada y el título. Pedir más exposición no resuelve por sí solo ese problema.

**Los guardados respecto a los me gusta** orientan sobre la utilidad. Quien guarda prevé volver a leer. Una nota apreciada pero apenas guardada quizá no aporta una respuesta que merezca consultarse de nuevo.

**Los nuevos seguidores por visita** permiten examinar a quién llega el contenido. Muchas visitas sin nuevos seguidores pueden indicar que la nota no alcanza a los compradores buscados. Repetir el tema puede repetir también el resultado el mes siguiente.

**La proporción procedente de búsquedas** se observa en una misma nota a los tres, treinta y noventa días. Puede aumentar cuando bajan las visitas totales. En ese caso, el contenido quizá sigue atendiendo una demanda concreta.

Ocho semanas de seguimiento, nota a nota, permiten conocer la difusión de su cuenta mejor que una guía general, incluida esta.

## Del primer público a las consultas recurrentes

La tabla describe el funcionamiento, no una campaña de cliente medida. Solo publicamos resultados de clientes con permiso escrito. Para añadir volúmenes reales, use las estadísticas de su propia cuenta.

| Etapa | Qué ocurre | Qué se observa | Posible lectura de un parón |
|---|---|---|---|
| Revisión | Control previo a la difusión | Nota visible, casi ninguna visita | Normal; no hay plazo público de revisión |
| Primer público | Selección para un grupo pequeño afín | Empiezan las visitas, pocas impresiones | Tema poco claro; revisar portada y título |
| Respuesta temprana | Las interacciones alimentan la clasificación | Suben visitas, no guardados | La primera pantalla no cumple la promesa |
| Mayor recomendación | Competencia con notas nuevas | Crecimiento durante horas, no días | Las novedades recuperan posiciones |
| Búsqueda duradera | Respuesta a consultas recurrentes | Pocas visitas, constantes durante semanas | ¿Faltan en el título las palabras del comprador? |

Una selección inicial débil puede parecerse, en el informe semanal, a una falta de respuesta después de abrir la nota. El trabajo cambia: revisar la presentación en el primer caso, el contenido en el segundo. Distinguirlos permite elegir la corrección adecuada.

Nuestra [guía de apertura de una cuenta de empresa en Xiaohongshu](/es/analisis/xiaohongshu-business-account-setup/) aborda los requisitos previos. La [guía de costes del marketing en Xiaohongshu](/es/analisis/xiaohongshu-marketing-cost/) detalla los gastos habituales. Las tareas que realizamos para clientes figuran en la [página de agencia RedNote](/es/agencia-rednote/).

## Preguntas frecuentes

### ¿Qué explica que una nota de Xiaohongshu no tenga visitas?

Revise cómo se identifica el tema antes de dar por hecha una sanción. Sin pistas en chino en la portada y palabras familiares para los compradores en el título, la recuperación puede no encontrar un público adecuado. Si hay pocas impresiones, examine esa afinidad. Si hay muchas pero no llegan clics, trabaje la presentación.

### ¿Cuándo conviene valorar la difusión de una nota?

La recuperación y la clasificación pasaron de actualizarse a diario a hacerlo por minutos. En el informe técnico de 2023, las notas del último día concentraban casi la mitad de las impresiones de inicio. La plataforma no fija un plazo público de revisión. Siga la primera hora con atención y espere al menos un día para evaluar los resultados.

### ¿Existe una hora ideal para publicar en Xiaohongshu?

No hay una hora universal publicada por la plataforma. En recomendaciones conviene coincidir con la actividad de los compradores en China, para recibir pronto reacciones reales. En búsqueda importa menos el momento inicial: la nota puede seguir recibiendo visitas varios meses después.

## Empiece por los últimos noventa días

Facilítenos su cuenta. Revisaremos las estadísticas de los últimos noventa días para localizar la señal que falla y las búsquedas en las que sus notas no aparecen.

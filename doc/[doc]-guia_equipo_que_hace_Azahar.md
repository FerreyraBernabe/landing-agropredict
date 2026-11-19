

| ![][image1] | GUÍA INTERNA DEL EQUIPO Qué hace Azahar *Nuestro software explicado para todo el equipo, con guion de demo* |
| :---: | :---- |

Grupo 11 · Comisión 4K2 · UTN Facultad Regional Tucumán · 2026

| EN UNA FRASE, PARA DECIRLA DE MEMORIA Azahar le dice al productor qué atender hoy en su finca, hectárea por hectárea, combinando imágenes de dron, sensores de suelo y conocimiento agronómico del citrus. |
| :---- |

1\. Qué problema resuelve

El productor tiene mucha información dispersa y poco tiempo. Las plataformas de agricultura de precisión suelen mostrar mapas de colores e índices técnicos que hay que saber interpretar. Azahar hace el paso que falta: traduce los datos en tareas concretas, con qué hacer, dónde, por qué y cómo.

2\. Cómo funciona, paso a paso

1. **Carga de lotes:** el productor sube el plano de su finca en formato shapefile. Azahar entiende los sistemas de coordenadas que se usan en Argentina (POSGAR y Gauss-Krüger, fajas 1 a 7), además de WGS84 y UTM.

2. **Grilla de 1 ha:** sobre cada lote arma una cuadrícula de una hectárea. Esa es la unidad mínima de análisis.

3. **Índices espectrales:** con las imágenes del dron calcula, para cada hectárea, índices como NDVI (vigor), NDRE (clorofila) y NDMI (agua en la hoja), sobre una serie de 12 vuelos cada 14 días.

4. **Sensores en vivo:** los nodos de campo informan humedad, temperatura y nutrientes del suelo, y el clima, cada 3 segundos.

5. **Motor agronómico:** cruza todo eso con reglas propias del citrus para calcular un índice de salud de 0 a 100, detectar problemas, estimar el riesgo de plagas, recomendar riego y predecir la cosecha.

6. **Tareas del día:** muestra el resultado como una lista corta de tareas ordenadas por urgencia, conectadas con el mapa.

| UNA IDEA CLAVE PARA EXPLICAR Cada hectárea se compara con un lote sano de la misma especie y edad, no con un número fijo. Así un lote joven, que tiene menos follaje, no aparece falsamente como enfermo. |
| :---- |

3\. Indicadores: qué representa cada uno

Estos son los números que calcula Azahar. Conviene que todo el equipo sepa qué mide cada uno y cómo se lee, porque son la base de cualquier explicación técnica.

| Indicador | Qué representa | Cómo se obtiene | Cómo leerlo |
| :---- | :---- | :---- | :---- |
| **Salud integral (0 a 100\)** | El estado general de la hectárea comparado con un lote sano de la misma especie y edad. | 40 % NDVI \+ 40 % NDRE \+ 20 % NDMI, cada uno contra su valor de referencia. | 85 o más: muy bien · 72 a 85: bien · 55 a 72: atención · menos de 55: con problemas. |
| **NDVI** | Vigor: cuánto follaje verde y activo hay. | (NIR − Rojo) / (NIR \+ Rojo). | Citrus adulto sano: cerca de 0,70 a 0,80. Baja con defoliación o estrés fuerte. |
| **NDRE** | Clorofila: el color de la hoja. Más sensible que el NDVI en copas densas como el citrus. | (NIR − Borde rojo) / (NIR \+ Borde rojo). | Sano: cerca de 0,38 a 0,44. Una caída en un foco puede indicar HLB; en todo el lote, nutrición. |
| **NDMI** | Agua dentro de la hoja. | (NIR − SWIR) / (NIR \+ SWIR). | Sano: cerca de 0,33 a 0,44. Por debajo de 0,26 hay posible falta de agua. |
| **GNDVI** | Estado nutricional, sobre todo nitrógeno. | (NIR − Verde) / (NIR \+ Verde). | Se interpreta junto con el NDRE. |
| **EVI** | Vigor mejorado: no se satura cuando hay mucho follaje. | Combina NIR, Rojo y Azul. | Complementa al NDVI en lotes muy tupidos. |
| **Cobertura de copa (%)** | Qué parte del suelo cubre la copa, vista desde arriba. | Proporción de copa y entrefila en cada hectárea. | Crece con la edad: lote joven cerca de 30 %, adulto entre 75 y 85 %. |
| **Riesgo sanitario (0 a 100\)** | Probabilidad de plagas y enfermedades. | Ocho modelos, uno por plaga, con el clima de 14 días, la etapa del cultivo y la variedad. | Menos de 25: bajo · 25 a 50: moderado · 50 a 75: alto · 75 o más: muy alto. |
| **Humedad del suelo (%)** | Agua disponible en el suelo a 30 y 60 cm. | Sensores de humedad volumétrica. | Se compara con el umbral de riego, entre la capacidad de campo y el punto de marchitez. |
| **Lámina de riego (mm)** | Cuánta agua hay que reponer. | Capacidad de campo menos humedad actual. | 1 mm equivale a 10.000 litros por hectárea. |
| **ET0 (mm por día)** | Cuánta agua pierde el cultivo por día. | Fórmula de Hargreaves con la temperatura, por el coeficiente del cultivo (Kc). | Permite anticipar cuándo va a hacer falta regar. |
| **Índice de madurez** | Relación entre azúcar y acidez del jugo. | Grados Brix ÷ acidez, más el porcentaje de jugo. | Naranja: 6 o más y jugo de 35 % · mandarina: 7 o más y jugo de 30 %. |
| **Superficie con estrés (ha)** | Hectáreas con algún problema detectado. | Suma de las hectáreas con diagnóstico distinto de «sin anomalías». | Es el número que resume cuánto del campo hay que atender. |
| **Plantas afectadas** | Estimación de plantas con síntomas. | Hectáreas con estrés × densidad de plantación. | Sirve para dimensionar la recorrida o el tratamiento. |
| **Toneladas estimadas** | Producción esperada del lote. | Especie, variedad, edad, densidad y salud observada. | Se usa para planificar cuadrillas y empaque. |

**Qué muestra cada capa del mapa**

| Capa | Indicador que usa | Para qué sirve |
| :---- | :---- | :---- |
| **Salud** | Salud integral | Ver de un vistazo qué hectáreas están peor. Las sanas se ven tenues para que resalten las que tienen problemas. |
| **Agua** | NDMI | Encontrar zonas secas que pueden necesitar riego. |
| **Riesgo** | Riesgo sanitario | Saber dónde concentrar el monitoreo de plagas esta semana. |
| **Más (técnicas)** | NDVI, NDRE, NDMI, cobertura y diagnóstico | Análisis detallado para el asesor técnico. |

**Diagnósticos que detecta y cómo los reconoce**

| Diagnóstico | Patrón que lo identifica |
| :---- | :---- |
| **Estrés hídrico** | NDMI bajo y humedad de suelo por debajo del umbral, en una franja del lote. |
| **Exceso de agua / posible Phytophthora** | Suelo saturado por encima de la capacidad de campo y pérdida de vigor y de cobertura. |
| **Deficiencia nutricional** | NDRE bajo que se distribuye en gradiente sobre todo el lote. |
| **Daño por ácaros** | Pérdida de clorofila en manchones, con clima seco y cálido favorable a la plaga. |
| **Clorosis compatible con HLB** | Caída fuerte de clorofila y raleo de copa en un foco chico, rodeado de plantas sanas. |

4\. Qué puede hacer

| Función | Qué hace | Dónde está |
| :---- | :---- | :---- |
| **Tareas de hoy** | Lista de tareas en lenguaje simple, con «Hecho», «Ver en el mapa» y «Cómo hacerlo». | Versión 3 |
| **Mapa** | Salud, agua y riesgo por hectárea; índices técnicos; mapa satelital, híbrido, de calles o de relieve sin perder la ubicación. | Versión 3 |
| **Diagnóstico** | Falta de agua, exceso de agua o posible Phytophthora, deficiencia nutricional, ácaros y clorosis compatible con HLB. | Motor (v2 y v3) |
| **Sanidad** | Riesgo de 8 plagas y enfermedades: psílido del HLB, mancha negra, cancrosis, mosca de los frutos, ácaro del tostado, arañuela, Phytophthora y minador. | Versión 2 |
| **Riego** | Humedad del suelo frente al umbral del cultivo y milímetros a reponer. | Versión 2 |
| **Cosecha** | Lotes listos, fecha estimada de madurez, toneladas esperadas y registro de muestreos. | Versión 2 |
| **Cartera** | El asesor compara todos los establecimientos de sus clientes. | Versión 2 |
| **Datos** | Importar lecturas de sensores por CSV y exportar zonas de manejo (shapefile), grilla (GeoJSON) y tabla (CSV). | Versión 2 |

La versión 3 es la interfaz nueva, rediseñada para ser más simple y guiada. La versión 2 es la anterior, que todavía tiene los módulos de lotes, sanidad, riego, cosecha y cartera. El motor de cálculo es el mismo en las dos y los módulos se van pasando a la versión 3\.

5\. Usuarios

| Rol | Usuario de demo | Qué ve y qué puede hacer |
| :---- | :---- | :---- |
| **Productor** | productor / citrus2026 | Solo su establecimiento: tareas, mapa, riego y cosecha. Registra muestreos y carga lecturas. |
| **Asesor técnico** | asesor / citrus2026 | Todos los establecimientos de sus clientes. Además carga lotes, corrige datos y usa la cartera. |
| **Administrador** | admin / agropredict | Todo, más la gestión de usuarios y la baja de establecimientos. |

Cada usuario entra con su contraseña, que se guarda cifrada y nunca en texto plano. Un productor no puede ver los campos de otro.

6\. Qué es real y qué es simulado

Este punto es importante para no exagerar en la presentación:

* **Real:** los lotes de demostración, trazados sobre fincas citrícolas reales de Monteros (Finca Santa Lucía) y Famaillá (Finca Don Alberto); la grilla, la carga de shapefiles, los usuarios y todo el conocimiento agronómico.

* **Simulado:** las imágenes del dron y las lecturas de los sensores. Se generan de forma coherente sobre esos lotes reales porque todavía no tenemos el hardware.

* **Preparado para lo real:** el software está diseñado para que, cuando lleguen el dron y los sensores, se reemplace solo la fuente de datos. El análisis y la interfaz no cambian.

7\. Cómo está hecho (en simple)

* **Backend:** el servidor está en Python con FastAPI y organizado en capas (arquitectura limpia): reglas del negocio, casos de uso, infraestructura y API, cada una separada de las otras.

* **Frontend:** la interfaz nueva está hecha en React con TypeScript.

* **Mapas:** funciona con Google Maps si se carga una API key, y si no usa mapas abiertos, con el mismo selector.

* **Calidad:** 74 pruebas automáticas que se ejecutan en cada cambio, incluida una que controla que las capas no se mezclen.

* **Instalación:** se instala con doble clic en Windows, con Docker o como ejecutable.

8\. Guion de la demo (5 minutos)

1. **Inicio:** abrir Azahar con iniciar.bat y entrar como Productor.

2. **Pantalla Hoy:** mostrar el saludo, la frase de estado y el índice de salud. «En una mirada sabés cómo está tu finca».

3. **La tarea más urgente:** en la tarea «Revisar posible HLB», tocar «Ver en el mapa»: el mapa va directo a las tres hectáreas afectadas.

4. **Qué hacer:** desplegar «Cómo hacerlo» y marcar la tarea como hecha. Mostrar que avanza el progreso del día.

5. **Capas:** pasar a la capa Agua y mostrar la zona seca del Cuartel 4, que coincide con la tarea de riego.

6. **Mapa base:** cambiar entre Satélite, Híbrido y Mapa y mostrar que no se pierde la ubicación.

7. **Roles:** si hay tiempo, salir y entrar como Asesor para mostrar que ve los dos establecimientos.

9\. Preguntas que nos pueden hacer

**P: ¿Los datos son reales?**

**R:** Los lotes y las reglas agronómicas sí; las imágenes y los sensores se simulan sobre esos lotes reales hasta tener el hardware. El sistema está preparado para cambiar solo la fuente de datos.

**P: ¿Cómo detectan el HLB?**

**R:** No lo diagnosticamos: detectamos una pérdida de clorofila localizada, rodeada de plantas sanas, que es compatible con HLB. Azahar indica revisar las plantas y, si hay síntomas, notificar a SENASA, porque es una enfermedad de denuncia obligatoria.

**P: ¿Por qué una hectárea y no cada planta?**

**R:** Porque es el nivel de detalle con el que el productor puede actuar —regar un sector, revisar un foco— y mantiene el procesamiento liviano.

**P: ¿Funciona sin internet?**

**R:** Sí, se puede usar en una computadora sin conexión. Lo único que necesita internet es la imagen de fondo del mapa.

**P: ¿Qué pasa con los datos del productor?**

**R:** Son del productor. Cada usuario ve solo lo suyo y puede exportar toda su información cuando quiera.

**P: ¿Qué falta?**

**R:** Pasar a la interfaz nueva los módulos de lotes, cosecha y cartera, un recorrido guiado para usuarios nuevos, conectar el dron y los sensores reales, y sumar el pronóstico del tiempo.

10\. Glosario

Términos que aparecen en el software, en la documentación y en la presentación, ordenados alfabéticamente.

| Término | Qué significa |
| :---- | :---- |
| **AgroPredict S.A.S.** | Sociedad por Acciones Simplificada tucumana de base tecnológica, propietaria y desarrolladora del sistema. |
| **API key** | Clave que identifica a una aplicación ante un servicio externo, como Google Maps. |
| **API REST** | Interfaz de programación de aplicaciones basada en recursos HTTP, que el tablero web consume para obtener y enviar datos. |
| **Arquitectura limpia** | Forma de organizar el código en capas independientes (reglas del negocio, casos de uso, infraestructura e interfaz) para poder cambiar una sin romper las otras. |
| **Azahar** | Nombre del sistema informático especificado en este documento. Flor del citrus; marca de producto de AgroPredict S.A.S. |
| **Backend / frontend** | El backend es el servidor que calcula y guarda los datos; el frontend es la interfaz que ve el usuario en el navegador. |
| **Banda espectral** | Intervalo del espectro electromagnético registrado por la cámara. El sistema modela azul, verde, rojo, borde rojo (red edge), infrarrojo cercano (NIR) e infrarrojo de onda corta (SWIR). |
| **Banda NIR** | Infrarrojo cercano: luz invisible que las hojas sanas reflejan con mucha intensidad. |
| **Borde rojo (red edge)** | Franja de luz entre el rojo y el infrarrojo, muy sensible al contenido de clorofila. |
| **Brotación** | Etapa en que la planta emite brotes nuevos; es cuando el psílido del HLB pone sus huevos. |
| **Cancrosis** | Enfermedad bacteriana causada por Xanthomonas citri, favorecida por lluvia y viento sobre tejido nuevo. |
| **CC / PMP** | Capacidad de campo y punto de marchitez permanente. Límites superior e inferior del agua disponible para la planta en el suelo. |
| **Cobertura de copa** | Porcentaje de la superficie de la hectárea ocupada por la proyección vertical de la copa de las plantas. |
| **CRS** | Coordinate Reference System. Sistema de coordenadas de referencia que define cómo se proyectan las coordenadas sobre el plano. |
| **Cuartel** | Nombre que se le da en la zona a cada lote de una finca citrícola. |
| **Diaphorina citri** | Psílido asiático de los cítricos. Insecto vector del HLB, bajo alerta fitosanitaria en la provincia de Tucumán. |
| **EEAOC** | Estación Experimental Agroindustrial Obispo Colombres. Organismo de referencia técnica del agro tucumano. |
| **ERS** | Especificación de Requisitos de Software. Documento que define qué debe hacer el sistema, conforme a IEEE Std 830-1998. |
| **Establecimiento** | Unidad de explotación agrícola de un cliente (finca). Agrupa uno o más lotes y constituye la unidad de carga del sistema. |
| **ET0 / Kc** | Evapotranspiración de referencia y coeficiente de cultivo. Permiten estimar el consumo hídrico del cultivo. |
| **EVI** | Enhanced Vegetation Index. Índice de vegetación mejorado, menos saturable que el NDVI en coberturas altas. |
| **Fenología** | Las etapas del ciclo anual del cultivo: reposo, brotación, floración, cuaje, crecimiento del fruto y cosecha. |
| **Gauss-Krüger / faja** | Proyección transversa de Mercator utilizada en la cartografía argentina. El territorio se divide en siete fajas de 3° de ancho; Tucumán corresponde a la faja 3 (meridiano central −66°). |
| **GeoJSON** | Formato de intercambio de datos geográficos basado en JSON. |
| **GNDVI** | Green NDVI. (NIR − Verde) / (NIR \+ Verde). Variante sensible al estado nutricional nitrogenado. |
| **Grilla** | Cuadrícula de celdas de una hectárea que Azahar dibuja sobre cada lote. |
| **Hectárea / celda** | Unidad mínima de análisis del sistema. Cuadrícula de 100 m × 100 m (1 ha) recortada contra el contorno del lote. |
| **HLB** | Huanglongbing o greening de los cítricos. Enfermedad bacteriana de denuncia obligatoria, sin cura, transmitida por el psílido asiático. |
| **Índice de madurez** | Relación entre sólidos solubles (°Brix) y acidez titulable del jugo. Criterio normativo de madurez interna de la fruta. |
| **Lámina de riego** | Altura de agua, expresada en milímetros, que debe reponerse al suelo para retornar a capacidad de campo. |
| **Lote / cuartel** | Subdivisión productiva de un establecimiento, homogénea en especie, variedad, año de plantación y marco de plantación. Equivale a un polígono del shapefile. |
| **Mancha negra** | Enfermedad fúngica causada por Phyllosticta citricarpa, limitante para la exportación de fruta fresca. |
| **Marco de plantación** | Distancia entre filas y entre plantas, por ejemplo 7 × 4 metros. Define cuántas plantas hay por hectárea. |
| **Multiespectral** | Cámara que registra varias bandas de luz, incluidas las invisibles para el ojo, como el infrarrojo. |
| **MVP** | Producto Mínimo Viable. Versión del sistema con el conjunto mínimo de funcionalidades que aporta valor verificable al cliente. |
| **NDMI** | Normalized Difference Moisture Index. (NIR − SWIR) / (NIR \+ SWIR). Estima el contenido de agua en la hoja. |
| **NDRE** | Normalized Difference Red Edge. (NIR − Borde rojo) / (NIR \+ Borde rojo). Sensible al contenido de clorofila en cultivos de copa densa como el citrus. |
| **NDVI** | Normalized Difference Vegetation Index. (NIR − Rojo) / (NIR \+ Rojo). Indicador de vigor y densidad de biomasa fotosintéticamente activa. |
| **Ortomosaico** | Imagen única del campo armada uniendo y corrigiendo todas las fotos del vuelo del dron. |
| **PBKDF2** | Password-Based Key Derivation Function 2\. Función de derivación de claves empleada para almacenar las contraseñas de forma irreversible. |
| **Portainjerto** | La raíz sobre la que se injerta la variedad. Influye en el vigor y en la resistencia a enfermedades del suelo. |
| **POSGAR** | Posiciones Geodésicas Argentinas. Marco de referencia oficial de la República Argentina (versiones 94 y 2007). |
| **Reflectancia** | Proporción de luz que refleja una superficie en cada banda. Con ella se calculan los índices. |
| **Rol** | Conjunto nominado de permisos que determina qué operaciones puede ejecutar un usuario. El sistema define los roles productor, asesor y administrador. |
| **RTK** | Real-Time Kinematic. Técnica de corrección diferencial que permite georreferenciación centimétrica en tiempo real. |
| **Salud integral** | Índice sintético propio del sistema, en escala 0 a 100, que combina NDVI, NDRE y NDMI de la hectárea contra el valor esperado de un lote sano de igual especie y edad. |
| **SENASA** | Servicio Nacional de Sanidad y Calidad Agroalimentaria. Autoridad sanitaria nacional. |
| **Shapefile** | Formato vectorial de Esri para datos geográficos. Se compone de los archivos .shp (geometría), .shx (índice), .dbf (atributos) y .prj (sistema de referencia). |
| **SSE** | Server-Sent Events. Mecanismo del protocolo HTTP que permite al servidor enviar un flujo continuo de eventos al navegador sobre una única conexión. |
| **SWIR** | Infrarrojo de onda corta: banda sensible al agua contenida en las hojas. |
| **Teledetección** | Obtener información de un cultivo a distancia, con imágenes de dron o de satélite. |
| **UTM** | Universal Transverse Mercator. Proyección cartográfica mundial dividida en husos de 6°. |
| **VANT** | Vehículo Aéreo No Tripulado (dron). Plataforma de captura de las imágenes multiespectrales. |
| **WGS84** | World Geodetic System 1984\. Sistema geodésico global de coordenadas geográficas (latitud/longitud), EPSG:4326. |
| **Zona de manejo** | Agrupación de hectáreas contiguas con diagnóstico y severidad homogéneos, exportable como capa vectorial para aplicación diferenciada de insumos. |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACE0lEQVR4Xu2ZvUoDQRRG8ySWWkaxEBVBsYmCb2BjQPzDFwqksfAJBN/A1kZtxEZskk59gMgEIrtn9s7e2Z3Z7CZ74UCy+92Z76RNp+M5v+O3yTxhnyDDS+oCe3oPD6wr7K0aHlJ32N85XG4K9MgcLjUN+qSG4aZCr+kw1HTot9iCfBmDldOdFHwfg8oEKVeVZCWClCLMhyS63Gp/3xIia/0Day8kUQUpI8G9kLSCZaCIBPdC0gqWgSIS3AtJK0hYLsnH+5M6myS5Y87geymrwUuQl0ncPw698iZ79zCwnkuwlwu1IC/RoNnTZLJgP4mogjFhP4nogpvXR/+fu2fbU2bfx1/PVl4L+0lEFzR8DrqZMOcD+0lEF6QUYV4L+0moBQ28RAOFCPMa2MuFl6CBl7k4vNiyhIjJcM8F++ThLWjgpRJ75/mCJsM9CfbQUEhwBgsQk6EQ0Z5TlFKCEslyFCKhRCSCCvKXz5NkLoZoMEGWzOLkdndyfGM/z4LnFyWIIMuFgvcUoRXMg6VCw/t8aQVdsEweZfeK0Aq6YBEXIXd9qERw/apn7W5c9qycBHd9qESQe6H2NZQSNLAMYZ4wT5j3pbTg9+jFKlWkGPcNP6NXK+dL9P8I50kl//DOk+URXETJlNxSCJphqKnQKzUMNw36ZA6XmgI9nMPlusP+quEhdYW9vYcH1gX2DDK8pGrYJ2/+AEXC0eb907SFAAAAAElFTkSuQmCC>
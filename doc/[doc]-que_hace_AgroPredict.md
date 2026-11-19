

| ![][image1] | GUÍA INTERNA DEL EQUIPO Qué hace AgroPredict *Todo lo que el equipo tiene que saber de nuestra empresa* |
| :---: | :---- |

Grupo 11 · Comisión 4K2 · UTN Facultad Regional Tucumán · 2026

| EN UNA FRASE, PARA DECIRLA DE MEMORIA AgroPredict es una empresa tucumana que usa drones, sensores y datos para que el productor de citrus sepa qué atender en cada hectárea antes de que el problema se vea. |
| :---- |

1\. Qué hacemos

Hacemos agricultura de precisión para las economías regionales de Tucumán, empezando por el citrus. Hoy la mayoría de los productores controla sus lotes recorriéndolos a pie: cuando un problema se ve a simple vista, la pérdida ya ocurrió. Nosotros medimos el campo con tecnología y le devolvemos al productor decisiones concretas.

Nuestra oferta tiene cuatro partes que se complementan:

* **Vuelos de dron:** vuelos con dron multiespectral (cámara de cuatro bandas y posicionamiento RTK centimétrico) que detectan el estrés de la planta antes de que sea visible.

* **Sensores IoT:** instalación y mantenimiento de nodos que miden humedad, temperatura y nutrientes del suelo y el clima de cada lote.

* **Plataforma Azahar:** nuestro software, Azahar, que convierte esos datos en una lista diaria de tareas por lote y por hectárea.

* **Asesoramiento en terreno:** ingenieros agrónomos que van al campo a confirmar los diagnósticos con el productor.

2\. A quién le vendemos

| Cliente | Qué le resolvemos |
| :---- | :---- |
| **Productores citrícolas** | Saber qué lotes necesitan riego, dónde hay un foco sanitario y cuándo cosechar, sin recorrer todo a ciegas. |
| **Asesores y consultoras** | Seguir varios establecimientos de distintos clientes desde un solo lugar y priorizar las recorridas. |
| **Empresas agrícolas** | Información objetiva por hectárea para planificar insumos, cuadrillas y logística de cosecha. |

Empezamos por el citrus porque Tucumán es el principal productor de limón del país y porque es un cultivo con enfermedades graves —como el HLB— donde detectar temprano vale mucho dinero. Después apuntamos al resto de las economías regionales.

3\. Cómo generamos ingresos

1. **Vuelo de diagnóstico a bajo costo:** un primer vuelo con reporte, a precio de entrada, para que el productor vea el valor antes de comprometerse. Es nuestra puerta de entrada comercial.

2. **Suscripción a la plataforma:** acceso a Azahar para el productor o el asesor, con sus establecimientos y usuarios.

3. **Servicio de monitoreo:** vuelos periódicos cada 14 días e instalación y mantenimiento de sensores.

4. **Asesoramiento:** visitas de los ingenieros agrónomos para validar diagnósticos y acompañar decisiones.

4\. Mercado y competencia

En Tucumán el software agropecuario está dominado por sistemas de gestión administrativa y contable, como SYNAgro. No hay una competencia directa local en agricultura de precisión: SYNAgro es competencia indirecta y no buscamos reemplazarlo, sino complementarlo. A nivel nacional e internacional existen plataformas como Auravant, OneSoil o EOS, que trabajan principalmente con imagen satelital y para cultivos extensivos.

**Análisis FODA**

| Fortalezas | Oportunidades | Debilidades | Amenazas |
| :---- | :---- | :---- | :---- |
| **Especialización en IA, drones e IoT** | Alianzas con la EEAOC y el Cluster Tecnológico | Empresa nueva, sin cartera de clientes | Sistemas de gestión ya instalados |
| **Conocimiento en procesamiento de imágenes** | Demanda creciente de eficiencia en insumos | Dependencia de hardware importado | Resistencia cultural al cambio |
| **Metodologías ágiles, entregas rápidas** | Poca competencia especializada | Mercado local acotado | Inestabilidad económica |
| **Cercanía con el productor tucumano** |  |  |  |

5\. Cómo estamos organizados

Nos constituimos como Sociedad por Acciones Simplificada (S.A.S.) porque se forma rápido, exige un capital mínimo bajo y permite sumar inversores después, algo clave para financiar drones y sensores importados. Además, sin CUIT ni personería jurídica no podríamos contratar servidores, licencias ni conectividad empresarial.

| Área | Qué hace |
| :---- | :---- |
| **Dirección General** | Estrategia y relación con inversores y socios institucionales. |
| **Tecnología** | Cinco gerencias: Desarrollo, Sistemas, Soporte, Datos y Analítica, y Agronomía y Operaciones (operadores de drones, técnicos de sensores e ingenieros agrónomos). |
| **Comercial** | Ventas, alianzas, contenido y atención al cliente. |
| **Recursos Humanos** | Selección, administración del personal y convenios. |

6\. Nuestra infraestructura

Usamos una arquitectura híbrida. Subir a la nube cientos de gigabytes de imágenes crudas por día sería carísimo, y depender solo de un servidor propio no garantizaría que el cliente vea sus reportes siempre.

* **En la oficina:** servidor propio con memoria ECC y discos en RAID 10 (24 TB útiles) que recibe las imágenes de los drones y hace el procesamiento pesado.

* **En la nube:** Amazon Web Services aloja la plataforma que usa el cliente, con 99,5 % de disponibilidad, almacenamiento de reportes y base de datos con copias diarias.

* **Red:** cableado categoría 6, redes virtuales separadas para servidores, desarrollo y gerencias, y Wi-Fi 6\.

* **Herramientas:** Google Workspace, Jira, HubSpot CRM, Power BI y GitHub.

7\. Objetivos

| \# | Objetivo | Cómo lo logramos |
| :---- | :---- | :---- |
| **1** | Tener un producto mínimo viable funcionando en 3 meses | Herramientas de código abierto y arquitectura escalable |
| **2** | Que nuestros resultados respalden el 90 % de las decisiones del cliente | Alertas tempranas y validación cruzada en el campo |
| **3** | Sumar 5 empresas agrícolas tucumanas en 6 meses | Vuelos de diagnóstico a bajo costo y presencia en jornadas de la EEAOC |
| **4** | Ser miembros del Cluster Tecnológico Tucumán en 8 meses | Formalización, estándares de calidad y presentación del producto |

8\. Preguntas que nos pueden hacer

**P: ¿Qué los diferencia de Auravant o de otras plataformas?**

**R:** Que usamos dron y no solo satélite, lo que da mucho más detalle; que nos especializamos en citrus y en el clima tucumano; y que tenemos ingenieros agrónomos en el campo. No vendemos solo un software: acompañamos la decisión.

**P: ¿Por qué una S.A.S. y no otra figura?**

**R:** Por la velocidad de constitución, el capital mínimo bajo y la flexibilidad para incorporar inversores, que necesitamos para comprar hardware importado.

**P: ¿Cómo convencen a un productor que nunca usó tecnología?**

**R:** Con el vuelo de diagnóstico a bajo costo: le mostramos un problema real de su finca antes de pedirle que contrate.

**P: ¿Qué pasa en fincas sin señal de celular?**

**R:** El operador descarga las imágenes en el campo y las procesa en la oficina; el software también puede funcionar sin conexión, salvo el mapa de fondo.

**P: ¿Por qué arrancar por el citrus?**

**R:** Porque Tucumán es el principal productor de limón del país y porque enfermedades como el HLB hacen que detectar a tiempo tenga un valor económico enorme.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAB/ElEQVR4Xu2ZPUrEQBiG9yRewcLOG3gHT+AhLK0EERHBRjsVS5vtFAIWi52slYhYrlqIB1iJuJI8M5mfbybJTHY/eJr5fvI+dUYjz/qePc37hHmiFD+SCszpXTyYKsztVDySOsxvLC7nAj20xaXcoE+tOJwr9PotDuUO/YYtyOZQWAnmzqDlFqwEcycpwY2drfna9mYNzvjSq+Dl+EwRItzxpRdBSpjgri+dCTK4K7zjSyeCDO3Ky/O9csuXVgUZ2Bfek9CaIMNK4E0JrQgyqBTelRBdkCGlHFzsK7clRBVkSB2us7wtJZogA+rwmed9KZ0J+sxzNoQoggxIQudDCBa8Gp8rAU1h2SecDyVYkAFNYdnXwZ1QWhN0nTPtxCBIkAGbgrKvgzuxiC7oMkO4Y+NzcqS8NRFV0NbX8Ti9VfZMvJ2u/8OeDrFgMbkJlju+PlT2TFTlWhcMleOODYlcSbBg07sJ7ixoCv9e7PUjqHszwfkqJgFTz4ZYkFDGVayEAlUR3ZsPUQR9hapQwAR3XYgiKKVJgO9SuRKh4PQPvrtjE6j2vl4Lpe+KUDAMm1x1bna3q7z70Lsge7Hp7R/hx8OJ8hab5fjDuxSCQ5SsyS2FYFkcyhV61YrDuUEfbXEpF+hhLC6nDvM7FY+kCnN7Fw+mAnNGKX6ka5jHVj/BqliK87H0tAAAAABJRU5ErkJggg==>
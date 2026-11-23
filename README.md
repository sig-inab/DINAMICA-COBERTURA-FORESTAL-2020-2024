<p align="center">
  <strong>Mapa de Dinámica de la Cobertura Forestal de Guatemala (2020–2022 y 2022–2024)</strong><br/>
  <sub>Grupo Interinstitucional de Monitoreo de Bosques y Uso de la Tierra (GIMBUT)</sub>
</p>

<p align="center">
  <a href="https://www.inab.gob.gt/">
    <img src="assets/logos/inab.png" alt="INAB - Instituto Nacional de Bosques" title="INAB - Instituto Nacional de Bosques" height="62" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://conap.gob.gt/">
    <img src="assets/logos/conap.png" alt="CONAP - Consejo Nacional de Áreas Protegidas" title="CONAP - Consejo Nacional de Áreas Protegidas" height="62" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://marn.gob.gt/">
    <img src="assets/logos/marn.png" alt="MARN - Ministerio de Ambiente y Recursos Naturales" title="MARN - Ministerio de Ambiente y Recursos Naturales" height="62" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.uvg.edu.gt/">
    <img src="assets/logos/uvg.png" alt="UVG - Universidad del Valle de Guatemala" title="UVG - Universidad del Valle de Guatemala" height="62" />
  </a>
</p>

---

<p align="center">
  <a href="https://earthengine.google.com/">
    <img src="assets/logos/google_earth_engine.png" alt="Google Earth Engine" title="Google Earth Engine" height="62" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.collect.earth/">
    <img src="assets/logos/collect_earth_online.png" alt="Collect Earth Online" title="Collect Earth Online" height="62" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://sepal.io/">
    <img src="assets/logos/sepal.png" alt="SEPAL - Open Foris" title="SEPAL - Open Foris" height="62" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview">
    <img src="assets/logos/arcgis_pro.png" alt="ArcGIS Pro" title="ArcGIS Pro" height="62" />
  </a>
</p>

---

Repositorio técnico con los códigos, parámetros y flujos geoespaciales utilizados por **GIMBUT (INAB, CONAP, MARN y UVG)** para mapear la dinámica de la cobertura forestal nacional en los períodos **2020–2022** y **2022–2024**, a partir de la línea base 2020 y segmentado por las cinco regiones REDD+ de Guatemala.

## Flujo Metodológico

| Componente | Plataforma | Descripción |
| :--- | :--- | :--- |
| **Pérdidas forestales** | SEPAL (GEE) | Detección continua con **CCDC** sobre series Landsat 8 y 9 (2016–2024) y umbrales por región REDD+. |
| **Ganancias forestales** | Google Earth Engine | Compuestos de época seca Landsat 8/9 y **Sentinel-1** (4 evidencias ópticas/SAR calibradas con prueba de Wilcoxon). |
| **Depuración y UMM** | ArcGIS Pro / ArcPy | Exclusión de usos no forestales (MAGA) y bosque seco; filtrado espacial a **UMM ≥ 0.5 ha** (5 píxeles). |
| **Validación y áreas** | AREA2 · Collect Earth Online | Muestreo aleatorio estratificado (Olofsson et al., 2014) interpretado con Sentinel-2 y Planet. |

![Figura 3. Ruta metodológica de dinámica de cobertura forestal](assets/img/ruta_metodologica.png)

## Scripts y Anexos

| Anexo | Archivo | Propósito | Enlaces externos |
| :--- | :--- | :--- | :--- |
| **Anexo 1** | [`Anexo_1_Estimacion_Muestras.js`](anexos/Anexo_1_Estimacion_Muestras.js) | Diseño muestral estratificado y tamaño de muestra (AREA2). | [Script GEE](https://code.earthengine.google.com/9b8c956c7271147e20ae3a46fc848d44) |
| **Anexo 2** | [`Anexo_2_Limpieza_Perdidas.py`](anexos/Anexo_2_Limpieza_Perdidas.py) | Mosaico nacional, reclasificación y limpieza de pérdidas (≥ 0.5 ha). | — |
| **Anexo 3.1** | [`Anexo_3_1_Limpieza_Ganancias.py`](anexos/Anexo_3_1_Limpieza_Ganancias.py) | Exclusión de usos no forestales (MAGA) y bosque seco en ganancias. | — |
| **Anexo 3.2** | [`Anexo_3_2_Limpieza_Pixeles_05ha.py`](anexos/Anexo_3_2_Limpieza_Pixeles_05ha.py) | Eliminación de parches de ganancia menores a 0.5 ha (`RegionGroup` / `Nibble`). | — |
| **Anexo 4** | [`Anexo_4_Parametros_Deteccion_Ganancias.js`](anexos/Anexo_4_Parametros_Deteccion_Ganancias.js) | Parámetros temporales y umbrales regionales de detección de ganancias. | [Extracción GEE](https://code.earthengine.google.com/07ac4bb3a41dd97fbe9c9c0afc7c9861) · [Colab v8](https://colab.research.google.com/drive/1yUQGXr6IiBvs2vLAhMI0NrbA5kCJd6ir?usp=sharing) · [GEE 2020–2022](https://code.earthengine.google.com/623f59573e3bcd275d61f6de18a5560d) |
| **Anexo 5** | [`Bosque_no_mapeado_2020_Embeddings.js`](anexos/Bosque_no_mapeado_2020_Embeddings.js) | Mapeo de bosque en 2020 dentro de la mascara no bosque. | — |
| **Complemento** | [`Centroides_Muestras_Area2.py`](anexos/Centroides_Muestras_Area2.py) | Generación de centroides y buffers de 5 m para evitar efecto borde. | — |

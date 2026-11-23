/*
 * Anexo 4: Parámetros del script de detección de ganancias en Google Earth Engine
 *
 * Se presentan las secciones de configuración temporal y de parámetros regionales del script
 * Persistencia_Ganancia_Forestal_V11_2022_2024, desarrollado en Google Earth Engine para la
 * detección de ganancias forestales.
 *
 * Los valores de configuración temporal mostrados corresponden a la ejecución del periodo
 * 2022-2024. Para el periodo 2020-2022 se utilizó el mismo script con ANIO_INICIO = 2017 y
 * ANIO_FIN = 2022. Los scripts y el cuaderno de calibración están disponibles en los siguientes enlaces:
 *
 * - Extracción de índices para la calibración de umbrales (Google Earth Engine):
 *   https://code.earthengine.google.com/07ac4bb3a41dd97fbe9c9c0afc7c9861
 * - Calibración de parámetros de ganancias, versión 8 (Google Colab):
 *   https://colab.research.google.com/drive/1yUQGXr6IiBvs2vLAhMI0NrbA5kCJd6ir?usp=sharing
 * - Detección de ganancias, configuración del periodo 2020-2022 (Google Earth Engine):
 *   https://code.earthengine.google.com/623f59573e3bcd275d61f6de18a5560d
 */

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  2.  CONFIGURACIÓN TEMPORAL                                             ║
// ╚═══════════════════════════════════════════════════════════════════════╝
var ANIO_INICIO = 2019;
var ANIO_FIN    = 2024;
var T1_INI = ANIO_INICIO;      // referencia
var T1_FIN = ANIO_INICIO + 1;
var T2_INI = ANIO_FIN - 1;     // detección
var T2_FIN = ANIO_FIN;

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  3.  PARÁMETROS REGIONALES — calibrados (notebook v8, ~12,000 obs)      ║
// ╚═══════════════════════════════════════════════════════════════════════╝
var parametrosPorRegion = {
  CENTRO_ORIENTE: {
    indiceOptico: 'EVI', sarVariable: 'VH',
    aniosPersistencia: 3,        // manual
    umbralOptico: 0.2862,        // n=486
    deltaOptico: -0.0048,
    deltaSAR: -0.9766,
    nivelSAR: -19.1039,          // n=486
    minHa: 0.5, conectividad: 300000,
    scoreMin: 100                // manual
  },
  COSTA_SUR: {
    indiceOptico: 'NDFI', sarVariable: 'VH',
    aniosPersistencia: 3,        // manual
    umbralOptico: 0.4832,        // n=265
    deltaOptico: -0.02,
    deltaEVI: -0.0203,           // secundario
    deltaSAR: -0.1905,
    nivelSAR: -17.2063,          // n=265
    minHa: 0.5, conectividad: 300000,
    scoreMin: 100                // manual
  },
  OCCIDENTE: {
    indiceOptico: 'EVI', sarVariable: 'VH',
    aniosPersistencia: 3,        // manual
    umbralOptico: 0.3098,        // n=2323
    deltaOptico: -0.0171,
    deltaSAR: -0.9089,
    nivelSAR: -20.0656,          // n=2323
    minHa: 0.5, conectividad: 300000,
    scoreMin: 100                // manual
  },
  PETEN: {
    indiceOptico: 'NDFI', sarVariable: 'VH',
    aniosPersistencia: 3,        // manual
    umbralOptico: 0.5653,        // n=588
    deltaOptico: -0.0732,
    deltaEVI: -0.0382,           // secundario
    deltaSAR: -0.2389,
    nivelSAR: -16.091,           // n=588
    minHa: 0.5, conectividad: 300000,
    scoreMin: 100                // manual
  },
  SARSTUN_MOTAGUA: {
    indiceOptico: 'NDFI', sarVariable: 'RVI',
    aniosPersistencia: 3,        // manual
    umbralOptico: 0.7617,        // n=2837
    deltaOptico: 0.0318,
    deltaEVI: -0.0467,           // secundario
    deltaSAR: -0.1211,
    nivelSAR: 0.6847,            // n=2837
    minHa: 0.5, conectividad: 300000,
    scoreMin: 100                // manual
  },
};

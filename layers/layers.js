var wms_layers = [];

var lyr_Voyager = new ol.layer.Tile({
            'title': 'Labels',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}@2x.png'
            })
        });

var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'BaseMap',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a> &nbsp&nbsp ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
        

    
var format_Bambini = new ol.format.GeoJSON();
var features_Bambini = format_Bambini.readFeatures(json_Bambini, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bambini = new ol.source.Vector({
    attributions: '<a class="legend"><b>Children</b><br />\
        <img src="styles/legend/Bambini_0.png" /> 1<br />\
        <img src="styles/legend/Bambini_1.png" /> 2<br />\
        <img src="styles/legend/Bambini_2.png" /> 3<br />\
        <img src="styles/legend/Bambini_3.png" /> 4<br />\
        <img src="styles/legend/Bambini_4.png" /> 5<br />\
        <img src="styles/legend/Bambini_5.png" /> 6<br />\
        <img src="styles/legend/Bambini_6.png" /> 7<br />\
        <img src="styles/legend/Bambini_7.png" /> 8<br />\
        <img src="styles/legend/Bambini_8.png" /> 9<br />\
        <img src="styles/legend/Bambini_9.png" /> 10<br /></a>'
        });
var lyr_Bambini = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_Bambini, 
    style: style_Bambini,
    permalink: "Bambini",
    popuplayertitle: 'Bambini',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    title: '<div id="layertitle">Children<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Bambini_0.png" /> 1<br />\
        <img src="styles/legend/Bambini_1.png" /> 2<br />\
        <img src="styles/legend/Bambini_2.png" /> 3<br />\
        <img src="styles/legend/Bambini_3.png" /> 4<br />\
        <img src="styles/legend/Bambini_4.png" /> 5<br />\
        <img src="styles/legend/Bambini_5.png" /> 6<br />\
        <img src="styles/legend/Bambini_6.png" /> 7<br />\
        <img src="styles/legend/Bambini_7.png" /> 8<br />\
        <img src="styles/legend/Bambini_8.png" /> 9<br />\
        <img src="styles/legend/Bambini_9.png" /> 10<br /></a>'
        });
var featureCounter_Bambini = 1;
jsonSource_Bambini.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Bambini++);
    feature.set("layerObject", lyr_Bambini);
});        
jsonSource_Bambini.addFeatures(features_Bambini);

var format_Anziani = new ol.format.GeoJSON();
var features_Anziani = format_Anziani.readFeatures(json_Anziani, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anziani = new ol.source.Vector({
    attributions: '<a class="legend"><b>Elderly</b><br />\
        <img src="styles/legend/Anziani_0.png" /> 1<br />\
        <img src="styles/legend/Anziani_1.png" /> 2<br />\
        <img src="styles/legend/Anziani_2.png" /> 3<br />\
        <img src="styles/legend/Anziani_3.png" /> 4<br />\
        <img src="styles/legend/Anziani_4.png" /> 5<br />\
        <img src="styles/legend/Anziani_5.png" /> 6<br />\
        <img src="styles/legend/Anziani_6.png" /> 7<br />\
        <img src="styles/legend/Anziani_7.png" /> 8<br />\
        <img src="styles/legend/Anziani_8.png" /> 9<br />\
        <img src="styles/legend/Anziani_9.png" /> 10<br /></a>'
        });
var lyr_Anziani = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_Anziani, 
    style: style_Anziani,
    permalink: "Anziani",
    popuplayertitle: 'Anziani',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    title: '<div id="layertitle">Elderly<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Anziani_0.png" /> 1<br />\
        <img src="styles/legend/Anziani_1.png" /> 2<br />\
        <img src="styles/legend/Anziani_2.png" /> 3<br />\
        <img src="styles/legend/Anziani_3.png" /> 4<br />\
        <img src="styles/legend/Anziani_4.png" /> 5<br />\
        <img src="styles/legend/Anziani_5.png" /> 6<br />\
        <img src="styles/legend/Anziani_6.png" /> 7<br />\
        <img src="styles/legend/Anziani_7.png" /> 8<br />\
        <img src="styles/legend/Anziani_8.png" /> 9<br />\
        <img src="styles/legend/Anziani_9.png" /> 10<br /></a>'
        });
var featureCounter_Anziani = 1;
jsonSource_Anziani.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Anziani++);
    feature.set("layerObject", lyr_Anziani);
});        
jsonSource_Anziani.addFeatures(features_Anziani);

var format_Stranieri = new ol.format.GeoJSON();
var features_Stranieri = format_Stranieri.readFeatures(json_Stranieri, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stranieri = new ol.source.Vector({
    attributions: '<a class="legend"><b>Foreign Residents</b><br />\
        <img src="styles/legend/Stranieri_0.png" /> 1<br />\
        <img src="styles/legend/Stranieri_1.png" /> 2<br />\
        <img src="styles/legend/Stranieri_2.png" /> 3<br />\
        <img src="styles/legend/Stranieri_3.png" /> 4<br />\
        <img src="styles/legend/Stranieri_4.png" /> 5<br />\
        <img src="styles/legend/Stranieri_5.png" /> 6<br />\
        <img src="styles/legend/Stranieri_6.png" /> 7<br />\
        <img src="styles/legend/Stranieri_7.png" /> 8<br />\
        <img src="styles/legend/Stranieri_8.png" /> 9<br />\
        <img src="styles/legend/Stranieri_9.png" /> 10<br /></a>'
        });
var lyr_Stranieri = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_Stranieri, 
    style: style_Stranieri,
    permalink: "Stranieri",
    popuplayertitle: 'Stranieri',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    title: '<div id="layertitle">Foreign Residents<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Stranieri_0.png" /> 1<br />\
        <img src="styles/legend/Stranieri_1.png" /> 2<br />\
        <img src="styles/legend/Stranieri_2.png" /> 3<br />\
        <img src="styles/legend/Stranieri_3.png" /> 4<br />\
        <img src="styles/legend/Stranieri_4.png" /> 5<br />\
        <img src="styles/legend/Stranieri_5.png" /> 6<br />\
        <img src="styles/legend/Stranieri_6.png" /> 7<br />\
        <img src="styles/legend/Stranieri_7.png" /> 8<br />\
        <img src="styles/legend/Stranieri_8.png" /> 9<br />\
        <img src="styles/legend/Stranieri_9.png" /> 10<br /></a>'
        });
var featureCounter_Stranieri = 1;
jsonSource_Stranieri.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Stranieri++);
    feature.set("layerObject", lyr_Stranieri);
});        
jsonSource_Stranieri.addFeatures(features_Stranieri);

var format_PersoneSole = new ol.format.GeoJSON();
var features_PersoneSole = format_PersoneSole.readFeatures(json_PersoneSole, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersoneSole = new ol.source.Vector({
    attributions: '<a class="legend"><b>People Living Alone</b><br />\
        <img src="styles/legend/PersoneSole_0.png" /> 1<br />\
        <img src="styles/legend/PersoneSole_1.png" /> 2<br />\
        <img src="styles/legend/PersoneSole_2.png" /> 3<br />\
        <img src="styles/legend/PersoneSole_3.png" /> 4<br />\
        <img src="styles/legend/PersoneSole_4.png" /> 5<br />\
        <img src="styles/legend/PersoneSole_5.png" /> 6<br />\
        <img src="styles/legend/PersoneSole_6.png" /> 7<br />\
        <img src="styles/legend/PersoneSole_7.png" /> 8<br />\
        <img src="styles/legend/PersoneSole_8.png" /> 9<br />\
        <img src="styles/legend/PersoneSole_9.png" /> 10<br /></a>'
        });
var lyr_PersoneSole = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_PersoneSole, 
    style: style_PersoneSole,
    permalink: "PersoneSole",
    popuplayertitle: 'Persone Sole',
    creationdate: '2026-04-07 11:10:34',
    interactive: false,
    title: '<div id="layertitle">People Living Alone<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/PersoneSole_0.png" /> 1<br />\
        <img src="styles/legend/PersoneSole_1.png" /> 2<br />\
        <img src="styles/legend/PersoneSole_2.png" /> 3<br />\
        <img src="styles/legend/PersoneSole_3.png" /> 4<br />\
        <img src="styles/legend/PersoneSole_4.png" /> 5<br />\
        <img src="styles/legend/PersoneSole_5.png" /> 6<br />\
        <img src="styles/legend/PersoneSole_6.png" /> 7<br />\
        <img src="styles/legend/PersoneSole_7.png" /> 8<br />\
        <img src="styles/legend/PersoneSole_8.png" /> 9<br />\
        <img src="styles/legend/PersoneSole_9.png" /> 10<br /></a>'
        });
var featureCounter_PersoneSole = 1;
jsonSource_PersoneSole.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PersoneSole++);
    feature.set("layerObject", lyr_PersoneSole);
});        
jsonSource_PersoneSole.addFeatures(features_PersoneSole);

var format_IndicediDeprivazione = new ol.format.GeoJSON();
var features_IndicediDeprivazione = format_IndicediDeprivazione.readFeatures(json_IndicediDeprivazione, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicediDeprivazione = new ol.source.Vector({
    attributions: '<a class="legend"><b>Socio-economic Deprivation Index</b><br />\
        <img src="styles/legend/IndicediDeprivazione_0.png" /> 1<br />\
        <img src="styles/legend/IndicediDeprivazione_1.png" /> 2<br />\
        <img src="styles/legend/IndicediDeprivazione_2.png" /> 3<br />\
        <img src="styles/legend/IndicediDeprivazione_3.png" /> 4<br />\
        <img src="styles/legend/IndicediDeprivazione_4.png" /> 5<br />\
        <img src="styles/legend/IndicediDeprivazione_5.png" /> 6<br />\
        <img src="styles/legend/IndicediDeprivazione_6.png" /> 7<br />\
        <img src="styles/legend/IndicediDeprivazione_7.png" /> 8<br />\
        <img src="styles/legend/IndicediDeprivazione_8.png" /> 9<br />\
        <img src="styles/legend/IndicediDeprivazione_9.png" /> 10<br /></a>'
        });
var lyr_IndicediDeprivazione = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_IndicediDeprivazione, 
    style: style_IndicediDeprivazione,
    permalink: "IndicediDeprivazione",
    popuplayertitle: 'Indice di Deprivazione',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    title: '<div id="layertitle">Socio-economic Deprivation Index<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/IndicediDeprivazione_0.png" /> 1<br />\
        <img src="styles/legend/IndicediDeprivazione_1.png" /> 2<br />\
        <img src="styles/legend/IndicediDeprivazione_2.png" /> 3<br />\
        <img src="styles/legend/IndicediDeprivazione_3.png" /> 4<br />\
        <img src="styles/legend/IndicediDeprivazione_4.png" /> 5<br />\
        <img src="styles/legend/IndicediDeprivazione_5.png" /> 6<br />\
        <img src="styles/legend/IndicediDeprivazione_6.png" /> 7<br />\
        <img src="styles/legend/IndicediDeprivazione_7.png" /> 8<br />\
        <img src="styles/legend/IndicediDeprivazione_8.png" /> 9<br />\
        <img src="styles/legend/IndicediDeprivazione_9.png" /> 10<br /></a>'
        });
var featureCounter_IndicediDeprivazione = 1;
jsonSource_IndicediDeprivazione.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_IndicediDeprivazione++);
    feature.set("layerObject", lyr_IndicediDeprivazione);
});        
jsonSource_IndicediDeprivazione.addFeatures(features_IndicediDeprivazione);

var format_FiltroPopolazione = new ol.format.GeoJSON();
var features_FiltroPopolazione = format_FiltroPopolazione.readFeatures(json_FiltroPopolazione, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiltroPopolazione = new ol.source.Vector({
    attributions: '<a class="legend"><b>Filter by Population</a>'
        });
var lyr_FiltroPopolazione = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_FiltroPopolazione, 
    style: style_FiltroPopolazione,
    permalink: "FiltroPopolazione",
    popuplayertitle: 'Filtro Popolazione',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    noOpacity: true,
    title: '<div id="layertitle">Filter by Population<br />'
        });
var featureCounter_FiltroPopolazione = 1;
jsonSource_FiltroPopolazione.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_FiltroPopolazione++);
    feature.set("layerObject", lyr_FiltroPopolazione);
});        
jsonSource_FiltroPopolazione.addFeatures(features_FiltroPopolazione);

var format_VulnerabilitClimatica = new ol.format.GeoJSON();
var features_VulnerabilitClimatica = format_VulnerabilitClimatica.readFeatures(json_VulnerabilitClimatica, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VulnerabilitClimatica = new ol.source.Vector({
    attributions: '<a class="legend"><b>Climate Vulnerability Index</b><br />\
        <img src="styles/legend/VulnerabilitClimatica_0.png" /> 1<br />\
        <img src="styles/legend/VulnerabilitClimatica_1.png" /> 2<br />\
        <img src="styles/legend/VulnerabilitClimatica_2.png" /> 3<br />\
        <img src="styles/legend/VulnerabilitClimatica_3.png" /> 4<br />\
        <img src="styles/legend/VulnerabilitClimatica_4.png" /> 5<br />\
        <img src="styles/legend/VulnerabilitClimatica_5.png" /> 6<br />\
        <img src="styles/legend/VulnerabilitClimatica_6.png" /> 7<br />\
        <img src="styles/legend/VulnerabilitClimatica_7.png" /> 8<br />\
        <img src="styles/legend/VulnerabilitClimatica_8.png" /> 9<br />\
        <img src="styles/legend/VulnerabilitClimatica_9.png" /> 10<br />\
        <img src="styles/legend/VulnerabilitClimatica_10.png" /> 11<br /></a>'
        });
var lyr_VulnerabilitClimatica = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_VulnerabilitClimatica, 
    style: style_VulnerabilitClimatica,
    permalink: "VulnerabilitClimatica",
    popuplayertitle: 'Vulnerabilità Climatica',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    title: '<div id="layertitle">Climate Vulnerability Index<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/VulnerabilitClimatica_0.png" /> 1<br />\
        <img src="styles/legend/VulnerabilitClimatica_1.png" /> 2<br />\
        <img src="styles/legend/VulnerabilitClimatica_2.png" /> 3<br />\
        <img src="styles/legend/VulnerabilitClimatica_3.png" /> 4<br />\
        <img src="styles/legend/VulnerabilitClimatica_4.png" /> 5<br />\
        <img src="styles/legend/VulnerabilitClimatica_5.png" /> 6<br />\
        <img src="styles/legend/VulnerabilitClimatica_6.png" /> 7<br />\
        <img src="styles/legend/VulnerabilitClimatica_7.png" /> 8<br />\
        <img src="styles/legend/VulnerabilitClimatica_8.png" /> 9<br />\
        <img src="styles/legend/VulnerabilitClimatica_9.png" /> 10<br />\
        <img src="styles/legend/VulnerabilitClimatica_10.png" /> 11<br /></a>'
        });
var featureCounter_VulnerabilitClimatica = 1;
jsonSource_VulnerabilitClimatica.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_VulnerabilitClimatica++);
    feature.set("layerObject", lyr_VulnerabilitClimatica);
});        
jsonSource_VulnerabilitClimatica.addFeatures(features_VulnerabilitClimatica);

var lyr_TemperaturaSperficiale = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/TemperaturaSperficiale.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1022659.213329, 5421407.507361, 1428981.364619, 5644234.189245],
    attributions: '<a class="legend"><b>Land Surface Temperature</b><br />\
        <img src="styles/legend/TemperaturaSperficiale_0.png" /> <= 32,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_1.png" /> 32,5 - 35,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_2.png" /> 35- 37,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_3.png" /> 37,5 - 40,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_4.png" /> 40- 42,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_5.png" /> 42,5 - 45,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_6.png" /> 45- 47,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_7.png" /> 47,5 - 50,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_8.png" /> 50- 52,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_9.png" /> > 52,5<br /></a>'
        }),
    opacity: 0.7,
    permalink: "TemperaturaSperficiale",
    
     
    title: '<div id="layertitle">Land Surface Temperature<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/TemperaturaSperficiale_0.png" /> <= 32,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_1.png" /> 32,5 - 35,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_2.png" /> 35- 37,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_3.png" /> 37,5 - 40,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_4.png" /> 40- 42,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_5.png" /> 42,5 - 45,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_6.png" /> 45- 47,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_7.png" /> 47,5 - 50,0<br />\
        <img src="styles/legend/TemperaturaSperficiale_8.png" /> 50- 52,5<br />\
        <img src="styles/legend/TemperaturaSperficiale_9.png" /> > 52,5<br /></a>'
        });
    
var format_PresidiSocioassistenzialiAnziani = new ol.format.GeoJSON();
var features_PresidiSocioassistenzialiAnziani = format_PresidiSocioassistenzialiAnziani.readFeatures(json_PresidiSocioassistenzialiAnziani, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PresidiSocioassistenzialiAnziani = new ol.source.Vector({ 
    attributions: '<a class="legend"><b>Elderly Care Facilities</b><br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_0.png" /> Serviced Housing<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_1.png" /> Nursing Home<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_2.png" /> Family Home<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_3.png" /> Protected Care Home<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_4.png" /> Day Care Center<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_5.png" /> Residential Community<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_6.png" /> Care Facility (CRA)<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_7.png" /> Shared Apartment<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_8.png" /> Protected Residence<br /></a>'
        });
var lyr_PresidiSocioassistenzialiAnziani = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_PresidiSocioassistenzialiAnziani, 
    maxResolution: 42.00669922839295,
    style: style_PresidiSocioassistenzialiAnziani,
    permalink: "PresidiSocioassistenzialiAnziani",
    popuplayertitle: 'Presidi Socio-assistenziali Anziani',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    title: '<div id="layertitle">Elderly Care Facilities<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_0.png" /> Serviced Housing<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_1.png" /> Nursing Home<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_2.png" /> Family Home<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_3.png" /> Protected Care Home<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_4.png" /> Day Care Center<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_5.png" /> Residential Community<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_6.png" /> Care Facility (CRA)<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_7.png" /> Shared Apartment<br />\
        <img src="styles/legend/PresidiSocioassistenzialiAnziani_8.png" /> Protected Residence<br /></a>'
        });
var featureCounter_PresidiSocioassistenzialiAnziani = 1;
jsonSource_PresidiSocioassistenzialiAnziani.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_PresidiSocioassistenzialiAnziani++);
    feature.set("layerObject", lyr_PresidiSocioassistenzialiAnziani);
});        
jsonSource_PresidiSocioassistenzialiAnziani.addFeatures(features_PresidiSocioassistenzialiAnziani);

var format_EdificiPubblici = new ol.format.GeoJSON();
var features_EdificiPubblici = format_EdificiPubblici.readFeatures(json_EdificiPubblici, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdificiPubblici = new ol.source.Vector({ 
    attributions: '<a class="legend"><b>Public Buildings</b><br />\
        <img src="styles/legend/EdificiPubblici_0.png" /> Schools<br />\
        <img src="styles/legend/EdificiPubblici_1.png" /> Railway Stations<br />\
        <img src="styles/legend/EdificiPubblici_2.png" /> University Buildings<br />\
        <img src="styles/legend/EdificiPubblici_3.png" /> Health Services<br /></a>'
        });
var lyr_EdificiPubblici = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_EdificiPubblici,
    maxResolution: 42.00669922839295,
    style: style_EdificiPubblici,
    permalink: "EdificiPubblici",
    popuplayertitle: 'Edifici Pubblici',
    creationdate: '2026-03-31 01:24:53',
    interactive: false,
    title: '<div id="layertitle">Public Buildings<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/EdificiPubblici_0.png" /> Schools<br />\
        <img src="styles/legend/EdificiPubblici_1.png" /> Railway Stations<br />\
        <img src="styles/legend/EdificiPubblici_2.png" /> University Buildings<br />\
        <img src="styles/legend/EdificiPubblici_3.png" /> Health Services<br /></a>'
        });
var featureCounter_EdificiPubblici = 1;
jsonSource_EdificiPubblici.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_EdificiPubblici++);
    feature.set("layerObject", lyr_EdificiPubblici);
});        
jsonSource_EdificiPubblici.addFeatures(features_EdificiPubblici);

var format_CasediComunit = new ol.format.GeoJSON();
var features_CasediComunit = format_CasediComunit.readFeatures(json_CasediComunit, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasediComunit = new ol.source.Vector({ 
    attributions: '<a class="legend"><b>Community Health Centers</b><br />\
        <img src="styles/legend/CasediComunit_0.png" /> Hub<br />\
        <img src="styles/legend/CasediComunit_1.png" /> Spoke<br /></a>'
        });
var lyr_CasediComunit = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_CasediComunit, 
    maxResolution: 42.00669922839295,
    style:  style_CasediComunit,
    permalink: "CasediComunit",
    popuplayertitle: 'Case di Comunità',
    creationdate: '2026-03-31 01:24:53',
    interactive: false,
    title: '<div id="layertitle">Community Health Centers<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/CasediComunit_0.png" /> Hub<br />\
        <img src="styles/legend/CasediComunit_1.png" /> Spoke<br /></a>'
        });
var featureCounter_CasediComunit = 1;
jsonSource_CasediComunit.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CasediComunit++);
    feature.set("layerObject", lyr_CasediComunit);
});        
jsonSource_CasediComunit.addFeatures(features_CasediComunit);

var format_OspedaliCensiti = new ol.format.GeoJSON();
var features_OspedaliCensiti = format_OspedaliCensiti.readFeatures(json_OspedaliCensiti, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OspedaliCensiti = new ol.source.Vector({
    attributions: '<a class="legend"><b>Hospitals</b><br />\
        <img src="styles/legend/OspedaliCensiti_0.png" /> Public Facilities<br />\
        <img src="styles/legend/OspedaliCensiti_1.png" /> Private Facilities<br /></a>'
        });
var lyr_OspedaliCensiti = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_OspedaliCensiti, 
    maxResolution: 42.00669922839295,
    style:  style_OspedaliCensiti,
    permalink: "OspedaliCensiti",
    popuplayertitle: 'Hospitals',
    creationdate: '2026-03-30 23:11:30',
    interactive: false,
    title: '<div id="layertitle">Hospitals<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/OspedaliCensiti_0.png" /> Public Facilities<br />\
        <img src="styles/legend/OspedaliCensiti_1.png" /> Private Facilities<br /></a>'
        });
var featureCounter_OspedaliCensiti = 1;
jsonSource_OspedaliCensiti.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_OspedaliCensiti++);
    feature.set("layerObject", lyr_OspedaliCensiti);
});        
jsonSource_OspedaliCensiti.addFeatures(features_OspedaliCensiti);

var format_SezionidiCensimento = new ol.format.GeoJSON();
var features_SezionidiCensimento = format_SezionidiCensimento.readFeatures(json_SezionidiCensimento, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SezionidiCensimento = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/SezionidiCensimento.png" /> <b>Census Tracts</b>'
    });
var lyr_SezionidiCensimento = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_SezionidiCensimento,
maxResolution:28.00446615226196,
 
    style: style_SezionidiCensimento,
    permalink: "SezionidiCensimento",
    popuplayertitle: 'Sezioni di Censimento',
    creationdate: '2026-03-30 23:11:31',
    interactive: false,
    title: '<img src="styles/legend/SezionidiCensimento.png" /> Census Tracts'
    });
var featureCounter_SezionidiCensimento = 1;
jsonSource_SezionidiCensimento.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_SezionidiCensimento++);
    feature.set("layerObject", lyr_SezionidiCensimento);
});        
jsonSource_SezionidiCensimento.addFeatures(features_SezionidiCensimento);


var format_ComunediBologna = new ol.format.GeoJSON();
var features_ComunediBologna = format_ComunediBologna.readFeatures(json_ComunediBologna, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunediBologna = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/ComunediBologna.png" /> <b>Municipality of Bologna</b>'
    });
var lyr_ComunediBologna = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_ComunediBologna, 
    style: style_ComunediBologna,
    permalink: "ComunediBologna",
    popuplayertitle: 'Comune di Bologna',
    creationdate: '2026-03-30 23:11:31',
    interactive: false,
    title: '<img src="styles/legend/ComunediBologna.png" /> Municipality of Bologna'
    });
var featureCounter_ComunediBologna = 1;
jsonSource_ComunediBologna.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_ComunediBologna++);
    feature.set("layerObject", lyr_ComunediBologna);
});        
jsonSource_ComunediBologna.addFeatures(features_ComunediBologna);




var group_RegioneEmiliaRomagna = new ol.layer.Group({
                                layers: [lyr_SezionidiCensimento,lyr_Voyager,lyr_ComunediBologna,],
                                openInLayerSwitcher: true,
                                title: 'Boundaries and Labels',
                                noOpacity: true});
var group_InfrastrutureSocioSanitarie = new ol.layer.Group({
                                layers: [lyr_PresidiSocioassistenzialiAnziani,lyr_EdificiPubblici,lyr_CasediComunit,lyr_OspedaliCensiti,],
                                openInLayerSwitcher: true,
                                title: 'Health and Social Care Infrastructures',
                                noOpacity: true});
var group_IndicatoriClimatici = new ol.layer.Group({
                                layers: [lyr_VulnerabilitClimatica,lyr_TemperaturaSperficiale,],
                                openInLayerSwitcher: true,
                                title: 'Climatic Indicators',
                                noOpacity: true});
var group_IndicatoriSocioDemografici = new ol.layer.Group({
                                layers: [lyr_PersoneSole,lyr_Stranieri,lyr_Bambini,lyr_Anziani,lyr_IndicediDeprivazione, lyr_FiltroPopolazione,],
                                openInLayerSwitcher: true,
                                title: 'Socio-Demographic Indicators',
                                noOpacity: true});



lyr_Voyager.setVisible(false);
lyr_OSMStandard.setVisible(true);lyr_PersoneSole.setVisible(false);
lyr_Bambini.setVisible(false);lyr_Anziani.setVisible(false);lyr_Stranieri.setVisible(false);lyr_IndicediDeprivazione.setVisible(false);lyr_FiltroPopolazione.setVisible(false);lyr_VulnerabilitClimatica.setVisible(false);
lyr_TemperaturaSperficiale.setVisible(false);lyr_PresidiSocioassistenzialiAnziani.setVisible(false);lyr_EdificiPubblici.setVisible(false);lyr_CasediComunit.setVisible(false);lyr_OspedaliCensiti.setVisible(false);
lyr_SezionidiCensimento.setVisible(false);lyr_ComunediBologna.setVisible(false);

var layersList = [lyr_OSMStandard,group_IndicatoriClimatici,group_IndicatoriSocioDemografici,
    group_InfrastrutureSocioSanitarie,group_RegioneEmiliaRomagna];

lyr_VulnerabilitClimatica.set('fieldAliases', {'fid': 'fid', 'index_cont': 'index_cont', });
lyr_PersoneSole.set('fieldAliases', {'fid': 'fid', 'dp': 'dp', });
lyr_Bambini.set('fieldAliases', {'fid': 'fid', 'ch': 'ch', });
lyr_Anziani.set('fieldAliases', {'fid': 'fid', 'el': 'el', });
lyr_Stranieri.set('fieldAliases', {'fid': 'fid', 'fr': 'fr', });
lyr_IndicediDeprivazione.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_FiltroPopolazione.set('fieldAliases', {'fid': 'fid', 'POP21_decile con null=0': 'POP21_decile con null=0', });
lyr_PresidiSocioassistenzialiAnziani.set('fieldAliases', {'fid': 'fid', 'denominazione': 'denominazione', 'tipo_struttura': 'tipo_struttura', });
lyr_EdificiPubblici.set('fieldAliases', {'fid2': 'fid2', 'fid': 'fid', 'layer': 'layer', });
lyr_CasediComunit.set('fieldAliases', {'fid': 'fid', 'Tipo Struttura': 'Tipo Struttura', 'denominazione_2': 'denominazione_2', });
lyr_OspedaliCensiti.set('fieldAliases', {'fid': 'fid', 'Denominazione': 'Denominazione', 'Macrotipologia': 'Macrotipologia', });
lyr_SezionidiCensimento.set('fieldAliases', {'fid': 'fid', });
lyr_ComunediBologna.set('fieldAliases', {'fid': 'fid', 'COMUNE': 'COMUNE', });

lyr_VulnerabilitClimatica.set('fieldImages', {'fid': 'TextEdit', 'index_cont': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PersoneSole.set('fieldImages', {'fid': 'TextEdit', 'dp': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Bambini.set('fieldImages', {'fid': 'TextEdit', 'ch': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Anziani.set('fieldImages', {'fid': 'TextEdit', 'el': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Stranieri.set('fieldImages', {'fid': 'TextEdit', 'fr': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_IndicediDeprivazione.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FiltroPopolazione.set('fieldImages', {'fid': 'TextEdit', 'POP21_decile con null=0': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_PresidiSocioassistenzialiAnziani.set('fieldImages', {'fid': 'TextEdit', 'denominazione': 'TextEdit', 'tipo_struttura': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_EdificiPubblici.set('fieldImages', {'fid2': 'TextEdit', 'fid': 'TextEdit', 'layer': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CasediComunit.set('fieldImages', {'fid': 'TextEdit', 'Tipo Struttura': 'TextEdit', 'denominazione_2': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_OspedaliCensiti.set('fieldImages', {'fid': 'TextEdit', 'Denominazione': 'TextEdit', 'Macrotipologia': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SezionidiCensimento.set('fieldImages', {'fid': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_ComunediBologna.set('fieldImages', {'fid': '', 'COMUNE': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});

lyr_VulnerabilitClimatica.set('fieldLabels', {'fid': 'no label', 'index_cont': 'no label', });
lyr_PersoneSole.set('fieldLabels', {'fid': 'no label', 'dp': 'no label', });
lyr_Bambini.set('fieldLabels', {'fid': 'no label', 'ch': 'no label', });
lyr_Anziani.set('fieldLabels', {'fid': 'no label', 'el': 'no label', });
lyr_Stranieri.set('fieldLabels', {'fid': 'inline label - always visible', 'fr': 'no label', });
lyr_IndicediDeprivazione.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_FiltroPopolazione.set('fieldLabels', {'fid': 'no label', 'POP21_decile con null=0': 'no label', });
lyr_PresidiSocioassistenzialiAnziani.set('fieldLabels', {'fid': 'no label', 'denominazione': 'no label', 'tipo_struttura': 'no label', });
lyr_EdificiPubblici.set('fieldLabels', {'fid2': 'no label', 'fid': 'no label', 'layer': 'no label', });
lyr_CasediComunit.set('fieldLabels', {'fid': 'no label', 'Tipo Struttura': 'no label', 'denominazione_2': 'no label', });
lyr_OspedaliCensiti.set('fieldLabels', {'fid': 'no label', 'Denominazione': 'no label', 'Macrotipologia': 'no label', });
lyr_SezionidiCensimento.set('fieldLabels', {'fid': 'no label', });
lyr_ComunediBologna.set('fieldLabels', {'fid': 'no label', 'COMUNE': 'header label - always visible', });

lyr_ComunediBologna.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);

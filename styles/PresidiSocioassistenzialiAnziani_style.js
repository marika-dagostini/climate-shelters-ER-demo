var clusterSize = 0;
function categories_PresidiSocioassistenzialiAnziani(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Alloggi Con Servizi':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(128,174,198,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Casa Di Riposo/Casa Albergo/Albergo per Anziani':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(169,52,63,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(227,26,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Casa Famiglia Anziani':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(52,90,116,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(31,120,180,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Casa Protetta Per Anziani':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(166,101,37,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Centro Diurno Per Anziani (Centro Diurno Assistenziale)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(70,49,107,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(124,91,181,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Comunita Alloggio Per Anziani':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(58,107,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CRA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(188,151,104,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(253,191,111,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gruppo appartamento per anziani':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(177,104,103,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(251,154,153,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residenza Protetta Per Anziani':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.8 + clusterSize, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(124,94,86,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(159,95,77,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PresidiSocioassistenzialiAnziani = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("tipo_struttura") || "";
        if (feature.get("denominazione") !== null && resolution > 0 && resolution < 2) {
            labelText = String(feature.get("denominazione"));
        }
        
var style = categories_PresidiSocioassistenzialiAnziani(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);

    return style;
};

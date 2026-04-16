var clusterSize = 0;
function categories_CasediComunit(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'HUB':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.4 + clusterSize, points: 6,
            displacement: [0, -1], stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.7)', 
                lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), 
                fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02413793103448276,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/accommodation_house.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPOKE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + clusterSize, points: 6,
            displacement: [0, -1], stroke: new ol.style.Stroke({color: 'rgba(51,160,44,0.7)', 
                lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), 
                fill: new ol.style.Fill({color: 'rgba(255,255,255,0.7)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.020689655172413793,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/accommodation_house_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CasediComunit = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("Tipo Struttura") || "";
        if (feature.get("denominazione_2") !== null && resolution > 0 && resolution < 2) {
            labelText = String(feature.get("denominazione_2"));
        }
        
var style = categories_CasediComunit(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);

    return style;
};

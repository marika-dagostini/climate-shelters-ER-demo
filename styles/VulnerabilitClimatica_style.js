var clusterSize = 0;

var style_VulnerabilitClimatica = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("id") || "";
        if ("" !== null) {
            labelText = String("");
        }
        if (value >= 0.000000 && value <= 0.878200) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(21,121,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.878200 && value <= 2.455953) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(79,159,74,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.455953 && value <= 3.895074) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(137,198,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.895074 && value <= 5.275392) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(184,225,129,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.275392 && value <= 6.508425) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(219,240,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6.508425 && value <= 7.645756) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(255,255,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 7.645756 && value <= 9.204318) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(254,223,170,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 9.204318 && value <= 11.591432) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(253,190,121,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 11.591432 && value <= 15.286240) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(242,144,83,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 15.286240 && value <= 23.155619) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(220,85,56,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23.155619 && value <= 31.490644) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,119,119,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(198,25,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

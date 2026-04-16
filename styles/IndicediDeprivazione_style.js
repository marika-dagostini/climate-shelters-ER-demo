var clusterSize = 0;

var style_IndicediDeprivazione = function(feature, resolution){
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
        if (value >= 1.000000 && value <= 1.900000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.900000 && value <= 2.800000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.023529411764705882)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.800000 && value <= 3.700000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.045098039215686274)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.700000 && value <= 4.600000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.06862745098039216)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4.600000 && value <= 5.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.09019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.500000 && value <= 6.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.14901960784313725)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6.400000 && value <= 7.300000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.2372549019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 7.300000 && value <= 8.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.3254901960784314)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 8.200000 && value <= 9.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.4117647058823529)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 9.100000 && value <= 10.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

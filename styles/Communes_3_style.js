var size = 0;
var placement = 'point';

var style_Communes_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("var value = '';");
    var labelFont = "14.3px \'Times New Roman\', sans-serif";
    var labelFill = "#484848";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("tex2") !== null && resolution > 2 && resolution < 28) {
        labelText = String(feature.get("tex2"));
    }
    
        function rules_Communes_3(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Communes_3rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,170,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.56}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Communes_3rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,170,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Communes_3(feature, value);
        ;

    return style;
};

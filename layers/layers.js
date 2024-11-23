var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_boundaryiitb_1 = new ol.format.GeoJSON();
var features_boundaryiitb_1 = format_boundaryiitb_1.readFeatures(json_boundaryiitb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundaryiitb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundaryiitb_1.addFeatures(features_boundaryiitb_1);
var lyr_boundaryiitb_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundaryiitb_1, 
                style: style_boundaryiitb_1,
                popuplayertitle: "boundary-iitb",
                interactive: false,
                title: '<img src="styles/legend/boundaryiitb_1.png" /> boundary-iitb'
            });
var format_water_supply_lines_2 = new ol.format.GeoJSON();
var features_water_supply_lines_2 = format_water_supply_lines_2.readFeatures(json_water_supply_lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_supply_lines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_supply_lines_2.addFeatures(features_water_supply_lines_2);
var lyr_water_supply_lines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_supply_lines_2, 
                style: style_water_supply_lines_2,
                popuplayertitle: "water_supply_lines",
                interactive: false,
                title: '<img src="styles/legend/water_supply_lines_2.png" /> water_supply_lines'
            });
var format_Pressure_readings_3 = new ol.format.GeoJSON();
var features_Pressure_readings_3 = format_Pressure_readings_3.readFeatures(json_Pressure_readings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pressure_readings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pressure_readings_3.addFeatures(features_Pressure_readings_3);
var lyr_Pressure_readings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pressure_readings_3, 
                style: style_Pressure_readings_3,
                popuplayertitle: "Pressure_readings",
                interactive: true,
                title: 'Pressure_readings'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_boundaryiitb_1.setVisible(true);lyr_water_supply_lines_2.setVisible(true);lyr_Pressure_readings_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_boundaryiitb_1,lyr_water_supply_lines_2,lyr_Pressure_readings_3];
lyr_boundaryiitb_1.set('fieldAliases', {'id': 'id', });
lyr_water_supply_lines_2.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'EntityHand': 'EntityHand', 'ogr_style': 'ogr_style', 'color': 'color', 'Length': 'Length', });
lyr_Pressure_readings_3.set('fieldAliases', {'_uid_': '_uid_', 'elevation_': 'elevation_', 'distance_t': 'distance_t', 'composite_': 'composite_', 'rank': 'rank', 'Prstart': 'Prstart', 'Prend': 'Prend', 'Prdiff': 'Prdiff', 'Pr_leak': 'Pr_leak', 'st_x': 'st_x', 'st_y': 'st_y', 'Leakage': 'Leakage', 'Leakeage_status': 'Leakeage_status', 'Leakage_status': 'Leakage_status', });
lyr_boundaryiitb_1.set('fieldImages', {'id': 'TextEdit', });
lyr_water_supply_lines_2.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'EntityHand': 'TextEdit', 'ogr_style': 'TextEdit', 'color': 'TextEdit', 'Length': 'TextEdit', });
lyr_Pressure_readings_3.set('fieldImages', {'_uid_': 'Range', 'elevation_': 'Range', 'distance_t': 'TextEdit', 'composite_': 'TextEdit', 'rank': 'CheckBox', 'Prstart': 'Range', 'Prend': 'Range', 'Prdiff': 'Range', 'Pr_leak': 'CheckBox', 'st_x': 'TextEdit', 'st_y': 'TextEdit', 'Leakage': 'TextEdit', 'Leakeage_status': 'TextEdit', 'Leakage_status': 'TextEdit', });
lyr_boundaryiitb_1.set('fieldLabels', {'id': 'no label', });
lyr_water_supply_lines_2.set('fieldLabels', {'Layer': 'hidden field', 'SubClasses': 'hidden field', 'EntityHand': 'hidden field', 'ogr_style': 'no label', 'color': 'no label', 'Length': 'no label', });
lyr_Pressure_readings_3.set('fieldLabels', {'_uid_': 'inline label - always visible', 'elevation_': 'hidden field', 'distance_t': 'hidden field', 'composite_': 'hidden field', 'rank': 'hidden field', 'Prstart': 'hidden field', 'Prend': 'hidden field', 'Prdiff': 'hidden field', 'Pr_leak': 'hidden field', 'st_x': 'hidden field', 'st_y': 'hidden field', 'Leakage': 'hidden field', 'Leakeage_status': 'hidden field', 'Leakage_status': 'inline label - always visible', });
lyr_Pressure_readings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
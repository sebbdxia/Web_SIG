var wms_layers = [];

var format_XXXXXXXXX_ZONE_URBA_DATAPPRO_0 = new ol.format.GeoJSON();
var features_XXXXXXXXX_ZONE_URBA_DATAPPRO_0 = format_XXXXXXXXX_ZONE_URBA_DATAPPRO_0.readFeatures(json_XXXXXXXXX_ZONE_URBA_DATAPPRO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XXXXXXXXX_ZONE_URBA_DATAPPRO_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XXXXXXXXX_ZONE_URBA_DATAPPRO_0.addFeatures(features_XXXXXXXXX_ZONE_URBA_DATAPPRO_0);
var lyr_XXXXXXXXX_ZONE_URBA_DATAPPRO_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XXXXXXXXX_ZONE_URBA_DATAPPRO_0, 
                style: style_XXXXXXXXX_ZONE_URBA_DATAPPRO_0,
                popuplayertitle: 'XXXXXXXXX_ZONE_URBA_DATAPPRO',
                interactive: true,
    title: 'XXXXXXXXX_ZONE_URBA_DATAPPRO<br />\
    <img src="styles/legend/XXXXXXXXX_ZONE_URBA_DATAPPRO_0_0.png" /> A<br />\
    <img src="styles/legend/XXXXXXXXX_ZONE_URBA_DATAPPRO_0_1.png" /> N<br />\
    <img src="styles/legend/XXXXXXXXX_ZONE_URBA_DATAPPRO_0_2.png" /> U<br />\
    <img src="styles/legend/XXXXXXXXX_ZONE_URBA_DATAPPRO_0_3.png" /> <br />' });
var format_Bti_1 = new ol.format.GeoJSON();
var features_Bti_1 = format_Bti_1.readFeatures(json_Bti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bti_1.addFeatures(features_Bti_1);
var lyr_Bti_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bti_1, 
                style: style_Bti_1,
                popuplayertitle: 'Bâti',
                interactive: true,
    title: 'Bâti<br />\
    <img src="styles/legend/Bti_1_0.png" /> bâti dur<br />\
    <img src="styles/legend/Bti_1_1.png" /> bâti léger<br />' });
var format_Coursdeau_2 = new ol.format.GeoJSON();
var features_Coursdeau_2 = format_Coursdeau_2.readFeatures(json_Coursdeau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursdeau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_2.addFeatures(features_Coursdeau_2);
var lyr_Coursdeau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_2,
maxResolution:28.00446615226196,
 minResolution:-1.3040587712928456e-13,

                style: style_Coursdeau_2,
                popuplayertitle: 'Cours d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Coursdeau_2.png" /> Cours d\'eau'
            });
var format_Communes_3 = new ol.format.GeoJSON();
var features_Communes_3 = format_Communes_3.readFeatures(json_Communes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_3.addFeatures(features_Communes_3);
var lyr_Communes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_3, 
                style: style_Communes_3,
                popuplayertitle: 'Communes',
                interactive: true,
                title: 'Communes'
            });
var format_Parcelles_4 = new ol.format.GeoJSON();
var features_Parcelles_4 = format_Parcelles_4.readFeatures(json_Parcelles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_4.addFeatures(features_Parcelles_4);
var lyr_Parcelles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_4, 
                style: style_Parcelles_4,
                popuplayertitle: 'Parcelles',
                interactive: true,
                title: '<img src="styles/legend/Parcelles_4.png" /> Parcelles'
            });
var group_Cadastre = new ol.layer.Group({
                                layers: [lyr_Communes_3,lyr_Parcelles_4,],
                                fold: "open",
                                title: 'Cadastre'});
var group_tiquettescadastre = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Étiquettes cadastre'});
var group_Donnescadastre = new ol.layer.Group({
                                layers: [lyr_Bti_1,lyr_Coursdeau_2,],
                                fold: "open",
                                title: 'Données cadastre'});

lyr_XXXXXXXXX_ZONE_URBA_DATAPPRO_0.setVisible(true);lyr_Bti_1.setVisible(true);lyr_Coursdeau_2.setVisible(true);lyr_Communes_3.setVisible(true);lyr_Parcelles_4.setVisible(true);
var layersList = [lyr_XXXXXXXXX_ZONE_URBA_DATAPPRO_0,group_Donnescadastre,group_Cadastre];
lyr_XXXXXXXXX_ZONE_URBA_DATAPPRO_0.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'FORMDOMI': 'FORMDOMI', 'DESTOUI': 'DESTOUI', 'DESTCDT': 'DESTCDT', 'DESTNON': 'DESTNON', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', 'SYMBOLE': 'SYMBOLE', });
lyr_Bti_1.set('fieldAliases', {'geo_batiment': 'geo_batiment', 'annee': 'annee', 'object_rid': 'object_rid', 'geo_dur': 'geo_dur', 'tex': 'tex', 'creat_date': 'creat_date', 'update_dat': 'update_dat', 'lot': 'lot', 'ogc_fid': 'ogc_fid', });
lyr_Coursdeau_2.set('fieldAliases', {'geo_tronfluv': 'geo_tronfluv', 'annee': 'annee', 'object_rid': 'object_rid', 'tex': 'tex', 'creat_date': 'creat_date', 'update_dat': 'update_dat', 'lot': 'lot', });
lyr_Communes_3.set('fieldAliases', {'geo_commune': 'geo_commune', 'annee': 'annee', 'object_rid': 'object_rid', 'idu': 'idu', 'tex2': 'tex2', 'creat_date': 'creat_date', 'update_dat': 'update_dat', 'commune': 'commune', 'lot': 'lot', 'ogc_fid': 'ogc_fid', });
lyr_Parcelles_4.set('fieldAliases', {'ogc_fid': 'Id', 'geo_parcelle': 'Identifiant unique', 'idu': 'Idu', 'tex': 'Etiquette', 'geo_section': 'Section', 'nomcommune': 'Commune', 'codecommune': 'Code commune', 'surface_geo': 'Surface m2', 'contenance': 'Contenance', 'lot': 'Lot', });
lyr_XXXXXXXXX_ZONE_URBA_DATAPPRO_0.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'FORMDOMI': 'TextEdit', 'DESTOUI': 'TextEdit', 'DESTCDT': 'TextEdit', 'DESTNON': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', 'SYMBOLE': 'TextEdit', });
lyr_Bti_1.set('fieldImages', {'geo_batiment': 'TextEdit', 'annee': 'TextEdit', 'object_rid': 'TextEdit', 'geo_dur': 'TextEdit', 'tex': 'TextEdit', 'creat_date': 'DateTime', 'update_dat': 'DateTime', 'lot': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_Coursdeau_2.set('fieldImages', {'geo_tronfluv': '', 'annee': '', 'object_rid': '', 'tex': '', 'creat_date': '', 'update_dat': '', 'lot': '', });
lyr_Communes_3.set('fieldImages', {'geo_commune': 'TextEdit', 'annee': 'TextEdit', 'object_rid': 'TextEdit', 'idu': 'TextEdit', 'tex2': 'TextEdit', 'creat_date': 'DateTime', 'update_dat': 'DateTime', 'commune': 'TextEdit', 'lot': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_Parcelles_4.set('fieldImages', {'ogc_fid': 'TextEdit', 'geo_parcelle': 'TextEdit', 'idu': 'TextEdit', 'tex': 'TextEdit', 'geo_section': 'TextEdit', 'nomcommune': 'TextEdit', 'codecommune': 'TextEdit', 'surface_geo': 'TextEdit', 'contenance': 'TextEdit', 'lot': 'TextEdit', });
lyr_XXXXXXXXX_ZONE_URBA_DATAPPRO_0.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'FORMDOMI': 'no label', 'DESTOUI': 'no label', 'DESTCDT': 'no label', 'DESTNON': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', 'SYMBOLE': 'no label', });
lyr_Bti_1.set('fieldLabels', {'geo_batiment': 'no label', 'annee': 'no label', 'object_rid': 'no label', 'geo_dur': 'no label', 'tex': 'no label', 'creat_date': 'no label', 'update_dat': 'no label', 'lot': 'no label', 'ogc_fid': 'no label', });
lyr_Coursdeau_2.set('fieldLabels', {'geo_tronfluv': 'no label', 'annee': 'no label', 'object_rid': 'no label', 'tex': 'no label', 'creat_date': 'no label', 'update_dat': 'no label', 'lot': 'no label', });
lyr_Communes_3.set('fieldLabels', {'geo_commune': 'no label', 'annee': 'no label', 'object_rid': 'no label', 'idu': 'inline label - always visible', 'tex2': 'no label', 'creat_date': 'no label', 'update_dat': 'no label', 'commune': 'no label', 'lot': 'no label', 'ogc_fid': 'no label', });
lyr_Parcelles_4.set('fieldLabels', {'ogc_fid': 'no label', 'geo_parcelle': 'no label', 'idu': 'inline label - always visible', 'tex': 'no label', 'geo_section': 'no label', 'nomcommune': 'no label', 'codecommune': 'no label', 'surface_geo': 'no label', 'contenance': 'no label', 'lot': 'no label', });
lyr_Parcelles_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
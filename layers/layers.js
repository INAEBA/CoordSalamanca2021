var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionSalamanca_3 = new ol.format.GeoJSON();
var features_CoordinacionSalamanca_3 = format_CoordinacionSalamanca_3.readFeatures(json_CoordinacionSalamanca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalamanca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalamanca_3.addFeatures(features_CoordinacionSalamanca_3);
var lyr_CoordinacionSalamanca_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalamanca_3, 
                style: style_CoordinacionSalamanca_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSalamanca_3.png" /> Coordinacion Salamanca'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionS7_5 = new ol.format.GeoJSON();
var features_MicroregionS7_5 = format_MicroregionS7_5.readFeatures(json_MicroregionS7_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionS7_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionS7_5.addFeatures(features_MicroregionS7_5);
var lyr_MicroregionS7_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionS7_5, 
                style: style_MicroregionS7_5,
                interactive: false,
    title: 'Microregion S7<br />\
    <img src="styles/legend/MicroregionS7_5_0.png" /> 3 - 35 Personas<br />\
    <img src="styles/legend/MicroregionS7_5_1.png" /> 35 - 104 Personas<br />\
    <img src="styles/legend/MicroregionS7_5_2.png" /> 104 - 197 Personas<br />\
    <img src="styles/legend/MicroregionS7_5_3.png" /> 197 - 379 Personas<br />\
    <img src="styles/legend/MicroregionS7_5_4.png" /> 379 - 612 Personas<br />'
        });
var format_MicroregionS6_6 = new ol.format.GeoJSON();
var features_MicroregionS6_6 = format_MicroregionS6_6.readFeatures(json_MicroregionS6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionS6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionS6_6.addFeatures(features_MicroregionS6_6);
var lyr_MicroregionS6_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionS6_6, 
                style: style_MicroregionS6_6,
                interactive: false,
    title: 'Microregion S6<br />\
    <img src="styles/legend/MicroregionS6_6_0.png" /> 2 - 23 Personas<br />\
    <img src="styles/legend/MicroregionS6_6_1.png" /> 23 - 61 Personas<br />\
    <img src="styles/legend/MicroregionS6_6_2.png" /> 61 - 136 Personas<br />\
    <img src="styles/legend/MicroregionS6_6_3.png" /> 136 - 282 Personas<br />\
    <img src="styles/legend/MicroregionS6_6_4.png" /> 282 - 444 Personas<br />'
        });
var format_MicroregionS4_7 = new ol.format.GeoJSON();
var features_MicroregionS4_7 = format_MicroregionS4_7.readFeatures(json_MicroregionS4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionS4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionS4_7.addFeatures(features_MicroregionS4_7);
var lyr_MicroregionS4_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionS4_7, 
                style: style_MicroregionS4_7,
                interactive: false,
    title: 'Microregion S4<br />\
    <img src="styles/legend/MicroregionS4_7_0.png" /> 2 - 22 Personas<br />\
    <img src="styles/legend/MicroregionS4_7_1.png" /> 22 - 67 Personas<br />\
    <img src="styles/legend/MicroregionS4_7_2.png" /> 67 - 205 Personas<br />\
    <img src="styles/legend/MicroregionS4_7_3.png" /> 205 - 418 Personas<br />\
    <img src="styles/legend/MicroregionS4_7_4.png" /> 418 - 942 Personas<br />'
        });
var format_MicroregionS4_8 = new ol.format.GeoJSON();
var features_MicroregionS4_8 = format_MicroregionS4_8.readFeatures(json_MicroregionS4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionS4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionS4_8.addFeatures(features_MicroregionS4_8);
var lyr_MicroregionS4_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionS4_8, 
                style: style_MicroregionS4_8,
                interactive: false,
    title: 'Microregion S4<br />\
    <img src="styles/legend/MicroregionS4_8_0.png" /> 2 - 43 Personas<br />\
    <img src="styles/legend/MicroregionS4_8_1.png" /> 43 - 126 Personas<br />\
    <img src="styles/legend/MicroregionS4_8_2.png" /> 126 - 228 Personas<br />\
    <img src="styles/legend/MicroregionS4_8_3.png" /> 228 - 378 Personas<br />\
    <img src="styles/legend/MicroregionS4_8_4.png" /> 378 - 533 Personas<br />'
        });
var format_MicroregionS3_9 = new ol.format.GeoJSON();
var features_MicroregionS3_9 = format_MicroregionS3_9.readFeatures(json_MicroregionS3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionS3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionS3_9.addFeatures(features_MicroregionS3_9);
var lyr_MicroregionS3_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionS3_9, 
                style: style_MicroregionS3_9,
                interactive: false,
    title: 'Microregion S3<br />\
    <img src="styles/legend/MicroregionS3_9_0.png" /> 3 - 11 Personas<br />\
    <img src="styles/legend/MicroregionS3_9_1.png" /> 11 - 25 Personas<br />\
    <img src="styles/legend/MicroregionS3_9_2.png" /> 25 - 51 Personas<br />\
    <img src="styles/legend/MicroregionS3_9_3.png" /> 51 - 111 Personas<br />\
    <img src="styles/legend/MicroregionS3_9_4.png" /> 111 - 210 Personas<br />'
        });
var format_MicroregionS21_10 = new ol.format.GeoJSON();
var features_MicroregionS21_10 = format_MicroregionS21_10.readFeatures(json_MicroregionS21_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionS21_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionS21_10.addFeatures(features_MicroregionS21_10);
var lyr_MicroregionS21_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionS21_10, 
                style: style_MicroregionS21_10,
                interactive: false,
    title: 'Microregion S2-1<br />\
    <img src="styles/legend/MicroregionS21_10_0.png" /> 3 - 13 Personas<br />\
    <img src="styles/legend/MicroregionS21_10_1.png" /> 13 - 28 Personas<br />\
    <img src="styles/legend/MicroregionS21_10_2.png" /> 28 - 45 Personas<br />\
    <img src="styles/legend/MicroregionS21_10_3.png" /> 45 - 69 Personas<br />\
    <img src="styles/legend/MicroregionS21_10_4.png" /> 69 - 127 Personas<br />'
        });
var format_CoordinacionSalamanca_11 = new ol.format.GeoJSON();
var features_CoordinacionSalamanca_11 = format_CoordinacionSalamanca_11.readFeatures(json_CoordinacionSalamanca_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalamanca_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalamanca_11.addFeatures(features_CoordinacionSalamanca_11);
var lyr_CoordinacionSalamanca_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalamanca_11, 
                style: style_CoordinacionSalamanca_11,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionSalamanca_11.png" /> Coordinacion Salamanca'
            });
var group_CoordinacionSalamancaRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionS7_5,lyr_MicroregionS6_6,lyr_MicroregionS4_7,lyr_MicroregionS4_8,lyr_MicroregionS3_9,lyr_MicroregionS21_10,],
                                title: "Coordinacion Salamanca Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionSalamanca_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionSalamanca_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionS7_5.setVisible(true);lyr_MicroregionS6_6.setVisible(true);lyr_MicroregionS4_7.setVisible(true);lyr_MicroregionS4_8.setVisible(true);lyr_MicroregionS3_9.setVisible(true);lyr_MicroregionS21_10.setVisible(true);lyr_CoordinacionSalamanca_11.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionSalamancaRezago,lyr_CoordinacionSalamanca_11];
lyr_CoordinacionSalamanca_3.set('fieldAliases', {'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionS7_5.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionS6_6.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionS4_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionS4_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionS3_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionS21_10.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_CoordinacionSalamanca_11.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionSalamanca_3.set('fieldImages', {'cat': 'Range', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionS7_5.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionS6_6.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionS4_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionS4_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionS3_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionS21_10.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSalamanca_11.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSalamanca_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionS7_5.set('fieldLabels', {});
lyr_MicroregionS6_6.set('fieldLabels', {});
lyr_MicroregionS4_7.set('fieldLabels', {});
lyr_MicroregionS4_8.set('fieldLabels', {});
lyr_MicroregionS3_9.set('fieldLabels', {});
lyr_MicroregionS21_10.set('fieldLabels', {});
lyr_CoordinacionSalamanca_11.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionSalamanca_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoXVIPolgonoQ_1 = new ol.format.GeoJSON();
var features_AnexoXVIPolgonoQ_1 = format_AnexoXVIPolgonoQ_1.readFeatures(json_AnexoXVIPolgonoQ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIPolgonoQ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIPolgonoQ_1.addFeatures(features_AnexoXVIPolgonoQ_1);
var lyr_AnexoXVIPolgonoQ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIPolgonoQ_1, 
                style: style_AnexoXVIPolgonoQ_1,
                popuplayertitle: "Anexo XVI - Polígono Q",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIPolgonoQ_1.png" /> Anexo XVI - Polígono Q'
            });
var format_AnexoXVPolgonoP_2 = new ol.format.GeoJSON();
var features_AnexoXVPolgonoP_2 = format_AnexoXVPolgonoP_2.readFeatures(json_AnexoXVPolgonoP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVPolgonoP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVPolgonoP_2.addFeatures(features_AnexoXVPolgonoP_2);
var lyr_AnexoXVPolgonoP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVPolgonoP_2, 
                style: style_AnexoXVPolgonoP_2,
                popuplayertitle: "Anexo XV - Polígono P",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVPolgonoP_2.png" /> Anexo XV - Polígono P'
            });
var format_AnexoXIVPolgonoO_3 = new ol.format.GeoJSON();
var features_AnexoXIVPolgonoO_3 = format_AnexoXIVPolgonoO_3.readFeatures(json_AnexoXIVPolgonoO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVPolgonoO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVPolgonoO_3.addFeatures(features_AnexoXIVPolgonoO_3);
var lyr_AnexoXIVPolgonoO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVPolgonoO_3, 
                style: style_AnexoXIVPolgonoO_3,
                popuplayertitle: "Anexo XIV - Polígono O",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVPolgonoO_3.png" /> Anexo XIV - Polígono O'
            });
var format_AnexoXIIIPolgonoN_4 = new ol.format.GeoJSON();
var features_AnexoXIIIPolgonoN_4 = format_AnexoXIIIPolgonoN_4.readFeatures(json_AnexoXIIIPolgonoN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIPolgonoN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIPolgonoN_4.addFeatures(features_AnexoXIIIPolgonoN_4);
var lyr_AnexoXIIIPolgonoN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIPolgonoN_4, 
                style: style_AnexoXIIIPolgonoN_4,
                popuplayertitle: "Anexo XIII - Polígono N",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIPolgonoN_4.png" /> Anexo XIII - Polígono N'
            });
var format_AnexoXIIPolgonoM_5 = new ol.format.GeoJSON();
var features_AnexoXIIPolgonoM_5 = format_AnexoXIIPolgonoM_5.readFeatures(json_AnexoXIIPolgonoM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIPolgonoM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIPolgonoM_5.addFeatures(features_AnexoXIIPolgonoM_5);
var lyr_AnexoXIIPolgonoM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIPolgonoM_5, 
                style: style_AnexoXIIPolgonoM_5,
                popuplayertitle: "Anexo XII - Polígono M",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIPolgonoM_5.png" /> Anexo XII - Polígono M'
            });
var format_AnexoXIPolgonoL_6 = new ol.format.GeoJSON();
var features_AnexoXIPolgonoL_6 = format_AnexoXIPolgonoL_6.readFeatures(json_AnexoXIPolgonoL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIPolgonoL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIPolgonoL_6.addFeatures(features_AnexoXIPolgonoL_6);
var lyr_AnexoXIPolgonoL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIPolgonoL_6, 
                style: style_AnexoXIPolgonoL_6,
                popuplayertitle: "Anexo XI - Polígono L",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIPolgonoL_6.png" /> Anexo XI - Polígono L'
            });
var format_AnexoXPolgonoK_7 = new ol.format.GeoJSON();
var features_AnexoXPolgonoK_7 = format_AnexoXPolgonoK_7.readFeatures(json_AnexoXPolgonoK_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXPolgonoK_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXPolgonoK_7.addFeatures(features_AnexoXPolgonoK_7);
var lyr_AnexoXPolgonoK_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXPolgonoK_7, 
                style: style_AnexoXPolgonoK_7,
                popuplayertitle: "Anexo X - Polígono K",
                interactive: true,
                title: '<img src="styles/legend/AnexoXPolgonoK_7.png" /> Anexo X - Polígono K'
            });
var format_AnexoIXPolgonoJ_8 = new ol.format.GeoJSON();
var features_AnexoIXPolgonoJ_8 = format_AnexoIXPolgonoJ_8.readFeatures(json_AnexoIXPolgonoJ_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXPolgonoJ_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXPolgonoJ_8.addFeatures(features_AnexoIXPolgonoJ_8);
var lyr_AnexoIXPolgonoJ_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXPolgonoJ_8, 
                style: style_AnexoIXPolgonoJ_8,
                popuplayertitle: "Anexo IX - Polígono J",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXPolgonoJ_8.png" /> Anexo IX - Polígono J'
            });
var format_AnexoVIIIPolgonoI_9 = new ol.format.GeoJSON();
var features_AnexoVIIIPolgonoI_9 = format_AnexoVIIIPolgonoI_9.readFeatures(json_AnexoVIIIPolgonoI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIPolgonoI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIPolgonoI_9.addFeatures(features_AnexoVIIIPolgonoI_9);
var lyr_AnexoVIIIPolgonoI_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIPolgonoI_9, 
                style: style_AnexoVIIIPolgonoI_9,
                popuplayertitle: "Anexo VIII - Polígono I",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIPolgonoI_9.png" /> Anexo VIII - Polígono I'
            });
var format_AnexoVIIPolgonoH_10 = new ol.format.GeoJSON();
var features_AnexoVIIPolgonoH_10 = format_AnexoVIIPolgonoH_10.readFeatures(json_AnexoVIIPolgonoH_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIPolgonoH_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIPolgonoH_10.addFeatures(features_AnexoVIIPolgonoH_10);
var lyr_AnexoVIIPolgonoH_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIPolgonoH_10, 
                style: style_AnexoVIIPolgonoH_10,
                popuplayertitle: "Anexo VII - Polígono H",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIPolgonoH_10.png" /> Anexo VII - Polígono H'
            });
var format_AnexoVIPolgonoG_11 = new ol.format.GeoJSON();
var features_AnexoVIPolgonoG_11 = format_AnexoVIPolgonoG_11.readFeatures(json_AnexoVIPolgonoG_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIPolgonoG_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIPolgonoG_11.addFeatures(features_AnexoVIPolgonoG_11);
var lyr_AnexoVIPolgonoG_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIPolgonoG_11, 
                style: style_AnexoVIPolgonoG_11,
                popuplayertitle: "Anexo VI - Polígono G",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIPolgonoG_11.png" /> Anexo VI - Polígono G'
            });
var format_AnexoVPolgonoF_12 = new ol.format.GeoJSON();
var features_AnexoVPolgonoF_12 = format_AnexoVPolgonoF_12.readFeatures(json_AnexoVPolgonoF_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVPolgonoF_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVPolgonoF_12.addFeatures(features_AnexoVPolgonoF_12);
var lyr_AnexoVPolgonoF_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVPolgonoF_12, 
                style: style_AnexoVPolgonoF_12,
                popuplayertitle: "Anexo V - Polígono F",
                interactive: true,
                title: '<img src="styles/legend/AnexoVPolgonoF_12.png" /> Anexo V - Polígono F'
            });
var format_AnexoIVPolgonoE_13 = new ol.format.GeoJSON();
var features_AnexoIVPolgonoE_13 = format_AnexoIVPolgonoE_13.readFeatures(json_AnexoIVPolgonoE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVPolgonoE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVPolgonoE_13.addFeatures(features_AnexoIVPolgonoE_13);
var lyr_AnexoIVPolgonoE_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVPolgonoE_13, 
                style: style_AnexoIVPolgonoE_13,
                popuplayertitle: "Anexo IV - Polígono E",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVPolgonoE_13.png" /> Anexo IV - Polígono E'
            });
var format_AnexoIIIPolgonoC_14 = new ol.format.GeoJSON();
var features_AnexoIIIPolgonoC_14 = format_AnexoIIIPolgonoC_14.readFeatures(json_AnexoIIIPolgonoC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIPolgonoC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIPolgonoC_14.addFeatures(features_AnexoIIIPolgonoC_14);
var lyr_AnexoIIIPolgonoC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIPolgonoC_14, 
                style: style_AnexoIIIPolgonoC_14,
                popuplayertitle: "Anexo III - Polígono C",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIPolgonoC_14.png" /> Anexo III - Polígono C'
            });
var format_AnexoIIPolgonoB_15 = new ol.format.GeoJSON();
var features_AnexoIIPolgonoB_15 = format_AnexoIIPolgonoB_15.readFeatures(json_AnexoIIPolgonoB_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIPolgonoB_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIPolgonoB_15.addFeatures(features_AnexoIIPolgonoB_15);
var lyr_AnexoIIPolgonoB_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIPolgonoB_15, 
                style: style_AnexoIIPolgonoB_15,
                popuplayertitle: "Anexo II - Polígono B",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIPolgonoB_15.png" /> Anexo II - Polígono B'
            });
var format_AnexoIPolgonoPrincipal_16 = new ol.format.GeoJSON();
var features_AnexoIPolgonoPrincipal_16 = format_AnexoIPolgonoPrincipal_16.readFeatures(json_AnexoIPolgonoPrincipal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPolgonoPrincipal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoPrincipal_16.addFeatures(features_AnexoIPolgonoPrincipal_16);
var lyr_AnexoIPolgonoPrincipal_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoPrincipal_16, 
                style: style_AnexoIPolgonoPrincipal_16,
                popuplayertitle: "Anexo I - Polígono Principal",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoPrincipal_16.png" /> Anexo I - Polígono Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoXVIPolgonoQ_1.setVisible(true);lyr_AnexoXVPolgonoP_2.setVisible(true);lyr_AnexoXIVPolgonoO_3.setVisible(true);lyr_AnexoXIIIPolgonoN_4.setVisible(true);lyr_AnexoXIIPolgonoM_5.setVisible(true);lyr_AnexoXIPolgonoL_6.setVisible(true);lyr_AnexoXPolgonoK_7.setVisible(true);lyr_AnexoIXPolgonoJ_8.setVisible(true);lyr_AnexoVIIIPolgonoI_9.setVisible(true);lyr_AnexoVIIPolgonoH_10.setVisible(true);lyr_AnexoVIPolgonoG_11.setVisible(true);lyr_AnexoVPolgonoF_12.setVisible(true);lyr_AnexoIVPolgonoE_13.setVisible(true);lyr_AnexoIIIPolgonoC_14.setVisible(true);lyr_AnexoIIPolgonoB_15.setVisible(true);lyr_AnexoIPolgonoPrincipal_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoXVIPolgonoQ_1,lyr_AnexoXVPolgonoP_2,lyr_AnexoXIVPolgonoO_3,lyr_AnexoXIIIPolgonoN_4,lyr_AnexoXIIPolgonoM_5,lyr_AnexoXIPolgonoL_6,lyr_AnexoXPolgonoK_7,lyr_AnexoIXPolgonoJ_8,lyr_AnexoVIIIPolgonoI_9,lyr_AnexoVIIPolgonoH_10,lyr_AnexoVIPolgonoG_11,lyr_AnexoVPolgonoF_12,lyr_AnexoIVPolgonoE_13,lyr_AnexoIIIPolgonoC_14,lyr_AnexoIIPolgonoB_15,lyr_AnexoIPolgonoPrincipal_16];
lyr_AnexoXVIPolgonoQ_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVPolgonoP_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIVPolgonoO_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIIPolgonoN_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIPolgonoM_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIPolgonoL_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXPolgonoK_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXPolgonoJ_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIPolgonoI_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIPolgonoH_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIPolgonoG_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVPolgonoF_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVPolgonoE_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIPolgonoC_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIPolgonoB_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoPrincipal_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIPolgonoQ_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVPolgonoP_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIVPolgonoO_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIIPolgonoN_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIPolgonoM_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIPolgonoL_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXPolgonoK_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXPolgonoJ_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIIPolgonoI_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIPolgonoH_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIPolgonoG_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVPolgonoF_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVPolgonoE_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIPolgonoC_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIPolgonoB_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoPrincipal_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIPolgonoQ_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVPolgonoP_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIVPolgonoO_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIIPolgonoN_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIPolgonoM_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIPolgonoL_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXPolgonoK_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXPolgonoJ_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIIPolgonoI_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIPolgonoH_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIPolgonoG_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVPolgonoF_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVPolgonoE_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIIPolgonoC_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIPolgonoB_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_16.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipal_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
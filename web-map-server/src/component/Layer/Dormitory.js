import 'ol/ol.css';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import {Fill, Stroke, Style, Text } from 'ol/style';

export const DormitorySource = new VectorSource({
    format: new GeoJSON(),
    url: `https://geoserver.ctu.edu.vn/geoserver/ctu/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=ctu:dormitory&outputFormat=application/json`,
});

export const DormitoryLayer = new VectorLayer({
    source: DormitorySource,
    style: new Style({
        stroke: new Stroke({
            color: '#02598C',
            width: 0.5,
        }),
        fill: new Fill({
            color: '#fff9d2',
        }),
        text: new Text({
            // text: "ABC",
            font: 'bold 10px Arial',
            textAlign: 'center',
            textBaseline: 'middle',
            offsetX: 0,
            offsetY: 0,
            fill: new Fill({ color: 'red' }),
        }),

    }),
});
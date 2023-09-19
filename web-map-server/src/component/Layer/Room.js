import 'ol/ol.css';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import {Fill, Stroke, Style } from 'ol/style';

export const RoomsSource = new VectorSource({
    format: new GeoJSON(),
    url: `https://geoserver.ctu.edu.vn/geoserver/ctu/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=ctu:room_by_floor&outputFormat=application/json`,
});

export const RoomsLayer = new VectorLayer({
    source: RoomsSource,
    style: new Style({
        stroke: new Stroke({
            color: '#02598C',
            width: 0.5,
        }),
        fill: new Fill({
            color: '#c8e3f6',
        }),
    }),
});
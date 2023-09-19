import 'ol/ol.css';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Fill, Stroke, Style } from 'ol/style';

export const UnitsSource = new VectorSource({
    format: new GeoJSON(),
    url: `https://geoserver.ctu.edu.vn/geoserver/ctu/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=ctu:cantho_university_units&outputFormat=application/json`,
});

export const UnitsLayer = new VectorLayer({
    source: UnitsSource,
    style: new Style({
        stroke: new Stroke({
            color: '#02598C',
            width: 0.5,
        }),
        fill: new Fill({
            color: '#fff9d2',
        }),
    }),
});
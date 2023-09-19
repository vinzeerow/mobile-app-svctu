import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Circle, Fill, Icon, Style } from 'ol/style';
import MarkerIcon from '../../image/location.png'
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector';

export const MarkerFeature = new Feature({
    geometry: new Point(fromLonLat([0, 0])),
});

export const MarkerIconStyle = new Style({
    image: new Circle({
        radius: 5,
        fill: new Fill({
            color: 'red' // định nghĩa màu sắc của điểm
        })
    })
    
});
export const MarkerSource = new VectorSource({
    features: [MarkerFeature],
    
})
export const MarkerLayer = new VectorLayer({
    source: MarkerSource,
    style: MarkerIconStyle
})

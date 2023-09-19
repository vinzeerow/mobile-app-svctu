import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

export const StreetLayer = new TileLayer({
    source: new TileWMS({
        url: 'https://geoserver.ctu.edu.vn/geoserver/ctu/wfs',
        params: {
            layers: 'ctu:local_streets',
            format: 'image/png',
            transparent: true,
        },
    }),
});
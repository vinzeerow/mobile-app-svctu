import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";


export const MapView = () => {
    const MapContainer = new Map({
        layers: [
        //     new TileLayer({
        //     source: new OSM(),
        // }),
    ],
        view: new View({
            center: [0, 0], // Tọa độ trung tâm bản đồ
            zoom: 18, // Mức độ phóng ban đầu
        }),
    });

    return {
        MapContainer,
    };

}
import React, { useEffect} from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { MarkerFeature, MarkerLayer } from '../Layer/Maker';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { StreetLayer } from '../Layer/Streets';
import { RoomsLayer, RoomsSource } from '../Layer/Room';
import { Fill, Style } from 'ol/style';
import { UnitsLayer } from '../Layer/Units';
import { DormitoryLayer } from '../Layer/Dormitory';
import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";

const MapContainer = new Map({
    layers: [
        new TileLayer({
            source: new OSM(),
        }),

        StreetLayer,
        UnitsLayer,
        RoomsLayer,
        DormitoryLayer,
        MarkerLayer,
    ],
    view: new View({
        center: [0, 0], // Tọa độ trung tâm bản đồ
        zoom: 18, // Mức độ phóng ban đầu
    }),
});

const MapView = () => {
    useEffect(() => {
        checkRequestAccessLocation();
        MapContainer.setTarget('map') 
        handleFeature();
        return () => {
            MapContainer.setTarget(null);
        };
    }, []);

    const handleFeature = () => {
        MapContainer.on('click', function (event) {
            // Lấy danh sách các feature ở vị trí click
            var features = RoomsLayer.getSource().getFeaturesAtCoordinate(event.coordinate);

            // Lặp qua danh sách các feature và log ra thông tin tọa độ
            features.forEach(function (feature) {
                console.log(feature.getProperties().id);
                console.log(feature.getProperties().roomnamevi);
       

            });
        });
    }

    const checkPositionAndFeature = (pos) => {
        const closestFeature = RoomsSource.getClosestFeatureToCoordinate(pos);
        console.log(closestFeature);
        closestFeature?.setStyle(
            new Style({
                fill: new Fill({
                    color: 'green'
                })
            }));
    }
    const checkRequestAccessLocation = () => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(function (position) {
                var pos = fromLonLat([position.coords.longitude, position.coords.latitude]);
                MapContainer.getView().setCenter(pos);
                // checkPositionAndFeature(pos);
                MarkerFeature.setGeometry(new Point(pos));
            }, function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("Người sử dụng từ chối cho xác định vị trí.")
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Thông tin vị trí không có sẵn.")
                        break;
                    case error.TIMEOUT:
                        alert("Yêu cầu vị trí người dùng vượt quá thời gian quy định.")
                        break;
                    default:
                        alert("Một lỗi xảy ra không rõ nguyên nhân.")
                        break;
                }
            },
                {
                    enableHighAccuracy: true,
                    timeout: 3000,
                    maximumAge: 0
                });
        } else {
            alert('Trình duyệt không hỗ trợ');
        }
    }
    return <div id="map" className="map-container" style={{ width: '100%', height: '100vh' }}></div>;
}
export default MapView;

/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { MapView } from '../../../component/Map/Map';
import { fromLonLat } from 'ol/proj';
import { StreetLayer } from '../../../component/Layer/Streets';
import { UnitsLayer } from '../../../component/Layer/Units';
import { RoomsLayer } from '../../../component/Layer/Room';
import { DormitoryLayer } from '../../../component/Layer/Dormitory';
import { MarkerFeature, MarkerLayer } from '../../../component/Layer/Maker';
import { Point } from 'ol/geom';
import "./style.css";
import { OpenStreetLayer } from '../../../component/Layer/OpenStreet';
import { Fill, Style } from 'ol/style';

const MapPage = () => {
	const { MapContainer } = MapView();
	const [longitude, setLongitude] = useState(0);
	const [latitude, setLatitude] = useState(0);


	const addQuestionInFeature = () => {

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
		const closestFeature = RoomsLayer.getSource().getClosestFeatureToCoordinate(pos);
		closestFeature.setStyle(new Style({
			fill: new Fill({
				color: 'red'
			})
		}));
	}
	const checkRequestAccessLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(function (position) {
				setLongitude(position.coords.longitude);
				setLatitude(position.coords.latitude);
				// // checkPositionAndFeature(pos);

			},
				function (error) {
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
		} else alert('Trình duyệt không hỗ trợ');
	}
	useEffect(() => {
		checkRequestAccessLocation();
		MapContainer.addLayer(OpenStreetLayer)
		MapContainer.addLayer(StreetLayer);
		MapContainer.addLayer(UnitsLayer);
		MapContainer.addLayer(RoomsLayer);
		MapContainer.addLayer(DormitoryLayer);
		MapContainer.getView().setCenter(fromLonLat([longitude, latitude]));
		MarkerFeature.setGeometry(new Point(fromLonLat([longitude, latitude])));
		MapContainer.addLayer(MarkerLayer);
		MapContainer.setTarget('map');
		addQuestionInFeature();
		checkPositionAndFeature(fromLonLat([longitude, latitude]));
		return () => {
			MapContainer.setTarget(null);
		};
	}, [MapContainer, addQuestionInFeature, latitude, longitude])
	return (
		
		<div id="map" className="map-container" style={{ width: '100%', height: '100vh' }}></div>
	)
}
export default MapPage;

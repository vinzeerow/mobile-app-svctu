import Tile from "ol/Tile";
import Layer from "ol/layer/Layer";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";

export const OpenStreetLayer = new TileLayer({
    source:new OSM()
})

import { FeatureGroup, MapContainer, Marker, TileLayer, LayersControl} from 'react-leaflet';
import './styles.scss';


export function MapSection() {

    return (
        <div className="map-section-container">

            <MapContainer center={[-8.749472363287028, -63.86170122291461]} zoom={17} scrollWheelZoom={true}>
         
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Mapa">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satélite">
                        <TileLayer
                            attribution='&copy; <a href="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>

                <Marker position={[-8.749472363287028, -63.86170122291461]}>
                </Marker>

                <FeatureGroup >

                </FeatureGroup>
            </MapContainer>

        </div>
    );

}
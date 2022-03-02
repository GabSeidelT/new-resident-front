import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  const [companies, setCompanies]= useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/v1/companies')
        .then((res) => res.json())
        .then((companies) => setCompanies(companies))
        .catch((err) => console.log(`Error: ${err}`));
    }, []);

  return(
    <>
      <MapContainer center={[-27.093248034108868, -52.663513099845744]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {companies &&(
          companies.map(company => (
            <div key={company.id}>
              <Marker key={company.id} position={[company.lat, company.long]}>
                  <Popup>
                    <>{company.name}</><hr/>
                    <>{company.email}</><hr/>
                    <>{company.website}</><hr/>
                    <>{company.telephone}</>
                  </Popup>
              </Marker>
            </div>
          ))
        )}
      </MapContainer>

    </>
  );
}

export default Map;
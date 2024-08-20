"use client";

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function OfficeMap({ coordinates }: any) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    if (!isLoaded) return <div>Loading...</div>;

    const [lat, lng] = coordinates.split(",").map(parseFloat);

    return <Map coordinates={{ lat, lng }} />;
}

function Map({ coordinates }: { coordinates: { lat: number, lng: number } }) {
    return (
        <GoogleMap
            zoom={8}
            center={coordinates}
            mapContainerClassName="map-container"
        >
            <Marker position={coordinates} />
        </GoogleMap>
    );
}

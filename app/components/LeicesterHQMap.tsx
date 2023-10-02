"use client"

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { Wrapper } from "@googlemaps/react-wrapper"
import { useRef, useEffect, useState } from "react"

export default function LeicesterHQMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    if (!isLoaded) return <div>Loading...</div>
    return <Map />;
}

function Map() {
    return (
        <GoogleMap
            zoom={8}
            center={{ lat: 52.63158948482873, lng: -1.1822885893721826 }}
            mapContainerClassName="map-container"
        >
            <Marker position={{ lat: 52.63158948482873, lng: -1.1822885893721826 }} />

        </GoogleMap>
    );
}
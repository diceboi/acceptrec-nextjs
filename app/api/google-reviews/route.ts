import { NextResponse } from 'next/server';

export async function GET() {
    // TODO: Add your Place ID and API Key to .env.local
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    // Fallback values if API is not configured yet
    if (!placeId || !apiKey) {
        return NextResponse.json({
            rating: 4.8,
            reviewCount: 1200,
            isPlaceholder: true
        });
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`,
            {
                next: { revalidate: 3600 } // Cache for 1 hour
            }
        );

        const data = await response.json();

        if (data.status !== 'OK') {
            console.error('Google Places API error:', data.status);
            return NextResponse.json({
                rating: 4.8,
                reviewCount: 1200,
                isPlaceholder: true
            });
        }

        return NextResponse.json({
            rating: data.result.rating,
            reviewCount: data.result.user_ratings_total,
            isPlaceholder: false
        });
    } catch (error) {
        console.error('Failed to fetch Google reviews:', error);
        return NextResponse.json(
            {
                rating: 4.8,
                reviewCount: 1200,
                isPlaceholder: true
            }
        );
    }
}

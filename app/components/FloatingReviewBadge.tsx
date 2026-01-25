"use client"

import GoogleReviewNumber from './googlereviewnumber';

export default function FloatingReviewBadge() {
    return (
        <div className="relative w-full h-0">
            <div className="absolute left-0 right-0 md:-top-10 -top-16 z-20 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <GoogleReviewNumber />
                </div>
            </div>
        </div>
    );
}

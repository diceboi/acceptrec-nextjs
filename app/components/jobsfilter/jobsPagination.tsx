"use client"

import React, {useCallback} from "react";
import {useRouter} from "next/navigation";

interface Props {
    loadMore: string | null;
  }

const jobsPagination = ({loadMore}: Props) => {
const router = useRouter();

const handleNext = useCallback(() => {
    if (!loadMore) {
    return;
    }

    const queryString = loadMore.split("?")[1];
    router.push(`?${queryString}`);
}, [loadMore]);

return (
    <div>
    <button onClick={handleNext}>Load more Jobs</button>
    </div>
);
};

export default jobsPagination;
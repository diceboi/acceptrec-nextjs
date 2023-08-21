import React, {useEffect, useState} from "react";

interface Props {
  value: string;
  delay?: number;
}

const searchDebounce = ({value}: Props) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    },);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
};

export default searchDebounce;
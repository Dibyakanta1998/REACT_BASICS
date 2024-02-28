import { useState } from "react";

export const useSignUp = () => {
  const [data, setData] = useState({});

  const onChangeValue = (field, value) => {
    setData((pre) => {
      return { ...pre, [field]: value };
    });
  };

  return { data,onChangeValue };
};

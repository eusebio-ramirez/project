import { useEffect, useState } from "react";


const useFetchFake = (method) => {
  const [dataFake, setDataFake] = useState(null);
  const [loadingFake, setLoadingFake] = useState(true);
  const getData = async () => {
    const response = await method();
    const dataTemp = await response;
    setDataFake(dataTemp);
    setLoadingFake(false);
  }

  useEffect(() => {
    getData()
  }, []);

  return { dataFake, loadingFake };
}

export default useFetchFake;
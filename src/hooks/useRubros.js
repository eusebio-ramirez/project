import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRubros } from "../context/redux/slicers/getRubrosSlice";

export const useRubros = () => {
  const dispatch = useDispatch();
  const { rubros, loading, error } = useSelector((state) => state.getRubros);

  useEffect(() => {
    dispatch(getRubros());
  }, [dispatch]);

  return { rubros, loading, error };
};

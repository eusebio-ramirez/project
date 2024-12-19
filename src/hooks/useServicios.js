import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServicios } from "../context/redux/slicers/getServiciosSlice";

export const useServicios = () => {
  const dispatch = useDispatch();
  const { servicios, loading, error } = useSelector((state) => state.getServicios);

  useEffect(() => {
    dispatch(getServicios());
  }, [dispatch]);

  return { servicios, loading, error };
};

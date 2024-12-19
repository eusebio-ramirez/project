import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAgenda } from "../context/redux/slicers/getAgendaSlice";

export const useAgenda = () => {
  const dispatch = useDispatch();
  const { agenda, loading, error } = useSelector((state) => state.getAgenda);

  useEffect(() => {
    dispatch(getAgenda());
  }, [dispatch]);

  return { agenda, loading, error };
};

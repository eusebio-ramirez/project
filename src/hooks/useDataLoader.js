import { useState, useEffect } from 'react';
import { useAgendaStore, useServicios, useMenuStore, useTransparencia } from './';

export const useDataLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { listaAgenda } = useAgendaStore();
  const { listaMenu } = useMenuStore();
  const { listaTransparencia } = useTransparencia();
  const { listaServicios } = useServicios();

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([
          listaAgenda(),
          listaMenu(),
          listaTransparencia(),
          listaServicios()
        ]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { isLoading };
};
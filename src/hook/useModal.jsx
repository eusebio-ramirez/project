import { useEffect, useRef, useState } from "react";

const useModal = () => {
    const modalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedPerson, setSelectedPerson] = useState(null); // Almacena la persona seleccionada


    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

    const openModal = (item) => {
        setSelectedPerson(item); // Establece la persona seleccionada
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return { isModalOpen, openModal, closeModal, modalRef, selectedPerson };
};

export default useModal;

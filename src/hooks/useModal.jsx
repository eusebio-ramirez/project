import { useState, useRef, useEffect } from "react"
export const useModal = () => {
    const [modalStatus, setModalStatus] = useState(false)
    const modalRef = useRef(null);

    const openModal = () => {
        setModalStatus(true)
    }
    const closeModal = () => {
        setModalStatus(false)
    }
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalStatus(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return{modalStatus,openModal,closeModal,modalRef}
}
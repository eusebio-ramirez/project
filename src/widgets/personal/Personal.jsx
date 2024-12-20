import React, { useState, useEffect } from "react";
import './personal.css';
import useModal from '../../hook/useModal';

const Personal = ({ person }) => {
    const [datosp, setDatosp] = useState([]);
    const { isModalOpen, openModal, closeModal, modalRef, selectedPerson } = useModal(); // Usa el hook

    useEffect(() => {
        setDatosp(person);
    }, []);

    return (
        <>
            <div className="col-12 content-integrants">
                {
                    datosp.map((item, index) => (
                        <div key={index} onClick={() => openModal(item)}>
                            <div className="image-integrant" style={{ backgroundImage: `url(${item.image})` }}></div>
                        </div>
                    ))
                }
            </div>

            {isModalOpen && selectedPerson && (
                <div className="modal-overlay">
                    <div ref={modalRef} id="modal-agenda">
                        <button className="close-button" onClick={closeModal}>X</button>
                        <div className="close-icon">
                            <i
                                className="fa-sharp fa-solid fa-xmark"
                                onClick={() => {
                                    closeModal();
                                }}
                            />
                        </div>
                        <p className="agenda-title">{selectedPerson.name}</p>
                        <div className="content-image">
                            <div className="modal-image" style={{ backgroundImage: `url(${selectedPerson.image})` }}></div>
                        </div>
                        <h3><strong>Nombre:</strong>{selectedPerson.nombre}</h3>
                        <h3><strong>Rol:</strong>{selectedPerson.Puesto}</h3>
                        <h4><strong>Edad:</strong> {selectedPerson.edad}</h4>
                        <h4><strong>Dependencia:</strong> {selectedPerson.dependencia}</h4>
                    </div>
                </div>
            )}
        </>
    )
};
export default Personal;

/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInterest, setSelectedInterest] = useState('general');

    // New state for the Info Modal
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [infoModalData, setInfoModalData] = useState(null);

    const openModal = (interest = 'general') => {
        setSelectedInterest(interest);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Reset interest after a delay to avoid UI flicker during close animation
        setTimeout(() => setSelectedInterest('general'), 300);
    };

    const openInfoModal = (data) => {
        setInfoModalData(data);
        setIsInfoModalOpen(true);
    };

    const closeInfoModal = () => {
        setIsInfoModalOpen(false);
        setTimeout(() => setInfoModalData(null), 300);
    };

    return (
        <ModalContext.Provider value={{
            isModalOpen, openModal, closeModal, selectedInterest,
            isInfoModalOpen, openInfoModal, closeInfoModal, infoModalData
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

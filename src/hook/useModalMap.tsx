import { useState } from "react";

export const useModalMap = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  const showMapModal = () => {
    setIsMapModalOpen(true)
  }

  const closeMapModal = () => {
    setIsMapModalOpen(false)
  }
  return {
    isMapModalOpen, showMapModal, closeMapModal
  }
}
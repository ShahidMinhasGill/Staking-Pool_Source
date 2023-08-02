import React from 'react'
import styled from 'styled-components'

// Wrapper for the entire modal content
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Make sure the modal is on top of other content */
`

// The actual modal content
const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const MaintenanceModal = () => {
  return (
    <ModalWrapper>
      <ModalContent>
        <div>UNDER MAINTENANCE</div>
      </ModalContent>
    </ModalWrapper>
  )
}
export default MaintenanceModal

import styled from "styled-components";
import colors from "../../consts/colors";

const CloseButton = styled.button`
  font-size: 24px;
  color: ${colors.gray};
  background: none;
  border: none;
  position: absolute;
  top: 48.5px;
  right: 48.5px;
  cursor: pointer;
`;

const CloseIcon: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <CloseButton onClick={onClose}>✖</CloseButton>
);

export default CloseIcon;

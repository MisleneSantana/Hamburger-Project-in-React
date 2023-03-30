import {StyledMainTemplate} from "./style";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <StyledMainTemplate>
        <div>{children}</div>
      </StyledMainTemplate>
    </>
  );
};

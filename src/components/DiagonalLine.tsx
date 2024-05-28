import styled from 'styled-components';

interface DiagonalLineProps extends React.HTMLAttributes<HTMLDivElement> {

}

const DiagonalLineComponent = styled.div<DiagonalLineProps>`
  width: 1px;
  height:  40px;
  border-radius:25px;
  background-color: rgb(var(--bs-neutral-rgb));
`;



const DiagonalLine: React.FC<DiagonalLineProps> = ({ children, ...rest }) => {

    return (
        <div>
            <DiagonalLineComponent {...rest}>
                {children}
            </DiagonalLineComponent>
        </div>
    );
}

export default DiagonalLine;
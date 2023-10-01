import { Container } from "./styled";

const Button = ({ children, bgColor, ...rest }: any) => {
    return (
        <Container bgColor={bgColor} {...rest}>
            {children}
        </Container>
    );
};

export default Button;

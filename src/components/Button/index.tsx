import { Button as MUIButton, ButtonProps } from '@mui/material';

interface MUIButtonProps extends ButtonProps {
  title: string;
}

const Button = ({ title, ...rest }: MUIButtonProps) => {
  return <MUIButton {...rest}>{title}</MUIButton>;
};

export default Button;

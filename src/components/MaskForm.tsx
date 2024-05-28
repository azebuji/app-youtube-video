import React from 'react';
import InputMask from 'react-input-mask';
import { Form, FormControlProps } from 'react-bootstrap';

interface MaskedFormControlProps extends FormControlProps {
    mask: string;
    name: string
}

const MaskForm: React.FC<MaskedFormControlProps> = ({ mask, name, ...props }) => {
    return (
        <Form.Control
            {...props}
            name={name}
            as={InputMask}
            mask={mask}
        />
    );
};

export default MaskForm;

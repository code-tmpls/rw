import React, { useEffect } from 'react';
import { SimpleHeader, Form, Password } from 'e-ui-react';

export const PasswordPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<><SimpleHeader title="Password" />
    <Form name="testForm">
    <Password label="Account Password" name="pwd" value="" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 8,
                errorMessage:"Password should be greator than 8"
            },
            maxLength:{
                value: 16,
                errorMessage:"Message should be lessthan 16"
            },
            passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
    }} />
    </Form>
    </>);
};
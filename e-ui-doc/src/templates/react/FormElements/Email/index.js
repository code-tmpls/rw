import React, { useEffect } from 'react';
import { SimpleHeader, Email } from 'e-ui-react';

export const EmailPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <SimpleHeader title="Email" />
    <Email validation={{
        email:{
            formatCheck: true,
            isEmailExist:{ 
                // If Email Already Exists, Returns 'EXIST'
                // If Email not exists, Returns 'NOT_EXIST'
                url:"http://localhost:8081/",
                method:"",
                value:"EXIST", // When Value not matches - throws Error Message
                errorMessage:""
            }
        }
    }} />
    <Email validation={{
        email:{
            formatCheck: true,
            isEmailExist:{ 
                // If Email Already Exists, Returns 'EXIST'
                // If Email not exists, Returns 'NOT_EXIST'
                url:"",
                method:"",
                value:"NOT_EXIST", // When Value not matches - throws Error Message
                errorMessage:""
            }
        }
    }} />
    </>);
};
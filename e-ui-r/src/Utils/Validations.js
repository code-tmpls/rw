export const UrlAsyncFetch = async(url)=>{
  const response = await fetch(url, { Method: 'GET' });
  return await response.text();       //api for the get request
};

export const FormInputValidate = (validation, value) => {
    console.log(validation, value);
    const validationSteps = Object.keys(validation);
    console.log("validationSteps",validationSteps);
    const validationSuccess = [];
    let result;
    for (let validateStep in validationSteps) {
      const step = validationSteps[validateStep];
      let errorMessage = '';
       if (step === 'validate') {
        const errorMessage = validation[step](value);
        if (errorMessage.length === 0) {
          validationSuccess.push(step);
        }
        result = { validationSuccess, value, errorMessage };
      } 
      else if(step === 'deps') {
 
      }
      else if(step === 'email') {
        let errorMessage='';
        if(validation[step]?.formatCheck){
          let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (value.match(validRegex)) {
            let isEmailExist = validation[step]?.isEmailExist;
            let url = isEmailExist?.url;
            let method = isEmailExist?.method;
            let response = isEmailExist?.value;
            if(url!==undefined && method!==undefined && response!==undefined && errorMessage!==undefined){
                const data =  UrlAsyncFetch(url);
                if(data!==response){
                  errorMessage =  isEmailExist?.errorMessage;
                  result = { validationSuccess, value, errorMessage };
                  console.log(result);
                }
            }
          } else {
              // Not Matched
              errorMessage = "Please Enter a Valid Email Address";
              result = { validationSuccess, value, errorMessage };
          }
        }
      }
      else {
        if (
          (step === 'required' && value.trim().length === 0) ||
          (step === 'minLength' && value.trim().length < validation[step]?.value) ||
          (step === 'pattern' && !validation[step]?.value.test(value)) ||
          (step === 'maxLength' && value.trim().length > validation[step]?.value)
        ) {
          errorMessage = validation[step]?.errorMessage;
          result = { validationSuccess, value, errorMessage };
          console.log("errorMessage: ", errorMessage);
          break;
        } else {
          validationSuccess.push(step);
          result = { validationSuccess, value, errorMessage };
        }
      }
    }
    console.log('result', result);
    return result;
};

export const KeyPressValidate=(event, pattern, validation)=>{
    if(pattern!==undefined){
      let key = String.fromCharCode(event.which || event.charCode);
      if (!pattern.test(key)) {
       FormInputValidate(validation, event.target.value + key);
       event.preventDefault();
      }
    }  
};
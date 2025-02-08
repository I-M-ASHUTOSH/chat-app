import React from 'react';
import {FormProvider as Form} from "react-hook-form"


const FormProvider = ({children,onSubmit,methods}) => {
  return (
    <div>
      <Form {...methods}>
        <form onSubmit={onSubmit}>{children}</form>
      </Form>
    </div>
  );
}

export default FormProvider;

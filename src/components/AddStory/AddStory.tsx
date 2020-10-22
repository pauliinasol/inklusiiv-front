import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;

export const AddStory = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: { [x: string]: any }) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Container>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input name="example" defaultValue="test" ref={register} />
        <input name="example" defaultValue="test" ref={register} /> */}

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input name="exampleRequired" ref={register({ required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      {/* <Button type="submit">Submit</Button> */}
      {/* </form> */}
    </Container>
  );
};

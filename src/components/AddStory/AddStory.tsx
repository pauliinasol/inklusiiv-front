import React from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { HeaderTwo, SmallText } from "../../assets/Typography";
import { Button } from "../Button/Button";

const Container = styled.div`
  position: absolute;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormStyled = styled.form`
  input {
    font-family: "Karla", sans-serif;
    width: 40em;
    border: 1px solid #fff;
    height: 2.5em;
    margin: 1em;
    outline: none;
    border-radius: 0.5em;
  }

  textarea {
    width: 40em;
    border: 1px solid #fff;
    margin: 1em;
    outline: none;
    border-radius: 0.5em;
    font-family: "Karla", sans-serif;
  }
  button {
    width: 4em;
  }
`;

const ButtonForm = styled(Button)`
  width: 10%;
  :focus {
    outline: none;
  }
`;
export const AddStory = () => {
  const onSubmit = () => console.log("hello");
  return (
    <Container>
      <FormContainer>
        <Form
          onSubmit={onSubmit}
          // validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormStyled>
                <HeaderTwo>Add your story</HeaderTwo>
                <SmallText>Nickname</SmallText>
                <Field
                  name="firstName"
                  component="input"
                  placeholder="You can also leave this anonymous"
                />

                <Field name="phone">
                  {({ input, meta }) => (
                    <>
                      <SmallText>Your story</SmallText>
                      <textarea
                        rows={20}
                        {...input}
                        placeholder="Share your story"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>

                <ButtonForm type="submit">Submit</ButtonForm>
              </FormStyled>
            </form>
          )}
        />
      </FormContainer>
    </Container>
  );
};

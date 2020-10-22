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
  display: flex;
  flex-direction: column;

  input {
    font-family: "Karla", sans-serif;
    width: 40em;
    border: 1px solid #fff;
    height: 2.5em;
    margin-top: 1em;
    margin-bottom: 1em;
    outline: none;
    border-radius: 0.5em;
  }

  textarea {
    width: 40em;
    border: 1px solid #fff;
    margin-top: 1em;
    margin-bottom: 1em;
    outline: none;
    border-radius: 0.5em;
    font-family: "Karla", sans-serif;
  }
`;

const ButtonForm = styled.button`
  align-self: center;
  font-family: "Karla", sans-serif;
  font-size: 1em;
  background-color: #f1c9b7;
  border-radius: 1.5em;
  padding: 0.65em;
  transition: 0.3s;
  border: none;
  width: 5em;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #f2b12e;
    cursor: pointer;
  }
`;
export const AddStory = () => {
  const onSubmit = (e: EventTarget) => console.log(e);
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
                  name="name"
                  component="input"
                  placeholder="You can also leave this anonymous"
                />

                <Field name="story">
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

                <ButtonForm type={"submit"}>Submit</ButtonForm>
              </FormStyled>
            </form>
          )}
        />
      </FormContainer>
    </Container>
  );
};

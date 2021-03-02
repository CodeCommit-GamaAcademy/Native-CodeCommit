import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const inputValueRef = useRef<InputValueReference>({ value: '' });
  const { registerField, fieldName, error } = useField(name);

  useEffect(() => {
    // quando meu componente for montado eu "registro" ele dentro do unform
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: any) {
        inputValueRef.current.value = value;
        // Linha a baixo é responsavél por mudar VISUALMENTE mostrar o texto no input
        // Pois 'inputValueRef' não atualiza visualmente 
        inputElementRef.current.setNativeProps({ text: value });
      },
      // Quando o unform precisar limpar os campos
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    });
  }, [fieldName, registerField]);

  return (
    <TextInput
      {...rest}
      onChangeText={(value) => {
        inputValueRef.current.value = value;
      }}
    />
  )
};

export default Input;
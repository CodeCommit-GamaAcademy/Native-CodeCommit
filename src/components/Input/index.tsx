import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ name, ...rest }, ref) => {
  const inputElementRef = useRef<any>(null);

  const inputValueRef = useRef<InputValueReference>({ value: '' });
  const { registerField, fieldName, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!(inputValueRef.current.value.length > 0));
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

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
      isFocused={isFocused}
      isFilled={isFilled}
      ref={inputElementRef}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onChangeText={(value) => {
        inputValueRef.current.value = value;
      }}
    />
  )
};

export default forwardRef(Input);
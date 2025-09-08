// src/types/formComponents.d.ts
import React from 'react'

// InputProps estendido para permitir customizações futuras
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  customStyle?: string // exemplo de propriedade extra
}

// ButtonProps estendido para incluir classes de estilo
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: 'primary' | 'alert' | 'borderless-alert'
}

// Mensagem de sucesso ou erro
export type MessageProps = {
  msg: string
  type: 'error' | 'success'
}

// Props do FormComponents
export interface FormComponentsProps {
  inputs: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}

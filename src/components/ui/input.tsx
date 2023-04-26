import React, {FC, useState} from 'react';
import cn from "classnames";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export interface IInput {
  placeholder: string
  className?: string
  cbSuccess?: () => void
  type?: 'from' | 'to'
}

const Input: FC<IInput> = (props) => {

  const {placeholder, className, type, cbSuccess} = props

  return(


    <input placeholder={placeholder} className={cn('w-full py-2 px-3 bg-zinc-100 rounded outline-0 border-0', className)}/>
  )

};

export default Input;
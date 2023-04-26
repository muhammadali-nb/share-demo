import React, {FC, useEffect, useRef, useState} from 'react';
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import cn from "classnames";
import useOnclickOutside from "react-cool-onclickoutside";
import {useMapStore} from "@/store/map-store";
import {TypeFrom} from "@/store/types";

export interface IInputPLaces {
  placeholder: string
  className?: string
  cbSuccess: (coordinates: TypeFrom) => void
  type?: 'from' | 'to'
}

const InputPlaces: FC<IInputPLaces> = (props) => {
  const isLoadMap = useMapStore(state => state.isLoadMap)
  const inputRef = useRef(null)
  const status_map = useMapStore(state => state.status)
  const [userPosition, setPosition] = useState<boolean>(false)
  const {
    placeholder,
    className,
    cbSuccess
  } = props
  const {
    value,
    init,
    suggestions: {status, data},
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "YOUR_CALLBACK_NAME",
    requestOptions: {},
    debounce: 300,
  });


  const dismissSuggestions = () => {
    clearSuggestions();
    setPosition(false)
  };

  const ref = useOnclickOutside(dismissSuggestions);

  const handleSelect = ({description}: any) => () => {
    setValue(description, false);
    clearSuggestions();
    getGeocode({address: description}).then((results) => {
      const {lat, lng} = getLatLng(results[0]);
      cbSuccess({address: '', location: {lat, lng}})
      console.log("📍 Coordinates: ", {lat, lng});
    });
  };

  useEffect(() => {
    if (isLoadMap) init()
  }, [isLoadMap, init])

  const renderSuggestions = () =>
    status === 'OK' && data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: {main_text, secondary_text},
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className='bg-blue-400 h-10 rounded px-3 py-2 mb-2 text-white text-ellipsis overflow-hidden last:mb-0'>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div className={cn('w-full relative', className)} ref={ref}>
      <ul className=' w-full absolute bottom-12 left-0 bg-transparent rounded '>
        {renderSuggestions()}
      </ul>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className={cn('w-full py-2 px-3 rounded outline-0 border-0 font-medium placeholder:text-gray-600 transition-all duration-500',
          {'bg-red-200': status_map === "error"},
          {'bg-zinc-100': status_map === "success"},
          {'bg-zinc-100': status_map === "pending"}
        )}
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={status_map === "success"}
        onFocus={() => setPosition(true)}
      />
      {userPosition && <button
          className='bg-blue-400 leading-3 py-1 text-xs font-medium w-16 text-white rounded absolute top-1 right-2'>
          Current position
      </button>}
    </div>)
};

export default InputPlaces;
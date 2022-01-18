import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import DatePicker from 'react-datepicker'
import dateFormat from 'dateformat'
import 'react-datepicker/dist/react-datepicker.css'
function Header(props) {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className='bg-secondary h-20 border-2 border-b-primary fixed inset-x-0 inset-0'>
            <div className='max-w-4xl mx-auto grid sm:grid-cols-4 my-5 grid-cols-3'>
                <h2 className='sm:text-2xl text-xl font-body text-primary font-semibold sm:col-span-3 col-span-2'><FontAwesomeIcon icon={ faRocket }/> Spacestagram</h2>
                <DatePicker
                    selected={selectedDate}
                    onChange={e => {setSelectedDate(e); props.onChange(dateFormat(e, "isoDate"))}}
                    dateFormat='yyyy/MM/dd'
                    className=' p-1 bg-white border-2 text-gray-500 font-semibold sm:pl-4 cursor-pointer sm:rounded-md w-full sm:h-10 sm:text-sm text-xs h-8 pl-3 border-primary sm:border-none'
                    placeholderText="Search By Date"
                    minDate={new Date("2020-12-21")}
                    maxDate={new Date().getTime() - 24*60*60*1000}
                    isClearable
                />
            </div>
        </div>
    )
}

export default Header

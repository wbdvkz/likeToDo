
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


export default function Adder({ setToDoArray }) {

    const [startDate, setStartDate] = useState(new Date());


    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [rangeStartDate, rangeEndDate] = dateRange;

    const [id, setId] = useState(1);

    async function addTask(input) {
        let res = await fetch(`https://virtserver.swaggerhub.com/LOL11999333/Planner/1.0.0/addNewForecastPlannerItem?dateOfSend=%27${input.dateOfSend}%27&forecastStart=%27${input.forecastStart}%27&forecastEnd=%27${input.forecastEnd}%27`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })

        console.log('ОТВЕТ добавить')
        console.log(res)

        setId(prev => prev + 1)
        setToDoArray(prev => {

            return prev.concat({ id: id, ...input })
        })



    }





    return (
        <>
            <div className='text-4xl'>Добавить новую задачу</div>

            <br /><br />

            <div>Дата отправления</div>

            <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" className="bg-black border-slate-300 border-solid border-2 text-white" />
            </div>
            <br /><br />

            <div>Прогноз на период</div>

            <div>
                <DatePicker
                    selectsRange={true}
                    startDate={rangeStartDate}
                    endDate={rangeEndDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    dateFormat="yyyy-MM-dd"

                    className="bg-black border-slate-300 border-solid border-2 text-white"
                />
            </div>
            <br /><br />
            <button type="button" className="bg-red-500 w-96 h-20" onClick={() => {


                addTask({ dateOfSend: startDate.toLocaleDateString('en-CA'), forecastStart: rangeStartDate.toLocaleDateString('en-CA'), forecastEnd: rangeEndDate.toLocaleDateString('en-CA') })
            }}>Добавить</button>
        </>
    )
}
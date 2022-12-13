




export default function List({ toDoArray, setToDoArray }) {

    function toDelete(id) {
        console.log(id)
        setToDoArray(prev => prev.filter(ii => ii.id !== id))
    }

    return (
        <>
            <div className='text-4xl'>Запланированные задачи</div>

            <br /><br />

            <table className="border-4 border-separate border-spacing-10" >
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Дата отправления</td>
                        <td>Прогноз на период</td>
                        <td>Операции</td>
                    </tr>
                </thead>
                <tbody>



            
                    {toDoArray.map((ii, index) => {

                        return (
                            <tr key={index}>
                                <td>{ii.id}</td>
                                <td>{ii.dateOfSend}</td>
                                <td>{ii.forecastStart} - {ii.forecastEnd}</td>
                                <td><button type='button' onClick={() => toDelete(ii.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

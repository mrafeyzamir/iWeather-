import React from 'react';

export default function Info(props) {
  
// converting kelvin to celsius
    function kTOc(k) {
        return (k - 273.16).toFixed(2) + "° C";
    }
//converting to standard time 
function timeConverter(UNIX_timestamp) {
  const date = new Date(UNIX_timestamp * 1000); // Convert UNIX timestamp to milliseconds
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}
    // Check if props.data is null or undefined before accessing its properties
    if (!props.data) {
        return <div className="d-flex justify-content-center mt-5 table-bordered">
        <table className="table" style={{ width: '50%' }}>
            <thead>
                <tr>
                    <th className='text-center'><h4>Please Search weather</h4></th>
                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center'>No data searched yet</td>
                    </tr>
                </tbody>
                </table>
                </div>

    }


    const { name, main,sys,weather } = props.data;
    

    return (
        <div>
           <div className="d-flex justify-content-center mt-5 table-bordered">
    <table className="table" style={{ width: '50%' }}>
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">
                <h4>{name} ({main && main.temp !== undefined ? kTOc(main.temp) : 'N/A'} ) <i>{weather[0].description}</i> </h4>
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" /> 

                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"></th>
                <th>Feels like</th>
                <td>({main && main.temp !== undefined ? kTOc(main.feels_like) : 'N/A'} )</td>
                
            </tr>
            <tr>
                <th scope="row"></th>
                <th>Min Temp</th>
                <td>({main && main.temp !== undefined ? kTOc(main.temp_min) : 'N/A'} )</td>
                
            </tr>
            <tr>
                <th scope="row"></th>
                <th>Max Temp</th>
                <td>({main && main.temp !== undefined ? kTOc(main.temp_max) : 'N/A'} )</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row"></th>
                <th>Sun Rise</th>
                <td>({sys && sys.sunrise !== undefined ? timeConverter(sys.sunrise) : 'N/A'} )</td>
            </tr>
            <tr>
                <th scope="row"></th>
                <th>Sun Set</th>
                <td>({sys && sys.sunrise !== undefined ? timeConverter(sys.sunset) : 'N/A'} )</td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    );
}

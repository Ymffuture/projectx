import React from "react";

const Weather = ({ weatherData }) => {
  console.table(weatherData);

  const convertTimezone = (timezoneOffset) => {
    const date = new Date((new Date()).getTime() + timezoneOffset * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return (
    <div>
      {weatherData.weather ? (
        <div className=" w-[800px] h-[450px] bg-gradient-to-l from-red-200 shadow-lg rounded-xl m-auto relative px-6 top-[10%] text-center sm:bg-slate-350 sm:w-[600px]" >
          <div className="flex justify-between w-full ">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
          <div>

            <p className="text-4xl">
              {weatherData.name},
              {weatherData.sys.country}
            </p>
            <p className='text-2xl'>
              {weatherData.weather[0].description}
            </p>
            <div>
            <h1 className="text-5xl text-fuchsia-800 w-2 flex bold text-center rounded font-semibold">
                {weatherData.main.temp.toFixed()} °C
              </h1>
            </div>
          </div>
          
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
            <div className="w-3 h-1 flex bg-yellow-500 absolute inset-x-[650px] inset-y-[390px] border-l-2 m-1 text-orange-800 sm:inset-x-[150px] inset-y-[320px] text-zinc-300">
            longitude:{weatherData.coord.lon} latitude:{weatherData.coord.lon}
          
            </div>
           
            <div className='relative bottom-[-10px] bg-black rounded-full animate-bounce'>
              <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='weather icon' className='w-32 h-32'/>
             
            </div>
           
            {weatherData.name !== true ? (
              <div className='flex-col justify-evently gap-y-4 my-[10%] flex-wrap mx-auto text-8xs bg-white p-4 flex left: 25px relative -inset-y-3  -inset-x-[50px]'>
                <div classNme='flex jusify-between gap-x-8'>
                  <p>Feels Like</p>
                  <p className="font-bold w-20">
                    {weatherData.main.feels_like.toFixed()} °C
                  </p>  
                  <div className="w-3 h-1  bg-yellow-500 border-radius: 0.375rem"></div>  
                </div>
                <div classNme='flex jusify-between gap-x-8'>
                  <p>Humidity</p>
                  <p className="font-bold w-20">
                    {weatherData.main.humidity} %
                  </p> 
                  <div className="w-3 h-1  bg-yellow-500 border-radius: 0.375rem"></div>     
                </div>
                <div classNme='flex jusify-between gap-x-8'>
                  <p>Wind Speed</p>
                  <p className="font-bold w-20">
                    {weatherData.wind.speed.toFixed(2)} kmh
                  </p>    
                  <div className="w-3 h-1  bg-yellow-500 border-radius: 0.375rem"></div>  
                </div>
                <div classNme='flex jusify-between gap-x-8'>
                  <p>Pressure</p>
                  <p className="font-bold w-20">
                    {weatherData.main.pressure} hPa
                  </p>
                </div>

                <div className="absolute left-[150px] top-20 sm:left-[120px]">
      <div className='flex justify-between gap-x-4'>
        <p>Time:</p>
        <p className="font-bold w-20">
          {convertTimezone(weatherData.timezone)} n/a
        </p>
      </div>
    </div>


              </div>
            ):`${weatherData.clouds.all}`}
            </div>
          </div>
        </div>
      ) : 'No results to dispaly here.'} 
    </div>
  );
};

export default Weather;

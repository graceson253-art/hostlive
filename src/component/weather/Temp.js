import React,{useState,useEffect} from 'react';
import './style.css';

function Temp() {

    const [first, setfirst] = useState("goa");
    const [ApiInfo, setApiInfo] = useState({})

    const getWeatherInfo = async() =>{

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${first}&units=metric&appid=b8f49ce3d2aa4e8cd6a26aac3aa823df`
            let data  = await fetch(url);
            let res =  await data.json(); 

            const {temp,humidity} = res.main; 

            const{speed,gust} = res.wind;
            const {name} = res;

            const {description,main} = res.weather[0]

       

            const weatherInfo = {
                temp,speed,name,description,main,humidity,gust

            }
            setApiInfo(weatherInfo);


            console.log(res)

            
        } catch (error) {
            console.log(error);
            
        }
       


    }


    useEffect(() => {
        getWeatherInfo();
        
      
    
    }, [])


    console.log(ApiInfo)
    



    return (
        <div>

            


            <div className=" container-fluid">
                <div className =" row form-outline">
                    <div>
                    <input placeholder='Enter City Name' value={first}  onChange={(e)=>setfirst(e.target.value)} type="search" id="formControlLg" class="form-control form-control-lg" />

                    </div>
                    <div>
                    <button type="button"  onClick={getWeatherInfo} class="btn btn-dark">Submit</button>

                    </div>
                   
                </div>
                

                <div  className="row justify-content-center space">

                    <div className="col-30 col-md-16 col-sm-20 col-xs-20">
                        <div className="card p-4">
                            <div className="">
                                <h3 className="flex-grow-1">{ApiInfo.name}</h3>
                                <h6>{ new Date().toString()}</h6>
                            </div>
                            <div className="d-flex flex-column temp mt-5 mb-3">
                                <h1 className="mb-0 font-weight-bold" id="heading"> {ApiInfo.temp}° C </h1> <span className="small grey">{ApiInfo.description}</span>
                            </div>
                            <div className="d-flex">
                                <div className="temp-details flex-grow-1">
                                    <p className="my-1"> <img src="https://i.imgur.com/B9kqOzp.png" height="17px" /> <span> {ApiInfo.speed}km/h </span> </p>
                                    <p className="my-1"> <i className="fa fa-tint mr-2" aria-hidden="true"></i> <span> {ApiInfo.humidity}% </span> </p>
                                    <p className="my-1"> <img src="https://i.imgur.com/wGSJ8C5.png" height="17px" /> <span> {ApiInfo.gust}h </span> </p>
                                </div>
                                <div> <img src="https://i.imgur.com/Qw7npIg.png" width="100px" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Temp
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Search  from './Search';
import Info  from './Info';
import axios from 'axios';

export class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lat:"",
         long:"",
         city:"",
         weatherData:null,
         
         
      }
    }
    changeHandler = (event) => {
       const name=event.target.name;
       if(name==="city"){
        this.setState({
           city:event.target.value
        })
       
        }
        else if(name==="long"){
            this.setState({
                long:event.target.value
            })
           }
        else if(name==="lat"){
            this.setState({
                lat:event.target.value
            })
           }
        }
        searchCityHandler=(event) => {
          const city=this.state.city;
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=3bbe319d523556489c1e56887dbcd8c9`)
                              .then(response => {
                                this.setState({ city: response.data.name , weatherData: response.data });
                                  console.log(response.data); // Logging the response data
                                  // Update weatherData state with response data
                                  
                              })
                              .catch(error => {
                                  console.log(error); // Log any errors
                              });
        }
        searchBarHandler = (event) => {
          const lat=this.state.lat;
          const long=this.state.long;
          axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3bbe319d523556489c1e56887dbcd8c9`)
                              .then(response => {
                                this.setState({ city: response.data.name , weatherData: response.data });
                                  console.log(response.data); // Logging the response data
                                  // Update weatherData state with response data
                                  
                              })
                              .catch(error => {
                                  console.log(error); // Log any errors
                              });
      }
        //responsible for serch through location button 
        locationHandler = () => {
          this.setState({
              lat: "",
              long: "",
              city: "",
              weatherData: null,
          });
      // fetching users current location
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                  (res) => {
                      const lat = res.coords.latitude;
                      const long = res.coords.longitude;
                      this.setState({
                          lat: lat,
                          long: long,
                      }, () => {
                        // api responsible for weather data fetching 
                          axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3bbe319d523556489c1e56887dbcd8c9`)
                              .then(response => {
                                this.setState({ city: response.data.name , weatherData: response.data });
                                  console.log(response.data); // Logging the response data
                                  // Update weatherData state with response data
                                  
                              })
                              .catch(error => {
                                  console.log(error); // Log any errors
                              });
                      });
                  },
                  (err) => {
                      console.log(err);
                  }
              );
          }
      }
      
      
    
  render() {
    return (
      <div>
          <div className="card">
  <div className="card-header">
    
  </div>
  <div className="card-body">
    <h5 className="card-title text-center">Welcome to iWeather Application</h5>
    <p className="card-text text-center">Search your city (region/area) weather by city name or Cordinates.</p>
    
  </div>
 
</div>
<div className="card mt-4">
  <div className="card-header">
<Search  lat={this.state.lat}
    long={this.state.long}
    city={this.state.city}
    weather={this.state.weatherData}
    change={this.changeHandler} 
    location={this.locationHandler}
    search={this.searchBarHandler}
    searchCity={this.searchCityHandler}
    >
   
</Search>

</div>
</div>
<Info data={this.state.weatherData}/>
      </div>
    )
  }
}

export default Home

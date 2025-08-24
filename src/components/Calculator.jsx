import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const [weight,setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [bmi, setBmi] = useState("")
    const [message, setMessage] = useState("")

    const calcBmi = (event)=>{
        event.preventDefault()
        if(!weight || !height){
            alert("Please enter the details!")
            return
        }
        let w = Number(weight)
        let h = Number(height)
        
        let ans= (w)/(h * h)
        ans = ans.toFixed(2)
        setBmi(ans)

        if (ans < 18.5) {
            setMessage("You are underweight")
        } else if (ans >= 18.5 && ans < 24.9) {
            setMessage("You have a normal weight")
        } else if (ans >= 25 && ans < 29.9) {
            setMessage("You are overweight")
        } else {
            setMessage("You are obese")
        }
    }
    const refresh = (event)=>{
        event.preventDefault()
        setWeight("")
        setHeight("")
        setBmi("")
        setMessage("")
    }
  return (
    <div className='container'>
      <h1>BMI calculator</h1>
      <div id="form">
        <form>
            <label>
                <span>Weight: </span>
                <input onChange={(event)=>{
                    setWeight(event.target.value)
                }} type='number' placeholder='Enter weight' value={weight}/>
            </label>
            <label>
                <span>Height: </span>
                <input onChange={(event)=>{
                    setHeight(event.target.value)
                }} type='number' placeholder='Enter height' value={height}/>
            </label>
            <div id="btns">
                <button onClick={(event)=>{
                calcBmi(event)
            }} type='button'>Submit</button>
                <button onClick={(event)=>{
                refresh(event)
            }} type='button'>Reload</button>
            </div>
        </form>
      </div>
      <div id="message">
        <h4>Your BMI is: {bmi}</h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Calculator

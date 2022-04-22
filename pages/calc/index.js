import React, {useState} from 'react'
import tableStyles from './calc.module.css'


export default function Calculator() {
    const [inputs, setInputs] = useState({opcode: "+"})   
    const [result, setResult] = useState(``)
    const { num1, num2, opcode} = inputs                 // 구조분해

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target   // key 값으로 받는다.
        setInputs({                        // 오버라딩
            ...inputs,                     // 스프레드 연산자. 넣으면 오버로딩 되서 다 살아있다.  ... 빼면 오버라이딩 되서 이전꺼 지워진다.  
            [name]: value
        })
    }

    const onClick = async (e) => {
        e.preventDefault()
        switch (opcode){  // 이러한 알고리즘 들이 중요하다.
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" :
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
            default :
                console.log("Default")
        }
    }

    return (
    <form >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th><h2>계산기</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
        <td>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> 

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />

            <button onClick={onClick}>계산하기</button></td>
            </tr>
            <tr><td>결과 : {result}</td></tr>
                </tbody>
            </table>
        </form>)
}
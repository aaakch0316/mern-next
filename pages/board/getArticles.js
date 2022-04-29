
import axios from 'axios';
import {useEffect, useState} from 'react';
import tableStyles from './styles/table.module.css'
import { useDispatch } from 'react-redux';
import { boardActions } from '../../redux/reducers/boardReducer.js'

export default function GetArticles() {
    const dispatch = useDispatch()

    const columns = [
        "제목",
        "이름",
        "팀이름",
        "주제",
        "삭제"
    ];
    const [data, setData] = useState([])

    useEffect(() => { // 시작하자마자 db꺼 가져오기
        axios.get('http://localhost:5000/board/getBoards')
        .then(res=> {
            setData(res.data)
        }).catch(err => {alert('ERROR')})
    }, [])

    const handledelete = (data) => {
        let del_id = {boardid: data}
        dispatch(boardActions.delBoardRequest(del_id))
        axios.get('http://localhost:5000/board/getBoards')
        .then(res=> {
            setData(res.data)
        }).catch(err => {alert('ERROR')})
        // dispatch(boardActions.addBoardRequest(inputs))

    }

    return (
        <> < table className = {tableStyles.table} > <thead>
            <tr>
                <th colSpan={5}>
                    <h1>게시판</h1>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                {columns.map( (column, index)=> {
                    return <td key={index}>{column}</td>
                })}
            </tr>
            { data.length ==0 
            ? <tr> <td colSpan={6}>데이터가 없습니다.</td> </tr> 
            : data?.map((board) => { return (
                <tr key={board._id}>
                {/* <tr key={board.userid}> */}
                    {/* <td>{user.userid}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td> */}
                    <td>{board.title}</td>
                    <td>{board.name}</td>
                    <td>{board.teamId}</td>
                    <td>{board.subject}</td>
                    <td><button onClick={(e)=>handledelete(board._id, e)}>삭제</button></td>
                </tr>)
            })  }

        </tbody>
    </table>
</>
    )
}
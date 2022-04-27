import React, {useState, useEffect} from 'react'  // 경량화로 필요한걸로 쓴다.
import tableStyles from './styles/table.module.css' // css는 이걸로 퉁치게 만들어놨다.

export default function Profile(){
    const [profile, setProfile] = useState({})
    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser')
        const user = JSON.parse(loginUser)
        setProfile(user)
    }, [])
    return (
        <>
            <form >
                <table className={tableStyles.table}>
                    <thead>
                        <tr>
                            <th colSpan={2}><h1>회원 프로필</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>사용자ID</b></td>
                            <td><h3>{profile.userid}</h3></td>
                        </tr>
                        <tr>
                            <td htmlFor=""><b>이메일</b></td>
                            <td><h3>{profile.email}</h3></td>
                        </tr>

                        <tr>
                            <td htmlFor=""><b>이름</b></td>
                            <td><h3>{profile.name}</h3></td>
                        </tr>

                        <tr>
                            <td><b>전화번호</b></td>
                            <td><h3>{profile.phone}</h3></td>
                        </tr>

                        <tr>
                            <td><b>생년월일</b></td>
                            <td><h3>{profile.birth}</h3></td>
                        </tr>
                        <tr>
                            <td><b>주소</b></td>
                            <td><h3>{profile.address}</h3></td>
                        </tr>
                        
                    </tbody>
                </table>
            </form>
        </>
    )
}

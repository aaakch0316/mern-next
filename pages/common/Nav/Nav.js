// import Link from "next/link";
// import styles from "./Nav.module.css";

// export default function Nav(){
//   return (
//     <nav className={styles.nav}>
//       <ul>
//         <li className={styles.li}> <Link href='/'>메인</Link> </li>
//         <li className={styles.li}> <Link href='/counter'>카운터</Link> </li>
//         <li className={styles.li}> <Link href='/calc'>계산기</Link> </li>
//         <li className={styles.li}> <Link href='/bmi'>BMI</Link> </li>
//         <li className={styles.li}> <Link href='/todo/todo'>투두리스트</Link> </li>
//         <li className={styles.li}> <Link href='/board/board'>게시글등록</Link> </li>
//         {/* <li className={styles.li}> <Link href='/board/board-list'>게시글목록</Link> </li> */}
//         <li className={styles.li}> <Link href='/board'>게시글목록</Link> </li>
//         <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>
//         <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
//         <li className={styles.li}> <Link href='/user/user-list'>사용자목록</Link> </li>
//       </ul>
//     </nav>
//   );
// }


import React,{useState, useEffect} from 'react'
import tableStyles from "./Nav.module.css";
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Nav(){

  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])

  const basicUrls = ["/counter","/calc","/bmi"]
  const basicSubTitle = ["카운터","계산기","BMI"]


  useEffect(() => {
    const loginUser = localStorage.getItem('loginUser')
    if(loginUser === null){  // ===은 타입 체크도 한다.
      setUserUrls(["/user/join","/user/login"])
      setUserSubTitle(["회원가입","로그인"])
    }else{
      setUserUrls(["/user/logout","/user/profile","/user/modifyUser","/user/withdrawUser","/user/getUsers"])
      setUserSubTitle(["로그아웃","프로필","회원수정","회원탈퇴","회원목록"])
    }
  }, [])


  return (
    <table className={tableStyles.table}>
      <tbody>
        <tr>
            <td>
              <SubMenu title={"기본"} urls={basicUrls} subTitles={basicSubTitle}/>
              <SubMenu title={"사용자"} urls={userUrls} subTitles={userSubTitle}/>
            </td>
        </tr>
      </tbody>
    </table>
  );
}
const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {props.urls.map(function(url, i){
            return <MenuItem onClick={handleClose} key={i}><Link href={url} >{props.subTitles[i]}</Link></MenuItem>
          })}
      </Menu></>
}
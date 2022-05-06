import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch } from 'react-redux'
import { boardActions } from '../../redux/reducers/boardReducer.js'

const updateArticle = () => {
    const dispatch = useDispatch()

    const router = useRouter()
    // {"id":"626b99f25fb78404cb2d276c","title":"배고프다","name":"강창현","teamId":"K09","subject":"삶의 늪에서~"}
    const [updateData, setUpdateData] = useState({ ...router.query })

    const [title, setTitle] = useState(router.query.title)
    const [name, setName] = useState(router.query.name)
    const [teamId, setTeamId] = useState(router.query.teamId)
    const [subject, setSubject] = useState(router.query.subject)
    const onChanget = event => {setTitle(event.target.value)};
    const onChangen = event => {setName(event.target.value)};
    const onChangei = event => {setTeamId(event.target.value)};
    const onChanges = event => {
        // console.log(event.currentTarget.value)
        setSubject(event.target.value)
    };
    // const {title} = router.query
    const onSubmit = () => {
        console.log(
            title,
            name,
            teamId,
            subject
        )
        dispatch(boardActions.updateBoardRequest({
            id: router.query.id,
            title: title,
            name: name,
            teamId: teamId,
            subject:subject
        }))

    }

    return (
        <div>
            {/* {JSON.stringify(updateData)} */}
        {/* {JSON.stringify(titleRef)} */}
            <label for="title">title :</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={onChanget}
            />
            <label for="name">name :</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={onChangen}
            />
            <label for="teamId">teamId :</label>
            <input
                type="text"
                name="teamId"
                value={teamId}
                onChange={onChangei}
            />
            <label for="subject">subject :</label>
            <input
                type="text"
                name="subject"
                value={subject}
                onChange={onChanges}
            />
            <button onClick={onSubmit}>수정</button>
        
        </div>
        // <div>hi</div>
    )
}

export default updateArticle;
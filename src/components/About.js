import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorklog } from "../asyncAction/customers";

export function About() {
    const dispatch = useDispatch();
    const worklog = useSelector(state => state.worklog.worklog);
    const id = window.location.hash;
    var res = id.split('/about/#').pop();
    console.log(res);
    useEffect(() => {
        dispatch(fetchWorklog())
    }, []);
    let flag = 0;
    let usersInfo = [];
    worklog.map(worklogItem => {
        flag = 0;
        if (+ res === worklogItem.employee_id) {
            worklog.map(morklogElse => {
                if (new Date(worklogItem.to) > new Date(morklogElse.from) && new Date(worklogItem.to) < new Date(morklogElse.to)) {
                    flag++;
                }
            })
            usersInfo.push(<tr className={flag < 3 ? "red" : ""} key={worklogItem.id}><td>{worklogItem.id}</td> <td>{worklogItem.from}</td> <td>{worklogItem.to}</td> </tr>)
        }
    }
    )
    return (
        <div className="App">
            {
                worklog.length > 0 ?
                    <table>
                        <tr>
                            <td>Id</td>
                            <td>Когда ушёл</td>
                            <td>Когда пришёл</td>
                        </tr>
                        {
                            usersInfo
                        }
                    </table>
                    :
                    <div>
                        Клиенты отсутствуют
                    </div>
            }
        </div >
    );
}
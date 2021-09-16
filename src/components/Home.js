import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCustomers, fetchWorklog } from "../asyncAction/customers";
import { addCustomerAction, getCustomerAction } from "../store/customerReducer";

export function Home() {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);


    useEffect(() => {
        dispatch(fetchCustomers())
    }, []);
    customers.sort((a, b) => a.lastName > b.lastName ? 1 : -1)
    return (
        <div className="App">
            {
                customers.length > 0 ?
                    <table>
                        <tr>
                            <td>Id</td>
                            <td>ФИО</td>
                            <td>День рождения</td>
                            <td>Телефон</td>
                        </tr>

                        {
                            customers.map(customer =>
                                <tr >
                                    <td>{customer.id}</td>
                                    <Link key={customer.id} to={`/about/#${customer.id}`}>
                                        <td>{customer.lastName}
                                            {customer.firstName}
                                            {customer.middleName}</td>
                                    </Link>
                                    <td>{customer.birthDate}</td>
                                    <td>{customer.phone}</td>
                                </tr>
                            )}
                    </table>
                    :
                    <div>
                        Клиенты отсутствуют
                    </div>
            }
        </div>
    );
}


import Table from "./components/table";
import getUsers from '../actions/getUsers';
import CustomersHeader from './components/header';

const AdminCustomers = async () => {

    const users  = await getUsers();

    return(
        <div
            className="
                bg-bg-base
            "
        >
            
            <CustomersHeader />

            <div className="lg:px-12">
                <Table items={users!}/>
            </div>
        </div>
    )
}

export default AdminCustomers;
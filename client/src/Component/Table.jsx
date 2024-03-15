import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'
import axios from 'axios';
// import Table from 'react-bootstrap/Table';

function TableData() {
    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchName, setSearchName] = useState('');
    const itemsPerPage = 5;
    const [sortByName, setSortByName] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/fetch')
            .then(response => {
                setUser(response.data);  // Update state with fetched data
            })
            .catch(err => console.log("error in table react"));
        console.log(user);
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    var currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

     // Filter items based on search criteria
     let filteredItems = user.filter(item => {
        return (
            item.name.toLowerCase().includes(searchName.toLowerCase()) ||
            item.emai.includes(searchName.toLowerCase()) ||
            item.number.toString().includes(searchName)
           

      
        );
        
    });
    
    const inputchange=((e)=>
    {
        setSearchName(e.target.value);
        // currentItems=filteredItems
    });

    if (sortByName) {
        filteredItems = filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortByName==false) {
        filteredItems = filteredItems.sort((a, b) => b.name.localeCompare(a.name));
    }

    return (
        <>
            {/* <h1>hello {user[0].name}</h1> */}
            <div>
                <h3>Search Name</h3>
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchName}
                    onChange={inputchange}
                />
           <button onClick={() => setSortByName(true)}>
                    Sort Asc
                </button>

                <button onClick={() => setSortByName(false)}>
                    Sort Desc
                </button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        //for 1d valuees
                        // perDetail.map((detail, index) => (

                        //     <tr key={index} scope='row'>
                        //         <td>{index + 1}</td>
                        //         <td>{perDetail[index][0].membership}</td>
                        //         <td>{perDetail[index].plan}</td>
                        //         <td>{perDetail[index].Number}</td>
                        //         <td> <button onClick={() => handleEdit(index)} >Edit</button> </td>
                        //         <td><button onClick={() => handleRemove(index)} >Delete</button> </td>
                        //     </tr>
                        // ))


                        //for 2d values
                        filteredItems.slice(indexOfFirstItem, indexOfLastItem).map((detail, index) => {


                            return (

                                <tr key={index} scope='row'>
                                    {/* <td>{index + 1}</td> */}
                                    <td>{detail.name}</td>
                                    <td>{detail.emai}</td>
                                    <td>{detail.number}</td>
                                    {/* <td> <button onClick={() => {  handleEdit(detail,index);}} >Edit</button> </td>
                                    <td><button onClick={() => handleRemove(index)} >Delete</button> </td> */}
                                </tr>

                            )
                        })

                    }


                </tbody>
            </table>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= user.length}>Next</button>
            </div>



        </>
    );
}

export default TableData;
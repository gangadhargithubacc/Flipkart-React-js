import React from 'react';
function Search() {
    let studentdata = [{ name: 'ram', rollno: '23',sec:'A' }, { name: 'earth', rollno: '24',sec:'B' },{name:'water',rollno:'25',sec:'C'}];
    let sno=1;
    return (
        <div className='col-md-4' >
            <table className='table table-bordered' style={{width:'90%',borderWidth:'10px'}}>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        studentdata.map((e,i)=>{
                            return(
                                <tr>
                                    <td>{sno++}</td>
                                    <td>{e.name}</td>
                                    <td>{e.rollno}</td>
                                    <td>{e.sec}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Search;
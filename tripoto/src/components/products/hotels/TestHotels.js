import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import "./App.css";

const LIMIT = 10;

const totalPagesCalculator = (total, limit) => {
  const pages = [];
  for(let x = 1; x<= parseInt(total)/limit; x++){
    pages.push(x);
  }

  return pages;
}

const App = () => {
const [users, setUsers] = useState([]);
const [activePage, setActivePage] = useState(1);
const [totalUsers, setTotalUsers] = useState(0);

  useMemo(() => {
    axios.get('http://localhost:4001/api/users/all', {
      params: {
        page: activePage,
        size: LIMIT
      }
    }).then(({data}) => {
      setUsers(data.records);
      setTotalUsers(data.total);
    }).catch(error => {
      console.log(error.response);
    })
  }, [activePage])


  return (
    <div className="app">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {activePage !== 1 && <li className="page-item" onClick={() => setActivePage(activePage - 1)}>
            <a className="page-link" href="javascript:void(null)">Previous</a>
          </li>}
         {totalPagesCalculator(totalUsers, LIMIT).map(page => (
            <li className={`page-item ${activePage === page ? 'active' : ''}`} key={page}>
              <a 
              className="page-link" href="javascript:void(null)" 
              onClick={() => setActivePage(page)}
              >{page}</a>
            </li>
         ))}
        {activePage !== totalPagesCalculator(totalUsers, LIMIT).length &&  <li className="page-item" onClick={() => setActivePage(activePage + 1)}>
            <a className="page-link" href="javascript:void(null)">Next</a>
          </li>}
        </ul>
      </nav>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
         {users.map(user => (
            <tr key={user._id}>
              <td>{user.firstName + ' ' + user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
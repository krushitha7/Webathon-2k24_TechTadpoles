import React from 'react'
import { NavLink, Outlet, useNavigate,Link } from 'react-router-dom'



function UserProfile() {

  let navigate=useNavigate()

  return (
    <div>
      <div className="d-flex flex-row mb-3 justify-content-center">
        <div className="p-2 border-1 " >
          <div className="card text-light" style={{height:'400px',width:'300px',backgroundImage:`url(https://burst.shopifycdn.com/photos/person-holds-their-foot-behind-them-in-a-yoga-pose.jpg?width=1000&format=pjpg&exif=0&iptc=0)`}}>
            <h1>Know your Physical health status</h1>
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem ad et culpa. Sapiente deleniti enim pariatur voluptates est. Qui.</p>

            </div>
          </div>
        </div>
        <div className="p-2 border-1 ">
        <div className="card text-light" style={{height:'400px',width:'300px',backgroundImage:`url(https://blog.energeticnutrition.com/wp-content/uploads/iStock_000007248761_Small-350x350.jpg)`}}>
          <h1>Know your Mental health status</h1>
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus quibusdam magnam dolorem perferendis, aut ducimus non quidem blanditiis vel.</p>
                <Link className="nav-link" to="/mental-health">Click Here</Link>
            </div>
          </div>
        </div>
        <div className="p-2 border-1 ">
        <div className="card text-light" style={{height:'400px',width:'300px',backgroundImage:`url(https://as1.ftcdn.net/v2/jpg/05/07/64/68/1000_F_507646899_LyyV5ECJ9OwiwHRogOqTeCUMub67Ol6P.jpg)`}}>
          <h1>Know your Emotional health status</h1>
            <div className="card-body">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, ipsa? Labore, vel consequuntur hic debitis placeat dignissimos quaerat corporis praesentium voluptatum porro deleniti impedit nobis qui. Quisquam, repellendus esse. Quis?</p>
            </div>
          </div>
        </div>
        
      </div>

      <Outlet />
    </div>
  )
}

export default UserProfile
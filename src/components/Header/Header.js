import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
const Header = (props) => {
	console.log(props)
	return (
        <nav class="navbar navbar-expand-md navbar-dark bg-light  navbarclass" >
	<div class="container-fluid">
		<a class="navbar-brand"  style={{color:"white"}} href="/">{/*<img class="logo" src={logo} alt="logo" />*/}</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon" ></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto" id="nav">
			<li class="nav-item">
				{props.id==="1"?<Link  class="nav-link" style={{color:"red"}} to="/">Home</Link>:<Link  class="nav-link" style={{color:"white"}} to="/">Home</Link>}
			</li>


			<li class="nav-item">
			{props.id==="4"?<Link  class="nav-link" style={{color:"red"}} to="/exchangerates">Exchange Rates</Link>:<Link  class="nav-link" style={{color:"white"}} to="/exchangerates">Exchange Rates</Link>}
			</li>
			
			<li class="nav-item">
			{props.id==="5"?<Link  class="nav-link" style={{color:"red"}} to="/derivatives">Derivatives</Link>:<Link  class="nav-link" style={{color:"white"}} to="/derivatives">Derivatives</Link>}
			</li>
			<li class="nav-item">
			{props.id==="6"?<Link  class="nav-link" style={{color:"red"}} to="/search">Search</Link>:<Link  class="nav-link" style={{color:"white"}} to="/search">Search</Link>}
			</li>
		</ul>
	</div>
</div>
</nav>
    );
}

export default Header;
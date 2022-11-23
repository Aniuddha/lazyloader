import React, { useState } from "react";
import './App.css';
import InfiniteScroll from "react-infinite-scroll-component";


const App=()=>{
	const [dataSource, setDataSource] = useState([])
    const [page,setpage]=useState(5)
	const [name,setname]=useState("Click Here to see All Profiles")
	const datafetch = () =>{
		setTimeout(() => {
			setname("List Of Profiles")
		}, 300);
		
				fetch(
		`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${page}`)
					.then((res) => res.json())
					.then((json) => {
						
						setDataSource(json)
						// console.log(dataSource)
					})
	}
	  
	const fetchmoredata = () =>{
		var temp=page
		temp=temp+5
		// console.log(temp)
		setpage(temp)
		fetch(
`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${temp}`)
			.then((res) => res.json())
			.then((json) => {
				
				setDataSource(json)
				// console.log(json)
			})
}

	return (
		<div className="App">

			<button class="btn btn-primary btn-lg m-3" onClick={()=>datafetch()}> {name}</button>
			
			<InfiniteScroll dataLength={dataSource.length} next={fetchmoredata} hasMore={true}>
				
				{
				dataSource.map((item,index)=>{
					return <div class="container align-items-center">

					           <div class="card card-center m-2 bg-light">
					           <div class="row g-0">
					             <div class="col-md-4">
					               <img class="lazy" src={`https:avatars.dicebear.com/api/adventurer/${item.id}.svg`} loading="lazy" alt="Profile" width={100} height={100}/>
					             </div>
					             <div class="col-md-8  ">
					               <div class="card-body  p-1">
					                 <h5 class="card-title">{item.title}</h5>
					                 <p class="card-text ">{item.body}</p>
									
					               </div>
					             </div>
								
					           </div>
					         </div>
					         </div>
				})}
			</InfiniteScroll>
			</div>
	)
}

export default App;



// class App extends React.Component {

// 	// Constructor
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code
// 	componentDidMount() {
// 		fetch(
// "https://jsonplaceholder.typicode.com/posts")
// 			.then((res) => res.json())
// 			.then((json) => {
// 				this.setState({
// 					items: json,
// 					DataisLoaded: true
// 				});
// 			})
// 	}
// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded) return <div>
// 			<h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "App">
//       <div class="d-grid gap-2 col-6 mx-auto ">
// 			<button type="button" class="btn btn-lg btn-primary m-2 " disabled><h1>Profile</h1></button> 
//       </div>
//       {
// 				items.map((item) => (
//           <div class="container align-items-center">
//           <div class="card card-center m-2 bg-light">
//           <div class="row g-0">
//             <div class="col-md-4">
//               <img class="lazy" src={`https://avatars.dicebear.com/api/adventurer/${item.id}.svg`} loading="lazy" alt="Profile" width={100} height={100}/>
//             </div>
//             <div class="col-md-8  ">
//               <div class="card-body  p-1">
//                 <h5 class="card-title">{item.title}</h5>
//                 <p class="card-text bg-primary">{item.body}</p>
                
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
// 				))
// 			}
// 		</div>
// 	);
// }
// }

// export default App;


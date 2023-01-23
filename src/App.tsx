/** @format */
import "./App.css";
//import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import TodoForm from "./components/TodoForm.ts/TodoForm";
import TasksList from "./components/TasksList/TasksList";

function App() {
	return (
		<>
			{/*<div className=" w-full min-h-screen bg-blue-800 z-0 fixed"></div>*/}
			<div
				className="card bg-blue-800"
				style={{
					minHeight: "800px",
					minWidth: "800px",
				}}
			>
				<div
					className="custom-card-container flex flex-column  card-container justify-content-center bg-white   align-items-center mx-auto border-round-sm"
					//style={{
					//	minHeight: "300px",
					//	transform: "translateY(50%)",
					//}}
				>
					<p className="text-2xl font-bold ">TODO LIST</p>
					<TodoForm />
					<TasksList />
				</div>
			</div>
		</>
	);
}

export default App;

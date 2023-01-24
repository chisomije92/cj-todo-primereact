/** @format */
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import TodoForm from "./components/TodoForm.ts/TodoForm";
import TasksList from "./components/TasksList/TasksList";
import { useState } from "react";
import { Task } from "./components/model/task-model";

function App() {
	const [input, setInput] = useState<Task | null>(null);
	return (
		<>
			<div
				className="card bg-blue-800"
				style={{
					minHeight: "800px",
					minWidth: "800px",
				}}
			>
				<div className="custom-card-container flex flex-column  card-container justify-content-center bg-white   align-items-center mx-auto border-round-sm">
					<p className="text-2xl font-bold ">TODO LIST</p>
					<TodoForm
						passValue={val => {
							setInput({
								id: Date.now(),
								completed: false,
								todo: val,
							});
							console.log(val);
						}}
					/>
					<TasksList task={input} />
				</div>
			</div>
		</>
	);
}

export default App;

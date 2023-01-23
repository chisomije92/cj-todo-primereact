/** @format */

import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { TasksService } from "../services/TasksService";
import { Button } from "primereact/button";

function TodoForm() {
	const [value, setValue] = useState<string>("");
	const tasksService = new TasksService();
	//useEffect(() => {
	//	tasksService.getTasks().then(data => console.log(data.todos));
	//}, []);

	return (
		<div className="flex flex-column md:flex-row">
			{/*<InputText value={value} onChange={e => setValue(e.target.value)} />*/}
			{/*<p className="text-4xl">TodoForm</p>*/}

			<InputText
				type="text"
				className="block mb-2 w-15rem pl-3 text-color"
				placeholder="Input Task"
			/>
			{/*<span>
				<i
					className=" pi pi-plus-circle "
					style={{
						fontSize: "2.4em",

						cursor: "pointer",
						color: "black",
					}}
				></i>
			</span>*/}
			<Button
				label="Add Task"
				icon="pi pi-plus"
				className="p-button-secondary ml-1 h-3rem p-1"
			/>
		</div>
	);
}

export default TodoForm;

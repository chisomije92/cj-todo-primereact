/** @format */

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";

const TodoForm: React.FC<{
	passValue: (value: string) => void;
}> = ({ passValue }) => {
	const [value, setValue] = useState<string>("");

	function addTask(value: string) {
		passValue(value);
	}

	return (
		<div className="flex flex-column md:flex-row">
			<InputText
				type="text"
				className="block mb-2 w-15rem pl-3 text-color"
				placeholder="Input Task"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<Button
				label="Add Task"
				icon="pi pi-plus"
				className="p-button-secondary ml-1 h-3rem p-1"
				onClick={e => {
					addTask(value);
					setValue("");
				}}
			/>
		</div>
	);
};

export default TodoForm;

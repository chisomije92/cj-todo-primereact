/** @format */

import React, { useEffect, useState } from "react";
import { OrderList } from "primereact/orderlist";
import { TasksService } from "../services/TasksService";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Tooltip } from "primereact/tooltip";

function TasksList() {
	const [products, setProducts] = useState([]);
	const [isClicked, setIsClicked] = useState(false);
	const [count, setCount] = useState(0);
	const tasksService = new TasksService();

	const leftContents = (
		<React.Fragment>
			<Button label="New" icon="pi pi-plus" className="mr-2" />
			<Button label="Upload" icon="pi pi-upload" className="p-button-success" />
			<i className="pi pi-bars p-toolbar-separator mr-2" />
			{/*<SplitButton
				label="Save"
				icon="pi pi-check"
				model={items}
				className="p-button-warning"
			></SplitButton>*/}
		</React.Fragment>
	);

	const rightContents = (
		<React.Fragment>
			<Button icon="pi pi-times" className="p-button-danger" />
		</React.Fragment>
	);
	//const tasks = [
	//	{
	//		id: 1,
	//		todo: "Watch Movies",
	//	},
	//	{
	//		id: 2,
	//		todo: "Read books",
	//	},
	//	{
	//		id: 3,
	//		todo: "Eat rice",
	//	},
	//];
	useEffect(() => {
		tasksService.getTasks().then(data => setProducts(data.todos));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	const itemTemplate = (item: any) => {
		return (
			<div
				className="product-item flex flex-column justify-content-between md:flex-row font-bold text-lg text-0 text-black-alpha-90 overflow-hidden w-27rem"
				onClick={e => setIsClicked(true)}
				style={{
					//width: "400px",
					background: "lightblue",
					color: "black",
					padding: "8px",
					borderRadius: "9px",
				}}
			>
				<div className="product-list-detail -mt-3">
					<h5 className="mb-2">{item.todo}</h5>

					<i className="pi pi-tag product-category-icon"></i>
					<span className="product-category">Task</span>
				</div>
				<Button
					icon="pi pi-trash"
					className="p-button-rounded p-button-danger p-button-sm"
					onClick={e => {
						console.log(item.id);
					}}
				/>
			</div>
		);
	};
	return (
		<>
			<div className="orderlist-demo flex flex-column mb-3 ">
				<OrderList
					value={products}
					dragdrop
					listStyle={{
						height: "auto",
						background: "white",
						border: "0",
					}}
					dataKey="id"
					itemTemplate={itemTemplate}
					onChange={e => setProducts(e.value)}
				></OrderList>
			</div>
		</>
	);
}

export default TasksList;

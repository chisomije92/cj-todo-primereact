/** @format */

import React, { useEffect, useState } from "react";
import { OrderList } from "primereact/orderlist";
import { TasksService } from "../services/TasksService";
import { Button } from "primereact/button";
import { Task } from "../model/task-model";

const TasksList: React.FC<{
	task: Task | null;
}> = ({ task }) => {
	const [products, setProducts] = useState<any>([]);

	const tasksService = new TasksService();

	function deleteTaskById(id: number) {
		tasksService.deleteTask(id);
	}

	useEffect(() => {
		tasksService.getTasks().then(data => setProducts(data));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (task?.id) {
			tasksService.createTask(task).then(data => {
				setProducts((prev: any) => [data, ...prev]);
			});
		}
	}, [task?.id]); // eslint-disable-line react-hooks/exhaustive-deps
	const itemTemplate = (item: Task) => {
		return (
			<div
				className="product-item flex flex-column justify-content-between md:flex-row font-bold text-lg text-0 text-black-alpha-90 overflow-hidden w-27rem"
				style={{
					background: "lightblue",
					color: "black",
					padding: "8px",
					borderRadius: "9px",
				}}
			>
				<div className="product-list-detail -mt-3">
					<h5 className="mb-2">{item.todo}</h5>

					<i className="pi pi-tag product-category-icon text-sm text-700"></i>
					<span className="product-category text-sm text-700">Task</span>
				</div>
				<Button
					icon="pi pi-trash"
					className="p-button-rounded p-button-danger p-button-sm"
					onClick={e => {
						deleteTaskById(item.id);
						setProducts(products.filter((p: any) => p.id !== item.id));
						console.log(products);
					}}
				/>
			</div>
		);
	};
	return (
		<>
			{products.length === 0 && (
				<div className="flex  flex-row justify-content-center">
					<h5 className="text-3xl text-bluegray-500">Add your todo tasks</h5>
				</div>
			)}
			{products.length > 0 && (
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
			)}
		</>
	);
};

export default TasksList;

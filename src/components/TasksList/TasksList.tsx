/** @format */

import React, { useEffect, useRef, useState } from "react";
import { OrderList } from "primereact/orderlist";
import { TasksService } from "../services/TasksService";
import { Button } from "primereact/button";
import { Task } from "../model/task-model";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

const TasksList: React.FC<{
	task: Task | null;
}> = ({ task }) => {
	const [products, setProducts] = useState<any>([]);
	const toast = useRef<any>(null);

	const tasksService = new TasksService();
	const accept = (item: Task) => {
		toast?.current?.show({
			severity: "info",
			summary: "Deleted!",
			detail: `Task: "${item?.todo.toString().toUpperCase()}" has been deleted`,
			life: 2000,
		});
		setProducts(products.filter((p: Task) => p.id !== item.id));
		tasksService.deleteTask(item.id);
	};

	const reject = (item: Task) => {
		toast?.current?.show({
			severity: "warn",
			summary: "Deletion Cancelled",
			detail: `Task: ${item?.todo.toString().toUpperCase()} was not deleted`,
			life: 2000,
		});
	};

	const confirmDelete = (item: Task) => {
		confirmDialog({
			message: "Do you want to delete this task?",
			header: "Delete Confirmation",
			icon: "pi pi-info-circle",
			acceptClassName: "p-button-danger",
			accept: accept.bind(this, item),
			reject: reject.bind(this, item),
		});
	};

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
						confirmDelete(item);
					}}
				/>
			</div>
		);
	};
	return (
		<>
			<Toast ref={toast} position="top-right" />

			{products.length === 0 && (
				<div className="flex  flex-row justify-content-center">
					<h5 className="text-3xl text-bluegray-500">Add your todo tasks</h5>
				</div>
			)}
			{products.length > 0 && (
				<div className="orderlist-demo flex flex-column mb-3 ">
					<ConfirmDialog />
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

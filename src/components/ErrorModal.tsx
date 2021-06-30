import React from "react";

export function ErrorModal(props?: { error: string }): JSX.Element {
	return (
		<div id="modal" className="flex justify-center items-start fixed z-50 pt-24 w-full h-full bg-modal-container">
			<div className="flex justify-center items-center text-modal-border relative bg-modal-window border-2 border-modal-border rounded width-auto p-6">
				<span
					id="modal-close"
					className="absolute right-6 top-0 text-red-300 text-2xl font-bold hover:text-red-800 hover:no-underline cursor-pointer"
				>
					&times;
				</span>
				{props && props.error}
			</div>
		</div>
	);
}

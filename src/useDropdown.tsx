import React, { useState } from "react";

export default function useDropdown(
	label: string,
	defaultState: string,
	options: string[]
): [string, () => JSX.Element, (newState: string) => void] {
	const [state, updateState] = useState(defaultState);
	const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
	const Dropdown = () => (
		<label htmlFor={id}>
			{label}
			<select
				id={id}
				value={state}
				onChange={(e) => updateState(e.target.value)}
				onBlur={(e) => updateState(e.target.value)}
				disabled={!options.length}
			>
				<option />
				{options.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</label>
	);
	return [state, Dropdown, updateState];
}

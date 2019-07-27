import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

// 앞글자는 대문자, 반드시 react element를 리턴
export const Header = ({title, players}) => {
	// 객체 해체 할당
	// const {title, players} = props;

	return (
		<header className="header">
			<Statistics players={players} />
			<h1 className="h1">{title}</h1>
			<Stopwatch/>
		</header>
	)
}
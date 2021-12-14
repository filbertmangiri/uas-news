import { useEffect } from "react"
import $ from "jquery";
import styles from './News.module.css'
import NewsRow from "./NewsRow";

export default function News() {
	useEffect(() => {
		$('body').removeClass().addClass(styles.background)
	})

	const newsArr = [
		{
			title: 'Anak ayam terlindas truk',
			content: 'Lorem ipsum dolor 1 sit amet consectetur adipisicing elit. Consectetur laudantium fugiat sit quasi incidunt aliquid, asperiores repudiandae nobis. Nihil ab vero temporibus quaerat dolore inventore earum id amet. Saepe, praesentium?'
		},
		{
			title: 'Lorem ipsum 2 dolor sit amet consectetur adipisicing elit',
			content: 'Lorem ipsum dolor 2 sit amet consectetur adipisicing elit. Consectetur laudantium fugiat sit quasi incidunt aliquid, asperiores repudiandae nobis. Nihil ab vero temporibus quaerat dolore inventore earum id amet. Saepe, praesentium?'
		},
		{
			title: 'Lorem ipsum 3 dolor sit amet consectetur adipisicing elit',
			content: 'Lorem ipsum dolor 3 sit amet consectetur adipisicing elit. Consectetur laudantium fugiat sit quasi incidunt aliquid, asperiores repudiandae nobis. Nihil ab vero temporibus quaerat dolore inventore earum id amet. Saepe, praesentium?'
		},
		{
			title: 'Lorem ipsum 4 dolor sit amet consectetur adipisicing elit',
			content: 'Lorem ipsum dolor 4 sit amet consectetur adipisicing elit. Consectetur laudantium fugiat sit quasi incidunt aliquid, asperiores repudiandae nobis. Nihil ab vero temporibus quaerat dolore inventore earum id amet. Saepe, praesentium?'
		}
	]

	let rows = []

	newsArr.forEach(newsObj => {
		rows.push(<NewsRow newsObj={newsObj} />)
	})

	return (
		<div className="d-flex flex-column gap-3">
			{rows}
		</div>
	)
}
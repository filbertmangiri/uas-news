export default function NewsRow({ newsObj }) {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{newsObj.title}</h5>
				<p className="card-text">{newsObj.content}</p>
				<a href="#">Read more</a>
			</div>
		</div>
	)
}
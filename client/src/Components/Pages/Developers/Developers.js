import { useEffect } from "react";
import $ from "jquery";
import styles from './Developers.module.css'

export default function Developers() {
	useEffect(() => {
		$('body').removeClass().addClass(styles.background)
	})

	return (
		<div>
			<div className="card-group">
				<div className="card bg-dark text-white mx-3">
					<img src=""  />
					<div className="card-body">
						<h5 className="card-title text-center">Filbert Mangiri</h5>
						<h6 className="card-title text-center">00000050612</h6>
						<p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
				</div>
				<div className="card bg-dark text-white mx-3">
					<img src="https://pbs.twimg.com/media/E8Zk6rmVcAIWPDi?format=png&name=360x360" className="card-img-top"  />
					<div className="card-body">
						<h5 className="card-title text-center">Muhammad Rifqi Al Hakim</h5>
						<h6 className="card-title text-center">00000050617</h6>
						<p className="card-text text-center">This card has supporting text below as a natural lead-in to additional content.</p>
					</div>
				</div>
				<div className="card bg-dark text-white mx-3">
					<img src="" className="card-img-top"  />
					<div className="card-body">
						<h5 className="card-title text-center">Hans Natan Hermawan Chiou</h5>
						<h6 className="card-title text-center">00000041</h6>
						<p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
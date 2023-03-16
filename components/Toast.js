const Toast = ({msg, handleShow, bgColor}) => {
	return (
		<>
			<div className={`toast show position-fixed text-light ${bgColor}`}
				style={{top:'5px', right:'5px', zIndex:'9', minWidth:'360px'}}
				role="alert" aria-live="assertive" aria-atomic="true">
			<div className={`toast-header ${bgColor} text-light`}>
				<img src="https://cdn.tgdd.vn/hoi-dap/929605/cach-tat-tu-dong-luu-anh-tren-messenger-100.jpg" style={{width:'40px'}} className="rounded mr-2" alt="..."/>
				<strong className="mr-auto text-light">{msg.title}</strong>
				<button type="button" className="ml-2 mb-1 close"
					style={{outline:'none'}} onClick={handleShow}
					data-dismiss="toast" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
				<div className="toast-body">
					{msg.msg}
				</div>
			</div>
		</>
	)
}

export default Toast
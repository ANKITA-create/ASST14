import React from 'react'
import Employee from './Employee'
function EmployeeList() {
	return (
		<div className="row">
			<div className="col-md-12">
				<div class="jumbotron jumbotron-fluid py-4">
					<div class="container">
						<h1 class="display-4 text-center">RESIDENTS</h1>

				
					</div>

				</div>
			</div>

				<div className="col-md-12">
					<Employee />
			</div>
		</div>	
		
	)
}

export default EmployeeList
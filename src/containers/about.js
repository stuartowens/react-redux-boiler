import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'redux-little-router';


class About extends React.Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col xs={12} sm={6} smOffset={3}>
						<div className="text-center">
							<h1 className="text-center">About</h1>
							<Link href="/">
								<Button>Home</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default connect()(About);
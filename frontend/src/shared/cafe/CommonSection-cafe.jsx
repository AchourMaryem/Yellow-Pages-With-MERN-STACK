import React from "react";

import '../cafe/common-section-cafe.css'
import { Container, Row, Col } from "reactstrap";


const CommonSection = ({title}) => {
    return (
        
        <section className="common__section2">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>
                            {title}
                        </h1>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
export default CommonSection
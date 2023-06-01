import React from "react";

import '../pharmacie/common-section-pharmacie.css'
import { Container, Row, Col } from "reactstrap";


const CommonSection = ({title}) => {
    return (
        
        <section className="common__section3">
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
import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../shared/common-section.css'


const CommonSection = ({title}) => {
    return (
        
        <section className="common__section5">
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
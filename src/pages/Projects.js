import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import projectConfig from "../assets/configs/projectConfig"
import "../assets/images/sklearn_genetic_opt.png";
import { Container } from "react-bootstrap";
import Timeline from "../components/Timeline/Timeline";
import React from 'react';
import homeConfig from "../assets/configs/homeConfig";

const Projects = () => {
    return (
        <Container fluid className="resume-content" id="resume">
                <div className="col-md-8 mx-auto">
                    <Timeline items={homeConfig.workTimeline}/>
                </div>
            </Container>)
}

export default Projects
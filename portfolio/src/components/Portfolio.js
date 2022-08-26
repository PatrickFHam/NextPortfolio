import React from 'react';
import Image from 'next/image';
import { Card, Button, Container, Row, Col, Text, Tooltip, Spacer } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from  '../styles/Portfolio.module.css';

import projects from '../utils/data/projects';

export default function Portfolio() {
  return (
    <Container>
      <h1>Portfolio</h1>
      <Row gap={1} wrap="wrap" id="allthecards">
        {projects.map(item => (
          <>
            <Card key={item.id} cover css={{ marginTop: 7, marginBottom: 7}}>
              <Card.Header blur="true" css={{ backgroundColor: "grey", position: "absolute", zIndex: 1, top: 0 }}>
                <Col>
                  <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    {item.subtitle}
                  </Text>
                  <Text h3 color="black">
                    {item.title}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Image src={item.image} height={400} width={800} objectFit="cover"></Image>
              </Card.Body>
              <Card.Footer
                blur="true"
                css={{
                  position: "absolute",
                  bgBlur: "#000000",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Row justify="flex-end">
                      <Tooltip content="See on Github" color="primary">
                        <Button ghost auto rounded color="primary" id="githublink" onClick={(e) => {
                              e.preventDefault();
                              window.open(`${item.githubLink}`, "_blank");
                              }}>
                          <Text
                            css={{ color: "inherit" }}
                            size={24}
                            weight="bold"
                            transform="uppercase"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                          </Text>
                        </Button>
                      </Tooltip>
                      <Tooltip content="See it Deployed" color="primary">
                        <Button ghost auto rounded color="primary" id="livelink" onClick={(e) => {
                              e.preventDefault();
                              window.open(`${item.liveLink}`, "_blank");
                              }}>
                          <Text
                            css={{ color: "inherit" }}
                            size={24}
                            weight="bold"
                            transform="uppercase"
                          >
                            <FontAwesomeIcon icon={faGlobe} />
                          </Text>
                        </Button>
                      </Tooltip>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Spacer y={2} />
          </>
        ))}
      </Row>
    </Container>
)};
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Blog() {
  return (
    <div className="container mt-4">
      <h1>Blog Page</h1>
      <div className="row">
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Blog Post 1</Card.Title>
              <Card.Text>
                This is a short description of the blog post.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Blog Post 2</Card.Title>
              <Card.Text>
                This is a short description of the blog post.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Blog Post 3</Card.Title>
              <Card.Text>
                This is a short description of the blog post.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Blog;

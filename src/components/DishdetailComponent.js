import React from 'react';
import {Card, CardImg, CardText,CardBody, CardTitle} from 'reactstrap';

const renderDish = (dish) => {
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>                        
                <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
                </CardBody>
            </CardBody>
        </Card>
    )
}

const renderComments = (comments) => {
    if(comments !== undefined){
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map( comment => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>{"-- "+comment.author+", "+new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        )
                    })}
                </ul>
            </div> 
         );
    }else{
        return <div></div>
    }
}

const Dishdetail = props => {  
        if(props.dish !== undefined){
            return(
                <div className="container">
                <div className="row">
                       <div className="col-12 col-md-5 m-1">
                          {renderDish(props.dish)}
                       </div>
                    <div className="col-12 col-md-5 m-1">
                          {renderComments(props.dish.comments)}
                    </div>
                  </div>
                </div>
            );
        }
        else{
            return <div></div>
        }   
}

export default Dishdetail;
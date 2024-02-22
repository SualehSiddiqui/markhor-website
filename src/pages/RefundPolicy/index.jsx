import Container from 'react-bootstrap/Container';
import { TypeAnimation } from 'react-type-animation';

const RefundPage = () => {
    return (
        <>
            <div className="not-found-main">
                <Container className="service-container">
                    <div className="notfound-div">
                        <h1>
                            <TypeAnimation
                                sequence={[
                                    'Refund Policy.'
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1.5em', display: 'inline-block' }}
                                repeat={0}
                                cursor={false}
                            />
                        </h1>
                    </div>
                    <div className='main-text-div'>
                        <h2>REFUND POLICY</h2>
                        <ul>
                            <li>
                                You may claim a full refund of your amount before we have started working on your project. However, once
                                the work has started on a project the refund will be processed after deducting any applicable transaction
                                charges from the amount.
                            </li>
                            <li className='mt-3'>
                                A refund request can be submitted if you are not satisfied with any product or service provided by Markhor
                                Solution within 5 days of your order completion. Certain percentage based refund would be granted if we are
                                unable to provide required service through our unlimited revision policy. If no refund request is received
                                within five days after your order has been delivered, your satisfaction over the delivered order shall be assumed
                                by both the parties.
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default RefundPage;
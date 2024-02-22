import './style.css';
import Container from 'react-bootstrap/Container';
import { TypeAnimation } from 'react-type-animation';

const TermPage = () => {
    return (
        <>
            <div className="not-found-main">
                <Container className="service-container">
                    <div className="notfound-div">
                        <h1>
                            <TypeAnimation
                                sequence={[
                                    'Terms And Conditions.'
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
                        <h2>TERM OF USE OF THIS WEBSITE</h2>
                        <ul>
                            <li>
                                The information provided on www.markhorsolution.co includes, but is not limited
                                to, the services offered by the organization and does not imply any advice, certifications,
                                guarantees, or warranties.
                            </li>
                            <li>
                                The organization or any of its affiliates or associates or employees shall not be liable in
                                any manner for any loss or damage that may arise to any individual from any inadvertent error in
                                the information contained on this website.
                            </li>
                            <li>
                                The organization and its affiliates and associates shall not be held accountable, at any point, for any
                                failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission,
                                computer virus, communication line failure, theft, or destruction, or unauthorized access to, alteration of,
                                or use of information contained on the website.
                            </li>
                            <li>
                                The testimonials on our website are a recreation by lookalikes of original reviews that were provided by the
                                genuine authors. We have obtained 100% consent from the actual authors to feature these videos on our website
                                created by their lookalikes.
                            </li>
                            <li>
                                You agree to defend, indemnify, and hold the organization and its subsidiaries, affiliates, officers, agents,
                                and employees, harmless from and against any claims, liabilities, damages, losses, and expenses, arising out of
                                or in any way connected with (i) your access to or use of the website and the services therein; (ii) your violation
                                of these Terms of Use; (iii) your violation of any third-party right, including without limitation any intellectual
                                property right, publicity, confidentiality, property, or privacy right.
                            </li>
                            <li>
                                This Agreement or your use of this Site does not establish any joint venture, partnership, employment, or agency
                                relationship between you and the organization.
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TermPage;
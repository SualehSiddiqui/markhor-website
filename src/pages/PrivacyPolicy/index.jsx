import Container from 'react-bootstrap/Container';
import { TypeAnimation } from 'react-type-animation';

const PrivacyPage = () => {
    return (
        <>
            <div className="not-found-main">
                <Container className="service-container">
                    <div className="notfound-div">
                        <h1>
                            <TypeAnimation
                                sequence={[
                                    'Privacy Policy.'
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1.5em', display: 'inline-block' }}
                                repeat={0}
                                cursor={false}
                            />
                        </h1>
                        <p>
                            Privacy policy helps you and us both in keeping your information confidential. Our privacy
                            policy will help in understanding the process we follow to maintain your privacy during and
                            after the work process.
                        </p>
                    </div>
                    <div className='main-text-div'>
                        <h2>USER INFORMATION</h2>
                        <ul>
                            <li>
                                We may gather the subsequent details for your recognition and harmonious cooperation.
                            </li>
                            <li className='mt-3'>
                                Name, business name and job title.
                            </li>
                            <li>
                                Contact information including phone numbers, email address or website.
                            </li>
                            <li>
                                We need this data to comprehend your requirements and offer you an enhanced service, primarily for the subsequent motives:
                                <ul>
                                    <li>We might utilize the data to enhance our products and services.</li>
                                    <li>We might also employ your details to reach out to you for input on our services.</li>
                                    <li>We could utilize the information to personalize the website based on your interests.</li>
                                </ul>
                            </li>
                            <li>
                                Information of customers at Markhor Solution is kept exceptionally secure during transmission by the use of the Secure Sockets Layer
                                (SSL) Software which encrypts data that customers input.
                            </li>
                            <li>
                                Markhor Solution follows generally accepted industry standards to protect the personal information that is being submitted by
                                the client during transmission and once we receive it. However, since no method of transmission over the Internet, or method
                                of electronic storage, is 100% secure, we despite using commercially acceptable means to protect your personal information
                                cannot guarantee its absolute security.
                            </li>
                        </ul>
                        <h2>third party shairing</h2>
                        <ul>
                            <li>
                                We do not disclose any Personal information to third parties.
                            </li>
                            <li>
                                Under no circumstances do we furnish or vend personal information of our clients to third-party entities
                            </li>
                            <li>
                                Markhor Solution utilizes services of credit card processing companies to bill you for services. These
                                companies never share, store, save or use exclusive information for any other purposes.
                            </li>
                        </ul>
                        <h2>Cookies</h2>
                        <ul>
                            <li>
                                Cookies, alphanumeric identifiers, facilitate our systems to recognize the clients’ browsers and storage of
                                items in their Shopping Carts during visits. To prevent the browser from accepting new cookies, disable
                                cookies and notify the user when a new cookie is received, the Help portion of the toolbar on most browsers
                                becomes most instrumental.
                            </li>
                            <li>
                                Typically, customers do not restrict hoofprints as they enable you to fully utilize the prime features on our
                                platform. Our research indicates that customers prefer to leave hoofprints accepted.
                            </li>
                            <li>
                                Markhor Solution keeps track of your IP address to help diagnose problems with our server and to administer our website.
                                Your IP address is also used to gather broad demographic information about you, such as your location and your Internet
                                service provider.
                            </li>
                            <li>
                                Client’s aggregate data on how our users are utilizing the site may be collected. This data might include details regarding
                                traffic patterns through the site and search queries. No IP address/log file information is tied to Personally Identifiable
                                Information (PII).
                            </li>
                            <li>
                                Information regarding browser types, access times, URLs through which people visit our site, and URLs viewed by visitors while
                                on our site is not accessible by third parties, except in combined form.
                            </li>
                        </ul>
                        <h2>PROJECT REQUIREMENTS</h2>
                        <ul>
                            <li>
                                Any project requirements will be discussed with the clients before the start of a project. Service level disputes will be
                                addressed based on the agreed terms and requirements at the beginning of a project, these terms and conditions, as well as reasonable
                                business practices.
                            </li>
                        </ul>
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

export default PrivacyPage;
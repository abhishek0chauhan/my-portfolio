let svgImage = document.getElementById('svg-group');
let getModalBody = document.getElementById('table-project');

window.onresize = function() {
    if(window.innerWidth <= 575) svgImage.classList.add('order-first');
    else svgImage.classList.remove('order-first');
}

function redirectLetsTalk() {
    location.replace("https://abhishek0chauhan.github.io/letstalk/lobby.html");
}

function redirectManagedice() {
    location.replace("https://managedice.netlify.app/");
}

getModalBody.innerHTML = `
<tbody>
                <tr>
                    <th>My Contribution</th>
                    <td>
                        <ul>
                            <li>Design and development of the REST APIs.</li>
                            <li>Design and development of the frontend application using Angular.</li>
                            <li>Modification in portal UI.</li>
                            <li>I worked on AWS services such as Lambda, DynamoDB, Athena, API Gateway, SES, SNS, SQS, IoT core, MQTT, Cloudwatch, and many more.</li>
                            <li>I worked on various feature enhancements and bug fixes in the portal and backend.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Development Tools</th>
                    <td>Visual Studio Code, Postman</td>
                </tr>
                <tr>
                    <th>Database</th>
                    <td>DynamoDB</td>
                </tr>
                <tr>
                    <th>Technology</th>
                    <td>NodeJS, ExpressJS, Angular, AWS</td>
                </tr>
            </tbody>
`
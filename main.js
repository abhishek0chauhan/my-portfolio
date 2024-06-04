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

function fillTabel(projectText){
    if(projectText==='sensor'){
        getModalBody.innerHTML = `
<tbody>
                <tr>
                    <th class="bg-transparent">My Contribution</th>
                    <td class="bg-transparent">
                        <ul>
                            <li>Design and development of the REST APIs.</li>
                            <li>Design and development of the frontend application using Angular.</li>
                            <li>Worked on the core logic of the product which is to controll number of air purifiers via this device based on the airquality</li>
                            <li>I worked on AWS services such as Lambda, DynamoDB, Athena, API Gateway, SES, SNS, SQS, IoT core, MQTT, Cloudwatch, and many more.</li>
                            <li>I worked on various feature enhancements and bug fixes in the portal and backend.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th class="bg-transparent">Development Tools</th>
                    <td class="bg-transparent">Visual Studio Code, Postman</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Database</th>
                    <td class="bg-transparent">DynamoDB</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Technology</th>
                    <td class="bg-transparent">NodeJS, ExpressJS, Angular, AWS</td>
                </tr>
            </tbody>
`
    }else if(projectText==='air'){
        getModalBody.innerHTML = `
        <tbody>
                <tr>
                    <th class="bg-transparent">My Contribution</th>
                    <td class="bg-transparent">
                        <ul>
                            <li>Design and development of the REST APIs.</li>
                            <li>Design and development of the frontend application using Angular.</li>
                            <li>I worked on implementing OTA. OTA is nothing more
                            than a brand-new updated firmware package that will be applied to every device on the market via AWS IOT jobs.</li>
                            <li>I worked on AWS services such as Lambda, DynamoDB, Athena, API Gateway, SES, SNS, SQS, IoT core, MQTT, Cloudwatch, and many more.</li>
                            <li>MQTT on the portal using AWS amplify. I designed a custom line chart that changed color based on the air quality and displayed past 7-day data.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th class="bg-transparent">Development Tools</th>
                    <td class="bg-transparent">Visual Studio Code, Postman</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Database</th>
                    <td class="bg-transparent">DynamoDB</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Technology</th>
                    <td class="bg-transparent">NodeJS, ExpressJS, Angular, AWS</td>
                </tr>
            </tbody>
        `
    }else if(projectText==='water'){
        getModalBody.innerHTML = `
        <tbody>
                <tr>
                    <th class="bg-transparent">My Contribution</th>
                    <td class="bg-transparent">
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
                    <th class="bg-transparent">Development Tools</th>
                    <td class="bg-transparent">Visual Studio Code, Postman</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Database</th>
                    <td class="bg-transparent">DynamoDB</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Technology</th>
                    <td class="bg-transparent">NodeJS, ExpressJS, Angular, AWS</td>
                </tr>
            </tbody>
        `
    }else if(projectText==='pepsico'){
        getModalBody.innerHTML = `
        <tbody>
                <tr>
                    <th class="bg-transparent">My Contribution</th>
                    <td class="bg-transparent">
                        <ul>
                            <li>Design and development of the REST APIs to interact with the backend server using nodejs</li>
                            <li>Design and development of the frontend application using Angular.</li>
                            <li>Majorly worked on Serial Port Communication</li>
                            <li>I used Web Socket to check the real-time status of the connected device.</li>
                            <li>I worked on various feature enhancements and bug fixes in the portal.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th class="bg-transparent">Development Tools</th>
                    <td class="bg-transparent">Visual Studio Code, Postman</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Database</th>
                    <td class="bg-transparent">JSON as a database</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Technology</th>
                    <td class="bg-transparent">NodeJS, ExpressJS, Angular, AWS</td>
                </tr>
            </tbody>
        `
    }else if(projectText==='letstalk'){
        getModalBody.innerHTML = `
        <tbody>
                <tr>
                    <th class="bg-transparent">Solo project</th>
                    <td class="bg-transparent">
                        <ul>
                            <li>Design and development of the UI using HTLM and CSS.</li>
                            <li>Implemented WEBRTC for peer to peer video communication.</li>
                            <li>Used Agora SDK for signaling.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th class="bg-transparent">Development Tools</th>
                    <td class="bg-transparent">Visual Studio Code, Agora</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Database</th>
                    <td class="bg-transparent">No Database</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Technology</th>
                    <td class="bg-transparent">Javascript, WEBRTC, HTML, CSS, Agora SDK</td>
                </tr>
                <tr>
                <th class="bg-transparent"><a class="bg-transparent" target="_blank" href="https://abhishek0chauhan.github.io/letstalk/lobby.html">Link</a></th>
                <td class="bg-transparent"></td>
            </tr>
            </tbody>
        `
    }else if(projectText==='manageDice'){
        getModalBody.innerHTML = `
        <tbody>
                <tr>
                    <th class="bg-transparent">My Contribution</th>
                    <td class="bg-transparent">
                        <ul>
                            <li>Design and development of the REST APIs.</li>
                            <li>Development of the frontend pages using React.</li>
                            <li>Implemented multiple access role base portal</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th class="bg-transparent">Development Tools</th>
                    <td class="bg-transparent">Visual Studio Code, Postman</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Database</th>
                    <td class="bg-transparent">SQL Lite</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Technology</th>
                    <td class="bg-transparent">Django, Django REST framework, React, Netlify</td>
                </tr>
                <tr>
                    <th class="bg-transparent"><a class="bg-transparent" target="_blank" href="https://managedice.netlify.app/">Link</a></th>
                    <td class="bg-transparent"></td>
                </tr>
            </tbody>
        `
    }else if(projectText==='management'){
        getModalBody.innerHTML = `
        <tbody>
                <tr>
                    <th class="bg-transparent">My Contribution</th>
                    <td class="bg-transparent">
                        <ul>
                            <li>Design and development of the frontend application using Angular.</li>
                            <li>Modification in portal UI.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th class="bg-transparent">Development Tools</th>
                    <td class="bg-transparent">Visual Studio Code, Postman</td>
                </tr>
                <tr>
                    <th class="bg-transparent">Technology</th>
                    <td class="bg-transparent">Angular</td>
                </tr>
            </tbody>
        `
    }
}

function downloadFile() {
    fetch("Abhishek_Chauhan_Resume.pdf", { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', 'Abhishek_Chauhan_Resume');
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
};
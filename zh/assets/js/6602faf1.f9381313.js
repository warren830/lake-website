"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7464],{69281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={title:"Jira",description:"Jira Plugin\n"},r=void 0,l={unversionedId:"Plugins/jira",id:"version-v0.11/Plugins/jira",title:"Jira",description:"Jira Plugin\n",source:"@site/versioned_docs/version-v0.11/Plugins/jira.md",sourceDirName:"Plugins",slug:"/Plugins/jira",permalink:"/zh/docs/v0.11/Plugins/jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Plugins/jira.md",tags:[],version:"v0.11",frontMatter:{title:"Jira",description:"Jira Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jenkins",permalink:"/zh/docs/v0.11/Plugins/jenkins"},next:{title:"RefDiff",permalink:"/zh/docs/v0.11/Plugins/refdiff"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Project Metrics This Covers",id:"project-metrics-this-covers",level:2},{value:"Configuration",id:"configuration",level:2},{value:"More custom configuration",id:"more-custom-configuration",level:3},{value:"Generating API token",id:"generating-api-token",level:3},{value:"Issue Type Mapping",id:"issue-type-mapping",level:3},{value:"Find Out Custom Field",id:"find-out-custom-field",level:3},{value:"Collect Data From JIRA",id:"collect-data-from-jira",level:2},{value:"Find Board Id",id:"find-board-id",level:3},{value:"API",id:"api",level:2},{value:"Data Connections",id:"data-connections",level:3},{value:"Type mappings",id:"type-mappings",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects Jira data through Jira Cloud REST API. It then computes and visualizes various engineering metrics from the Jira data."),(0,i.kt)("img",{width:"2035",alt:"jira metric display",src:"https://user-images.githubusercontent.com/2908155/132926143-7a31d37f-22e1-487d-92a3-cf62e402e5a8.png"}),(0,i.kt)("h2",{id:"project-metrics-this-covers"},"Project Metrics This Covers"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Requirement"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Lead Time"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Requirement"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Delivery Rate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ratio of delivered requirements to all requirements")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Granularity"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of story points associated with an issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bug Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Bug"',(0,i.kt)("br",null),(0,i.kt)("i",null,"bugs are found during testing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bug Age"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Bug"',(0,i.kt)("br",null),(0,i.kt)("i",null,"both new and deleted lines count"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bugs Count per 1k Lines of Code"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of bugs per 1000 lines of code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Incident"',(0,i.kt)("br",null),(0,i.kt)("i",null,"incidents are found when running in production"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Age"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Incident"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Count per 1k Lines of Code"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of incidents per 1000 lines of code")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In order to fully use this plugin, you will need to set various configurations via Dev Lake's ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui")," service. Open ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui")," on browser, by default the URL is http://localhost:4000, then go to ",(0,i.kt)("strong",{parentName:"p"},"Data Integrations / JIRA")," page. JIRA plugin currently supports multiple data connections, Here you can ",(0,i.kt)("strong",{parentName:"p"},"add")," new connection to your JIRA connection or ",(0,i.kt)("strong",{parentName:"p"},"update")," the settings if needed."),(0,i.kt)("p",null,"For each connection, you will need to set up following items first:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connection at config ui",src:n(7723).Z,width:"1746",height:"692"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connection Name: This allow you to distinguish different connections."),(0,i.kt)("li",{parentName:"ul"},"Endpoint URL: The JIRA instance API endpoint, for JIRA Cloud Service: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<mydomain>.atlassian.net/rest"),". DevLake officially supports JIRA Cloud Service on atlassian.net, but may or may not work for JIRA Server Instance."),(0,i.kt)("li",{parentName:"ul"},"Basic Auth Token: First, generate a ",(0,i.kt)("strong",{parentName:"li"},"JIRA API TOKEN")," for your JIRA account on the JIRA console (see ",(0,i.kt)("a",{parentName:"li",href:"#generating-api-token"},"Generating API token"),"), then, in ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui")," click the KEY icon on the right side of the input to generate a full ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP BASIC AUTH")," token for you."),(0,i.kt)("li",{parentName:"ul"},"Proxy Url: Just use when you want collect through VPN.")),(0,i.kt)("h3",{id:"more-custom-configuration"},"More custom configuration"),(0,i.kt)("p",null,'If you want to add more custom config, you can click "settings" to change these config\n',(0,i.kt)("img",{alt:"More config in config ui",src:n(54749).Z,width:"1464",height:"938"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Issue Type Mapping: JIRA is highly customizable, each JIRA instance may have a different set of issue types than others. In order to compute and visualize metrics for different instances, you need to map your issue types to standard ones. See ",(0,i.kt)("a",{parentName:"li",href:"#issue-type-mapping"},"Issue Type Mapping")," for detail."),(0,i.kt)("li",{parentName:"ul"},"Epic Key: unfortunately, epic relationship implementation in JIRA is based on ",(0,i.kt)("inlineCode",{parentName:"li"},"custom field"),", which is vary from instance to instance. Please see ",(0,i.kt)("a",{parentName:"li",href:"#find-out-custom-fields"},"Find Out Custom Fields"),"."),(0,i.kt)("li",{parentName:"ul"},"Story Point Field: same as Epic Key."),(0,i.kt)("li",{parentName:"ul"},"Remotelink Commit SHA:A regular expression that matches commit links to determine whether an external link is a link to a commit. Taking gitlab as an example, to match all commits similar to ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/merico-dev/ce/example-repository/-/commit/8ab8fb319930dbd8615830276444b8545fd0ad24"},"https://gitlab.com/merico-dev/ce/example-repository/-/commit/8ab8fb319930dbd8615830276444b8545fd0ad24"),", you can directly use the regular expression ",(0,i.kt)("strong",{parentName:"li"},"/commit/(","[0-9a-f]","{40})$"))),(0,i.kt)("h3",{id:"generating-api-token"},"Generating API token"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Once logged into Jira, visit the url ",(0,i.kt)("inlineCode",{parentName:"li"},"https://id.atlassian.com/manage-profile/security/api-tokens")),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Create API Token")," button, and give it any label name\n",(0,i.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/27032263/129363611-af5077c9-7a27-474a-a685-4ad52366608b.png",alt:"image"}))),(0,i.kt)("h3",{id:"issue-type-mapping"},"Issue Type Mapping"),(0,i.kt)("p",null,"Devlake supports 3 standard types, all metrics are computed based on these types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bug"),": Problems found during the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," phase, before they can reach the production environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Incident"),": Problems that went through the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," phase, got deployed into production environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Requirement"),": Normally, it would be ",(0,i.kt)("inlineCode",{parentName:"li"},"Story")," on your instance if you adopted SCRUM.")),(0,i.kt)("p",null,"You can map arbitrary ",(0,i.kt)("strong",{parentName:"p"},"YOUR OWN ISSUE TYPE")," to a single ",(0,i.kt)("strong",{parentName:"p"},"STANDARD ISSUE TYPE"),". Normally, one would map ",(0,i.kt)("inlineCode",{parentName:"p"},"Story")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Requirement"),", but you could map both ",(0,i.kt)("inlineCode",{parentName:"p"},"Story")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Requirement")," if that was your case. Unspecified types are copied directly for your convenience, so you don't need to map your ",(0,i.kt)("inlineCode",{parentName:"p"},"Bug")," to standard ",(0,i.kt)("inlineCode",{parentName:"p"},"Bug"),"."),(0,i.kt)("p",null,"Type mapping is critical for some metrics, like ",(0,i.kt)("strong",{parentName:"p"},"Requirement Count"),", make sure to map your custom type correctly."),(0,i.kt)("h3",{id:"find-out-custom-field"},"Find Out Custom Field"),(0,i.kt)("p",null,"Please follow this guide: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/wiki/How-to-find-the-custom-field-ID-in-Jira"},"How to find the custom field ID in Jira?")),(0,i.kt)("h2",{id:"collect-data-from-jira"},"Collect Data From JIRA"),(0,i.kt)("p",null,"To collect data, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,i.kt)("blockquote",null,(0,i.kt)("font",{color:"#ED6A45"},"Warning: Data collection only supports single-task execution, and the results of concurrent multi-task execution may not meet expectations.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "plugin": "jira",\n      "options": {\n          "connectionId": 1,\n          "boardId": 8,\n          "since": "2006-01-02T15:04:05Z"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ID")," field from ",(0,i.kt)("strong",{parentName:"li"},"JIRA Integration")," page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boardId"),': JIRA board id, see "Find Board Id" for details.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"since"),": optional, download data since a specified date only.")),(0,i.kt)("h3",{id:"find-board-id"},"Find Board Id"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Jira board in the browser"),(0,i.kt)("li",{parentName:"ol"},"in the URL bar, get the board id from the parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"?rapidView="))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://{your_jira_endpoint}/secure/RapidBoard.jspa?rapidView=51")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/27032263/129363083-df0afa18-e147-4612-baf9-d284a8bb7a59.png",alt:"Screenshot"})),(0,i.kt)("p",null,"Your board id is used in all REST requests to Apache DevLake. You do not need to configure this at the data connection level."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"data-connections"},"Data Connections"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'[\n  {\n    "ID": 14,\n    "CreatedAt": "2021-10-11T11:49:19.029Z",\n    "UpdatedAt": "2021-10-11T11:49:19.029Z",\n    "name": "test-jira-connection",\n    "endpoint": "https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "basicAuth",\n    "epicKeyField": "epicKeyField",\n      "storyPointField": "storyPointField"\n  }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a new data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-POST",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type"\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Update data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PUT",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Get data connection detail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Delete data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-DELETE",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},"")),(0,i.kt)("h3",{id:"type-mappings"},"Type mappings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all type mappings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId/type-mappings","/plugins/jira/connections/:connectionId/type-mappings":!0},'[\n  {\n    "jiraConnectionId": 16,\n    "userType": "userType",\n    "standardType": "standardType"\n  }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a new type mapping")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-POST",metastring:"/plugins/jira/connections/:connectionId/type-mappings","/plugins/jira/connections/:connectionId/type-mappings":!0},'{\n    "userType": "userType",\n    "standardType": "standardType"\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Update type mapping")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PUT",metastring:"/plugins/jira/connections/:connectionId/type-mapping/:userType","/plugins/jira/connections/:connectionId/type-mapping/:userType":!0},'{\n    "standardType": "standardTypeUpdated"\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Delete type mapping")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-DELETE",metastring:"/plugins/jira/connections/:connectionId/type-mapping/:userType","/plugins/jira/connections/:connectionId/type-mapping/:userType":!0},"")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"API forwarding\nFor example:\nRequests to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://your_devlake_host/plugins/jira/connections/1/proxy/rest/agile/1.0/board/8/sprint"),"\nwould be forwarded to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://your_jira_host/rest/agile/1.0/board/8/sprint"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId/proxy/rest/*path","/plugins/jira/connections/:connectionId/proxy/rest/*path":!0},'{\n    "maxResults": 1,\n    "startAt": 0,\n    "isLast": false,\n    "values": [\n        {\n            "id": 7,\n            "self": "https://merico.atlassian.net/rest/agile/1.0/sprint/7",\n            "state": "closed",\n            "name": "EE Sprint 7",\n            "startDate": "2020-06-12T00:38:51.882Z",\n            "endDate": "2020-06-26T00:38:00.000Z",\n            "completeDate": "2020-06-22T05:59:58.980Z",\n            "originBoardId": 8,\n            "goal": ""\n        }\n    ]\n}\n')))}c.isMDXComponent=!0},7723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jira-connection-config-ui-adbd39e962c600af63b02d0d83b0713d.png"},54749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jira-more-setting-in-config-ui-d19d3bb23079f80e5f7dd26d8918d21b.png"}}]);
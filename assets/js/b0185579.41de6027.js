"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2064],{47340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={title:"Jira",description:"Jira Plugin\n"},r=void 0,l={unversionedId:"Plugins/jira",id:"version-v0.13/Plugins/jira",title:"Jira",description:"Jira Plugin\n",source:"@site/versioned_docs/version-v0.13/Plugins/jira.md",sourceDirName:"Plugins",slug:"/Plugins/jira",permalink:"/docs/v0.13/Plugins/jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Plugins/jira.md",tags:[],version:"v0.13",frontMatter:{title:"Jira",description:"Jira Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jenkins",permalink:"/docs/v0.13/Plugins/jenkins"},next:{title:"RefDiff",permalink:"/docs/v0.13/Plugins/refdiff"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Project Metrics This Covers",id:"project-metrics-this-covers",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect Data From JIRA",id:"collect-data-from-jira",level:2},{value:"API",id:"api",level:2},{value:"Data Connections",id:"data-connections",level:3},{value:"Type mappings",id:"type-mappings",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects Jira data through Jira Cloud REST API. It then computes and visualizes various engineering metrics from the Jira data."),(0,i.kt)("img",{width:"2035",alt:"jira metric display",src:"https://user-images.githubusercontent.com/2908155/132926143-7a31d37f-22e1-487d-92a3-cf62e402e5a8.png"}),(0,i.kt)("h2",{id:"project-metrics-this-covers"},"Project Metrics This Covers"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Requirement"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Lead Time"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Requirement"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Delivery Rate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ratio of delivered requirements to all requirements")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Requirement Granularity"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of story points associated with an issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bug Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Bug"',(0,i.kt)("br",null),(0,i.kt)("i",null,"bugs are found during testing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bug Age"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Bug"',(0,i.kt)("br",null),(0,i.kt)("i",null,"both new and deleted lines count"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bugs Count per 1k Lines of Code"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of bugs per 1000 lines of code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Number of issues with type "Incident"',(0,i.kt)("br",null),(0,i.kt)("i",null,"incidents are found when running in production"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Age"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Lead time of issues with type "Incident"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incident Count per 1k Lines of Code"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amount of incidents per 1000 lines of code")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuring Jira via ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.13/UserManuals/ConfigUI/Jira"},"config-ui"),"."),(0,i.kt)("h2",{id:"collect-data-from-jira"},"Collect Data From JIRA"),(0,i.kt)("p",null,"To collect data, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,i.kt)("blockquote",null,(0,i.kt)("font",{color:"#ED6A45"},"Warning: Data collection only supports single-task execution, and the results of concurrent multi-task execution may not meet expectations.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "plugin": "jira",\n      "options": {\n          "connectionId": 1,\n          "boardId": 8,\n          "since": "2006-01-02T15:04:05Z"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ID")," field from ",(0,i.kt)("strong",{parentName:"li"},"JIRA Integration")," page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boardId"),': JIRA board id, see "Find Board Id" for details.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"since"),": optional, download data since a specified date only.")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"data-connections"},"Data Connections"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'[\n  {\n    "ID": 14,\n    "CreatedAt": "2021-10-11T11:49:19.029Z",\n    "UpdatedAt": "2021-10-11T11:49:19.029Z",\n    "name": "test-jira-connection",\n    "endpoint": "https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "basicAuth",\n    "epicKeyField": "epicKeyField",\n      "storyPointField": "storyPointField"\n  }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a new data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-POST",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type"\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Update data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PUT",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Get data connection detail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Delete data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-DELETE",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},"")),(0,i.kt)("h3",{id:"type-mappings"},"Type mappings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all type mappings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId/type-mappings","/plugins/jira/connections/:connectionId/type-mappings":!0},'[\n  {\n    "jiraConnectionId": 16,\n    "userType": "userType",\n    "standardType": "standardType"\n  }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a new type mapping")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-POST",metastring:"/plugins/jira/connections/:connectionId/type-mappings","/plugins/jira/connections/:connectionId/type-mappings":!0},'{\n    "userType": "userType",\n    "standardType": "standardType"\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Update type mapping")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PUT",metastring:"/plugins/jira/connections/:connectionId/type-mapping/:userType","/plugins/jira/connections/:connectionId/type-mapping/:userType":!0},'{\n    "standardType": "standardTypeUpdated"\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Delete type mapping")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-DELETE",metastring:"/plugins/jira/connections/:connectionId/type-mapping/:userType","/plugins/jira/connections/:connectionId/type-mapping/:userType":!0},"")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"API forwarding\nFor example:\nRequests to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://your_devlake_host/plugins/jira/connections/1/proxy/rest/agile/1.0/board/8/sprint"),"\nwould be forwarded to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://your_jira_host/rest/agile/1.0/board/8/sprint"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId/proxy/rest/*path","/plugins/jira/connections/:connectionId/proxy/rest/*path":!0},'{\n    "maxResults": 1,\n    "startAt": 0,\n    "isLast": false,\n    "values": [\n        {\n            "id": 7,\n            "self": "https://merico.atlassian.net/rest/agile/1.0/sprint/7",\n            "state": "closed",\n            "name": "EE Sprint 7",\n            "startDate": "2020-06-12T00:38:51.882Z",\n            "endDate": "2020-06-26T00:38:00.000Z",\n            "completeDate": "2020-06-22T05:59:58.980Z",\n            "originBoardId": 8,\n            "goal": ""\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);
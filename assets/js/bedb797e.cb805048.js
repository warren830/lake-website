"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8945],{35446:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"Configuring GitHub",sidebar_position:2,description:"Config UI instruction for GitHub"},s=void 0,l={unversionedId:"UserManuals/ConfigUI/GitHub",id:"version-v0.13/UserManuals/ConfigUI/GitHub",title:"Configuring GitHub",description:"Config UI instruction for GitHub",source:"@site/versioned_docs/version-v0.13/UserManuals/ConfigUI/GitHub.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/GitHub",permalink:"/docs/v0.13/UserManuals/ConfigUI/GitHub",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/UserManuals/ConfigUI/GitHub.md",tags:[],version:"v0.13",sidebarPosition:2,frontMatter:{title:"Configuring GitHub",sidebar_position:2,description:"Config UI instruction for GitHub"},sidebar:"docsSidebar",previous:{title:"Tutorial",permalink:"/docs/v0.13/UserManuals/ConfigUI/Tutorial"},next:{title:"Configuring GitLab",permalink:"/docs/v0.13/UserManuals/ConfigUI/GitLab"}},r={},u=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Auth Token(s)",id:"auth-tokens",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Issue Tracking",id:"issue-tracking",level:4},{value:"Code Review",id:"code-review",level:4},{value:"Additional Settings (Optional)",id:"additional-settings-optional",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-add-data-connections",src:i(15719).Z,width:"1814",height:"1216"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Name your connection."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.github.com/"),". The url should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("h4",{id:"auth-tokens"},"Auth Token(s)"),(0,a.kt)("p",null,"GitHub personal access tokens are required to add a connection."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn about ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"how to create a GitHub personal access token")),(0,a.kt)("li",{parentName:"ul"},"The data collection speed is relatively slow for GitHub since they have a ",(0,a.kt)("strong",{parentName:"li"},"rate limit of ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting"},"5,000 requests")," per hour")," (15,000 requests/hour if you pay for GitHub enterprise). You can accelerate the process by configuring ",(0,a.kt)("em",{parentName:"li"},"multiple")," personal access tokens. Please note that multiple tokens should be created by different GitHub accounts. Tokens belonging to the same GitHub account share the rate limit.")),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-set-data-scope",src:i(11163).Z,width:"1522",height:"1158"})),(0,a.kt)("h4",{id:"projects"},"Projects"),(0,a.kt)("p",null,'Enter the GitHub repos to collect. If you want to collect more than 1 repo, please separate repos with comma. For example, "apache/incubator-devlake,apache/incubator-devlake-website".'),(0,a.kt)("h4",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain GitHub entities, you can unselect some entities to accelerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: GitHub issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Source Code Management: GitHub repos, refs, commits, etc."),(0,a.kt)("li",{parentName:"ul"},"Code Review: GitHub PRs, PR comments and reviews, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: GitHub accounts, etc.")),(0,a.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-add-transformation-rules-list",src:i(90843).Z,width:"1530",height:"656"}),"\n",(0,a.kt)("img",{alt:"github-add-transformation-rules",src:i(50290).Z,width:"2314",height:"1494"})),(0,a.kt)("p",null,'Without adding transformation rules, you can still view the "',(0,a.kt)("a",{parentName:"p",href:"/livedemo/GitHubBasic"},"GitHub Basic Metrics"),'" dashboard. However, if you want to view "',(0,a.kt)("a",{parentName:"p",href:"/livedemo/WeeklyBugRetro"},"Weekly Bug Retro"),'", "',(0,a.kt)("a",{parentName:"p",href:"/livedemo/WeeklyCommunityRetro"},"Weekly Community Retro"),'" or other pre-built dashboards, the following transformation rules, especially "Type/Bug", should be added.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each GitHub repo has at most ONE set of transformation rules."),(0,a.kt)("h4",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Severity: Parse the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"severity")," from issue labels."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when your issue labels for severity level are like 'severity/p0', 'severity/p1', 'severity/p2', then input 'severity/(.*)$'"),(0,a.kt)("li",{parentName:"ul"},"when your issue labels for severity level are like 'p0', 'p1', 'p2', then input '(p0|p1|p2)$'"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Component: Same as "Severity".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Priority: Same as "Severity".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type/Requirement: The ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),' of issues with labels that match given regular expression will be set to "REQUIREMENT". Unlike "PR.type", submatch does nothing, because for issue management analysis, users tend to focus on 3 kinds of types (Requirement/Bug/Incident), however, the concrete naming varies from repo to repo, time to time, so we decided to standardize them to help analysts metrics.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Type/Bug: Same as "Type/Requirement", with ',(0,a.kt)("inlineCode",{parentName:"p"},"type"),' setting to "BUG".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Type/Incident: Same as "Type/Requirement", with ',(0,a.kt)("inlineCode",{parentName:"p"},"type"),' setting to "INCIDENT".'))),(0,a.kt)("h4",{id:"code-review"},"Code Review"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of pull requests will be parsed from PR labels by given regular expression. For example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when your labels for PR types are like 'type/feature-development', 'type/bug-fixing' and 'type/docs', please input 'type/(.*)$'"),(0,a.kt)("li",{parentName:"ul"},"when your labels for PR types are like 'feature-development', 'bug-fixing' and 'docs', please input '(feature-development|bug-fixing|docs)$'"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Component: The ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," of pull requests will be parsed from PR labels by given regular expression."))),(0,a.kt)("h4",{id:"additional-settings-optional"},"Additional Settings (Optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Limit: It\'ll compare the last N pairs of tags to get the "commit diff\', "issue diff" between tags. N defaults to 10.'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"commit diff: new commits for a tag relative to the previous one"),(0,a.kt)("li",{parentName:"ul"},"issue diff: issues solved by the new commits for a tag relative to the previous one"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tags Pattern: Only tags that meet given regular expression will be counted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Tags Order: Only "reverse semver" order is supported for now.'))),(0,a.kt)("p",null,"Please click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," to save the transformation rules for the repo. In the data scope list, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next Step")," to continue configuring."),(0,a.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."))}d.isMDXComponent=!0},15719:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-add-data-connections-6853b7aab69a4835e64b78cb1e26d8ab.png"},90843:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-add-transformation-rules-list-ade7b95d344473c6e6b395f76165adee.png"},50290:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-add-transformation-rules-2ee17832884448e367ec53375250378f.png"},11163:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/github-set-data-scope-c0713a2ba33d027ae07535c20586130b.png"}}]);
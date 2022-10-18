"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9191],{33187:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=i(87462),n=(i(67294),i(3905));i(61839);const s={title:"Commit Count",description:"Commit Count\n",sidebar_position:6},a=void 0,r={unversionedId:"Metrics/CommitCount",id:"version-v0.13/Metrics/CommitCount",title:"Commit Count",description:"Commit Count\n",source:"@site/versioned_docs/version-v0.13/Metrics/CommitCount.md",sourceDirName:"Metrics",slug:"/Metrics/CommitCount",permalink:"/zh/docs/v0.13/Metrics/CommitCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Metrics/CommitCount.md",tags:[],version:"v0.13",sidebarPosition:6,frontMatter:{title:"Commit Count",description:"Commit Count\n",sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Requirement Granularity",permalink:"/zh/docs/v0.13/Metrics/RequirementGranularity"},next:{title:"Added Lines of Code",permalink:"/zh/docs/v0.13/Metrics/AddedLinesOfCode"}},m={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:l};function d(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The number of commits created."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Identify potential bottlenecks that may affect output"),(0,n.kt)("li",{parentName:"ol"},"Encourage R&D practices of small step submissions and develop excellent coding habits")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitHub Release Quality and Contribution Analysis"),(0,n.kt)("li",{parentName:"ul"},"Demo-Is this month more productive than last?"),(0,n.kt)("li",{parentName:"ul"},"Demo-Commit Count by Author")),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric is calculated by counting the number of commits in the given data range."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on commits collected from GitHub, GitLab or BitBucket."),(0,n.kt)("b",null,"Transformation Rules Required"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("p",null,"If you want to see the monthly trend, run the following SQL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  with _commits as(\n    SELECT\n      DATE_ADD(date(authored_date), INTERVAL -DAY(date(authored_date))+1 DAY) as time,\n      count(*) as commit_count\n    FROM commits\n    WHERE\n      message not like '%Merge%'\n      and $__timeFilter(authored_date)\n    group by 1\n  )\n\n  SELECT \n    date_format(time,'%M %Y') as month,\n    commit_count as \"Commit Count\"\n  FROM _commits\n  ORDER BY time\n")),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Identify the main reasons for the unusual number of commits and the possible impact on the number of commits through comparison"),(0,n.kt)("li",{parentName:"ol"},"Evaluate whether the number of commits is reasonable in conjunction with more microscopic workload metrics (e.g. lines of code/code equivalents)")))}d.isMDXComponent=!0}}]);
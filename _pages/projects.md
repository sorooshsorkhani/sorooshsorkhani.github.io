---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /projects
---


## RankLib Gini
Ranklib offers a valuable feature management tool, generating insightful feature usage statistics. These statistics unveil the frequency of each feature's utilization within the learning to rank model. However, it's essential to recognize that the frequency of a feature does not necessarily correlate with its importance or effectiveness.
<br/>In response to this, I have developed a specialized program to calculate the Gini importance of features in RankLib's random forest model. The Gini importance metric is widely acknowledged and utilized in learning to rank research as a reliable criterion for determining the most impactful features.
<br/>My program is available in this [GitHub repository](https://github.com/sorooshsorkhani/RankLib-Gini).
<br/>[Laboratory for Systems, Software and Semantics](https://ls3.rnet.torontomu.ca/)
<br/> *<span style="color:green;">Keywords:</span> Gini Feature Importance, RankLib, Learning to Rank, Random Forests*

## Question Routing
We developed an expert recommending system for Q&A platforms, such as Stack Overflow and Quora. We defined 74 features using techniques such as LDA topic modeling, word mover’s distance text similarity, and graph embedding. We optimized the features through feature engineering and proposed a learning to rank approach that achieved 16.41% higher performance than the deep learning state-of-the-art model in NDCG@10 on 5 websites’ datasets. We used a transparent and interpretable model and provided insights on the most important and effective features. The result is published as a journal paper and can be found [here](https://www.sciencedirect.com/science/article/pii/S0020025522006661).
<br/>[Laboratory for Systems, Software and Semantics](https://ls3.rnet.torontomu.ca/)
<br/> *<span style="color:green;">Keywords:</span> Question routing, Expert finding, Embedding, Learning to rank*




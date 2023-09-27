---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /projects
---

## Parked Cars Detection
Our aim is to analyze dashboard camera footage from a moving vehicle, using state-of-the-art models such as YOLOv8 and the Segment Anything Model, to detect parked cars along urban streets in real time. This addresses the critical gap in urban data on on-street parking, vital for numerous research studies. This project is currently in progress, and we anticipate releasing the final results and product in the near future. Stay tuned for updates.
<br/> *<span style="color:green;">Keywords:</span> Computer Vision, Segment Anything Model, YOLOv8, Object Tracking*

## Parking Violations
<!-- Left side: project description -->
<div style="width: 70%; float: left;">
We've meticulously gathered data publicly available from the City of Toronto's open data platform, focusing on on-street parking dynamics. This extensive dataset encompasses transactional records of parking space usage, amenities in proximity to these areas, and reported violations leading to ticket issuance.
<br/>Our primary objective is to employ cutting-edge models, including Graph Neural Networks and Gradient Boosted Trees, to predict instances and locations where parking violations are more likely to occur. This innovative study holds the potential to significantly contribute to the city's urban planning efforts by shedding light on patterns and trends related to parking violations. This project is ongoing, with active refinement and analysis underway for future publication. Stay tuned for updates and insights from our research.
<br/> *<span style="color:green;">Keywords:</span> Graph Neural Network, Gradient Boosted Trees, Urban Planning Insight*
</div>

<!-- Right side: project image -->
<div style="width: 30%; float: right;">
  <img src="/images/heat_map.png" alt="Parking Violations Project Image" style="max-width: 100%; width: 300px;">
</div>

<div style="clear: both;"></div>


## RankLib Gini
Ranklib offers a valuable feature management tool, generating insightful feature usage statistics. These statistics unveil the frequency of each feature's utilization within the learning to rank model. However, it's essential to recognize that the frequency of a feature does not necessarily correlate with its importance or effectiveness.
<br/>In response to this, I have developed a specialized program to calculate the Gini importance of features in RankLib's random forest model. The Gini importance metric is widely acknowledged and utilized in learning to rank research as a reliable criterion for determining the most impactful features.
<br/>My program is available in this [GitHub repository](https://github.com/sorooshsorkhani/RankLib-Gini).
<br/>[Laboratory for Systems, Software and Semantics](https://ls3.rnet.torontomu.ca/)
<br/> *<span style="color:green;">Keywords:</span> Gini Feature Importance, RankLib, Learning to Rank, Random Forests*

## Question Routing
We developed an expert recommending system for Q&A platforms, such as Stack Overflow and Quora. We defined 74 features using techniques such as LDA topic modeling, word mover’s distance text similarity, and graph embedding. We optimized the features through feature engineering and proposed a learning to rank approach that achieved 16.41% higher performance than the deep learning state-of-the-art model in NDCG@10 on 5 websites’ datasets. We used a transparent and interpretable model and provided insights on the most important and effective features. The result is published as a journal paper and can be found [here](https://www.sciencedirect.com/science/article/pii/S0020025522006661).
<br/>[Laboratory for Systems, Software and Semantics](https://ls3.rnet.torontomu.ca/)
<br/> *<span style="color:green;">Keywords:</span> Question routing, Expert finding, Embedding, Learning to rank, Multimodal Representation*




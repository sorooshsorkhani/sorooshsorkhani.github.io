---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /projects
---

## On-street Parking Occupancy Detection
<!-- Left side: project description -->
<div style="width: 70%; float: left;">
  We developed an approach to parking demand data collection that leverages dashcams on moving bikes. We begin by geofencing existing on-street parking zones based on the Toronto Parking Authority’s Green-P zones. We then use object detection models to detect vehicle presence when a bike crosses the designated fence and enters the parking zone. Every time a parking zone is visited, the occupancy ground truth is revealed. Therefore, the occupancy prediction accuracy improves with the number of visits per parking zone. The data is subsequently analyzed and visualized on a GIS-based tool to enhance data-driven parking policy decision-making, such as pricing and enforcement. 
  <br/> *<span style="color:green;">Keywords:</span> Computer Vision, YOLOv8, Object Tracking*
</div>

<!-- Right side: project video -->
<div style="width: 30%; float: right;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/eLD5K3X6t_k?si=-NzfXQf608uDmfTd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div style="clear: both;"></div>


<div style="clear: both;"></div>

## Parking Violations
<!-- Left side: project description -->
<div style="width: 70%; float: left;">
We've meticulously gathered data publicly available from the City of Toronto's open data platform, focusing on on-street parking dynamics. This extensive dataset encompasses transactional records of parking space usage, amenities in proximity to these areas, and reported violations leading to ticket issuance.
<br/>Our primary objective is to employ cutting-edge models, including Graph Neural Networks and Gradient Boosted Trees, to predict instances and locations where parking violations are more likely to occur. This innovative study holds the potential to significantly contribute to the city's urban planning efforts by shedding light on patterns and trends related to parking violations. This project is ongoing, with active refinement and analysis underway for future publication. Stay tuned for updates and insights from our research.
<br/> *<span style="color:green;">Keywords:</span> Graph Neural Network, Gradient Boosted Trees, Urban Planning Insight*
</div>

<!-- Right side: heatmap image -->
<div style="width: 30%; float: right;">
  <img src="/images/heat_map.png" alt="Parking Violations Heatmap Image" style="max-width: 100%; width: 300px;">
</div>

<div style="clear: both;"></div>

<!-- Second Image: sample prediction image -->
<div style="width: 30%; float: right; clear: both;">
  <img src="/images/sample_prediction.png" alt="Parking Violations Sample Prediction Image" style="max-width: 100%; width: 300px;">
</div>


## RankLib Gini Feature Importance
Ranklib offers a valuable feature management tool, generating insightful feature usage statistics. These statistics unveil the frequency of each feature's utilization within the learning to rank model. However, it's essential to recognize that the frequency of a feature does not necessarily correlate with its importance or effectiveness.
<br/>In response to this, I have developed a specialized program to calculate the Gini importance of features in RankLib's random forest model. The Gini importance metric is widely acknowledged and utilized in learning to rank research as a reliable criterion for determining the most impactful features.
<br/>My program is available in this <a href="https://github.com/sorooshsorkhani/RankLib-Gini">GitHub repository</a>.
<br/><a href="https://ls3.rnet.torontomu.ca/">Laboratory for Systems, Software and Semantics</a>
<br/> *<span style="color:green;">Keywords:</span> Gini Feature Importance, RankLib, Learning to Rank, Random Forests*

## Question Routing in Community Question-Answering Platforms
<!-- Left side: project description -->
<div style="width: 70%; float: left;">
  The success of community question-answering (CQA) platforms, such as Stack Overflow and Quora, is dependent on how efficiently new questions are assigned to community experts, known as question routing. We developed an expert recommending system for CQA platforms. We defined 74 features using techniques such as LDA topic modeling, word mover’s distance text similarity, and graph embedding. We optimized the features through feature engineering and proposed a learning to rank approach that achieved 16.41% higher performance than the deep learning state-of-the-art model in NDCG@10 on 5 websites’ datasets. We used a transparent and interpretable model and provided insights on the most important and effective features. The result is published as a journal paper and can be found <a href="https://www.sciencedirect.com/science/article/pii/S0020025522006661">here</a>.
  <br/><a href="https://ls3.rnet.torontomu.ca/">Laboratory for Systems, Software and Semantics</a>
  <br/> *<span style="color:green;">Keywords:</span> Question routing, Expert finding, Embedding, Learning to rank, Multimodal Representation*
</div>

<!-- Right side: project image -->
<div style="width: 30%; float: right;">
  <img src="/images/question_routing_overview.png" alt="Question Routing Image" style="max-width: 100%; width: 300px;">
</div>

<div style="clear: both;"></div>




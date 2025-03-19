// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Experience.css";

const experienceData = [
  {
    role: "Software Development Engineer",
    company: "Amazon",
    duration: "Aug 2020 - Dec 2022",
    description: [
      "Designed and developed the Amazon Inventory Management Service (AIMS) using Java, Spring Boot, and AWS, ensuring real-time inventory tracking and seamless synchronization across fulfillment centers.",
      "Implemented RESTful APIs, Amazon DynamoDB (NoSQL), and Amazon Aurora (SQL) to optimize stock management, reducing query response times and improving data consistency.",
      "Built an event-driven architecture using Kafka and Amazon SQS, enhancing real-time stock updates and reducing processing latency by 40%.",
      "Improved system performance by integrating Redis caching (ElastiCache) and automating deployments with Docker, Kubernetes (EKS), and AWS Lambda, leading to increased scalability and reliability."
    ]
  },
  {
    role: "Software Developer",
    company: "Knoah Solutions",
    duration: "Aug 2018 - Nov 2019",
    description: [
      "Designed and developed a Spring Boot-based Support Ticket Management System to automate ticket categorization, escalation, and resolution tracking, improving response efficiency by 40%.",
      "Implemented RESTful APIs to integrate with existing CRM tools (Zendesk, Freshdesk, ServiceNow), enabling seamless data exchange and reducing manual ticket assignments.",
      "Utilized Spring Data JPA and PostgreSQL to efficiently manage customer queries, ticket status updates, and resolution logs, ensuring data consistency and faster lookups.",
      "Integrated Kafka-based event-driven architecture to trigger automated responses and SLA-based escalations, reducing ticket backlogs and improving resolution times.",
      "Developed a real-time agent dashboard (React + Spring Boot) for support agents to track pending tickets, automate canned responses, and analyze ticket trends for proactive issue resolution.",
      "Enhanced system performance by implementing Redis caching for frequently accessed customer query data, reducing database queries by 50%."
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-card">
            <h3>{item.role}</h3>
            <p className="company">{item.company}</p>
            <p className="duration">{item.duration}</p>
            <ul>
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

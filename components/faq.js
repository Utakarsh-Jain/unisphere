import React, { useState } from "react";
import "../styles/faq.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Studique?",
      answer:
        "Studique is a platform designed to empower students by offering a community space where they can collaborate, learn, and grow. It focuses on providing resources, guidance, and opportunities tailored for student success.",
    },
    {
      question: "What features does Studique offer?",
      answer:
        "Studique offers mentorship, learning resources, community discussions, and career opportunities tailored for students.",
    },
    {
      question: "How can I join Studique?",
      answer:
        "You can join Studique by signing up on our website and becoming a part of the student community.",
    },
    {
      question: "Is Studique free to use?",
      answer: "Yes, Studique is completely free for students to join and access resources.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <span className="faq-badge">FAQs</span>
      <h2 className="faq-title">Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className={index === 0 ? "highlight-question" : ""}>
                {faq.question}
              </span>
              <button className="faq-toggle">
                {openIndex === index ? "−" : "+"}
              </button>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

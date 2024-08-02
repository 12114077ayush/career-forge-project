// import React from 'react'
import Status from "../../stats/Status";
import { motion } from "framer-motion";
// import Navbar from '../navbar/Navbar'
import "./Services.scss";
function Services() {
  return (
    <div className="services">
      {/* <Navbar /> */}
      <div className="serviceswrapper">
        <div className="firstgrp">
          <div className="resumebuilder">
            <motion.div
              className="resumetext"
              initial={{ opacity: 1, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                },
              }}
            >
              <h1>Resume Builder: Create Your Perfect Resume</h1>
              <p>
                Our intuitive platform empowers you to create resumes that
                capture your unique strengths and experiences with precision and
                professionalism. Whether you are a seasoned professional or just
                starting your career journey, our user-friendly interface guides
                you through each step effortlessly, ensuring every section
                reflects your true potential.
              </p>
              <button className="resumebtn">
                <a
                  href="https://resume-builder-iota-five.vercel.app/"
                  style={{ textDecoration: "none", color: "#F7F1E5" }}
                >
                  Build Resume{" "}
                </a>
              </button>
            </motion.div>
          </div>
          <div className="placementstats">
            <motion.div
              className="palcementtext"
              initial={{ opacity: 1, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                },
              }}
            >
              <h1>Placement Data: Explore the placement statistics</h1>
              <p>
                Here, you can explore the dynamic landscape of career placements
                for any specific year, empowered by comprehensive statistical
                insights and visually compelling graphics.Not only do we offer
                insights for the current year, but we also provide data for the
                past three years, enabling you to track college performance and
                observe any emerging trends over time.
              </p>
              <button className="placementbtn">
                {" "}
                <a
                  href="#services2"
                  style={{ textDecoration: "none", color: "#F7F1E5" }}
                >
                  View Data{" "}
                </a>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="secondgrp">
          <div className="careerguide">
            <motion.div
              className="careerguidetext"
              initial={{ opacity: 1, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                },
              }}
            >
              <h1>Career Guide: Chart Your Path to Success</h1>
              <p>
                Here, we meticulously craft roadmaps for every crucial milestone
                in your academic journey, be it undergraduate or postgraduate
                studies. Each roadmap is meticulously designed to guide you
                through the preparation, strategies, and opportunities that lie
                ahead.From mastering exam preparation techniques to deciphering
                intricate strategies, every step is explained.
              </p>
              <div className="roadmapbtns">
                <button className="careerbtn">
                  <a
                    href="https://whimsical.com/embed/4U2JQe4tsMQ2gr9GnTx9k1"
                    style={{ textDecoration: "none", color: "#F7F1E5" }}
                  >
                    Roadmap 1
                  </a>
                </button>
                <button className="careerbtn">
                  <a
                    href="https://whimsical.com/embed/GURcD58XEBwdyjHReHHksS"
                    style={{ textDecoration: "none", color: "#F7F1E5" }}
                  >
                    Roadmap 2
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
          <div className="interview">
            <motion.div
              className="interviewtext"
              initial={{ opacity: 1, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                },
              }}
            >
              <h1>Interview Probes: Common Queries for Placement</h1>
              <p>
                Our intuitive platform empowers you to create resumes that
                capture your unique strengths and experiences with precision and
                professionalism. Whether you are a seasoned professional or just
                starting your career journey, our user-friendly interface guides
                you through each step effortlessly, ensuring every section
                reflects your true potential.
              </p>
              <button className="interviewbtn">
                <a href="#interviewservice">View Questions</a>
              </button>
            </motion.div>
          </div>
        </div>
        <div>
          <Status />
        </div>
        <div className="interviewquery">
          <div className="interviewquerywrapper" id="interviewservice">
            <div className="interviewhead">Interview Questions!</div>
            <div className="questions">
              <details>
                <summary>Tell me about yourself and your background.</summary>
                <p>
                  Start the answer by talking about your personal details like
                  where you grew up and where you did your education from. Then
                  slowly transition into the phase that shaped you the way
                  you’re today professionally. Don’t share too much or too
                  little while answering this question.
                  <br />
                  Use the “Present-Past-Future” formula to shape your answer.
                  <br />
                  1. Start with what you’re doing now in terms of your career.
                  Throw in some personal preferences.
                  <br />
                  2. Take the recruiter back to the past and show him/her how
                  your past shaped your present.
                  <br />
                  3. End this answer with your future goals and aspirations you
                  want to achieve.
                </p>
              </details>
              <details>
                <summary>Why are you interested in this position?</summary>
                <p>
                  Suppose You are a recent graduate seeking your first
                  professional role in artificial intelligence and machine
                  learning. Utilize your research on the chosen industry and a
                  specific company you’re interested in to draft a compelling
                  answer to the question: “Why are you interested in this
                  position?”. Remember to:
                  <br />
                  1. Introduce yourself: Briefly mention your educational
                  background and current career aspirations.
                  <br />
                  2. Showcase your passion: Share experiences or activities that
                  sparked your interest in the field and highlight relevant
                  skills you’ve acquired.
                  <br />
                  3. Connect to the position: Explain how the current position
                  aligns with your future goals and what specific aspects excite
                  you.
                  <br />
                  4. Quantify your achievements: Use specific examples and data
                  to demonstrate your impact and potential value to the company.
                  <br />
                  5. Demonstrate enthusiasm: Express genuine interest in the
                  company’s mission and values, showcasing how you can
                  contribute.
                  <br />
                  6. Tailor your answer: Ensure your response reflects the
                  specific needs and culture of the company you’re applying to
                </p>
              </details>
              <details>
                <summary>What are your salary expectations?</summary>
                <p>
                  This is a common but tricky question that employers ask to
                  gauge your suitability and expectations for the role. Here are
                  some tips on how to answer it effectively:
                  <br />
                  1. Do some research before the interview on the average salary
                  range for the position and the location. You can use online
                  tools like Indeed’s salary search tool or Glassdoor to find
                  relevant data and benchmarks. <br />
                  2. Avoid giving a specific number or a narrow range, as this
                  may limit your negotiation power or price you out of the job.
                  Instead, provide a broad and realistic range based on your
                  research and your experience level. You can also mention other
                  factors that influence your salary expectations, such as cost
                  of living, benefits, and career growth opportunities.
                  <br />
                  3. Express your flexibility and openness to negotiate, and
                  show your enthusiasm and interest in the role and the company.
                  You can also ask the employer about their budget or salary
                  range for the position, and use that information to adjust
                  your answer accordingly.
                </p>
              </details>
              <details>
                <summary>Why are you the best fit for this job?</summary>
                <p>
                  Another icebreaker question that determines your passion for
                  working in the company. Recruiters are interested in knowing
                  if you meet all of the qualifications. Prepare to justify why
                  you are the best candidate for the job. Make your answer an
                  optimistic, succinct, and focused sales pitch outlining what
                  you have to offer and why you should be hired. This is a good
                  time to review the job description’s qualifications and
                  requirements so you can craft a response that matches what the
                  interviewer is looking for.
                </p>
              </details>
              <details>
                <summary>
                  When you’re balancing multiple projects, how do you keep
                  yourself organized?
                </summary>
                <p>
                  Another icebreaker question that determines your passion for
                  working in the company. Recruiters are interested in knowing
                  if you meet all of the qualifications. Prepare to justify why
                  you are the best candidate for the job. Make your answer an
                  optimistic, succinct, and focused sales pitch outlining what
                  you have to offer and why you should be hired. This is a good
                  time to review the job description’s qualifications and
                  requirements so you can craft a response that matches what the
                  interviewer is looking for.
                </p>
              </details>
              <details>
                <summary>What can you bring to the company?</summary>
                <p>
                  When interviewers ask this question, they don’t just want to
                  hear about your background. They want to see that you
                  understand what problems and challenges they’re facing as a
                  company or department as well as how you’ll fit into the
                  existing organization. Read the job description closely, do
                  your research on the company, and make sure you pay attention
                  in your early round interviews to understand any issues you’re
                  being hired to solve. Then, the key is to connect your skills
                  and experiences to what the company needs and share an example
                  that shows how you’ve done similar or transferable work in the
                  past.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

/*
 * ============================================================
 * UPCOMING EVENTS
 * ============================================================
 *
 * Add future events here.
 *
 * HOW TO ADD A NEW UPCOMING EVENT:
 *
 * 1. Place the event poster inside:
 *
 *    public/images/events/upcoming/
 *
 * 2. Add a new event object inside the `upcomingEvents` array.
 *
 * 3. Fill in:
 *    - title
 *    - date
 *    - description
 *    - highlights
 *    - poster
 *    - registrationLink
 *
 * 4. If there are currently NO upcoming events, leave this
 *    array empty. The website will automatically display a
 *    professional "No upcoming events" message.
 *
 * EXAMPLE:
 *
 * export const upcomingEvents = [
 *   {
 *     title: "Quality Summit 2026",
 *     date: "15 October 2026",
 *     description:
 *       "A concise description of the upcoming event.",
 *     highlights: [
 *       "Key topic or activity covered in the event.",
 *       "Important learning opportunity for participants.",
 *       "Industry-oriented insights and practical exposure.",
 *     ],
 *     poster:
 *       "/images/events/upcoming/quality-summit-2026.jpg",
 *     registrationLink:
 *       "https://forms.google.com/your-form-link",
 *   },
 * ];
 *
 * IMPORTANT:
 * - `poster` should point to the event poster stored inside
 *   `public/images/events/upcoming/`.
 * - `registrationLink` should contain the complete URL of the
 *   registration form.
 * - You can add multiple upcoming events to this array.
 * ============================================================
 */

export const upcomingEvents = [
  /*
   * ----------------------------------------------------------
   * FUTURE UPCOMING EVENTS GO HERE
   * ----------------------------------------------------------
   *
   * Keep this array empty when there are no upcoming events.
   *
   * When a new event is announced, copy the example structure
   * from the comment above, add the poster to:
   *
   * public/images/events/upcoming/
   *
   * and fill in the event details and registration link.
   */
];


/*
 * ============================================================
 * PAST EVENTS
 * ============================================================
 *
 * All completed events are maintained below.
 *
 * When a new event is completed:
 * 1. Add its images inside public/images/events/
 * 2. Add the event object to this array.
 *
 * Existing event information and image paths should be
 * preserved unless there is a deliberate content update.
 * ============================================================
 */

export const events = [
  {
    title: "Basics of Total Quality Management",
    date: "1 February 2025",
    linkedin: "https://www.linkedin.com/posts/quality-club-bit-sindri_qualitymanagement-webinar-scmishra-activity-7290974309345312769-kCe2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNRSp4B9iMaCHbQhdDv8AhnejowtNvr6As",
    contentHeading: "Foundations of Quality Management",
    description:
      "An introductory session on the fundamentals of Total Quality Management, helping students understand the importance of quality principles, structured processes, and industry-oriented quality practices.",
    highlights: [
      "Understanding the fundamentals of Total Quality Management.",
      "Exploring core quality principles used in professional environments.",
      "Connecting academic quality concepts with industry practices.",
      "Understanding the role of quality in building reliable and efficient processes.",
    ],
    images: [
      "/images/events/event-1/poster.jpg",
    ],
  },

  {
    title: "Lessons from Antarctica: Quality in Scientific Missions",
    date: "16 February 2026",
    linkedin: "https://www.linkedin.com/posts/quality-club-bit-sindri_quality-management-antarctica-activity-7295374063369572352-xT5G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFo4y-kBpTj01bK5W7xXf4W6sV8x8K722U&utm_content=1&utm_campaign=one_share_sheet",
    contentHeading: "Quality Beyond Boundaries",
    description:
      "An inspiring session exploring how precision, reliability, discipline, and quality practices become essential in scientific missions conducted under extreme conditions. Through insights from Antarctica and real scientific fieldwork, students gained a broader understanding of how quality directly influences mission success, safety, and reliability.",
    highlights: [
      "Quality and precision in extreme operating environments.",
      "Reliability of scientific instruments and mission systems.",
      "Role of discipline in scientific fieldwork.",
      "Leadership through collaboration and collective responsibility.",
      "Adaptability and continuous improvement in challenging situations.",
    ],
    images: [
      "/images/events/event-2/image-1.jpg",
      "/images/events/event-2/image-2.jpg",
    ],
  },

  {
    title: "Quality Edge Series – Episode 1",
    date: "5 April 2026",
    linkedin: "https://www.linkedin.com/posts/quality-club-bit-sindri_qualityedgeseries-ankitajha-tatasteel-activity-7447528221824172032-bAEl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNRSp4B9iMaCHbQhdDv8AhnejowtNvr6As",
    contentHeading: "Building Quality into Everyday Operations",
    description:
      "The inaugural episode of the Quality Edge Series connected classroom concepts with industry practice through an interactive session on Cost of Poor Quality (COPQ) and the 5S Method of Lean Manufacturing. Ms. Ankita Jha of Tata Steel shared practical insights into workplace discipline, operational efficiency, and identifying quality-related losses.",
    highlights: [
      "Understanding 5S as an ongoing workplace culture, not merely a checklist.",
      "Learning how Sort, Set in Order, Shine, Standardize, and Sustain support operational discipline.",
      "Identifying hidden costs of poor quality, including rework, defects, internal failures, and customer complaints.",
      "Connecting quality management concepts with real-world industrial operations.",
      "Learning directly from an industry practitioner's experience at Tata Steel.",
    ],
    images: [
      "/images/events/event-3/image-1.jpg",
    ],
  },

  {
    title: "Quality Edge Series – Episode 2",
    contentHeading: "Turning Quality Tools into Better Decisions",
    description:
      "The second episode of the Quality Edge Series introduced students to the Seven Basic Quality Control Tools and their role in systematic problem-solving. Through practical industry perspectives from Tata Steel, the session demonstrated how quality tools can help identify root causes, recognize recurring issues, prioritize problems, and support better decisions.",
    highlights: [
      "Understanding the 7 QC Tools as a foundation for systematic quality management.",
      "Using tools such as Fishbone Diagrams, Histograms, Pareto Charts, and Control Charts to analyze problems.",
      "Identifying root causes, recurring defects, and major sources of problems.",
      "Using data to prioritize corrective actions and improve processes.",
      "Recognizing quality management as a systematic approach to problem-solving across engineering domains.",
    ],
    images: [
      "/images/events/event-4/image-1.jpg",
    ],
  },

  {
    title: "School Outreach Programme – De Nobili School, Sindri",
    contentHeading: "Building Skills Beyond the Classroom",
    description:
      "The Quality Club, BIT Sindri conducted an interactive outreach programme at De Nobili School, Sindri, encouraging students to look beyond academic marks and develop essential skills for their personal, academic, and future professional growth.",
    highlights: [
      "Critical Thinking — Encouraging thoughtful analysis and problem-solving.",
      "Communication & Personal Branding — Building confidence and effective self-expression.",
      "Time Management — Learning to prioritize tasks and use time effectively.",
      "Digital Literacy — Promoting responsible and effective use of digital tools.",
      "Leadership & Teamwork — Developing collaboration, responsibility, and adaptability.",
    ],
    images: [
      "/images/events/event-5/image-1.jpg",
      "/images/events/event-5/image-2.jpg",
    ],
  },

  {
    title: "Quality Tools & Problem-Solving Orientation",
    contentHeading: "Developing a Quality-Driven Mindset",
    description:
      "An interactive orientation session introducing students to practical quality tools and systematic problem-solving techniques. The session demonstrated how tools such as Pareto Analysis, Fishbone Diagrams, and Cost of Poor Quality can help students break down complex problems, identify root causes, and focus on areas with the greatest impact.",
    highlights: [
      "Pareto Principle — Prioritizing the most significant problems.",
      "Fishbone Diagram — Identifying and analysing root causes.",
      "Cost of Poor Quality — Understanding the impact of quality-related losses.",
      "Systematic Problem-Solving — Breaking complex challenges into manageable parts.",
      "Continuous Improvement — Developing quality-oriented thinking for real-world challenges.",
    ],
    images: [
      "/images/events/event-6/image-1.jpg",
      "/images/events/event-6/image-2.jpg",
    ],
  },

  {
    title: "Orientation Seminar 2026",
    date: "8 January 2026",
    linkedin: "https://www.linkedin.com/posts/quality-club-bit-sindri_qualityclub-bitsindri-engineeringeducation-activity-7415759108848472064-ZPWn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNRSp4B9iMaCHbQhdDv8AhnejowtNvr6As",
    contentHeading: "From Classroom Concepts to Industry Practices",
    description:
      "An orientation seminar designed to introduce second-year students to industry practices, quality-driven thinking, and structured systems beyond conventional classroom learning. The session explored the importance of Standard Operating Procedures (SOPs), introduced the principles of Six Sigma, and encouraged students to approach real-world challenges through systematic thinking.",
    highlights: [
      "Standard Operating Procedures — Understanding the role of structured and standardized processes.",
      "Introduction to Six Sigma — Developing an initial understanding of quality and process improvement.",
      "Industry Exposure — Exploring how quality principles translate into professional environments.",
      "Systematic Problem-Solving — Encouraging critical thinking and structured approaches to challenges.",
      "Quality-Driven Thinking — Building curiosity and awareness of the role of quality in engineering.",
    ],
    images: [
      "/images/events/event-7/image-1.jpg",
      "/images/events/event-7/image-2.jpg",
      "/images/events/event-7/image-3.jpg",
    ],
  },
];


/*
 * ============================================================
 * BACKWARD COMPATIBILITY
 * ============================================================
 *
 * The original project used:
 *
 *    import { events } from "../data/events";
 *
 * We are keeping `events` as the main past-events array so
 * existing components or future code using the original
 * import will continue to work.
 *
 * `pastEvents` is provided as a clearer name for the new
 * Events page structure.
 * ============================================================
 */

export const pastEvents = events;
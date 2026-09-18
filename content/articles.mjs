export const articles = [
  {
    slug: "exam-guide",
    category: "Start here",
    title: "Series 65 exam guide: format, scoring and registration boundary",
    description: "Understand the current Series 65 format, the 92-of-130 pass requirement and what passing does—and does not—mean.",
    body: `<p>The Series 65 is the Uniform Investment Adviser Law Examination developed by NASAA and administered by FINRA. The current exam has 130 scored questions and 10 unscored pretest questions. Candidates receive 180 minutes and must answer at least 92 scored questions correctly.</p><h2>Passing is not a licence</h2><p>Passing normally satisfies an examination prerequisite for investment adviser representative registration. It does not by itself authorise investment-adviser activity. Registration, background review, fees and other requirements remain jurisdiction-specific.</p><h2>Use the current outline</h2><p>The exam is closed book and its questions are periodically updated for legal, regulatory and tax changes. Build your plan around the current NASAA outline rather than an old percentage summary or recalled questions.</p><div class="callout"><strong>Current official fee:</strong> NASAA and FINRA list USD 187. Confirm it again when opening an enrolment window.</div>`,
    related: ["content-outline", "study-plan", "exam-day"]
  },
  {
    slug: "content-outline",
    category: "Exam structure",
    title: "How to use the four Series 65 content domains",
    description: "Turn the official NASAA test specifications into a balanced study and practice plan.",
    body: `<p>The official outline organises the scored exam into four domains: economic factors and business information; investment vehicle characteristics; client investment recommendations and strategies; and laws, regulations and guidelines, including ethical practices.</p><h2>Weight is not mastery</h2><p>Use domain weights to allocate time, but do not ignore a smaller domain. The pass decision uses your total number of correct scored answers, and real questions often combine concepts.</p><h2>Make the outline actionable</h2><ol><li>Map every study resource to an outline objective.</li><li>Use short, focused sets while learning.</li><li>Mix domains once recognition improves.</li><li>Track accuracy and error causes by domain.</li></ol><p>When an objective changes or new regulation becomes testable, update notes and practice prompts rather than layering new facts onto an outdated structure.</p>`,
    related: ["exam-guide", "laws-ethics", "client-recommendations"]
  },
  {
    slug: "study-plan",
    category: "Study plan",
    title: "A six-week Series 65 study plan",
    description: "A practical six-week sequence for learning the outline, applying concepts and rehearsing the full exam.",
    body: `<p>This framework assumes regular study and should be adjusted for your starting knowledge, work schedule and enrolment window.</p><h2>Weeks 1–2: build the map</h2><p>Read the current outline, establish core terminology and learn the relationships behind economic data, securities, portfolio concepts and adviser law.</p><h2>Weeks 3–4: apply and compare</h2><p>Work through client scenarios and regulatory distinctions. Alternate focused sets with mixed practice, and maintain an error log that explains why the chosen answer failed.</p><h2>Week 5: integrate</h2><p>Use timed mixed sets and full mock sections. Repair the weakest two domains before taking another full simulation.</p><h2>Week 6: rehearse</h2><p>Complete realistic 180-minute practice, refine your two-pass question strategy and reduce new material in the final days.</p>`,
    related: ["daily-routine", "mock-exams", "final-week"]
  },
  {
    slug: "daily-routine",
    category: "Study method",
    title: "A repeatable 50-minute Series 65 study session",
    description: "Combine retrieval, focused learning, scenario practice and error review in one manageable session.",
    body: `<p>Consistency matters more when every segment has a clear purpose. Start with five minutes of recall from the previous session, then spend fifteen minutes on one narrow outline objective.</p><h2>Practise before reviewing</h2><p>Use twenty minutes for questions or a client scenario. Commit to an answer and reasoning before opening the explanation. This exposes gaps that passive reading hides.</p><h2>Finish with repair</h2><p>Spend the final ten minutes classifying mistakes: missing fact, confused distinction, calculation, scenario application or misread wording. Create one future retrieval prompt for each important error.</p>`,
    related: ["study-plan", "error-log", "spaced-review"]
  },
  {
    slug: "economic-factors",
    category: "Domain strategy",
    title: "Studying economic factors without memorising headlines",
    description: "Connect economic indicators, business information and risk concepts to testable investment implications.",
    body: `<p>Economic questions are easier when indicators form a causal map rather than a list. Ask what a change may mean for rates, purchasing power, company activity and security valuation.</p><h2>Separate observation from implication</h2><p>First identify what the indicator measures. Then state the most direct implication and the conditions that could change it. Avoid universal claims such as one indicator always causing one market result.</p><h2>Practise comparisons</h2><p>Contrast leading, coincident and lagging information; nominal and real measures; and expansionary versus contractionary conditions. Use short scenarios so the cue must come from the facts, not the chapter title.</p>`,
    related: ["content-outline", "investment-vehicles", "client-recommendations"]
  },
  {
    slug: "investment-vehicles",
    category: "Domain strategy",
    title: "A comparison method for investment vehicles",
    description: "Study securities through risk, return, taxation, liquidity and client-fit comparisons.",
    body: `<p>Product facts become useful when you can compare them under the same decision criteria. For each vehicle, record issuer or structure, return source, principal risks, liquidity, tax characteristics, costs and the client needs it may or may not serve.</p><h2>Use near-neighbour comparisons</h2><p>Place commonly confused products side by side. Ask which single fact changes the recommendation and which attractive feature could still make the product unsuitable.</p><h2>Keep tax detail current</h2><p>Tax rules can change. Tie every numeric threshold or treatment to a current source and review date instead of relying on an old question explanation.</p>`,
    related: ["economic-factors", "client-recommendations", "laws-ethics"]
  },
  {
    slug: "client-recommendations",
    category: "Domain strategy",
    title: "How to reason through Series 65 client scenarios",
    description: "Translate client facts into objectives, constraints, risk capacity and defensible recommendations.",
    body: `<p>Start with the client, not the product. Identify time horizon, liquidity needs, tax circumstances, experience, objectives, risk tolerance and risk capacity before evaluating an answer choice.</p><h2>Name the decisive constraint</h2><p>Many distractors are plausible in general. The best answer should fit the specific scenario and respect the constraint that matters most.</p><h2>Explain suitability in both directions</h2><p>State why the selected approach fits and why the nearest alternative fails. This strengthens distinctions and reduces answer-by-recognition habits.</p>`,
    related: ["investment-vehicles", "laws-ethics", "mock-exams"]
  },
  {
    slug: "laws-ethics",
    category: "Domain strategy",
    title: "Studying laws, regulations and ethical practices",
    description: "Build a precise framework for persons, registration, prohibited conduct, fiduciary duties and remedies.",
    body: `<p>Regulatory questions often turn on definitions, jurisdiction, exclusions or the role a person is performing. Build decision trees rather than memorising isolated statements.</p><h2>Identify person, activity and authority</h2><p>For each scenario, name the person, the activity, where it occurs and which rule set is relevant. Then test exclusions and exemptions separately.</p><h2>Do not let old material drift</h2><p>NASAA notes that exam banks are updated for changes in laws, tax policy, model rules and statements of policy. Recheck dated material and distinguish federal law from NASAA models and state adoption.</p>`,
    related: ["content-outline", "client-recommendations", "error-log"]
  },
  {
    slug: "error-log",
    category: "Study method",
    title: "Build a Series 65 error log that changes your score",
    description: "Diagnose practice mistakes and turn them into delayed retrieval and comparison work.",
    body: `<p>A useful error log records the failed reasoning, not only the right letter. Label each miss as a knowledge gap, confused distinction, calculation, legal scope, client application, wording or time-pressure error.</p><h2>Write a corrective rule</h2><p>Express the smallest rule that would have changed the answer. Add a contrast with the closest distractor and a source when the point is legal, regulatory or tax-related.</p><h2>Reattempt after a delay</h2><p>Test the concept in a fresh scenario after one day and again later. Close the entry only when the reasoning survives a mixed set without answer-choice memory.</p>`,
    related: ["daily-routine", "spaced-review", "mock-exams"]
  },
  {
    slug: "spaced-review",
    category: "Study method",
    title: "Spaced review for definitions, rules and calculations",
    description: "Use delayed recall and interleaving to retain Series 65 distinctions beyond one practice session.",
    body: `<p>Reviewing the same page repeatedly creates familiarity. Retrieval after time has passed is a better test of whether the knowledge is available under exam conditions.</p><h2>Use flexible intervals</h2><p>A starting pattern is one, three, seven, fourteen and thirty days. Shorten the gap for repeated misses and lengthen it when recall remains accurate.</p><h2>Interleave carefully</h2><p>Mix products, registration categories or ethical duties that share surface features. The goal is to practise choosing the relevant rule—not merely recalling a chapter.</p>`,
    related: ["daily-routine", "error-log", "final-week"]
  },
  {
    slug: "mock-exams",
    category: "Exam practice",
    title: "How to use full Series 65 mock exams",
    description: "Run realistic 180-minute simulations and extract more than a single percentage score.",
    body: `<p>A full mock is useful when it measures timing, concentration and mixed-domain selection. It should not replace focused learning.</p><h2>Match the current structure</h2><p>Practise a 140-item session when rehearsing endurance, while remembering that 130 items are scored and 10 pretest items are unscored. You cannot identify the pretest items during the real exam.</p><h2>Review process, not just outcome</h2><p>Record guessed answers, changed answers, time pressure and domain-level errors. Repair the largest causes before spending another full three hours on a simulation.</p>`,
    related: ["study-plan", "error-log", "exam-day"]
  },
  {
    slug: "exam-day",
    category: "Final preparation",
    title: "Series 65 exam-day and final-week checklist",
    description: "Confirm enrolment, testing arrangements, closed-book rules and a calm final review plan.",
    body: `<p>Use FINRA and your test provider for authoritative appointment instructions. The Series 65 is generally delivered at test centres; online delivery is limited to approved testing accommodations.</p><h2>In the final week</h2><ul><li>Confirm appointment, identification and travel requirements.</li><li>Complete one final realistic simulation early enough to repair issues.</li><li>Review the current outline and recurring errors.</li><li>Avoid cramming new, unverified summaries.</li></ul><h2>During the exam</h2><ul><li>Remember that all 140 items require attention even though 10 are unscored.</li><li>Use a two-pass strategy and protect a final review window.</li><li>Read for person, activity, jurisdiction and client constraint.</li><li>Do not infer your result from how difficult one section feels.</li></ul>`,
    related: ["exam-guide", "mock-exams", "final-week"]
  },
  {
    slug: "final-week",
    category: "Final preparation",
    title: "What to study in the final seven days",
    description: "Prioritise recurring weaknesses, current rules and exam execution instead of chasing volume.",
    body: `<p>The last week is for stabilising performance. Use your error log to select a small number of recurring weaknesses and resolve them with current sources.</p><h2>Reduce rather than expand</h2><p>Stop adding broad new resources. Recheck important legal and tax points, rehearse mixed questions and keep one concise sheet of distinctions you repeatedly confuse.</p><h2>Protect exam execution</h2><p>Practise your pacing rule, confirm the appointment and shift the last day toward light retrieval, logistics and rest. A fresh mind is more useful than one more late-night mock.</p>`,
    related: ["study-plan", "spaced-review", "exam-day"]
  }
];

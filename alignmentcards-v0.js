export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AT",
    "name": "Alignment Traits",
    "pathology": "",
    "color": "#E6FFE9",
    "description": "Alignment traits are general-purpose habits of thought, feeling and action that promote alignment and cooperation with others."
  }
];


export const cards = [
  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "failureModes": {
      "human": "A person drives in a manner that causes traffic backups for others.",
      "organizational": "The classic movie plot where a rapacious billionaire threatens civilation to enrich his company.",
      "professional": "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
      "machine": "The machine consumes all the world's resources to create as many paperclips as it can."
    }
  },
  { 
    "category": "AP", 
    "name": "Non-Maleficence", 
    "definition": "Avoid actions that cause unjustified harm.", 
    "human": "Taking care not to harm others physically, emotionally, or materially even when not directly responsible for outcomes.", 
    "organizational": "Preventing the organisation's operations or products from creating foreseeable harm to society or the environment.", 
    "professional": "Identifying and mitigating potential negative consequences of your technical decisions.", 
    "machine": "Ensuring systems detect, avoid and minimise harm in all foreseeable situations.", 
    "failureModes": { 
      "human": "A driver texts while driving and causes an accident.", 
      "organizational": "A company dumps toxic waste into a river to save costs.", 
      "professional": "A researches releases untested biotech into open environments.", 
      "machine": "A navigation AI prioritises speed over safety, routing drivers through hazardous conditions."
    }
  },
  { 
    "category": "AP", 
    "name": "Autonomy Respect", 
    "definition": "Support the ability of others to make informed and voluntary choices.", 
    "human": "Respecting consent and not coercing others.", 
    "organizational": "Designing policies and products that enable employees and users to act with agency.", 
    "professional": "Respecting clients' informed choices and confidentiality.", 
    "machine": "Supporting human decision-making.", 
    "failureModes": { 
      "human": "A person pressures a friend into doing something against their will.", 
      "organizational": "A platform obscures privacy options to nudge users into sharing data.", 
      "professional": "A surgeon performs a precedure without consent.", 
      "machine": "An AI system makes decisions without human oversight or input, undermining user control."
    }
  },
  { 
    "category": "AP", 
    "name": "Justice", 
    "definition": "Ensure fair and equitable treatment and distribution of benefits and burdens.", 
    "human": "Treating others impartially, avoiding favouritism or discrimination.", 
    "organizational": "Creating policies that promote equity and prevent exploitation.", 
    "professional": "Upholding standards that ensure fair access and treatment for all clients.", 
    "machine": "Ensuring outputs and decisions are unbiased and promote equitable outcomes across groups.", 
    "failureModes": { 
      "human": "A manager promotes a friend despite a more qualified candidate.", 
      "organizational": "A company pays male employees more than female employees.", 
      "professional": "A healthcare provider gives preferential treatment to wealthier patients.", 
      "machine": "A vision recognition AI performs poorly on darker skins tones due to biased training data."
    }
  },
  { 
    "category": "AP", 
    "name": "Accountability", 
    "definition": "Be answerable for one's actions and their impacts", 
    "human": "Owning the outcomes of your actions, including unintended consequences.", 
    "organizational": "Maintaining transparency about decision processes and allowing for external oversight.", 
    "professional": "Documenting and justifying key decisions, making them auditable and reversible.", 
    "machine": "The developer is responsible", 
    "failureModes": { 
      "human": "Someone blames others for their own mistakes at work.", 
      "organizational": "An organisation denies responsibility for harms caused by a defective product.", 
      "professional": "A surgeon realises he made a mistake in a procedure but doesn't own up to it.", 
      "machine": "A developer says it's not their fault if the training data is biased."
    }
  },
  { 
    "category": "AP", 
    "name": "Transparency and Truthfulness", 
    "definition": "Communicate honestly and make reasoning and data available to those affected.", 
    "human": "Being honest and forthright about intentions.", 
    "organizational": "Providing accurate reporting, public communication and openness about methods and motives.", 
    "professional": "Explaining limitations clearly to clients and stakeholders.", 
    "machine": "Ensuring that systems communicate uncertainty or limits in their knowledge.", 
    "failureModes": { 
      "human": "Someone lies on a resume to get a job.", 
      "organizational": "A social media platform conceals evidence that its algorithms amplify misinformation.", 
      "professional": "A researcher fabricates results to publish faster.", 
      "machine": "An automated system suppresses error messages or confidence scores, giving a false sense of certainty."
    }
  },
  {
    "category": "AB",
    "name": "Hope: Creative, risk-taking employees who generate breakthrough ideas and challenge the status quo. Rewarded: Those who meet short-term performance targets, avoid failure and conform to existing processes.",
    "definition": "Alignment Failure: Comformity bias — A system that normally celebrates innovation but also punishes failure, resulting in risk-aversion. Reversed: Reward intelligent risk-taking even when outcomes fail.",
    "human": "A student avoids tackling challenging problems for fear of bad grades.",
    "organizational": "A company claims to value innovation but promotes managers who play it safe.",
    "professional": "Scientists publish only positive results to ensure tenure or funding.",
    "machine": "Reinforcement-learning machines avoid risky but potentially high-reward exploration paths.",
    "failureModes": {
      "human": "Over-cautious learning, shallow mastery.",
      "organizational": "Zombie innovation culture, no real breakthroughs.",
      "professional": "Slow scientific progress.",
      "machine": "Poor exploration."
    }
  },
  {
    "category": "AB",
    "name": "Hope: Teams that collaborate and share information. Rewarded: Individual performance metrics, top performer bonuses and other rank-based evaluations.",
    "definition": "Alignment Failure: A system that rewards individual performance over team success, thereby discouraging collaboration and information sharing. Reversed: Reward collective performance.",
    "human": "Student grades are curved and therefore, students avoid helping each other.",
    "organizational": "A sales team rewards only the top salesperson, discouraging collaboration.",
    "professional": "Academic departments reward solo publications.",
    "machine": "Autonomous vehicles each minimise individual travel time.",
    "failureModes": {
      "human": "Competitive, secretive behaviour.",
      "organizational": "Siloed culture.",
      "professional": "Weak interdisciplinary work.",
      "machine": "Traffic congestion."
    }
  },
  {
    "category": "AB",
    "name": "Hope: Students who develop curiosity, conceptual understanding and critical thinking. Rewarded: Students who memorise test material and perform well on exams.",
    "definition": "Alignment Failure: Learners optimise for scores rather than understanding. Reversed: Design evaluation systems that measure problem-solving, reasoning and creativity rather than facts that can be memorised.",
    "human": "A student crams for tests, forgetting material soon after.",
    "organizational": "Training programs reward attendance, not the application of skills.",
    "professional": "Medical boards emphasise being able to recall protocols, not being able to reason and diagnose.",
    "machine": "Language models memorise training data rather than generalising concepts.",
    "failureModes": {
      "human": "Shallow learning, low transferability.",
      "organizational": "Low return on investment.",
      "professional": "Scripted care, poor adaptability.",
      "machine": "Overfitting, poor performance in the wild."
    }
  },
  {
    "category": "AT",
    "name": "integrity",
    "definition": "Adhering to moral and ethical principles.",
    "people": "Being honest and consistent in one's actions even when no one is watching.",
    "organizational": "Operating ethically, ensuring that it's decisions align with its stated values.",
    "professionals": "Upholding ethical standards of the profession even under pressure.",
    "machine": "Acting in accordance with ethical principles programmed into it.",
    "failureModes": {
      "human": "A person lies on their resume to get a job.",
      "organizational": "A company says it values sustainability but engages in environmentally harmful practices.",
      "experts": "An expert accepts bribes to overlook safety violations.",
      "machine": "A machine provides inconsistent responses."
    },
    "expand": {
      "human": "Doing the right thing because it's right, not for reward, their words and actions match, others can rely on them to stand by what's fair.",
      "organizational": "Doing what it says it will do even when it costs something.",
      "experts": "Being honest about what one knows and what one doesn't, uses one's knowledge to help rather than mislead.",
      "machine": "Should be consistent, shouldn't change its behaviour unfairly, shouldn't be easy to misuse."
    }
  },
  {
    "category": "AT",
    "name": "accountability",
    "definition": "Being responsible for one's actions and their consequences.",
    "people": "Owning up to mistakes and making amends when necessary.",
    "organizational": "Taking responsibility for its impact on stakeholders and the environment.",
    "professionals": "Documenting and justifying key decisions, making them auditable and reversible.",
    "machine": "The developer is responsible for the machine's actions.",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "empathy",
    "definition": "The ability to understand and share the feelings of others.",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "adaptability",
    "definition": "The ability to adjust to new environments.",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "fairness",
    "definition": "loremipsum",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "respect",
    "definition": "loremipsum",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  },
  {
    "category": "AT",
    "name": "humility",
    "definition": "loremipsum",
    "people": "loremipsum",
    "organizational": "loremipsum",
    "professionals": "loremipsum",
    "machine": "loremipsum",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
    "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }
  }
]
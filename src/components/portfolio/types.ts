export type CaseStudyOutcome = {
  label: string;
  value: string;
};

export type CaseStudyChallenge = {
  background: string;
  coreChallenges: string;
  painPoints: string;
  opportunity: string;
};

export type CaseStudyInitiative = {
  title: string;
  description: string;
};

export type CaseStudyStrategy = {
  heading: string;
  overview: string;
  initiatives: CaseStudyInitiative[];
};

export type CaseStudyResults = {
  summary: string;
  disclaimer: string;
};

export type CaseStudyCta = {
  heading: string;
  description: string;
  primaryBtn: string;
  secondaryBtn: string;
};

export type Project = {
  id: string;
  title: string;
  client: string;
  industry: string;
  location?: string;
  summary: string;
  services: string[];
  privacyNote: string;
  challenge: CaseStudyChallenge;
  strategy: CaseStudyStrategy;
  outcomes: CaseStudyOutcome[];
  results: CaseStudyResults;
  cta: CaseStudyCta;
  image: string;
  color: string;
  featured?: boolean;
};

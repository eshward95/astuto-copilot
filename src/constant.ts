export const USER = "USER";
export const ASSIST = "ASSIST";

export enum ChartType {
  PIE = "PIE",
  SANKEY = "SANKEY",
}

export enum QueryType {
  CARD = "CARD",
  CHART = "CHART",
  CODE = "CODE",
  EMPTY = "",
}

export const mainMenu = [
  {
    label: "Top cloud costs by services in production account (#24542)",
    value: 1,
  },
  { label: "Which application's cost are increasing the fastest?", value: 1 },
  {
    label: "How much money are we losing by not moving to graviton instances?",
    value: 1,
  },
  { label: "Which are the largest s3 buckets by size?", value: 1 },
];

export const cardMenuAssist = [
  {
    title: "Bucket xyz-logs-1 (production account #12345)",
    content:
      "This bucket has <strong>1 TB of data</strong>, and it does not use any storage tiers.There is more than <strong>500 GB</strong> of data that has not been accessed.You can save <strong>$1000</strong> by deleted that data or <strong>$700</strong> by moving them to lower tier",
  },
  {
    title: "Bucket abc-users-1 (production account #12345)",
    content:
      "This bucket has abnormally high reads and write cost <strong>$5000</strong> per month, increasing by the day. Consider reading smaller chunks of data or changing your storage that is more cost effective for read and writes",
  },
];

export const assist1 = {
  type: ASSIST,
  content:
    "Your production account (#24542) has accumulated costs of <strong>$100,000</strong> over the past month,here is the spread of cloud costs by services:",
  queryType: QueryType.CHART,
  chartType: ChartType.PIE,
  queryText: "Pie Chart",
  subAssistKey: 0,
  subAssist: [
    {
      label: "Which services costs are rising the fastest?",
      value: "ASSIST-1",
    },
    { label: "How can i reduce my s3 costs?", value: "ASSIST-1" },
    { label: "How can i reduce my RDS costs?", value: "ASSIST-1" },
    { label: "How can i reduce my EC2 costs?", value: "ASSIST-1" },
  ],
};

export const user2 = {
  type: USER,
  content: "How can I reduce my EC2 costs",
  queryType: QueryType.EMPTY,
};

export const assist2 = {
  type: ASSIST,
  content:
    "You can save <strong>$2550 per month </strong> overall in EC2 costs. <a href='https://www.astuto.ai/'>Click here</a> to access a detailed report.Here are your two 2 saving areas:        ",
  queryType: QueryType.CARD,
  assistData: cardMenuAssist,
  queryText: "Top 2 savings areas",
  subAssistKey: 1,
  subAssist: [
    {
      label: "Which services costs are rising the fastest?",
      value: "ASSIST-2",
    },
    { label: "How can i reduce my s3 costs?", value: "ASSIST-2" },
    {
      label: "How can i reduce my RDS costs?",
      value: "ASSIST-2",
    },
    {
      label: "Why are EC2 costs increasing so much? ",
      value: "ASSIST-2",
    },
  ],
};

export const user3 = {
  type: USER,
  content: "Why are EC2 costs increasing so much?",
  queryType: QueryType.EMPTY,
};

export const assist3 = {
  type: ASSIST,
  content:
    "Your production account (#24542) has accumulated costs of <strong>$100,000</strong> over the past month,here is the spread of cloud costs by services:",
  queryType: QueryType.CHART,
  chartType: ChartType.SANKEY,
  queryText: "Dashboard",
  subAssistKey: 2,
  subAssist: [
    {
      label: "Which services costs are rising the fastest?",
      value: "ASSIST-3",
    },
    { label: "How can i reduce my s3 costs?", value: "ASSIST-3" },
    {
      label: "How can i reduce my RDS costs?",
      value: "ASSIST-3",
    },
    {
      label: "Why are EC2 costs increasing so much? ",
      value: "ASSIST-3",
    },
  ],
};

export const codeSnippet = `
SELECT
  service,
  SUM(cost) AS total_cost
FROM
  cloud_costs
WHERE
  account_type = 'production (#24542)'
GROUP BY
  service
ORDER BY
  total_cost DESC;`;

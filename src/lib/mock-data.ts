export type Status = "Paid" | "Pending" | "Overdue";
export type Risk = "Low" | "Medium" | "High";

export interface Record {
  id: string;
  supplier: string;
  category: string;
  dueDate: string;
  amount: number;
  status: Status;
  risk: Risk;
  issue?: "Duplicate" | "Suspicious" | "Missing Data" | null;
}

export const records: Record[] = [
  { id: "INV-1042", supplier: "Acme Logistics", category: "Logistics", dueDate: "2026-05-12", amount: 4820.5, status: "Pending", risk: "Medium", issue: null },
  { id: "INV-1043", supplier: "BlueOcean Supplies", category: "Materials", dueDate: "2026-05-03", amount: 12300, status: "Overdue", risk: "High", issue: "Suspicious" },
  { id: "INV-1044", supplier: "Northwind Co.", category: "Software", dueDate: "2026-05-18", amount: 980, status: "Pending", risk: "Low", issue: null },
  { id: "INV-1045", supplier: "Acme Logistic", category: "Logistics", dueDate: "2026-05-22", amount: 4810, status: "Pending", risk: "High", issue: "Duplicate" },
  { id: "INV-1046", supplier: "Greenfield Energy", category: "Utilities", dueDate: "2026-04-29", amount: 2150, status: "Overdue", risk: "Medium", issue: null },
  { id: "INV-1047", supplier: "Quantum Print", category: "Marketing", dueDate: "2026-05-30", amount: 540, status: "Paid", risk: "Low", issue: null },
  { id: "INV-1048", supplier: "Zen Office", category: "Office", dueDate: "2026-06-02", amount: 1320, status: "Pending", risk: "Low", issue: null },
  { id: "INV-1049", supplier: "Vertex Cloud", category: "Software", dueDate: "2026-05-15", amount: 7600, status: "Pending", risk: "Medium", issue: "Missing Data" },
  { id: "INV-1050", supplier: "Northwind Co.", category: "Software", dueDate: "2026-05-19", amount: 985, status: "Pending", risk: "Medium", issue: "Duplicate" },
  { id: "INV-1051", supplier: "Stellar Freight", category: "Logistics", dueDate: "2026-04-21", amount: 9210, status: "Overdue", risk: "High", issue: null },
  { id: "INV-1052", supplier: "Pinecrest HR", category: "Services", dueDate: "2026-06-10", amount: 3300, status: "Paid", risk: "Low", issue: null },
  { id: "INV-1053", supplier: "Helix Labs", category: "R&D", dueDate: "2026-05-09", amount: 18250, status: "Pending", risk: "High", issue: "Suspicious" },
];

export const monthlyVolume = [
  { month: "Nov", volume: 42000 },
  { month: "Dec", volume: 51000 },
  { month: "Jan", volume: 38000 },
  { month: "Feb", volume: 47000 },
  { month: "Mar", volume: 62000 },
  { month: "Apr", volume: 71000 },
  { month: "May", volume: 89000 },
];

export const errorTypes = [
  { name: "Duplicate", value: 14 },
  { name: "Suspicious", value: 9 },
  { name: "Missing Data", value: 6 },
  { name: "Overdue", value: 11 },
];

export const dueDates = [
  { day: "Mon", count: 3 },
  { day: "Tue", count: 5 },
  { day: "Wed", count: 2 },
  { day: "Thu", count: 7 },
  { day: "Fri", count: 4 },
  { day: "Sat", count: 1 },
  { day: "Sun", count: 0 },
];

export const supplierRisk = [
  { name: "Low", value: 28 },
  { name: "Medium", value: 14 },
  { name: "High", value: 6 },
];

export interface Alert {
  id: string;
  severity: "critical" | "high" | "medium" | "low";
  title: string;
  description: string;
  action: string;
  timestamp: string;
}

export const alerts: Alert[] = [
  { id: "a1", severity: "critical", title: "5 overdue payments", description: "Total $32,480 in overdue payments older than 7 days.", action: "Review and contact suppliers immediately.", timestamp: "2h ago" },
  { id: "a2", severity: "high", title: "3 duplicate suppliers", description: "Acme Logistics and Acme Logistic likely refer to the same vendor.", action: "Merge supplier records to prevent double payments.", timestamp: "4h ago" },
  { id: "a3", severity: "high", title: "2 suspicious values detected", description: "Invoice INV-1053 is 312% above the historical average for Helix Labs.", action: "Verify with the requester before approval.", timestamp: "6h ago" },
  { id: "a4", severity: "medium", title: "12 payments due this week", description: "Combined value: $48,210 due in the next 7 days.", action: "Schedule transfers to avoid late fees.", timestamp: "1d ago" },
  { id: "a5", severity: "medium", title: "Missing data in 4 records", description: "Required fields are empty in Vertex Cloud entries.", action: "Complete missing fields before reporting.", timestamp: "1d ago" },
  { id: "a6", severity: "low", title: "Supplier risk increased", description: "Stellar Freight moved from Medium to High risk this month.", action: "Reassess contract terms.", timestamp: "2d ago" },
];

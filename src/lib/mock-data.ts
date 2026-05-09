export type Status = "Pago" | "Pendente" | "Vencido" | "Em revisão";
export type Risk = "Baixo" | "Médio" | "Alto" | "Crítico";
export type Issue = "Fornecedor duplicado" | "Valor suspeito" | "Data vencida" | "Campo incompleto";

export interface Record {
  id: string;
  supplier: string;
  category: string;
  dueDate: string;
  amount: number;
  status: Status;
  risk: Risk;
  issue?: Issue | null;
}

export const records: Record[] = [
  { id: "PAG-1042", supplier: "Mercado Central Ltda", category: "Suprimentos", dueDate: "12/05/2026", amount: 4820, status: "Pendente", risk: "Médio", issue: null },
  { id: "PAG-1043", supplier: "Distribuidora Alpha", category: "Distribuição", dueDate: "03/05/2026", amount: 12300, status: "Vencido", risk: "Alto", issue: "Data vencida" },
  { id: "PAG-1044", supplier: "Clínica São Lucas", category: "Saúde", dueDate: "18/05/2026", amount: 980, status: "Pendente", risk: "Baixo", issue: null },
  { id: "PAG-1045", supplier: "Mercado Central LTDA", category: "Suprimentos", dueDate: "22/05/2026", amount: 4810, status: "Pendente", risk: "Alto", issue: "Fornecedor duplicado" },
  { id: "PAG-1046", supplier: "Energia Sul Distribuidora", category: "Utilidades", dueDate: "29/04/2026", amount: 2150, status: "Vencido", risk: "Médio", issue: "Data vencida" },
  { id: "PAG-1047", supplier: "Gráfica Paulista", category: "Marketing", dueDate: "30/05/2026", amount: 540, status: "Pago", risk: "Baixo", issue: null },
  { id: "PAG-1048", supplier: "Zen Escritórios", category: "Administrativo", dueDate: "02/06/2026", amount: 1320, status: "Pendente", risk: "Baixo", issue: null },
  { id: "PAG-1049", supplier: "Vertex Cloud", category: "Software", dueDate: "15/05/2026", amount: 7600, status: "Pendente", risk: "Médio", issue: "Campo incompleto" },
  { id: "PAG-1050", supplier: "Clinica Sao Lucas", category: "Saúde", dueDate: "19/05/2026", amount: 985, status: "Em revisão", risk: "Médio", issue: "Fornecedor duplicado" },
  { id: "PAG-1051", supplier: "Transportes Estrela", category: "Logística", dueDate: "21/04/2026", amount: 9210, status: "Vencido", risk: "Alto", issue: "Data vencida" },
  { id: "PAG-1052", supplier: "Pinecrest RH", category: "Serviços", dueDate: "10/06/2026", amount: 3300, status: "Pago", risk: "Baixo", issue: null },
  { id: "PAG-1053", supplier: "Tech Serviços ME", category: "Tecnologia", dueDate: "09/05/2026", amount: 18250, status: "Pendente", risk: "Crítico", issue: "Valor suspeito" },
];

export const monthlyVolume = [
  { month: "Nov", volume: 142000 },
  { month: "Dez", volume: 168000 },
  { month: "Jan", volume: 138000 },
  { month: "Fev", volume: 187000 },
  { month: "Mar", volume: 212000 },
  { month: "Abr", volume: 231000 },
  { month: "Mai", volume: 248900 },
];

export const errorTypes = [
  { name: "Duplicados", value: 14 },
  { name: "Suspeitos", value: 9 },
  { name: "Incompletos", value: 6 },
  { name: "Vencidos", value: 11 },
];

export const dueDates = [
  { day: "Seg", count: 3 },
  { day: "Ter", count: 5 },
  { day: "Qua", count: 2 },
  { day: "Qui", count: 7 },
  { day: "Sex", count: 4 },
  { day: "Sáb", count: 1 },
  { day: "Dom", count: 0 },
];

export const supplierRisk = [
  { name: "Baixo", value: 28 },
  { name: "Médio", value: 14 },
  { name: "Alto", value: 6 },
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
  { id: "a1", severity: "critical", title: "Pagamento vencido", description: "Distribuidora Alpha possui pagamento vencido há 5 dias no valor de R$ 12.300,00.", action: "Prioridade: revisar pagamento", timestamp: "há 2h" },
  { id: "a2", severity: "high", title: "Fornecedor duplicado", description: "Mercado Central Ltda aparece com nomes semelhantes em 2 cadastros.", action: "Revisar cadastro", timestamp: "há 4h" },
  { id: "a3", severity: "high", title: "Valor suspeito", description: "Tech Serviços ME possui valor 43% acima da média histórica.", action: "Validar lançamento", timestamp: "há 6h" },
  { id: "a4", severity: "medium", title: "18 pagamentos vencem esta semana", description: "Valor combinado: R$ 48.210,00 nos próximos 7 dias.", action: "Programar transferências", timestamp: "há 1d" },
  { id: "a5", severity: "medium", title: "Dados incompletos", description: "12 registros estão sem categoria definida.", action: "Completar informações", timestamp: "há 1d" },
  { id: "a6", severity: "low", title: "Risco de fornecedor aumentou", description: "Transportes Estrela mudou de risco Médio para Alto este mês.", action: "Reavaliar contrato", timestamp: "há 2d" },
];

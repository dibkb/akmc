import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const chartData = [
  {
    software: "Windows",
    CRITICAL: 7,
    HIGH: 424,
    LOW: 17,
    MEDIUM: 230,
    TOTAL: 2034,
  },
  {
    software: "Android",
    CRITICAL: 35,
    HIGH: 251,
    LOW: 4,
    MEDIUM: 212,
    TOTAL: 1506,
  },
  { software: "Linux", CRITICAL: 0, HIGH: 98, LOW: 57, MEDIUM: 97, TOTAL: 756 },
  {
    software: "Mac OS X",
    CRITICAL: 0,
    HIGH: 54,
    LOW: 15,
    MEDIUM: 95,
    TOTAL: 492,
  },
  {
    software: "Solaris",
    CRITICAL: 0,
    HIGH: 32,
    LOW: 6,
    MEDIUM: 10,
    TOTAL: 144,
  },
  { software: "HP-UX", CRITICAL: 0, HIGH: 18, LOW: 5, MEDIUM: 18, TOTAL: 123 },
  {
    software: "FreeBSD",
    CRITICAL: 0,
    HIGH: 10,
    LOW: 10,
    MEDIUM: 12,
    TOTAL: 96,
  },
  { software: "AIX", CRITICAL: 0, HIGH: 20, LOW: 3, MEDIUM: 8, TOTAL: 93 },
  {
    software: "Windows, OS X, Linux",
    CRITICAL: 0,
    HIGH: 30,
    LOW: 0,
    MEDIUM: 1,
    TOTAL: 93,
  },
  {
    software: "Sun Solaris",
    CRITICAL: 0,
    HIGH: 5,
    LOW: 4,
    MEDIUM: 16,
    TOTAL: 75,
  },
];

export function SeverityOsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Operating System</TableHead>
          <TableHead>CRITICAL</TableHead>
          <TableHead>HIGH</TableHead>
          <TableHead>LOW</TableHead>
          <TableHead>MEDIUM</TableHead>
          <TableHead className="text-right">TOTAL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {chartData.map((c, id) => (
          <TableRow key={id}>
            <TableCell>{c.software}</TableCell>
            <TableCell>{c.CRITICAL}</TableCell>
            <TableCell>{c.HIGH}</TableCell>
            <TableCell>{c.LOW}</TableCell>
            <TableCell>{c.MEDIUM}</TableCell>
            <TableCell className="text-right">{c.TOTAL}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

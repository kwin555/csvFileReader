import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./csvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleTarget";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./summary";
import { HtmlReport } from "./reportTargets/HTMLReport";

const matchReader = MatchReader.fromCsv("football.csv");

matchReader.load();

const consoleReport = new ConsoleReport();
const winsAnalysis = new WinsAnalysis("Man United");
const summary = Summary.WinsAnalysisWithHTMLReport("Man United");
summary.buildAndPrintReport(matchReader.matches);

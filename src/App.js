import logo from './logo.svg';
import './App.css';
import Home from './comppnents/Home';
import ApiData from './comppnents/ApiData';

function App() {
  const projects = [
    {
      projectId: 1,
      title: "Project Alpha",
      status: "In Progress",
      startDate: "2023-01-15",
      endDate: null,
      members: ["Alice", "Bob", "Charlie"]
    },
    {
      projectId: 2,
      title: "Project Beta",
      status: "Completed",
      startDate: "2022-07-01",
      endDate: "2022-12-31",
      members: ["David", "Eve"]
    },
    {
      projectId: 3,
      title: "Project Gamma",
      status: "Pending",
      startDate: "2024-01-10",
      endDate: null,
      members: ["Frank", "Grace"]
    }
  ];


return (
  <div className="App">
    <Home  project = {projects}/>
    <ApiData/>
  </div>
);
}

export default App;

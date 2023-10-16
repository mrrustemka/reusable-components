import { Checklist } from "./Checklist";

function App() {
  return (
    <div>
      <Checklist
        data={[
          { id: 1, name: "David", role: "Manager" },
          { id: 2, name: "Angella", role: "Developer" },
          { id: 3, name: "Faniya", role: "UX" },
          { id: 4, name: "Rustem", role: "Developer" },
          { id: 5, name: "Alex", role: "Developer" },
          { id: 6, name: "Jarommy", role: "QA" },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{ width: "300px", maxHeight: "380px", overflowY: "auto" }}
        renderItem={(item) => (
          <li key={item.id} className="bg-white p-4 border-b-2">
            <div className="text-xl text-slate-800 pb-1">{item.name}</div>
            <div className="text-slate-500">{item.role}</div>
          </li>
        )}
      />
    </div>
  );
}

export default App;

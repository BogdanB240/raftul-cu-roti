import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(null);
  const [anvelope, setAnvelope] = useState([]);
  const [form, setForm] = useState({
    marca: "",
    dimensiune: "",
    sezon: "",
    stare: "",
    pozitie: "",
    observatii: "",
  });

  const handleLogin = () => {
    if (email === "admin@raft.ro" && password === "admin123") {
      setUserType("admin");
    } else if (email === "client@raft.ro" && password === "client123") {
      setUserType("client");
    } else {
      alert("Date de autentificare incorecte");
    }
  };

  const handleAddAnvelopa = () => {
    setAnvelope([...anvelope, form]);
    setForm({ marca: "", dimensiune: "", sezon: "", stare: "", pozitie: "", observatii: "" });
  };

  if (userType === "admin") {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif", background: "#ebf8ff" }}>
        <h1 style={{ color: "#1e40af", fontSize: "2rem" }}>Panou Administrator</h1>
        <p>Adaugă un set de anvelope:</p>
        <div style={{ maxWidth: "600px", marginTop: "1rem" }}>
          <input placeholder="Marca" value={form.marca} onChange={(e) => setForm({ ...form, marca: e.target.value })} />
          <input placeholder="Dimensiune" value={form.dimensiune} onChange={(e) => setForm({ ...form, dimensiune: e.target.value })} />
          <input placeholder="Sezon" value={form.sezon} onChange={(e) => setForm({ ...form, sezon: e.target.value })} />
          <input placeholder="Stare" value={form.stare} onChange={(e) => setForm({ ...form, stare: e.target.value })} />
          <input placeholder="Poziție raft" value={form.pozitie} onChange={(e) => setForm({ ...form, pozitie: e.target.value })} />
          <textarea placeholder="Observații" value={form.observatii} onChange={(e) => setForm({ ...form, observatii: e.target.value })} />
          <button onClick={handleAddAnvelopa}>Salvează</button>
        </div>
      </main>
    );
  }

  if (userType === "client") {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif", background: "#ebf8ff" }}>
        <h1 style={{ color: "#1e40af", fontSize: "2rem" }}>Cont Client</h1>
        <p>Anvelope salvate:</p>
        {anvelope.length === 0 && <p>Nu ai anvelope salvate.</p>}
        {anvelope.map((a, i) => (
          <div key={i} style={{ border: "1px solid #ccc", marginTop: "1rem", padding: "1rem" }}>
            <p><b>Marca:</b> {a.marca}</p>
            <p><b>Dimensiune:</b> {a.dimensiune}</p>
            <p><b>Sezon:</b> {a.sezon}</p>
            <p><b>Stare:</b> {a.stare}</p>
            <p><b>Poziție raft:</b> {a.pozitie}</p>
            <p><b>Observații:</b> {a.observatii}</p>
          </div>
        ))}
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", background: "#ebf8ff" }}>
      <h1 style={{ color: "#1e40af", fontSize: "2rem" }}>Raftul cu Roți</h1>
      <h2>Autentificare</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Parolă" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Autentificare</button>
    </main>
  );
}

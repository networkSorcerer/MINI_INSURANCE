import React, { useState } from "react";

const categories = [
  { id: "building", name: "건축공사" },
  { id: "apartment", name: "아파트 건설공사" },
  { id: "infra", name: "도로/철도/공항 등" },
  { id: "bridge", name: "교량/댐/터널" },
  { id: "port", name: "항만/방파제 등" },
];

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const CommonCard = ({ title, children }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      marginTop: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    }}
  >
    <h3 style={{ marginBottom: "15px", color: "#333" }}>{title}</h3>
    {children}
  </div>
);

const BuildingForm = () => (
  <CommonCard title="건축공사 입력">
    <input placeholder="건축물 용도" style={inputStyle} />
    <input placeholder="층수" style={inputStyle} />
  </CommonCard>
);

const ApartmentForm = () => (
  <CommonCard title="아파트 건설공사 입력">
    <input placeholder="세대 수" style={inputStyle} />
    <input placeholder="단지명" style={inputStyle} />
  </CommonCard>
);

const InfraForm = () => (
  <CommonCard title="도로/철도/공항 등 입력">
    <input placeholder="공사 구간" style={inputStyle} />
    <input placeholder="길이 (km)" style={inputStyle} />
  </CommonCard>
);

const BridgeForm = () => (
  <CommonCard title="교량/댐/터널 입력">
    <input placeholder="구조물 종류" style={inputStyle} />
    <input placeholder="총 길이/높이" style={inputStyle} />
  </CommonCard>
);

const PortForm = () => (
  <CommonCard title="항만/방파제 등 입력">
    <input placeholder="위치" style={inputStyle} />
    <input placeholder="준설량 (m³)" style={inputStyle} />
  </CommonCard>
);

const CategoryForm = ({ selected }) => {
  switch (selected) {
    case "building":
      return <BuildingForm />;
    case "apartment":
      return <ApartmentForm />;
    case "infra":
      return <InfraForm />;
    case "bridge":
      return <BridgeForm />;
    case "port":
      return <PortForm />;
    default:
      return <div>카테고리를 선택하세요.</div>;
  }
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>공사 종류 선택</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: "8px", width: "100%" }}
      >
        <option value="">-- 선택하세요 --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <CategoryForm selected={selectedCategory} />
    </div>
  );
};

export default App;

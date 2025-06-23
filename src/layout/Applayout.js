import React, { useState } from "react";

const categories = [
  { id: "building", name: "건축공사" },
  { id: "apartment", name: "아파트 건설공사" },
  { id: "infra", name: "도로/철도/공항 등" },
  { id: "bridge", name: "교량/댐/터널" },
  { id: "port", name: "항만/방파제 등" },
];

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

const Applayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <h2>공사 종류 선택</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">-- 선택하세요 --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "20px" }}>
        <CategoryForm selected={selectedCategory} />
      </div>
    </div>
  );
};

export default Applayout;

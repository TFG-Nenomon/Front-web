import { useState, useEffect, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./nenomon.css";

import { nenomons as nenomonData } from "./NenomonData";
import NenomonList from "./NenomonList";
import NenomonCard from "./NenomonCard";

function Nenomon() {
  const [backendNenomons, setBackendNenomons] = useState([]);
  const [selectedNenomon, setSelectedNenomon] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [appliedFilter, setAppliedFilter] = useState(null);

  const filterRef = useRef(null);
  const btnRef = useRef(null);
  const dropdownRef = useRef(null);

  const nenomonTypes = ["Agua", "Fuego", "Planta", "Electrico", "Bicho", "Legendario"];

  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
        setActiveFilter(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function filterByType(type) {
    fetch(`http://localhost:8080/nenomon/tipo/${type}`)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res.json();
      })
      .then((data) => {
        setBackendNenomons(Array.isArray(data) ? data : []);
        setHasSearched(true);
        setAppliedFilter({ kind: "tipo", value: type });
        setFilterOpen(false);
        setActiveFilter(null);
      })
      .catch(() => {
        setBackendNenomons([]);
        setHasSearched(true);
      });
  }

  function filterByName(name) {
    if (!name.trim()) {
      clearFilter();
      return;
    }

    fetch(`http://localhost:8080/nenomon/nombre/${name}`)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error");
        return res.json();
      })
      .then((data) => {
        setBackendNenomons(Array.isArray(data) ? data : []);
        setHasSearched(true);
        setAppliedFilter({ kind: "nombre", value: name });
      })
      .catch(() => {
        setBackendNenomons([]);
        setHasSearched(true);
      });
  }

  function clearFilter() {
    setAppliedFilter(null);
    setHasSearched(false);
    setBackendNenomons([]);
    setFilterValue("");
  }

  const backendIds = new Set(backendNenomons.map((n) => Number(n.id)));

  const visibleNenomons = !hasSearched
    ? nenomonData
    : nenomonData.filter((n) => backendIds.has(Number(n.id)));

  useEffect(() => {
    if (visibleNenomons.length > 0) {
      setSelectedNenomon(visibleNenomons[0]);
    } else {
      setSelectedNenomon(null);
    }
  }, [visibleNenomons]);

  function getSublevelLeft() {
    const btnW = btnRef.current?.offsetWidth ?? 110;
    const dropW = dropdownRef.current?.offsetWidth ?? 156;
    return btnW + 4 + dropW + 4;
  }

  const sublevelTop = activeFilter === "nombre" ? 0 : 46;

  return (
    <div className="nenomon-container">
      <Sidebar />

      <div className="nenomon-content">
        <NenomonList nenomons={visibleNenomons} onSelect={setSelectedNenomon} />

        <div className="center-panel">
          <div className="filter-top-row">
            <div className="filter-wrapper" ref={filterRef}>
              <button
                ref={btnRef}
                className="filter-main-btn"
                onClick={() => {
                  setFilterOpen((prev) => !prev);
                  setActiveFilter(null);
                }}
              >
                🔍 Filtros
              </button>

              {filterOpen && (
                <div className="filter-dropdown" ref={dropdownRef}>
                  <div
                    className={`filter-dropdown-item ${activeFilter === "nombre" ? "active" : ""}`}
                    onClick={() =>
                      setActiveFilter((prev) => (prev === "nombre" ? null : "nombre"))
                    }
                  >
                    Nombre
                  </div>

                  <div
                    className={`filter-dropdown-item ${activeFilter === "tipo" ? "active" : ""}`}
                    onClick={() =>
                      setActiveFilter((prev) => (prev === "tipo" ? null : "tipo"))
                    }
                  >
                    Tipo
                  </div>
                </div>
              )}

              {filterOpen && activeFilter === "nombre" && (
                <div
                  className="filter-sublevel"
                  style={{ left: `${getSublevelLeft()}px`, top: `${sublevelTop}px` }}
                >
                  <input
                    className="filter-input"
                    placeholder="Buscar por nombre..."
                    value={filterValue}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFilterValue(value);
                      filterByName(value);
                    }}
                    autoFocus
                  />
                </div>
              )}

              {filterOpen && activeFilter === "tipo" && (
                <div
                  className="filter-sublevel"
                  style={{ left: `${getSublevelLeft()}px`, top: `${sublevelTop}px` }}
                >
                  {nenomonTypes.map((type) => (
                    <div
                      key={type}
                      className="filter-dropdown-item"
                      onClick={() => filterByType(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {appliedFilter && (
              <>
                <div className="filter-active-tag">
                  {appliedFilter.kind === "tipo"
                    ? `Tipo: ${appliedFilter.value}`
                    : `Nombre: ${appliedFilter.value}`}
                </div>

                <button className="filter-clear-btn" onClick={clearFilter}>
                  🗑️
                </button>
              </>
            )}
          </div>

          <NenomonCard nenomon={selectedNenomon} />
        </div>
      </div>
    </div>
  );
}

export default Nenomon;

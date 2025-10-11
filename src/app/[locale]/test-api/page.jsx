"use client";

/**
 * API Test Page
 * This page demonstrates the API integration
 * Visit: http://localhost:3000/en/test-api or http://localhost:3000/ar/test-api
 */

import { useState } from "react";
import { useLocale } from "next-intl";
import { useServices } from "../../../lib/hooks/useServices";
import { usePricings } from "../../../lib/hooks/usePricings";
import { useBrands } from "../../../lib/hooks/useBrands";
import Image from "next/image";

export default function TestAPIPage() {
  const locale = useLocale();
  const [serviceType, setServiceType] = useState("services");
  const [pricingType, setPricingType] = useState("pricings");
  const [pageNumber, setPageNumber] = useState(null);

  // Fetch data using hooks
  const services = useServices(serviceType, pageNumber);
  const pricings = usePricings(pricingType, pageNumber);
  const brands = useBrands();

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>API Integration Test Page</h1>
      <p>
        Current Locale: <strong>{locale}</strong>
      </p>

      <hr style={{ margin: "2rem 0" }} />

      {/* Services Section */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>📦 Services API</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Service Type:{" "}
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              style={{ padding: "0.5rem", marginRight: "1rem" }}
            >
              <option value="services">Regular Services</option>
              <option value="design">Design Services</option>
              <option value="development">Development Services</option>
              <option value="support">Support Services</option>
              <option value="app-version">App Version Services</option>
            </select>
          </label>

          <label>
            Page Number:{" "}
            <select
              value={pageNumber || ""}
              onChange={(e) =>
                setPageNumber(e.target.value ? parseInt(e.target.value) : null)
              }
              style={{ padding: "0.5rem" }}
            >
              <option value="">All Pages</option>
              <option value="1">Page 1</option>
              <option value="2">Page 2</option>
              <option value="3">Page 3</option>
              <option value="4">Page 4</option>
            </select>
          </label>
        </div>

        {services.loading && (
          <div
            style={{
              padding: "1rem",
              background: "#e3f2fd",
              borderRadius: "4px",
            }}
          >
            Loading services...
          </div>
        )}

        {services.error && (
          <div
            style={{
              padding: "1rem",
              background: "#ffebee",
              borderRadius: "4px",
              color: "#c62828",
            }}
          >
            Error: {services.error}
          </div>
        )}

        {!services.loading && !services.error && (
          <div>
            <p>
              Found <strong>{services.data.length}</strong> services
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
              }}
            >
              {services.data.map((service, index) => (
                <div
                  key={service.id || index}
                  style={{
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "#fff",
                  }}
                >
                  {service.img && (
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={60}
                      height={60}
                      style={{ marginBottom: "0.5rem" }}
                    />
                  )}
                  <h3 style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>
                    {service.title}
                  </h3>
                  <p
                    style={{
                      margin: "0.5rem 0",
                      color: "#666",
                      fontSize: "0.9rem",
                    }}
                  >
                    {service.description}
                  </p>
                  <div style={{ fontSize: "0.8rem", color: "#999" }}>
                    ID: {service.id} | Page: {service.pageNumber}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <hr style={{ margin: "2rem 0" }} />

      {/* Pricings Section */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>💰 Pricings API</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Pricing Type:{" "}
            <select
              value={pricingType}
              onChange={(e) => setPricingType(e.target.value)}
              style={{ padding: "0.5rem" }}
            >
              <option value="pricings">Regular Pricings</option>
              <option value="design">Design Pricings</option>
              <option value="development">Development Pricings</option>
              <option value="support">Support Pricings</option>
              <option value="app-version">App Version Pricings</option>
            </select>
          </label>
        </div>

        {pricings.loading && (
          <div
            style={{
              padding: "1rem",
              background: "#e3f2fd",
              borderRadius: "4px",
            }}
          >
            Loading pricings...
          </div>
        )}

        {pricings.error && (
          <div
            style={{
              padding: "1rem",
              background: "#ffebee",
              borderRadius: "4px",
              color: "#c62828",
            }}
          >
            Error: {pricings.error}
          </div>
        )}

        {!pricings.loading && !pricings.error && (
          <div>
            <p>
              Found <strong>{pricings.data.length}</strong> pricing plans
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
              }}
            >
              {pricings.data.map((pricing, index) => (
                <div
                  key={pricing.id || index}
                  style={{
                    padding: "1.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "#fff",
                  }}
                >
                  <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.3rem" }}>
                    {pricing.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#1976d2",
                      marginBottom: "1rem",
                    }}
                  >
                    ${pricing.price}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {pricing.items &&
                      pricing.items.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            padding: "0.5rem 0",
                            borderBottom: "1px solid #eee",
                            fontSize: "0.9rem",
                          }}
                        >
                          ✓{" "}
                          {typeof item === "string"
                            ? item
                            : locale === "ar"
                            ? item.text_ar
                            : item.text_en}
                        </li>
                      ))}
                  </ul>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#999",
                      marginTop: "1rem",
                    }}
                  >
                    ID: {pricing.id} | Page: {pricing.pageNumber}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <hr style={{ margin: "2rem 0" }} />

      {/* Brands Section */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>🏢 Brands API</h2>

        {brands.loading && (
          <div
            style={{
              padding: "1rem",
              background: "#e3f2fd",
              borderRadius: "4px",
            }}
          >
            Loading brands...
          </div>
        )}

        {brands.error && (
          <div
            style={{
              padding: "1rem",
              background: "#ffebee",
              borderRadius: "4px",
              color: "#c62828",
            }}
          >
            Error: {brands.error}
          </div>
        )}

        {!brands.loading && !brands.error && (
          <div>
            <p>
              Found <strong>{brands.data.length}</strong> brands
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {brands.data.map((brand, index) => (
                <div
                  key={brand.id || index}
                  style={{
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={brand.img}
                    alt={`Brand ${brand.id}`}
                    width={150}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#999",
                      marginTop: "0.5rem",
                    }}
                  >
                    ID: {brand.id} | Order: {brand.order}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <hr style={{ margin: "2rem 0" }} />

      {/* API Status */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>🔍 API Status</h2>
        <div
          style={{
            padding: "1rem",
            background: "#f5f5f5",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "0.9rem",
          }}
        >
          <p>
            API URL:{" "}
            <strong>
              {process.env.NEXT_PUBLIC_API_URL || "Not configured"}
            </strong>
          </p>
          <p>
            Services Status:{" "}
            <span
              style={{
                color: services.loading
                  ? "orange"
                  : services.error
                  ? "red"
                  : "green",
                fontWeight: "bold",
              }}
            >
              {services.loading
                ? "Loading..."
                : services.error
                ? "Error"
                : "OK"}
            </span>
          </p>
          <p>
            Pricings Status:{" "}
            <span
              style={{
                color: pricings.loading
                  ? "orange"
                  : pricings.error
                  ? "red"
                  : "green",
                fontWeight: "bold",
              }}
            >
              {pricings.loading
                ? "Loading..."
                : pricings.error
                ? "Error"
                : "OK"}
            </span>
          </p>
          <p>
            Brands Status:{" "}
            <span
              style={{
                color: brands.loading
                  ? "orange"
                  : brands.error
                  ? "red"
                  : "green",
                fontWeight: "bold",
              }}
            >
              {brands.loading ? "Loading..." : brands.error ? "Error" : "OK"}
            </span>
          </p>
        </div>
      </section>

      <div
        style={{
          padding: "1rem",
          background: "#fff3cd",
          borderRadius: "8px",
          border: "1px solid #ffc107",
        }}
      >
        <h3>📖 Documentation</h3>
        <p>For more information, see:</p>
        <ul>
          <li>
            <code>README-API-INTEGRATION.md</code> - API usage guide
          </li>
          <li>
            <code>SETUP-INSTRUCTIONS.md</code> - Setup instructions
          </li>
          <li>
            Example components in <code>src/app/Components/*-api.jsx</code>
          </li>
        </ul>
      </div>
    </div>
  );
}


"use client";

import React, { useState, useEffect } from 'react';
import { PhoneInput as ReactInternationalPhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

type PhoneInputProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export const PhoneInput: React.FC<PhoneInputProps> = ({ name, value, onChange }) => {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/country')
      .then((res) => {
        if (!res.ok) throw new Error('Response not OK');
        return res.json();
      })
      .then((data) => {
        if (data.country) {
          setCountry(data.country.toLowerCase());
        } else {
          setCountry("in");
        }
      })
      .catch((err) => {
        console.warn("Country auto-detect fallback active:", err.message);
        setCountry("in");
      });
  }, []);

  if (!country) {
    return (
      <div className="custom-phone-input-root relative w-full">
        <div className="w-full flex rounded-2xl border border-foreground/15 bg-background h-[58px] animate-pulse items-center px-5">
          <span className="text-foreground/20 text-lg">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-phone-input-root relative w-full">
      <ReactInternationalPhoneInput
        defaultCountry={country}
        value={value}
        onChange={(phone) => onChange(phone)}
        className="w-full"
        inputProps={{
          id: name,
          name: name,
          placeholder: 'Phone *',
        }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        /* Parent Container Reset */
        .custom-phone-input-root {
          position: relative !important;
        }

        /* Main Container Reset */
        .custom-phone-input-root .react-international-phone-input-container {
          display: flex !important;
          align-items: center !important;
          width: 100% !important;
          border-radius: 1rem !important; /* rounded-2xl */
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.15)) !important;
          background-color: var(--background) !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
          position: relative !important;
        }

        /* Support both Tailwind theme variables and direct fallback border styling */
        @supports (border-color: color-mix(in srgb, currentColor 15%, transparent)) {
          .custom-phone-input-root .react-international-phone-input-container {
            border-color: color-mix(in srgb, var(--foreground) 15%, transparent) !important;
          }
        }

        .custom-phone-input-root .react-international-phone-input-container:focus-within {
          border-color: var(--foreground) !important;
        }

        /* Country Selector Button */
        .custom-phone-input-root .react-international-phone-country-selector-button {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: transparent !important;
          border: none !important;
          border-right: 1px solid var(--border-color, rgba(255, 255, 255, 0.12)) !important;
          padding: 0 12px !important;
          height: 56px !important;
          border-radius: 1rem 0 0 1rem !important;
          cursor: pointer !important;
          transition: background-color 0.2s ease !important;
          flex-shrink: 0 !important;
        }

        .custom-phone-input-root .react-international-phone-country-selector-button:hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }

        /* Flag Icon */
        .custom-phone-input-root .react-international-phone-country-selector-button__flag-emoji,
        .custom-phone-input-root .react-international-phone-flag-img {
          width: 24px !important;
          height: 16px !important;
          border-radius: 2px !important;
          margin: 0 !important;
        }

        /* Arrow Dropdown Icon */
        .custom-phone-input-root .react-international-phone-country-selector-button__dropdown-arrow {
          margin-left: 6px !important;
          border-top-color: currentColor !important;
          opacity: 0.6 !important;
        }

        /* Number Input Field */
        .custom-phone-input-root .react-international-phone-input {
          width: 100% !important;
          flex: 1 !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          padding: 1rem 1rem 1rem 0.75rem !important;
          font-size: 1.125rem !important;
          line-height: 1.75rem !important;
          color: var(--foreground) !important;
          font-family: inherit !important;
        }

        .custom-phone-input-root .react-international-phone-input::placeholder {
          color: var(--foreground) !important;
          opacity: 0.4 !important;
        }

        /* Dropdown Popup Menu - FORCE White Background and Black Text */
        .custom-phone-input-root .react-international-phone-country-selector-dropdown {
          position: absolute !important;
          top: 100% !important;
          left: 0 !important;
          background-color: #ffffff !important;
          border: 1px solid rgba(0, 0, 0, 0.15) !important;
          border-radius: 1rem !important;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.25) !important;
          margin-top: 8px !important;
          z-index: 9999 !important;
          max-height: 250px !important;
          overflow-y: auto !important;
          padding: 6px !important;
          width: 300px !important;
        }

        /* Dropdown Search Container */
        .custom-phone-input-root .react-international-phone-country-selector-dropdown__search-container {
          padding: 8px 8px 4px 8px !important;
        }

        /* Search Input - Light Theme Styles */
        .custom-phone-input-root .react-international-phone-country-selector-dropdown__search-input {
          width: 100% !important;
          background-color: #f5f5f5 !important;
          border: 1px solid rgba(0, 0, 0, 0.15) !important;
          border-radius: 0.5rem !important;
          padding: 8px 12px !important;
          color: #000000 !important;
          outline: none !important;
          font-size: 0.9rem !important;
        }

        .custom-phone-input-root .react-international-phone-country-selector-dropdown__search-input:focus {
          border-color: rgba(0, 0, 0, 0.4) !important;
          background-color: #ffffff !important;
        }

        /* Dropdown List Items - Black Text */
        .custom-phone-input-root .react-international-phone-country-selector-dropdown__list-item {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 10px 14px !important;
          border-radius: 0.75rem !important;
          font-size: 0.95rem !important;
          color: #000000 !important;
          cursor: pointer !important;
          transition: background-color 0.15s ease !important;
        }

        /* Hover & Active States */
        .custom-phone-input-root .react-international-phone-country-selector-dropdown__list-item:hover,
        .custom-phone-input-root .react-international-phone-country-selector-dropdown__list-item--focused,
        .custom-phone-input-root .react-international-phone-country-selector-dropdown__list-item--selected {
          background-color: rgba(0, 0, 0, 0.05) !important;
        }

        /* Extra text elements inside list items (like country dialing code or name) */
        .custom-phone-input-root .react-international-phone-country-selector-dropdown__list-item * {
          color: #000000 !important;
        }
      `}} />
    </div>
  );
};

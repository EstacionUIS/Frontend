import React, { useState } from 'react';

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="bg-light rounded p-3">
          <button
            className="btn btn-primary w-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </button>
          {isOpen && (
            <div className="mt-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleSection;

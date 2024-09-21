import { useState } from "react";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="">
        <button onClick={() => toggleDropdown()}>click</button>

        {isOpen ? (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        ) : null}
      </div>
    </>
  );
};

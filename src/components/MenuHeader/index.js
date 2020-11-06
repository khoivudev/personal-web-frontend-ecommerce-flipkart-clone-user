import React from "react";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";

const MenuHeader = (props) => {
  const category = useSelector((state) => state.category);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              {category.name}
            </a>
          ) : (
            <span>
              {category.name} <IoIosArrowDown />
            </span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  return (
    <div className="menu-header">
      <ul>{renderCategories(category.categories)}</ul>
    </div>
  );
};

export default MenuHeader;

import { useState, useEffect } from "react";
import ModalCategory from "./ModalCategory";

const Category = () => {
  // initial local storage
  const [categories, setCategories] = useState(() => {
    let storageCategories = localStorage.getItem("categories");
    if (storageCategories != null) {
      return JSON.parse(storageCategories);
    } else {
      return [];
    }
  });
  // new object
  const [newCategory, setNewCategory] = useState("");
  const [newIcon, setNewIcon] = useState("/images/default.png");
  const addCategories = () => {
    categories.unshift({ icon: newIcon, categoryName: newCategory });
    setCategories([...categories]);
    setNewCategory("");
    setNewIcon("/images/default.png");
  };
  // saving to localstorage
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
  // deleting objects from localstorage
  const deleteCategories = (idx) => {
    categories.splice(idx, 1);
    setCategories([...categories]);
  };
  // modal
  const [iconModel, setIconModel] = useState(false);

  return (
    <div>
      {/* creating category */}
      <div className="createCategory">
        <div className="nameContainer">
            <div
              className="changeIcon"
              onClick={() => {
                setIconModel(true);
              }}
            >
              <img className="icon" src={newIcon} />
              <p>Изменить</p>
            </div>
          <input
            placeholder="Имя"
            type="text"
            id="addName"
            value={newCategory}
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
          />
        </div>
        <div className="buttonContainer">
          <button className="addCategory" type="submit" onClick={addCategories}>
            ДОБАВИТЬ
          </button>
        </div>
      </div>
      {/* displaying categories */}
      <div>
        {categories != null &&
          categories.map((category, idx) => (
            <div className="categoryPreview" key={idx}>
              <div className="nameContainer">
                <img src={category.icon} className="icon"></img>
                <div className="nameLabel">
                  <p>Имя</p>
                  <div className="categoryName">{category.categoryName}</div>
                </div>
              </div>
              {/* deleting categories */}
              <div className="buttonContainer">
                <button
                  className="deleteCategory"
                  onClick={() => {
                    deleteCategories(idx);
                  }}
                >
                  УДАЛИТЬ
                </button>
              </div>
            </div>
          ))}
      </div>
      {/* modal */}
      {iconModel && (
        <ModalCategory
          state={iconModel}
          setState={setIconModel}
          icon={newIcon}
          setIcon={setNewIcon}
        />
      )}
    </div>
  );
};
export default Category;

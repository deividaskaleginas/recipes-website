import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

type MultipleCategoriesProps = {
  categoriesList: string[];
  onChange: (category: string[]) => void;
};

type CategoriesProps = {
  categoriesOptions: string[];
} & MultipleCategoriesProps;

export const Categories: React.FC<CategoriesProps> = ({
  categoriesList,
  onChange,
  categoriesOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const clearCategories = () => {
    onChange([]);
  };

  const selectCategory = (selectedCategory: string) => {
    if (categoriesList.includes(selectedCategory)) {
      onChange(
        categoriesList.filter((categories) => categories !== selectedCategory)
      );
    } else {
      onChange([...categoriesList, selectedCategory]);
    }
  };

  return (
    <CategoriesStyledBlock
      isOpen={isOpen}
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span>
        {categoriesList.map((selectedCategory) => (
          <MultipleOptions
            type="button"
            key={selectedCategory}
            onClick={(e) => {
              e.stopPropagation();
              selectCategory(selectedCategory);
            }}
          >
            {selectedCategory} <span>&times;</span>
          </MultipleOptions>
        ))}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          clearCategories();
        }}
      >
        &times;
      </button>
      <DividerStyled></DividerStyled>
      <CaretStyled></CaretStyled>
      <ul>
        {categoriesOptions.map((category) => (
          <li
            key={category}
            onClick={(e) => {
              e.stopPropagation();
              selectCategory(category);
              setIsOpen(false);
              // isCategorySelected(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </CategoriesStyledBlock>
  );
};

const CategoriesStyledBlock = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  border: 0.0938rem solid ${() => theme.colors.gray4};
  border-radius: 0.625rem;
  color: ${() => theme.colors.label};
  font-size: 0.6875rem;
  padding: 1.1875rem 1.25rem;
  line-height: 1.0313rem;
  margin-bottom: 1.875rem;
  outline: none;

  :focus {
    border-color: ${theme.colors.secondary100};
  }

  span {
    flex-grow: 1;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  button {
    background: none;
    color: ${() => theme.colors.gray3};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.25rem;
  }

  ul {
    position: absolute;
    left: 0;
    top: calc(100% + 0.25rem);
    width: 100%;
    list-style: none;
    display: ${({ isOpen }) => (isOpen ? "" : "none")};
    max-height: 5rem;
    overflow-y: auto;
    border: 0.0938rem solid ${() => theme.colors.gray4};
    border-radius: 0.625rem;
    background-color: ${() => theme.colors.white};
    z-index: 100;

    li {
      padding: 0.25rem 0.5rem;
    }
  }
`;

const DividerStyled = styled.div`
  align-self: stretch;
  background-color: ${() => theme.colors.gray3};
  width: 0.05rem;
`;

const CaretStyled = styled.div`
  translate: 0 25%;
  border: 0.25rem solid transparent;
  border-top-color: ${theme.colors.gray3};
  font-size: 1.25rem;
`;

const MultipleOptions = styled.button`
  display: flex;
  align-items: center;
  border: 0.0938rem solid ${() => theme.colors.gray4};
  border-radius: 0.625rem;
  padding: 0.15rem 0.25rem;
  gap: 0.25rem;
  background: none;
  outline: none;

  :hover,
  :focus {
    background-color: ${theme.colors.secondary100};
    border-color: ${theme.colors.secondary100};
    color: ${theme.colors.white};
  }
`;

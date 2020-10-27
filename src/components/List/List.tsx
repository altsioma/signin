import React, { useState, useCallback, useRef, useEffect } from "react";
import { TypoGraphy, ThemeColors } from "../Common";
import styled from "@emotion/styled";
import arrow from "./img/ico-arrow.svg";

export type ListBaseProps = {
  isListOpened?: boolean;
  isSelected?: boolean;
};

export const ListInputStyled = styled("div")<ListBaseProps>`
  ${(props: ListBaseProps) =>
    props.isSelected ? TypoGraphy.plainBlack : TypoGraphy.placeholder}
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #f5f8fa;
  padding: 16px 0 16px 17px;
  position: relative;
  &:after {
    position: absolute;
    right: 21px;
    top: 20px;
    width: 11px;
    height: 11px;
    content: "";
    background-image: url(${arrow});
    transform: ${(props: ListBaseProps) =>
      props.isListOpened && "rotate(180deg)"};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ListItemsStyled = styled("ul")<ListBaseProps>`
  display: ${(props: ListBaseProps) => (props.isListOpened ? "block" : "none")};
  max-height: 196px;
  background-color: ${ThemeColors.white};
  border-radius: 8px;
  box-shadow: 0px 3px 8px #00000026;
  list-style: none;
  position: absolute;
  margin: 6px 0;
  padding: 6px 0;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

export const ItemStyled = styled.li(
  `
height: 36px;
padding: 10px 0 9px 20px;
&:hover {
  cursor: pointer;
  background-color: ${ThemeColors.lightGrey};
}
`,
  TypoGraphy.plainBlack
);

type ItemType = {
  value: string | number;
  label: string;
};

type ListProps = ListBaseProps & {
  items: ItemType[];
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const List: React.FC<ListProps> = ({ items, placeholder, onChange }) => {
  const [isListOpened, toggleList] = useState(false);
  const [selectedItem, setItem] = useState<ItemType>();
  const ref = useRef(null);
  const selectItem = useCallback(
    (item) => {
      setItem(item);
      toggleList(false);
      onChange(item.value);
    },
    [onChange]
  );
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        toggleList(false);
      }
    },
    [ref]
  );
  const toggleListHandler = useCallback(() => { 
    toggleList(!isListOpened);
  }, [isListOpened]);
  useEffect(() => {
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [clickListener]);
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <ListInputStyled onClick={toggleListHandler} isSelected={!!selectedItem} isListOpened={isListOpened}>
        {selectedItem ? selectedItem.label : placeholder}
      </ListInputStyled>

      <ListItemsStyled isListOpened={isListOpened}>
        {items.map((item, index) => (
          <ItemStyled onClick={() => selectItem(item)} key={index}>
            {item.label}
          </ItemStyled>
        ))}
      </ListItemsStyled>
    </div>
  );
};

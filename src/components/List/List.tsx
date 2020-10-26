import React, { useState, useCallback } from "react";
import {
  ListBaseProps,
  ListInputStyled,
  ListItemsStyled,
  ItemStyled,
} from "./List.styled";

type ItemType = {
  value: string | number;
  label: string;
};

type ListProps = ListBaseProps & {
  items: ItemType[];
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const List: React.FC<ListProps> = ({
  items,
  placeholder,
  onChange,
}) => {
  const [isListOpened, toggleList] = useState(false);
  const [selectedItem, setItem] = useState<ItemType>();
  const toggleListHandler = useCallback(() => { 
    toggleList(!isListOpened);
  }, [isListOpened]);
  const selectItem = useCallback(
    (item) => {
      setItem(item);
      toggleList(false);
      onChange(item.value);
    },
    [onChange]
  );
  return (
    <div style={{ position: "relative" }}>
      <ListInputStyled
        isSelected={!!selectedItem}
        onClick={toggleListHandler}
        isListOpened={isListOpened}
      >
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

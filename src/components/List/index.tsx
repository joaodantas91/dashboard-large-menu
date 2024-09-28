import { Dispatch, useEffect, useRef, useState } from "react"
import { range } from "../../utils/range"
import { Item } from "../../types/item";
import { EditIcon } from "../../assets/Icons/edit";
import classes from "./index.module.css"
import useWindowDimensions from "../../hooks";

type ListProps = {
  data: Item[],
  isLoading: boolean,
  setSelectedItem: Dispatch<React.SetStateAction<Item | null>>,
  selectedItem: Item | null
}

export function List ({ data, isLoading, setSelectedItem, selectedItem }: ListProps) {
  const { width } = useWindowDimensions();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const topSpacerRef = useRef<HTMLDivElement>(null);
  const bottomSpacerRef = useRef<HTMLDivElement>(null);



  const lineHeight = 40;
  const listHeight = width >= 706 ? Math.floor((wrapperRef.current?.clientHeight || 0)) : 400;
  const itemsPerView = listHeight / lineHeight;
  const itemsRendered = itemsPerView * 3;

  // const gap = 5;

  // lineHeight * itemsPerView + (gap * (itemsPerView - 1));


  const [topSpacerHeight, setTopSpacerHeight] = useState(0)
  const [bottomSpacerHeight, setBottomSpacerHeight] = useState(0)

  const [visibleItems, setVisibleItems] = useState(
    data.slice(0, itemsPerView)
  )


  function handleEdit (item: Item) {
    setSelectedItem(item)
  }

  useEffect(() => {
    topSpacerRef.current!.style.height = topSpacerHeight + "px"
  }, [topSpacerHeight])

  useEffect(() => {
    bottomSpacerRef.current!.style.height = bottomSpacerHeight + "px"
  }, [bottomSpacerHeight])

  useEffect(() => {
    function handleScroll () {
      const scrollTop = listRef.current!.scrollTop;
      const upperItems = Math.floor(scrollTop / lineHeight);
      const startItemIndex = Math.min(upperItems, Math.max(upperItems - itemsPerView, 0));

      setVisibleItems(data.slice(startItemIndex, startItemIndex + itemsRendered))

      const _topSpacerHeight = startItemIndex * lineHeight;
      setTopSpacerHeight(_topSpacerHeight);

      const _bottomSpacerHeight =
        Math.max((data.length * lineHeight) - _topSpacerHeight - ((itemsRendered - itemsPerView) * lineHeight), 0);


      setBottomSpacerHeight(
        _bottomSpacerHeight
      );
    }

    listRef.current?.addEventListener("scroll", handleScroll)
    const ref = listRef.current

    handleScroll();
    return () => {
      ref!.removeEventListener('scroll', handleScroll);
    };
  }, [data, data.length, itemsPerView, itemsRendered, listHeight])
  return (
    <div className={classes.list__wrapper} ref={wrapperRef}>
      <ul className={classes.list} style={{ maxHeight: listHeight + "px", overflow: "auto" }} ref={listRef} >
        <li className={`${classes.list__item} ${classes.spacer}`}>
          <div ref={topSpacerRef}></div>
        </li>
        {
          isLoading ?
            range(30).map(item => (
              <li key={item}>
                {" "}
              </li>
            ))
            : visibleItems.map((item: Item) => (
              <li
                key={item.id}
                className={classes.list__item}
              >
                <div
                  className={`${classes["list__item-content"]} ${selectedItem?.id === item.id ? classes.selected : ""}`}
                  style={{ lineHeight: lineHeight + "px", height: lineHeight + "px" }}
                >
                  <p>{item.name}</p>
                  <p>
                    {
                      item.price.toLocaleString("en-GB", {
                        style: "currency",
                        currency: "GBP"
                      })
                    }

                  </p>
                  <div>
                    <button onClick={() => handleEdit(item)}>

                      <EditIcon />
                    </button>
                  </div>

                </div>

              </li>
            ))
        }
        <li className={`${classes.list__item} ${classes.spacer}`}>
          <div ref={bottomSpacerRef}></div>
        </li>
      </ul >
    </div>

  )
}
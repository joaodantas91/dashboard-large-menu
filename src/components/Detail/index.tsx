import { Dispatch, useState } from "react";
import { Item } from "../../types/item"
import classes from "./index.module.css"

type DetailProps = {
  selectedItem: Item | null;
  setSelectedItem: Dispatch<React.SetStateAction<Item | null>>
}

export function Detail ({ selectedItem, setSelectedItem }: DetailProps) {
  const [activeTab, setActiveTab] = useState(0);

  function BasicsTab () {
    return (
      <>
        <label className={classes.detail__label}>
          <small>
            Item name
          </small>
          <input readOnly className={classes.detail__input} type="text" value={selectedItem?.internalName} />

        </label>

        <label className={classes.detail__label}>
          <small>
            Display name
          </small>
          <input readOnly className={classes.detail__input} type="text" value={selectedItem?.name} />

        </label>

        <label className={classes.detail__label}>
          <small>
            Description
          </small>
          <input readOnly className={classes.detail__input} type="text" value={selectedItem?.description} />

        </label>

        <label className={classes.detail__label}>
          <small>
            Price
          </small>
          <input readOnly className={classes.detail__input} type="text" value={selectedItem?.price} />
          <span>GBP</span>
        </label>
      </>
    )
  }

  const tabs = [
    {
      index: 0,
      label: "Basics",
      content: <BasicsTab />
    },
    {
      index: 1,
      label: "Image",
      content: (
        <div>
          {
            selectedItem?.images?.[0]?.image ?
              <img src={selectedItem.images[0].image} alt="" /> :
              "No Image in the API"
          }
        </div>
      )
    }
  ];

  return (

    <div className={classes.detail}>
      <ul className={classes.detail__tabs}>
        {tabs.map(({ index, label }) => (
          <li key={index}>
            <button
              className={`${classes.detail__tab} ${activeTab === index ? classes.active : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {label}
            </button>

          </li>
        ))}
      </ul>

      <div className={classes.detail__content}>
        {tabs[activeTab].content}
      </div>

      <footer className={classes.detail__footer}>
        <button onClick={() => setSelectedItem(null)} className={classes["detail__footer-button"]}>
          Cancel
        </button>

        <button
          onClick={() => setSelectedItem(null)}
          className={`${classes["detail__footer-button"]} ${classes.contained}`}
        >
          Done
        </button>
      </footer>
    </div>
  )
}
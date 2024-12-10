"use client";

import { useEffect, useState } from "react";
import FormContent from "../form-content/FormContent";
import styles from "./wrapper.module.css";

const WrapperComp = () => {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [date, setDate] = useState("");
  const [dim, setDim] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    try {
      setLoading(true);
      if (!lon || !lat || !date || !dim) {
        setLoading(false);
        console.log("Missing required parameters. Please fill");
        alert("Missing required parameters.");
        return;
      }
      const response = await fetch(
        `/api/v1/get-earth-imagery?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}`
      );
      console.log(response);

      if (response?.status === 200 && response?.ok) {
        const imageBlob = await response.blob();
        const imgUrl = URL.createObjectURL(imageBlob);
        setImgUrl(imgUrl);
      }
      setLoading(false);
      console.log("imgUrl", imgUrl);
    } catch (err) {
      console.error("Error fetching image:", err);
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        {loading ? (
          <div className={styles.textWrapper}>
            {" "}
            <h1>Loading...</h1>
          </div>
        ) : imgUrl ? (
          <img src={imgUrl} alt="Earth Imagery" className={styles.image} />
        ) : (
          <div className={styles.textWrapper}>
            {" "}
            <h1>Enter parameters to see the image.</h1>
          </div>
        )}
      </div>

      <FormContent
        lon={lon}
        lat={lat}
        date={date}
        dim={dim}
        setDim={setDim}
        setDate={setDate}
        setLat={setLat}
        setLon={setLon}
        handleClickFunc={fetchImage}
      />
    </div>
  );
};

export default WrapperComp;

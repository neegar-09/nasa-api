// import { useContext } from 'react';
import styles from "./FormContent.module.css";
// import { ApplicationContext } from '@/contexts/ApplicationContext';
const FormContent = ({
  handleClickFunc,
  lon,
  setLon,
  lat,
  setLat,
  date,
  setDate,
  dim,
  setDim,
}) => {
  // const {lon , setLon , lat, setLat , date , setDate , dim , setDim  } = useContext(ApplicationContext)

  return (
    <div className={styles.formWrapper}>
      <form>
        <input
          type="number"
          placeholder="Enter Longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter dim"
          value={dim}
          onChange={(e) => setDim(e.target.value)}
        />
        <div className={styles.sendBtn}>
          <button onClick={handleClickFunc} type="button" className="sendBtn">
            Send request
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContent;

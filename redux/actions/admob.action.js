import { AD_OFF, AD_ON } from "../constant";
export const ToggleAdOn = () => ({
  type: AD_ON,
});
export const ToggleAdOff = () => ({
  type: AD_OFF,
});

export const ToggleAds = (ads_state) => {
  return async (dispatch) => {
    if (ads_state === true) {
      dispatch(ToggleAdOn());
      storeData(true);
    } else {
      dispatch(ToggleAdOff());
      storeData(false);
    }
  };
};

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@ad_status", value);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@ad_status");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

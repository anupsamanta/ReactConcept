import {createSelector} from '@reduxjs/toolkit';
/***** get doctors Profile Header's data *****/
const doctorProfileHeader = state =>
  state.doctorProfileState.doctorProfileHeader;
  
const initLoader = state => state.doctorProfileState.loader;



/****** get doctors list ****/
const doctorProfileHeaderSelector = createSelector(
  [doctorProfileHeader],
  doctorProfileHeader => doctorProfileHeader.list,
);
const loader = createSelector(
  [initLoader],
  _loader => _loader,
);

export const doctorProfileSelector = {
  getDoctorProfileHeader: () => doctorProfileHeaderSelector,
  getLoader:()=> loader
};

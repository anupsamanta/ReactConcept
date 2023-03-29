import {createSelector} from '@reduxjs/toolkit';
/***** get doctors Profile Header's data *****/
const doctorProfileHeader = state =>
  state.doctorProfileState.doctorProfileHeader;

/****** get doctors list ****/
const doctorProfileHeaderSelector = createSelector(
  [doctorProfileHeader],
  doctorProfileHeader => doctorProfileHeader.list,
);

export const doctorProfileSelector = {
  getDoctorProfileHeader: () => doctorProfileHeaderSelector,
};

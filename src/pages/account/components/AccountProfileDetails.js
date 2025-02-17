/* eslint-disable */
import { Field } from 'react-final-form';
import { TextField as TextFieldFinal } from 'final-form-material-ui';
import { OnChange } from 'react-final-form-listeners';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Alert,
  TextField
} from '@material-ui/core';

const AccountProfileDetails = ({ setIsDisable, data }) => {
  return (
    <Card>
      <CardHeader
        title="المعلومات الشخصية لمالك المركز"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="اسم مالك المركز"
              name="firstName"
              value={data.firstName + ' ' + data.lastName}
              variant="outlined"
              dir="rtl"
              className="custom-field"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Field
              fullWidth
              required
              label="البربد الالكتروني"
              name="email"
              component={TextFieldFinal}
              type="email"
              // onChange={handleChange}
              initialValue={data.email}
              variant="outlined"
              dir="rtl"
              className="custom-field"
            />

            <OnChange name="email">
              {(value, previous) => {
                setIsDisable(true);
              }}
            </OnChange>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Field
              fullWidth
              required
              label="رقم الجوال"
              name="phoneNumber"
              component={TextFieldFinal}
              initialValue={data.phoneNumber}
              variant="outlined"
              className="custom-field"
            />

            <OnChange name="phoneNumber">
              {(value, previous) => {
                setIsDisable(true);
              }}
            </OnChange>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
          >
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AccountProfileDetails;
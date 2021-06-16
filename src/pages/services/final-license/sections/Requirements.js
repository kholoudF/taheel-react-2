/* eslint-disable no-unused-vars */
import {
  Grid,
} from '@material-ui/core';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import FileUploaderComp from '../components/FileUploader';

const Requirements = ({ setField, values }) => {
  var multipleDocs = []
  const setDocument = (name, docID, multiple) => {
    if (!multiple)
      setField(name, [docID])
    else {
      multipleDocs.push(docID)
      setField(name, multipleDocs)
    }
  }
  return (
    <>
      <Grid
        container
        spacing={3}
        mt={3}
      >
        <Grid
          item
          md={12}
          xs={12}
        >
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Field
            label="ارفاق الخطة التشغيلية"
            name="OperationalPlan"
            component={FileUploaderComp}
            inputType={false}
            setField={setField}
            setDocument={setDocument}
            values={values}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Field
            label="ارفاق الخطة التنفيذية"
            name="ExecutivePlan"
            component={FileUploaderComp}
            inputType={false}
            setField={setField}
            setDocument={setDocument}
            values={values}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Field
            label="ارفاق تقرير زيارة مكتب هندسي معتمد"
            name="OfficeReport"
            component={FileUploaderComp}
            inputType={false}
            setField={setField}
            setDocument={setDocument}
            values={values}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Field
            label="ارفاق تقرير المسح الأمني"
            name="SecurityReport"
            component={FileUploaderComp}
            inputType={false}
            setField={setField}
            setDocument={setDocument}
            values={values}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Field
            label="ارفاق صور الأثاث و الأجهزة الكهربائية"
            name="Furniture"
            component={FileUploaderComp}
            inputType={true}
            setField={setField}
            setDocument={setDocument}
            values={values}
          />

        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Field
            label="ارفاق الضمان المالي"
            name="FinancialGuaranteeAtt"
            component={FileUploaderComp}
            inputType={false}
            setField={setField}
            setDocument={setDocument}
            values={values}
          />
        </Grid>
      </Grid>
    </>
  )
};

export default Requirements;
Requirements.propTypes = {
  setField: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};
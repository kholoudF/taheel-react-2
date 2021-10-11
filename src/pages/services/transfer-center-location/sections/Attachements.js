/* eslint-disable  */
import {
  Grid,
} from '@material-ui/core';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import FileUploaderComp from '../../final-license/components/FileUploader';

const Attachements = ({ setField, values, setIsEnableNextBtn }) => {
  var multipleFileDocs = []

  const setDocument = (name, docID, multipleFile) => {
    if (!multipleFile)
      setField(name, [docID])
    else {
      multipleFileDocs.push(docID)
      setField(name, multipleFileDocs)
    }
  }
  return (
    <>
      <Grid
        container
        spacing={3}
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
            label="ارفاق صور الأثاث و الأجهزة الكهربائية (للمبنى الجديد)"
            name="Furniture"
            component={FileUploaderComp}
            multipleFile={true}
            setField={setField}
            setDocument={setDocument}
            values={values}
            imgOnly = {true}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Field
            label="رخصة البلدية (للمبنى الجديد)"
            name="municipLicenseNo"
            component={FileUploaderComp}
            multipleFile={false}
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
            label=" تقرير مكتب هندسي معتمد (للمبنى الجديد)"
            name="OfficeReport"
            component={FileUploaderComp}
            multipleFile={false}
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
            label="رخصة دفاع المدني (للمبنى الجديد)"
            // name="municipLicense"
            name="fireDepartmentLicense"
            component={FileUploaderComp}
            multipleFile={false}
            setField={setField}
            setDocument={setDocument}
            values={values}
          />
        </Grid>
      </Grid>
    </>
  )
};

export default Attachements;
Attachements.propTypes = {
  setField: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};
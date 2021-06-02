/* eslint-disable */
import { useState, useEffect } from 'react';
import {
	Grid,
	Button,
	Alert,
	Typography,
	Box,
	CircularProgress,
} from '@material-ui/core';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { TextField as TextFieldFinal, Select } from 'final-form-material-ui';
import { calculation } from '../services/finalLicenseAPI'
import { ContentField } from '../services/finalLicenseUtil'
const Capacity = ({ Condition, values, setField }) => {

	const [companyDetails, setCompanyDetails] = useState({ Capacity: '', FinancialGuarantee: '' })
	const [calculatedData, setCalculatedData] = useState(false)
	const [errMessage, SetErrMessage] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		console.log('hiiiiiiiiiiiiii')
		setField('isNextBtnDisabled',true)
	}, [values.isNextBtnDisabled]);

	const calculate = async () => {
		setLoading(true)

		const response = await calculation(values.buildingArea, values.basementArea)
		if (!response.isSuccessful) {
			SetErrMessage(response.message)
			setCalculatedData(false)
		}
		else {
			setField('isNextBtnDisabled',false)
			setField('capacity', response.responseBody.body.carryingCapacity.toFixed(0))
			setField('financialGuarantee', `${response.responseBody.body.financialGuarantee.toFixed(3)} ر.س.`)
			setCalculatedData(true)
			SetErrMessage('')
		}
		setLoading(false)
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
					{errMessage && (
						<Alert variant="outlined" severity="error">
							{errMessage}
						</Alert>
					)}
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
				>
					<Field
						fullWidth
						label="عدد المستفيدين الفعلي"
						required
						name="beneficiariesNum"
						component={TextFieldFinal}
						type="text"
						variant="outlined"
						dir="rtl"
						className="custom-field"
					/>
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
					className="custom-label-field"
				>
					<Field
						fullWidth
						required
						label="مساحة مسطح البناء"
						name="buildingArea"
						component={TextFieldFinal}
						type="text"
						variant="outlined"
						dir="rtl"
						className="custom-field"
					/>
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
					className="custom-label-field"
				>
					<Field
						fullWidth
						required
						label="مساحة القبو"
						name="basementArea"
						component={TextFieldFinal}
						type="text"
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
					<Button
						startIcon={loading ? <CircularProgress size="1rem" /> : null}
						variant='outlined'
						type="button"
						sx={{
							height: 55,
							backgroundColor: 'white',
							width: '100%',
							color: '#3c8084',
							':hover': {
								backgroundColor: '#3c8084',
								color: 'white',
							}
						}}
						onClick={calculate}
					>
						احتساب
				</Button>
				</Grid>
				<Grid
					item
					md={12}
					xs={12}
				>
					<Condition is={calculatedData}>
						<Grid
							container
							spacing={3}
							mt={3}
							mb={3}
						>
							<Grid
								item
								lg={12}
								md={12}
								xs={12}
							>
								< ContentField label='الطاقة الاستعابية' value={values.capacity} />
								<Box
									direction='rtl'
									className="custom-label-field"
								>
									<Alert severity="info" size="small">
									يتم حسابه من قبل المنصة:
										(مساحة مسطح البناء - مساحة القبو/10)
										
										{/* الحد الأقصى لكل المستفيدين 10% من مساحة مسطح البناء ناقص القبو حسب اللائحة التنفيذية */}
									</Alert>
								</Box>
							</Grid>

							<Grid
								item
								lg={12}
								md={12}
								xs={12}
							>
								< ContentField label='الضمان المالي' value={values.financialGuarantee} />
								<Box
									direction='rtl'
									className="custom-label-field"
								>
									<Alert severity="info" size="small" dir="rtl" >
										يتم حسابه من قبل المنصة: (2000 ريال * عدد حقل " الطاقة الاستيعابية للمركز" ) لكل مستفيد من مراكز الرعاية النهارية أو التأهيل المهني حسب الطاقة الاستيعابية للمركز
									</Alert>
								</Box>
							</Grid>
						</Grid>

					</Condition>
				</Grid>

			</Grid>
		</>
	)
};

export default Capacity;

Capacity.propTypes = {
	Condition: PropTypes.func.isRequired,
	values: PropTypes.func.isRequired,
	setField: PropTypes.func.isRequired,
};

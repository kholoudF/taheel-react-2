// import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  colors,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import DoneIcon from '@material-ui/icons/Done';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import { REQUEST_STATUS } from 'src/utils/enums'

/* const requests = [
  {
    id: uuid(),
    requestNum: 'CDD1049',
    amount: 30.5,
    centerName: 'Ekaterina Tankova',
    type: 'ترخيص مؤقت لمركز تأهيل أهلي',
    requestDate: '14/9/1442',
    status: '2'
  },
  {
    id: uuid(),
    requestNum: 'CDD1048',
    amount: 25.1,
    centerName: 'Cao Yu',
    type: 'ترخيص مؤقت لمركز تأهيل أهلي',
    requestDate: '14/9/1442',
    status: '-1'
  },
  {
    id: uuid(),
    requestNum: 'CDD1047',
    amount: 10.99,
    centerName: 'Alexa Richardson',
    type: 'ترخيص مؤقت لمركز تأهيل أهلي',
    requestDate: '14/9/1442',
    status: '-2'
  },
  {
    id: uuid(),
    requestNum: 'CDD1046',
    amount: 96.43,
    centerName: 'Anje Keizer',
    type: 'ترخيص مؤقت لمركز تأهيل أهلي',
    requestDate: '14/9/1442',
    status: '2'
  },
  {
    id: uuid(),
    requestNum: 'CDD1045',
    amount: 32.54,
    centerName: 'Clarke Gillebert',
    type: 'ترخيص مؤقت لمركز تأهيل أهلي',
    requestDate: '14/9/1442',
    status: '-1'
  },
  {
    id: uuid(),
    requestNum: 'CDD1044',
    amount: 16.76,
    centerName: 'Clarke Gillebert',
    type: 'ترخيص مؤقت لمركز تأهيل أهلي',
    requestDate: '14/9/1442',
    status: '-1'
  }
]; */
const getChipComponentsForStatus = (status) => {
  if (status === REQUEST_STATUS.COMPLETED) {
    return (
      <Chip
        label="مكتمل"
        variant="outlined"
        size="medium"
        icon={<DoneIcon sx={{ color: '#43A047 !important' }} />}
        sx={{
          color: colors.green[600],
          borderColor: colors.green[600],
        }}
      />
    );
  }
  else if (status === REQUEST_STATUS.REJECTED) {
    return (
      <Chip
        label="مرفوض"
        variant="outlined"
        size="medium"
        icon={<ErrorOutlineIcon sx={{ color: '#e53935 !important' }} />}
        sx={{
          color: colors.red[600],
          borderColor: colors.red[600],
        }}
      />
    );
  }
  else if (status === REQUEST_STATUS.DRAFT) {
    return (
      <Chip
        label="مسودة"
        variant="outlined"
        size="medium"
        icon={<DraftsTwoToneIcon sx={{ color: 'grey !important' }} />}
        sx={{
          color: colors.grey[600],
          borderColor: colors.grey[600],
        }}
      />
    );
  }
  return (
    <Chip
      label="قيد المراجعة"
      variant="outlined"
      size="medium"
      icon={<HistoryOutlinedIcon sx={{ color: '#fb8c00 !important' }} />}
      sx={{
        color: colors.orange[600],
        borderColor: colors.orange[600],
      }}
    />
  );
};
const LatestRequests = (props) => {
  const navigate = useNavigate();
  const { loading = false, taheelRequests = [] } = props;
  taheelRequests.length = 5;
  return (
    <Card>
      <CardHeader title={
        loading ? (
          'الطلبات المقدمة'
        ) : (
          <Skeleton animation="wave" height={15} width="20%" style={{ marginBottom: 6 }} />
        )
      }
      />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800, minHeight: 400 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  {loading ? 'رقم الطلب'
                    : (
                      <Skeleton />
                    )}
                </TableCell>
                <TableCell>
                  {loading ? 'اسم المركز'
                    : (
                      <Skeleton />
                    )}
                </TableCell>
                <TableCell>
                  {loading ? 'نوع الطلب'
                    : (
                      <Skeleton />
                    )}
                </TableCell>
                <TableCell sortDirection="desc">
                  {loading ? (
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        تاريخ الطلب
                      </TableSortLabel>
                    </Tooltip>
                  ) : (
                    <Skeleton />
                  )}
                </TableCell>
                <TableCell>
                  {loading ? 'حالة الطلب'
                    : (
                      <Skeleton />
                    )}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(!loading ? Array.from(new Array(6)) : taheelRequests).filter(t => t?.status != REQUEST_STATUS.DRAFT).map((request, index) => ( // remove filter (status REQUEST_STATUS.DRAFT) to show drafts
                <TableRow
                  hover
                  key={request ? request.requestNum : index}
                >
                  <TableCell>
                    {request ? request.requestNum
                      : (
                        <Skeleton />
                      )}
                  </TableCell>
                  <TableCell>
                    {request ? request.centerName
                      : (
                        <Skeleton />
                      )}
                  </TableCell>
                  <TableCell>
                    {request ? request.type
                      : (
                        <Skeleton />
                      )}
                  </TableCell>
                  <TableCell>
                    {request ? request.requestDate
                      : (
                        <Skeleton />
                      )}
                  </TableCell>
                  <TableCell>
                    {request ? getChipComponentsForStatus(request.status) : (
                      <Skeleton />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        {
          loading ? (
            <Button
              color="primary"
              endIcon={<ArrowLeftIcon />}
              size="large"
              variant="text"
              onClick={() => navigate('/app/orders', { state: { taheelRequests } })}

            >
              عرض جميع الطلبات
            </Button>
          ) : (
            <Skeleton animation="wave" width="10%" />
          )
        }
      </Box>
    </Card>
  );
};

export default LatestRequests;

LatestRequests.propTypes = {
  loading: PropTypes.bool.isRequired,
  taheelRequests: PropTypes.array.isRequired
};

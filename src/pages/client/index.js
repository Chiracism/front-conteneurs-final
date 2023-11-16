import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import plusFill from '@iconify/icons-eva/plus-fill';
// material
import {
  Card,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  TextField
} from '@material-ui/core';

// Modal Importations
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/styles';

// components
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead } from '../../components/_dashboard/user';
import { ClientListToolbar, ClientMoreMenu } from '../../components/_dashboard/client';

// import { numberValidation } from '../../utils/validate';
import { CheckUserAuth } from '../../utils/auth';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'numero', label: 'Numéro Client', alignRight: false },
  { id: 'name', label: 'Nom', alignRight: false },
  { id: 'impot', label: 'Numero Impot', alignRight: false },
  // { id: 'idnat', label: 'Id. Nationale', alignRight: false },
  // { id: 'activity', label: 'Activite', alignRight: false },
  { id: 'address', label: 'Adresse', alignRight: false },
  { id: 'phone', label: 'Téléphone', alignRight: false },
  { id: 'email', label: 'email', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 700,
    height: 700,
    overflowY: 'scroll'
  }
}));

export default function User() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('numero');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [clientTab, setClientTab] = useState([]);
  const [clientnumero, setClientNumero] = useState('');
  const [clientname, setClientName] = useState('');
  const [clientimpot, setClientImpot] = useState('');
  // const [clientidnat, setClientIdNat] = useState('');
  // const [clientactivity, setClientActivity] = useState('');
  const [clientaddress, setClientAddress] = useState('');
  const [clientphone, setClientPhone] = useState('');
  const [clientemail, setClientEmail] = useState('');

  const [dataChange, setDataChange] = useState(false);

  // Modal
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}/client/`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    })
      .then((value) => {
        setClientTab(value.data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}/client/`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    })
      .then((value) => {
        setClientTab(value.data);
      })
      .catch(() => {});
  }, [dataChange]);

  const isDataChange = (value) => {
    if (dataChange) {
      setDataChange(false);
    } else {
      setDataChange(true);
    }
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  // React-Toastify-Notification
  const showSuccessToast = () => {
    toast.success('Le Client a été enregistré avec succès', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000
    });
  };

  const addClient = (
    clientnumero,
    clientname,
    clientimpot,
    // clientidnat,
    // clientactivity,
    clientaddress,
    clientphone,
    clientemail
  ) => {
    if (clientname !== '' && clientname !== null && clientnumero !== '' && clientnumero !== null) {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/client/`,
          {
            numero: clientnumero,
            name: clientname,
            impot: clientimpot,
            // idnat: clientidnat,
            // activity: clientactivity,
            address: clientaddress,
            phone: clientphone,
            email: clientemail
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
            }
          }
        )
        .then(() => {
          isDataChange();
          handleClose();

          setClientNumero('');
          setClientName('');
          setClientImpot('');
          // setClientIdNat('');
          // setClientActivity('');
          setClientAddress('');
          setClientPhone('');
          setClientEmail('');
          showSuccessToast();
        })
        .catch(() => {
          setClientNumero('');
          setClientName('');
          setClientImpot('');
          // setClientIdNat('');
          // setClientActivity('');
          setClientAddress('');
          setClientPhone('');
          setClientEmail('');
        });
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = clientTab.map((n) => n.numero);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - clientTab.length) : 0;

  const filteredClients = applySortFilter(clientTab, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredClients.length === 0;

  return (
    <Page title="Client | LMC App">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Clients
          </Typography>
          <Button
            variant="contained"
            startIcon={<Icon icon={plusFill} />}
            onClick={() => handleOpen()}
          >
            Nouveau Client
          </Button>
        </Stack>

        <ToastContainer />
        <CheckUserAuth />

        {openModal ? (
          <Modal
            aria-describedby="simple-modal-description"
            className={classes.modal}
            open={openModal}
            onClose={handleClose}
          >
            <div className={classes.paper}>
              <h2 align="center" id="simple-modal-title">
                Ajouter un Client
              </h2>
              <TextField
                label="Saisissez le numero du client"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientnumero}
                onChange={(e) => setClientNumero(e.target.value)}
              />
              <TextField
                label="Saisissez le nom du client"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientname}
                onChange={(e) => setClientName(e.target.value)}
              />
              <TextField
                label="Saisissez le numero Impot"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientimpot}
                onChange={(e) => setClientImpot(e.target.value)}
              />
              {/* <TextField
                label="Saisissez le numero Id. Nat."
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientidnat}
                onChange={(e) => setClientIdNat(e.target.value)}
              />
              <TextField
                label="Saisissez l'activite du client"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientactivity}
                onChange={(e) => setClientActivity(e.target.value)}
              /> */}
              <TextField
                label="Saisissez l'adresse du client"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientaddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
              <TextField
                label="Saisissez le numero telephone"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientphone}
                onChange={(e) => setClientPhone(e.target.value)}
              />
              <TextField
                label="Saisissez l'E-mail du Client"
                variant="outlined"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={clientemail}
                onChange={(e) => setClientEmail(e.target.value)}
              />
              {/* <TextField
                label="Saisissez l'E-mail du Client"
                variant="outlined"
                inputProps={{ type: 'number' }}
                style={{ marginTop: 20, marginBottom: 20 }}
                value={extraFac}
                onChange={(e) => {setExtraFac(e.target.value);
                }}
              /> */}
              {/* <TextField
                label="Saisissez la commission du chargeur"
                variant="outlined"
                type="number"
                style={{ marginTop: 20, marginBottom: 20 }}
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              /> */}
              <Button
                onClick={() =>
                  addClient(
                    clientnumero,
                    clientname,
                    clientimpot,
                    clientaddress,
                    clientphone,
                    clientemail
                  )
                }
                variant="contained"
                startIcon={<Icon icon={plusFill} />}
              >
                Ajouter
              </Button>
            </div>
          </Modal>
        ) : null}

        <Card>
          <ClientListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={clientTab.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredClients
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      console.log('Row : ', row);
                      const { id, numero, name, impot, address, phone, email } = row;
                      // const extraFacture = row.extra_fac;
                      const isItemSelected = selected.indexOf(numero) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, numero)}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {numero}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {name}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {impot}
                              </Typography>
                            </Stack>
                          </TableCell>
                          {/* <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {idnat}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {activity}
                              </Typography>
                            </Stack>
                          </TableCell> */}
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {address}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" justifyContent="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {phone}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" justifyContent="center" spacing={2}>
                              <Typography variant="subtitle2" noWrap>
                                {email}
                              </Typography>
                            </Stack>
                          </TableCell>

                          <TableCell align="right">
                            <ClientMoreMenu
                              idClient={id}
                              numeroClient={numero}
                              nameClient={name}
                              impotClient={impot}
                              addressClient={address}
                              phoneClient={phone}
                              emailClient={email}
                              sendInformation={(value) => isDataChange(value)}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={clientTab.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}

import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  useTheme,
  FilledInput,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Snackbar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "../styles/payment.scss";
import React from "react";
import "../utils/requestUrl";
import { payRequest } from "../utils/requestUrl";
import { useSnackbar } from "notistack";
import Link from "@mui/material/Link";

const PaymentOnline = (Props: { history: string[] }) => {
  const theme = useTheme();

  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState<number>(0);
  const [societe, setSociete] = React.useState("");
  const [client, setClient] = React.useState("");
  const [facture, setFacture] = React.useState("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");
  const [termsCondition, setTermsCondition] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const payAmount = (event: any) => {
    event.preventDefault();
    const params = {
      amount: 0,
      email: "",
      facture: "",
      societe: "",
      client: "",
      termsCondition: false,
    };

    if (facture != null && facture != "") {
      params["facture"] = facture;
    } else {
      enqueueSnackbar("Numéro de facture est obligatoire.", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return;
    }

    if (client != null && client != "") {
      params["client"] = client;
    } else {
      enqueueSnackbar("Le code client est obligatoire.", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return;
    }

    if (societe != null && societe != "") {
      params["societe"] = societe;
    } else {
      enqueueSnackbar("La société est obligatoire.", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return;
    }

    if (email != null && email != "") {
      params["email"] = email;
    } else {
      enqueueSnackbar("L'email est obligatoire.", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return;
    }
    if (amount > 0) {
      params["amount"] = amount;
    } else {
      enqueueSnackbar("Le montant est obligatoire.", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return;
    }

    if (!termsCondition) {
      enqueueSnackbar("Veuillez accepter les conditions", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return;
    }

    payRequest(
      params,
      function (result: any) {
        console.log(result);
        if (result.data.code == 200) {
          // Props.history.push("/pay.html?kform="+result.data.data.answer.formToken);
          window.location.href =
            "https://ifenetres.fr/pay.html?kform=" +
            result.data.data.answer.formToken;
        }
      },
      function (error: any) {
        console.log(error);
      }
    );
  };

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleTermsConditionChange = (event: any) => {
    setTermsCondition(event.target.checked);
  };

  return (
    <div>
      <Box py={3} textAlign="center">
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Payer en Ligne
        </Typography>
        <div>
          <form onSubmit={payAmount}>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-societe">Société</InputLabel>
                <Input
                  id="my-societe"
                  name="societe"
                  value={societe}
                  onChange={(e) => {
                    setSociete(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-email">Email</InputLabel>
                <Input
                  id="my-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-client">Code Client</InputLabel>
                <Input
                  id="my-client"
                  name="client"
                  value={client}
                  onChange={(e) => {
                    setClient(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-facture">
                  Numéro de Facture (devis ou commande)
                </InputLabel>
                <Input
                  id="my-facture"
                  name="facture"
                  value={facture}
                  onChange={(e) => {
                    setFacture(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-amount">Montant à payer</InputLabel>
                <Input
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => {
                    if (parseInt(e.target.value)) {
                      setAmount(parseInt(e.target.value));
                    } else {
                      setAmount(0);
                    }
                  }}
                />
              </FormControl>
            </div>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <FormControlLabel
                  control={<Checkbox onChange={handleTermsConditionChange} />}
                  label={
                    <Link href="/terms-condition" underline="always">
                      {
                        "J'accepte le traitement des données ci-dessus afin de recevoir des réponses. *"
                      }
                    </Link>
                  }
                />
              </FormControl>
            </div>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="J'accepte de recevoir la newsletter contenant des informations commerciales de IFENETRES"
                />
              </FormControl>
            </div>
            <div className="form-item">
              *Le traitement de vos données a lieu conformément à la politique
              de confidentialité. Nous n'envoyons pas de spam.
            </div>
            <div className="form-item">
              <FormControl fullWidth={true}>
                <Button
                  variant="contained"
                  color="success"
                  className="submit-button"
                  type="submit"
                >
                  Envoyer
                </Button>
              </FormControl>
            </div>
          </form>
        </div>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
};
export default PaymentOnline;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import PageviewIcon from "@mui/icons-material/Pageview";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DownloadIcon from "@mui/icons-material/Download";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CableIcon from "@mui/icons-material/Cable";

const eventsData = [
  { name: 'Page views', icon: <PageviewIcon sx={{ fontSize: 20 }} />, status: 'Active', source: 'CAPI' },
  { name: 'Sign ups', icon: <PersonAddIcon sx={{ fontSize: 20 }} />, status: 'Active', source: 'CAPI' },
  { name: 'Leads', icon: <ContactPageIcon sx={{ fontSize: 20 }} />, status: 'Active', source: 'CAPI' },
  { name: 'Downloads', icon: <DownloadIcon sx={{ fontSize: 20 }} />, status: 'Active', source: 'CAPI' },
  { name: 'Purchases', icon: <ShoppingCartIcon sx={{ fontSize: 20 }} />, status: 'Active', source: 'CAPI' },
  { name: 'App installs', icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />, status: 'Active', source: 'CAPI' },
  { name: 'Subscriptions', icon: <SubscriptionsIcon sx={{ fontSize: 20 }} />, status: 'Active', source: 'CAPI' },
];

const trackingOptions = [
  {
    icon: <SettingsEthernetIcon sx={{ fontSize: 120, color: "primary.main" }} />,
    title: "Conversions API (CAPI)",
    description: "Use CAPI to send event data from your server to Ads Manager directly, so tracking is seamless across web and offline events.",
    buttonLabel: "Set up CAPI",
    connectionType: "CAPI",
  },
  {
    icon: <CableIcon sx={{ fontSize: 120, color: "primary.main" }} />,
    title: "JavaScript pixel",
    description: "Follow the prompts to add short snippets of code to your website that report events to Roku in real time.",
    buttonLabel: "Set up event tracking",
    connectionType: "JavaScript pixel",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 120, color: "primary.main" }} />,
    title: "Partner connection",
    description: "Already using a partner, like a commerce platform or MMP? Connect your account to share events with Roku automatically.",
    buttonLabel: "Connect with a partner",
    connectionType: "Partner",
  },
];

export default function EventsSetup() {
  const [capiDrawerOpen, setCapiDrawerOpen] = useState(false);
  const [apiKey, setApiKey] = useState(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [eventsConfigured, setEventsConfigured] = useState(false);
  const [eventMenuAnchor, setEventMenuAnchor] = useState(null);
  const [selectedEventName, setSelectedEventName] = useState(null);
  const [eventGroupId] = useState(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 24; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  });

  const generateApiKey = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 60; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setApiKey(key);
  };

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setToastMessage('Conversions API copied to clipboard');
    setToastOpen(true);
  };

  const handleCopyEventGroupId = () => {
    navigator.clipboard.writeText(eventGroupId);
    setToastMessage('Event group ID copied to clipboard');
    setToastOpen(true);
  };

  const handleDone = () => {
    setCapiDrawerOpen(false);
    setEventsConfigured(true);
  };

  return (
    <Box sx={{ maxWidth: eventsConfigured ? '100%' : 1100, mx: "auto", mt: 5, px: 3 }}>
      {eventsConfigured ? (
        <>
          <Typography variant="h1" sx={{ mb: 3 }}>Events</Typography>
          <TableContainer component={Paper} sx={{ width: "100%", borderRadius: "0px", boxShadow: "none" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Event</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Connection</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', width: '60px' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eventsData.map((event) => (
                  <TableRow key={event.name} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {event.icon}
                        <Typography variant="body2">{event.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Box sx={{ color: '#3e7d32', display: 'flex', '& svg': { width: '16px', height: '16px' } }}>
                          <CheckCircleOutlineIcon />
                        </Box>
                        <Typography variant="body2" sx={{ color: '#3e7d32', whiteSpace: 'nowrap' }}>
                          {event.status}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={event.source} size="small" color="info" sx={{ borderRadius: '6px' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ width: '60px' }}>
                      <IconButton
                        size="small"
                        color="default"
                        onClick={(e) => {
                          setEventMenuAnchor(e.currentTarget);
                          setSelectedEventName(event.name);
                        }}
                      >
                        <MoreHorizIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Menu
            anchorEl={eventMenuAnchor}
            open={Boolean(eventMenuAnchor)}
            onClose={() => setEventMenuAnchor(null)}
          >
            <MenuItem onClick={() => setEventMenuAnchor(null)}>Archive</MenuItem>
          </Menu>

          {/* Show remaining connection options below the table */}
          {(() => {
            const activeConnectionTypes = [...new Set(eventsData.map(e => e.source))];
            const remainingOptions = trackingOptions.filter(o => !activeConnectionTypes.includes(o.connectionType));
            if (remainingOptions.length === 0) return null;
            return (
              <Box sx={{ mt: 5, maxWidth: 1100 }}>
                <Typography variant="h1" sx={{ mb: 0.5 }}>Choose how you want to track campaign results</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, maxWidth: 800 }}>
                  To measure and improve campaign performance, Ads Manager uses the events you send us to drive and measure your campaign goals. Choose how you want to send events to Roku.
                </Typography>
                <Box sx={{ display: "flex", gap: 3 }}>
                  {remainingOptions.map((option) => (
                    <Card
                      key={option.title}
                      variant="outlined"
                      sx={{ flex: 1, display: "flex", flexDirection: "column", borderRadius: 2, borderColor: "#e0e0e0", boxShadow: "none", p: 1 }}
                    >
                      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box sx={{ mb: 2, mt: 1, display: "flex", justifyContent: "center", width: "100%", minHeight: 100, alignItems: "center" }}>
                          {option.icon}
                        </Box>
                        <Typography variant="h3" sx={{ mb: 1 }}>{option.title}</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, flexGrow: 1, textAlign: "center" }}>{option.description}</Typography>
                        <Button variant="contained" color="primary" size="small">{option.buttonLabel}</Button>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            );
          })()}
        </>
      ) : (
        <>
      <Typography variant="h1" sx={{ mb: 0.5 }}>
        Choose how you want to track campaign results
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, maxWidth: 800 }}>
        To measure and improve campaign performance, Ads Manager uses the events you send us to drive and measure your campaign goals. Choose how you want to send events to Roku.
      </Typography>

      <Box sx={{ display: "flex", gap: 3 }}>
        {trackingOptions.map((option) => (
          <Card
            key={option.title}
            variant="outlined"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              borderColor: "#e0e0e0",
              boxShadow: "none",
              p: 1,
            }}
          >
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ mb: 2, mt: 1, display: "flex", justifyContent: "center", width: "100%", minHeight: 100, alignItems: "center" }}>
                {option.icon}
              </Box>
              <Typography variant="h3" sx={{ mb: 1 }}>
                {option.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, flexGrow: 1, textAlign: "center" }}>
                {option.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  if (option.buttonLabel === "Set up CAPI") {
                    setCapiDrawerOpen(true);
                  }
                }}
              >
                {option.buttonLabel}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      </>
      )}

      <Drawer
        anchor="right"
        open={capiDrawerOpen}
        onClose={() => setCapiDrawerOpen(false)}
        PaperProps={{ sx: { width: 850, display: 'flex', flexDirection: 'column' } }}
      >
        <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <Typography variant="h1">Set up Conversions API (CAPI)</Typography>
            <IconButton onClick={() => setCapiDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Use CAPI to send event data from your server to Ads Manager directly, so tracking is seamless across web and offline events. Setup requires API support. <Link href="#" underline="hover">Get more details about setting up CAPI</Link>.
          </Typography>

          {/* Step 1 */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>Step 1: Generate an API key</Typography>
            {apiKey ? (
              <Box
                onClick={handleCopyApiKey}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#2260BC",
                  color: "#fff",
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                  cursor: "pointer",
                  "&:hover": { opacity: 0.9 },
                  wordBreak: "break-all",
                  width: "100%",
                  height: 84,
                }}
              >
                <ContentCopyIcon sx={{ fontSize: 18, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: "#fff", fontFamily: "monospace" }}>{apiKey}</Typography>
              </Box>
            ) : (
              <Button variant="outlined" size="small" onClick={generateApiKey}>Generate new API key</Button>
            )}
          </Box>

          {/* Step 2 */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h2" sx={{ mb: 1 }}>Step 2: Copy event group ID to your clipboard</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              If you're setting up the CAPI yourself, copy this ID to your clipboard and go to Step 3. If a developer is installing it for you, copy the ID and send it to the developer.
            </Typography>
            <Box
              onClick={handleCopyEventGroupId}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#2260BC",
                color: "#fff",
                borderRadius: 1,
                px: 2,
                py: 1,
                cursor: "pointer",
                "&:hover": { opacity: 0.9 },
                wordBreak: "break-all",
                width: "100%",
                height: 84,
                mt: 2,
              }}
            >
              <ContentCopyIcon sx={{ fontSize: 18, flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: "#fff", fontFamily: "monospace" }}>{eventGroupId}</Typography>
            </Box>
          </Box>

          {/* Step 3 */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h2" sx={{ mb: 1 }}>Step 3: Set up your connection</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Use the API token and the event group ID to set up your CAPI connection. <Link href="#" underline="hover">Get more details about setting up CAPI</Link>.
            </Typography>
          </Box>
        </Box>

        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, p: 2 }}>
          <Button variant="outlined" onClick={() => setCapiDrawerOpen(false)}>Close</Button>
          <Button variant="contained" color="primary" onClick={handleDone}>Done</Button>
        </Box>
      </Drawer>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
        sx={{
          '& .MuiSnackbarContent-root': {
            width: 335,
            minWidth: 335,
            maxWidth: 335,
            height: 84,
            minHeight: 84,
            backgroundColor: '#2e7d32',
            color: '#fff',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
          },
        }}
        message={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <CheckCircleIcon sx={{ fontSize: 24, color: '#fff' }} />
            <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>{toastMessage}</Typography>
          </Box>
        }
        action={
          <IconButton size="small" color="inherit" onClick={() => setToastOpen(false)}>
            <CloseIcon sx={{ fontSize: 18 }} />
          </IconButton>
        }
      />
    </Box>
  );
}

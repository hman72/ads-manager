import React from 'react';
import {
  Box,
  Typography,
  Button,
  Switch,
  Tooltip,
  TextField,
  InputAdornment,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DeliveryCard({
  autoBid,
  setAutoBid,
  maxBid,
  setMaxBid,
  showAdvancedSettings,
  setShowAdvancedSettings,
}) {
  return (
    <Box
      sx={{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3,
      }}
    >
      <Typography variant="h2">Delivery</Typography>

      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
        Campaigns are billed on delivered impressions
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', width: '150px' }}>
          <Typography variant="body1" color="text.secondary">
            Auto bid
          </Typography>
          <Tooltip
            title={
              <Box>
                <Typography variant="body2" gutterBottom>
                  Allows the system to optimize your bid based on your advertising objective
                </Typography>
              </Box>
            }
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  color: 'text.primary',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  maxWidth: 300,
                },
              },
              arrow: {
                sx: {
                  color: 'white',
                  '&::before': {
                    border: '1px solid #ccc',
                  },
                },
              },
            }}
          >
            <HelpOutlineIcon fontSize="small" color="action" />
          </Tooltip>
        </Box>
        <Switch size="small" checked={autoBid} onChange={(e) => setAutoBid(e.target.checked)} />
      </Box>

      {!autoBid && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', width: '150px' }}>
            <Typography variant="body1" color="text.secondary">
              Max bid
            </Typography>
            <Tooltip
              title={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Maximum bid (optional)
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Set the maximum amount you're willing to pay per thousand impressions (CPM).
                    Leave blank to use system recommendations.
                  </Typography>
                </Box>
              }
              arrow
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    color: 'text.primary',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    maxWidth: 300,
                  },
                },
                arrow: {
                  sx: {
                    color: 'white',
                    '&::before': {
                      border: '1px solid #ccc',
                    },
                  },
                },
              }}
            >
              <HelpOutlineIcon fontSize="small" color="action" />
            </Tooltip>
          </Box>
          <TextField
            value={maxBid}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setMaxBid(value);
              }
            }}
            variant="outlined"
            size="small"
            sx={{ width: '240px' }}
            placeholder="0.00"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              endAdornment: <InputAdornment position="end">USD</InputAdornment>,
            }}
          />
        </Box>
      )}

      <Box sx={{ mt: 2 }}>
        <Button
          variant="text"
          size="small"
          onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
          sx={{
            textTransform: 'none',
            color: 'primary.main',
            p: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontWeight: 'normal',
          }}
          endIcon={
            showAdvancedSettings ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )
          }
        >
          Advanced settings
        </Button>
      </Box>

      {showAdvancedSettings && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            mt: 2,
            whiteSpace: 'nowrap',
            overflow: 'auto',
          }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ flexShrink: 0 }}>
            Show my ads to households no more than
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: '120px', flexShrink: 0 }}
            placeholder="Enter value"
          />
          <Typography variant="body1" color="text.secondary" sx={{ flexShrink: 0 }}>
            times per every
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: '120px', flexShrink: 0 }}
            placeholder="Enter value"
          />
          <Typography variant="body1" color="text.secondary" sx={{ flexShrink: 0 }}>
            day(s)
          </Typography>
        </Box>
      )}
    </Box>
  );
}

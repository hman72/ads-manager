import React from 'react';
import {
  Box,
  Typography,
  Button,
  Switch,
  Tooltip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
  selectedProfileOption,
}) {
  const [priority, setPriority] = React.useState('auction');
  const [bidStrategy, setBidStrategy] = React.useState('max_bid');
  const [pacing, setPacing] = React.useState('even');

  const prioritySelect = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
      <Typography variant="body1" color="text.secondary" sx={{ width: '150px', flexShrink: 0 }}>
        Priority
      </Typography>
      <FormControl size="small" sx={{ minWidth: 200 }}>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="auction">Auction</MenuItem>
          <MenuItem value="sponsorship">Sponsorship</MenuItem>
          <MenuItem value="remnant">Remnant</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );

  const pacingSelect = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
      <Typography variant="body1" color="text.secondary" sx={{ width: '150px', flexShrink: 0 }}>
        Pacing
      </Typography>
      <FormControl size="small" sx={{ minWidth: 200 }}>
        <Select
          value={pacing}
          onChange={(e) => setPacing(e.target.value)}
          renderValue={(value) => {
            const labels = { ahead: 'Ahead', asap: 'ASAP', even: 'Even' };
            return labels[value];
          }}
        >
          <MenuItem value="ahead">
            <Box>
              <Typography variant="body2">Ahead</Typography>
              <Typography variant="caption" color="text.secondary">Targets 10% more budget delivery than "even" pacing to protect against under-delivery</Typography>
            </Box>
          </MenuItem>
          <MenuItem value="asap">
            <Box>
              <Typography variant="body2">ASAP</Typography>
              <Typography variant="caption" color="text.secondary">Targets 30% more budget delivery than "even" pacing to protect against under-delivery</Typography>
            </Box>
          </MenuItem>
          <MenuItem value="even">
            <Box>
              <Typography variant="body2">Even</Typography>
              <Typography variant="caption" color="text.secondary">Distributes budget evenly throughout the ad group's schedule</Typography>
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );

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

      {selectedProfileOption === 'Managed Service User' && (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
        <Typography variant="body1" color="text.secondary" sx={{ width: '150px', flexShrink: 0 }}>
          Bid strategy
        </Typography>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <Select
            value={bidStrategy}
            onChange={(e) => setBidStrategy(e.target.value)}
            renderValue={(value) => {
              const labels = { max_bid: 'Max bid', fixed: 'Fixed CPM', target_cpa: 'Target CPA' };
              return labels[value];
            }}
          >
            <MenuItem value="max_bid">
              <Box>
                <Typography variant="body2">Max bid</Typography>
                <Typography variant="caption" color="text.secondary">Bid will not exceed the CPM</Typography>
              </Box>
            </MenuItem>
            <MenuItem value="fixed">
              <Box>
                <Typography variant="body2">Fixed CPM</Typography>
                <Typography variant="caption" color="text.secondary">Bid is always equal to the CPM</Typography>
              </Box>
            </MenuItem>
            <MenuItem value="target_cpa">
              <Box>
                <Typography variant="body2">Target CPA</Typography>
                <Typography variant="caption" color="text.secondary">Bids are optimized toward achieving your CPA</Typography>
              </Box>
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: '120px' }}
          placeholder="0.00"
          label={bidStrategy === 'target_cpa' ? 'CPA' : 'CPM'}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Box>
      )}

      {selectedProfileOption === 'Managed Service User' && pacing !== 'even' && pacingSelect}

      {selectedProfileOption === 'Managed Service User' && priority !== 'auction' && prioritySelect}

      {selectedProfileOption === 'Self Service User' && (
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
      )}

      {selectedProfileOption === 'Self Service User' && !autoBid && (
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
        <>
        {selectedProfileOption === 'Managed Service User' && pacing === 'even' && pacingSelect}

        {selectedProfileOption === 'Managed Service User' && priority === 'auction' && prioritySelect}

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
        </>
      )}
    </Box>
  );
}

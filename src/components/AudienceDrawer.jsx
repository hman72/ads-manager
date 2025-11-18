import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Checkbox,
  Link,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function AudienceDrawer({
  open,
  onClose,
  audienceSelection,
  setAudienceSelection,
  selectedAgeRanges,
  setSelectedAgeRanges,
  selectedIncomeRanges,
  setSelectedIncomeRanges
}) {
  const [advancedDemographics, setAdvancedDemographics] = useState('All');
  const [customAudience, setCustomAudience] = useState('Select');

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '95%',
          maxWidth: '95vw'
        }
      }}
    >
      <Box sx={{ p: 3, height: '100%', overflow: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Audience
          </Typography>
          <IconButton 
            onClick={onClose}
            sx={{ color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Your campaign will be optimized toward your objective whether you build an audience or not. Building an audience may reduce scale but will ensure your ads are delivered and optimized only within your selected audience group.{' '}
            <Link href="#" underline="hover" color="primary">
              Learn more about audience targeting
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Build an audience
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Choose to include or exclude a specific audience based on selected criteria.
          </Typography>
          <Select
            value={audienceSelection}
            onChange={(e) => setAudienceSelection(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: '100%', fontSize: '0.875rem' }}
            renderValue={(value) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {value === 'include' ? (
                  <CheckCircleOutlineIcon sx={{ color: '#4caf50', fontSize: '20px' }} />
                ) : (
                  <RemoveCircleOutlineIcon sx={{ color: '#f44336', fontSize: '20px' }} />
                )}
                <span>{value === 'include' ? 'Include' : 'Exclude'}</span>
              </Box>
            )}
          >
            <MenuItem value="include" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineIcon sx={{ color: '#4caf50', fontSize: '20px' }} />
              <span>Include</span>
            </MenuItem>
            <MenuItem value="exclude" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <RemoveCircleOutlineIcon sx={{ color: '#f44336', fontSize: '20px' }} />
              <span>Exclude</span>
            </MenuItem>
          </Select>
        </Box>

        <Box sx={{ border: '1px solid #ccc', borderRadius: '6px', p: 2, mb: 3 }}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              defaultValue="all"
              sx={{ fontSize: '0.875rem' }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
            </Select>
          </FormControl>
          
          <Typography variant="caption" color="text.secondary" sx={{ mt: 3, display: 'block' }}>
            Age
          </Typography>
          
          <FormGroup row sx={{ gap: 3 }}>
            {['18-24', '25-34', '35-44', '45-54', '55+'].map((ageRange) => (
              <Box key={ageRange} sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <Checkbox
                  checked={selectedAgeRanges[ageRange]}
                  onChange={(e) => setSelectedAgeRanges(prev => ({
                    ...prev,
                    [ageRange]: e.target.checked
                  }))}
                  size="small"
                />
                <Typography variant="body2">{ageRange}</Typography>
              </Box>
            ))}
          </FormGroup>

          <Typography variant="caption" color="text.secondary" sx={{ mt: 3, display: 'block' }}>
            Income
          </Typography>

          <FormGroup row sx={{ gap: 3 }}>
            {['Under $50k', '$50-$100k', '$100-$150k', '$150-$200k', '$200k+'].map((incomeRange) => (
              <Box key={incomeRange} sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <Checkbox
                  checked={selectedIncomeRanges[incomeRange]}
                  onChange={(e) => setSelectedIncomeRanges(prev => ({
                    ...prev,
                    [incomeRange]: e.target.checked
                  }))}
                  size="small"
                />
                <Typography variant="body2">{incomeRange}</Typography>
              </Box>
            ))}
          </FormGroup>

          <FormControl variant="outlined" size="small" fullWidth sx={{ mt: 3 }}>
            <InputLabel>Advanced demographics</InputLabel>
            <Select
              label="Advanced demographics"
              value={advancedDemographics}
              onChange={(e) => setAdvancedDemographics(e.target.value)}
              sx={{ fontSize: '0.875rem' }}
            >
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mt: 3 }}>
            <FormControl variant="outlined" size="small" sx={{ flex: 1 }}>
              <InputLabel>Custom audience</InputLabel>
              <Select
                label="Custom audience"
                value={customAudience}
                onChange={(e) => setCustomAudience(e.target.value)}
                sx={{ fontSize: '0.875rem' }}
              >
                <MenuItem value="Select">Select</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ mt: 0.5 }}
            >
              Create new
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #e0e0e0',
        p: 2,
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        width: '95%',
        maxWidth: '95vw'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button 
            variant="outlined"
            onClick={onClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

import React, { useRef } from 'react';
import { Box, TextField, Typography } from '@mui/material';

/**
 * DateRangeField - A reusable date range picker component
 * 
 * @param {string} startDate - Initial start date value (YYYY-MM-DD format)
 * @param {string} endDate - Initial end date value (YYYY-MM-DD format)
 * @param {function} onStartDateChange - Callback when start date changes
 * @param {function} onEndDateChange - Callback when end date changes
 * @param {string} startLabel - Label for start date field
 * @param {string} endLabel - Label for end date field
 * @param {string} size - Size of the input fields ('small', 'medium')
 * @param {string} width - Width of each date input field
 * @param {boolean} disabled - Whether the fields are disabled
 * @param {object} sx - Additional styling for the container
 * 
 * Example usage:
 * <DateRangeField 
 *   startLabel="Campaign Start"
 *   endLabel="Campaign End"
 *   onStartDateChange={(date) => setCampaignStart(date)}
 *   onEndDateChange={(date) => setCampaignEnd(date)}
 * />
 */

const DateRangeField = ({ 
  startDate = new Date().toISOString().split('T')[0],
  endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  onStartDateChange,
  onEndDateChange,
  startLabel = "Start Date",
  endLabel = "End Date",
  size = "small",
  width = "160px",
  disabled = false,
  sx = {}
}) => {
  const endDateRef = useRef(null);

  const handleStartDateChange = (e) => {
    if (onStartDateChange) {
      onStartDateChange(e.target.value);
    }
    
    // Auto-focus end date field after selecting start date
    setTimeout(() => {
      if (endDateRef.current) {
        endDateRef.current.focus();
      }
    }, 100);
  };

  const handleEndDateChange = (e) => {
    if (onEndDateChange) {
      onEndDateChange(e.target.value);
    }
  };

  // Get user's timezone
  const getUserTimezone = () => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
      return 'UTC';
    }
  };

  const timezone = getUserTimezone();

  return (
    <Box>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          ...sx 
        }}
      >
        <TextField
          type="date"
          label={startLabel}
          variant="outlined"
          size={size}
          value={startDate}
          disabled={disabled}
          InputLabelProps={{
            shrink: true,
          }}
          onFocus={(e) => e.target.showPicker && e.target.showPicker()}
          onChange={handleStartDateChange}
          sx={{ width }}
        />
        <Typography variant="body1" color="text.secondary">
          to
        </Typography>
        <TextField
          type="date"
          label={endLabel}
          variant="outlined"
          size={size}
          value={endDate}
          disabled={disabled}
          inputRef={endDateRef}
          InputLabelProps={{
            shrink: true,
          }}
          onFocus={(e) => e.target.showPicker && e.target.showPicker()}
          onClick={(e) => e.target.showPicker && e.target.showPicker()}
          onChange={handleEndDateChange}
          sx={{ width }}
        />
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
        Timezone: {timezone}
      </Typography>
    </Box>
  );
};

export default DateRangeField;
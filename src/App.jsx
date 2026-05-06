import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RokuChannelPlacement from "./images/roku_channel_placement.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DateRangeField from "./components/DateRangeField";
import PlacementCard from "./components/PlacementCard";
import DeliveryCard from "./components/DeliveryCard";
import AudienceDrawer from "./components/AudienceDrawer";
import LandingPage from "./components/LandingPage";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import ArchiveIcon from "@mui/icons-material/Archive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ImageIcon from "@mui/icons-material/Image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TableChartIcon from "@mui/icons-material/TableChart";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import Collapse from "@mui/material/Collapse";
import BlockIcon from "@mui/icons-material/Block";
import DraftsIcon from "@mui/icons-material/Drafts";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Chip from "@mui/material/Chip";
import Popover from "@mui/material/Popover";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import InputAdornment from "@mui/material/InputAdornment";
import Drawer from "@mui/material/Drawer";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MotionPhotosOffIcon from "@mui/icons-material/MotionPhotosOff";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CancelIcon from "@mui/icons-material/Cancel";
import TuneIcon from "@mui/icons-material/Tune";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import WarningIcon from "@mui/icons-material/Warning";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PageviewIcon from "@mui/icons-material/Pageview";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeadsIcon from "@mui/icons-material/ContactPage";
import DownloadIcon from "@mui/icons-material/Download";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "./images/Logo.svg";
import Conversion from "./images/Conversion.png";
import Awareness from "./images/Awareness.png";
import AdGroup from "./images/ad-groups.png";
import DisneyTile from "./images/Channels/Disney.png";
import RokuTile from "./images/Channels/roku_chan.png";
import HBOTile from "./images/Channels/hbo.png";
import ESPNTile from "./images/Channels/espn.png";
import HuluTile from "./images/Channels/hulu.png";
import PeacockTile from "./images/Channels/peacock.png";
import TubiTile from "./images/Channels/tubi.png";
import Paramount from "./images/Channels/paramount.png";
import Billboard from "./images/Creatives/Billboard.png";
import CreativeBillboard from "./images/Creatives/Creative-Billboard.png";
import Marquee from "./images/Creatives/Marquee.png";
import CreativeMarquee from "./images/Creatives/Creative-Marquee.png";
import CreativeIncontent from "./images/Creatives/Creative-InContent-Video.png";
import IncontentVideo from "./images/Creatives/In-content_video.mp4";
import ActionAdventure from "./images/genre/action adventure illo.png";
import Comedy from "./images/genre/Comedy2.png";
import Drama from "./images/genre/Drama.png";
import Education from "./images/genre/AdsManager_Education 1.png";
import Holiday from "./images/genre/Holiday- Ads Manager 1.png";
import Lifestyle from "./images/genre/AdsManager_Lifestyle 1.png";
import Music from "./images/genre/AdsManager_Music 1.png";
import News from "./images/genre/AdsManager_News 1.png";
import RealityPopculture from "./images/genre/realityPopculture_illo.png";
import Romance from "./images/genre/Romance_illo.png";
import SciFi from "./images/genre/AdsManager_SciFi 1.png";
import Sports from "./images/genre/AdsManager_Sports 1.png";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Title,
  ChartTooltip,
  Legend
);

// Register custom plugin for pie chart labels
const pieChartLabelsPlugin = {
  id: 'pieChartLabels',
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    const meta = chart.getDatasetMeta(0);
    
    if (!meta || !meta.data || chart.config.type !== 'pie') return;
    
    ctx.save();
    ctx.font = 'bold 18px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    meta.data.forEach((arc, index) => {
      const value = data.datasets[0].data[index];
      const startAngle = arc.startAngle;
      const endAngle = arc.endAngle;
      const midAngle = startAngle + (endAngle - startAngle) / 2;
      
      const radius = (arc.outerRadius + arc.innerRadius) / 2;
      const x = arc.x + Math.cos(midAngle) * radius * 0.7;
      const y = arc.y + Math.sin(midAngle) * radius * 0.7;
      
      ctx.fillText(value + '%', x, y);
    });
    
    ctx.restore();
  }
};

ChartJS.register(pieChartLabelsPlugin);

// Helper function to get the correct image path for both dev and production
const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const RokuLogo = () => (
  <Box
    component="img"
    src={Logo}
    alt="Roku"
    sx={{ height: 16, mr: "8px" }}
  />
);

const StatusComponent = ({ status, tooltip }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'Active':
        return { icon: <CheckCircleOutlineIcon />, color: '#3e7d32' };
      case 'Archived':
        return { icon: <ArchiveIcon />, color: '#4caf50' };
      case 'Creative in review':
        return { icon: <ImageSearchIcon />, color: 'infoMain' };
      case 'Creative rejected':
        return { icon: <WarningIcon />, color: '#f44336' };
      case 'Creative error':
        return { icon: <WarningIcon />, color: '#f44336' };
      case 'Creative processing':
        return { icon: <ImageSearchIcon />, color: '#ff9800' };
      case 'Deactivated':
        return { icon: <MotionPhotosOffIcon />, color: '#f44336' };
      case 'Draft':
        return { icon: <CircleOutlinedIcon />, color: 'infoMain' };
      case 'Ended':
        return { icon: <StopCircleIcon />, color: '#424242' };
      case 'Not delivering':
        return { icon: <StopCircleIcon />, color: '#424242' };
      case 'Paused':
        return { icon: <PauseIcon />, color: '#ff9800' };
      case 'Scheduled':
        return { icon: <ScheduleIcon />, color: 'infoMain' };
      default:
        return { icon: <PlayArrowIcon />, color: '#757575' };
    }
  };

  const { icon, color } = getStatusConfig(status);

  const content = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <Box sx={{ 
        color, 
        display: 'flex', 
        '& svg': {
          width: '16px',
          height: '16px'
        }
      }}>
        {icon}
      </Box>
      <Typography variant="body2" sx={{ color, whiteSpace: 'nowrap' }}>
        {status}
      </Typography>
    </Box>
  );

  if (tooltip) {
    return <Tooltip title={tooltip} arrow>{content}</Tooltip>;
  }
  return content;
};

// Tile Component
const TileComponent = ({ image, title, description, onClick, selected = false }) => {
  return (
    <Card 
      sx={{ 
        width: '280px', 
        height: '275px', 
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: 0,
        boxShadow: 'none',
        border: selected ? '1px solid #20004C' : '1px solid #ccc',
        backgroundColor: selected ? '#EDE7F6' : 'white',
        '&:hover': onClick ? {
          // Add hover effect here if needed
        } : {}
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: '100%',
          height: '157px', // 16:9 aspect ratio for 280px width
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#f5f5f5' // Fallback color if image doesn't load
        }}
      />
      <CardContent sx={{ p: 2, height: '118px', display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 1,
            fontSize: '1.125rem',
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 'normal',
            color: 'text.secondary',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            flex: 1
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Ad Group Overview Tile Component for Reports
const AdGroupOverviewTile = ({ adGroup, campaign, creatives = [], destinations = [] }) => {
  const [entryPointSearch, setEntryPointSearch] = React.useState('');
  const [columnMenuAnchor, setColumnMenuAnchor] = React.useState(null);
  const [visibleColumns, setVisibleColumns] = React.useState({
    impressions: true,
    clicks: true,
    goalActions: true,
    reach: true,
    cpa: true,
    cpm: true
  });
  
  const [contentSearch, setContentSearch] = React.useState('');
  const [selectedTypes, setSelectedTypes] = React.useState([]);
  const [contentColumnMenuAnchor, setContentColumnMenuAnchor] = React.useState(null);
  const [visibleContentColumns, setVisibleContentColumns] = React.useState({
    type: true,
    impressions: true,
    ctr: true,
    vcr: true,
    reach: true,
    frequency: true,
    totalMinutesPerHousehold: true
  });
  
  const [sectionMenuAnchor, setSectionMenuAnchor] = React.useState(null);
  const [visibleSections, setVisibleSections] = React.useState({
    metrics: true,
    entryPoints: true,
    content: true
  });
  
  // Get unique types from destinations
  const uniqueTypes = React.useMemo(() => {
    const types = new Set(destinations.map(d => d.type).filter(Boolean));
    return Array.from(types);
  }, [destinations]);
  
  const handleColumnMenuOpen = (event) => {
    setColumnMenuAnchor(event.currentTarget);
  };
  
  const handleColumnMenuClose = () => {
    setColumnMenuAnchor(null);
  };
  
  const handleColumnToggle = (columnKey) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnKey]: !prev[columnKey]
    }));
  };
  
  const handleContentColumnMenuOpen = (event) => {
    setContentColumnMenuAnchor(event.currentTarget);
  };
  
  const handleSectionMenuOpen = (event) => {
    setSectionMenuAnchor(event.currentTarget);
  };
  
  const handleSectionMenuClose = () => {
    setSectionMenuAnchor(null);
  };
  
  const handleSectionToggle = (sectionKey) => {
    setVisibleSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };
  
  const handleContentColumnMenuClose = () => {
    setContentColumnMenuAnchor(null);
  };
  
  const handleContentColumnToggle = (columnKey) => {
    setVisibleContentColumns(prev => ({
      ...prev,
      [columnKey]: !prev[columnKey]
    }));
  };
  
  // Sample metrics for the ad group
  const adGroupMetrics = {
    impressions: adGroup.impressions || '0',
    clicks: adGroup.clicks || '0',
    goalActions: adGroup.goalActions || '0',
    reach: adGroup.reach || '0',
    cpa: adGroup.goalCpa || '$0.00',
    cpm: adGroup.cpm || '$0.00'
  };

  return (
    <Box sx={{ 
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      p: 3,
      backgroundColor: 'white',
      mb: 3,
      borderRadius: 1
    }}>
      {/* Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.25 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          {adGroup.campaign}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Last updated: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Typography>
          <IconButton size="small" onClick={handleSectionMenuOpen}>
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={sectionMenuAnchor}
            open={Boolean(sectionMenuAnchor)}
            onClose={handleSectionMenuClose}
          >
            <MenuItem onClick={() => handleSectionToggle('metrics')}>
              <Checkbox checked={visibleSections.metrics} />
              <ListItemText primary="Metrics" />
            </MenuItem>
            <MenuItem onClick={() => handleSectionToggle('entryPoints')}>
              <Checkbox checked={visibleSections.entryPoints} />
              <ListItemText primary="Entry points" />
            </MenuItem>
            <MenuItem onClick={() => handleSectionToggle('content')}>
              <Checkbox checked={visibleSections.content} />
              <ListItemText primary="Content" />
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleSectionMenuClose}>
              <ListItemText primary="Export..." />
            </MenuItem>
            <MenuItem onClick={handleSectionMenuClose}>
              <ListItemText primary="Remove" />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {campaign?.campaign || 'Unknown Campaign'}
      </Typography>

      {/* Overview Metrics */}
      {visibleSections.metrics && (
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 3,
          mb: 4,
          pb: 3,
          borderBottom: '1px solid #e0e0e0'
        }}>
          <Box>
            <Typography variant="caption" color="text.secondary">Impressions</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{adGroupMetrics.impressions}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Clicks</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{adGroupMetrics.clicks}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Goal Actions</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{adGroupMetrics.goalActions}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Reach</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{adGroupMetrics.reach}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">CPA</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{adGroupMetrics.cpa}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">CPM</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{adGroupMetrics.cpm}</Typography>
          </Box>
        </Box>
      )}

      {/* Creatives Table */}
      {visibleSections.entryPoints && (
        <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          Entry points
        </Typography>
        
        {/* Search Box */}
        <Box sx={{ mb: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            size="small"
            placeholder="Search by name or ID"
            value={entryPointSearch}
            onChange={(e) => setEntryPointSearch(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: entryPointSearch && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => setEntryPointSearch('')}
                    edge="end"
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <IconButton 
            size="small" 
            onClick={handleColumnMenuOpen}
            sx={{ 
              border: '1px solid rgba(0, 0, 0, 0.23)',
              borderRadius: '6px',
              width: 36,
              height: 36
            }}
          >
            <SettingsIcon fontSize="small" sx={{ color: 'primary.main' }} />
          </IconButton>
          <Menu
            anchorEl={columnMenuAnchor}
            open={Boolean(columnMenuAnchor)}
            onClose={handleColumnMenuClose}
          >
            <MenuItem onClick={() => handleColumnToggle('impressions')}>
              <Checkbox checked={visibleColumns.impressions} size="small" />
              <ListItemText primary="Impressions" />
            </MenuItem>
            <MenuItem onClick={() => handleColumnToggle('clicks')}>
              <Checkbox checked={visibleColumns.clicks} size="small" />
              <ListItemText primary="Clicks" />
            </MenuItem>
            <MenuItem onClick={() => handleColumnToggle('goalActions')}>
              <Checkbox checked={visibleColumns.goalActions} size="small" />
              <ListItemText primary="Goal Actions" />
            </MenuItem>
            <MenuItem onClick={() => handleColumnToggle('reach')}>
              <Checkbox checked={visibleColumns.reach} size="small" />
              <ListItemText primary="Reach" />
            </MenuItem>
            <MenuItem onClick={() => handleColumnToggle('cpa')}>
              <Checkbox checked={visibleColumns.cpa} size="small" />
              <ListItemText primary="CPA" />
            </MenuItem>
            <MenuItem onClick={() => handleColumnToggle('cpm')}>
              <Checkbox checked={visibleColumns.cpm} size="small" />
              <ListItemText primary="CPM" />
            </MenuItem>
          </Menu>
        </Box>
        
        <TableContainer component={Paper} sx={{ width: "100%", borderRadius: "0px", boxShadow: "none" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Entry point</TableCell>
                {visibleColumns.impressions && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Impressions</TableCell>}
                {visibleColumns.clicks && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Clicks</TableCell>}
                {visibleColumns.goalActions && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Goal Actions</TableCell>}
                {visibleColumns.reach && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Reach</TableCell>}
                {visibleColumns.cpa && <TableCell align="right" sx={{ fontWeight: 'bold' }}>CPA</TableCell>}
                {visibleColumns.cpm && <TableCell align="right" sx={{ fontWeight: 'bold' }}>CPM</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {creatives.length > 0 ? (
                creatives
                  .filter(creative => {
                    if (!entryPointSearch) return true;
                    const searchLower = entryPointSearch.toLowerCase();
                    return (
                      creative.name?.toLowerCase().includes(searchLower) ||
                      creative.id?.toString().includes(searchLower)
                    );
                  })
                  .map((creative) => (
                  <TableRow key={creative.id} hover>
                    <TableCell>
                      <Box>
                        <Typography variant="body2">{creative.name}</Typography>
                        <Typography variant="caption" color="text.secondary">{creative.id}</Typography>
                      </Box>
                    </TableCell>
                    {visibleColumns.impressions && <TableCell align="right">{creative.impressions || '0'}</TableCell>}
                    {visibleColumns.clicks && <TableCell align="right">{creative.clicks || '0'}</TableCell>}
                    {visibleColumns.goalActions && <TableCell align="right">{creative.goalActions || '0'}</TableCell>}
                    {visibleColumns.reach && <TableCell align="right">{creative.reach || '0'}</TableCell>}
                    {visibleColumns.cpa && <TableCell align="right">{creative.cpa || '$0.00'}</TableCell>}
                    {visibleColumns.cpm && <TableCell align="right">{creative.cpm || '$0.00'}</TableCell>}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={1 + Object.values(visibleColumns).filter(Boolean).length} align="center" sx={{ py: 3, color: 'text.secondary' }}>
                    {entryPointSearch ? 'No creatives found matching your search' : 'No creatives found'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      )}

      {/* Destinations Table */}
      {visibleSections.content && (
        <Box>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          Content
        </Typography>
        
        {/* Search Box */}
        <Box sx={{ mb: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            size="small"
            placeholder="Search by name or ID"
            value={contentSearch}
            onChange={(e) => setContentSearch(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: contentSearch && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => setContentSearch('')}
                    edge="end"
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="type-label" sx={{ fontSize: "14px" }} shrink>Content type</InputLabel>
            <Select
              labelId="type-label"
              value={selectedTypes}
              onChange={(e) => setSelectedTypes(e.target.value)}
              label="Content type"
              variant="outlined"
              multiple
              displayEmpty
              notched
              renderValue={(selected) => selected.length === 0 ? 'All' : selected.join(', ')}
              title={selectedTypes.length === 0 ? 'All types' : selectedTypes.join(', ')}
              sx={{ 
                "& .MuiSelect-select": {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }
              }}
            >
              {uniqueTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  <Checkbox checked={selectedTypes.indexOf(type) > -1} />
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton 
            size="small" 
            onClick={handleContentColumnMenuOpen}
            sx={{ 
              border: '1px solid rgba(0, 0, 0, 0.23)',
              borderRadius: '6px',
              width: 36,
              height: 36
            }}
          >
            <SettingsIcon fontSize="small" sx={{ color: 'primary.main' }} />
          </IconButton>
          <Menu
            anchorEl={contentColumnMenuAnchor}
            open={Boolean(contentColumnMenuAnchor)}
            onClose={handleContentColumnMenuClose}
          >
            <MenuItem onClick={() => handleContentColumnToggle('type')}>
              <Checkbox checked={visibleContentColumns.type} />
              <ListItemText primary="Content type" />
            </MenuItem>
            <MenuItem onClick={() => handleContentColumnToggle('impressions')}>
              <Checkbox checked={visibleContentColumns.impressions} />
              <ListItemText primary="Impressions" />
            </MenuItem>
            <MenuItem onClick={() => handleContentColumnToggle('ctr')}>
              <Checkbox checked={visibleContentColumns.ctr} />
              <ListItemText primary="CTR" />
            </MenuItem>
            <MenuItem onClick={() => handleContentColumnToggle('vcr')}>
              <Checkbox checked={visibleContentColumns.vcr} />
              <ListItemText primary="VCR" />
            </MenuItem>
            <MenuItem onClick={() => handleContentColumnToggle('reach')}>
              <Checkbox checked={visibleContentColumns.reach} />
              <ListItemText primary="Reach" />
            </MenuItem>
            <MenuItem onClick={() => handleContentColumnToggle('frequency')}>
              <Checkbox checked={visibleContentColumns.frequency} />
              <ListItemText primary="Frequency" />
            </MenuItem>
            <MenuItem onClick={() => handleContentColumnToggle('totalMinutesPerHousehold')}>
              <Checkbox checked={visibleContentColumns.totalMinutesPerHousehold} />
              <ListItemText primary="Total mins/HH" />
            </MenuItem>
          </Menu>
        </Box>
        
        <TableContainer component={Paper} sx={{ width: "100%", borderRadius: "0px", boxShadow: "none" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                {visibleContentColumns.type && <TableCell sx={{ fontWeight: 'bold' }}>Content type</TableCell>}
                {visibleContentColumns.impressions && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Impressions</TableCell>}
                {visibleContentColumns.ctr && <TableCell align="right" sx={{ fontWeight: 'bold' }}>CTR</TableCell>}
                {visibleContentColumns.vcr && <TableCell align="right" sx={{ fontWeight: 'bold' }}>VCR</TableCell>}
                {visibleContentColumns.reach && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Reach</TableCell>}
                {visibleContentColumns.frequency && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Frequency</TableCell>}
                {visibleContentColumns.totalMinutesPerHousehold && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Total mins/HH</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {destinations.length > 0 ? (
                destinations
                  .filter((destination) => {
                    // Filter by search
                    if (contentSearch) {
                      const searchLower = contentSearch.toLowerCase();
                      const matchesSearch = (
                        destination.title?.toLowerCase().includes(searchLower) ||
                        destination.type?.toLowerCase().includes(searchLower)
                      );
                      if (!matchesSearch) return false;
                    }
                    
                    // Filter by selected types
                    if (selectedTypes.length > 0) {
                      if (!selectedTypes.includes(destination.type)) return false;
                    }
                    
                    return true;
                  })
                  .map((destination, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{destination.title}</TableCell>
                    {visibleContentColumns.type && <TableCell>{destination.type}</TableCell>}
                    {visibleContentColumns.impressions && <TableCell align="right">{destination.impressions || '0'}</TableCell>}
                    {visibleContentColumns.ctr && <TableCell align="right">{destination.ctr || '0%'}</TableCell>}
                    {visibleContentColumns.vcr && <TableCell align="right">{destination.vcr || '0%'}</TableCell>}
                    {visibleContentColumns.reach && <TableCell align="right">{destination.reach || '0'}</TableCell>}
                    {visibleContentColumns.frequency && <TableCell align="right">{destination.frequency || '0'}</TableCell>}
                    {visibleContentColumns.totalMinutesPerHousehold && <TableCell align="right">{destination.totalMinutesPerHousehold || '0'}</TableCell>}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={1 + Object.values(visibleContentColumns).filter(Boolean).length} align="center" sx={{ py: 3, color: 'text.secondary' }}>
                    {contentSearch ? 'No content found matching your search' : 'No destination data available'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      )}
    </Box>
  );
};

// Frequency Report Tile Component
const FrequencyReportTile = ({ startDate, endDate }) => {
  // State for menu and section visibility
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [visibleSections, setVisibleSections] = React.useState({
    frequencyBuckets: true,
    frequencyAverage: true,
    frequencyByDay: true,
    frequencyByWeek: true,
  });

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleToggleSection = (section) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for frequency buckets bar chart
  const bucketData = [28, 22, 18, 14, 10, 6, 2];
  const bucketAverage = bucketData.reduce((a, b) => a + b, 0) / bucketData.length;
  
  const frequencyBucketsData = {
    labels: ['1-3', '3-5', '5-7', '7-9', '11-20', '20-30', '30+'],
    datasets: [
      {
        type: 'bar',
        label: 'Reach %',
        data: bucketData,
        backgroundColor: [
          'rgba(79, 1, 163, 1)',    // Darkest for highest value (#4f01a3)
          'rgba(79, 1, 163, 0.85)',
          'rgba(79, 1, 163, 0.7)',
          'rgba(79, 1, 163, 0.55)',
          'rgba(79, 1, 163, 0.4)',
          'rgba(79, 1, 163, 0.25)',
          'rgba(79, 1, 163, 0.15)'  // Lightest for lowest value
        ],
        borderColor: [
          'rgba(79, 1, 163, 1)',
          'rgba(79, 1, 163, 1)',
          'rgba(79, 1, 163, 1)',
          'rgba(79, 1, 163, 1)',
          'rgba(79, 1, 163, 1)',
          'rgba(79, 1, 163, 1)',
          'rgba(79, 1, 163, 1)'
        ],
        borderWidth: 1,
        order: 2,
      },
      {
        type: 'line',
        label: 'Average',
        data: ['1-3', '3-5', '5-7', '7-9', '11-20', '20-30', '30+'].map(() => bucketAverage),
        borderColor: 'rgba(79, 1, 163, 0.6)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
        order: 1,
      },
    ],
  };

  const frequencyBucketsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Reach %',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Frequency by household',
        },
      },
    },
  };

  // Calculate days between start and end date
  const generateDayLabels = () => {
    if (!startDate || !endDate) {
      // Default to showing 7 days from today
      const days = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      }
      return days;
    }
    
    const days = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const current = new Date(start);
    
    while (current <= end) {
      days.push(current.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  // Calculate weeks between start and end date
  const generateWeekLabels = () => {
    if (!startDate || !endDate) {
      // Default to showing 4 weeks from today
      const weeks = [];
      for (let i = 0; i < 4; i++) {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() + (i * 7));
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        weeks.push(`${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`);
      }
      return weeks;
    }
    
    const weeks = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const current = new Date(start);
    
    while (current <= end) {
      const weekStart = new Date(current);
      const weekEnd = new Date(current);
      weekEnd.setDate(weekEnd.getDate() + 6);
      
      // If week end goes beyond the end date, use end date instead
      if (weekEnd > end) {
        weeks.push(`${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`);
      } else {
        weeks.push(`${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`);
      }
      
      current.setDate(current.getDate() + 7);
    }
    
    return weeks;
  };

  const dayLabels = generateDayLabels();
  const weekLabels = generateWeekLabels();

  // Sample data for frequency by day
  const dayData = dayLabels.map(() => Math.random() * 5 + 2);
  const dayAverage = dayData.reduce((a, b) => a + b, 0) / dayData.length;
  
  const frequencyByDayData = {
    labels: dayLabels,
    datasets: [
      {
        label: 'Frequency',
        data: dayData,
        borderColor: 'rgba(79, 1, 163, 1)',
        backgroundColor: 'rgba(79, 1, 163, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        order: 2,
      },
      {
        label: 'Average',
        data: dayLabels.map(() => dayAverage),
        borderColor: 'rgba(79, 1, 163, 0.6)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
        order: 1,
      },
    ],
  };

  // Sample data for frequency by week
  const weekData = weekLabels.map(() => Math.random() * 5 + 2);
  const weekAverage = weekData.reduce((a, b) => a + b, 0) / weekData.length;
  
  const frequencyByWeekData = {
    labels: weekLabels,
    datasets: [
      {
        label: 'Frequency',
        data: weekData,
        borderColor: 'rgba(79, 1, 163, 1)',
        backgroundColor: 'rgba(79, 1, 163, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        order: 2,
      },
      {
        label: 'Average',
        data: weekLabels.map(() => weekAverage),
        borderColor: 'rgba(79, 1, 163, 0.6)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
        order: 1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency',
        },
      },
    },
  };

  return (
    <Box sx={{ 
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      p: 3,
      backgroundColor: 'white',
      mb: 3,
      borderRadius: 1
    }}>
      {/* Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Frequency
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric', 
              hour: 'numeric', 
              minute: '2-digit', 
              hour12: true 
            })}
          </Typography>
          <IconButton onClick={handleMenuOpen} size="small">
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleToggleSection('frequencyBuckets')}>
              <Checkbox checked={visibleSections.frequencyBuckets} />
              <ListItemText primary="Frequency Buckets" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleSection('frequencyAverage')}>
              <Checkbox checked={visibleSections.frequencyAverage} />
              <ListItemText primary="Frequency per HH (Average)" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleSection('frequencyByDay')}>
              <Checkbox checked={visibleSections.frequencyByDay} />
              <ListItemText primary="Frequency by Day" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleSection('frequencyByWeek')}>
              <Checkbox checked={visibleSections.frequencyByWeek} />
              <ListItemText primary="Frequency by Week" />
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Export...</MenuItem>
            <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Frequency Buckets Bar Chart and Average Metric */}
      {(visibleSections.frequencyBuckets || visibleSections.frequencyAverage) && (
        <Box sx={{ mb: 4 }}>
          {visibleSections.frequencyBuckets && (
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Frequency Buckets
            </Typography>
          )}
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {/* Bar Chart - 80% width */}
            {visibleSections.frequencyBuckets && (
              <Box sx={{ flex: 4, height: 300 }} key="frequency-buckets">
                <Bar 
                  key={`buckets-chart-${visibleSections.frequencyAverage ? 'split' : 'full'}`} 
                  data={frequencyBucketsData} 
                  options={frequencyBucketsOptions} 
                  redraw={true}
                />
              </Box>
            )}
            
            {/* Average Frequency Metric - 20% width */}
            {visibleSections.frequencyAverage && (
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" color="text.secondary">Frequency per HH (Average)</Typography>
                <Typography variant="h1" sx={{ fontWeight: 'bold' }}>3.7</Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}

      {/* Frequency by Day and Week Line Charts */}
      {(visibleSections.frequencyByDay || visibleSections.frequencyByWeek) && (
        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Frequency by Day Line Chart */}
          {visibleSections.frequencyByDay && (
            <Box sx={{ flex: 1 }} key="frequency-by-day">
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Frequency by Day
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line 
                  key={`day-chart-${visibleSections.frequencyByWeek ? 'split' : 'full'}`} 
                  data={frequencyByDayData} 
                  options={lineChartOptions} 
                  redraw={true}
                />
              </Box>
            </Box>
          )}

          {/* Frequency by Week Line Chart */}
          {visibleSections.frequencyByWeek && (
            <Box sx={{ flex: 1 }} key="frequency-by-week">
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Frequency by Week
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line 
                  key={`week-chart-${visibleSections.frequencyByDay ? 'split' : 'full'}`} 
                  data={frequencyByWeekData} 
                  options={lineChartOptions} 
                  redraw={true}
                />
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

// Audience Insights Component
const AudienceInsightsTile = () => {
  // State for menu and chart visibility
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [showMaritalInsight, setShowMaritalInsight] = React.useState(false);
  const [visibleCharts, setVisibleCharts] = React.useState({
    age: true,
    gender: true,
    maritalStatus: true,
    parents: true,
    income: true,
    education: true,
  });

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleToggleChart = (chart) => {
    setVisibleCharts(prev => ({
      ...prev,
      [chart]: !prev[chart]
    }));
  };

  // Sample data for age demographics by gender
  const ageData = {
    labels: ['18-20', '21-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-64', '65+'],
    datasets: [
      {
        label: 'Male',
        data: [8, 12, 18, 22, 20, 15, 12, 10, 8, 5],
        backgroundColor: 'rgba(79, 1, 163, 0.8)',
        borderColor: 'rgba(79, 1, 163, 1)',
        borderWidth: 1,
      },
      {
        label: 'Female',
        data: [7, 10, 16, 20, 22, 17, 14, 11, 9, 6],
        backgroundColor: 'rgba(156, 39, 176, 0.6)',
        borderColor: 'rgba(156, 39, 176, 1)',
        borderWidth: 1,
      },
    ],
  };

  const ageChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 6,
          boxHeight: 6,
        }
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage (%)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Age Range',
        },
      },
    },
  };

  return (
    <Box sx={{ 
      p: 3, 
      backgroundColor: 'white',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      mb: 4,
      borderRadius: 1
    }}>
      {/* Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Audience insights
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric', 
              hour: 'numeric', 
              minute: '2-digit', 
              hour12: true 
            })}
          </Typography>
          <IconButton onClick={handleMenuOpen} size="small">
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleToggleChart('age')}>
          <Checkbox checked={visibleCharts.age} />
          <ListItemText primary="Age" />
        </MenuItem>
        <MenuItem onClick={() => handleToggleChart('gender')}>
          <Checkbox checked={visibleCharts.gender} />
          <ListItemText primary="Gender" />
        </MenuItem>
        <MenuItem onClick={() => handleToggleChart('maritalStatus')}>
          <Checkbox checked={visibleCharts.maritalStatus} />
          <ListItemText primary="Marital status" />
        </MenuItem>
        <MenuItem onClick={() => handleToggleChart('parents')}>
          <Checkbox checked={visibleCharts.parents} />
          <ListItemText primary="Parents" />
        </MenuItem>
        <MenuItem onClick={() => handleToggleChart('income')}>
          <Checkbox checked={visibleCharts.income} />
          <ListItemText primary="Income" />
        </MenuItem>
        <MenuItem onClick={() => handleToggleChart('education')}>
          <Checkbox checked={visibleCharts.education} />
          <ListItemText primary="Education" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Export...</MenuItem>
        <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
      </Menu>

      {/* Age Demographics Chart */}
      {visibleCharts.age && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Age
          </Typography>
          <Box sx={{ height: 400 }}>
            <Bar data={ageData} options={ageChartOptions} />
          </Box>
        </Box>
      )}

      {/* Pie Charts Row */}
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'space-between' }}>
        {/* Gender Pie Chart */}
        {visibleCharts.gender && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Gender
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Pie 
              data={{
                labels: ['Male', 'Female'],
                datasets: [{
                  data: [52, 48],
                  backgroundColor: [
                    'rgba(79, 1, 163, 1)',
                    'rgba(156, 39, 176, 1)',
                  ],
                  borderColor: '#ffffff',
                  borderWidth: 2,
                }],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                      boxWidth: 6,
                      boxHeight: 6,
                    }
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                      }
                    }
                  }
                },
              }}
            />
          </Box>
        </Box>
        )}

        {/* Marital Status Pie Chart */}
        {visibleCharts.maritalStatus && (
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Marital status
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <IconButton size="small" onClick={() => setShowMaritalInsight(prev => !prev)}><NotificationsActiveOutlinedIcon sx={{ color: '#7b1fa2' }} /></IconButton>
                <IconButton size="small"><MoreHorizIcon /></IconButton>
              </Box>
            </Box>
            {showMaritalInsight && (
              <Box sx={{ mb: 2, p: 2, backgroundColor: '#f3e5f5', borderRadius: 1, border: '1px solid #ce93d8', display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <NotificationsActiveOutlinedIcon sx={{ color: '#7b1fa2', fontSize: 20, mt: 0.25 }} />
                <Typography variant="body2" sx={{ color: '#7b1fa2' }}>
                  The overwhelming majority of this audience is married.
                </Typography>
              </Box>
            )}
          <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Pie 
              data={{
                labels: ['Married', 'Single'],
                datasets: [{
                  data: [58, 42],
                  backgroundColor: [
                    'rgba(79, 1, 163, 1)',
                    'rgba(156, 39, 176, 1)',
                  ],
                  borderColor: '#ffffff',
                  borderWidth: 2,
                }],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                      boxWidth: 6,
                      boxHeight: 6,
                    }
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                      }
                    }
                  }
                },
              }}
            />
          </Box>
        </Box>
        )}

        {/* Parents Pie Chart */}
        {visibleCharts.parents && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Parents
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pie 
              data={{
                labels: ['No children in HH', 'Children in HH'],
                datasets: [{
                  data: [65, 35],
                  backgroundColor: [
                    'rgba(79, 1, 163, 1)',
                    'rgba(156, 39, 176, 1)',
                  ],
                  borderColor: '#ffffff',
                  borderWidth: 2,
                }],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                      boxWidth: 6,
                      boxHeight: 6,
                    }
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                      }
                    }
                  }
                },
              }}
            />
          </Box>
        </Box>
        )}
      </Box>

      {/* Income and Education Bar Charts */}
      <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
        {/* Income Bar Chart */}
        {visibleCharts.income && (
          <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Income
          </Typography>
          <Box sx={{ height: 300 }}>
            <Bar 
              data={{
                labels: ['Under $50k', '$50k-$75k', '$75k-$100k', '$100k-$150k', '$150k-$200k', '$200k-$250k', 'Over $250k'],
                datasets: [{
                  label: 'Male',
                  data: [18, 22, 25, 20, 10, 3, 2],
                  backgroundColor: 'rgba(79, 1, 163, 0.8)',
                  borderColor: 'rgba(79, 1, 163, 1)',
                  borderWidth: 1,
                }, {
                  label: 'Female',
                  data: [20, 24, 23, 18, 9, 4, 2],
                  backgroundColor: 'rgba(156, 39, 176, 0.6)',
                  borderColor: 'rgba(156, 39, 176, 1)',
                  borderWidth: 1,
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                      boxWidth: 6,
                      boxHeight: 6,
                    }
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Income Range',
                    },
                  },
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Percentage',
                    },
                    ticks: {
                      callback: function(value) {
                        return value + '%';
                      }
                    }
                  },
                },
              }}
            />
          </Box>
        </Box>
        )}

        {/* Education Bar Chart */}
        {visibleCharts.education && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Education
            </Typography>
            <Box sx={{ height: 300 }}>
              <Bar 
              data={{
                labels: ['Didn\'t complete high school', 'High school diploma', 'Some college', 'Bachelors degree', 'Graduate degree'],
                datasets: [{
                  label: 'Male',
                  data: [8, 28, 22, 25, 17],
                  backgroundColor: 'rgba(79, 1, 163, 0.8)',
                  borderColor: 'rgba(79, 1, 163, 1)',
                  borderWidth: 1,
                }, {
                  label: 'Female',
                  data: [7, 26, 24, 27, 16],
                  backgroundColor: 'rgba(156, 39, 176, 0.6)',
                  borderColor: 'rgba(156, 39, 176, 1)',
                  borderWidth: 1,
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                      boxWidth: 6,
                      boxHeight: 6,
                    }
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Education Level',
                    },
                  },
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Percentage',
                    },
                    ticks: {
                      callback: function(value) {
                        return value + '%';
                      }
                    }
                  },
                },
              }}
            />
          </Box>
        </Box>
        )}
      </Box>
    </Box>
  );
};

// Sponsorship Insights Component
const SponsorshipInsightsTile = () => {
  // State for menu and section visibility
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [visibleSections, setVisibleSections] = React.useState({
    nonSponsorshipPie: true,
    videoSponsorshipPie: true,
    nativeAdsBreakout: true,
    brandedExperience: true,
  });

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleToggleSection = (section) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for Non-sponsorship video and sponsorship pie chart
  const nonSponsorshipData = {
    labels: ['Non-sponsorship', 'Sponsorship', 'Sponsorship & video'],
    datasets: [{
      data: [40, 30, 30],
      backgroundColor: [
        'rgba(79, 1, 163, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(186, 104, 200, 1)',
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
    }],
  };

  // Sample data for Video and sponsorship pie chart
  const videoSponsorshipData = {
    labels: ['Video & sponsorship', 'Video only', 'Sponsorship (non-video)'],
    datasets: [{
      data: [45, 30, 25],
      backgroundColor: [
        'rgba(79, 1, 163, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(186, 104, 200, 1)',
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
    }],
  };

  // Waterfall chart data using stacked bars
  const waterfallData = {
    labels: ['Marquee ad video', 'Marquee ad static/animated + billboard video', 'Spotlight ad', 'Added value sponsorship video'],
    datasets: [
      {
        label: 'Base',
        data: [0, 25, 40, 52],
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
      },
      {
        label: 'Reach %',
        data: [25, 15, 12, 8],
        backgroundColor: [
          'rgba(79, 1, 163, 1)',      // Darkest purple
          'rgba(126, 87, 194, 0.85)',  // Medium-dark purple
          'rgba(156, 39, 176, 0.7)',   // Medium purple
          'rgba(186, 104, 200, 0.6)',  // Light purple
        ],
        borderColor: [
          'rgba(79, 1, 163, 1)',
          'rgba(126, 87, 194, 1)',
          'rgba(156, 39, 176, 1)',
          'rgba(186, 104, 200, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Sample data for Branded experience - Ad reach waterfall chart
  const brandedExperienceData = {
    labels: ['Added value native ads', 'Sponsorship video', 'Native ads', 'Added value sponsorship video', 'Roku City'],
    datasets: [
      {
        label: 'Base',
        data: [0, 22, 38, 55, 68],
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
      },
      {
        label: 'Reach %',
        data: [22, 16, 17, 13, 12],
        backgroundColor: [
          'rgba(79, 1, 163, 1)',
          'rgba(126, 87, 194, 0.85)',
          'rgba(156, 39, 176, 0.7)',
          'rgba(186, 104, 200, 0.6)',
          'rgba(206, 147, 216, 0.5)',
        ],
        borderColor: [
          'rgba(79, 1, 163, 1)',
          'rgba(126, 87, 194, 1)',
          'rgba(156, 39, 176, 1)',
          'rgba(186, 104, 200, 1)',
          'rgba(206, 147, 216, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const waterfallOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            if (context.dataset.label === 'Reach %') {
              const baseValue = context.chart.data.datasets[0].data[context.dataIndex];
              const value = context.parsed.y;
              const total = baseValue + value;
              return 'Reach: ' + value + '% (Total: ' + total + '%)';
            }
            return null;
          },
          footer: function(tooltipItems) {
            const context = tooltipItems[0];
            if (context.label === 'Added value native ads') {
              return 'Tiles (Where to Watch, Featured Free, Roku Channel), Title Cards, Pause Ads, Native Ads (Spotlight Ads), Microsites (Passes, Playlists, Zones)';
            }
            if (context.label === 'Sponsorship video') {
              return 'Sponsorship Ad Video (Standard Ad Video, Takeover Pod), Custom Videos (Vignettes, Tagged Tune Ins), Action Ads (Stanard Ad Video + Overlay, Scannable Ads, 3P Brightline/Innvoid Action Ads)';
            }
            if (context.label === 'Native ads') {
              return 'Tiles (Where to Watch, Featured Free, Roku Channel), Native Ads (Marquee, Billboard, Spotlight Ads)';
            }
            if (context.label === 'Added value sponsorship video') {
              return 'Sponsorship Ad Video (In-Content Ad Video, Standard Ad Video), Custom Videos (Vignettes, Tagged Tune Ins), Action Ads (Stanard Ad Video + Overlay, Scannable Ads, 3P Brightline/Innvoid Action Ads)';
            }
            if (context.label === 'Roku City') {
              return 'Buildings, Cars, Neighborhoods';
            }
            return '';
          },
          filter: function(tooltipItem) {
            return tooltipItem.dataset.label !== 'Base';
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Reach %',
        },
      },
    },
  };

  return (
    <Box sx={{ 
      p: 3, 
      backgroundColor: 'white',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      mb: 4,
      borderRadius: 1
    }}>
      {/* Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Sponsorship insights
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric', 
              hour: 'numeric', 
              minute: '2-digit', 
              hour12: true 
            })}
          </Typography>
          <IconButton onClick={handleMenuOpen} size="small">
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleToggleSection('nonSponsorshipPie')}>
              <Checkbox checked={visibleSections.nonSponsorshipPie} />
              <ListItemText primary="Non-sponsorship video and sponsorship" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleSection('videoSponsorshipPie')}>
              <Checkbox checked={visibleSections.videoSponsorshipPie} />
              <ListItemText primary="Video and sponsorship" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleSection('nativeAdsBreakout')}>
              <Checkbox checked={visibleSections.nativeAdsBreakout} />
              <ListItemText primary="Native ads breakout" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleSection('brandedExperience')}>
              <Checkbox checked={visibleSections.brandedExperience} />
              <ListItemText primary="Branded experience - Ad reach" />
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Export...</MenuItem>
            <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Sponsorship Pie Charts */}
      <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
        {/* Non-sponsorship video and sponsorship Pie Chart */}
        {visibleSections.nonSponsorshipPie && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Non-sponsorship video and sponsorship
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pie 
                data={nonSponsorshipData}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 6,
                        boxHeight: 6,
                      }
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          return context.label + ': ' + context.parsed + '%';
                        }
                      }
                    }
                  },
                }}
              />
            </Box>
          </Box>
        )}

        {/* Video and sponsorship Pie Chart */}
        {visibleSections.videoSponsorshipPie && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Video and sponsorship
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pie 
                data={videoSponsorshipData}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 6,
                        boxHeight: 6,
                      }
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          return context.label + ': ' + context.parsed + '%';
                        }
                      }
                    }
                  },
                }}
              />
            </Box>
          </Box>
        )}
      </Box>

      {/* Waterfall Charts */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* Native ads breakout Waterfall Chart */}
        {visibleSections.nativeAdsBreakout && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Native ads breakout
            </Typography>
            <Box sx={{ height: 300 }}>
              <Bar data={waterfallData} options={waterfallOptions} />
            </Box>
          </Box>
        )}

        {/* Branded experience - Ad reach Waterfall Chart */}
        {visibleSections.brandedExperience && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Branded experience - Ad reach
            </Typography>
            <Box sx={{ height: 300 }}>
              <Bar data={brandedExperienceData} options={waterfallOptions} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

// DAR Metrics Component
const DARMetricsTile = () => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [visibleMetrics, setVisibleMetrics] = React.useState({
    spend: true,
    nielsenImpressions: true,
    firstPartyImpressions: true,
    coviewingLift: true,
    coviewedCPM: true,
    additionalCoviewedImpressions: true,
    totalOnTargetImpressions: true,
  });

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleToggleMetric = (metric) => {
    setVisibleMetrics(prev => ({
      ...prev,
      [metric]: !prev[metric]
    }));
  };

  return (
    <Box sx={{ 
      p: 3, 
      backgroundColor: 'white',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      mb: 4,
      borderRadius: 1
    }}>
      {/* Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
            DAR metrics
          </Typography>
          <Typography variant="body2" color="text.secondary">
            If a campaign is tagged at the campaign/order ID level (one DAR campaign ID across multiple flights), flight-level filtering of the dashboard will not apply. The DAR Impressions tile will show the campaign total even if a flight filter is applied.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric', 
              hour: 'numeric', 
              minute: '2-digit', 
              hour12: true 
            })}
          </Typography>
          <IconButton onClick={handleMenuOpen} size="small">
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleToggleMetric('spend')}>
              <Checkbox checked={visibleMetrics.spend} />
              <ListItemText primary="Spend" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleMetric('nielsenImpressions')}>
              <Checkbox checked={visibleMetrics.nielsenImpressions} />
              <ListItemText primary="Nielsen impressions" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleMetric('firstPartyImpressions')}>
              <Checkbox checked={visibleMetrics.firstPartyImpressions} />
              <ListItemText primary="1P impressions" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleMetric('coviewingLift')}>
              <Checkbox checked={visibleMetrics.coviewingLift} />
              <ListItemText primary="Coviewing lift" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleMetric('coviewedCPM')}>
              <Checkbox checked={visibleMetrics.coviewedCPM} />
              <ListItemText primary="Coviewed CPM" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleMetric('additionalCoviewedImpressions')}>
              <Checkbox checked={visibleMetrics.additionalCoviewedImpressions} />
              <ListItemText primary="Additional coviewed impressions" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleMetric('totalOnTargetImpressions')}>
              <Checkbox checked={visibleMetrics.totalOnTargetImpressions} />
              <ListItemText primary="Total on target billable impressions" />
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Export...</MenuItem>
            <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Metrics Grid */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 3 
      }}>
        {/* Spend */}
        {visibleMetrics.spend && (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Spend
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
              $125,430
            </Typography>
          </Box>
        )}

        {/* Nielsen impressions */}
        {visibleMetrics.nielsenImpressions && (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Nielsen impressions
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
              8,542,300
            </Typography>
          </Box>
        )}

        {/* 1P impressions */}
        {visibleMetrics.firstPartyImpressions && (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              1P impressions
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
              7,234,100
            </Typography>
          </Box>
        )}

        {/* Coviewing lift */}
        {visibleMetrics.coviewingLift && (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Coviewing lift
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
              18.1%
            </Typography>
          </Box>
        )}

        {/* Coviewed CPM */}
        {visibleMetrics.coviewedCPM && (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Coviewed CPM
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
              $14.68
            </Typography>
          </Box>
        )}

        {/* Additional coviewed impressions */}
        {visibleMetrics.additionalCoviewedImpressions && (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Additional coviewed impressions
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
              1,308,200
            </Typography>
          </Box>
        )}

        {/* Total on target billable impressions */}
        {visibleMetrics.totalOnTargetImpressions && (
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Total on target billable impressions
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
              9,850,500
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

// Creatives Report Component
const CreativesReportTile = ({ adGroups, campaigns = [], selectedCampaignIds = [] }) => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [visibleColumns, setVisibleColumns] = React.useState({
    spend: true,
    impressions: true,
    reach: true,
    frequency: true,
    cpur: true,
    cpm: true,
    cpa: true,
    actions: true,
    clicks: true,
    ctr: true,
  });

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleToggleColumn = (column) => {
    setVisibleColumns(prev => ({
      ...prev,
      [column]: !prev[column]
    }));
  };

  // Filter ad groups by selected campaigns if any are selected
  const filteredAdGroups = selectedCampaignIds.length > 0 
    ? adGroups.filter(adGroup => {
        // Find the campaign for this ad group
        const campaign = campaigns.find(c => c.campaign === adGroup.parentCampaign);
        return campaign && selectedCampaignIds.includes(campaign.id);
      })
    : adGroups;

  // Extract all creatives from filtered ad groups with sample metrics
  const allCreatives = filteredAdGroups.flatMap(adGroup => 
    (adGroup.creatives || []).map((creative, index) => ({
      id: creative.id,
      name: creative.name,
      type: creative.type,
      spend: 8000 + Math.random() * 10000,
      impressions: 200000 + Math.random() * 300000,
      reach: 80000 + Math.random() * 100000,
      frequency: 2.5 + Math.random() * 0.5,
      cpur: 0.08 + Math.random() * 0.04,
      cpm: 30 + Math.random() * 10,
      cpa: 12 + Math.random() * 8,
      actions: 400 + Math.random() * 700,
      clicks: 1500 + Math.random() * 1500,
      ctr: 0.55 + Math.random() * 0.2,
    }))
  );

  // Deduplicate creatives by ID (in case same creative is in multiple ad groups)
  const creativesData = Array.from(
    new Map(allCreatives.map(creative => [creative.id, creative])).values()
  );

  return (
    <Box sx={{ 
      p: 3, 
      backgroundColor: 'white',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      mb: 4,
      borderRadius: 1
    }}>
      {/* Title */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Creatives
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric', 
              hour: 'numeric', 
              minute: '2-digit', 
              hour12: true 
            })}
          </Typography>
          <IconButton onClick={handleMenuOpen} size="small">
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleToggleColumn('spend')}>
              <Checkbox checked={visibleColumns.spend} />
              <ListItemText primary="Spend" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('impressions')}>
              <Checkbox checked={visibleColumns.impressions} />
              <ListItemText primary="Impressions" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('reach')}>
              <Checkbox checked={visibleColumns.reach} />
              <ListItemText primary="Reach" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('frequency')}>
              <Checkbox checked={visibleColumns.frequency} />
              <ListItemText primary="Frequency" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('cpur')}>
              <Checkbox checked={visibleColumns.cpur} />
              <ListItemText primary="CPUR" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('cpm')}>
              <Checkbox checked={visibleColumns.cpm} />
              <ListItemText primary="CPM" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('cpa')}>
              <Checkbox checked={visibleColumns.cpa} />
              <ListItemText primary="CPA" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('actions')}>
              <Checkbox checked={visibleColumns.actions} />
              <ListItemText primary="Actions" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('clicks')}>
              <Checkbox checked={visibleColumns.clicks} />
              <ListItemText primary="Clicks" />
            </MenuItem>
            <MenuItem onClick={() => handleToggleColumn('ctr')}>
              <Checkbox checked={visibleColumns.ctr} />
              <ListItemText primary="CTR" />
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Export...</MenuItem>
            <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Table */}
      <Box sx={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', display: 'block' }}>
          <thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ textAlign: 'left', padding: '12px', fontWeight: 'bold', color: '#666' }}>Creative</th>
              {visibleColumns.spend && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>Spend</th>}
              {visibleColumns.impressions && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>Impressions</th>}
              {visibleColumns.reach && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>Reach</th>}
              {visibleColumns.frequency && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>Frequency</th>}
              {visibleColumns.cpur && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>CPUR</th>}
              {visibleColumns.cpm && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>CPM</th>}
              {visibleColumns.cpa && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>CPA</th>}
              {visibleColumns.actions && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>Actions</th>}
              {visibleColumns.clicks && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>Clicks</th>}
              {visibleColumns.ctr && <th style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold', color: '#666' }}>CTR</th>}
            </tr>
          </thead>
          <tbody style={{ display: 'block', maxHeight: '600px', overflowY: 'auto', width: '100%' }}>
            {creativesData.map((creative, index) => (
              <tr 
                key={creative.id}
                style={{ 
                  borderBottom: '1px solid #e0e0e0',
                  display: 'table',
                  width: '100%',
                  tableLayout: 'fixed'
                }}
              >
                <td style={{ padding: '12px' }}>
                  <div style={{ fontWeight: '500' }}>{creative.name}</div>
                  <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '4px' }}>{creative.type}</div>
                </td>
                {visibleColumns.spend && <td style={{ textAlign: 'right', padding: '12px' }}>${creative.spend.toLocaleString()}</td>}
                {visibleColumns.impressions && <td style={{ textAlign: 'right', padding: '12px' }}>{creative.impressions.toLocaleString()}</td>}
                {visibleColumns.reach && <td style={{ textAlign: 'right', padding: '12px' }}>{creative.reach.toLocaleString()}</td>}
                {visibleColumns.frequency && <td style={{ textAlign: 'right', padding: '12px' }}>{creative.frequency.toFixed(2)}</td>}
                {visibleColumns.cpur && <td style={{ textAlign: 'right', padding: '12px' }}>${creative.cpur.toFixed(2)}</td>}
                {visibleColumns.cpm && <td style={{ textAlign: 'right', padding: '12px' }}>${creative.cpm.toFixed(2)}</td>}
                {visibleColumns.cpa && <td style={{ textAlign: 'right', padding: '12px' }}>${creative.cpa.toFixed(2)}</td>}
                {visibleColumns.actions && <td style={{ textAlign: 'right', padding: '12px' }}>{creative.actions.toLocaleString()}</td>}
                {visibleColumns.clicks && <td style={{ textAlign: 'right', padding: '12px' }}>{creative.clicks.toLocaleString()}</td>}
                {visibleColumns.ctr && <td style={{ textAlign: 'right', padding: '12px' }}>{creative.ctr.toFixed(2)}%</td>}
              </tr>
            ))}
          </tbody>
          <tfoot style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            {/* Totals Row */}
            <tr style={{ borderTop: '1px solid #333', backgroundColor: '#f5f5f5' }}>
              <td style={{ padding: '12px', fontWeight: 'bold' }}>
                Total ({creativesData.length} {creativesData.length === 1 ? 'creative' : 'creatives'})
              </td>
              {visibleColumns.spend && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  ${creativesData.reduce((sum, c) => sum + c.spend, 0).toLocaleString()}
                </td>
              )}
              {visibleColumns.impressions && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  {creativesData.reduce((sum, c) => sum + c.impressions, 0).toLocaleString()}
                </td>
              )}
              {visibleColumns.reach && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  {creativesData.reduce((sum, c) => sum + c.reach, 0).toLocaleString()}
                </td>
              )}
              {visibleColumns.frequency && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  {(creativesData.reduce((sum, c) => sum + c.frequency, 0) / creativesData.length).toFixed(2)}
                </td>
              )}
              {visibleColumns.cpur && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  ${(creativesData.reduce((sum, c) => sum + c.cpur, 0) / creativesData.length).toFixed(2)}
                </td>
              )}
              {visibleColumns.cpm && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  ${(creativesData.reduce((sum, c) => sum + c.cpm, 0) / creativesData.length).toFixed(2)}
                </td>
              )}
              {visibleColumns.cpa && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  ${(creativesData.reduce((sum, c) => sum + c.cpa, 0) / creativesData.length).toFixed(2)}
                </td>
              )}
              {visibleColumns.actions && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  {creativesData.reduce((sum, c) => sum + c.actions, 0).toLocaleString()}
                </td>
              )}
              {visibleColumns.clicks && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  {creativesData.reduce((sum, c) => sum + c.clicks, 0).toLocaleString()}
                </td>
              )}
              {visibleColumns.ctr && (
                <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>
                  {(creativesData.reduce((sum, c) => sum + c.ctr, 0) / creativesData.length).toFixed(2)}%
                </td>
              )}
            </tr>
          </tfoot>
        </table>
      </Box>
    </Box>
  );
};

// Roku Channel Delivery Component
const RokuChannelDeliveryTile = () => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [visibleCharts, setVisibleCharts] = React.useState({
    contentType: true,
    trcGenre: true,
    iabGenre: true,
  });

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleToggleChart = (chartName) => {
    setVisibleCharts(prev => ({
      ...prev,
      [chartName]: !prev[chartName]
    }));
  };

  const genres = [
    'Documentary', 'Entertainment', 'Reality TV', 'News & weather', 'Crime', 
    'Drama', 'Comedy', 'Football', 'Holiday', 'Hunting', 'Animated', 
    'Game show', 'Western', 'Actions', 'Children', 'Home improvement', 
    'Romantic comedy', 'Cooking', 'Comedy drama', 'Adventure', 'Dance', 
    'Music', 'Auto', 'Sports', 'Empty'
  ];

  // Sample data values for TRC
  const trcValues = [
    12.5, 10.8, 9.2, 8.5, 7.8, 7.2, 6.9, 6.5, 6.1, 5.8, 5.4, 
    4.9, 4.5, 4.2, 3.8, 3.5, 3.2, 2.9, 2.6, 2.3, 2.0, 1.7, 1.4, 1.1, 0.8
  ];

  // Sample data values for IAB
  const iabValues = [
    11.2, 10.5, 9.8, 8.9, 8.2, 7.5, 7.1, 6.8, 6.3, 5.9, 5.5, 
    5.1, 4.7, 4.3, 4.0, 3.6, 3.3, 3.0, 2.7, 2.4, 2.1, 1.8, 1.5, 1.2, 0.9
  ];

  // Function to generate gradient colors based on value
  const generateGradientColors = (values) => {
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    
    return values.map(value => {
      // Normalize value between 0 and 1
      const normalized = (value - minValue) / (maxValue - minValue);
      
      // Dark purple to light purple gradient
      // Dark: rgba(79, 1, 163, 1) - Light: rgba(206, 147, 216, 0.4)
      const r = Math.round(79 + (206 - 79) * (1 - normalized));
      const g = Math.round(1 + (147 - 1) * (1 - normalized));
      const b = Math.round(163 + (216 - 163) * (1 - normalized));
      const a = 1 - (1 - 0.4) * (1 - normalized);
      
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    });
  };

  // TRC Content type pie chart data
  const trcContentTypeData = {
    labels: ['Live channel', 'Movie', 'TV show', 'Other'],
    datasets: [{
      data: [35, 28, 25, 12],
      backgroundColor: [
        'rgba(79, 1, 163, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(186, 104, 200, 1)',
        'rgba(206, 147, 216, 1)'
      ],
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 6,
          boxHeight: 6,
          padding: 15
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    }
  };

  // Sample data for TRC Genre impressions
  const trcData = {
    labels: genres,
    datasets: [{
      label: '% of impressions',
      data: trcValues,
      backgroundColor: generateGradientColors(trcValues),
      borderColor: generateGradientColors(trcValues).map(color => color.replace(/[\d.]+\)$/g, '1)')),
      borderWidth: 1,
    }]
  };

  // Sample data for IAB Genre impressions
  const iabData = {
    labels: genres,
    datasets: [{
      label: '% of impressions',
      data: iabValues,
      backgroundColor: generateGradientColors(iabValues),
      borderColor: generateGradientColors(iabValues).map(color => color.replace(/[\d.]+\)$/g, '1)')),
      borderWidth: 1,
    }]
  };

  const chartOptions = {
    indexAxis: 'y', // This makes it a horizontal bar chart
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.parsed.x + '%';
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: '% of impressions',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Genre',
        },
        ticks: {
          font: {
            size: 10,
          },
          autoSkip: false,
        }
      },
    },
  };

  return (
    <Box sx={{ 
      p: 3, 
      backgroundColor: 'white',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      mb: 4,
      borderRadius: 1
    }}>
      {/* Title with Last Updated and Menu */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Roku channel delivery
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {new Date().toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric', 
              hour: 'numeric', 
              minute: '2-digit', 
              hour12: true 
            })}
          </Typography>
          <IconButton onClick={handleMenuOpen} size="small">
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleToggleChart('contentType')}>
          <Checkbox checked={visibleCharts.contentType} size="small" />
          <ListItemText primary="TRC Content type" />
        </MenuItem>
        <MenuItem onClick={() => handleToggleChart('trcGenre')}>
          <Checkbox checked={visibleCharts.trcGenre} size="small" />
          <ListItemText primary="TRC Genre impressions %" />
        </MenuItem>
        <MenuItem onClick={() => handleToggleChart('iabGenre')}>
          <Checkbox checked={visibleCharts.iabGenre} size="small" />
          <ListItemText primary="IAB Genre impressions %" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Export...</MenuItem>
        <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
      </Menu>

      {/* TRC Content type pie chart */}
      {visibleCharts.contentType && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            TRC Content type
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ height: 300, width: 400 }}>
              <Pie data={trcContentTypeData} options={pieChartOptions} />
            </Box>
          </Box>
        </Box>
      )}

      {/* Charts */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* TRC Genre impressions */}
        {visibleCharts.trcGenre && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              TRC Genre impressions %
            </Typography>
            <Box sx={{ height: 410 }}>
              <Bar data={trcData} options={chartOptions} />
            </Box>
          </Box>
        )}

        {/* IAB Genre impressions */}
        {visibleCharts.iabGenre && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              IAB Genre impressions %
            </Typography>
            <Box sx={{ height: 410 }}>
              <Bar data={iabData} options={chartOptions} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

// Reusable Creatives Card Component
const CreativesCard = ({ adGroup, isSelected, handleCampaignCheckboxClick, onAddCreative, getCreativesForAdGroup, onEditCreative, onSelectCreativeType }) => {
  const creativesToShow = getCreativesForAdGroup(adGroup);

  return (
    <Box sx={{ 
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
      p: 3,
      backgroundColor: 'white',
      mb: 3
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h2">
          Creatives
        </Typography>
        <Button 
          variant="outlined" 
          size="small"
          onClick={() => onAddCreative(adGroup)}
        >
          Add Creative
        </Button>
      </Box>
      
      {creativesToShow.length === 0 ? (
        <Box sx={{ backgroundColor: 'white', padding: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
            Select the type of creative you want to add to this ad group.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2
          }}>
            <TileComponent
              image={CreativeIncontent}
              title="In-content video"
              description="Video ads that play within content feeds"
              isSelected={false}
              onClick={() => {
                if (onSelectCreativeType) {
                  onSelectCreativeType('in-content-video');
                }
                onAddCreative(adGroup);
                console.log('In-content video selected');
              }}
            />
            <TileComponent
              image={CreativeMarquee}
              title="Marquee"
              description="Banner ads displayed at the top of content"
              isSelected={false}
              onClick={() => {
                onAddCreative(adGroup);
                console.log('Marquee selected');
              }}
            />
            <TileComponent
              image={CreativeBillboard}
              title="Billboard"
              description="Large format display ads for maximum impact"
              isSelected={false}
              onClick={() => {
                onAddCreative(adGroup);
                console.log('Billboard selected');
              }}
            />
            <Card 
              sx={{ 
                width: '280px', 
                height: '275px', 
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: 0,
                backgroundColor: '#FAFAFA',
                boxShadow: 'none'
              }}
              onClick={() => {
                // This could open the assign creative drawer instead
                console.log('Select from creative library clicked');
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '100%',
                p: 2
              }}>
                <Box sx={{ 
                  width: '100%', 
                  height: 140, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 2
                }}>
                  <ImageIcon sx={{ fontSize: 64, color: 'primary.main' }} />
                </Box>
                <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>
                  Select an existing creative from your creative library
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      ) : (
        <Table size="small" aria-label="creatives" sx={{ backgroundColor: 'white' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  size="small"
                  indeterminate={
                    creativesToShow?.some(creative => isSelected(creative.id)) &&
                    !creativesToShow?.every(creative => isSelected(creative.id))
                  }
                  checked={creativesToShow?.every(creative => isSelected(creative.id)) || false}
                  onChange={(event) => {
                    const isChecked = event.target.checked;
                    creativesToShow?.forEach(creative => {
                      if (isChecked !== isSelected(creative.id)) {
                        handleCampaignCheckboxClick(creative.id);
                      }
                    });
                  }}
                />
              </TableCell>
              <TableCell sx={{ width: '175px', padding: '8px' }}>Preview</TableCell>
              <TableCell sx={{ width: '100%' }}>Creative Name</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>Status</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {creativesToShow?.map((creative) => (
              <TableRow key={creative.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isSelected(creative.id)}
                    onChange={() => handleCampaignCheckboxClick(creative.id)}
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ width: '175px', padding: '8px' }}>
                  {creative.type === 'In-content video' ? (
                    <Box
                      component="video"
                      src={IncontentVideo}
                      sx={{
                        width: '175px',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        backgroundColor: '#f5f5f5'
                      }}
                      controls
                      muted
                    />
                  ) : creative.type === 'Marquee' ? (
                    <Box
                      component="img"
                      src={Marquee}
                      alt={creative.name}
                      sx={{
                        width: '175px',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  ) : creative.type === 'Billboard' ? (
                    <Box
                      component="img"
                      src={Billboard}
                      alt={creative.name}
                      sx={{
                        width: '175px',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={getImagePath("images/creative-placeholder.jpg")}
                      alt={creative.name}
                      sx={{
                        width: '175px',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  )}
                </TableCell>
                <TableCell component="th" scope="row" sx={{ width: '100%' }}>
                  <Link 
                    href="#" 
                    underline="hover" 
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      if (creative.type === 'In-content video' && onEditCreative) {
                        onEditCreative(creative);
                      }
                    }}
                    sx={{ cursor: 'pointer' }}
                  >
                    {creative.name}
                  </Link>
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <StatusComponent status={creative.status} tooltip={creative.statusReason === 'campaign_paused' ? 'Campaign paused' : null} />
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{creative.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

// Reusable Empty Creatives State Component
const EmptyCreativesState = ({ adGroup, onOpenCreativeDrawer, onSelectCreativeType, onOpenAssignCreativeDrawer }) => {
  return (
    <Box sx={{ backgroundColor: 'white', padding: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
        Select the type of creative you want this ad group to run, ad groups only support a single creative type:
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 2,
        flexWrap: 'wrap'
      }}>
        <TileComponent
          image={CreativeIncontent}
          title="In-content video"
          description="Video ads that play within content feeds"
          isSelected={false}
          onClick={() => {
            onSelectCreativeType('in-content-video');
            onOpenCreativeDrawer(adGroup);
          }}
        />
        <TileComponent
          image={CreativeMarquee}
          title="Marquee"
          description="Banner ads displayed at the top of content"
          isSelected={false}
          onClick={() => {
            onSelectCreativeType('marquee');
            onOpenCreativeDrawer(adGroup);
          }}
        />
        <TileComponent
          image={CreativeBillboard}
          title="Billboard"
          description="Large format display ads for maximum impact"
          isSelected={false}
          onClick={() => {
            onSelectCreativeType('billboard');
            onOpenCreativeDrawer(adGroup);
          }}
        />
        <Card 
          sx={{ 
            width: '280px', 
            height: '275px', 
            cursor: 'pointer',
            border: '1px solid #ccc',
            borderRadius: 0,
            backgroundColor: '#FAFAFA',
            boxShadow: 'none'
          }}
          onClick={() => onOpenAssignCreativeDrawer(adGroup)}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100%',
            p: 2
          }}>
            <Box sx={{ 
              width: '100%', 
              height: 140, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              mb: 2
            }}>
              <ImageIcon sx={{ fontSize: 64, color: 'primary.main' }} />
            </Box>
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>
              Select an existing creative from your creative library
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

// Custom Multi-Select Checkbox Component
const CheckboxOptionComponent = ({ icon, title, description, selected = false, onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        border: selected ? '1px solid #20004C' : '1px solid #ccc',
        backgroundColor: selected ? '#EDE7F6' : 'white',
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: '6px',
        '&:hover': onClick ? {
          backgroundColor: selected ? '#E1D9F5' : '#f5f5f5'
        } : {}
      }}
      onClick={onClick}
    >
      {/* Checkbox */}
      <Checkbox
        checked={selected}
        sx={{
          color: '#ccc',
          '&.Mui-checked': {
            color: 'primary.main'
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      />
      
      {/* Icon */}
      <Box sx={{ mr: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36 }}>
        {icon}
      </Box>
      
      {/* Title and Description */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '14px',
            fontWeight: 500,
            mb: 0.5,
            lineHeight: 1.2,
            color: 'black'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: '12px',
            color: 'text.secondary',
            lineHeight: 1.3
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

// Custom Multi-Select Checkbox Component - Clean Variation (No Border/Background)
const CheckboxOptionCleanComponent = ({ icon, title, description, selected = false, onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 1,
        px: 2,
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: '6px'
      }}
      onClick={onClick}
    >
      {/* Checkbox */}
      <Checkbox
        checked={selected}
        sx={{
          color: '#ccc',
          '&.Mui-checked': {
            color: 'primary.main'
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      />
      
      {/* Icon */}
      <Box sx={{ mr: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36 }}>
        {icon}
      </Box>
      
      {/* Title and Description */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '14px',
            fontWeight: 500,
            mb: 0.5,
            lineHeight: 1.2,
            color: 'black'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: '12px',
            color: 'text.secondary',
            lineHeight: 1.3
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

// Skeleton Loading Component for Ad Group Details
const AdGroupDetailsSkeleton = ({ adGroups, currentCampaign = 'Holiday Sale 2024', selectedAdGroupId, campaignGoal = 'Conversion' }) => {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [campaignDetailsExpanded, setCampaignDetailsExpanded] = useState(false);

  const toggleSidebarCollapsed = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleCampaignDetailsExpanded = () => {
    setCampaignDetailsExpanded(!campaignDetailsExpanded);
  };

  return (
    <Container maxWidth={false} sx={{ mt: 0, p: "20px" }}>
      <Box sx={{ mb: 3 }}>
        <Link 
          href="#" 
          underline="hover"
          color="primary"
          sx={{ 
            cursor: 'pointer',
            mb: 2,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5
          }}
          onClick={(e) => {
            e.preventDefault();
            // This would normally go back, but during loading we'll keep it static
          }}
        >
          <ArrowBackIcon fontSize="inherit" />
          <Typography variant="body2" component="span">Back</Typography>
        </Link>
      </Box>
      
      {/* Actual Campaign Details Card - Not Skeleton */}
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography variant="h2">
              {currentCampaign}
            </Typography>
            <HelpOutlineIcon fontSize="small" color="action" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button variant="outlined" size="small">
              Edit
            </Button>
            <IconButton size="small" onClick={toggleCampaignDetailsExpanded}>
              <KeyboardArrowUpIcon 
                sx={{ 
                  transform: campaignDetailsExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.2s'
                }} 
              />
            </IconButton>
          </Box>
        </Box>
        
        {campaignDetailsExpanded && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Event group
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                XD8AAI1eMy
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Goals & KPIs
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Advertising objective
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {campaignGoal}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Optimization goal
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {campaignGoal === 'Awareness' ? 'Reach' : 'App installs'}
              </Typography>
            </Box>
          </>
        )}
      </Box>
      
      <Box sx={{ display: 'flex', gap: 0 }}>
        {/* Keep the actual sidebar - no skeleton here */}
        <Box sx={{ width: sidebarCollapsed ? '40px' : `${sidebarWidth}px`, flexShrink: 0, height: '100vh', pb: 10 }}>
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 0,
            backgroundColor: 'white',
            borderRadius: 0,
            mr: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: sidebarCollapsed ? 'center' : 'space-between' }}>
              {!sidebarCollapsed && (
                <Button
                  variant="text"
                  startIcon={<AddIcon />}
                  onClick={() => setAdGroupsDrawerOpen(true)}
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: 'rgb(34, 96, 188)',
                    textTransform: 'none',
                    padding: '4px 8px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  Add ad group
                </Button>
              )}
              <IconButton 
                size="small" 
                onClick={toggleSidebarCollapsed}
                sx={{ 
                  minWidth: 'unset',
                  p: 0.5
                }}
              >
                {sidebarCollapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
              </IconButton>
            </Box>
            {!sidebarCollapsed && (
              <Box sx={{ flex: 1, overflowY: 'auto' }}>
                {adGroups
                  .filter(ag => ag.parentCampaign === currentCampaign)
                  .map((ag) => (
                  <Box
                    key={ag.id}
                    onClick={() => handleAdGroupClick(ag)}
                    sx={{
                      p: 1.5,
                      borderRadius: selectedAdGroupId === ag.id ? 0 : 1,
                      cursor: 'pointer',
                      backgroundColor: selectedAdGroupId === ag.id ? '#EDE7F6' : 'transparent',
                      borderTop: selectedAdGroupId === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderRight: selectedAdGroupId === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderBottom: selectedAdGroupId === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderLeft: selectedAdGroupId === ag.id ? '3px solid #20004C' : '1px solid transparent',
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        borderRadius: selectedAdGroupId === ag.id ? 0 : 1,
                      }
                    }}
                  >
                    <Typography variant="body2" sx={{ 
                      fontWeight: 'medium', 
                      fontSize: '12px', 
                      mb: 0.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {ag.adGroupName || ag.campaign}
                    </Typography>
                    <Box sx={{ 
                      '& .MuiBox-root': { 
                        gap: '4px !important',
                        '& .MuiTypography-root': {
                          fontSize: '11px !important'
                        },
                        '& svg': {
                          width: '12px !important',
                          height: '12px !important'
                        }
                      }
                    }}>
                      <StatusComponent status={ag.status} />
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        
        {/* Resize Handle - only show when not collapsed */}
        {!sidebarCollapsed && (
          <Box
            sx={{
              width: '4px',
              height: '100vh',
              cursor: 'col-resize',
              backgroundColor: 'transparent',
              flexShrink: 0,
              mr: 2
            }}
          />
        )}
        
        {/* Column 2 - Only this part shows skeleton */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ mb: 3 }}>
            <Skeleton variant="rectangular" width="100%" height={40} />
          </Box>
          
          {/* Metrics Card Skeleton */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 3, 
            mb: 3,
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white'
          }}>
            {[...Array(5)].map((_, index) => (
              <Box key={index}>
                <Skeleton variant="text" width={80} height={16} />
                <Skeleton variant="text" width={120} height={24} />
              </Box>
            ))}
          </Box>
          
          {/* Configuration Cards Skeleton */}
          {[...Array(4)].map((_, index) => (
            <Box key={index} sx={{ 
              boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
              p: 3,
              backgroundColor: 'white',
              mb: 3
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Skeleton variant="text" width={150} height={24} />
                <Skeleton variant="rectangular" width={60} height={32} />
              </Box>
              <Skeleton variant="text" width="80%" height={16} />
              <Skeleton variant="text" width="60%" height={16} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

// Sample campaign data
const campaignsData = [
  {
    id: 1,
    campaign: "Agency | Vandelay Industries US | Radio Shack | DI | WTYW Discovery Q3'24-Q4'24 | Ad Buy - US",
    goal: "Conversion",
    conversionEvent: "purchases",
    eventGroup: "XDNEuttoJA",
    status: "Active",
    previousStatus: "Active",
    spend: "$1,234.56",
    impressions: "45,678",
    cmp: "$2.70",
    goalActions: "123",
    goalCpa: "$10.04",
    lastModified: new Date('2024-11-04T10:30:00'),
    accessType: "managed" // This is a managed campaign
  },
  {
    id: 2,
    campaign: "Q3 Product Archive",
    goal: "Awareness",
    conversionEvent: null,
    status: "Archived",
    previousStatus: "Archived",
    spend: "$892.34",
    impressions: "32,145",
    cpm: "$2.78",
    goalActions: "89",
    goalCpa: "$10.03",
    lastModified: new Date('2024-11-02T14:15:00'),
    accessType: "self" // This is your own campaign
  },
  {
    id: 3,
    campaign: "Kmart Upfront Holiday Total Plan 2025",
    goal: "Conversion",
    conversionEvent: "app_installs",
    eventGroup: "XDNEuttoJA",
    status: "Active",
    previousStatus: "Creative in review",
    spend: "$567.89",
    impressions: "15,234",
    cpm: "$3.73",
    goalActions: "45",
    goalCpa: "$12.62",
    lastModified: new Date('2024-11-03T09:45:00'),
    accessType: "managed" // This is a managed campaign
  },
  {
    id: 4,
    campaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025",
    goal: "Conversion",
    conversionEvent: "leads",
    eventGroup: "ABCEuttoJA",
    status: "Active",
    previousStatus: "Draft",
    spend: "$0.00",
    impressions: "0",
    cpm: "$0.00",
    goalActions: "0",
    goalCpa: "$0.00",
    lastModified: new Date('2024-11-01T16:20:00'),
    accessType: "self" // This is your own campaign
  },
  {
    id: 5,
    campaign: "Failed Campaign Test",
    goal: "Awareness",
    conversionEvent: null,
    status: "Deactivated",
    previousStatus: "Deactivated",
    spend: "$234.56",
    impressions: "8,901",
    cpm: "$2.63",
    goalActions: "12",
    goalCpa: "$19.55",
    lastModified: new Date('2024-10-30T11:10:00')
  },
  {
    id: 6,
    campaign: "Caldor Upfront Holiday 2025",
    goal: "Awareness",
    conversionEvent: null,
    status: "Active",
    previousStatus: "Draft",
    spend: "$0.00",
    impressions: "0",
    cpm: "$0.00",
    goalActions: "0",
    goalCpa: "$0.00",
    lastModified: new Date('2024-10-28T13:25:00')
  },
  {
    id: 7,
    campaign: "Black Friday 2023",
    goal: "Conversion",
    conversionEvent: "purchases",
    eventGroup: "XDNEuttoJA",
    status: "Ended",
    previousStatus: "Ended",
    spend: "$5,678.90",
    impressions: "123,456",
    cpm: "$4.60",
    goalActions: "789",
    goalCpa: "$7.20",
    lastModified: new Date('2024-10-25T08:30:00'),
    accessType: "managed" // This is a managed campaign
  },
  {
    id: 8,
    campaign: "Paused Brand Campaign",
    goal: "Awareness",
    conversionEvent: null,
    status: "Paused",
    previousStatus: "Active",
    spend: "$1,567.43",
    impressions: "67,890",
    cpm: "$2.31",
    goalActions: "156",
    goalCpa: "$10.05",
    lastModified: new Date('2024-10-29T15:45:00'),
    accessType: "self" // This is your own campaign
  },
  {
    id: 9,
    campaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM",
    goal: "Awareness",
    conversionEvent: null,
    status: "Not delivering",
    previousStatus: "Not delivering",
    spend: "$0.00",
    impressions: "0",
    cpm: "$0.00",
    goalActions: "0",
    goalCpa: "$0.00",
    lifetimeBudget: "$125,000",
    lastModified: new Date('2024-11-01T11:20:00'),
    accessType: "managed" // This is a managed campaign
  }
];

const adGroupsData = [
  { 
    id: 100, 
    campaign: "Agency | Vandelay Industries US | Radio Shack | DI | WTYW Discovery Q3'24-Q4'24 | Ad Buy - US", 
    parentCampaign: "Agency | Vandelay Industries US | Radio Shack | DI | WTYW Discovery Q3'24-Q4'24 | Ad Buy - US", 
    status: "Active", 
    spend: "$1,234.56", 
    impressions: "45,678", 
    cpm: "$2.70", 
    goalActions: "123", 
    goalCpa: "$10.04",
    accessType: "managed", // This is managed
    creatives: [
      { id: 10001, name: "Vandelay Industries Banner 1", type: "Billboard", status: "Active" },
      { id: 10002, name: "Vandelay Industries Banner 2", type: "Billboard", status: "Active" }
    ]
  },
  { 
    id: 1, 
    campaign: "Desktop Users - 25-34", 
    parentCampaign: "Holiday Sale 2024", 
    status: "Active", 
    spend: "$1,234.56", 
    impressions: "45,678", 
    cpm: "$2.70", 
    goalActions: "123", 
    goalCpa: "$10.04",
    accessType: "managed", // This is managed
    creatives: [
      { id: 101, name: "Desktop Banner 1", type: "Billboard", status: "Active" },
      { id: 102, name: "Desktop Banner 2", type: "Billboard", status: "Active" }
    ]
  },
  { 
    id: 2, 
    campaign: "Mobile Users - 25-34", 
    parentCampaign: "Holiday Sale 2024", 
    status: "Active", 
    spend: "$987.65", 
    impressions: "32,456", 
    cpm: "$3.04", 
    goalActions: "98", 
    goalCpa: "$10.08",
    accessType: "self", // This is your own
    creatives: [
      { id: 201, name: "Mobile Banner 1", type: "Marquee", status: "Active" },
      { id: 202, name: "Mobile Banner 2", type: "Marquee", status: "Active" },
      { id: 203, name: "Mobile Banner 3", type: "Marquee", status: "Active" }
    ]
  },
  { 
    id: 3, 
    campaign: "Young Adults - Sports Interest", 
    parentCampaign: "Holiday Sale 2024", 
    status: "Draft", 
    spend: "$2,345.67", 
    impressions: "67,890", 
    cpm: "$3.46", 
    goalActions: "234", 
    goalCpa: "$10.02",
    creatives: []
  },
  { 
    id: 4, 
    campaign: "ALL-ALL-US_RTG-S3LINE1_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277224)", 
    parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", 
    status: "Active", 
    spend: "$1,456.78", 
    impressions: "43,210", 
    cpm: "$3.37", 
    goalActions: "145", 
    goalCpa: "$10.05",
    creatives: [
      { id: 401, name: "Howdy S3 Home Banner 1", type: "Billboard", status: "Active" }
    ]
  },
  { 
    id: 5, 
    campaign: "Black Friday - Electronics", 
    parentCampaign: "Black Friday 2023", 
    status: "Ended", 
    spend: "$3,456.78", 
    impressions: "89,012", 
    cpm: "$3.88", 
    goalActions: "345", 
    goalCpa: "$10.02",
    creatives: [
      { id: 501, name: "Electronics Video 1", type: "In-content video", status: "Active" },
      { id: 502, name: "Electronics Video 2", type: "In-content video", status: "Active" },
      { id: 503, name: "Electronics Video 3", type: "In-content video", status: "Active" }
    ]
  },
  { 
    id: 6, 
    campaign: "Cyber Monday - Fashion", 
    parentCampaign: "Black Friday 2023", 
    status: "Ended", 
    spend: "$2,567.89", 
    impressions: "76,543", 
    cpm: "$3.35", 
    goalActions: "256", 
    goalCpa: "$10.03",
    creatives: [
      { id: 601, name: "Fashion Video 1", type: "In-content video", status: "Creative rejected" },
      { id: 602, name: "Fashion Video 2", type: "In-content video", status: "Active" }
    ]
  },
  { id: 7, campaign: "High Income - Luxury Goods", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,678.90", impressions: "54,321", cpm: "$3.09", goalActions: "167", goalCpa: "$10.05", creatives: [{ id: 701, name: "Luxury Banner 1", type: "Billboard", status: "Creative in review" }, { id: 702, name: "Luxury Banner 2", type: "Billboard", status: "Active" }] },
  { id: 8, campaign: "432264404_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_1 (TFL0277361)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$1,789.01", impressions: "58,765", cpm: "$3.04", goalActions: "178", goalCpa: "$10.06", creatives: [{ id: 801, name: "Brand Showcase Marquee 1", type: "Marquee", status: "Active" }, { id: 802, name: "Brand Showcase Marquee 2", type: "Marquee", status: "Active" }] },
  // Sterling Cooper US Campaign Ad Groups
  { id: 9001, campaign: "Video - TRC Targeted Base - AMARILLO (AMR) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90001, name: "DeLorean DMC-12 Amarillo 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9002, campaign: "Video - TRC Targeted Base - CORPUS CHRISTI (CC) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90002, name: "DeLorean DMC-12 Corpus Christi 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9003, campaign: "Video - TRC Targeted Base - DALLAS FT WRTH (DFW) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90003, name: "DeLorean DMC-12 Dallas Fort Worth 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9004, campaign: "Video - TRC Targeted Base - EL PASO(ELP) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90004, name: "DeLorean DMC-12 El Paso 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9005, campaign: "Video - TRC Targeted Base - FT SMTH, FYVLLE (FTS) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90005, name: "DeLorean DMC-12 Fort Smith Fayetteville 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9006, campaign: "Video - TRC Targeted Base - GRNWD, GRNVLLE (GRW) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90006, name: "DeLorean DMC-12 Greenwood Greenville 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9007, campaign: "Video - TRC Targeted Base - ALEXANDRIA (ALX) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90007, name: "DeLorean DMC-12 Alexandria 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9008, campaign: "Video - TRC Targeted Base - BMNT, PT ARTHR (BEA) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90008, name: "DeLorean DMC-12 Beaumont Port Arthur 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9009, campaign: "Video - TRC Targeted Base - BLXI, GLFPRT (BXI) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90009, name: "DeLorean DMC-12 Biloxi Gulfport 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9010, campaign: "Video - TRC Targeted Base - JONESBORO (JON) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90010, name: "DeLorean DMC-12 Jonesboro 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9011, campaign: "Video - TRC Targeted Base - LAREDO (LAR) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90011, name: "DeLorean DMC-12 Laredo 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9012, campaign: "Video - TRC Targeted Base - ODESS (ODS) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90012, name: "DeLorean DMC-12 Odessa 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9013, campaign: "Video - TRC Targeted Base - San Antonio (SAN) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90013, name: "DeLorean DMC-12 San Antonio 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9014, campaign: "Video - TRC Targeted Base - TULSA (TUL) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90014, name: "DeLorean DMC-12 Tulsa 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9015, campaign: "Video - TRC Targeted Base - AMARILLO(AMR) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90015, name: "DeLorean DMC-12 Amarillo 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9016, campaign: "Video - TRC Targeted Base - GRNWD, GRNVLLE (GRW) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90016, name: "DeLorean DMC-12 Greenwood Greenville 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9017, campaign: "Video - TRC Targeted Base - NEW ORLEANS (NOL) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90017, name: "DeLorean DMC-12 New Orleans 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9018, campaign: "Video - TRC Targeted Base - AUSTIN (AUS) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90018, name: "DeLorean DMC-12 Austin 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9019, campaign: "Video - TRC Targeted Base - ABILENE (ABI) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90019, name: "DeLorean DMC-12 Abilene 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9020, campaign: "Video - TRC Targeted Base - BATON ROUGE (BR) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90020, name: "DeLorean DMC-12 Baton Rouge 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9021, campaign: "Video - TRC Targeted Base - COL, TUP, W PNT (CMS) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90021, name: "DeLorean DMC-12 Columbus Tupelo West Point 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9022, campaign: "Video - TRC Targeted Base - HRLNGN(HRL) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90022, name: "DeLorean DMC-12 Harlingen 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9023, campaign: "Video - TRC Targeted Base - HTTSBRG(HAT) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90023, name: "DeLorean DMC-12 Hattiesburg 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9024, campaign: "Video - TRC Targeted Base - HOUSTON (HOU) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90024, name: "DeLorean DMC-12 Houston 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9025, campaign: "Video - TRC Targeted Base - JACKSON(JMS) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90025, name: "DeLorean DMC-12 Jackson 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9026, campaign: "Video - TRC Targeted Base - LAFAYETTE (LAL) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90026, name: "DeLorean DMC-12 Lafayette 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9027, campaign: "Video - TRC Targeted Base - LAKE CHARLES (LCH) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90027, name: "DeLorean DMC-12 Lake Charles 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9028, campaign: "Video - TRC Targeted Base - LTL RK, PN BLFF (LR) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90028, name: "DeLorean DMC-12 Little Rock Pine Bluff 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9029, campaign: "Video - TRC Targeted Base - LUBBOCK(LUB) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90029, name: "DeLorean DMC-12 Lubbock 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9030, campaign: "Video - TRC Targeted Base - Meridian (MER) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90030, name: "DeLorean DMC-12 Meridian 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9031, campaign: "Video - TRC Targeted Base - MONRO (MON) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90031, name: "DeLorean DMC-12 Monroe 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9032, campaign: "Video - TRC Targeted Base - NEW ORLEANS (NOL) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90032, name: "DeLorean DMC-12 New Orleans 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9033, campaign: "Video - TRC Targeted Base - OK CITY(OKC) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90033, name: "DeLorean DMC-12 Oklahoma City 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9034, campaign: "Video - TRC Targeted Base - SAN ANGELO (SAG) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90034, name: "DeLorean DMC-12 San Angelo 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9035, campaign: "Video - TRC Targeted Base - SHRMN (SHM) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90035, name: "DeLorean DMC-12 Sherman 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9036, campaign: "Video - TRC Targeted Base - SHREVEPORT (SHR) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90036, name: "DeLorean DMC-12 Shreveport 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9037, campaign: "Video - TRC Targeted Base - WCO, TMPL, KILN (WAC) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90037, name: "DeLorean DMC-12 Waco Temple Killeen 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9038, campaign: "Video - TRC Targeted Base - TYLER (TYL) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90038, name: "DeLorean DMC-12 Tyler 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9039, campaign: "Video - TRC Targeted Base - VICTORIA(VIC) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90039, name: "DeLorean DMC-12 Victoria 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9040, campaign: "Video - TRC Targeted Base - WCHT FLLS (WIF) 30s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90040, name: "DeLorean DMC-12 Wichita Falls 30s Video", type: "In-content video", status: "Active" }] },
  { id: 9041, campaign: "Video - TRC Targeted Base - ABILENE(ABI) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90041, name: "DeLorean DMC-12 Abilene 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9042, campaign: "Video - TRC Targeted Base - ALEXANDRIA (ALX) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90042, name: "DeLorean DMC-12 Alexandria 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9043, campaign: "Video - TRC Targeted Base - AUSTIN (AUS) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90043, name: "DeLorean DMC-12 Austin 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9044, campaign: "Video - TRC Targeted Base - COL, TUP, W PNT (CMS) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90044, name: "DeLorean DMC-12 Columbus Tupelo West Point 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9045, campaign: "Video - TRC Targeted Base - BATON ROUGE (BR) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90045, name: "DeLorean DMC-12 Baton Rouge 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9046, campaign: "Video - TRC Targeted Base - BMNT, PT ARTHR (BEA) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90046, name: "DeLorean DMC-12 Beaumont Port Arthur 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9047, campaign: "Video - TRC Targeted Base - BLXI, GLFPRT MS (BXI) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90047, name: "DeLorean DMC-12 Biloxi Gulfport 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9048, campaign: "Video - TRC Targeted Base - CORPUS CHRISTI (CC) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90048, name: "DeLorean DMC-12 Corpus Christi 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9049, campaign: "Video - TRC Targeted Base - DALLAS FT WRTH (DFW) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90049, name: "DeLorean DMC-12 Dallas Fort Worth 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9050, campaign: "Video - TRC Targeted Base - EL PASO (ELP) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90050, name: "DeLorean DMC-12 El Paso 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9051, campaign: "Video - TRC Targeted Base - FT SMTH, FYVLLE (FTS) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90051, name: "DeLorean DMC-12 Fort Smith Fayetteville 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9052, campaign: "Video - TRC Targeted Base - JACKSON(JMS) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90052, name: "DeLorean DMC-12 Jackson 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9053, campaign: "Video - TRC Targeted Base - HRLNGN, WESLACO (HRL) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90053, name: "DeLorean DMC-12 Harlingen Weslaco 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9054, campaign: "Video - TRC Targeted Base - HTTSBRG, LAUREL (HAT) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90054, name: "DeLorean DMC-12 Hattiesburg Laurel 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9055, campaign: "Video - TRC Targeted Base - HOUSTON(HOU) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90055, name: "DeLorean DMC-12 Houston 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9056, campaign: "Video - TRC Targeted Base - JONESBORO (JON) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90056, name: "DeLorean DMC-12 Jonesboro 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9057, campaign: "Video - TRC Targeted Base - LAFAYETTE (LAL) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90057, name: "DeLorean DMC-12 Lafayette 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9058, campaign: "Video - TRC Targeted Base - LAKE CHARLES (LCH) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90058, name: "DeLorean DMC-12 Lake Charles 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9059, campaign: "Video - TRC Targeted Base - LAREDO (LAR) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90059, name: "DeLorean DMC-12 Laredo 15s Video", type: "In-content video", status: "Active" }] },
  { id: 9060, campaign: "Video - TRC Targeted Base - LTL RK, PN BLFF (LR) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Not delivering", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90060, name: "DeLorean DMC-12 Little Rock Pine Bluff 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9061, campaign: "Video - TRC Targeted Base - LUBBOCK(LUB) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Not delivering", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90061, name: "DeLorean DMC-12 Lubbock 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9062, campaign: "Video - TRC Targeted Base - MERIDIAN (MER) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Not delivering", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90062, name: "DeLorean DMC-12 Meridian 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9063, campaign: "Video - TRC Targeted Base - MONRO(MON) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Not delivering", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90063, name: "DeLorean DMC-12 Monroe 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9064, campaign: "Video - TRC Targeted Base - ODESSA (ODS) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", startDate: new Date("2026-07-01"), budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90064, name: "DeLorean DMC-12 Odessa 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9065, campaign: "Video - TRC Targeted Base - OK CITY (OKC) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", startDate: new Date("2026-07-01"), budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90065, name: "DeLorean DMC-12 Oklahoma City 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9066, campaign: "Video - TRC Targeted Base - SAN ANGELO (SAG) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", startDate: new Date("2026-07-01"), budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90066, name: "DeLorean DMC-12 San Angelo 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9067, campaign: "Video - TRC Targeted Base - San Antonio (SAN) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", startDate: new Date("2026-07-01"), budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90067, name: "DeLorean DMC-12 San Antonio 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9068, campaign: "Video - TRC Targeted Base - SHRMN (SHM) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", startDate: new Date("2026-07-01"), budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90068, name: "DeLorean DMC-12 Sherman 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9069, campaign: "Video - TRC Targeted Base - VICTORIA(VIC) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", startDate: new Date("2026-07-01"), budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90069, name: "DeLorean DMC-12 Victoria 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9070, campaign: "Video - TRC Targeted Base - SHREVEPORT (SHR) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Paused", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90070, name: "DeLorean DMC-12 Shreveport 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9071, campaign: "Video - TRC Targeted Base - TULSA (TUL) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Paused", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90071, name: "DeLorean DMC-12 Tulsa 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9072, campaign: "Video - TRC Targeted Base - TYLER, LONGVIEW (TYL) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Paused", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90072, name: "DeLorean DMC-12 Tyler Longview 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9073, campaign: "Video - TRC Targeted Base - WCO, TMPL, KILN (WAC) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Paused", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90073, name: "DeLorean DMC-12 Waco Temple Killeen 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9074, campaign: "Video - TRC Targeted Base - WCHT FLLS, LWTN (WIF) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Paused", budget: "$1,630.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90074, name: "DeLorean DMC-12 Wichita Falls Lawton 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 10, campaign: "432264404_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_1 (TFL0277361)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 1001, name: "Tech Banner 1", type: "Marquee", status: "Creative rejected" }, { id: 1002, name: "Tech Banner 2", type: "Marquee", status: "Active" }, { id: 1003, name: "Tech Banner 3", type: "Marquee", status: "Active" }] },
  { id: 11, campaign: "Cart Abandoners - Retarget", parentCampaign: "Paused Brand Campaign", status: "Active", spend: "$892.34", impressions: "29,876", cpm: "$2.99", goalActions: "89", goalCpa: "$10.03", creatives: [{ id: 1101, name: "Retarget Banner 1", type: "Billboard", status: "Active" }, { id: 1102, name: "Retarget Banner 2", type: "Billboard", status: "Active" }] },
  { id: 12, campaign: "Website Visitors - Retarget", parentCampaign: "Paused Brand Campaign", status: "Not delivering", spend: "$1,123.45", impressions: "38,901", cpm: "$2.89", goalActions: "112", goalCpa: "$10.03", creatives: [{ id: 1201, name: "Website Banner 1", type: "Marquee", status: "Creative in review" }] },
  { id: 13, campaign: "High Value Customers - Lookalike", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,567.89", impressions: "49,234", cpm: "$3.18", goalActions: "156", goalCpa: "$10.05", creatives: [{ id: 1301, name: "Lookalike Banner 1", type: "Billboard", status: "Active" }, { id: 1302, name: "Lookalike Banner 2", type: "Billboard", status: "Active" }, { id: 1303, name: "Lookalike Banner 3", type: "Billboard", status: "Creative in review" }] },
  { id: 14, campaign: "Frequent Buyers - Lookalike", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,345.67", impressions: "42,108", cpm: "$3.20", goalActions: "134", goalCpa: "$10.04", creatives: [{ id: 1401, name: "Buyers Banner 1", type: "Billboard", status: "Creative rejected" }, { id: 1402, name: "Buyers Banner 2", type: "Billboard", status: "Active" }] },
  { id: 15, campaign: "Sports Fans - Weekend", parentCampaign: "Failed Campaign Test", status: "Paused", spend: "$678.90", impressions: "21,567", cpm: "$3.15", goalActions: "67", goalCpa: "$10.13" },
  { id: 16, campaign: "ALL-ALL-US_RTG-S3LINE2_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277228)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$987.65", impressions: "31,234", cpm: "$3.16", goalActions: "98", goalCpa: "$10.08", creatives: [{ id: 1601, name: "Howdy S3 Home Banner 2", type: "Billboard", status: "Active" }] },
  { id: 30, campaign: "ALL-ALL-US_RTG-S3LINE3_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277233)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3001, name: "Howdy S3 Home Banner 3", type: "Billboard", status: "Active" }] },
  { id: 31, campaign: "ALL-ALL-US_RTG-S3LINE4_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277235)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3101, name: "Howdy S3 Home Banner 4", type: "Billboard", status: "Active" }] },
  { id: 32, campaign: "ALL-ALL-US_RTG-S3LINE5_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277240)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3201, name: "Howdy S3 Home Banner 5", type: "Billboard", status: "Active" }] },
  { id: 33, campaign: "ALL-ALL-US_RTG-S3LINE7_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277243)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3301, name: "Howdy S3 Home Banner 7", type: "Billboard", status: "Active" }] },
  { id: 34, campaign: "ALL-ALL-US_RTG-S3LINE8_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277249)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3401, name: "Howdy S3 Home Banner 8", type: "Billboard", status: "Active" }] },
  { id: 35, campaign: "ALL-ALL-US_RTG-S3LINE9_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277252)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3501, name: "Howdy S3 Home Banner 9", type: "Billboard", status: "Active" }] },
  { id: 36, campaign: "ALL-ALL-US_RTG-S3LINE10_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277256)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3601, name: "Howdy S3 Home Banner 10 Nov", type: "Billboard", status: "Active" }] },
  { id: 37, campaign: "ALL-ALL-US_RTG-S3LINE10_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - October (TFL0277257)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Scheduled", startDate: new Date("2026-07-01"), spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3701, name: "Howdy S3 Home Banner 10 Oct", type: "Billboard", status: "Draft" }] },
  { id: 38, campaign: "ALL-ALL-US_RTG-S3LINE11_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277259)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3801, name: "Howdy S3 Home Banner 11", type: "Billboard", status: "Active" }] },
  { id: 39, campaign: "ALL-ALL-US_RTG-S3LINE12_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - October (TFL0277263)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Scheduled", startDate: new Date("2026-07-01"), spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3901, name: "Howdy S3 Home Banner 12 Oct", type: "Billboard", status: "Draft" }] },
  { id: 40, campaign: "ALL-ALL-US_RTG-S3LINE20_CPM_HOME-SPOTLIGHT_ALL_ROKU_NA_ROT-G_NA- November (TFL0277299)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cmp: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 4001, name: "Howdy S3 Home Spotlight", type: "Billboard", status: "Active" }] },
  { id: 17, campaign: "Urban Areas - Commute Hours", parentCampaign: "Q3 Product Archive", status: "Active", spend: "$1,234.56", impressions: "39,876", cpm: "$3.10", goalActions: "123", goalCpa: "$10.04", creatives: [{ id: 1701, name: "Urban Video 1", type: "In-content video", status: "Active" }, { id: 1702, name: "Urban Video 2", type: "In-content video", status: "Active" }, { id: 1703, name: "Urban Video 3", type: "In-content video", status: "Creative in review" }] },
  { id: 18, campaign: "Suburban Areas - Evening", parentCampaign: "Q3 Product Archive", status: "Active", spend: "$1,456.78", impressions: "46,543", cpm: "$3.13", goalActions: "145", goalCpa: "$10.05", creatives: [{ id: 1801, name: "Suburban Banner 1", type: "Billboard", status: "Active" }] },
  { id: 19, campaign: "432015535_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_2 (TFL0277363)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Scheduled", startDate: new Date("2026-07-01"), spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 1901, name: "Brand Showcase Marquee 2", type: "Marquee", status: "Draft" }] },
  { id: 25, campaign: "432015526_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_3 (TFL0277366)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2501, name: "Brand Showcase Marquee 3", type: "Marquee", status: "Active" }] },
  { id: 26, campaign: "432603873_BILLABLE_Theme_BETA_Sponsorship Display_Theme (TFL0277386)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Not delivering", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2601, name: "Theme Sponsorship Display", type: "Billboard", status: "Creative in review" }] },
  { id: 27, campaign: "432015559_Season's Streamings_Native Ads (Marquee Ad Video)_TKO_Hourly_Primetime 7-11pm UTZ (TFL0288536)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2701, name: "Season's Streamings Marquee Video", type: "Marquee", status: "Active" }] },
  { id: 28, campaign: "432604569_Season's Streamings_Season's Streaming_Native Ads (Marquee + Billboard) (TFL0288538)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Scheduled", startDate: new Date("2026-07-01"), spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2801, name: "Season's Streamings Marquee + Billboard", type: "Billboard", status: "Draft" }] },
  { id: 29, campaign: "432262595_Season's Streamings_Season's Streaming_Premiere Tile_1A (TFL0288539)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2901, name: "Season's Streamings Premiere Tile", type: "Billboard", status: "Active" }] },
  { id: 21, campaign: "Electronics Cross-sell", parentCampaign: "Black Friday 2023", status: "Active", spend: "$789.01", impressions: "25,432", cpm: "$3.10", goalActions: "78", goalCpa: "$10.12", creatives: [{ id: 2101, name: "Electronics Banner 1", type: "Billboard", status: "Active" }] },
  { id: 22, campaign: "Accessories Cross-sell", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$654.32", impressions: "21,098", cpm: "$3.10", goalActions: "65", goalCpa: "$10.07", creatives: [{ id: 2201, name: "Accessories Video 1", type: "In-content video", status: "Creative in review" }, { id: 2202, name: "Accessories Video 2", type: "In-content video", status: "Active" }, { id: 2203, name: "Accessories Video 3", type: "In-content video", status: "Active" }, { id: 2204, name: "Accessories Video 4", type: "In-content video", status: "Active" }] },
  { id: 23, campaign: "Premium Products Upsell", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,098.76", impressions: "35,467", cpm: "$3.10", goalActions: "109", goalCpa: "$10.08", creatives: [{ id: 2301, name: "Premium Creative 1", type: "In-content video", status: "Active" }, { id: 2302, name: "Premium Creative 2", type: "In-content video", status: "Active" }] },
  { id: 24, campaign: "432015535_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_2 (TFL0277363)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2401, name: "Brand Showcase Marquee 2", type: "Marquee", status: "Creative in review" }] },
  { id: 25, campaign: "432015526_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_3 (TFL0277366)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2501, name: "Brand Showcase Marquee 3", type: "Marquee", status: "Draft" }] },
  { id: 26, campaign: "432603873_BILLABLE_Theme_BETA_Sponsorship Display_Theme (TFL0277386)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2601, name: "Theme Sponsorship Billboard", type: "Billboard", status: "Draft" }] },
  { id: 27, campaign: "432015559_Season's Streamings_Native Ads (Marquee Ad Video)_TKO_Hourly_Primetime 7-11pm UTZ (TFL0288536)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2701, name: "Season's Streamings Marquee Video", type: "Marquee", status: "Draft" }] },
  { id: 28, campaign: "432604569_Season's Streamings_Season's Streaming_Native Ads (Marquee + Billboard) (TFL0288538)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2801, name: "Season's Streamings Combined", type: "Billboard", status: "Draft" }] },
  { id: 29, campaign: "432262595_Season's Streamings_Season's Streaming_Premiere Tile_1A (TFL0288539)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2901, name: "Premiere Tile 1A", type: "Marquee", status: "Draft" }] },
  { id: 37, campaign: "432603879_Season's Streamings_Season's Streaming_In-Destination Banner Ad_AV (TFL0288540)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3701, name: "In-Destination Banner AV", type: "Billboard", status: "Draft" }] },
  { id: 38, campaign: "432603861_Season's Streamings_Roku Original Premiere_Native Ads (Marquee + Billboard) (TFL0288546)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3801, name: "Roku Premiere Native Ads", type: "Marquee", status: "Draft" }] },
  { id: 39, campaign: "432015130_Season's Streamings_Roku Original Premiere_Title Card_AV (TFL0288547)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3901, name: "Title Card AV", type: "Billboard", status: "Draft" }] },
  { id: 40, campaign: "432603888_Season's Streamings_Roku Original Premiere_Roku Channel Tile_AV (TFL0288548)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 4001, name: "Roku Channel Tile AV", type: "Marquee", status: "Draft" }] },
  { id: 41, campaign: "432604584_Season's Streamings_Roku Original Premiere_Pause Ad_AV (TFL0288549)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 4101, name: "Pause Ad AV", type: "Billboard", status: "Draft" }] },
  { id: 42, campaign: "432603867_Season's Streamings_Roku Original Premiere_Sponsorship Video_Roku Channel_Targeted Base (TFL0288550)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 4201, name: "Sponsorship Video Targeted", type: "Marquee", status: "Draft" }] },
  { id: 43, campaign: "432604602_Season's Streamings_Roku Original Premiere_Native Ads (Spotlight Ad)_Hourly Takeover_AV (TFL0288551)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 4301, name: "Spotlight Ad Hourly Takeover", type: "Billboard", status: "Draft" }] },
  { id: 44, campaign: "432603894_Season's Streamings_InContent Overlay_OKtoCheckout_MLM Watch Along Overlay (TFL0289193)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 4401, name: "Watch Along Overlay", type: "Marquee", status: "Draft" }] },

];

const creativesData = [
  {
    id: 1,
    campaign: "Holiday Sale 2024",
    status: "Active",
    spend: "$4,567.89",
    impressions: "123,456",
    cpm: "$3.70",
    goalActions: "567",
    goalCpa: "$8.05",
    creatives: [
      { id: 101, name: "Holiday Banner 1", type: "Marquee", size: "728x90", status: "Active" },
      { id: 102, name: "Holiday Video 1", type: "In-content video", size: "16:9", status: "Active" },
      { id: 103, name: "Holiday Banner 2", type: "Billboard", size: "300x250", status: "Creative in review" }
    ]
  },
  {
    id: 2,
    campaign: "Black Friday 2023",
    status: "Ended",
    spend: "$6,024.67",
    impressions: "165,555",
    cpm: "$3.64",
    goalActions: "601",
    goalCpa: "$10.02",
    creatives: [
      { id: 201, name: "Black Friday Special", type: "Billboard", size: "970x250", status: "Creative rejected" },
      { id: 202, name: "BF Video Ad", type: "In-content video", size: "16:9", status: "Creative rejected" }
    ]
  },
  {
    id: 3,
    campaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025",
    status: "Draft",
    spend: "$0.00",
    impressions: "0",
    cpm: "$0.00",
    goalActions: "0",
    goalCpa: "$0.00",
    creatives: [
      { id: 301, name: "Spring Collection Banner", type: "Marquee", size: "728x90", status: "Draft" },
      { id: 302, name: "Spring Launch Video", type: "In-content video", size: "9:16", status: "Draft" },
      { id: 303, name: "Spring Mobile Ad", type: "Billboard", size: "320x50", status: "Draft" }
    ]
  }
];

// Helper function to generate chart data based on date range
const generateChartData = (startDate, endDate, primaryColor, secondaryColor) => {
  const days = [];
  const impressionsData = [];
  const spendData = [];
  
  // If no dates selected, show sample data for last 7 days
  const end = endDate || new Date();
  const start = startDate || new Date(end.getTime() - 6 * 24 * 60 * 60 * 1000);
  
  const currentDate = new Date(start);
  while (currentDate <= end) {
    const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    const dayDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    days.push(`${dayName} ${dayDate}`);
    
    // Generate sample data
    impressionsData.push(Math.floor(Math.random() * 50000) + 10000);
    spendData.push(Math.floor(Math.random() * 1000) + 200);
    
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  // Convert hex colors to rgba
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  
  return {
    labels: days,
    datasets: [
      {
        label: 'Impressions',
        data: impressionsData,
        backgroundColor: hexToRgba(primaryColor, 0.8),
        borderColor: hexToRgba(primaryColor, 1),
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'Spend ($)',
        data: spendData,
        backgroundColor: hexToRgba(secondaryColor, 0.8),
        borderColor: hexToRgba(secondaryColor, 1),
        borderWidth: 1,
        yAxisID: 'y1',
      }
    ]
  };
};

export default function App() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('Performance');
  const [dateRange, setDateRange] = useState('Last 7 days');
  const [statusFilter, setStatusFilter] = useState([
    'Active', 
    'Deactivated', 
    'Draft', 
    'Ended',
    'Not delivering', 
    'Paused',
    'Scheduled'
  ]);
  const [collapsedCampaigns, setCollapsedCampaigns] = useState(new Set());
  const [campaigns, setCampaigns] = useState(campaignsData);
  const [adGroups, setAdGroups] = useState(adGroupsData);
  const [creatives, setCreatives] = useState(creativesData);
  const [openRows, setOpenRows] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [adGroupsDrawerOpen, setAdGroupsDrawerOpen] = useState(false);
  const [multipleAdGroupsInfoDrawerOpen, setMultipleAdGroupsInfoDrawerOpen] = useState(false);
  const [targetCampaignForMultipleAdGroups, setTargetCampaignForMultipleAdGroups] = useState(null);
  const [multipleAdGroupNameError, setMultipleAdGroupNameError] = useState(false);
  const [creativesDrawerOpen, setCreativesDrawerOpen] = useState(false);
  const [assignCreativeDrawerOpen, setAssignCreativeDrawerOpen] = useState(false);
  const [selectedCreativeTypes, setSelectedCreativeTypes] = useState([]);
  const [selectedCreativeStatuses, setSelectedCreativeStatuses] = useState([]);
  const [selectedCreativesForAssignment, setSelectedCreativesForAssignment] = useState([]);
  const [creativeSearchTerm, setCreativeSearchTerm] = useState('');
  const [selectedAdGroupForCreatives, setSelectedAdGroupForCreatives] = useState(null);
  const [adGroupAudienceDrawerOpen, setAdGroupAudienceDrawerOpen] = useState(false);
  const [adGroupAudienceSelection, setAdGroupAudienceSelection] = useState("include");
  const [adGroupSelectedAgeRanges, setAdGroupSelectedAgeRanges] = useState({
    '18-24': false,
    '25-34': false,
    '35-44': false,
    '45-54': false,
    '55+': false
  });
  const [adGroupSelectedIncomeRanges, setAdGroupSelectedIncomeRanges] = useState({
    'Under $50k': false,
    '$50-$100k': false,
    '$100-$150k': false,
    '$150-$200k': false,
    '$200k+': false
  });
  const [visibleFilters, setVisibleFilters] = useState(['status']);
  const [filterMenuAnchor, setFilterMenuAnchor] = useState(null);
  const [statusSelectOpen, setStatusSelectOpen] = useState(false);
  const [creativeTypeSelectOpen, setCreativeTypeSelectOpen] = useState(false);
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'list', 'details', or 'reports'
  const [selectedCampaignForDetails, setSelectedCampaignForDetails] = useState(null);
  const [selectedAdGroupForDetails, setSelectedAdGroupForDetails] = useState(null);
  
  // Reports view state
  const [reportsSelectedCampaigns, setReportsSelectedCampaigns] = useState([]);
  const [reportsSelectedCreatives, setReportsSelectedCreatives] = useState([]);
  const [reportsStartDate, setReportsStartDate] = useState(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
  const [reportsEndDate, setReportsEndDate] = useState(new Date());
  const [reportsSelectedTab, setReportsSelectedTab] = useState(0); // 0: Delivery & Engagement, 1: Location, 2: Creative, 3: Placement
  const [summaryMenuAnchor, setSummaryMenuAnchor] = useState(null);
  const [visibleSummarySections, setVisibleSummarySections] = useState({
    impression: true,
    spend: true,
    engagement: true,
  });
  const handleSummaryMenuOpen = (event) => setSummaryMenuAnchor(event.currentTarget);
  const handleSummaryMenuClose = () => setSummaryMenuAnchor(null);
  const handleSummarySectionToggle = (key) => setVisibleSummarySections(prev => ({ ...prev, [key]: !prev[key] }));
  const [reportsToolbarMenuAnchor, setReportsToolbarMenuAnchor] = useState(null);
  const [demographicMenuAnchor, setDemographicMenuAnchor] = useState(null);
  const [visibleDemographicSections, setVisibleDemographicSections] = useState({
    ageDistribution: true,
    gender: true,
    maritalStatus: true,
    userEngagement: true,
  });
  const handleDemographicSectionToggle = (key) => setVisibleDemographicSections(prev => ({ ...prev, [key]: !prev[key] }));
  const [sponsorshipInsightsMenuAnchor, setSponsorshipInsightsMenuAnchor] = useState(null);
  const [visibleSponsorshipCharts, setVisibleSponsorshipCharts] = useState({
    nonSponsorshipPie: true,
    videoSponsorshipPie: true,
    brandedExperience: true,
    nativeAdsBreakout: true,
  });
  const handleSponsorshipChartToggle = (key) => setVisibleSponsorshipCharts(prev => ({ ...prev, [key]: !prev[key] }));
  const [overIndexMenuAnchor, setOverIndexMenuAnchor] = useState(null);
  const [visibleOverIndexColumns, setVisibleOverIndexColumns] = useState({
    metric: true,
    baseline: true,
    index: true,
  });
  const handleOverIndexColumnToggle = (key) => setVisibleOverIndexColumns(prev => ({ ...prev, [key]: !prev[key] }));
  const [showTenureInsight, setShowTenureInsight] = useState(false);
  const [ageDistributionExpanded, setAgeDistributionExpanded] = useState(false);
  const [maritalStatusExpanded, setMaritalStatusExpanded] = useState(false);
  const [genderExpanded, setGenderExpanded] = useState(false);
  const [showMaritalInsight, setShowMaritalInsight] = useState(false);
  const [reportsFilterMenuAnchor, setReportsFilterMenuAnchor] = useState(null);
  const [visibleReportFilters, setVisibleReportFilters] = useState({
    campaigns: false,
    creatives: false,
  });
  const [reportsCampaignsFilterOpen, setReportsCampaignsFilterOpen] = useState(false);
  const [reportsCreativesFilterOpen, setReportsCreativesFilterOpen] = useState(false);
  
  const [selectedTab, setSelectedTab] = useState(0); // 0: Campaigns, 1: Ad groups, 2: Creatives
  const [selectedCampaigns, setSelectedCampaigns] = useState({
    0: [], // Campaigns tab selections
    1: [], // Ad groups tab selections
    2: []  // Creatives tab selections
  });
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(true);
  const [isLoadingAdGroupDetails, setIsLoadingAdGroupDetails] = useState(false);
  const [automaticPlacement, setAutomaticPlacement] = useState(true);
  const [placementToggle, setPlacementToggle] = useState(true);
  const [excludeMatureContent, setExcludeMatureContent] = useState(false);
  const [genrePlacements, setGenrePlacements] = useState({
    'Action & Adventure': 'include',
    'Comedy': 'include',
    'Drama': 'include',
    'Education': 'include',
    'Holiday': 'include',
    'Lifestyle': 'include',
    'Music': 'include',
    'News': 'include',
    'Reality & Pop culture': 'include',
    'Romance': 'include',
    'Sci-Fi': 'include',
    'Sports': 'include'
  });
  const [creativesMenuAnchorEl, setCreativesMenuAnchorEl] = useState(null);
  const [showCreativeGridOverlay, setShowCreativeGridOverlay] = useState(false);
  const [creativeGridSortConfig, setCreativeGridSortConfig] = useState({ key: null, direction: 'asc' });
  const [creativeGridActiveTab, setCreativeGridActiveTab] = useState(0);
  const [selectedCreativeType, setSelectedCreativeType] = useState(null);
  const [selectedCampaignType, setSelectedCampaignType] = useState(null);
  const [selectedAction, setSelectedAction] = useState('none');
  const [impressionTags, setImpressionTags] = useState(['']);
  const [creativeDrawerTab, setCreativeDrawerTab] = useState(0);
  const [selectedCreativeFile, setSelectedCreativeFile] = useState(null);
  const [editCreativeDrawerOpen, setEditCreativeDrawerOpen] = useState(false);
  const [selectedCreativeToEdit, setSelectedCreativeToEdit] = useState(null);
  const [specialCategories, setSpecialCategories] = useState({
    credit: false,
    employment: false,
    housing: false
  });
  const [selectedConversionEvent, setSelectedConversionEvent] = useState('');
  const [selectedEventGroup, setSelectedEventGroup] = useState('');
  const [budgetConversionEvent, setBudgetConversionEvent] = useState('app_installs');
  const [budgetEventGroup, setBudgetEventGroup] = useState('XD8AAI1eMy');
  const [newAdGroupName, setNewAdGroupName] = useState('');
  const [adGroupStatusSort, setAdGroupStatusSort] = useState({}); // Track status sort per campaign group
  const adGroupNameFieldRef = useRef(null);
  const multipleAdGroupsFieldRef = useRef(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
  const [switchConfirmDialogOpen, setSwitchConfirmDialogOpen] = useState(false);
  const [pendingSwitchChange, setPendingSwitchChange] = useState(null); // { id, isChecked }
  const [campaignName, setCampaignName] = useState(() => {
    const now = new Date();
    return `Campaign-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
  });
  
  // Dayparting state variables
  const [selectedTimeSlots, setSelectedTimeSlots] = useState(new Set());
  const [tempDayparting, setTempDayparting] = useState(new Set()); // For campaign creation/edit drawer
  
  // Get dayparting for a specific campaign or ad group
  const getDayparting = (type, id) => {
    if (type === 'campaign') {
      const campaign = campaigns.find(c => c.id === id);
      return campaign?.dayparting ? new Set(campaign.dayparting) : new Set();
    } else if (type === 'adGroup') {
      const adGroup = adGroups.find(ag => ag.id === id);
      return adGroup?.dayparting ? new Set(adGroup.dayparting) : new Set();
    }
    return new Set();
  };

  // Save dayparting for a specific campaign or ad group
  const saveDayparting = (type, id, timeSlots) => {
    const timeSlotsArray = Array.from(timeSlots);
    
    if (type === 'campaign') {
      setCampaigns(prev => prev.map(campaign => 
        campaign.id === id 
          ? { ...campaign, dayparting: timeSlotsArray }
          : campaign
      ));
    } else if (type === 'adGroup') {
      setAdGroups(prev => prev.map(adGroup => 
        adGroup.id === id 
          ? { ...adGroup, dayparting: timeSlotsArray }
          : adGroup
      ));
    }
  };
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [mouseDownCell, setMouseDownCell] = useState(null);
  const [drawerContext, setDrawerContext] = useState('campaign'); // 'campaign' or 'locations'
  const [locationTargetType, setLocationTargetType] = useState('include'); // 'include' or 'exclude'
  const [selectedLocationType, setSelectedLocationType] = useState(''); // '', 'states', 'dma', 'postal'
  const [campaignEditDrawerOpen, setCampaignEditDrawerOpen] = useState(false);
  const [scheduleEditDrawerOpen, setScheduleEditDrawerOpen] = useState(false);
  const [placementDrawerOpen, setPlacementDrawerOpen] = useState(false);
  const [editDashboardDrawerOpen, setEditDashboardDrawerOpen] = useState(false);
  const [editDashboardTab, setEditDashboardTab] = useState(0);
  const [reportCardVisibility, setReportCardVisibility] = useState({
    summary: true,
    dailyImpressionsSpend: true,
    adGroupOverview: true,
    frequency: true,
    darMetrics: true,
    creatives: true,
    rokuChannelDelivery: true,
    channelReport: true,
    topTrcContentTitles: true,
    liveTvChannels: true,
    sponsorshipInsights: true,
    audienceInsights: true,
    demographic: true,
    topOverIndexingFeatures: true,
    accountTenure: true,
  });
  const [reportTabVisibility, setReportTabVisibility] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
  });
  const [savedCardVisibility, setSavedCardVisibility] = useState(null);
  const [savedTabVisibility, setSavedTabVisibility] = useState(null);
  const [exportDrawerOpen, setExportDrawerOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState('powerpoint');
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const profileMenuOpen = Boolean(profileMenuAnchorEl);
  const [selectedProfileOption, setSelectedProfileOption] = useState('Managed Service User');
  const [activeNavItem, setActiveNavItem] = useState(''); // No active nav on landing page
  const [accountPickerAnchor, setAccountPickerAnchor] = useState(null);
  const [accountSearchQuery, setAccountSearchQuery] = useState('');
  const [selectedAccount, setSelectedAccount] = useState({ org: 'Omni Partners', account: "Wally's Windows" });
  const accountOrgs = [
    { name: 'Apple Inc.', accounts: ['iPhone Launch 2026', 'Apple TV+ Originals', 'MacBook Pro Campaign', 'iPad Education', 'Apple Music Sessions', 'AirPods Max', 'Apple Watch Series', 'iCloud Storage Promo', 'Vision Pro Launch', 'Apple Card Rewards'] },
    { name: 'Google', accounts: ['Pixel 10 Launch', 'Google Cloud Platform', 'YouTube Premium', 'Google Workspace', 'Nest Home Devices', 'Android Auto', 'Google Fi Mobile', 'Gemini AI Campaign', 'Google Maps Business', 'Chrome Enterprise', 'Google One Storage', 'Fitbit Wellness'] },
    { name: 'Microsoft', accounts: ['Surface Pro Campaign', 'Xbox Game Pass', 'Microsoft 365 Business', 'Azure Cloud Services', 'Copilot AI', 'LinkedIn Premium', 'Teams Enterprise', 'Windows 12 Launch'] },
    { name: 'Amazon', accounts: ['Prime Video Originals', 'AWS Cloud Solutions', 'Alexa Smart Home', 'Amazon Fresh', 'Kindle Unlimited', 'Ring Security', 'Amazon Business', 'Prime Day 2026', 'Whole Foods Market', 'Amazon Pharmacy', 'Twitch Streaming', 'MGM Studios', 'Audible Originals', 'Amazon Music'] },
    { name: 'Meta Platforms', accounts: ['Instagram Shopping', 'WhatsApp Business', 'Meta Quest VR', 'Facebook Marketplace', 'Threads Social', 'Horizon Worlds'] },
    { name: 'Netflix', accounts: ['Netflix Originals Q1', 'Netflix Games', 'Netflix Ad Tier', 'Netflix Sports', 'Netflix Live Events'] },
    { name: 'Walt Disney Company', accounts: ['Disney+ Streaming', 'Marvel Studios', 'Star Wars Franchise', 'Pixar Animation', 'ESPN+', 'Disney Parks', 'Hulu Originals', 'ABC Network', 'National Geographic', 'Disney Cruise Line', 'Disney Store', '20th Century Studios'] },
    { name: 'Tesla', accounts: ['Model S Performance', 'Cybertruck Launch', 'Tesla Energy', 'Full Self-Driving', 'Tesla Semi', 'Powerwall Home', 'Model Y Campaign', 'Tesla Insurance'] },
    { name: 'Samsung Electronics', accounts: ['Galaxy S26 Launch', 'Samsung TV Neo QLED', 'Galaxy Watch Ultra', 'Samsung Appliances', 'Galaxy Buds Pro', 'Samsung Business', 'Galaxy Z Fold', 'Bespoke Home', 'Samsung Health'] },
    { name: 'Coca-Cola Company', accounts: ['Coca-Cola Classic', 'Sprite Refresh', 'Fanta Flavors', 'Minute Maid', 'Dasani Water', 'Powerade Sports', 'Costa Coffee', 'Simply Juices', 'Smartwater', 'Topo Chico', 'Fairlife Milk', 'Bodyarmor Sports'] },
    { name: 'PepsiCo', accounts: ['Pepsi Max', 'Mountain Dew', 'Lay\'s Chips', 'Gatorade', 'Doritos', 'Tropicana', 'Quaker Oats', 'Bubly Sparkling', 'Cheetos', 'SodaStream', 'Rockstar Energy'] },
    { name: 'Nike', accounts: ['Air Max 2026', 'Nike Running', 'Jordan Brand', 'Nike Training', 'Nike Basketball', 'Nike Football', 'Nike Women', 'SNKRS App', 'Nike Sustainability'] },
    { name: 'Procter & Gamble', accounts: ['Tide Laundry', 'Gillette Razors', 'Pampers Baby', 'Crest Oral Care', 'Old Spice', 'Olay Skincare', 'Downy Fabric', 'Febreze Home', 'Bounty Paper', 'Charmin Bath', 'Head & Shoulders', 'Swiffer Clean', 'Dawn Dish', 'Oral-B Electric', 'SK-II Luxury'] },
    { name: 'Johnson & Johnson', accounts: ['Tylenol Pain Relief', 'Band-Aid Brand', 'Neutrogena Skin', 'Aveeno Wellness', 'Listerine Oral', 'Johnson\'s Baby'] },
    { name: 'Unilever', accounts: ['Dove Body Care', 'Axe Body Spray', 'Ben & Jerry\'s', 'Hellmann\'s Mayo', 'Knorr Cooking', 'Degree Deodorant', 'Vaseline Lotion', 'Lipton Tea', 'TRESemme Hair', 'Breyers Ice Cream'] },
    { name: 'Toyota Motor', accounts: ['Camry 2026', 'RAV4 Adventure', 'Toyota Tacoma', 'Prius Hybrid', 'Lexus Luxury', 'Toyota Trucks', 'GR Performance', 'Toyota Safety'] },
    { name: 'General Motors', accounts: ['Chevrolet Silverado', 'GMC Sierra', 'Cadillac EV', 'Buick Envista', 'Corvette Sports', 'Hummer EV'] },
    { name: 'Ford Motor Company', accounts: ['F-150 Lightning', 'Mustang Mach-E', 'Bronco Adventure', 'Ford Explorer', 'Lincoln Luxury', 'Ford Pro Commercial', 'Maverick Compact'] },
    { name: 'Walmart', accounts: ['Walmart+ Membership', 'Walmart Grocery', 'Sam\'s Club', 'Walmart Health', 'Walmart Connect Ads', 'Great Value Brand', 'Walmart Fashion'] },
    { name: 'Target Corporation', accounts: ['Target Circle Rewards', 'Target Home', 'Cat & Jack Kids', 'Good & Gather Food', 'Target Beauty', 'Target Tech'] },
    { name: 'JPMorgan Chase', accounts: ['Chase Sapphire', 'Chase Business Banking', 'JP Morgan Wealth', 'Chase Freedom Card', 'Chase Auto Loans', 'Chase Mortgage'] },
    { name: 'Bank of America', accounts: ['BofA Preferred Rewards', 'Merrill Lynch Invest', 'BofA Business', 'Erica Virtual Assistant'] },
    { name: 'Goldman Sachs', accounts: ['Marcus Personal Loans', 'Goldman Asset Mgmt', 'Apple Card Partnership'] },
    { name: 'Visa Inc.', accounts: ['Visa Signature', 'Visa Business Solutions', 'Visa Checkout', 'Visa Direct Payments', 'Visa Infinite'] },
    { name: 'Mastercard', accounts: ['Mastercard Priceless', 'Mastercard Business', 'Mastercard Travel', 'World Elite Card'] },
    { name: 'American Express', accounts: ['Amex Platinum Card', 'Amex Gold Card', 'Amex Business', 'Amex Travel', 'Amex Membership Rewards', 'Centurion Lounge'] },
    { name: 'Intel Corporation', accounts: ['Intel Core Ultra', 'Intel AI Accelerator', 'Intel Foundry', 'Intel Evo Platform'] },
    { name: 'AMD', accounts: ['Ryzen Processors', 'Radeon Graphics', 'AMD EPYC Server', 'AMD Instinct AI'] },
    { name: 'NVIDIA', accounts: ['GeForce RTX 60 Series', 'NVIDIA AI Enterprise', 'CUDA Platform', 'NVIDIA Omniverse', 'GeForce NOW Cloud', 'NVIDIA Drive Auto'] },
    { name: 'IBM', accounts: ['IBM Watson AI', 'IBM Cloud Hybrid', 'Red Hat Enterprise', 'IBM Quantum Computing', 'IBM Security'] },
    { name: 'Oracle', accounts: ['Oracle Cloud Infra', 'Oracle Database', 'Oracle NetSuite', 'Oracle Health', 'Java Platform'] },
    { name: 'Salesforce', accounts: ['Salesforce CRM', 'Slack Enterprise', 'Tableau Analytics', 'MuleSoft Integration', 'Salesforce AI Cloud'] },
    { name: 'Adobe', accounts: ['Creative Cloud', 'Adobe Express', 'Adobe Experience Cloud', 'Adobe Firefly AI', 'Adobe Acrobat', 'Adobe Stock'] },
    { name: 'Uber Technologies', accounts: ['Uber Rides', 'Uber Eats', 'Uber Freight', 'Uber One Membership', 'Uber Business'] },
    { name: 'Airbnb', accounts: ['Airbnb Stays', 'Airbnb Experiences', 'Airbnb Luxe', 'Airbnb for Work'] },
    { name: 'Booking Holdings', accounts: ['Booking.com Hotels', 'Priceline Deals', 'Kayak Search', 'OpenTable Dining'] },
    { name: 'Starbucks', accounts: ['Starbucks Rewards', 'Starbucks Reserve', 'Starbucks at Home', 'Starbucks Delivery', 'Teavana Tea'] },
    { name: 'McDonald\'s Corporation', accounts: ['Big Mac Campaign', 'McDelivery', 'McCafe Coffee', 'Happy Meal', 'McDonald\'s App Deals'] },
    { name: 'Chipotle', accounts: ['Chipotle Rewards', 'Chipotle Catering', 'Chipotlanes Drive-Thru'] },
    { name: 'Marriott International', accounts: ['Marriott Bonvoy', 'Ritz-Carlton Luxury', 'W Hotels', 'Sheraton Hotels', 'Westin Wellness', 'Courtyard Business'] },
    { name: 'Hilton Hotels', accounts: ['Hilton Honors', 'Waldorf Astoria', 'Conrad Hotels', 'Hampton Inn', 'DoubleTree by Hilton'] },
    { name: 'Delta Air Lines', accounts: ['Delta SkyMiles', 'Delta One Premium', 'Delta Vacations', 'Delta Business Travel'] },
    { name: 'United Airlines', accounts: ['United MileagePlus', 'United Polaris', 'United Business'] },
    { name: 'Southwest Airlines', accounts: ['Rapid Rewards', 'Wanna Get Away', 'Southwest Business'] },
    { name: 'AT&T', accounts: ['AT&T Fiber', 'AT&T Wireless', 'AT&T Business', 'AT&T Prepaid', 'FirstNet First Responder'] },
    { name: 'Verizon', accounts: ['Verizon 5G Home', 'Verizon Wireless', 'Verizon Business', 'Fios Internet', 'Verizon Connect'] },
    { name: 'T-Mobile', accounts: ['T-Mobile 5G', 'T-Mobile Home Internet', 'Metro by T-Mobile', 'T-Mobile Business', 'T-Mobile Tuesdays'] },
    { name: 'Comcast', accounts: ['Xfinity Internet', 'Xfinity Mobile', 'Peacock Streaming', 'NBCUniversal Studios', 'Sky UK'] },
    { name: 'Warner Bros. Discovery', accounts: ['Max Streaming', 'HBO Originals', 'Discovery+', 'CNN News', 'DC Studios', 'Warner Bros. Pictures'] },
    { name: 'Paramount Global', accounts: ['Paramount+', 'CBS Network', 'Showtime', 'MTV Brand', 'Nickelodeon Kids', 'BET Networks'] },
    { name: 'Sony Group', accounts: ['PlayStation 6', 'Sony Pictures', 'Sony Music', 'Sony Electronics', 'Crunchyroll Anime', 'Sony Alpha Cameras'] },
    { name: 'Nintendo', accounts: ['Switch 2 Launch', 'Mario Franchise', 'Zelda Campaign', 'Pokemon Brand', 'Nintendo Online'] },
    { name: 'Electronic Arts', accounts: ['EA Sports FC', 'Madden NFL 27', 'Apex Legends', 'The Sims', 'EA Play Subscription'] },
    { name: 'Spotify', accounts: ['Spotify Premium', 'Spotify for Artists', 'Spotify Podcasts', 'Spotify Wrapped', 'Spotify Business'] },
    { name: 'PayPal', accounts: ['PayPal Checkout', 'Venmo Social', 'PayPal Business', 'PayPal Credit', 'Braintree Payments'] },
    { name: 'Block Inc.', accounts: ['Square POS', 'Cash App', 'Afterpay BNPL', 'Square Banking'] },
    { name: 'Shopify', accounts: ['Shopify Plus', 'Shopify Payments', 'Shopify POS', 'Shop App'] },
    { name: 'Home Depot', accounts: ['Home Depot Pro', 'Home Depot Rental', 'HDX Brand', 'Home Depot Garden'] },
    { name: 'Lowe\'s', accounts: ['Lowe\'s Pro Supply', 'Lowe\'s Home Improvement', 'Lowe\'s Appliances'] },
    { name: 'Costco', accounts: ['Costco Membership', 'Kirkland Signature', 'Costco Travel', 'Costco Optical'] },
    { name: 'Kroger', accounts: ['Kroger Boost', 'Simple Truth Organic', 'Kroger Pharmacy', 'Kroger Delivery'] },
    { name: 'Nestlé', accounts: ['Nescafe Coffee', 'KitKat Chocolate', 'Purina Pet Care', 'Gerber Baby', 'DiGiorno Pizza', 'Perrier Water', 'San Pellegrino', 'Häagen-Dazs', 'Stouffer\'s Meals', 'Hot Pockets'] },
    { name: 'L\'Oréal', accounts: ['Maybelline Cosmetics', 'Lancôme Luxury', 'Garnier Hair', 'NYX Makeup', 'CeraVe Skincare', 'Kiehl\'s', 'Ralph Lauren Fragrance', 'Urban Decay'] },
    { name: 'Estée Lauder', accounts: ['Clinique Skincare', 'MAC Cosmetics', 'La Mer Luxury', 'Bobbi Brown', 'Tom Ford Beauty', 'Jo Malone London'] },
    { name: 'LVMH', accounts: ['Louis Vuitton', 'Christian Dior', 'Sephora Retail', 'Hennessy Spirits', 'Tiffany & Co.', 'Fendi Fashion', 'Givenchy', 'Moët & Chandon', 'Tag Heuer Watches', 'Rimowa Travel'] },
    { name: 'Adidas', accounts: ['Adidas Originals', 'Adidas Running', 'Adidas Football', 'Yeezy Brand', 'Adidas Training', 'Reebok Classics'] },
    { name: 'Under Armour', accounts: ['UA Running', 'UA Training', 'UA Golf', 'UA Outlet'] },
    { name: 'Lululemon', accounts: ['Lululemon Women', 'Lululemon Men', 'Lululemon Mirror', 'Lululemon Run'] },
    { name: 'Ralph Lauren', accounts: ['Polo Ralph Lauren', 'Ralph Lauren Home', 'Lauren Women', 'Purple Label'] },
    { name: 'Pfizer', accounts: ['Pfizer Vaccines', 'Pfizer Oncology', 'Pfizer Consumer Health', 'Pfizer Rare Disease'] },
    { name: 'Moderna', accounts: ['Moderna mRNA Platform', 'Moderna Respiratory', 'Moderna Oncology'] },
    { name: 'UnitedHealth Group', accounts: ['UnitedHealthcare Plans', 'Optum Health', 'Optum Rx Pharmacy', 'Rally Health App'] },
    { name: 'CVS Health', accounts: ['CVS Pharmacy', 'Aetna Insurance', 'MinuteClinic', 'CVS ExtraCare'] },
    { name: 'Walgreens', accounts: ['Walgreens Pharmacy', 'Walgreens Beauty', 'Walgreens Health', 'myWalgreens Rewards'] },
    { name: 'The Kraft Heinz Company', accounts: ['Heinz Ketchup', 'Kraft Mac & Cheese', 'Oscar Mayer', 'Philadelphia Cream Cheese', 'Jell-O Desserts', 'Velveeta', 'Planters Nuts'] },
    { name: 'General Mills', accounts: ['Cheerios Cereal', 'Nature Valley', 'Pillsbury Baking', 'Häagen-Dazs Ice Cream', 'Betty Crocker', 'Old El Paso', 'Yoplait Yogurt', 'Annie\'s Organic'] },
    { name: 'Kellogg\'s', accounts: ['Frosted Flakes', 'Pringles Snacks', 'Pop-Tarts', 'Cheez-It', 'Eggo Waffles', 'MorningStar Farms'] },
    { name: 'Mondelez International', accounts: ['Oreo Cookies', 'Cadbury Chocolate', 'Ritz Crackers', 'Toblerone', 'Trident Gum', 'belVita Breakfast'] },
    { name: 'Mars Inc.', accounts: ['M&M\'s Chocolate', 'Snickers', 'Skittles', 'Pedigree Pet Food', 'Whiskas Cat Food', 'Kind Snacks', 'Ben\'s Original Rice'] },
    { name: 'Colgate-Palmolive', accounts: ['Colgate Toothpaste', 'Palmolive Dish', 'Speed Stick', 'Irish Spring', 'Tom\'s of Maine'] },
    { name: 'Clorox Company', accounts: ['Clorox Bleach', 'Glad Bags', 'Burt\'s Bees', 'Pine-Sol Cleaner', 'Kingsford Charcoal'] },
    { name: 'FedEx', accounts: ['FedEx Express', 'FedEx Ground', 'FedEx Freight', 'FedEx Office'] },
    { name: 'UPS', accounts: ['UPS Shipping', 'UPS Business Solutions', 'UPS Store', 'UPS Supply Chain'] },
    { name: 'DoorDash', accounts: ['DoorDash Delivery', 'DashPass Membership', 'DoorDash for Business'] },
    { name: 'Instacart', accounts: ['Instacart+ Membership', 'Instacart Business', 'Instacart Ads'] },
    { name: 'Zoom Video', accounts: ['Zoom Meetings', 'Zoom Phone', 'Zoom Rooms', 'Zoom Events'] },
    { name: 'Snowflake', accounts: ['Snowflake Data Cloud', 'Snowflake AI', 'Snowflake Marketplace'] },
    { name: 'ServiceNow', accounts: ['ServiceNow IT Ops', 'ServiceNow HR', 'ServiceNow AI Platform'] },
    { name: 'Workday', accounts: ['Workday HCM', 'Workday Finance', 'Workday Adaptive Planning'] },
    { name: 'Palantir Technologies', accounts: ['Palantir Foundry', 'Palantir Gotham', 'Palantir AIP'] },
    { name: 'CrowdStrike', accounts: ['Falcon Platform', 'CrowdStrike Cloud Security', 'CrowdStrike Identity'] },
    { name: 'Palo Alto Networks', accounts: ['Prisma Cloud', 'Cortex XDR', 'Next-Gen Firewall', 'Palo Alto SASE'] },
    { name: 'Cisco Systems', accounts: ['Cisco Webex', 'Cisco Meraki', 'Cisco Networking', 'Cisco Security', 'ThousandEyes Monitoring'] },
    { name: 'Caterpillar', accounts: ['Cat Construction', 'Cat Mining Equipment', 'Cat Energy Solutions'] },
    { name: 'John Deere', accounts: ['Deere Tractors', 'Deere Precision Ag', 'Deere Construction', 'Deere Forestry'] },
    { name: 'Boeing', accounts: ['Boeing Commercial', 'Boeing Defense', 'Boeing Space'] },
    { name: 'Lockheed Martin', accounts: ['Lockheed Aeronautics', 'Lockheed Space', 'Lockheed Missiles'] },
    { name: 'SpaceX', accounts: ['Starlink Internet', 'SpaceX Launch Services', 'Starship Program'] },
    { name: 'Rivian', accounts: ['R1T Truck', 'R1S SUV', 'Rivian Commercial Vans'] },
    { name: 'Lucid Motors', accounts: ['Lucid Air Sedan', 'Lucid Gravity SUV'] },
    { name: 'General Electric', accounts: ['GE Aerospace', 'GE Vernova Energy', 'GE HealthCare Imaging'] },
    { name: 'Siemens', accounts: ['Siemens Healthineers', 'Siemens Digital Industries', 'Siemens Smart Infra', 'Siemens Mobility'] },
    { name: 'Philips', accounts: ['Philips Healthcare', 'Philips Personal Care', 'Philips Lighting'] },
    { name: '3M Company', accounts: ['3M Industrial', 'Post-it Notes', '3M Safety', 'Scotch Tape', 'Command Hooks'] },
    { name: 'Honeywell', accounts: ['Honeywell Aerospace', 'Honeywell Building Tech', 'Honeywell Safety', 'Honeywell Home'] },
    { name: 'Berkshire Hathaway', accounts: ['GEICO Insurance', 'Duracell Batteries', 'Dairy Queen', 'See\'s Candies', 'Fruit of the Loom'] },
    { name: 'State Farm', accounts: ['State Farm Auto', 'State Farm Home', 'State Farm Life'] },
    { name: 'Progressive Insurance', accounts: ['Progressive Auto', 'Progressive Home', 'Progressive Commercial'] },
    { name: 'Allstate', accounts: ['Allstate Auto Insurance', 'Allstate Home', 'Esurance Online'] },
    { name: 'Morgan Stanley', accounts: ['Morgan Stanley Wealth', 'E*TRADE Platform', 'Morgan Stanley Invest'] },
    { name: 'Charles Schwab', accounts: ['Schwab Brokerage', 'Schwab Intelligent Portfolios', 'Schwab Bank'] },
    { name: 'Fidelity Investments', accounts: ['Fidelity Brokerage', 'Fidelity Retirement', 'Fidelity Youth Account', 'Fidelity Crypto'] },
    { name: 'BlackRock', accounts: ['iShares ETFs', 'BlackRock Aladdin', 'BlackRock Wealth'] },
    { name: 'Deloitte', accounts: ['Deloitte Consulting', 'Deloitte Audit', 'Deloitte Digital', 'Deloitte Tax'] },
    { name: 'McKinsey & Company', accounts: ['McKinsey Solutions', 'McKinsey Digital', 'QuantumBlack AI'] },
    { name: 'Accenture', accounts: ['Accenture Cloud', 'Accenture Strategy', 'Accenture Interactive', 'Accenture Technology', 'Accenture Security'] },
    { name: 'Stripe', accounts: ['Stripe Payments', 'Stripe Atlas', 'Stripe Climate', 'Stripe Connect'] },
    { name: 'Robinhood', accounts: ['Robinhood Trading', 'Robinhood Gold', 'Robinhood Crypto'] },
    { name: 'Coinbase', accounts: ['Coinbase Exchange', 'Coinbase Wallet', 'Coinbase Prime', 'Coinbase Commerce'] },
    { name: 'Etsy', accounts: ['Etsy Marketplace', 'Etsy Ads', 'Depop Fashion'] },
    { name: 'eBay', accounts: ['eBay Marketplace', 'eBay Motors', 'eBay Refurbished', 'eBay Business'] },
    { name: 'Pinterest', accounts: ['Pinterest Shopping', 'Pinterest Trends', 'Pinterest Creator'] },
    { name: 'Snap Inc.', accounts: ['Snapchat Ads', 'Snap AR Lenses', 'Spotlight Content', 'Snapchat+'] },
    { name: 'Reddit', accounts: ['Reddit Ads Manager', 'Reddit Talk', 'Reddit Premium'] },
    { name: 'LinkedIn', accounts: ['LinkedIn Talent', 'LinkedIn Marketing', 'LinkedIn Learning', 'LinkedIn Sales Navigator'] },
    { name: 'Twitter / X Corp', accounts: ['X Premium', 'X Ads Platform', 'X Business', 'Grok AI'] },
    { name: 'TikTok', accounts: ['TikTok For Business', 'TikTok Shop', 'TikTok LIVE', 'CapCut Creative'] },
    { name: 'Hershey Company', accounts: ['Hershey Chocolate', 'Reese\'s Candy', 'Kit Kat US', 'Jolly Rancher', 'SkinnyPop Popcorn'] },
    { name: 'Campbell Soup', accounts: ['Campbell\'s Soup', 'Goldfish Crackers', 'V8 Veggie Juice', 'Prego Pasta Sauce'] },
    { name: 'Tyson Foods', accounts: ['Tyson Chicken', 'Jimmy Dean Breakfast', 'Hillshire Farm', 'Ball Park Franks'] },
    { name: 'Constellation Brands', accounts: ['Corona Beer', 'Modelo Especial', 'Kim Crawford Wine', 'Robert Mondavi'] },
    { name: 'Anheuser-Busch InBev', accounts: ['Budweiser', 'Bud Light', 'Michelob Ultra', 'Stella Artois', 'Corona Global', 'Hoegaarden'] },
    { name: 'Diageo', accounts: ['Johnnie Walker', 'Guinness Beer', 'Tanqueray Gin', 'Don Julio Tequila', 'Crown Royal Whisky', 'Smirnoff Vodka', 'Captain Morgan'] },
    { name: 'Red Bull', accounts: ['Red Bull Energy', 'Red Bull Media', 'Red Bull Racing'] },
    { name: 'Monster Beverage', accounts: ['Monster Energy', 'Reign Total Body', 'Bang Energy'] },
    { name: 'Peloton', accounts: ['Peloton Bike+', 'Peloton Tread', 'Peloton App', 'Peloton Row'] },
    { name: 'Sonos', accounts: ['Sonos Speakers', 'Sonos Home Theater', 'Sonos Headphones'] },
    { name: 'Dyson', accounts: ['Dyson Vacuum', 'Dyson Airwrap', 'Dyson Purifier', 'Dyson Zone'] },
    { name: 'IKEA', accounts: ['IKEA Living Room', 'IKEA Kitchen', 'IKEA Smart Home', 'IKEA Sustainability', 'IKEA Food'] },
    { name: 'Wayfair', accounts: ['Wayfair Furniture', 'AllModern Design', 'Joss & Main', 'Birch Lane Home'] },
    { name: 'Williams-Sonoma', accounts: ['Pottery Barn', 'West Elm', 'Williams-Sonoma Cooking', 'Rejuvenation Lighting', 'Mark and Graham'] },
    { name: 'Gap Inc.', accounts: ['Old Navy Value', 'Gap Brand', 'Banana Republic', 'Athleta Active'] },
    { name: 'H&M Group', accounts: ['H&M Fashion', 'COS Premium', 'ARKET Essentials', '& Other Stories'] },
    { name: 'Zara / Inditex', accounts: ['Zara Fashion', 'Massimo Dutti', 'Pull & Bear', 'Bershka'] },
    { name: 'Nordstrom', accounts: ['Nordstrom Full-Line', 'Nordstrom Rack', 'Nordstrom Beauty'] },
    { name: 'Macy\'s', accounts: ['Macy\'s Department Store', 'Bloomingdale\'s', 'Bluemercury Beauty'] },
    { name: 'TJX Companies', accounts: ['TJ Maxx', 'Marshalls', 'HomeGoods', 'Sierra Trading'] },
    { name: 'Dollar General', accounts: ['DG Fresh', 'Dollar General Everyday', 'pOpshelf'] },
    { name: 'Wish', accounts: ['Wish Marketplace', 'Wish Express'] },
    { name: 'Warby Parker', accounts: ['Warby Parker Glasses', 'Warby Parker Contacts', 'Scout by Warby Parker'] },
    { name: 'Allbirds', accounts: ['Allbirds Runners', 'Allbirds Apparel'] },
    { name: 'Glossier', accounts: ['Glossier Skincare', 'Glossier Makeup', 'Glossier Fragrance'] },
    { name: 'Sephora (standalone)', accounts: ['Sephora Collection', 'Sephora Beauty Insider', 'Sephora App'] },
    { name: 'Ulta Beauty', accounts: ['Ulta Rewards', 'Ulta Skincare', 'Ulta Fragrance', 'Ulta Salon Services'] },
    { name: 'Bath & Body Works', accounts: ['B&BW Body Care', 'B&BW Home Fragrance', 'B&BW Candles'] },
    { name: 'Revlon', accounts: ['Revlon Color Cosmetics', 'Elizabeth Arden'] },
    { name: 'Hasbro', accounts: ['Transformers Brand', 'Monopoly Games', 'Nerf Blasters', 'My Little Pony', 'Dungeons & Dragons'] },
    { name: 'Mattel', accounts: ['Barbie Brand', 'Hot Wheels', 'Fisher-Price Baby', 'American Girl', 'UNO Card Game'] },
    { name: 'LEGO Group', accounts: ['LEGO Star Wars', 'LEGO Technic', 'LEGO City', 'LEGO Ideas', 'LEGO Education', 'LEGO Fortnite'] },
    { name: 'Roblox', accounts: ['Roblox Platform', 'Roblox Developer', 'Roblox Premium'] },
    { name: 'Epic Games', accounts: ['Fortnite Battle Royale', 'Unreal Engine', 'Epic Games Store', 'Rocket League'] },
    { name: 'Activision Blizzard', accounts: ['Call of Duty', 'World of Warcraft', 'Overwatch 2', 'Diablo IV', 'Candy Crush'] },
    { name: 'Take-Two Interactive', accounts: ['GTA Online', 'NBA 2K Series', 'Red Dead Online', 'Civilization VII'] },
    { name: 'Qualcomm', accounts: ['Snapdragon Mobile', 'Qualcomm AI Hub', 'Qualcomm Auto'] },
    { name: 'Broadcom', accounts: ['Broadcom Networking', 'VMware Cloud', 'Broadcom Security'] },
    { name: 'Texas Instruments', accounts: ['TI Education', 'TI Analog Chips', 'TI Embedded'] },
    { name: 'Micron Technology', accounts: ['Micron Memory', 'Crucial SSD', 'Micron AI Solutions'] },
    { name: 'Dell Technologies', accounts: ['Dell XPS Laptops', 'Dell Servers', 'Dell Gaming Alienware', 'Dell Business PCs'] },
    { name: 'HP Inc.', accounts: ['HP Spectre Laptops', 'HP Printers', 'HP Business Solutions', 'HyperX Gaming'] },
    { name: 'Lenovo', accounts: ['ThinkPad Business', 'Legion Gaming', 'Lenovo Yoga', 'Motorola Phones'] },
    { name: 'Canon', accounts: ['Canon EOS Cameras', 'Canon Printers', 'Canon Medical'] },
    { name: 'Panasonic', accounts: ['Panasonic Lumix', 'Panasonic Auto Systems', 'Panasonic Energy'] },
    { name: 'LG Electronics', accounts: ['LG OLED TVs', 'LG Appliances', 'LG Gram Laptops', 'LG Energy Solution'] },
    { name: 'Whirlpool', accounts: ['Whirlpool Appliances', 'KitchenAid', 'Maytag Laundry'] },
    { name: 'Stanley Black & Decker', accounts: ['DeWalt Power Tools', 'Stanley Tools', 'Craftsman', 'Black+Decker Home'] },
    { name: 'Sherwin-Williams', accounts: ['Sherwin-Williams Paint', 'HGTV Home Colors', 'Valspar Stain'] },
    { name: 'Zillow Group', accounts: ['Zillow Home Search', 'Trulia Rentals', 'StreetEasy NYC'] },
    { name: 'Redfin', accounts: ['Redfin Home Search', 'Redfin Mortgage'] },
    { name: 'Expedia Group', accounts: ['Expedia Travel', 'Hotels.com', 'Vrbo Vacation Rentals', 'Travelocity'] },
    { name: 'Tripadvisor', accounts: ['Tripadvisor Reviews', 'Viator Experiences', 'TheFork Dining'] },
    { name: 'Lyft', accounts: ['Lyft Rides', 'Lyft Business', 'Lyft Bikes & Scooters'] },
    { name: 'Dollar Shave Club', accounts: ['DSC Razors', 'DSC Body Care', 'DSC Oral Care'] },
    { name: 'Calm', accounts: ['Calm Meditation', 'Calm Business', 'Calm Kids'] },
    { name: 'Headspace', accounts: ['Headspace Mindfulness', 'Headspace for Work'] },
    { name: 'Duolingo', accounts: ['Duolingo Language', 'Duolingo Math', 'Duolingo Super'] },
    { name: 'Coursera', accounts: ['Coursera Plus', 'Coursera for Business', 'Coursera Degrees'] },
  ].map((org, i) => ({ ...org, managed: i % 3 === 0 }));
  const [recentAccounts, setRecentAccounts] = useState([
    { account: "Wally's Windows", org: 'Omni Partners' },
    { account: 'iPhone Launch 2026', org: 'Apple Inc.' },
    { account: 'Disney+ Streaming', org: 'Walt Disney Company' },
    { account: 'Nike Running', org: 'Nike' },
    { account: 'Chase Sapphire', org: 'JPMorgan Chase' },
  ]);
  const handleAccountSelect = (acct) => {
    setSelectedAccount(acct);
    setRecentAccounts(prev => {
      const filtered = prev.filter(a => a.account !== acct.account || a.org !== acct.org);
      return [acct, ...filtered].slice(0, 5);
    });
    setAccountPickerAnchor(null);
    setAccountSearchQuery('');
    setCurrentView('list');
    setSelectedCampaignForDetails(null);
    setSelectedAdGroupForDetails(null);
    setActiveNavItem('Campaigns');
  };
  const filteredRecentAccounts = recentAccounts.filter(a => {
    if (selectedProfileOption === 'Self Service User') {
      const org = accountOrgs.find(o => o.name === a.org);
      if (org?.managed) return false;
    }
    return a.account.toLowerCase().includes(accountSearchQuery.toLowerCase()) ||
      a.org.toLowerCase().includes(accountSearchQuery.toLowerCase());
  }).sort((a, b) => {
    if (!accountSearchQuery) return 0;
    const q = accountSearchQuery.toLowerCase();
    const aStarts = a.account.toLowerCase().startsWith(q) || a.org.toLowerCase().startsWith(q);
    const bStarts = b.account.toLowerCase().startsWith(q) || b.org.toLowerCase().startsWith(q);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    return 0;
  });
  const filteredOrgs = accountOrgs.filter(org => {
    if (selectedProfileOption === 'Self Service User' && org.managed) return false;
    return true;
  }).map(org => ({
    ...org,
    accounts: org.accounts.filter(a => a.toLowerCase().includes(accountSearchQuery.toLowerCase()) || org.name.toLowerCase().includes(accountSearchQuery.toLowerCase()))
      .sort((a, b) => {
        if (!accountSearchQuery) return 0;
        const q = accountSearchQuery.toLowerCase();
        const aStarts = a.toLowerCase().startsWith(q);
        const bStarts = b.toLowerCase().startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return 0;
      })
  })).filter(org => org.accounts.length > 0).sort((a, b) => {
    if (!accountSearchQuery) return 0;
    const q = accountSearchQuery.toLowerCase();
    const aStarts = a.name.toLowerCase().startsWith(q) || a.accounts.some(acc => acc.toLowerCase().startsWith(q));
    const bStarts = b.name.toLowerCase().startsWith(q) || b.accounts.some(acc => acc.toLowerCase().startsWith(q));
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    return 0;
  });
  const [reportsMenuAnchorEl, setReportsMenuAnchorEl] = useState(null);
  const reportsMenuOpen = Boolean(reportsMenuAnchorEl);

  // Update campaign name when campaign type changes
  React.useEffect(() => {
    if (selectedCampaignType) {
      const now = new Date();
      const timestamp = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
      const campaignTypeTitle = selectedCampaignType.charAt(0).toUpperCase() + selectedCampaignType.slice(1);
      
      // Get selected special categories
      const selectedSpecialCategories = Object.keys(specialCategories)
        .filter(key => specialCategories[key])
        .map(key => key.charAt(0).toUpperCase() + key.slice(1));
      
      // Get conversion event name if it's a conversion campaign and event is selected
      let conversionEventName = '';
      if (selectedCampaignType === 'conversion' && selectedConversionEvent) {
        const eventMapping = {
          'page_views': 'Page views',
          'sign_ups': 'Sign ups',
          'leads': 'Leads',
          'downloads': 'Downloads',
          'purchases': 'Purchases',
          'app_installs': 'App installs',
          'subscriptions': 'Subscriptions'
        };
        conversionEventName = eventMapping[selectedConversionEvent] || '';
      }
      
      // Build campaign name with special categories and conversion event (if applicable)
      const specialCategoriesString = selectedSpecialCategories.length > 0 ? `-${selectedSpecialCategories.join('-')}-` : '-';
      const conversionEventString = conversionEventName ? `-${conversionEventName}` : '';
      setCampaignName(`${campaignTypeTitle}${conversionEventString}${specialCategoriesString}${timestamp}`);
    }
  }, [selectedCampaignType, specialCategories, selectedConversionEvent]);
  
  const endDateRef = useRef(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event, campaignId) => {
    setAnchorEl(event.currentTarget);
    setSelectedCampaignId(campaignId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCampaignId(null);
  };

  const handleRunReport = () => {
    console.log('Running report for campaign:', selectedCampaignId);
    handleMenuClose();
  };

  const handleArchiveClick = () => {
    handleMenuClose();
    setArchiveDialogOpen(true);
  };

  const handleArchiveConfirm = () => {
    const campaign = campaigns.find(c => c.id === selectedCampaignId);
    if (!campaign) { setArchiveDialogOpen(false); return; }

    if (campaign.status === 'Archived') {
      // Unarchive - restore previous statuses
      setCampaigns(prev => prev.map(c => c.id === selectedCampaignId ? { ...c, status: c.previousStatus || 'Active', previousStatus: 'Archived' } : c));
      setAdGroups(prev => prev.map(ag => {
        if (ag.parentCampaign === campaign.campaign && ag.statusReason === 'campaign_archived') {
          const restoredCreatives = ag.creatives ? ag.creatives.map(c =>
            c.statusReason === 'campaign_archived' ? { ...c, status: c.previousStatus || 'Active', statusReason: null, previousStatus: undefined } : c
          ) : ag.creatives;
          return { ...ag, status: ag.previousStatus || 'Active', statusReason: null, previousStatus: undefined, creatives: restoredCreatives };
        }
        return ag;
      }));
      setToastMessage('Campaign unarchived successfully');
    } else {
      // Archive - store current statuses and set to Archived
      setCampaigns(prev => prev.map(c => c.id === selectedCampaignId ? { ...c, previousStatus: c.status, status: 'Archived' } : c));
      setAdGroups(prev => prev.map(ag => {
        if (ag.parentCampaign === campaign.campaign) {
          const updatedCreatives = ag.creatives ? ag.creatives.map(c => ({
            ...c, previousStatus: c.status, status: 'Archived', statusReason: 'campaign_archived'
          })) : ag.creatives;
          return { ...ag, previousStatus: ag.status, status: 'Archived', statusReason: 'campaign_archived', creatives: updatedCreatives };
        }
        return ag;
      }));
      setToastMessage('Campaign archived successfully');
    }
    setArchiveDialogOpen(false);
    setToastOpen(true);
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleViewChange = (event) => {
    const newViewMode = event.target.value;
    setViewMode(newViewMode);
    
    // Update status filter based on view mode
    if (newViewMode === 'Pre-launch') {
      setStatusFilter(['Draft']);
    } else if (newViewMode === 'Performance') {
      setStatusFilter(['Active', 'Deactivated', 'Draft', 'Ended', 'Not delivering', 'Paused', 'Scheduled']);
    }
  };

  const handleFilterMenuOpen = (event) => {
    setFilterMenuAnchor(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setFilterMenuAnchor(null);
  };

  const handleFilterVisibilityChange = (filterName) => {
    setVisibleFilters(prev => {
      let newFilters;
      const isAdding = !prev.includes(filterName);
      
      if (prev.includes(filterName)) {
        newFilters = prev.filter(f => f !== filterName);
      } else {
        newFilters = [...prev, filterName];
      }
      
      // Close the filter menu
      setFilterMenuAnchor(null);
      
      // Open the newly added filter's menu
      if (isAdding) {
        setTimeout(() => {
          if (filterName === 'status') {
            setStatusSelectOpen(true);
          } else if (filterName === 'creativeType') {
            setCreativeTypeSelectOpen(true);
          }
        }, 100);
      }
      
      return newFilters;
    });
  };

  const toggleCampaignCollapse = (campaignName) => {
    setCollapsedCampaigns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(campaignName)) {
        newSet.delete(campaignName);
      } else {
        newSet.add(campaignName);
      }
      return newSet;
    });
  };

  const expandAllCreativeGroups = () => {
    setCollapsedCampaigns(new Set());
  };

  const collapseAllCreativeGroups = () => {
    // Get all unique parent campaign names from ad groups data (these are the grouping keys)
    const allParentCampaigns = [...new Set(adGroups.map(adGroup => adGroup.parentCampaign))];
    setCollapsedCampaigns(new Set(allParentCampaigns));
  };

  const handleCampaignGroupSelect = (campaignName, adGroups, isSelected) => {
    const adGroupIds = adGroups.map(ag => ag.id);
    if (isSelected) {
      // Deselect all ad groups in this campaign
      setSelectedCampaigns(prev => ({
        ...prev,
        [selectedTab]: prev[selectedTab].filter(id => !adGroupIds.includes(id))
      }));
    } else {
      // Select all ad groups in this campaign
      setSelectedCampaigns(prev => ({
        ...prev,
        [selectedTab]: [...new Set([...prev[selectedTab], ...adGroupIds])]
      }));
    }
  };

  const handleCreativeGridSort = (column) => {
    let direction = 'asc';
    if (creativeGridSortConfig.key === column && creativeGridSortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setCreativeGridSortConfig({ key: column, direction });
  };

  const handleCreativeGridTabChange = (event, newValue) => {
    setCreativeGridActiveTab(newValue);
  };

  const handleSwitchChange = (campaignId, isChecked) => {
    // Store the pending change and show confirmation dialog
    setPendingSwitchChange({ id: campaignId, isChecked });
    setSwitchConfirmDialogOpen(true);
  };

  const confirmSwitchChange = () => {
    if (!pendingSwitchChange) return;

    const { id, isChecked } = pendingSwitchChange;

    // Check if this is a campaign toggle
    const targetCampaign = campaigns.find(c => c.id === id);

    if (targetCampaign) {
      // This is a campaign toggle
      if (isChecked) {
        // Switch turned on - restore campaign previous status
        let restoredStatus = targetCampaign.previousStatus;
        if (restoredStatus === 'Draft') {
          const campaignAdGroups = adGroups.filter(ag => ag.parentCampaign === targetCampaign.campaign);
          const allAdGroupsDraft = campaignAdGroups.length === 0 || campaignAdGroups.every(ag => ag.status === 'Draft');
          if (!allAdGroupsDraft) {
            restoredStatus = 'Active';
          }
        }
        setCampaigns(prev => prev.map(c => c.id === id ? { ...c, status: restoredStatus } : c));
        // Restore ad groups and creatives that were set to Not delivering due to campaign pause
        setAdGroups(prev => prev.map(ag => {
          if (ag.parentCampaign === targetCampaign.campaign && ag.statusReason === 'campaign_paused') {
            const restoredCreatives = ag.creatives ? ag.creatives.map(c => 
              c.statusReason === 'campaign_paused' ? { ...c, status: c.previousStatus || c.status, statusReason: null, previousStatus: undefined } : c
            ) : ag.creatives;
            return { ...ag, status: ag.previousStatus || ag.status, statusReason: null, previousStatus: undefined, creatives: restoredCreatives };
          }
          return ag;
        }));
      } else {
        // Switch turned off - pause campaign, set ad groups and creatives to Not delivering
        setCampaigns(prev => prev.map(c => c.id === id ? { 
          ...c, 
          previousStatus: c.status !== 'Paused' ? c.status : c.previousStatus, 
          status: 'Paused' 
        } : c));
        // Set all non-Draft ad groups to Not delivering with reason
        setAdGroups(prev => prev.map(ag => {
          if (ag.parentCampaign === targetCampaign.campaign && ag.status !== 'Draft') {
            const updatedCreatives = ag.creatives ? ag.creatives.map(c => 
              c.status !== 'Draft' ? { ...c, previousStatus: c.status, status: 'Not delivering', statusReason: 'campaign_paused' } : c
            ) : ag.creatives;
            return { 
              ...ag, 
              previousStatus: ag.status, 
              status: 'Not delivering', 
              statusReason: 'campaign_paused',
              creatives: updatedCreatives
            };
          }
          return ag;
        }));
      }
    } else {
      // This is an ad group toggle
      setAdGroups(prevAdGroups =>
        prevAdGroups.map(adGroup => {
          if (adGroup.id === id) {
            if (isChecked) {
              // Switch turned on - restore previous status
              let restoredStatus = adGroup.previousStatus;
              if (restoredStatus === 'Active') {
                const hasActiveCreative = adGroup.creatives && adGroup.creatives.some(c => c.status === 'Active');
                if (!hasActiveCreative) {
                  restoredStatus = 'Not delivering';
                }
              }
              if (restoredStatus === 'Scheduled') {
                const now = new Date();
                if (!adGroup.startDate || new Date(adGroup.startDate) <= now) {
                  restoredStatus = 'Active';
                  const hasActiveCreative = adGroup.creatives && adGroup.creatives.some(c => c.status === 'Active');
                  if (!hasActiveCreative) {
                    restoredStatus = 'Not delivering';
                  }
                }
              }
              return {
                ...adGroup,
                status: restoredStatus,
                statusReason: null
              };
            } else {
              // Switch turned off - store current status and set to Paused
              return {
                ...adGroup,
                previousStatus: adGroup.status !== 'Paused' ? adGroup.status : adGroup.previousStatus,
                status: 'Paused',
                statusReason: null
              };
            }
          }
          return adGroup;
        })
      );
    }

    // Close dialog and clear pending change
    setSwitchConfirmDialogOpen(false);
    setPendingSwitchChange(null);
  };

  const cancelSwitchChange = () => {
    // Close dialog and clear pending change without making changes
    setSwitchConfirmDialogOpen(false);
    setPendingSwitchChange(null);
  };

  const handleCreateCampaign = () => {
    setDrawerContext('campaign');
    setDrawerOpen(true);
    // Reset campaign type selection when opening drawer
    setSelectedCampaignType(null);
    // Reset special categories when opening drawer
    setSpecialCategories({
      credit: false,
      employment: false,
      housing: false
    });
    // Reset conversion event and event group
    setSelectedConversionEvent('');
    setSelectedEventGroup('');
    // Reset temporary dayparting when opening drawer for new campaign
    setTempDayparting(new Set());
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleSaveCampaign = () => {
    if (!campaignName.trim()) {
      console.error('Campaign name is required');
      return;
    }

    if (!selectedCampaignType) {
      console.error('Campaign type is required');
      return;
    }

    // Create new campaign object
    const newCampaign = {
      id: Date.now(), // Simple ID generation for demo
      campaign: campaignName.trim(),
      goal: selectedCampaignType === 'conversion' ? 'Conversion' : 'Awareness',
      conversionEvent: selectedCampaignType === 'conversion' ? selectedConversionEvent : null,
      eventGroup: selectedCampaignType === 'conversion' ? selectedEventGroup : null,
      status: "Draft",
      previousStatus: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lastModified: new Date(),
      accessType: "self",
      dayparting: Array.from(tempDayparting) // Save the temporary dayparting
    };

    // Add the new campaign to the campaigns array
    setCampaigns(prev => [newCampaign, ...prev]);

    // Create a single ad group with the same name as the campaign
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 30);
    
    const newAdGroup = {
      id: Date.now() + 1, // Ensure unique ID
      campaign: campaignName.trim(),
      parentCampaign: campaignName.trim(),
      status: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lifetimeBudget: "$500",
      startDate: today,
      endDate: endDate,
      lastModified: new Date(),
      dayparting: [],
      conversionEvent: selectedCampaignType === 'conversion' ? selectedConversionEvent : null,
      eventGroup: selectedCampaignType === 'conversion' ? selectedEventGroup : null
    };

    // Add the new ad group to the adGroups array
    setAdGroups(prev => [...prev, newAdGroup]);

    // Show success message
    setToastMessage('Campaign created successfully');
    setToastOpen(true);

    // Close the drawer
    setDrawerOpen(false);

    // Navigate to the newly created campaign's details page
    setSelectedCampaignForDetails(newCampaign);
    setSelectedAdGroupForDetails(null);
    setCurrentView('details');

    // Populate Budget card optimization goal from campaign data
    if (selectedCampaignType === 'awareness') {
      setBudgetConversionEvent('default_event_group');
    } else if (selectedCampaignType === 'conversion' && selectedConversionEvent) {
      setBudgetConversionEvent(selectedConversionEvent);
    }
    if (selectedCampaignType === 'conversion' && selectedEventGroup) {
      setBudgetEventGroup(selectedEventGroup);
    }

    // Reset form state
    setSelectedCampaignType(null);
    setSpecialCategories({
      credit: false,
      employment: false,
      housing: false
    });
    setSelectedConversionEvent('');
    setSelectedEventGroup('');
    setTempDayparting(new Set());
  };

  const handleCreateAwarenessWithVideoCreative = () => {
    const campaignName = `AI Video Campaign - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    const campaignId = Date.now();
    
    const newCampaign = {
      id: campaignId,
      campaign: campaignName,
      goal: 'Awareness',
      conversionEvent: null,
      eventGroup: null,
      status: "Draft",
      previousStatus: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lastModified: new Date(),
      accessType: "self",
      dayparting: []
    };

    setCampaigns(prev => [newCampaign, ...prev]);

    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 30);

    const newAdGroup = {
      id: campaignId + 1,
      campaign: campaignName,
      parentCampaign: campaignName,
      status: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lifetimeBudget: "$500",
      startDate: today,
      endDate: endDate,
      lastModified: new Date(),
      dayparting: [],
      conversionEvent: null,
      eventGroup: null
    };

    setAdGroups(prev => [...prev, newAdGroup]);

    // Add creative entry with the video assigned
    const newCreativeEntry = {
      id: campaignId + 2,
      campaign: campaignName,
      status: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      creatives: [
        { id: campaignId + 3, name: "AI Generated Video Ad", type: "In-content video", size: "16:9", status: "Creative in review" }
      ]
    };

    setCreatives(prev => [...prev, newCreativeEntry]);

    setToastMessage('Awareness campaign created with AI video creative');
    setToastOpen(true);

    setSelectedCampaignForDetails(newCampaign);
    setSelectedAdGroupForDetails(null);
    setCurrentView('details');
    setActiveNavItem('Campaigns');
  };

  const handleSetupLeadTracking = () => {
    const campaignName = `Lead Generation - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    const campaignId = Date.now();
    
    const newCampaign = {
      id: campaignId,
      campaign: campaignName,
      goal: 'Conversion',
      conversionEvent: 'leads',
      eventGroup: null,
      status: "Draft",
      previousStatus: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lastModified: new Date(),
      accessType: "self",
      dayparting: []
    };

    setCampaigns(prev => [newCampaign, ...prev]);

    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 30);

    const newAdGroup = {
      id: campaignId + 1,
      campaign: campaignName,
      parentCampaign: campaignName,
      status: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lifetimeBudget: "$500",
      startDate: today,
      endDate: endDate,
      lastModified: new Date(),
      dayparting: [],
      conversionEvent: 'leads',
      eventGroup: null
    };

    setAdGroups(prev => [...prev, newAdGroup]);

    setBudgetConversionEvent('leads');

    setToastMessage('Conversion campaign created with lead tracking');
    setToastOpen(true);

    setSelectedCampaignForDetails(newCampaign);
    setSelectedAdGroupForDetails(null);
    setCurrentView('details');
    setActiveNavItem('Campaigns');
  };

  const handleAdGroupsDrawerOpen = () => {
    setAdGroupsDrawerOpen(true);
  };

  const handleAdGroupsDrawerClose = () => {
    setAdGroupsDrawerOpen(false);
  };

  const createMultipleAdGroup = () => {
    if (!targetCampaignForMultipleAdGroups) {
      console.error('No target campaign specified for multiple ad groups');
      return;
    }
    
    if (!newAdGroupName.trim()) {
      return; // Don't create if name is empty
    }

    // Create a new ad group with the name from the info drawer
    const adGroupName = newAdGroupName.trim();
    const targetCampaignName = targetCampaignForMultipleAdGroups.campaign;
    
    // Set up dates - today and +30 days
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 30);
    
    // Only create the ad group with the user-entered name
    const newAdGroup = {
      id: Date.now(),
      campaign: adGroupName,
      parentCampaign: targetCampaignName,
      status: "Draft",
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lifetimeBudget: "$500",
      startDate: today,
      endDate: endDate,
      lastModified: new Date(),
      dayparting: []
    };
    
    // Add the new ad group to the adGroups array
    setAdGroups(prev => [...prev, newAdGroup]);
    
    // Log what was created for debugging
    console.log(`Created ad group "${adGroupName}" for campaign "${targetCampaignName}"`);
    
    // Clear the input field
    setNewAdGroupName('');
    setMultipleAdGroupNameError(false); // Clear any error state
    
    // Close the info drawer
    handleMultipleAdGroupsInfoDrawerClose();
    
    // Navigate to the newly created ad group's details page
    setSelectedCampaignForDetails(null);
    setSelectedAdGroupForDetails(newAdGroup);
    setCurrentView('details');
    
    // Show a success toast
    setToastMessage(`Created ad group "${adGroupName}"`);
    setToastOpen(true);
  };

  const handleMultipleAdGroupsInfoDrawerOpen = (campaign) => {
    setTargetCampaignForMultipleAdGroups(campaign);
    setMultipleAdGroupsInfoDrawerOpen(true);
  };

  const handleMultipleAdGroupsInfoDrawerClose = () => {
    setMultipleAdGroupsInfoDrawerOpen(false);
    setTargetCampaignForMultipleAdGroups(null);
    setMultipleAdGroupNameError(false); // Clear error when drawer closes
  };

  // Auto-focus the ad group name field when the drawer opens
  useEffect(() => {
    if (adGroupsDrawerOpen) {
      // Use multiple attempts to ensure focus works
      const attemptFocus = (attempt = 0) => {
        if (attempt > 10) return; // Max 10 attempts
        
        if (adGroupNameFieldRef.current) {
          const inputElement = adGroupNameFieldRef.current.querySelector('input');
          if (inputElement && document.contains(inputElement)) {
            inputElement.focus();
            inputElement.select();
            return;
          }
        }
        
        // Try again after a short delay
        setTimeout(() => attemptFocus(attempt + 1), 100);
      };
      
      // Start attempting to focus after initial delay
      setTimeout(() => attemptFocus(), 100);
    }
  }, [adGroupsDrawerOpen]);

  // Auto-focus the multiple ad groups name field when the drawer opens
  useEffect(() => {
    if (multipleAdGroupsInfoDrawerOpen && multipleAdGroupsFieldRef.current) {
      setTimeout(() => {
        // Try multiple methods to focus the input
        if (multipleAdGroupsFieldRef.current.focus) {
          multipleAdGroupsFieldRef.current.focus();
        } else {
          const inputElement = multipleAdGroupsFieldRef.current.querySelector('input');
          if (inputElement) {
            inputElement.focus();
          }
        }
      }, 300);
    }
  }, [multipleAdGroupsInfoDrawerOpen]);

  // Initialize tempDayparting when schedule drawer opens
  useEffect(() => {
    if (scheduleEditDrawerOpen) {
      // Load dayparts based on what's currently selected
      if (selectedAdGroupForDetails) {
        // We're in ad group details - load ad group dayparts from the current state
        const freshAdGroup = adGroups.find(ag => ag.id === selectedAdGroupForDetails.id);
        const existingDayparting = freshAdGroup?.dayparting ? new Set(freshAdGroup.dayparting) : new Set();
        setTempDayparting(existingDayparting);
      } else if (selectedCampaignForDetails) {
        // We're in campaign details - load campaign dayparts from the current state
        const freshCampaign = campaigns.find(c => c.id === selectedCampaignForDetails.id);
        const existingDayparting = freshCampaign?.dayparting ? new Set(freshCampaign.dayparting) : new Set();
        setTempDayparting(existingDayparting);
      }
    }
  }, [scheduleEditDrawerOpen, campaigns, adGroups, selectedAdGroupForDetails, selectedCampaignForDetails]);

  const handleCreativesDrawerClose = () => {
    setCreativesDrawerOpen(false);
    setSelectedAdGroupForCreatives(null);
    setSelectedCreativeType(null);
  };

  const handleAssignCreativeDrawerClose = () => {
    setAssignCreativeDrawerOpen(false);
    setSelectedAdGroupForCreatives(null);
    setSelectedCreativeTypes([]);
    setSelectedCreativeStatuses([]);
    setSelectedCreativesForAssignment([]);
    setCreativeSearchTerm('');
  };

  const handleEditCreativeDrawerClose = () => {
    setEditCreativeDrawerOpen(false);
    setSelectedCreativeToEdit(null);
    setSelectedAction('none');
    setImpressionTags(['']);
  };

  const handleEditCreativeDrawerOpen = (creative) => {
    setSelectedCreativeToEdit(creative);
    setEditCreativeDrawerOpen(true);
    // Pre-populate form fields with creative data if available
    if (creative.action) {
      setSelectedAction(creative.action);
    }
    if (creative.impressionTags) {
      setImpressionTags(creative.impressionTags);
    }
  };

  const handleCreativeSelection = (creativeId) => {
    setSelectedCreativesForAssignment(prev => 
      prev.includes(creativeId) 
        ? prev.filter(id => id !== creativeId)
        : [...prev, creativeId]
    );
  };

  const handleSelectAllCreatives = (event) => {
    const allVisibleCreatives = filteredAdGroups.flatMap(adGroup => 
      getCreativesForAdGroup(adGroup)
        .filter(creative => 
          (selectedCreativeTypes.length === 0 || 
           selectedCreativeTypes.includes(creative.type)) &&
          (selectedCreativeStatuses.length === 0 || 
           selectedCreativeStatuses.includes(creative.status)) &&
          (creativeSearchTerm === '' ||
           creative.name.toLowerCase().includes(creativeSearchTerm.toLowerCase()))
        )
    );
    
    if (event.target.checked) {
      setSelectedCreativesForAssignment(allVisibleCreatives.map(creative => creative.id));
    } else {
      setSelectedCreativesForAssignment([]);
    }
  };

  const handleCampaignClick = (campaign) => {
    console.log('Campaign clicked:', campaign);
    // Check if this campaign has ad groups
    const campaignAdGroups = adGroups.filter(ag => ag.parentCampaign === campaign.campaign);
    console.log('Campaign ad groups found:', campaignAdGroups.length);
    
    if (campaignAdGroups.length >= 2) {
      // If 2 or more ad groups, navigate to the first ad group details page (shows ad group sidebar)
      const firstAdGroup = campaignAdGroups[0];
      console.log('Multiple ad groups (2+), navigating to first ad group:', firstAdGroup);
      setIsLoadingAdGroupDetails(true);
      setSelectedAdGroupForDetails(null);
      setSelectedCampaignForDetails(null);
      setCurrentView('details');
      
      // Populate Budget card optimization goal from campaign/ad group data
      if (campaign.goal === 'Awareness') {
        setBudgetConversionEvent('default_event_group');
      } else if (firstAdGroup.conversionEvent) {
        setBudgetConversionEvent(firstAdGroup.conversionEvent);
      }
      if (firstAdGroup.eventGroup) setBudgetEventGroup(firstAdGroup.eventGroup);
      
      // Simulate loading time (in real app, this would be an API call)
      setTimeout(() => {
        setSelectedAdGroupForDetails(firstAdGroup);
        setIsLoadingAdGroupDetails(false);
      }, 200);
    } else if (campaignAdGroups.length === 1) {
      // Single ad group, navigate to campaign details
      console.log('Single ad group, navigating to campaign details:', campaign);
      setSelectedCampaignForDetails(campaign);
      setSelectedAdGroupForDetails(null);
      setCurrentView('details');
      
      // Populate Budget card optimization goal from campaign data
      if (campaign.goal === 'Awareness') {
        setBudgetConversionEvent('default_event_group');
      } else if (campaign.conversionEvent) {
        setBudgetConversionEvent(campaign.conversionEvent);
      }
      if (campaign.eventGroup) setBudgetEventGroup(campaign.eventGroup);
    } else {
      // No ad groups, navigate to campaign details
      console.log('No ad groups, navigating to campaign details:', campaign);
      setSelectedCampaignForDetails(campaign);
      setSelectedAdGroupForDetails(null);
      setCurrentView('details');
      
      // Populate Budget card optimization goal from campaign data
      if (campaign.goal === 'Awareness') {
        setBudgetConversionEvent('default_event_group');
      } else if (campaign.conversionEvent) {
        setBudgetConversionEvent(campaign.conversionEvent);
      }
      if (campaign.eventGroup) setBudgetEventGroup(campaign.eventGroup);
    }
  };

  const handleAdGroupClick = (adGroup) => {
    setIsLoadingAdGroupDetails(true);
    // Don't clear selectedAdGroupForDetails immediately - keep it for context
    setSelectedCampaignForDetails(null);
    setCurrentView('details');
    
    // Populate Budget card optimization goal from ad group data
    if (adGroup.conversionEvent) setBudgetConversionEvent(adGroup.conversionEvent);
    if (adGroup.eventGroup) setBudgetEventGroup(adGroup.eventGroup);
    
    // Simulate loading time (in real app, this would be an API call)
    setTimeout(() => {
      setSelectedAdGroupForDetails(adGroup);
      setIsLoadingAdGroupDetails(false);
    }, 200);
  };

  const handleCreateAdGroup = () => {
    // Create a new ad group object
    const adGroupName = newAdGroupName.trim() || 'New Ad Group';
    // Use the target campaign if set (from campaign header button), otherwise fallback to other options
    const parentCampaign = targetCampaignForMultipleAdGroups?.campaign ||
                          selectedAdGroupForDetails?.parentCampaign || 
                          selectedCampaignForDetails?.campaign || 
                          campaigns[0]?.campaign || 
                          'Default Campaign';
    
    const newAdGroup = {
      id: Date.now(), // Simple ID generation for demo
      adGroupName: adGroupName,
      campaign: adGroupName,
      parentCampaign: parentCampaign,
      status: 'Draft',
      spend: "$0.00",
      impressions: "0",
      cpm: "$0.00",
      goalActions: "0",
      goalCpa: "$0.00",
      lifetimeBudget: "$500",
      lastModified: new Date().toISOString(),
      creatives: []
    };
    
    console.log('Creating ad group:', newAdGroup);
    console.log('Parent campaign:', parentCampaign);
    console.log('selectedAdGroupForDetails:', selectedAdGroupForDetails);
    
    // Add the new ad group to the top of the adGroups array
    setAdGroups(prev => {
      const updated = [newAdGroup, ...prev];
      console.log('Updated adGroups:', updated);
      return updated;
    });
    
    // Clear the input field
    setNewAdGroupName('');
    
    // Show success toast
    setToastMessage('Your ad group has been created');
    setToastOpen(true);
    
    // Close the drawer
    setAdGroupsDrawerOpen(false);
    // Clear the target campaign after creation
    setTargetCampaignForMultipleAdGroups(null);
    
    // Navigate to the details view and select the newly created ad group
    console.log('Setting selectedAdGroupForDetails to:', newAdGroup);
    setSelectedAdGroupForDetails(newAdGroup);
    setSelectedCampaignForDetails(null);
    setCurrentView('details');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedCampaignForDetails(null);
    setSelectedAdGroupForDetails(null);
  };

  const handleProfileMenuClick = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleProfileMenuItemClick = (option) => {
    setSelectedProfileOption(option);
    console.log('Selected profile option:', option);
    handleProfileMenuClose();
  };

  const toggleDetailsExpanded = () => {
    setDetailsExpanded(!detailsExpanded);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleRowToggle = (rowId) => {
    setOpenRows(prev => ({
      ...prev,
      [rowId]: !prev[rowId]
    }));
  };

  // Get creatives for a specific ad group
  const getCreativesForAdGroup = (adGroup) => {
    // First check if the ad group has its own creatives property
    if (adGroup.creatives) {
      return adGroup.creatives;
    }
    
    // Check if this ad group corresponds to a creative data entry
    const creativeDataEntry = creatives.find(c => c.campaign === adGroup.campaign);
    if (creativeDataEntry) {
      return creativeDataEntry.creatives;
    }
    
    // For newly created ad groups (Draft status and recent lastModified), return empty array (no creatives)
    if (adGroup.status === "Draft" && adGroup.lastModified) {
      const timeDiff = new Date() - new Date(adGroup.lastModified);
      const hoursDiff = timeDiff / (1000 * 60 * 60);
      // If created within the last 24 hours, treat as new campaign with no creatives
      if (hoursDiff < 24) {
        return [];
      }
    }
    
    // For "Sports Fans - Weekend", return empty array (no creatives)
    if (adGroup.campaign === "Sports Fans - Weekend") {
      return [];
    }
    
    // Use a simple seeded random function based on adGroup.id for consistency
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    // Generate a weighted random number of creatives (mostly 1-2, rarely 3+)
    const rand = seededRandom(adGroup.id);
    let numCreatives;
    
    if (rand < 0.5) {
      numCreatives = 1; // 50% chance of 1 creative
    } else if (rand < 0.8) {
      numCreatives = 2; // 30% chance of 2 creatives
    } else if (rand < 0.95) {
      numCreatives = 3; // 15% chance of 3 creatives
    } else {
      numCreatives = Math.floor(seededRandom(adGroup.id + 100) * 7) + 4; // 5% chance of 4-10 creatives
    }
    
    const creativeTypes = ['In-content video', 'Billboard', 'Marquee'];
    const creativeSizes = ['728x90', '300x250', '320x50', '16:9', '1:1', '9:16', '468x60', '970x250'];
    const statuses = ['Draft', 'In review', 'Approved', 'Rejected'];
    
    const creativesPerAdGroup = [];
    for (let i = 1; i <= numCreatives; i++) {
      const randomType = creativeTypes[Math.floor(seededRandom(adGroup.id * 10 + i) * creativeTypes.length)];
      const randomSize = creativeSizes[Math.floor(seededRandom(adGroup.id * 20 + i) * creativeSizes.length)];
      const randomStatus = statuses[Math.floor(seededRandom(adGroup.id * 30 + i) * statuses.length)];
      
      creativesPerAdGroup.push({
        id: adGroup.id * 100 + i,
        name: `${adGroup.campaign} - Creative ${i}`,
        type: randomType,
        size: randomSize,
        status: randomStatus
      });
    }
    
    return creativesPerAdGroup;
  };

  const handleSelectAllClick = (event) => {
    const currentFilteredData = getFilteredData();
    if (event.target.checked) {
      const newSelected = currentFilteredData.map((item) => item.id);
      setSelectedCampaigns(prev => ({
        ...prev,
        [selectedTab]: newSelected
      }));
      return;
    }
    setSelectedCampaigns(prev => ({
      ...prev,
      [selectedTab]: []
    }));
    // Reset show selected only mode when deselecting all
    if (selectedTab === 0 || selectedTab === 1) {
      setShowSelectedOnly(false);
    }
  };

  const handleCampaignCheckboxClick = (campaignId) => {
    const currentTabSelections = selectedCampaigns[selectedTab] || [];
    const selectedIndex = currentTabSelections.indexOf(campaignId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(currentTabSelections, campaignId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(currentTabSelections.slice(1));
    } else if (selectedIndex === currentTabSelections.length - 1) {
      newSelected = newSelected.concat(currentTabSelections.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        currentTabSelections.slice(0, selectedIndex),
        currentTabSelections.slice(selectedIndex + 1),
      );
    }

    setSelectedCampaigns(prev => ({
      ...prev,
      [selectedTab]: newSelected
    }));
    
    // Reset show selected only mode when no items are selected
    if ((selectedTab === 0 || selectedTab === 1) && newSelected.length === 0) {
      setShowSelectedOnly(false);
    }
  };

  const isSelected = (campaignId) => {
    const currentTabSelections = selectedCampaigns[selectedTab] || [];
    return currentTabSelections.indexOf(campaignId) !== -1;
  };

  // Get current data based on selected tab
  const getCurrentData = () => {
    switch (selectedTab) {
      case 0: return campaigns;
      case 1: return adGroups;
      case 2: return adGroups;
      default: return campaigns;
    }
  };

  // Get count for current tab
  const getTabCount = () => {
    switch (selectedTab) {
      case 0: // Campaigns
        return filteredCampaigns.length;
      case 1: // Ad groups
        return filteredAdGroups.length;
      case 2: // Creatives - count total creatives from filtered ad groups
        return filteredAdGroups.reduce((total, adGroup) => {
          return total + getCreativesForAdGroup(adGroup).length;
        }, 0);
      default:
        return 0;
    }
  };

  // Filter campaigns based on search term and selected statuses
  // Define status priority order
  const statusPriority = {
    'Active': 1,
    'Draft': 2,
    'Paused': 3,
    'Scheduled': 4,
    'Not delivering': 5,
    'Ended': 6,
    'Deactivated': 7,
    'Archived': 8
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.campaign.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For Performance view, exclude Archived status regardless of status filter
    let matchesStatus = statusFilter.length === 0 || statusFilter.includes(campaign.status);
    if (viewMode === 'Performance' && campaign.status === 'Archived') {
      matchesStatus = false;
    }
    
    // Filter by creative type - check if campaign has ad groups with the selected creative types
    let matchesCreativeType = selectedCreativeTypes.length === 0; // Default to true if no types selected
    if (selectedCreativeTypes.length > 0) {
      const campaignAdGroups = adGroups.filter(ag => ag.parentCampaign === campaign.campaign);
      matchesCreativeType = campaignAdGroups.some(adGroup => {
        const creativesForAdGroup = getCreativesForAdGroup(adGroup);
        return creativesForAdGroup.some(creative => 
          selectedCreativeTypes.includes(creative.type)
        );
      });
    }
    
    // If in "show selected only" mode, only show selected campaigns
    if (showSelectedOnly && selectedCampaigns[0]?.length > 0) {
      const isSelected = selectedCampaigns[0].includes(campaign.id);
      return matchesSearch && matchesStatus && matchesCreativeType && isSelected;
    }
    
    return matchesSearch && matchesStatus && matchesCreativeType;
  }).sort((a, b) => {
    // Primary sort: by last modified date (most recent first)
    const dateA = new Date(a.lastModified);
    const dateB = new Date(b.lastModified);
    
    if (dateA.getTime() !== dateB.getTime()) {
      return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
    }
    
    // Secondary sort: by status priority, then by campaign name as tertiary sort
    const priorityA = statusPriority[a.status] || 999;
    const priorityB = statusPriority[b.status] || 999;
    
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }
    
    // Tertiary sort by campaign name
    return a.campaign.localeCompare(b.campaign);
  });

  // Debug: Log the sorted order
  console.log('Campaign sort order:', filteredCampaigns.map(c => `${c.campaign} (${new Date(c.lastModified).toISOString()})`));

  // Handler for clicking status pills in ad group campaign headers
  const handleStatusPillClick = (parentCampaign, status, event) => {
    event.stopPropagation(); // Prevent row collapse
    
    setAdGroupStatusSort(prev => {
      const currentSort = prev[parentCampaign];
      
      // If clicking the same status, toggle it off, otherwise set new status
      if (currentSort === status) {
        const newSort = { ...prev };
        delete newSort[parentCampaign];
        return newSort;
      } else {
        return { ...prev, [parentCampaign]: status };
      }
    });
  };

  // Compute effective ad group status - always Ended if end date has passed
  const getEffectiveAdGroupStatus = (adGroup) => {
    if (adGroup.endDate && new Date(adGroup.endDate) < new Date() && adGroup.status !== 'Draft') {
      return 'Ended';
    }
    return adGroup.status;
  };

  // Filter ad groups based on search term, selected statuses, and selected campaigns
  const filteredAdGroups = adGroups.filter(adGroup => {
    const matchesSearch = adGroup.campaign.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For Performance view, exclude Archived status regardless of status filter
    const effectiveStatus = getEffectiveAdGroupStatus(adGroup);
    let matchesStatus = statusFilter.length === 0 || statusFilter.includes(effectiveStatus);
    if (viewMode === 'Performance' && effectiveStatus === 'Archived') {
      matchesStatus = false;
    }
    
    // Filter by creative type - check if ad group has the selected creative types
    let matchesCreativeType = selectedCreativeTypes.length === 0; // Default to true if no types selected
    if (selectedCreativeTypes.length > 0) {
      const creativesForAdGroup = getCreativesForAdGroup(adGroup);
      matchesCreativeType = creativesForAdGroup.some(creative => 
        selectedCreativeTypes.includes(creative.type)
      );
    }
    
    // If campaigns are selected, only show ad groups belonging to those campaigns
    const selectedCampaignIds = selectedCampaigns[0] || [];
    if (selectedCampaignIds.length > 0) {
      const selectedCampaignNames = campaigns
        .filter(camp => selectedCampaignIds.includes(camp.id))
        .map(camp => camp.campaign);
      const belongsToSelectedCampaign = selectedCampaignNames.includes(adGroup.parentCampaign);
      if (!belongsToSelectedCampaign) {
        return false;
      }
    }
    
    // If in "show selected only" mode, only show selected ad groups
    if (showSelectedOnly && selectedCampaigns[1]?.length > 0) {
      const isSelected = selectedCampaigns[1].includes(adGroup.id);
      return matchesSearch && matchesStatus && matchesCreativeType && isSelected;
    }
    
    return matchesSearch && matchesStatus && matchesCreativeType;
  }).sort((a, b) => {
    // Primary sort: by last modified date (most recent first) - if available
    if (a.lastModified && b.lastModified) {
      const dateA = new Date(a.lastModified);
      const dateB = new Date(b.lastModified);
      
      if (dateA.getTime() !== dateB.getTime()) {
        return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
      }
    }
    
    // Secondary sort: by status priority, then by campaign name as tertiary sort
    const priorityA = statusPriority[a.status] || 999;
    const priorityB = statusPriority[b.status] || 999;
    
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }
    
    // Tertiary sort by campaign name
    return a.campaign.localeCompare(b.campaign);
  });

  // Filter creatives based on search term and selected statuses
  const filteredCreatives = creatives.filter(creative => {
    const matchesSearch = creative.campaign.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For Performance view, exclude Archived status regardless of status filter
    let matchesStatus = statusFilter.length === 0 || statusFilter.includes(creative.status);
    if (viewMode === 'Performance' && creative.status === 'Archived') {
      matchesStatus = false;
    }
    
    return matchesSearch && matchesStatus;
  });

  // Get filtered data for current tab
  const getFilteredData = () => {
    switch (selectedTab) {
      case 0: return filteredCampaigns;
      case 1: return filteredAdGroups;
      case 2: return filteredAdGroups;
      default: return filteredCampaigns;
    }
  };

  // Campaign Details Component
  const CampaignDetails = ({ 
    campaign,
    selectedTimeSlots,
    setSelectedTimeSlots,
    isDragging,
    setIsDragging,
    dragStart,
    setDragStart,
    mouseDownCell,
    setMouseDownCell,
    drawerContext,
    setDrawerContext,
    setDrawerOpen,
    campaignEditDrawerOpen,
    setCampaignEditDrawerOpen,
    scheduleEditDrawerOpen,
    setScheduleEditDrawerOpen,
    setTempDayparting,
    handleMultipleAdGroupsInfoDrawerOpen,
    setSelectedCreativeType,
    setCreativesDrawerOpen,
    setSelectedAdGroupForCreatives,
    automaticPlacement,
    setAutomaticPlacement,
    placementToggle,
    setPlacementToggle,
    setCurrentView,
    setReportsSelectedCampaigns,
    setReportsStartDate,
    setReportsEndDate
  }) => {
    // Add safety check for campaign object
    if (!campaign) {
      console.error('CampaignDetails: No campaign data provided');
      return (
        <Container maxWidth={false} sx={{ mt: 0, p: "20px" }}>
          <Typography variant="h6" color="error">
            Campaign not found
          </Typography>
          <Button onClick={() => window.history.back()}>Back</Button>
        </Container>
      );
    }

    // Get fresh campaign data from campaigns array to ensure we have latest dayparting
    const freshCampaign = campaigns.find(c => c.id === campaign.id) || campaign;

    const [campaignName, setCampaignName] = useState(campaign.campaign || '');
    const [lifetimeBudget, setLifetimeBudget] = useState(
      campaign.lifetimeBudget && typeof campaign.lifetimeBudget === 'string' 
        ? campaign.lifetimeBudget.replace('$', '') 
        : "500"
    );
    const [isSaving, setIsSaving] = useState(false);
    const [isBudgetSaving, setIsBudgetSaving] = useState(false);
    const [budgetError, setBudgetError] = useState(false);
    const [bufferPercent, setBufferPercent] = useState("1");
    const [contractedImpressions, setContractedImpressions] = useState(
      campaign.lifetimeBudget && typeof campaign.lifetimeBudget === 'string'
        ? String(parseFloat(campaign.lifetimeBudget.replace('$', '')) * 12)
        : "6000"
    );
    const [autoBid, setAutoBid] = useState(true);
    const [maxBid, setMaxBid] = useState("");
    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
    const [audienceDrawerOpen, setAudienceDrawerOpen] = useState(false);
    const [audienceSelection, setAudienceSelection] = useState("include");
    const [selectedAgeRanges, setSelectedAgeRanges] = useState({
      '18-24': false,
      '25-34': false,
      '35-44': false,
      '45-54': false,
      '55+': false
    });
    const [selectedIncomeRanges, setSelectedIncomeRanges] = useState({
      'Under $50k': false,
      '$50-$100k': false,
      '$100-$150k': false,
      '$150-$200k': false,
      '$200k+': false
    });

    // Format hour function for time display
    const formatHour = (h) => {
      if (h === 0) return '12AM';
      if (h < 12) return `${h}AM`;
      if (h === 12) return '12PM';
      return `${h - 12}PM`;
    };

    const handleCampaignNameChange = (event) => {
      setCampaignName(event.target.value);
    };

    const handleLifetimeBudgetChange = (event) => {
      const value = event.target.value.replace(/,/g, '');
      // Only allow numbers (including decimals)
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        setLifetimeBudget(value);
        setContractedImpressions(value ? String(parseFloat(value) * 12) : '0');
      }
    };

    const handleContractedImpressionsChange = (event) => {
      const value = event.target.value.replace(/,/g, '');
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        setContractedImpressions(value);
        setLifetimeBudget(value ? String(parseFloat(value) / 12) : '0');
      }
    };

    const handleCampaignNameBlur = () => {
      setIsSaving(true);
      // Update the campaign in the campaigns array
      setCampaigns(prevCampaigns => 
        prevCampaigns.map(c => 
          c.id === campaign.id 
            ? { ...c, campaign: campaignName }
            : c
        )
      );
      // Update the selected campaign for details
      setSelectedCampaignForDetails(prev => 
        prev && prev.id === campaign.id 
          ? { ...prev, campaign: campaignName }
          : prev
      );
      
      // Show save indicator for 1.5 seconds
      setTimeout(() => {
        setIsSaving(false);
      }, 1500);
    };

    const saveLifetimeBudget = () => {
      setIsBudgetSaving(true);
      // Here you could add logic to save to a backend
      console.log('Saving lifetime budget:', lifetimeBudget);
      
      // Show save indicator for 1.5 seconds
      setTimeout(() => {
        setIsBudgetSaving(false);
      }, 1500);
    };

    const handleLifetimeBudgetBlur = () => {
      saveLifetimeBudget();
    };

    const handleLifetimeBudgetKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.target.blur(); // This will trigger the blur event and save
      }
    };

    const handleMouseDown = (day, hour) => {
      setMouseDownCell({ day, hour });
      setDragStart({ day, hour });
      setIsDragging(false); // Start as not dragging
    };

    const handleMouseEnter = (day, hour) => {
      if (mouseDownCell && (mouseDownCell.day !== day || mouseDownCell.hour !== hour)) {
        // Mouse has moved to a different cell, this is a drag
        setIsDragging(true);
        
        if (dragStart) {
          const startDay = Math.min(dragStart.day, day);
          const endDay = Math.max(dragStart.day, day);
          const startHour = Math.min(dragStart.hour, hour);
          const endHour = Math.max(dragStart.hour, hour);
          
          setSelectedTimeSlots(prev => {
            const newSet = new Set(prev);
            // Add all cells in the rectangle
            for (let d = startDay; d <= endDay; d++) {
              for (let h = startHour; h <= endHour; h++) {
                newSet.add(`${d}-${h}`);
              }
            }
            return newSet;
          });
        }
      }
    };

    const handleMouseUp = (day, hour) => {
      if (!isDragging && mouseDownCell && mouseDownCell.day === day && mouseDownCell.hour === hour) {
        // This was a click (mouse down and up on same cell without dragging)
        const cellKey = `${day}-${hour}`;
        setSelectedTimeSlots(prev => {
          const newSet = new Set(prev);
          if (newSet.has(cellKey)) {
            newSet.delete(cellKey);
          } else {
            newSet.add(cellKey);
          }
          return newSet;
        });
      }
      
      // Reset states
      setIsDragging(false);
      setDragStart(null);
      setMouseDownCell(null);
    };

    const handleCellClick = (day, hour) => {
      // This function is no longer needed but keeping for compatibility
    };

    const daysOfWeek = [
      { key: 0, label: 'Monday', shortLabel: 'Mon' },
      { key: 1, label: 'Tuesday', shortLabel: 'Tue' },
      { key: 2, label: 'Wednesday', shortLabel: 'Wed' },
      { key: 3, label: 'Thursday', shortLabel: 'Thu' },
      { key: 4, label: 'Friday', shortLabel: 'Fri' },
      { key: 5, label: 'Saturday', shortLabel: 'Sat' },
      { key: 6, label: 'Sunday', shortLabel: 'Sun' }
    ];

    const hours = Array.from({ length: 24 }, (_, i) => i);

    const handleRemoveTimeSlot = (dayKey, hour) => {
      const cellKey = `${dayKey}-${hour}`;
      setSelectedTimeSlots(prev => {
        const newSet = new Set(prev);
        newSet.delete(cellKey);
        return newSet;
      });
    };

    const getSelectedTimeSlotsList = () => {
      // Group by day
      const dayGroups = {};
      Array.from(selectedTimeSlots).forEach(cellKey => {
        const [dayKey, hour] = cellKey.split('-').map(Number);
        if (!dayGroups[dayKey]) {
          dayGroups[dayKey] = [];
        }
        dayGroups[dayKey].push(hour);
      });

      // Process each day to create time ranges
      const result = [];
      Object.keys(dayGroups).forEach(dayKey => {
        const dayNum = parseInt(dayKey);
        const day = daysOfWeek.find(d => d.key === dayNum);
        const hours = dayGroups[dayKey].sort((a, b) => a - b);
        
        // Group consecutive hours into ranges
        const ranges = [];
        let rangeStart = hours[0];
        let rangeEnd = hours[0];
        
        for (let i = 1; i < hours.length; i++) {
          if (hours[i] === rangeEnd + 1) {
            // Consecutive hour, extend the range
            rangeEnd = hours[i];
          } else {
            // Gap found, finish current range and start new one
            ranges.push({ start: rangeStart, end: rangeEnd });
            rangeStart = hours[i];
            rangeEnd = hours[i];
          }
        }
        // Add the last range
        ranges.push({ start: rangeStart, end: rangeEnd });
        
        // Format time ranges
        const timeRangeText = ranges.map(range => {
          if (range.start === range.end) {
            return formatHour(range.start);
          } else {
            return `${formatHour(range.start)}-${formatHour(range.end)}`;
          }
        }).join(', ');
        
        result.push({
          dayKey: dayNum,
          dayName: day?.label || '',
          timeDisplay: timeRangeText,
          hours: hours // Keep for remove functionality
        });
      });
      
      // Sort by day
      return result.sort((a, b) => a.dayKey - b.dayKey);
    };

    const handleRemoveDayTimeSlots = (dayKey, hours) => {
      setSelectedTimeSlots(prev => {
        const newSet = new Set(prev);
        hours.forEach(hour => {
          newSet.delete(`${dayKey}-${hour}`);
        });
        return newSet;
      });
    };

    return (
    <>
    <Container maxWidth={false} sx={{ mt: 0, p: "20px" }}>
      <Box sx={{ mb: 3 }}>
        <Link 
          href="#" 
          underline="hover"
          color="primary"
          sx={{ 
            cursor: 'pointer',
            mb: 2,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5
          }}
          onClick={(e) => {
            e.preventDefault();
            handleBackToList();
          }}
        >
          <ArrowBackIcon fontSize="inherit" />
          <Typography variant="body2" component="span">Back</Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Box sx={{ pt: '6px' }}>
            <StatusComponent status={campaign.status} />
          </Box>
          <TextField
            value={campaignName}
            onChange={handleCampaignNameChange}
            onBlur={handleCampaignNameBlur}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
      </Box>
      
      {(campaign.status === 'Active' || campaign.status === 'Ended') && (
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: 3, 
          mb: 3,
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
          p: 3,
          backgroundColor: 'white',
          position: 'relative'
        }}>
          <Box>
            <Typography variant="body2" color="text.secondary">Goal</Typography>
            <Typography variant="h1">{campaign.goal}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">Spend</Typography>
            <Typography variant="h1">{campaign.spend}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">Impressions</Typography>
            <Typography variant="h1">{campaign.impressions}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">CPM</Typography>
            <Typography variant="h1">{campaign.cpm}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">Goal Actions</Typography>
            <Typography variant="h1">{campaign.goalActions}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">Goal CPA</Typography>
            <Typography variant="h1">{campaign.goalCpa}</Typography>
          </Box>
          <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
            <Link
              href="#"
              underline="hover"
              color="primary"
              sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
              onClick={(e) => {
                e.preventDefault();
                // Set the campaign as selected in reports
                setReportsSelectedCampaigns([campaign.id]);
                // Set the date range based on campaign dates (using sample dates for now)
                const campaignStart = campaign.startDate ? new Date(campaign.startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
                const campaignEnd = campaign.endDate ? new Date(campaign.endDate) : new Date();
                setReportsStartDate(campaignStart);
                setReportsEndDate(campaignEnd);
                // Navigate to reports view
                setCurrentView('reports');
                setActiveNavItem('Reports');
              }}
            >
              View full report
            </Link>
          </Box>
        </Box>
      )}
      
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography variant="h2">
              Campaign Details
            </Typography>
            <HelpOutlineIcon fontSize="small" color="action" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button 
              variant="outlined" 
              size="small"
              onClick={() => {
                // Load existing campaign dayparting into temp state for editing
                const existingDayparting = campaign?.dayparting ? new Set(campaign.dayparting) : new Set();
                setTempDayparting(existingDayparting);
                setCampaignEditDrawerOpen(true);
              }}
            >
              Edit
            </Button>
            <IconButton size="small" onClick={toggleDetailsExpanded}>
              <KeyboardArrowUpIcon 
                sx={{ 
                  transform: detailsExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.2s'
                }} 
              />
            </IconButton>
          </Box>
        </Box>
        
        {detailsExpanded && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
                Advertising objective
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {campaign.goal}
              </Typography>
            </Box>
            {Object.entries(specialCategories).some(([, v]) => v) && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
                  Special categories
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  {specialCategories.credit && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CreditCardIcon sx={{ fontSize: 18 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Credit</Typography>
                    </Box>
                  )}
                  {specialCategories.employment && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <WorkIcon sx={{ fontSize: 18 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Employment</Typography>
                    </Box>
                  )}
                  {specialCategories.housing && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <HomeIcon sx={{ fontSize: 18 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Housing</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: '12px' }}>
        <Typography variant="h2">
          Ad group
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Button variant="outlined" size="small" onClick={() => handleMultipleAdGroupsInfoDrawerOpen(campaign)}>
            Use multiple ad groups
          </Button>
          <Tooltip 
            title={
              <Box>
                <Typography variant="body2" gutterBottom>
                  Ad groups are used in campaigns when you would like to:
                </Typography>
                <Typography variant="body2" component="div" sx={{ ml: 1 }}>
                  • Advertise to multiple audiences<br/>
                  • Advertise in multiple locations<br/>
                  • Run various different creatives including video ads and native Roku OS ads
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Learn more about ad groups and when to use them
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
                  maxWidth: 300
                }
              },
              arrow: {
                sx: {
                  color: 'white',
                  '&::before': {
                    border: '1px solid #ccc'
                  }
                }
              }
            }}
          >
            <HelpOutlineIcon fontSize="small" color="action" />
          </Tooltip>
        </Box>
      </Box>
      
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Typography variant="h2">
          Optimization goal
        </Typography>
        {campaign.goal === 'Awareness' ? (
          <>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
              Goal
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Reach
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
              Event tracking
            </Typography>
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel>Event group</InputLabel>
              <Select
                value={budgetConversionEvent}
                onChange={(e) => setBudgetConversionEvent(e.target.value)}
                label="Event group"
              >
                <MenuItem value="default_event_group">Default Event Group</MenuItem>
                <MenuItem value="impressions">Impressions</MenuItem>
                <MenuItem value="video_views">Video views</MenuItem>
                <MenuItem value="reach">Reach</MenuItem>
                <MenuItem value="frequency">Frequency</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </>
        ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
            Conversion event
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Event</InputLabel>
            <Select
              value={budgetConversionEvent}
              onChange={(e) => setBudgetConversionEvent(e.target.value)}
              label="Event"
              renderValue={(selected) => {
                const eventData = {
                  'page_views': { label: 'Page views', icon: <PageviewIcon sx={{ fontSize: 20 }} /> },
                  'sign_ups': { label: 'Sign ups', icon: <PersonAddIcon sx={{ fontSize: 20 }} /> },
                  'leads': { label: 'Leads', icon: <LeadsIcon sx={{ fontSize: 20 }} /> },
                  'downloads': { label: 'Downloads', icon: <DownloadIcon sx={{ fontSize: 20 }} /> },
                  'purchases': { label: 'Purchases', icon: <ShoppingCartIcon sx={{ fontSize: 20 }} /> },
                  'app_installs': { label: 'App installs', icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} /> },
                  'subscriptions': { label: 'Subscriptions', icon: <SubscriptionsIcon sx={{ fontSize: 20 }} /> }
                };
                const selectedEvent = eventData[selected];
                return selectedEvent ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {selectedEvent.icon}
                    <Typography variant="body2">{selectedEvent.label}</Typography>
                  </Box>
                ) : 'Select';
              }}
            >
              <MenuItem value="page_views">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PageviewIcon sx={{ fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">Page views</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track when users visit specific pages</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem value="sign_ups">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonAddIcon sx={{ fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">Sign ups</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track user registrations and account creation</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem value="leads">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LeadsIcon sx={{ fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">Leads</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track form submissions and contact requests</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem value="downloads">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <DownloadIcon sx={{ fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">Downloads</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track file and content downloads</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem value="purchases">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShoppingCartIcon sx={{ fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">Purchases</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track completed transactions and sales</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem value="app_installs">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneAndroidIcon sx={{ fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">App installs</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track mobile app installations</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem value="subscriptions" disabled>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.5 }}>
                  <SubscriptionsIcon sx={{ fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">Subscriptions</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track recurring subscription signups</Typography>
                  </Box>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body1" color="text.secondary">
            in
          </Typography>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Event group</InputLabel>
            <Select value={budgetEventGroup} onChange={(e) => setBudgetEventGroup(e.target.value)} label="Event group">
              <MenuItem value="XD8AAI1eMy">XD8AAI1eMy</MenuItem>
              <MenuItem value="XDNEuttoJA">XDNEuttoJA</MenuItem>
            </Select>
          </FormControl>
          </Box>
        </Box>
        )}

        <Divider sx={{ mt: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mt: 2 }}>
          <Typography variant="h2">
            Budget
          </Typography>
          <Tooltip 
            title={
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Lifetime budget (required)
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Set the maximum you'll spend overall for your campaign. Your campaign will stop delivering when your lifetime budget is reached.
                </Typography>
                <Typography variant="body2">
                  $500 minimum required
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
                  maxWidth: 300
                }
              },
              arrow: {
                sx: {
                  color: 'white',
                  '&::before': {
                    border: '1px solid #ccc'
                  }
                }
              }
            }}
          >
            <HelpOutlineIcon fontSize="small" color="action" />
          </Tooltip>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Typography variant="body1" color="text.secondary" sx={{ width: '240px', flexShrink: 0, whiteSpace: 'nowrap' }}>
            Lifetime
            <Typography component="span" sx={{ color: 'red', ml: 0.5 }}>
              *
            </Typography>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TextField
              value={lifetimeBudget ? parseFloat(parseFloat(lifetimeBudget).toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : lifetimeBudget}
              onChange={handleLifetimeBudgetChange}
              onBlur={handleLifetimeBudgetBlur}
              onKeyPress={handleLifetimeBudgetKeyPress}
              variant="outlined"
              size="small"
              sx={{ width: '200px' }}
              label="Budget"
              placeholder="Enter amount"
              error={budgetError}
              helperText={budgetError ? '$500 minimum required' : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    USD
                  </InputAdornment>
                )
              }}
            />
            {isBudgetSaving && (
              <Typography variant="caption" color="success.main" sx={{ fontSize: '12px', ml: 1 }}>
                Saved
              </Typography>
            )}
            {selectedProfileOption === 'Managed Service User' && (
              <>
                <Typography variant="body1" color="text.secondary">=</Typography>
                <TextField
                  label="Contracted impressions"
                  value={contractedImpressions ? parseFloat(contractedImpressions).toLocaleString() : '0'}
                  onChange={handleContractedImpressionsChange}
                  variant="outlined"
                  size="small"
                  sx={{ width: '180px' }}
                />
                <Typography variant="body1" color="text.secondary">x</Typography>
                <TextField
                  label="Buffer"
                  value={bufferPercent}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || /^\d*\.?\d*$/.test(val)) setBufferPercent(val);
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ width: '70px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    )
                  }}
                />
                <Typography variant="body1" color="text.secondary">=</Typography>
                <TextField
                  label="Total impressions"
                  value={
                    contractedImpressions && bufferPercent
                      ? Math.round(parseFloat(contractedImpressions) * (1 + parseFloat(bufferPercent) / 100)).toLocaleString()
                      : '0'
                  }
                  variant="outlined"
                  size="small"
                  sx={{ width: '180px' }}
                  InputProps={{ readOnly: true }}
                />
              </>
            )}
          </Box>
        </Box>
        
        <Divider sx={{ mt: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="h2">
            Schedule
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              // Load existing campaign dayparting into temp state for editing
              const existingDayparting = campaign?.dayparting ? new Set(campaign.dayparting) : new Set();
              setTempDayparting(existingDayparting);
              setScheduleEditDrawerOpen(true);
            }}
          >
            Edit
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Typography variant="body1" color="text.secondary" sx={{ width: '240px' }}>
            Dates
            <Typography component="span" sx={{ color: 'red', ml: 0.5 }}>
              *
            </Typography>
          </Typography>
          <DateRangeField sx={{ gap: '6px' }} />
        </Box>
        
        {/* Only show Dayparts table if dayparting is configured */}
        {freshCampaign.dayparting && freshCampaign.dayparting.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
              Dayparts
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: 200, boxShadow: 'none', borderRadius: 0 }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', py: 0.25, px: 0.5 }}>Day</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', py: 0.25, px: 0.5 }}>Time</TableCell>
                    <TableCell sx={{ width: '60px', py: 0.25, px: 0.5 }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(() => {
                    // Group by day and create time ranges
                    const daysOfWeek = [
                      { key: 0, label: 'Monday' },
                      { key: 1, label: 'Tuesday' },
                      { key: 2, label: 'Wednesday' },
                      { key: 3, label: 'Thursday' },
                      { key: 4, label: 'Friday' },
                      { key: 5, label: 'Saturday' },
                      { key: 6, label: 'Sunday' }
                    ];
                    
                    const formatHour = (h) => {
                      if (h === 0) return '12AM';
                      if (h < 12) return `${h}AM`;
                      if (h === 12) return '12PM';
                      return `${h - 12}PM`;
                    };
                    
                    const dayGroups = {};
                    freshCampaign.dayparting.forEach(cellKey => {
                      const [dayKey, hour] = cellKey.split('-').map(Number);
                      if (!dayGroups[dayKey]) {
                        dayGroups[dayKey] = [];
                      }
                      dayGroups[dayKey].push(hour);
                    });

                    const result = [];
                    Object.keys(dayGroups).forEach(dayKey => {
                      const dayNum = parseInt(dayKey);
                      const day = daysOfWeek.find(d => d.key === dayNum);
                      const hours = dayGroups[dayKey].sort((a, b) => a - b);
                      
                      const ranges = [];
                      let rangeStart = hours[0];
                      let rangeEnd = hours[0];
                      
                      for (let i = 1; i < hours.length; i++) {
                        if (hours[i] === rangeEnd + 1) {
                          rangeEnd = hours[i];
                        } else {
                          ranges.push({ start: rangeStart, end: rangeEnd });
                          rangeStart = hours[i];
                          rangeEnd = hours[i];
                        }
                      }
                      ranges.push({ start: rangeStart, end: rangeEnd });
                      
                      const timeRangeText = ranges.map(range => {
                        if (range.start === range.end) {
                          return formatHour(range.start);
                        } else {
                          return `${formatHour(range.start)}-${formatHour(range.end)}`;
                        }
                      }).join(', ');
                      
                      result.push({
                        dayKey: dayNum,
                        dayName: day?.label || '',
                        timeDisplay: timeRangeText,
                        hours: hours
                      });
                    });
                    
                    return result.sort((a, b) => a.dayKey - b.dayKey).map(({ dayKey, dayName, timeDisplay, hours }) => (
                      <TableRow key={dayKey}>
                        <TableCell sx={{ py: 0.25, px: 0.5 }}>{dayName}</TableCell>
                        <TableCell sx={{ py: 0.25, px: 0.5 }}>{timeDisplay}</TableCell>
                        <TableCell sx={{ py: 0.25, px: 0.5 }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              // Load existing campaign dayparting into temp state for editing
                              const existingDayparting = freshCampaign?.dayparting ? new Set(freshCampaign.dayparting) : new Set();
                              setTempDayparting(existingDayparting);
                              setScheduleEditDrawerOpen(true);
                            }}
                            sx={{ color: 'grey.500' }}
                          >
                            <RemoveCircleOutlineIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ));
                  })()}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h2">
            Locations
          </Typography>
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => {
              setDrawerContext('locations');
              setDrawerOpen(true);
            }}
          >
            Edit
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ 
            width: '24px',
            height: '16px',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid #ccc',
            position: 'relative',
            background: 'linear-gradient(to bottom, #B22234 0%, #B22234 7.7%, #FFFFFF 7.7%, #FFFFFF 15.4%, #B22234 15.4%, #B22234 23.1%, #FFFFFF 23.1%, #FFFFFF 30.8%, #B22234 30.8%, #B22234 38.5%, #FFFFFF 38.5%, #FFFFFF 46.2%, #B22234 46.2%, #B22234 53.9%, #FFFFFF 53.9%, #FFFFFF 61.6%, #B22234 61.6%, #B22234 69.3%, #FFFFFF 69.3%, #FFFFFF 77%, #B22234 77%, #B22234 84.7%, #FFFFFF 84.7%, #FFFFFF 92.4%, #B22234 92.4%, #B22234 100%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '40%',
              height: '46%',
              backgroundColor: '#3C3B6E',
              background: `
                radial-gradient(circle at 16.7% 16.7%, white 1px, transparent 1px),
                radial-gradient(circle at 50% 16.7%, white 1px, transparent 1px),
                radial-gradient(circle at 83.3% 16.7%, white 1px, transparent 1px),
                radial-gradient(circle at 33.3% 41.7%, white 1px, transparent 1px),
                radial-gradient(circle at 66.7% 41.7%, white 1px, transparent 1px),
                radial-gradient(circle at 16.7% 66.7%, white 1px, transparent 1px),
                radial-gradient(circle at 50% 66.7%, white 1px, transparent 1px),
                radial-gradient(circle at 83.3% 66.7%, white 1px, transparent 1px),
                #3C3B6E
              `,
              backgroundSize: '100% 100%'
            }
          }}>
          </Box>
          <Typography variant="body1">
            United States
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h2">
            Audience
          </Typography>
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => setAudienceDrawerOpen(true)}
          >
            Edit
          </Button>
        </Box>
        
        <Typography variant="body1">
          Optimized audience
        </Typography>
        
      <Typography variant="caption" color="text.secondary">
        Automatically targets the best performing demographic based on your advertising objective
      </Typography>
    </Box>
    
    {/* Only show Placement card if campaign has "In-content video" creatives */}
    {(() => {
      const campaignAdGroups = adGroups.filter(ag => ag.parentCampaign === campaign.campaign);
      const hasVideoCreative = campaignAdGroups.some(ag => 
        ag.creatives && ag.creatives.some(creative => creative.type === 'In-content video')
      );
      return hasVideoCreative;
    })() && (
      <PlacementCard
        automaticPlacement={automaticPlacement}
        setAutomaticPlacement={setAutomaticPlacement}
        placementToggle={placementToggle}
        setPlacementToggle={setPlacementToggle}
        onEdit={() => setPlacementDrawerOpen(true)}
      />
    )}

    <DeliveryCard
      autoBid={autoBid}
      setAutoBid={setAutoBid}
      maxBid={maxBid}
      setMaxBid={setMaxBid}
      showAdvancedSettings={showAdvancedSettings}
      setShowAdvancedSettings={setShowAdvancedSettings}
      selectedProfileOption={selectedProfileOption}
    />      {/* Creatives Card for Campaign */}
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h2">
            Creatives
          </Typography>
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => {
              // For campaign level, we'll need to handle this differently
              // For now, just console log
              console.log('Add Creative to Campaign');
            }}
          >
            Add Creative
          </Button>
        </Box>
        
        {(() => {
          // Get all creatives for all ad groups in this campaign
          const campaignAdGroups = adGroups.filter(adGroup => 
            adGroup.campaign === campaign.campaign
          );
          const allCreatives = campaignAdGroups.flatMap(adGroup => 
            getCreativesForAdGroup(adGroup)
          );
          
          return allCreatives.length === 0 ? (
            <Box sx={{ backgroundColor: 'white', padding: 3 }}>
              <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
                Select the type of creative you want to add to this campaign.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 2
              }}>
                <TileComponent
                  image={CreativeIncontent}
                  title="In-content video"
                  description="Video ads that play within content feeds"
                  isSelected={false}
                  onClick={() => {
                    console.log('=== In-content video tile clicked in campaign view ===');
                    console.log('Campaign:', campaign?.campaign);
                    console.log('Functions available:');
                    console.log('  setSelectedCreativeType:', typeof setSelectedCreativeType);
                    console.log('  setCreativesDrawerOpen:', typeof setCreativesDrawerOpen);
                    console.log('  setSelectedAdGroupForCreatives:', typeof setSelectedAdGroupForCreatives);
                    
                    // Set creative type
                    if (setSelectedCreativeType) {
                      console.log('Setting creative type to in-content-video');
                      setSelectedCreativeType('in-content-video');
                    }
                    
                    // Find ad groups
                    const campaignAdGroups = adGroups.filter(adGroup => 
                      adGroup.campaign === campaign.campaign
                    );
                    console.log('Found', campaignAdGroups.length, 'ad groups for campaign');
                    
                    if (campaignAdGroups.length > 0) {
                      console.log('First ad group:', campaignAdGroups[0]);
                      if (setSelectedAdGroupForCreatives) {
                        console.log('Setting selected ad group for creatives');
                        setSelectedAdGroupForCreatives(campaignAdGroups[0]);
                      }
                      if (setCreativesDrawerOpen) {
                        console.log('Opening creatives drawer');
                        setCreativesDrawerOpen(true);
                      }
                    } else {
                      console.log('No ad groups found - cannot open drawer');
                    }
                    console.log('=== End click handler ===');
                  }}
                />
                <TileComponent
                  image={CreativeMarquee}
                  title="Marquee"
                  description="Banner ads displayed at the top of content"
                  isSelected={false}
                  onClick={() => {
                    console.log('Marquee selected for campaign');
                  }}
                />
                <TileComponent
                  image={CreativeBillboard}
                  title="Billboard"
                  description="Large format display ads for maximum impact"
                  isSelected={false}
                  onClick={() => {
                    console.log('Billboard selected for campaign');
                  }}
                />
                <Card 
                  sx={{ 
                    width: '280px', 
                    height: '275px', 
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    borderRadius: 0,
                    backgroundColor: '#FAFAFA',
                    boxShadow: 'none'
                  }}
                  onClick={() => {
                    console.log('Select from creative library clicked for campaign');
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: '100%',
                    p: 2
                  }}>
                    <Box sx={{ 
                      width: '100%', 
                      height: 140, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2
                    }}>
                      <ImageIcon sx={{ fontSize: 64, color: 'primary.main' }} />
                    </Box>
                    <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>
                      Select an existing creative from your creative library
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Box>
          ) : (
            <Table size="small" aria-label="campaign-creatives" sx={{ backgroundColor: 'white' }}>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="small"
                      indeterminate={
                        allCreatives?.some(creative => isSelected(creative.id)) &&
                        !allCreatives?.every(creative => isSelected(creative.id))
                      }
                      checked={allCreatives?.every(creative => isSelected(creative.id)) || false}
                      onChange={(event) => {
                        const isChecked = event.target.checked;
                        allCreatives?.forEach(creative => {
                          if (isChecked !== isSelected(creative.id)) {
                            handleCampaignCheckboxClick(creative.id);
                          }
                        });
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ width: '175px', padding: '8px' }}>Preview</TableCell>
                  <TableCell sx={{ width: '100%' }}>Creative Name</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Ad Group</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Status</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCreatives?.map((creative) => {
                  // Find which ad group this creative belongs to
                  const adGroupForCreative = campaignAdGroups.find(adGroup => 
                    getCreativesForAdGroup(adGroup).some(c => c.id === creative.id)
                  );
                  
                  return (
                    <TableRow key={creative.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected(creative.id)}
                          onChange={() => handleCampaignCheckboxClick(creative.id)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell sx={{ width: '175px', padding: '8px' }}>
                        {creative.type === 'In-content video' ? (
                          <Box
                            component="video"
                            src={IncontentVideo}
                            sx={{
                              width: '175px',
                              aspectRatio: '16/9',
                              objectFit: 'cover',
                              backgroundColor: '#f5f5f5'
                            }}
                            controls
                            muted
                          />
                        ) : creative.type === 'Marquee' ? (
                          <Box
                            component="img"
                            src={Marquee}
                            alt={creative.name}
                            sx={{
                              width: '175px',
                              aspectRatio: '16/9',
                              objectFit: 'cover',
                              backgroundColor: '#f5f5f5'
                            }}
                          />
                        ) : creative.type === 'Billboard' ? (
                          <Box
                            component="img"
                            src={Billboard}
                            alt={creative.name}
                            sx={{
                              width: '175px',
                              aspectRatio: '16/9',
                              objectFit: 'cover',
                              backgroundColor: '#f5f5f5'
                            }}
                          />
                        ) : (
                          <Box
                            component="img"
                            src={getImagePath("images/creative-placeholder.jpg")}
                            alt={creative.name}
                            sx={{
                              width: '175px',
                              aspectRatio: '16/9',
                              objectFit: 'cover',
                              backgroundColor: '#f5f5f5'
                            }}
                          />
                        )}
                      </TableCell>
                      <TableCell component="th" scope="row" sx={{ width: '100%' }}>
                        <Link href="#" underline="hover" color="primary">
                          {creative.name}
                        </Link>
                      </TableCell>
                      <TableCell sx={{ whiteSpace: 'nowrap' }}>
                        {adGroupForCreative?.campaign?.split(' | ').pop() || 'Unknown'}
                      </TableCell>
                      <TableCell sx={{ whiteSpace: 'nowrap' }}>
                        <StatusComponent status={creative.status} />
                      </TableCell>
                      <TableCell sx={{ whiteSpace: 'nowrap' }}>{creative.type}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          );
        })()}
      </Box>
    </Container>
    
    {/* Bottom Toolbar for Details Page */}
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTop: '1px solid #e0e0e0',
      p: 2,
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 'none', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small" color="primary">
            <MoreHorizIcon />
          </IconButton>
          <StatusComponent status={campaign.status} />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="caption" color="text.secondary" sx={{ alignSelf: 'center', mr: 2 }}>
            {isSaving ? '✓ Saved' : `Last updated ${new Date().toLocaleString()}`}
          </Typography>
          {campaign.status === 'Draft' && (() => {
            const campaignAdGroups = adGroups.filter(ag => ag.parentCampaign === campaign.campaign);
            const allAdGroupsDraft = campaignAdGroups.length === 0 || campaignAdGroups.every(ag => ag.status === 'Draft');
            return allAdGroupsDraft ? (
              <Button 
                variant="contained" 
                color="primary" 
                size="medium"
                disabled
              >
                Publish
              </Button>
            ) : null;
          })()}
          {(campaign.status === 'Active' || campaign.status === 'Ended') && (
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={() => {
                setReportsSelectedCampaigns([campaign.id]);
                const campaignStart = campaign.startDate ? new Date(campaign.startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
                const campaignEnd = campaign.endDate ? new Date(campaign.endDate) : new Date();
                setReportsStartDate(campaignStart);
                setReportsEndDate(campaignEnd);
                setCurrentView('reports');
                setActiveNavItem('Reports');
              }}
            >
              Run report
            </Button>
          )}
        </Box>
      </Box>
    </Box>

    {/* Audience Drawer */}
    <Drawer
      anchor="right"
      open={audienceDrawerOpen}
      onClose={() => setAudienceDrawerOpen(false)}
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
            onClick={() => setAudienceDrawerOpen(false)}
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
              defaultValue="All"
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
                defaultValue="Select"
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
    </Drawer>
    <AudienceDrawer
      open={audienceDrawerOpen}
      onClose={() => setAudienceDrawerOpen(false)}
      audienceSelection={audienceSelection}
      setAudienceSelection={setAudienceSelection}
      selectedAgeRanges={selectedAgeRanges}
      setSelectedAgeRanges={setSelectedAgeRanges}
      selectedIncomeRanges={selectedIncomeRanges}
      setSelectedIncomeRanges={setSelectedIncomeRanges}
    />
    </>
    );
  };

  // Ad Group Details Component
  const AdGroupDetails = ({ 
    adGroup, 
    selectedTimeSlots, 
    setSelectedTimeSlots, 
    setScheduleEditDrawerOpen, 
    setDrawerContext: setDrawerContextProp, 
    setDrawerOpen: setDrawerOpenProp, 
    setCurrentView, 
    setActiveNavItem,
    automaticPlacement,
    setAutomaticPlacement,
    placementToggle,
    setPlacementToggle,
    setReportsSelectedCampaigns,
    setReportsStartDate,
    setReportsEndDate,
    campaignGoal = 'Conversion'
  }) => {
    const [adGroupName, setAdGroupName] = useState(adGroup.campaign);
    const [lifetimeBudget, setLifetimeBudget] = useState(adGroup.lifetimeBudget?.replace('$', '') || "500");
    const [isSaving, setIsSaving] = useState(false);
    const [isBudgetSaving, setIsBudgetSaving] = useState(false);
    const [budgetError, setBudgetError] = useState(false);
    const [bufferPercent, setBufferPercent] = useState("1");
    const [contractedImpressions, setContractedImpressions] = useState(
      adGroup.lifetimeBudget && typeof adGroup.lifetimeBudget === 'string'
        ? String(parseFloat(adGroup.lifetimeBudget.replace('$', '')) * 12)
        : "6000"
    );
    const [campaignDetailsExpanded, setCampaignDetailsExpanded] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(250);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [autoBid, setAutoBid] = useState(true);
    const [maxBid, setMaxBid] = useState("");
    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
    const [audienceDrawerOpen, setAudienceDrawerOpen] = useState(false);
    const [audienceSelection, setAudienceSelection] = useState("include");
    const [selectedAgeRanges, setSelectedAgeRanges] = useState({
      '18-24': false,
      '25-34': false,
      '35-44': false,
      '45-54': false,
      '55+': false
    });
    const [selectedIncomeRanges, setSelectedIncomeRanges] = useState({
      'Under $50k': false,
      '$50-$100k': false,
      '$100-$150k': false,
      '$150-$200k': false,
      '$200k+': false
    });
    const endDateRef = useRef(null);

    const toggleCampaignDetailsExpanded = () => {
      setCampaignDetailsExpanded(!campaignDetailsExpanded);
    };

    const toggleSidebarCollapsed = () => {
      setSidebarCollapsed(!sidebarCollapsed);
    };

    // Format hour function for time display
    const formatHour = (h) => {
      if (h === 0) return '12AM';
      if (h < 12) return `${h}AM`;
      if (h === 12) return '12PM';
      return `${h - 12}PM`;
    };

    // Days of week definition for AdGroupDetails
    const daysOfWeek = [
      { key: 0, label: 'Monday', shortLabel: 'Mon' },
      { key: 1, label: 'Tuesday', shortLabel: 'Tue' },
      { key: 2, label: 'Wednesday', shortLabel: 'Wed' },
      { key: 3, label: 'Thursday', shortLabel: 'Thu' },
      { key: 4, label: 'Friday', shortLabel: 'Fri' },
      { key: 5, label: 'Saturday', shortLabel: 'Sat' },
      { key: 6, label: 'Sunday', shortLabel: 'Sun' }
    ];

    // Function to get selected time slots list for AdGroupDetails
    const getSelectedTimeSlotsList = () => {
      // Group by day
      const dayGroups = {};
      Array.from(selectedTimeSlots).forEach(cellKey => {
        const [dayKey, hour] = cellKey.split('-').map(Number);
        if (!dayGroups[dayKey]) {
          dayGroups[dayKey] = [];
        }
        dayGroups[dayKey].push(hour);
      });

      // Process each day to create time ranges
      const result = [];
      Object.keys(dayGroups).forEach(dayKey => {
        const dayNum = parseInt(dayKey);
        const day = daysOfWeek.find(d => d.key === dayNum);
        const hours = dayGroups[dayKey].sort((a, b) => a - b);
        
        // Group consecutive hours into ranges
        const ranges = [];
        let rangeStart = hours[0];
        let rangeEnd = hours[0];
        
        for (let i = 1; i < hours.length; i++) {
          if (hours[i] === rangeEnd + 1) {
            // Consecutive hour, extend the range
            rangeEnd = hours[i];
          } else {
            // Gap found, finish current range and start new one
            ranges.push({ start: rangeStart, end: rangeEnd });
            rangeStart = hours[i];
            rangeEnd = hours[i];
          }
        }
        // Add the last range
        ranges.push({ start: rangeStart, end: rangeEnd });
        
        // Format time ranges
        const timeRangeText = ranges.map(range => {
          if (range.start === range.end) {
            return formatHour(range.start);
          } else {
            return `${formatHour(range.start)}-${formatHour(range.end)}`;
          }
        }).join(', ');
        
        result.push({
          dayKey: dayNum,
          dayName: day?.label || '',
          timeDisplay: timeRangeText,
          hours: hours // Keep for remove functionality
        });
      });
      
      // Sort by day
      return result.sort((a, b) => a.dayKey - b.dayKey);
    };

    // Function to handle removing day time slots for AdGroupDetails
    const handleRemoveDayTimeSlots = (dayKey, hours) => {
      setSelectedTimeSlots(prev => {
        const newSet = new Set(prev);
        hours.forEach(hour => {
          newSet.delete(`${dayKey}-${hour}`);
        });
        return newSet;
      });
    };

    const handleMouseDown = (e) => {
      setIsResizing(true);
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isResizing) return;
      
      const newWidth = e.clientX - 20; // Account for container padding
      if (newWidth >= 250 && newWidth <= 500) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    // Add event listeners for mouse move and up
    React.useEffect(() => {
      if (isResizing) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }, [isResizing]);

    const handleAdGroupNameChange = (event) => {
      setAdGroupName(event.target.value);
    };

    const handleLifetimeBudgetChange = (event) => {
      const value = event.target.value;
      // Only allow numbers (including decimals)
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        setLifetimeBudget(value);
      }
    };

    const handleAdGroupNameBlur = () => {
      setIsSaving(true);
      // Update the ad group in the ad groups array
      setAdGroups(prevAdGroups => 
        prevAdGroups.map(ag => 
          ag.id === adGroup.id 
            ? { ...ag, campaign: adGroupName }
            : ag
        )
      );
      
      // Show save indicator for 1.5 seconds
      setTimeout(() => {
        setIsSaving(false);
      }, 1500);
    };

    const saveLifetimeBudget = () => {
      setIsBudgetSaving(true);
      // Update the ad group in the adGroups array
      setAdGroups(prevAdGroups => 
        prevAdGroups.map(ag => 
          ag.id === adGroup.id 
            ? { ...ag, lifetimeBudget: `$${lifetimeBudget}` }
            : ag
        )
      );
      // Update the selected ad group for details
      setSelectedAdGroupForDetails(prev => 
        prev && prev.id === adGroup.id 
          ? { ...prev, lifetimeBudget: `$${lifetimeBudget}` }
          : prev
      );
      
      console.log('Saving ad group lifetime budget:', lifetimeBudget);
      
      // Show save indicator for 1.5 seconds
      setTimeout(() => {
        setIsBudgetSaving(false);
      }, 1500);
    };

    const handleLifetimeBudgetBlur = () => {
      if (!lifetimeBudget || parseFloat(lifetimeBudget) < 500) {
        setBudgetError(true);
      } else {
        setBudgetError(false);
        saveLifetimeBudget();
      }
    };

    const handleLifetimeBudgetKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.target.blur(); // This will trigger the blur event and save
      }
    };

    const handleContractedImpressionsChange = (event) => {
      const value = event.target.value.replace(/,/g, '');
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        setContractedImpressions(value);
        setLifetimeBudget(value ? String(parseFloat(value) / 12) : '0');
      }
    };

    return (
    <>
    <Container maxWidth={false} sx={{ mt: 0, p: "20px" }}>
      <Box sx={{ mb: 3 }}>
        <Link 
          href="#" 
          underline="hover"
          color="primary"
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: '14px',
            cursor: 'pointer'
          }}
          onClick={(e) => {
            e.preventDefault();
            setSelectedAdGroupForDetails(null);
            setCurrentView('list'); // Go back to list view (table)
          }}
        >
          <ArrowBackIcon fontSize="inherit" />
          <Typography variant="body2" component="span">Back</Typography>
        </Link>
      </Box>
      
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography variant="h2">
              {adGroup.parentCampaign}
            </Typography>
            <HelpOutlineIcon fontSize="small" color="action" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button variant="outlined" size="small">
              Edit
            </Button>
            <IconButton size="small" onClick={toggleCampaignDetailsExpanded}>
              <KeyboardArrowUpIcon 
                sx={{ 
                  transform: campaignDetailsExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.2s'
                }} 
              />
            </IconButton>
          </Box>
        </Box>
        
        {campaignDetailsExpanded && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Advertising objective
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {campaignGoal}
              </Typography>
            </Box>
          </>
        )}
      </Box>
      
      <Box sx={{ display: 'flex', gap: 0 }}>
        <Box sx={{ width: sidebarCollapsed ? '40px' : `${sidebarWidth}px`, flexShrink: 0, height: '100vh', pb: 10 }}>
          {/* Column 1 - Resizable Ad Groups List */}
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 0,
            backgroundColor: 'white',
            borderRadius: 0,
            mr: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: sidebarCollapsed ? 'center' : 'space-between' }}>
              {!sidebarCollapsed && (
                <Button
                  variant="text"
                  startIcon={<AddIcon />}
                  onClick={() => setAdGroupsDrawerOpen(true)}
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: 'rgb(34, 96, 188)',
                    textTransform: 'none',
                    padding: '4px 8px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  Add ad group
                </Button>
              )}
              <IconButton 
                size="small" 
                onClick={toggleSidebarCollapsed}
                sx={{ 
                  minWidth: 'unset',
                  p: 0.5
                }}
              >
                {sidebarCollapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
              </IconButton>
            </Box>
            {!sidebarCollapsed && (
              <Box sx={{ flex: 1, overflowY: 'auto' }}>
                {adGroups
                  .filter(ag => ag.parentCampaign === (selectedAdGroupForDetails?.parentCampaign || adGroup.parentCampaign))
                  .sort((a, b) => {
                    // Primary sort: by status priority (Draft appears first)
                    const statusPriority = {
                      'Draft': 0,
                      'Active': 1,
                      'Paused': 2,
                      'Scheduled': 3,
                      'Ended': 4,
                      'Deactivated': 5,
                      'Not delivering': 6,
                      'Archived': 7
                    };
                    
                    const priorityA = statusPriority[a.status] !== undefined ? statusPriority[a.status] : 999;
                    const priorityB = statusPriority[b.status] !== undefined ? statusPriority[b.status] : 999;
                    
                    if (priorityA !== priorityB) {
                      return priorityA - priorityB;
                    }
                    
                    // Secondary sort: by last modified date (most recent first) - if available
                    if (a.lastModified && b.lastModified) {
                      const dateA = new Date(a.lastModified);
                      const dateB = new Date(b.lastModified);
                      
                      if (dateA.getTime() !== dateB.getTime()) {
                        return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
                      }
                    }
                    
                    // Tertiary sort by campaign name
                    return a.campaign.localeCompare(b.campaign);
                  })
                  .map((ag) => (
                  <Box
                    key={ag.id}
                    onClick={() => handleAdGroupClick(ag)}
                    sx={{
                      p: 1.5,
                      borderRadius: adGroup?.id === ag.id ? 0 : 1,
                      cursor: 'pointer',
                      backgroundColor: adGroup?.id === ag.id ? '#EDE7F6' : 'transparent',
                      borderTop: adGroup?.id === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderRight: adGroup?.id === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderBottom: adGroup?.id === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderLeft: adGroup?.id === ag.id ? '3px solid #20004C' : '1px solid transparent',
                      '&:hover': {
                        backgroundColor: '#f5f5f5'
                      }
                    }}
                  >
                    <Typography variant="body2" sx={{ 
                      fontWeight: 'medium', 
                      fontSize: '12px', 
                      mb: 0.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {ag.adGroupName || ag.campaign}
                    </Typography>
                    <Box sx={{ 
                      '& .MuiBox-root': { 
                        gap: '4px !important',
                        '& .MuiTypography-root': {
                          fontSize: '11px !important'
                        },
                        '& svg': {
                          width: '12px !important',
                          height: '12px !important'
                        }
                      }
                    }}>
                      <StatusComponent status={ag.status} />
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        
        {/* Resize Handle - only show when not collapsed */}
        {!sidebarCollapsed && (
          <Box
            onMouseDown={handleMouseDown}
            sx={{
              width: '4px',
              height: '100vh',
              cursor: 'col-resize',
              backgroundColor: isResizing ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: '#e0e0e0'
              },
              transition: 'background-color 0.2s',
              flexShrink: 0,
              mr: 2
            }}
          />
        )}
        
        <Box sx={{ flex: 1 }}>
          {/* Column 2 - Takes remaining space */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box sx={{ pt: '6px' }}>
                <StatusComponent status={getEffectiveAdGroupStatus(adGroup)} tooltip={adGroup.statusReason === 'campaign_paused' ? 'Campaign paused' : null} />
              </Box>
              <TextField
                value={adGroupName}
                onChange={handleAdGroupNameChange}
                onBlur={handleAdGroupNameBlur}
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Enter ad group name"
              />
              {isSaving && (
                <Typography variant="caption" color="success.main" sx={{ fontSize: '12px' }}>
                  Saved
                </Typography>
              )}
            </Box>
          </Box>
          
          {/* Only show metrics card if ad group status is Active or Ended */}
          {(adGroup.status === 'Active' || adGroup.status === 'Ended') && (
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: 3, 
              mb: 3,
              boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
              p: 3,
              backgroundColor: 'white',
              position: 'relative'
            }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Impressions</Typography>
                <Typography variant="h1">{adGroup.impressions}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">CPM</Typography>
                <Typography variant="h1">{adGroup.cpm}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Goal Actions</Typography>
                <Typography variant="h1">{adGroup.goalActions}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Goal CPA</Typography>
                <Typography variant="h1">{adGroup.goalCpa}</Typography>
              </Box>
              <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                <Link
                  href="#"
                  underline="hover"
                  color="primary"
                  sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Find the parent campaign
                    const parentCampaign = campaigns.find(c => c.campaign === adGroup.parentCampaign);
                    if (parentCampaign) {
                      // Set the campaign as selected in reports
                      setReportsSelectedCampaigns([parentCampaign.id]);
                      // Set the date range based on campaign dates
                      const campaignStart = parentCampaign.startDate ? new Date(parentCampaign.startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
                      const campaignEnd = parentCampaign.endDate ? new Date(parentCampaign.endDate) : new Date();
                      setReportsStartDate(campaignStart);
                      setReportsEndDate(campaignEnd);
                    }
                    // Navigate to reports view
                    setCurrentView('reports');
                    setActiveNavItem('Reports');
                  }}
                >
                  View full report
                </Link>
              </Box>
            </Box>
          )}
          
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white',
            mb: 3
          }}>
            <Typography variant="h2">
              Optimization goal
            </Typography>
            {campaignGoal === 'Awareness' ? (
              <>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
                  Goal
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Reach
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
                  Event tracking
                </Typography>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                  <InputLabel>Event group</InputLabel>
                  <Select
                    value={budgetConversionEvent}
                    onChange={(e) => setBudgetConversionEvent(e.target.value)}
                    label="Event group"
                  >
                    <MenuItem value="default_event_group">Default Event Group</MenuItem>
                    <MenuItem value="impressions">Impressions</MenuItem>
                    <MenuItem value="video_views">Video views</MenuItem>
                    <MenuItem value="reach">Reach</MenuItem>
                    <MenuItem value="frequency">Frequency</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              </>
            ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Typography variant="body1" color="text.secondary" sx={{ width: '240px', minWidth: '240px', whiteSpace: 'nowrap', mr: 2 }}>
                Conversion event
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel>Event</InputLabel>
                <Select
                  value={budgetConversionEvent}
                  onChange={(e) => setBudgetConversionEvent(e.target.value)}
                  label="Event"
                  renderValue={(selected) => {
                    const eventData = {
                      'page_views': { label: 'Page views', icon: <PageviewIcon sx={{ fontSize: 20 }} /> },
                      'sign_ups': { label: 'Sign ups', icon: <PersonAddIcon sx={{ fontSize: 20 }} /> },
                      'leads': { label: 'Leads', icon: <LeadsIcon sx={{ fontSize: 20 }} /> },
                      'downloads': { label: 'Downloads', icon: <DownloadIcon sx={{ fontSize: 20 }} /> },
                      'purchases': { label: 'Purchases', icon: <ShoppingCartIcon sx={{ fontSize: 20 }} /> },
                      'app_installs': { label: 'App installs', icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} /> },
                      'subscriptions': { label: 'Subscriptions', icon: <SubscriptionsIcon sx={{ fontSize: 20 }} /> }
                    };
                    const selectedEvent = eventData[selected];
                    return selectedEvent ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {selectedEvent.icon}
                        <Typography variant="body2">{selectedEvent.label}</Typography>
                      </Box>
                    ) : 'Select';
                  }}
                >
                  <MenuItem value="page_views">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PageviewIcon sx={{ fontSize: 20 }} />
                      <Box>
                        <Typography variant="body2">Page views</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track when users visit specific pages</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="sign_ups">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PersonAddIcon sx={{ fontSize: 20 }} />
                      <Box>
                        <Typography variant="body2">Sign ups</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track user registrations and account creation</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="leads">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LeadsIcon sx={{ fontSize: 20 }} />
                      <Box>
                        <Typography variant="body2">Leads</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track form submissions and contact requests</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="downloads">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DownloadIcon sx={{ fontSize: 20 }} />
                      <Box>
                        <Typography variant="body2">Downloads</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track file and content downloads</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="purchases">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ShoppingCartIcon sx={{ fontSize: 20 }} />
                      <Box>
                        <Typography variant="body2">Purchases</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track completed transactions and sales</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="app_installs">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneAndroidIcon sx={{ fontSize: 20 }} />
                      <Box>
                        <Typography variant="body2">App installs</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track mobile app installations</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value="subscriptions" disabled>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.5 }}>
                      <SubscriptionsIcon sx={{ fontSize: 20 }} />
                      <Box>
                        <Typography variant="body2">Subscriptions</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track recurring subscription signups</Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body1" color="text.secondary">
                in
              </Typography>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel>Event group</InputLabel>
                <Select value={budgetEventGroup} onChange={(e) => setBudgetEventGroup(e.target.value)} label="Event group">
                  <MenuItem value="XD8AAI1eMy">XD8AAI1eMy</MenuItem>
                  <MenuItem value="XDNEuttoJA">XDNEuttoJA</MenuItem>
                </Select>
              </FormControl>
              </Box>
            </Box>
            )}

            <Divider sx={{ mt: 2 }} />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mt: 2 }}>
              <Typography variant="h2">
                Budget
              </Typography>
              <Tooltip 
                title={
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }} gutterBottom>
                      Lifetime budget (required)
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Set the maximum you'll spend overall for your ad group. Your ad group will stop delivering when your lifetime budget is reached.
                    </Typography>
                    <Typography variant="body2">
                      $500 minimum required
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
                      maxWidth: 300
                    }
                  },
                  arrow: {
                    sx: {
                      color: 'white',
                      '&::before': {
                        border: '1px solid #ccc'
                      }
                    }
                  }
                }}
              >
                <HelpOutlineIcon fontSize="small" color="action" />
              </Tooltip>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
              <Typography variant="body1" color="text.secondary" sx={{ width: '240px', flexShrink: 0, whiteSpace: 'nowrap' }}>
                Lifetime
                <Typography component="span" sx={{ color: 'red', ml: 0.5 }}>
                  *
                </Typography>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TextField
                  value={lifetimeBudget ? parseFloat(parseFloat(lifetimeBudget).toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : lifetimeBudget}
                  onChange={handleLifetimeBudgetChange}
                  onBlur={handleLifetimeBudgetBlur}
                  onKeyPress={handleLifetimeBudgetKeyPress}
                  variant="outlined"
                  size="small"
                  sx={{ width: '200px' }}
                  label="Budget"
                  placeholder="Enter amount"
                  error={budgetError}
                  helperText={budgetError ? '$500 minimum required' : ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        $
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        USD
                      </InputAdornment>
                    )
                  }}
                />
                {isBudgetSaving && (
                  <Typography variant="caption" color="success.main" sx={{ fontSize: '12px', ml: 1 }}>
                    Saved
                  </Typography>
                )}
                {selectedProfileOption === 'Managed Service User' && (
                  <>
                    <Typography variant="body1" color="text.secondary">=</Typography>
                    <TextField
                      label="Contracted impressions"
                      value={contractedImpressions ? parseFloat(contractedImpressions).toLocaleString() : '0'}
                      onChange={handleContractedImpressionsChange}
                      variant="outlined"
                      size="small"
                      sx={{ width: '180px' }}
                    />
                    <Typography variant="body1" color="text.secondary">x</Typography>
                    <TextField
                      label="Buffer"
                      value={bufferPercent}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === '' || /^\d*\.?\d*$/.test(val)) setBufferPercent(val);
                      }}
                      variant="outlined"
                      size="small"
                      sx={{ width: '70px' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">%</InputAdornment>
                        )
                      }}
                    />
                    <Typography variant="body1" color="text.secondary">=</Typography>
                    <TextField
                      label="Total impressions"
                      value={
                        contractedImpressions && bufferPercent
                          ? Math.round(parseFloat(contractedImpressions) * (1 + parseFloat(bufferPercent) / 100)).toLocaleString()
                          : '0'
                      }
                      variant="outlined"
                      size="small"
                      sx={{ width: '180px' }}
                      InputProps={{ readOnly: true }}
                    />
                  </>
                )}
              </Box>
            </Box>
            
            <Divider sx={{ mt: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Typography variant="h2">
                Schedule
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  // Load existing ad group dayparting into temp state for editing
                  const existingDayparting = adGroup?.dayparting ? new Set(adGroup.dayparting) : new Set();
                  setTempDayparting(existingDayparting);
                  setScheduleEditDrawerOpen(true);
                }}
              >
                Edit
              </Button>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
              <Typography variant="body1" color="text.secondary" sx={{ width: '240px' }}>
                Dates
                <Typography component="span" sx={{ color: 'red', ml: 0.5 }}>
                  *
                </Typography>
              </Typography>
              <DateRangeField sx={{ gap: '6px' }} />
            </Box>

            {/* Only show Dayparts table if time slots are selected */}
            {selectedTimeSlots.size > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Dayparts
                </Typography>
                <TableContainer component={Paper} sx={{ maxHeight: 200, boxShadow: 'none', borderRadius: 0 }}>
                  <Table size="small" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', py: 0.25, px: 0.5 }}>Day</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', py: 0.25, px: 0.5 }}>Time</TableCell>
                        <TableCell sx={{ width: '60px', py: 0.25, px: 0.5 }}></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {getSelectedTimeSlotsList().map(({ dayKey, dayName, timeDisplay, hours }) => (
                        <TableRow key={dayKey}>
                          <TableCell sx={{ py: 0.25, px: 0.5 }}>
                            <Link 
                              href="#" 
                              underline="hover"
                              color="primary"
                              sx={{ cursor: 'pointer' }}
                              onClick={(e) => {
                                e.preventDefault();
                                // Load existing ad group dayparting into temp state for editing
                                const existingDayparting = adGroup?.dayparting ? new Set(adGroup.dayparting) : new Set();
                                setTempDayparting(existingDayparting);
                                setScheduleEditDrawerOpen(true);
                              }}
                            >
                              {dayName}
                            </Link>
                          </TableCell>
                          <TableCell sx={{ py: 0.25, px: 0.5 }}>{timeDisplay}</TableCell>
                          <TableCell sx={{ py: 0.25, px: 0.5 }}>
                            <IconButton
                              size="small"
                              onClick={() => handleRemoveDayTimeSlots(dayKey, hours)}
                              sx={{ color: 'grey.500' }}
                            >
                              <RemoveCircleOutlineIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Box>
          
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white',
            mb: 3
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h2">
                Locations
              </Typography>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => {
                  setDrawerContextProp('locations');
                  setDrawerOpenProp(true);
                }}
              >
                Edit
              </Button>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ 
                width: '24px',
                height: '16px',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid #ccc',
                position: 'relative',
                background: 'linear-gradient(to bottom, #B22234 0%, #B22234 7.7%, #FFFFFF 7.7%, #FFFFFF 15.4%, #B22234 15.4%, #B22234 23.1%, #FFFFFF 23.1%, #FFFFFF 30.8%, #B22234 30.8%, #B22234 38.5%, #FFFFFF 38.5%, #FFFFFF 46.2%, #B22234 46.2%, #B22234 53.9%, #FFFFFF 53.9%, #FFFFFF 61.6%, #B22234 61.6%, #B22234 69.3%, #FFFFFF 69.3%, #FFFFFF 77%, #B22234 77%, #B22234 84.7%, #FFFFFF 84.7%, #FFFFFF 92.4%, #B22234 92.4%, #B22234 100%)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '40%',
                  height: '46%',
                  backgroundColor: '#3C3B6E',
                  background: `
                    radial-gradient(circle at 16.7% 16.7%, white 1px, transparent 1px),
                    radial-gradient(circle at 50% 16.7%, white 1px, transparent 1px),
                    radial-gradient(circle at 83.3% 16.7%, white 1px, transparent 1px),
                    radial-gradient(circle at 33.3% 41.7%, white 1px, transparent 1px),
                    radial-gradient(circle at 66.7% 41.7%, white 1px, transparent 1px),
                    radial-gradient(circle at 16.7% 66.7%, white 1px, transparent 1px),
                    radial-gradient(circle at 50% 66.7%, white 1px, transparent 1px),
                    radial-gradient(circle at 83.3% 66.7%, white 1px, transparent 1px),
                    #3C3B6E
                  `,
                  backgroundSize: '100% 100%'
                }
              }}>
              </Box>
              <Typography variant="body1">
                United States
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white',
            mb: 3
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h2">
                Audience
              </Typography>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => setAudienceDrawerOpen(true)}
              >
                Edit
              </Button>
            </Box>
            
            <Typography variant="body1">
              Optimized audience
            </Typography>
            
        <Typography variant="caption" color="text.secondary">
          Automatically targets the best performing demographic based on your advertising objective
        </Typography>
      </Box>
      
      {/* Only show Placement card if ad group has "In-content video" creatives */}
      {adGroup.creatives && adGroup.creatives.some(creative => creative.type === 'In-content video') && (
        <PlacementCard
          automaticPlacement={automaticPlacement}
          setAutomaticPlacement={setAutomaticPlacement}
          placementToggle={placementToggle}
          setPlacementToggle={setPlacementToggle}
          onEdit={() => setPlacementDrawerOpen(true)}
        />
      )}

      {/* Delivery Card */}
      <DeliveryCard
        autoBid={autoBid}
        setAutoBid={setAutoBid}
        maxBid={maxBid}
        setMaxBid={setMaxBid}
        showAdvancedSettings={showAdvancedSettings}
        setShowAdvancedSettings={setShowAdvancedSettings}
        selectedProfileOption={selectedProfileOption}
      />          {/* Creatives Card */}
          <CreativesCard 
            adGroup={adGroup}
            isSelected={isSelected}
            handleCampaignCheckboxClick={handleCampaignCheckboxClick}
            onAddCreative={(selectedAdGroup) => {
              setSelectedAdGroupForCreatives(selectedAdGroup);
              setCreativesDrawerOpen(true);
            }}
            getCreativesForAdGroup={getCreativesForAdGroup}
            onEditCreative={handleEditCreativeDrawerOpen}
            onSelectCreativeType={setSelectedCreativeType}
          />
        </Box>
      </Box>
    </Container>
    
    {/* Bottom Toolbar for Ad Group Details Page */}
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTop: '1px solid #e0e0e0',
      p: 2,
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 'none', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small" color="primary">
            <MoreHorizIcon />
          </IconButton>
          <StatusComponent status={getEffectiveAdGroupStatus(adGroup)} tooltip={adGroup.statusReason === 'campaign_paused' ? 'Campaign paused' : null} />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="caption" color="text.secondary" sx={{ alignSelf: 'center', mr: 2 }}>
            {isSaving || isBudgetSaving ? '✓ Saved' : `Last updated ${new Date().toLocaleString()}`}
          </Typography>
          {getEffectiveAdGroupStatus(adGroup) === 'Active' ? (
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={() => {
                setCurrentView('reports');
                setActiveNavItem('Reports');
              }}
            >
              Run report
            </Button>
          ) : getEffectiveAdGroupStatus(adGroup) === 'Ended' ? (
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={() => {
                setCurrentView('reports');
                setActiveNavItem('Reports');
              }}
            >
              Run report
            </Button>
          ) : adGroup.status === 'Draft' ? (
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              disabled={!(adGroup.lifetimeBudget || adGroup.budget) || !adGroup.startDate || !adGroup.endDate || !adGroup.creatives || adGroup.creatives.length === 0}
              onClick={() => {
                const now = new Date();
                const newStatus = adGroup.startDate && new Date(adGroup.startDate) > now ? 'Scheduled' : 'Active';
                // If going Active, must have an active creative
                const finalStatus = newStatus === 'Active' && !(adGroup.creatives && adGroup.creatives.some(c => c.status === 'Active')) ? 'Not delivering' : newStatus;
                setAdGroups(prev => prev.map(ag => ag.id === adGroup.id ? { ...ag, status: finalStatus, previousStatus: 'Draft' } : ag));
                setSelectedAdGroupForDetails({ ...adGroup, status: finalStatus, previousStatus: 'Draft' });
                // If parent campaign is Draft, transition it to Active since not all ad groups are Draft anymore
                const parentCampaign = campaigns.find(c => c.campaign === adGroup.parentCampaign);
                if (parentCampaign && parentCampaign.status === 'Draft') {
                  setCampaigns(prev => prev.map(c => c.id === parentCampaign.id ? { ...c, status: 'Active', previousStatus: 'Draft' } : c));
                }
                setToastMessage('Ad group published successfully');
                setToastOpen(true);
              }}
            >
              Publish
            </Button>
          ) : null}
        </Box>
      </Box>
    </Box>
    
    <AudienceDrawer
      open={audienceDrawerOpen}
      onClose={() => setAudienceDrawerOpen(false)}
      audienceSelection={audienceSelection}
      setAudienceSelection={setAudienceSelection}
      selectedAgeRanges={selectedAgeRanges}
      setSelectedAgeRanges={setSelectedAgeRanges}
      selectedIncomeRanges={selectedIncomeRanges}
      setSelectedIncomeRanges={setSelectedIncomeRanges}
    />
    </>
    );
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#20004c", height: "60px" }}>
        <Toolbar sx={{ height: "100%", minHeight: "60px" }}>
          <Box 
            onClick={() => { setCurrentView('landing'); setActiveNavItem(''); }}
            sx={{ 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <RokuLogo />
          </Box>
          <Typography 
            variant="h6" 
            onClick={() => { setCurrentView('landing'); setActiveNavItem(''); }}
            sx={{ 
              mr: 2,
              cursor: 'pointer'
            }}
          >
            Ads Manager
          </Typography>
          <Button
            onClick={(e) => setAccountPickerAnchor(e.currentTarget)}
            sx={{
              color: 'white',
              backgroundColor: '#5D12B7',
              height: '36px',
              textTransform: 'none',
              px: 2,
              '&:hover': { backgroundColor: '#4a0e96' },
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="caption" sx={{ display: 'block', lineHeight: 1, mb: '-2px', color: 'white' }}>{selectedAccount.org}{accountOrgs.find(o => o.name === selectedAccount.org)?.managed && ' (Managed)'}</Typography>
              <Typography sx={{ color: 'white', fontSize: '0.875rem', fontWeight: 'bold' }}>{selectedAccount.account}</Typography>
            </Box>
          </Button>
          <Popover
            open={Boolean(accountPickerAnchor)}
            anchorEl={accountPickerAnchor}
            onClose={() => { setAccountPickerAnchor(null); setAccountSearchQuery(''); }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{ sx: { width: 480, maxHeight: 600, p: 0 } }}
            disableAutoFocus
            disableEnforceFocus
          >
            <Box sx={{ p: 2 }}>
              <TextField
                fullWidth
                size="small"
                inputRef={(input) => { if (input) setTimeout(() => input.focus(), 100); }}
                placeholder="Search for your account"
                value={accountSearchQuery}
                onChange={(e) => setAccountSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} /></InputAdornment>,
                  endAdornment: accountSearchQuery && (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setAccountSearchQuery('')} edge="end">
                        <ClearIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <Divider sx={{ mb: 2, mx: -2 }} />
              {/* Recent Accounts */}
              {!accountSearchQuery && (
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: 'text.secondary' }}>Recent accounts</Typography>
              )}
              {filteredRecentAccounts.map((acct, i) => (
                <Box
                  key={i}
                  sx={{ py: 1, px: 0, cursor: 'pointer', borderRadius: 1, '&:hover': { backgroundColor: '#f5f5f5' } }}
                  onClick={() => handleAccountSelect(acct)}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{acct.account}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {acct.org}{accountOrgs.find(o => o.name === acct.org)?.managed && <> • <span style={{ color: '#6a1b9a', fontWeight: 'bold' }}>Managed</span></>}
                  </Typography>
                </Box>
              ))}
              {/* All Accounts */}
              {!accountSearchQuery && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, mt: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>All accounts</Typography>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none', fontSize: '0.75rem' }}>View all</Button>
              </Box>
              )}
              {filteredOrgs.map((org, i) => (
                <Box key={i} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, backgroundColor: '#f5f5f5', borderRadius: 0, py: 1, px: 2, mx: -2 }}>
                    <Avatar sx={{ width: 28, height: 28, fontSize: '0.75rem', bgcolor: '#9e9e9e' }}>{org.name.split(' ').map(w => w[0]).join('')}</Avatar>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {org.name}{org.managed && <> • <span style={{ color: '#6a1b9a' }}>Managed</span></>}
                    </Typography>
                    <Chip label={`${org.accounts.length} accounts`} size="small" sx={{ ml: 'auto', fontSize: '0.7rem', height: 22, backgroundColor: '#e0e0e0', color: '#424242', fontWeight: 500 }} />
                  </Box>
                  {org.accounts.map((account, j) => (
                    <Box
                      key={j}
                      sx={{ py: 1.5, pl: '36px', cursor: 'pointer', borderRadius: 1, '&:hover': { backgroundColor: '#f5f5f5' } }}
                      onClick={() => handleAccountSelect({ org: org.name, account })}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>{account}</Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Popover>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" sx={{ 
            mr: 1,
            padding: '4px 12px 4px 12px',
            backgroundColor: activeNavItem === 'Campaigns' ? '#fefefe26' : 'transparent',
            border: activeNavItem === 'Campaigns' ? '1px solid #fefefe40' : '1px solid transparent',
            borderRadius: '6px',
            '&:hover': {
              border: '1px solid white',
              borderRadius: '6px'
            }
          }} onClick={() => {
            setActiveNavItem('Campaigns');
            handleBackToList();
          }}>
            Campaigns
          </Button>
          <Button 
            color="inherit" 
            sx={{ 
              mr: 2,
              padding: '4px 12px 4px 12px',
              backgroundColor: activeNavItem === 'Reports' ? '#fefefe26' : 'transparent',
              border: activeNavItem === 'Reports' ? '1px solid #fefefe40' : '1px solid transparent',
              borderRadius: '6px',
              '&:hover': {
                border: '1px solid white',
                borderRadius: '6px'
              }
            }} 
            onClick={(event) => {
              setActiveNavItem('Reports');
              setReportsMenuAnchorEl(event.currentTarget);
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            Reports
          </Button>
          <Menu
            anchorEl={reportsMenuAnchorEl}
            open={reportsMenuOpen}
            onClose={() => setReportsMenuAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'reports-button',
            }}
            sx={{
              '& .MuiPaper-root': {
                mt: 1,
                minWidth: 160,
              },
            }}
          >
            <MenuItem onClick={() => {
              setReportsMenuAnchorEl(null);
              setCurrentView('reports');
              setActiveNavItem('Reports');
            }}>
              Reports
            </MenuItem>
            <MenuItem onClick={() => {
              setReportsMenuAnchorEl(null);
              // Add navigation logic for Custom Reports here
              console.log('Navigate to Custom Reports');
            }}>
              Custom Reports
            </MenuItem>
          </Menu>
          <IconButton 
            color="inherit"
            onClick={handleProfileMenuClick}
            sx={{
              backgroundColor: "#BDBDBD",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              "&:hover": {
                backgroundColor: "#A5A5A5"
              }
            }}
          >
            <PersonIcon />
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchorEl}
            open={profileMenuOpen}
            onClose={handleProfileMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem 
              onClick={() => handleProfileMenuItemClick('Self Service User')}
              selected={selectedProfileOption === 'Self Service User'}
            >
              Self Service User
            </MenuItem>
            <MenuItem 
              onClick={() => handleProfileMenuItemClick('Managed Service User')}
              selected={selectedProfileOption === 'Managed Service User'}
            >
              Managed Service User
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {currentView === 'landing' ? (
        <LandingPage
          onCreateCampaign={() => {
            setActiveNavItem('Campaigns');
            setCurrentView('list');
            handleCreateCampaign();
          }}
          onNavigateToCampaigns={() => {
            setActiveNavItem('Campaigns');
            handleBackToList();
          }}
          isManagedUser={selectedProfileOption === 'Managed Service User'}
          onUseVideoCreative={handleCreateAwarenessWithVideoCreative}
          onSetupLeadTracking={handleSetupLeadTracking}
        />
      ) : currentView === 'list' ? (
        <Container maxWidth={false} sx={{ p: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px", width: "100%" }}>
              <TextField 
                placeholder="Search by name or ID"
                value={searchTerm}
                onChange={handleSearchChange}
                variant="outlined"
                sx={{ width: "100%", minWidth: "250px", height: "40px" }}
                InputProps={{
                  sx: { height: "40px" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton 
                        size="small" 
                        onClick={() => setSearchTerm('')}
                        sx={{ p: 0.5 }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <IconButton 
                color="primary"
                sx={{ 
                  height: "40px", 
                  width: "40px",
                  border: "1px solid rgba(0, 0, 0, 0.23)",
                  borderRadius: "4px",
                  "&:hover": {
                    border: "1px solid rgba(0, 0, 0, 0.87)"
                  }
                }}
                title="Filter options"
                onClick={handleFilterMenuOpen}
              >
                <TuneIcon />
              </IconButton>
              <Menu
                anchorEl={filterMenuAnchor}
                open={Boolean(filterMenuAnchor)}
                onClose={handleFilterMenuClose}
              >
                <MenuItem onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={visibleFilters.includes('status')}
                    onChange={() => handleFilterVisibilityChange('status')}
                  />
                  <ListItemText 
                    primary="Status"
                    onClick={() => handleFilterVisibilityChange('status')}
                    sx={{ cursor: 'pointer', ml: 1 }}
                  />
                </MenuItem>
                <MenuItem onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={visibleFilters.includes('creativeType')}
                    onChange={() => handleFilterVisibilityChange('creativeType')}
                  />
                  <ListItemText 
                    primary="Creative Type"
                    onClick={() => handleFilterVisibilityChange('creativeType')}
                    sx={{ cursor: 'pointer', ml: 1 }}
                  />
                </MenuItem>
              </Menu>
              {visibleFilters.includes('status') && (
              <div data-filter="status">
              <FormControl sx={{ minWidth: 120, maxWidth: 360, height: "40px" }} variant="outlined">
              <InputLabel id="status-label" sx={{ fontSize: "14px" }}>Status</InputLabel>
              <Select
                open={statusSelectOpen}
                onOpen={() => setStatusSelectOpen(true)}
                onClose={() => setStatusSelectOpen(false)}
                labelId="status-label"
                value={statusFilter}
                onChange={handleStatusChange}
                label="Status"
                variant="outlined"
                multiple
                renderValue={(selected) => selected.length === 0 ? 'All' : selected.join(', ')}
                title={statusFilter.length === 0 ? 'All statuses' : statusFilter.join(', ')}
                sx={{ 
                  height: "40px",
                  "& .MuiSelect-select": {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }
                }}
              >
                <MenuItem value="Active">
                  <Checkbox checked={statusFilter.indexOf('Active') > -1} />
                  <ListItemText primary="Active" />
                </MenuItem>
                <MenuItem value="Archived">
                  <Checkbox checked={statusFilter.indexOf('Archived') > -1} />
                  <ListItemText primary="Archived" />
                </MenuItem>
                <MenuItem value="Deactivated">
                  <Checkbox checked={statusFilter.indexOf('Deactivated') > -1} />
                  <ListItemText primary="Deactivated" />
                </MenuItem>
                <MenuItem value="Draft">
                  <Checkbox checked={statusFilter.indexOf('Draft') > -1} />
                  <ListItemText primary="Draft" />
                </MenuItem>
                <MenuItem value="Ended">
                  <Checkbox checked={statusFilter.indexOf('Ended') > -1} />
                  <ListItemText primary="Ended" />
                </MenuItem>
                <MenuItem value="Not delivering">
                  <Checkbox checked={statusFilter.indexOf('Not delivering') > -1} />
                  <ListItemText primary="Not delivering" />
                </MenuItem>
                <MenuItem value="Paused">
                  <Checkbox checked={statusFilter.indexOf('Paused') > -1} />
                  <ListItemText primary="Paused" />
                </MenuItem>
                <MenuItem value="Scheduled">
                  <Checkbox checked={statusFilter.indexOf('Scheduled') > -1} />
                  <ListItemText primary="Scheduled" />
                </MenuItem>
              </Select>
            </FormControl>
            </div>
            )}
            {visibleFilters.includes('creativeType') && (
            <div data-filter="creativeType">
            <FormControl sx={{ minWidth: 120, maxWidth: 360, height: "40px" }} variant="outlined">
              <InputLabel 
                id="creative-type-label" 
                shrink={true}
                sx={{ fontSize: "14px" }}
              >
                Creative Type
              </InputLabel>
              <Select
                open={creativeTypeSelectOpen}
                onOpen={() => setCreativeTypeSelectOpen(true)}
                onClose={() => setCreativeTypeSelectOpen(false)}
                labelId="creative-type-label"
                value={selectedCreativeTypes}
                onChange={(event) => setSelectedCreativeTypes(event.target.value)}
                label="Creative Type"
                variant="outlined"
                multiple
                displayEmpty
                renderValue={(selected) => selected.length === 0 ? 'All' : selected.join(', ')}
                title={selectedCreativeTypes.length === 0 ? 'All creative types' : selectedCreativeTypes.join(', ')}
                sx={{ 
                  height: "40px",
                  "& .MuiSelect-select": {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }
                }}
              >
                <MenuItem value="Billboard">
                  <Checkbox checked={selectedCreativeTypes.indexOf('Billboard') > -1} />
                  <ListItemText primary="Billboard" />
                </MenuItem>
                <MenuItem value="In-content video">
                  <Checkbox checked={selectedCreativeTypes.indexOf('In-content video') > -1} />
                  <ListItemText primary="In-content video" />
                </MenuItem>
                <MenuItem value="Marquee">
                  <Checkbox checked={selectedCreativeTypes.indexOf('Marquee') > -1} />
                  <ListItemText primary="Marquee" />
                </MenuItem>
              </Select>
            </FormControl>
            </div>
            )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, pl: "20px" }}>
              <FormControl sx={{ minWidth: 150, height: "40px" }} variant="outlined">
              <InputLabel id="view-label" sx={{ fontSize: "14px" }}>View</InputLabel>
              <Select
                labelId="view-label"
                value={viewMode}
                onChange={handleViewChange}
                label="View"
                variant="outlined"
                sx={{ 
                  height: "40px",
                  color: "primary.main",
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  }
                }}
                renderValue={(value) => (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {value === "Pre-launch" ? (
                      <RocketLaunchIcon sx={{ color: "primary.main" }} />
                    ) : (
                      <TableChartIcon sx={{ color: "primary.main" }} />
                    )}
                    {value}
                  </Box>
                )}
              >
                <MenuItem value="Performance">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <TableChartIcon />
                    Performance
                  </Box>
                </MenuItem>
                <MenuItem value="Pre-launch">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <RocketLaunchIcon />
                    Pre-launch
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 150, height: "40px" }} variant="outlined">
              <InputLabel id="daterange-label" sx={{ fontSize: "14px" }}>Date range</InputLabel>
              <Select
                labelId="daterange-label"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                label="Date range"
                variant="outlined"
                sx={{ 
                  height: "40px",
                  color: "primary.main"
                }}
              >
                <MenuItem value="Yesterday">Yesterday</MenuItem>
                <MenuItem value="Last 7 days">Last 7 days</MenuItem>
                <MenuItem value="Last 14 days">Last 14 days</MenuItem>
                <MenuItem value="Last 30 days">Last 30 days</MenuItem>
                <MenuItem value="Last 90 days">Last 90 days</MenuItem>
                <MenuItem value="Custom">Custom</MenuItem>
              </Select>
            </FormControl>
            </Box>
          </Box>
          
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Tabs 
              value={selectedTab} 
              onChange={handleTabChange} 
              aria-label="campaign tabs"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none'
                }
              }}
            >
              <Tab 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Campaigns
                    <Chip 
                      label={selectedCampaigns[0]?.length > 0 ? `${selectedCampaigns[0].length} selected` : filteredCampaigns.length} 
                      size="small" 
                      sx={{ 
                        height: '20px',
                        fontSize: '12px',
                        backgroundColor: selectedCampaigns[0]?.length > 0 ? '#e3f2fd' : '#f5f5f5',
                        color: selectedCampaigns[0]?.length > 0 ? '#1976d2' : '#666'
                      }} 
                    />
                  </Box>
                }
              />
              <Tab 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Ad groups
                    <Chip 
                      label={selectedCampaigns[1]?.length > 0 ? `${selectedCampaigns[1].length} selected` : filteredAdGroups.length} 
                      size="small" 
                      sx={{ 
                        height: '20px',
                        fontSize: '12px',
                        backgroundColor: selectedCampaigns[1]?.length > 0 ? '#e3f2fd' : '#f5f5f5',
                        color: selectedCampaigns[1]?.length > 0 ? '#1976d2' : '#666'
                      }} 
                    />
                  </Box>
                }
              />
              <Tab 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Ads
                    <Chip 
                      label={selectedCampaigns[2]?.length > 0 ? `${selectedCampaigns[2].length} selected` : 
                        filteredAdGroups.reduce((total, adGroup) => {
                          return total + getCreativesForAdGroup(adGroup).length;
                        }, 0)} 
                      size="small" 
                      sx={{ 
                        height: '20px',
                        fontSize: '12px',
                        backgroundColor: selectedCampaigns[2]?.length > 0 ? '#e3f2fd' : '#f5f5f5',
                        color: selectedCampaigns[2]?.length > 0 ? '#1976d2' : '#666'
                      }} 
                    />
                  </Box>
                }
              />
            </Tabs>
            
            {/* Create Campaign Button - only show when Campaigns tab is selected */}
            {selectedTab === 0 && selectedProfileOption !== 'Managed Service User' && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pr: 1, pb: 1 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="small"
                  onClick={handleCreateCampaign}
                >
                  Create campaign
                </Button>
              </Box>
            )}
            
            {/* View Creatives Grid Control - only show when Creatives tab is selected */}
            {selectedTab === 2 && selectedProfileOption !== 'Self Service User' && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pr: 1, pb: 1 }}>
                <ButtonGroup variant="outlined" size="small">
                  <Button
                    onClick={() => {
                      setShowCreativeGridOverlay(true);
                    }}
                  >
                    View creatives grid
                  </Button>
                  <Button
                    size="small"
                    onClick={(event) => setCreativesMenuAnchorEl(event.currentTarget)}
                    sx={{ px: 1, minWidth: 'auto' }}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            )}
          </Box>
          
          {/* Creatives Menu for Import/Export */}
          <Menu
            anchorEl={creativesMenuAnchorEl}
            open={Boolean(creativesMenuAnchorEl)}
            onClose={() => setCreativesMenuAnchorEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem 
              onClick={() => {
                setCreativesMenuAnchorEl(null);
                // TODO: Implement import functionality
                console.log('Import creatives clicked');
              }}
            >
              Import
            </MenuItem>
            <MenuItem 
              onClick={() => {
                setCreativesMenuAnchorEl(null);
                // TODO: Implement export functionality
                console.log('Export creatives clicked');
              }}
            >
              Export
            </MenuItem>
          </Menu>
          
          {/* Campaign Selection Toolbar */}
          {selectedTab === 0 && selectedCampaigns[0]?.length > 0 && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.75,
              p: 2, 
              backgroundColor: '#f5f5f5', 
              mb: 0 
            }}>
              <Typography variant="body2" color="text.secondary">
                {selectedCampaigns[0].length} selected campaign{selectedCampaigns[0].length > 1 ? 's' : ''}
              </Typography>
              <Button 
                variant="contained" 
                size="small"
                onClick={() => {
                  if (showSelectedOnly) {
                    // Currently showing selected only, switch to show all
                    setShowSelectedOnly(false);
                  } else {
                    // Currently showing all, switch to show selected only
                    setShowSelectedOnly(true);
                  }
                }}
              >
                {showSelectedOnly ? 'Show all' : 'Show selected'}
              </Button>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => {
                  // Get the data to export (either selected campaigns or all filtered campaigns)
                  const dataToExport = showSelectedOnly 
                    ? getFilteredData().filter(item => selectedCampaigns[0]?.includes(item.id))
                    : getFilteredData();
                  
                  // Create CSV content
                  const headers = ['Campaign', 'Objective', 'Status', 'Spend', 'Impressions', 'CPM', 'Goal Actions', 'Goal CPA'];
                  const csvContent = [
                    headers.join(','),
                    ...dataToExport.map(item => [
                      `"${item.campaign}"`,
                      `"${item.goal}${item.goal === 'Conversion' && item.conversionEvent ? ' - ' + ((() => {
                        const eventMapping = {
                          'page_views': 'Page views',
                          'sign_ups': 'Sign ups', 
                          'leads': 'Leads',
                          'downloads': 'Downloads',
                          'purchases': 'Purchases',
                          'app_installs': 'App installs',
                          'subscriptions': 'Subscriptions'
                        };
                        return eventMapping[item.conversionEvent] || item.conversionEvent;
                      })()) : ''}"`,
                      `"${item.status}"`,
                      `"${item.spend}"`,
                      `"${item.impressions}"`,
                      `"${item.cpm}"`,
                      `"${item.goalActions}"`,
                      `"${item.goalCpa}"`
                    ].join(','))
                  ].join('\\n');
                  
                  // Create and trigger download
                  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                  const link = document.createElement('a');
                  if (link.download !== undefined) {
                    const url = URL.createObjectURL(blob);
                    link.setAttribute('href', url);
                    link.setAttribute('download', `campaigns_export_${new Date().toISOString().split('T')[0]}.csv`);
                    link.style.visibility = 'hidden';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
              >
                Export to CSV
              </Button>
            </Box>
          )}
          
          {selectedTab === 2 ? (
            <React.Fragment key="creatives-table">
              {/* Creatives Selection Toolbar */}
              {selectedCreativesForAssignment?.length > 0 && (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 0.75,
                  p: 2, 
                  backgroundColor: '#f5f5f5', 
                  mb: 0 
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {selectedCreativesForAssignment.length} selected creative{selectedCreativesForAssignment.length > 1 ? 's' : ''}
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="small"
                    onClick={() => {
                      if (showSelectedOnly) {
                        setShowSelectedOnly(false);
                      } else {
                        setShowSelectedOnly(true);
                      }
                    }}
                  >
                    {showSelectedOnly ? 'Show all' : 'Show selected'}
                  </Button>
                </Box>
              )}
            <TableContainer component={Paper} sx={{ width: "100%", borderRadius: "0px", boxShadow: "none" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox 
                        size="small"
                        indeterminate={selectedCreativesForAssignment.length > 0 && selectedCreativesForAssignment.length < adGroupsData.flatMap(adGroup => getCreativesForAdGroup(adGroup)).length}
                        checked={selectedCreativesForAssignment.length > 0 && selectedCreativesForAssignment.length === adGroupsData.flatMap(adGroup => getCreativesForAdGroup(adGroup)).length}
                        onChange={handleSelectAllCreatives}
                      />
                    </TableCell>
                    <TableCell sx={{ width: '175px', padding: '8px', display: 'flex', alignItems: 'center', gap: 1, borderBottom: 'none' }}>
                      <IconButton
                        size="small"
                        onClick={() => {
                          const allCampaignNames = [...new Set(adGroupsData.map(adGroup => adGroup.campaign))];
                          const hasCollapsedGroups = allCampaignNames.some(campaign => collapsedCampaigns.has(campaign));
                          
                          if (hasCollapsedGroups) {
                            setCollapsedCampaigns(new Set());
                          } else {
                            setCollapsedCampaigns(new Set(allCampaignNames));
                          }
                        }}
                        sx={{ p: 0.5 }}
                      >
                        {(() => {
                          const allCampaignNames = [...new Set(adGroupsData.map(adGroup => adGroup.campaign))];
                          const hasCollapsedGroups = allCampaignNames.some(campaign => collapsedCampaigns.has(campaign));
                          return hasCollapsedGroups ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowUpIcon fontSize="small" />;
                        })()}
                      </IconButton>
                      <span>Preview</span>
                    </TableCell>
                    <TableCell sx={{ width: '100%' }}>Creative Name</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>Status</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Group creatives by ad groups, similar to how ad groups are grouped by campaigns */}
                  {filteredAdGroups.map((adGroup) => {
                    const creativesForAdGroup = getCreativesForAdGroup(adGroup)
                      .filter(creative => 
                        (selectedCreativeTypes.length === 0 || 
                         selectedCreativeTypes.includes(creative.type)) &&
                        (selectedCreativeStatuses.length === 0 || 
                         selectedCreativeStatuses.includes(creative.status)) &&
                        (creativeSearchTerm === '' ||
                         creative.name.toLowerCase().includes(creativeSearchTerm.toLowerCase()))
                      );
                    
                    // Show ad group header even if no creatives match the filter
                    // Only hide if there's an active search/filter that excludes all creatives AND the ad group has no creatives at all
                    const hasAnyCreatives = getCreativesForAdGroup(adGroup).length > 0;
                    if (creativesForAdGroup.length === 0 && hasAnyCreatives) {
                      return null;
                    }

                    return (
                      <React.Fragment key={adGroup.id}>
                        {/* Ad Group Header Row */}
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                          <TableCell padding="checkbox" sx={{ backgroundColor: '#f5f5f5' }}>
                            <Checkbox
                              size="small"
                              indeterminate={(() => {
                                const creativeIds = creativesForAdGroup.map(c => c.id);
                                const selectedCount = creativeIds.filter(id => selectedCreativesForAssignment.includes(id)).length;
                                return selectedCount > 0 && selectedCount < creativeIds.length;
                              })()}
                              checked={(() => {
                                const creativeIds = creativesForAdGroup.map(c => c.id);
                                return creativeIds.length > 0 && creativeIds.every(id => selectedCreativesForAssignment.includes(id));
                              })()}
                              onChange={() => {
                                const creativeIds = creativesForAdGroup.map(c => c.id);
                                const areAllSelected = creativeIds.every(id => selectedCreativesForAssignment.includes(id));
                                if (areAllSelected) {
                                  // Deselect all creatives in this ad group
                                  setSelectedCreativesForAssignment(prev => prev.filter(id => !creativeIds.includes(id)));
                                } else {
                                  // Select all creatives in this ad group
                                  setSelectedCreativesForAssignment(prev => [...new Set([...prev, ...creativeIds])]);
                                }
                              }}
                            />
                          </TableCell>
                          <TableCell colSpan={4} sx={{ 
                            fontWeight: 'bold', 
                            fontSize: '0.9rem',
                            backgroundColor: '#f5f5f5',
                            borderTop: '1px solid #e0e0e0',
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: '#eeeeee'
                            }
                          }}
                          onClick={() => toggleCampaignCollapse(adGroup.campaign)}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                {collapsedCampaigns.has(adGroup.campaign) ? (
                                  <ChevronRightIcon fontSize="small" />
                                ) : (
                                  <KeyboardArrowDownIcon fontSize="small" />
                                )}
                                <span>{adGroup.campaign}</span>
                                {(() => {
                                  // Group creatives by status and count them
                                  const statusCounts = {};
                                  creativesForAdGroup.forEach(creative => {
                                    statusCounts[creative.status] = (statusCounts[creative.status] || 0) + 1;
                                  });

                                  // Helper function to get lighter background color for each status
                                  const getStatusPillColor = (status) => {
                                    switch (status) {
                                      case 'Active':
                                      case 'Approved':
                                        return '#e8f5e8'; // Light green
                                      case 'Archived':
                                        return '#e8f5e8'; // Light green
                                      case 'Creative in review':
                                      case 'In review':
                                      case 'Draft':
                                      case 'Scheduled':
                                      case 'Event not yet configured':
                                        return '#e3f2fd'; // Light blue
                                      case 'Creative needed':
                                      case 'Deactivated':
                                      case 'Rejected':
                                      case 'Creatives required':
                                        return '#ffebee'; // Light red
                                      case 'Ended':
                                        return '#f5f5f5'; // Light grey
                                      case 'Inactive':
                                        return '#fff3e0'; // Light orange
                                      default:
                                        return '#f5f5f5'; // Light grey
                                    }
                                  };

                                  return Object.entries(statusCounts).map(([status, count]) => (
                                    <Box 
                                      key={status} 
                                      sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 0.5,
                                        backgroundColor: getStatusPillColor(status),
                                        borderRadius: '12px',
                                        padding: '2px 6px',
                                        border: '1px solid rgba(0, 0, 0, 0.1)'
                                      }}
                                    >
                                      <StatusComponent status={status} />
                                      <Chip 
                                        label={count} 
                                        size="small" 
                                        sx={{ 
                                          height: '16px', 
                                          fontSize: '10px', 
                                          minWidth: '16px',
                                          backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                        }}
                                      />
                                    </Box>
                                  ));
                                })()}
                                {creativesForAdGroup.length === 0 && (
                                  <StatusComponent status="Creatives required" />
                                )}
                              </Box>
                              <Button 
                                variant="outlined" 
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedAdGroupForCreatives(adGroup);
                                  setCreativesDrawerOpen(true);
                                }}
                                sx={{
                                  textTransform: 'none'
                                }}
                              >
                                Add creatives
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                        
                        {/* Creative Rows - Only show if not collapsed */}
                        {!collapsedCampaigns.has(adGroup.campaign) && creativesForAdGroup.length > 0 && creativesForAdGroup.map((creative) => (
                          <TableRow key={creative.id}>
                            <TableCell padding="checkbox">
                              <Checkbox
                                size="small"
                                checked={selectedCreativesForAssignment.includes(creative.id)}
                                onChange={() => handleCreativeSelection(creative.id)}
                              />
                            </TableCell>
                            <TableCell sx={{ width: '175px', padding: '8px' }}>
                              {creative.type === 'In-content video' ? (
                                <Box
                                  component="video"
                                  src={IncontentVideo}
                                  sx={{
                                    width: '175px',
                                    aspectRatio: '16/9',
                                    objectFit: 'cover',
                                    backgroundColor: '#f5f5f5'
                                  }}
                                  controls
                                  muted
                                />
                              ) : creative.type === 'Marquee' ? (
                                <Box
                                  component="img"
                                  src={Marquee}
                                  alt={creative.name}
                                  sx={{
                                    width: '175px',
                                    aspectRatio: '16/9',
                                    objectFit: 'cover',
                                    backgroundColor: '#f5f5f5'
                                  }}
                                />
                              ) : creative.type === 'Billboard' ? (
                                <Box
                                  component="img"
                                  src={Billboard}
                                  alt={creative.name}
                                  sx={{
                                    width: '175px',
                                    aspectRatio: '16/9',
                                    objectFit: 'cover',
                                    backgroundColor: '#f5f5f5'
                                  }}
                                />
                              ) : (
                                <Box
                                  component="img"
                                  src={getImagePath("images/creative-placeholder.jpg")}
                                  alt={creative.name}
                                  sx={{
                                    width: '175px',
                                    aspectRatio: '16/9',
                                    objectFit: 'cover',
                                    backgroundColor: '#f5f5f5'
                                  }}
                                />
                              )}
                            </TableCell>
                            <TableCell component="th" scope="row" sx={{ width: '100%' }}>
                              <Link 
                                href="#" 
                                underline="hover" 
                                color="primary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (creative.type === 'In-content video') {
                                    handleEditCreativeDrawerOpen(creative);
                                  }
                                }}
                                sx={{ cursor: 'pointer' }}
                              >
                                {creative.name}
                              </Link>
                            </TableCell>
                            <TableCell sx={{ whiteSpace: 'nowrap' }}>
                              <StatusComponent status={creative.status} tooltip={creative.statusReason === 'campaign_paused' ? 'Campaign paused' : null} />
                            </TableCell>
                            <TableCell sx={{ whiteSpace: 'nowrap' }}>{creative.type}</TableCell>
                          </TableRow>
                        ))}
                        
                        {/* Empty state when no creatives - show creative tiles */}
                        {!collapsedCampaigns.has(adGroup.campaign) && creativesForAdGroup.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={5} sx={{ padding: 3, backgroundColor: 'white' }}>
                              <EmptyCreativesState 
                                adGroup={adGroup}
                                onOpenCreativeDrawer={(ag) => {
                                  setSelectedAdGroupForCreatives(ag);
                                  setCreativesDrawerOpen(true);
                                }}
                                onSelectCreativeType={setSelectedCreativeType}
                                onOpenAssignCreativeDrawer={(ag) => {
                                  setSelectedAdGroupForCreatives(ag);
                                  setAssignCreativeDrawerOpen(true);
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            </React.Fragment>
          ) : selectedTab !== 2 ? (
            <React.Fragment key="campaigns-adgroups-table">
              {selectedTab === 1 && (
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center', 
                  mb: 0,
                  p: selectedCampaigns[1].length > 0 ? 1.5 : 0,
                  backgroundColor: selectedCampaigns[1].length > 0 ? '#f5f5f5' : 'transparent'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    {selectedCampaigns[1].length > 0 && (
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {selectedCampaigns[1].length} selected ad group{selectedCampaigns[1].length > 1 ? 's' : ''}
                        </Typography>
                        <Button 
                          variant="contained" 
                          size="small"
                          onClick={() => {
                            if (showSelectedOnly) {
                              setShowSelectedOnly(false);
                            } else {
                              setShowSelectedOnly(true);
                            }
                          }}
                        >
                          {showSelectedOnly ? 'Show all' : 'Show selected'}
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={() => {
                            // Open the drawer for the first selected ad group
                            const selectedAdGroupIds = selectedCampaigns[1];
                            if (selectedAdGroupIds && selectedAdGroupIds.length > 0) {
                              const adGroup = getFilteredData().find(ag => ag.id === selectedAdGroupIds[0]);
                              if (adGroup) {
                                setSelectedAdGroupForCreatives(adGroup);
                                setCreativesDrawerOpen(true);
                              }
                            }
                          }}
                        >
                          Add creatives
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={() => setScheduleEditDrawerOpen(true)}
                        >
                          Edit schedule
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                        >
                          Edit delivery
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={() => setAdGroupAudienceDrawerOpen(true)}
                        >
                          Edit audience
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                        >
                          Edit location
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                        >
                          Edit Placement
                        </Button>
                      </>
                    )}
                  </Box>
                </Box>
              )}
              
              <TableContainer component={Paper} sx={{ width: "100%", borderRadius: "0px", boxShadow: "none" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="small"
                      indeterminate={selectedCampaigns[selectedTab]?.length > 0 && selectedCampaigns[selectedTab]?.length < getFilteredData().length}
                      checked={getFilteredData().length > 0 && selectedCampaigns[selectedTab]?.length === getFilteredData().length}
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {selectedTab === 1 && (
                        <IconButton
                          size="small"
                          onClick={() => {
                            // Get all unique parent campaigns from the FILTERED dataset (what's displayed)
                            const filteredData = getFilteredData();
                            const displayedParentCampaigns = [...new Set(filteredData.map(adGroup => adGroup.parentCampaign))];
                            // Check if ALL displayed groups are collapsed
                            const allGroupsCollapsed = displayedParentCampaigns.every(campaign => collapsedCampaigns.has(campaign));
                            
                            if (allGroupsCollapsed) {
                              // If all displayed groups are collapsed, expand all
                              expandAllCreativeGroups();
                            } else {
                              // If not all displayed groups are collapsed, collapse all
                              collapseAllCreativeGroups();
                            }
                          }}
                          sx={{ p: 0.5, minWidth: 'auto' }}
                          title={(() => {
                            const filteredData = getFilteredData();
                            const displayedParentCampaigns = [...new Set(filteredData.map(adGroup => adGroup.parentCampaign))];
                            const allGroupsCollapsed = displayedParentCampaigns.every(campaign => collapsedCampaigns.has(campaign));
                            return allGroupsCollapsed ? 'Expand all' : 'Collapse all';
                          })()}
                        >
                          {(() => {
                            const filteredData = getFilteredData();
                            const displayedParentCampaigns = [...new Set(filteredData.map(adGroup => adGroup.parentCampaign))];
                            const allGroupsCollapsed = displayedParentCampaigns.every(campaign => collapsedCampaigns.has(campaign));
                            return allGroupsCollapsed ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowUpIcon fontSize="small" />;
                          })()}
                        </IconButton>
                      )}
                      <span>{selectedTab === 0 ? 'Campaign' : 'Ad group'}</span>
                    </Box>
                  </TableCell>
                  {selectedTab === 0 && <TableCell sx={{ fontWeight: 'bold' }}>Objective</TableCell>}
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                  {viewMode === 'Pre-launch' && <TableCell align="right" sx={{ fontWeight: 'bold' }}>Budget</TableCell>}
                  {viewMode === 'Performance' && <TableCell sx={{ fontWeight: 'bold' }}>Off / On</TableCell>}
                  {viewMode === 'Performance' && (
                    <>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>Spend</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>Results</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>Cost per result</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>CPM</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>Impressions</TableCell>
                    </>
                  )}
                  <TableCell align="center" sx={{ fontWeight: 'bold', width: '60px' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedTab === 1 ? (
                  // Grouped Ad Groups by Parent Campaign
                  (() => {
                    const groupedAdGroups = getFilteredData().reduce((groups, adGroup) => {
                      const parentCampaign = adGroup.parentCampaign;
                      if (!groups[parentCampaign]) {
                        groups[parentCampaign] = [];
                      }
                      groups[parentCampaign].push(adGroup);
                      return groups;
                    }, {});

                    return Object.entries(groupedAdGroups).map(([parentCampaign, adGroups]) => (
                      <React.Fragment key={parentCampaign}>
                        {/* Campaign Header Row */}
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                          <TableCell padding="checkbox" sx={{ backgroundColor: '#f5f5f5' }}>
                            <Checkbox
                              size="small"
                              indeterminate={(() => {
                                const adGroupIds = adGroups.map(ag => ag.id);
                                const selectedIds = selectedCampaigns[selectedTab] || [];
                                const selectedCount = adGroupIds.filter(id => selectedIds.includes(id)).length;
                                return selectedCount > 0 && selectedCount < adGroupIds.length;
                              })()}
                              checked={(() => {
                                const adGroupIds = adGroups.map(ag => ag.id);
                                const selectedIds = selectedCampaigns[selectedTab] || [];
                                return adGroupIds.length > 0 && adGroupIds.every(id => selectedIds.includes(id));
                              })()}
                              onChange={() => {
                                const adGroupIds = adGroups.map(ag => ag.id);
                                const selectedIds = selectedCampaigns[selectedTab] || [];
                                const areAllSelected = adGroupIds.every(id => selectedIds.includes(id));
                                handleCampaignGroupSelect(parentCampaign, adGroups, areAllSelected);
                              }}
                            />
                          </TableCell>
                          <TableCell colSpan={viewMode === 'Performance' ? 11 : 5} sx={{ 
                            fontWeight: 'bold', 
                            fontSize: '0.9rem',
                            backgroundColor: '#f5f5f5',
                            borderTop: '2px solid #e0e0e0',
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: '#eeeeee'
                            }
                          }}
                          onClick={() => toggleCampaignCollapse(parentCampaign)}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                {collapsedCampaigns.has(parentCampaign) ? (
                                  <ChevronRightIcon fontSize="small" />
                                ) : (
                                  <KeyboardArrowDownIcon fontSize="small" />
                                )}
                                <span>{parentCampaign}</span>
                                {(() => {
                                  // Group ad groups by status and count them
                                  const statusCounts = {};
                                  adGroups.forEach(adGroup => {
                                    statusCounts[adGroup.status] = (statusCounts[adGroup.status] || 0) + 1;
                                  });

                                  // Helper function to get lighter background color for each status
                                  const getStatusPillColor = (status) => {
                                    switch (status) {
                                      case 'Active':
                                      case 'Approved':
                                        return '#e8f5e8'; // Light green
                                      case 'Archived':
                                        return '#e8f5e8'; // Light green
                                      case 'Creative in review':
                                      case 'In review':
                                      case 'Draft':
                                      case 'Scheduled':
                                      case 'Event not yet configured':
                                        return '#e3f2fd'; // Light blue
                                      case 'Creative needed':
                                      case 'Deactivated':
                                      case 'Rejected':
                                      case 'Creatives required':
                                        return '#ffebee'; // Light red
                                      case 'Ended':
                                        return '#f5f5f5'; // Light grey
                                      case 'Inactive':
                                        return '#fff3e0'; // Light orange
                                      default:
                                        return '#f5f5f5'; // Light grey
                                    }
                                  };

                                  return Object.entries(statusCounts).map(([status, count]) => {
                                    const isActiveSort = adGroupStatusSort[parentCampaign] === status;
                                    
                                    return (
                                      <Box 
                                        key={status} 
                                        onClick={(e) => handleStatusPillClick(parentCampaign, status, e)}
                                        sx={{ 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          gap: 0.5,
                                          backgroundColor: getStatusPillColor(status),
                                          borderRadius: '12px',
                                          padding: '2px 6px',
                                          border: isActiveSort ? '2px solid #4f01a3' : '1px solid rgba(0, 0, 0, 0.1)',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s',
                                          '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                          }
                                        }}
                                      >
                                        <StatusComponent status={status} />
                                        <Chip 
                                          label={count} 
                                          size="small" 
                                          sx={{ 
                                            height: '16px', 
                                            fontSize: '10px', 
                                            minWidth: '16px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                            '& .MuiChip-label': {
                                              fontWeight: isActiveSort ? 'bold' : 'normal'
                                            }
                                          }}
                                        />
                                      </Box>
                                    );
                                  });
                                })()}
                              </Box>
                              <Button 
                                variant="outlined" 
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent row collapse when clicking button
                                  // Find the campaign object that matches the parentCampaign name
                                  const campaignObj = campaigns.find(c => c.campaign === parentCampaign);
                                  if (campaignObj) {
                                    setTargetCampaignForMultipleAdGroups(campaignObj);
                                  }
                                  setAdGroupsDrawerOpen(true);
                                  
                                  // Force focus on the input field after a delay
                                  setTimeout(() => {
                                    if (adGroupNameFieldRef.current) {
                                      const inputElement = adGroupNameFieldRef.current.querySelector('input');
                                      if (inputElement) {
                                        inputElement.focus();
                                        inputElement.select();
                                      }
                                    }
                                  }, 500);
                                }}
                                sx={{
                                  textTransform: 'none'
                                }}
                              >
                                Add ad group
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                        {/* Ad Group Rows - Only show if not collapsed */}
                        {!collapsedCampaigns.has(parentCampaign) && (() => {
                          // Sort ad groups if a status is selected for this campaign
                          const sortedAdGroups = adGroupStatusSort[parentCampaign]
                            ? [...adGroups].sort((a, b) => {
                                const selectedStatus = adGroupStatusSort[parentCampaign];
                                // Move matching status to the top
                                if (a.status === selectedStatus && b.status !== selectedStatus) return -1;
                                if (a.status !== selectedStatus && b.status === selectedStatus) return 1;
                                return 0; // Keep original order for same priority
                              })
                            : adGroups;
                          
                          return sortedAdGroups.map((item) => (
                            <TableRow key={item.id} hover>
                              <TableCell padding="checkbox">
                                <Checkbox
                                  size="small"
                                  checked={isSelected(item.id)}
                                  onChange={() => handleCampaignCheckboxClick(item.id)}
                                />
                              </TableCell>
                              <TableCell component="th" scope="row" sx={{ paddingLeft: '32px' }}>
                                <Link 
                                  href="#" 
                                  underline="hover"
                                  color="primary"
                                sx={{ cursor: 'pointer' }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAdGroupClick(item);
                                }}
                              >
                                {item.campaign}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <StatusComponent status={getEffectiveAdGroupStatus(item)} tooltip={item.statusReason === 'campaign_paused' ? 'Campaign paused' : null} />
                            </TableCell>
                            {viewMode === 'Pre-launch' && (
                              <TableCell align="right">
                                {(() => {
                                  const budget = item.lifetimeBudget;
                                  return budget ? budget : "-";
                                })()}
                              </TableCell>
                            )}
                            {viewMode === 'Performance' && (
                              <TableCell>
                                <Switch 
                                  checked={getEffectiveAdGroupStatus(item) !== 'Paused'}
                                  disabled={getEffectiveAdGroupStatus(item) === 'Ended'}
                                  size="small"
                                  color="primary"
                                  onChange={(event) => handleSwitchChange(item.id, event.target.checked)}
                                />
                              </TableCell>
                            )}
                            {viewMode === 'Performance' && (
                              <>
                                <TableCell align="right">{item.spend}</TableCell>
                                <TableCell align="right">{item.goalActions}</TableCell>
                                <TableCell align="right">
                                  {(() => {
                                    const spend = parseFloat(item.spend?.replace(/[$,]/g, '') || '0');
                                    const results = parseInt(item.goalActions || '0');
                                    return results > 0 ? `$${(spend / results).toFixed(2)}` : '$0.00';
                                  })()}
                                </TableCell>
                                <TableCell align="right">{item.cpm}</TableCell>
                                <TableCell align="right">{item.impressions}</TableCell>
                              </>
                            )}
                            <TableCell align="center" sx={{ width: '60px' }}>
                              <IconButton 
                                size="small" 
                                color="default"
                                onClick={(event) => handleMenuClick(event, item.id)}
                              >
                                <MoreHorizIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                          ));
                        })()}
                      </React.Fragment>
                    ));
                  })()
                ) : (
                  // Regular Campaign/Creative Rows
                  getFilteredData().map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox
                        size="small"
                        checked={isSelected(item.id)}
                        onChange={() => handleCampaignCheckboxClick(item.id)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Link 
                        href="#" 
                        underline="hover"
                        color="primary"
                        sx={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.preventDefault();
                          if (selectedTab === 0) {
                            handleCampaignClick(item);
                          } else if (selectedTab === 1) {
                            handleAdGroupClick(item);
                          }
                        }}
                      >
                        {item.campaign}
                      </Link>
                    </TableCell>
                    {selectedTab === 0 && (
                      <TableCell>
                        <Box>
                          <Typography variant="body2">{item.goal}</Typography>
                          {item.goal === 'Conversion' && item.conversionEvent && (
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                              {(() => {
                                const eventMapping = {
                                  'page_views': 'Page views',
                                  'sign_ups': 'Sign ups',
                                  'leads': 'Leads',
                                  'downloads': 'Downloads',
                                  'purchases': 'Purchases',
                                  'app_installs': 'App installs',
                                  'subscriptions': 'Subscriptions'
                                };
                                return eventMapping[item.conversionEvent] || item.conversionEvent;
                              })()}
                            </Typography>
                          )}
                        </Box>
                      </TableCell>
                    )}
                    <TableCell>
                      <StatusComponent status={item.status} />
                    </TableCell>
                    {viewMode === 'Pre-launch' && (
                      <TableCell align="right">
                        {(() => {
                          const budget = selectedTab === 0 ? item.lifetimeBudget : item.lifetimeBudget;
                          return budget ? budget : "-";
                        })()}
                      </TableCell>
                    )}
                    {viewMode === 'Performance' && (
                      <TableCell>
                        <Switch 
                          checked={item.status !== 'Paused'}
                          size="small"
                          color="primary"
                          onChange={(event) => handleSwitchChange(item.id, event.target.checked)}
                        />
                      </TableCell>
                    )}
                    {viewMode === 'Performance' && (
                      <>
                        <TableCell align="right">{item.spend}</TableCell>
                        <TableCell align="right">{item.goalActions}</TableCell>
                        <TableCell align="right">
                          {(() => {
                            const spend = parseFloat(item.spend?.replace(/[$,]/g, '') || '0');
                            const results = parseInt(item.goalActions || '0');
                            return results > 0 ? `$${(spend / results).toFixed(2)}` : '$0.00';
                          })()}
                        </TableCell>
                        <TableCell align="right">{item.cpm}</TableCell>
                        <TableCell align="right">{item.impressions}</TableCell>
                      </>
                    )}
                    <TableCell align="center">
                      <IconButton 
                        size="small" 
                        color="default"
                        onClick={(event) => handleMenuClick(event, item.id)}
                      >
                        <MoreHorizIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          </React.Fragment>
          ) : null}

          {/* Audience Drawer for Ad Groups */}
          <AudienceDrawer
            open={adGroupAudienceDrawerOpen}
            onClose={() => setAdGroupAudienceDrawerOpen(false)}
            audienceSelection={adGroupAudienceSelection}
            setAudienceSelection={setAdGroupAudienceSelection}
            selectedAgeRanges={adGroupSelectedAgeRanges}
            setSelectedAgeRanges={setAdGroupSelectedAgeRanges}
            selectedIncomeRanges={adGroupSelectedIncomeRanges}
            setSelectedIncomeRanges={setAdGroupSelectedIncomeRanges}
          />
        </Container>
      ) : currentView === 'reports' ? (
        <>
        <Container maxWidth={false} sx={{ p: "20px" }}>
          {/* Filter Controls */}
          <Box sx={{ display: "flex", gap: '6px', mb: 4, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* Date Range */}
            <DateRangeField 
              sx={{ gap: '6px' }}
              startDate={reportsStartDate ? reportsStartDate.toISOString().split('T')[0] : ''}
              endDate={reportsEndDate ? reportsEndDate.toISOString().split('T')[0] : ''}
              onStartDateChange={(dateString) => setReportsStartDate(dateString ? new Date(dateString) : null)}
              onEndDateChange={(dateString) => setReportsEndDate(dateString ? new Date(dateString) : null)}
            />

            {/* Campaign Multi-select */}
            {(visibleReportFilters.campaigns || reportsSelectedCampaigns.length > 0) && (
              <FormControl sx={{ minWidth: 120, maxWidth: 360 }} size="small">
                <InputLabel shrink>Campaigns</InputLabel>
                <Select
                  multiple
                  size="small"
                  value={reportsSelectedCampaigns}
                  onChange={(event) => setReportsSelectedCampaigns(event.target.value)}
                  label="Campaigns"
                  displayEmpty
                  open={reportsCampaignsFilterOpen}
                  onOpen={() => setReportsCampaignsFilterOpen(true)}
                  onClose={() => setReportsCampaignsFilterOpen(false)}
                  endAdornment={
                    reportsSelectedCampaigns.length > 0 && (
                      <IconButton
                        size="small"
                        sx={{ mr: 3 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setReportsSelectedCampaigns([]);
                        }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    )
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return 'All';
                    } else if (selected.length === 1) {
                      const campaign = campaigns.find(c => c.id === selected[0]);
                      return campaign ? campaign.campaign : 'All';
                    } else {
                      return `${selected.length} campaigns selected`;
                    }
                  }}
                >
                  {campaigns.map((campaign) => (
                    <MenuItem key={campaign.id} value={campaign.id}>
                      <Checkbox checked={reportsSelectedCampaigns.indexOf(campaign.id) > -1} />
                      <ListItemText primary={campaign.campaign} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            {/* Creatives Multi-select */}
            {(visibleReportFilters.creatives || reportsSelectedCreatives.length > 0) && (
              <FormControl sx={{ minWidth: 120, maxWidth: 360 }} size="small">
                <InputLabel shrink>Creatives</InputLabel>
                <Select
                  multiple
                  size="small"
                  value={reportsSelectedCreatives}
                  onChange={(event) => setReportsSelectedCreatives(event.target.value)}
                  label="Ads"
                  displayEmpty
                  open={reportsCreativesFilterOpen}
                  onOpen={() => setReportsCreativesFilterOpen(true)}
                  onClose={() => setReportsCreativesFilterOpen(false)}
                  endAdornment={
                    reportsSelectedCreatives.length > 0 && (
                      <IconButton
                        size="small"
                        sx={{ mr: 3 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setReportsSelectedCreatives([]);
                        }}
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    )
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return 'All';
                    } else if (selected.length === 1) {
                      const creative = creatives.find(c => c.id === selected[0]);
                      return creative ? creative.campaign : 'All';
                    } else {
                      return `${selected.length} creatives selected`;
                    }
                  }}
                >
                  {creatives.map((creative) => (
                    <MenuItem key={creative.id} value={creative.id}>
                      <Checkbox checked={reportsSelectedCreatives.indexOf(creative.id) > -1} />
                      <ListItemText primary={creative.campaign} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            {/* Filter Menu Button */}
            <IconButton 
              size="small" 
              onClick={(e) => setReportsFilterMenuAnchor(e.currentTarget)}
              sx={{ 
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderRadius: '6px',
                width: 36,
                height: 36
              }}
            >
              <TuneIcon fontSize="small" sx={{ color: 'primary.main' }} />
            </IconButton>

            {/* Filter Menu */}
            <Menu
              anchorEl={reportsFilterMenuAnchor}
              open={Boolean(reportsFilterMenuAnchor)}
              onClose={() => setReportsFilterMenuAnchor(null)}
            >
              <MenuItem onClick={() => {
                const isCurrentlyVisible = visibleReportFilters.campaigns || reportsSelectedCampaigns.length > 0;
                setVisibleReportFilters(prev => ({ ...prev, campaigns: !prev.campaigns }));
                setReportsFilterMenuAnchor(null);
                if (!isCurrentlyVisible) {
                  setTimeout(() => setReportsCampaignsFilterOpen(true), 100);
                }
              }}>
                <Checkbox checked={visibleReportFilters.campaigns || reportsSelectedCampaigns.length > 0} size="small" />
                <ListItemText primary="Campaigns" />
              </MenuItem>
              <MenuItem onClick={() => {
                const isCurrentlyVisible = visibleReportFilters.creatives || reportsSelectedCreatives.length > 0;
                setVisibleReportFilters(prev => ({ ...prev, creatives: !prev.creatives }));
                setReportsFilterMenuAnchor(null);
                if (!isCurrentlyVisible) {
                  setTimeout(() => setReportsCreativesFilterOpen(true), 100);
                }
              }}>
                <Checkbox checked={visibleReportFilters.creatives || reportsSelectedCreatives.length > 0} size="small" />
                <ListItemText primary="Creatives" />
              </MenuItem>
            </Menu>
          </Box>

          {/* Reports Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs 
              value={reportsSelectedTab} 
              onChange={(event, newValue) => setReportsSelectedTab(newValue)}
              aria-label="reports tabs"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none'
                }
              }}
            >
              <Tab label="Delivery & Engagement" sx={{ display: reportTabVisibility[0] ? 'inline-flex' : 'none' }} />
              <Tab label="Channel & Content Transparency" sx={{ display: reportTabVisibility[1] ? 'inline-flex' : 'none' }} />
              <Tab label="Native Ads & Sponsorship" sx={{ display: reportTabVisibility[2] ? 'inline-flex' : 'none' }} />
              <Tab label="Audience insights" sx={{ display: reportTabVisibility[3] ? 'inline-flex' : 'none' }} />
            </Tabs>
          </Box>

          {/* Tab Content */}
          {reportsSelectedTab !== 3 && (
            <>
          {/* Summary Card - Delivery & Engagement tab only */}
          {reportsSelectedTab === 0 && reportCardVisibility.summary && (
            <Box sx={{ p: 3, mb: 4, backgroundColor: 'white', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)', borderRadius: 1, '& .MuiTypography-caption': { fontSize: '12px' }, '& .MuiTypography-subtitle2': { fontSize: '12px' } }}>
              {/* Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Summary</Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <IconButton size="small" onClick={handleSummaryMenuOpen}><MoreHorizIcon /></IconButton>
                  <Menu
                    anchorEl={summaryMenuAnchor}
                    open={Boolean(summaryMenuAnchor)}
                    onClose={handleSummaryMenuClose}
                  >
                    <MenuItem onClick={() => handleSummarySectionToggle('impression')}>
                      <Checkbox checked={visibleSummarySections.impression} />
                      <ListItemText primary="Impressions" />
                    </MenuItem>
                    <MenuItem onClick={() => handleSummarySectionToggle('spend')}>
                      <Checkbox checked={visibleSummarySections.spend} />
                      <ListItemText primary="Spend" />
                    </MenuItem>
                    <MenuItem onClick={() => handleSummarySectionToggle('engagement')}>
                      <Checkbox checked={visibleSummarySections.engagement} />
                      <ListItemText primary="Engagement" />
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 0 }}>
                {/* Impression Section */}
                {visibleSummarySections.impression && (
                <Box sx={{ flex: 1, px: 2.5, borderRight: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Impression</Typography>
                    <Chip label="Out performing" size="small" sx={{ backgroundColor: '#e8f5e9', color: '#2e7d32', fontWeight: 600, fontSize: '0.7rem', height: 24 }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Delivered Impressions</Typography>
                      <Typography variant="h1" sx={{ fontWeight: 'bold' }}>11.6M</Typography>
                      <Typography variant="caption">of <strong>11.7M</strong> booked</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Box sx={{ width: 120, height: 120, position: 'relative' }}>
                        <Doughnut
                          data={{
                            datasets: [{
                              data: [88, 12],
                              backgroundColor: ['#4caf50', '#e0e0e0'],
                              borderWidth: 0,
                            }]
                          }}
                          options={{
                            cutout: '75%',
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: { legend: { display: false }, tooltip: { enabled: false } }
                          }}
                        />
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.7rem' }}>88%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ mt: 0.5, fontWeight: 'bold', color: '#4caf50' }}>88% delivered</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" color="text.secondary">HH Frequency</Typography>
                      <Typography variant="h1" sx={{ fontWeight: 'bold' }}>1.83</Typography>
                    </Box>
                  </Box>
                </Box>
                )}

                {/* Spend Section */}
                {visibleSummarySections.spend && (
                <Box sx={{ flex: 1, px: 2.5, borderRight: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Spend</Typography>
                    <Chip label="Near limit" size="small" sx={{ backgroundColor: '#fff3e0', color: '#e65100', fontWeight: 600, fontSize: '0.7rem', height: 24 }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Delivered Spending</Typography>
                      <Typography variant="h1" sx={{ fontWeight: 'bold' }}>$161k</Typography>
                      <Typography variant="caption">of <strong>$162k</strong> booked</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Box sx={{ width: 120, height: 120, position: 'relative' }}>
                        <Doughnut
                          data={{
                            datasets: [{
                              data: [99, 1],
                              backgroundColor: ['#bf360c', '#e0e0e0'],
                              borderWidth: 0,
                            }]
                          }}
                          options={{
                            cutout: '75%',
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: { legend: { display: false }, tooltip: { enabled: false } }
                          }}
                        />
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.7rem' }}>99%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ mt: 0.5, fontWeight: 'bold', color: '#bf360c' }}>99% spent</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" color="text.secondary">eCPM</Typography>
                      <Typography variant="h1" sx={{ fontWeight: 'bold' }}>$13.84</Typography>
                    </Box>
                  </Box>
                </Box>
                )}

                {/* Engagement Section */}
                {visibleSummarySections.engagement && (
                <Box sx={{ flex: 1, px: 2.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Engagement</Typography>
                    <Chip label="On track" size="small" sx={{ backgroundColor: '#e8f5e9', color: '#2e7d32', fontWeight: 600, fontSize: '0.7rem', height: 24 }} />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                    {/* Click Performance */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>Click Performance</Typography>
                      <Box sx={{ display: 'flex', gap: 3, mt: 'auto', mb: 1, pt: '28px' }}>
                        <Box>
                          <Typography variant="caption" color="text.secondary">Clicks</Typography>
                          <Typography variant="h1" sx={{ fontWeight: 'bold' }}>29,872</Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">CTR</Typography>
                          <Typography variant="h1" sx={{ fontWeight: 'bold' }}>0.26%</Typography>
                        </Box>
                      </Box>
                    </Box>
                    {/* Video Completion */}
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>Video Completion</Typography>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="caption" color="text.secondary">VCR</Typography>
                          <Typography variant="h1" sx={{ fontWeight: 'bold' }}>4%</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5, mt: 3, height: 100 }}>
                        {[
                          { label: '25%', value: 0.9, color: '#0d47a1' },
                          { label: '50%', value: 0.55, color: '#1565c0' },
                          { label: '75%', value: 0.25, color: '#42a5f5' },
                          { label: '100%', value: 0.10, color: '#90caf9' },
                        ].map((bar) => (
                          <Box key={bar.label} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                            <Box sx={{ width: '100%', maxWidth: 28, height: bar.value * 100, backgroundColor: bar.color, borderRadius: '2px 2px 0 0' }} />
                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem', mt: 0.5 }}>{bar.label}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                )}
              </Box>
            </Box>
          )}

              {/* Branded Experience - Ad Reach Card (Native Ads & Sponsorship tab only) */}
              {reportsSelectedTab === 2 && reportCardVisibility.sponsorshipInsights && (
              <Paper sx={{ p: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                    Sponsorship Insights
                  </Typography>
                  <IconButton size="small" onClick={(e) => setSponsorshipInsightsMenuAnchor(e.currentTarget)}>
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu
                    anchorEl={sponsorshipInsightsMenuAnchor}
                    open={Boolean(sponsorshipInsightsMenuAnchor)}
                    onClose={() => setSponsorshipInsightsMenuAnchor(null)}
                  >
                    <MenuItem onClick={() => handleSponsorshipChartToggle('nonSponsorshipPie')}>
                      <Checkbox checked={visibleSponsorshipCharts.nonSponsorshipPie} />
                      <ListItemText primary="Non-sponsorship Video and Sponsorship" />
                    </MenuItem>
                    <MenuItem onClick={() => handleSponsorshipChartToggle('videoSponsorshipPie')}>
                      <Checkbox checked={visibleSponsorshipCharts.videoSponsorshipPie} />
                      <ListItemText primary="Video and Sponsorship" />
                    </MenuItem>
                    <MenuItem onClick={() => handleSponsorshipChartToggle('brandedExperience')}>
                      <Checkbox checked={visibleSponsorshipCharts.brandedExperience} />
                      <ListItemText primary="Branded Experience - Ad Reach" />
                    </MenuItem>
                    <MenuItem onClick={() => handleSponsorshipChartToggle('nativeAdsBreakout')}>
                      <Checkbox checked={visibleSponsorshipCharts.nativeAdsBreakout} />
                      <ListItemText primary="Native Ads - Breakout" />
                    </MenuItem>
                  </Menu>
                </Box>
                {/* Pie Charts Row */}
                {(visibleSponsorshipCharts.nonSponsorshipPie || visibleSponsorshipCharts.videoSponsorshipPie) && (
                <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                  {visibleSponsorshipCharts.nonSponsorshipPie && (
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Non-sponsorship Video and Sponsorship</Typography>
                    <Box sx={{ height: 300, display: 'flex', justifyContent: 'center' }}>
                      <Pie
                        data={{
                          labels: ['Sponsorship', 'Sponsorship & Video', 'Video Only'],
                          datasets: [{
                            data: [35, 40, 25],
                            backgroundColor: ['#4a148c', '#8e24aa', '#ce93d8'],
                            borderColor: '#fff',
                            borderWidth: 2,
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom',
                              labels: {
                                usePointStyle: true,
                                pointStyle: 'circle',
                                boxWidth: 8,
                                boxHeight: 8,
                              }
                            },
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  )}
                  {visibleSponsorshipCharts.videoSponsorshipPie && (
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Video and Sponsorship</Typography>
                    <Box sx={{ height: 300, display: 'flex', justifyContent: 'center' }}>
                      <Pie
                        data={{
                          labels: ['Sponsorship (non-video)', 'Video and Sponsorship', 'Video only'],
                          datasets: [{
                            data: [28, 45, 27],
                            backgroundColor: ['#4a148c', '#8e24aa', '#ce93d8'],
                            borderColor: '#fff',
                            borderWidth: 2,
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom',
                              labels: {
                                usePointStyle: true,
                                pointStyle: 'circle',
                                boxWidth: 8,
                                boxHeight: 8,
                              }
                            },
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  )}
                </Box>
                )}
                {/* Waterfall Charts Row */}
                {(visibleSponsorshipCharts.brandedExperience || visibleSponsorshipCharts.nativeAdsBreakout) && (
                <Box sx={{ display: 'flex', gap: 3 }}>
                {visibleSponsorshipCharts.brandedExperience && (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Branded Experience - Ad Reach</Typography>
                  <Box sx={{ height: 400 }}>
                  <Bar
                    plugins={[{
                      id: 'waterfallLabels',
                      afterDatasetsDraw(chart) {
                        const { ctx } = chart;
                        chart.getDatasetMeta(0).data.forEach((bar, index) => {
                          const raw = chart.data.datasets[0].data[index];
                          const value = Array.isArray(raw) ? raw[1] - raw[0] : raw;
                          ctx.save();
                          ctx.fillStyle = '#fff';
                          ctx.font = 'bold 18px sans-serif';
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'middle';
                          ctx.fillText(value + '%', bar.x, (bar.y + bar.base) / 2);
                          ctx.restore();
                        });
                      }
                    }]}
                    data={{
                      labels: ['Native Ads', 'Added Value\nNative Ads', 'Sponsorship\nVideo', 'Added Value\nSponsorship Ads', 'Roku City'],
                      datasets: [{
                        label: 'Reach',
                        data: [
                          [0, 35],
                          [35, 55],
                          [55, 72],
                          [72, 87],
                          [87, 100],
                        ],
                        backgroundColor: [
                          '#4a148c',
                          '#6a1b9a',
                          '#8e24aa',
                          '#ab47bc',
                          '#ce93d8',
                        ],
                        borderColor: [
                          '#4a148c',
                          '#6a1b9a',
                          '#8e24aa',
                          '#ab47bc',
                          '#ce93d8',
                        ],
                        borderWidth: 1,
                        borderSkipped: false,
                      }]
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          enabled: false,
                          external: (context) => {
                            let tooltipEl = document.getElementById('waterfall-tooltip');
                            if (!tooltipEl) {
                              tooltipEl = document.createElement('div');
                              tooltipEl.id = 'waterfall-tooltip';
                              tooltipEl.style.cssText = 'background: rgba(0,0,0,0.8); color: #fff; border-radius: 6px; padding: 10px 14px; pointer-events: none; position: absolute; transition: all 0.1s ease; font-family: sans-serif; z-index: 9999;';
                              document.body.appendChild(tooltipEl);
                            }
                            const tooltipModel = context.tooltip;
                            if (tooltipModel.opacity === 0) {
                              tooltipEl.style.opacity = 0;
                              return;
                            }
                            const dataIndex = tooltipModel.dataPoints?.[0]?.dataIndex;
                            const raw = tooltipModel.dataPoints?.[0]?.raw;
                            const base = Array.isArray(raw) ? raw[0] : 0;
                            const top = Array.isArray(raw) ? raw[1] : raw;
                            let html = '';
                            if (dataIndex === 0) {
                              html += '<div style="font-size:12px;margin-bottom:8px;">Locations<br/>- Tiles (Where to Watch, Featured Free, Roku Channel)<br/>- Native Ads (Marquee, Billboard, Spotlight Ads)</div>';
                            } else if (dataIndex === 1) {
                              html += '<div style="font-size:12px;margin-bottom:8px;">Locations<br/>- Tiles (Where to Watch, Featured Free, Roku Channel)<br/>- Title Cards<br/>- Pause Ads<br/>- Native Ads (Spotlight Ads)<br/>- Microsites (Passes, Playlists, Zones)</div>';
                            } else if (dataIndex === 2) {
                              html += '<div style="font-size:12px;margin-bottom:8px;">Locations<br/>- Sponsorship Ad Video (Standard Ad Video, Takeover Pod)<br/>- Custom Videos (Vignettes, Tagged Tune Ins)<br/>- Action Ads (Standard Ad Video + Overlay, Scannable Ads, 3P Brightline/Innvoid Action Ads)</div>';
                            } else if (dataIndex === 4) {
                              html += '<div style="font-size:12px;margin-bottom:8px;">Buildings, Cars, Neighborhoods</div>';
                            }
                            html += '<div style="font-size:18px;font-weight:bold;">Reach: ' + (top - base) + '%</div>';
                            tooltipEl.innerHTML = html;
                            const position = context.chart.canvas.getBoundingClientRect();
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.left = position.left + window.scrollX + tooltipModel.caretX + 'px';
                            tooltipEl.style.top = position.top + window.scrollY + tooltipModel.caretY - 10 + 'px';
                            tooltipEl.style.transform = 'translate(-50%, -100%)';
                          }
                        }
                      },
                      scales: {
                        x: {
                          display: true,
                          ticks: {
                            font: { size: 11 },
                          },
                          grid: {
                            display: false,
                          }
                        },
                        y: {
                          display: true,
                          min: 0,
                          max: 100,
                          title: {
                            display: true,
                            text: 'Reach (%)',
                          },
                          ticks: {
                            callback: (value) => value + '%',
                          },
                        },
                      },
                    }}
                  />
                </Box>
                </Box>
                )}
                {visibleSponsorshipCharts.nativeAdsBreakout && (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Native Ads - Breakout</Typography>
                  <Box sx={{ height: 400 }}>
                  <Bar
                    plugins={[{
                      id: 'waterfallLabels2',
                      afterDatasetsDraw(chart) {
                        const { ctx } = chart;
                        chart.getDatasetMeta(0).data.forEach((bar, index) => {
                          const raw = chart.data.datasets[0].data[index];
                          const value = Array.isArray(raw) ? raw[1] - raw[0] : raw;
                          ctx.save();
                          ctx.fillStyle = '#fff';
                          ctx.font = 'bold 18px sans-serif';
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'middle';
                          ctx.fillText(value + '%', bar.x, (bar.y + bar.base) / 2);
                          ctx.restore();
                        });
                      }
                    }]}
                    data={{
                      labels: ['Marquee Ad\n- Video', 'Marquee Ad\n- Banner', 'Spotlight\nAd', 'Added Value\nSponsorship Video'],
                      datasets: [{
                        label: 'Reach',
                        data: [
                          [0, 38],
                          [38, 62],
                          [62, 82],
                          [82, 100],
                        ],
                        backgroundColor: [
                          '#4a148c',
                          '#6a1b9a',
                          '#8e24aa',
                          '#ab47bc',
                        ],
                        borderColor: [
                          '#4a148c',
                          '#6a1b9a',
                          '#8e24aa',
                          '#ab47bc',
                        ],
                        borderWidth: 1,
                        borderSkipped: false,
                      }]
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          enabled: false,
                          external: (context) => {
                            let tooltipEl = document.getElementById('waterfall-tooltip-2');
                            if (!tooltipEl) {
                              tooltipEl = document.createElement('div');
                              tooltipEl.id = 'waterfall-tooltip-2';
                              tooltipEl.style.cssText = 'background: rgba(0,0,0,0.8); color: #fff; border-radius: 6px; padding: 10px 14px; pointer-events: none; position: absolute; transition: all 0.1s ease; font-family: sans-serif; z-index: 9999;';
                              document.body.appendChild(tooltipEl);
                            }
                            const tooltipModel = context.tooltip;
                            if (tooltipModel.opacity === 0) {
                              tooltipEl.style.opacity = 0;
                              return;
                            }
                            const raw = tooltipModel.dataPoints?.[0]?.raw;
                            const base = Array.isArray(raw) ? raw[0] : 0;
                            const top = Array.isArray(raw) ? raw[1] : raw;
                            let html = '<div style="font-size:18px;font-weight:bold;">Reach: ' + (top - base) + '%</div>';
                            tooltipEl.innerHTML = html;
                            const position = context.chart.canvas.getBoundingClientRect();
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.left = position.left + window.scrollX + tooltipModel.caretX + 'px';
                            tooltipEl.style.top = position.top + window.scrollY + tooltipModel.caretY - 10 + 'px';
                            tooltipEl.style.transform = 'translate(-50%, -100%)';
                          }
                        }
                      },
                      scales: {
                        x: {
                          display: true,
                          ticks: {
                            font: { size: 11 },
                          },
                          grid: {
                            display: false,
                          }
                        },
                        y: {
                          display: true,
                          min: 0,
                          max: 100,
                          title: {
                            display: true,
                            text: 'Reach (%)',
                          },
                          ticks: {
                            callback: (value) => value + '%',
                          },
                        },
                      },
                    }}
                  />
                </Box>
                </Box>
                )}
                </Box>
                )}
              </Paper>
              )}

              {/* Chart Card */}
              {reportsSelectedTab !== 1 && reportsSelectedTab !== 2 && reportCardVisibility.dailyImpressionsSpend && (
              <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Daily Impressions/Spend
                </Typography>
                <Box sx={{ height: 400 }}>
                  <Bar 
                data={generateChartData(
                  reportsStartDate, 
                  reportsEndDate, 
                  theme.palette.primary.main, 
                  theme.palette.secondary.main
                )}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 6,
                        boxHeight: 6,
                      }
                    },
                    title: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      display: true,
                      title: {
                        display: true,
                        text: 'Date'
                      }
                    },
                    y: {
                      type: 'linear',
                      display: true,
                      position: 'left',
                      title: {
                        display: true,
                        text: 'Impressions'
                      },
                    },
                    y1: {
                      type: 'linear',
                      display: true,
                      position: 'right',
                      title: {
                        display: true,
                        text: 'Spend ($)'
                      },
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                  },
                }}
              />
            </Box>
          </Paper>
              )}

            </>
          )}

          {/* Audience Insights Tab Content */}
          {reportsSelectedTab === 3 && (
            <>
          {/* Audience Insights Tile */}
          {reportCardVisibility.audienceInsights && <AudienceInsightsTile />}
          
          {/* Demographic Card */}
          {reportCardVisibility.demographic && (
          <Box sx={{ p: 3, mb: 4, backgroundColor: 'white', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)', borderRadius: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              <Box>
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Demographic</Typography>
                <Typography variant="body2" color="text.secondary">Entry Ads &amp; Destination Formats Metrics</Typography>
              </Box>
              <IconButton size="small" onClick={(e) => setDemographicMenuAnchor(e.currentTarget)}>
                <MoreHorizIcon />
              </IconButton>
              <Menu
                anchorEl={demographicMenuAnchor}
                open={Boolean(demographicMenuAnchor)}
                onClose={() => setDemographicMenuAnchor(null)}
              >
                <MenuItem onClick={() => handleDemographicSectionToggle('ageDistribution')}>
                  <Checkbox checked={visibleDemographicSections.ageDistribution} />
                  <ListItemText primary="Age Distribution" />
                </MenuItem>
                <MenuItem onClick={() => handleDemographicSectionToggle('gender')}>
                  <Checkbox checked={visibleDemographicSections.gender} />
                  <ListItemText primary="Gender" />
                </MenuItem>
                <MenuItem onClick={() => handleDemographicSectionToggle('maritalStatus')}>
                  <Checkbox checked={visibleDemographicSections.maritalStatus} />
                  <ListItemText primary="Marital Status" />
                </MenuItem>
                <MenuItem onClick={() => handleDemographicSectionToggle('userEngagement')}>
                  <Checkbox checked={visibleDemographicSections.userEngagement} />
                  <ListItemText primary="User Engagement" />
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
              {/* Age Distribution */}
              {visibleDemographicSections.ageDistribution && (
              <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Age Distribution</Typography>
                  <IconButton size="small"><MoreHorizIcon /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: '#7b1fa2', borderRadius: '2px' }} />
                    <Typography variant="caption">Metric</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: '#bdbdbd', borderRadius: '2px' }} />
                    <Typography variant="caption">Baseline</Typography>
                  </Box>
                </Box>
                <Box sx={{ height: 180 }}>
                  <Bar
                    data={{
                      labels: ['18-20', '21-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-64'],
                      datasets: [
                        {
                          label: 'Metric',
                          data: [8, 15, 22, 28, 32, 25, 18, 12, 7],
                          backgroundColor: '#7b1fa2',
                          borderRadius: 2,
                          barPercentage: 0.7,
                          categoryPercentage: 0.8,
                        },
                        {
                          label: 'Baseline',
                          data: [10, 12, 18, 22, 26, 22, 20, 15, 10],
                          backgroundColor: '#bdbdbd',
                          borderRadius: 2,
                          barPercentage: 0.7,
                          categoryPercentage: 0.8,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false }, tooltip: { enabled: true } },
                      scales: {
                        x: { grid: { display: false } },
                        y: {
                          ticks: { callback: (val) => val + '%' },
                          grid: { color: '#f0f0f0' },
                        },
                      },
                    }}
                  />
                </Box>
                <Box sx={{ textAlign: 'center', mt: 1 }} onClick={() => setAgeDistributionExpanded(prev => !prev)}>
                  <Typography variant="caption" color="primary" sx={{ cursor: 'pointer' }}>{ageDistributionExpanded ? 'Collapse ▴' : 'Expand ▾'}</Typography>
                </Box>
                {ageDistributionExpanded && (
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Age range</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', flex: 1 }}>Performance Vs. Baseline</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', width: 80, textAlign: 'right' }}>% of accounts</Typography>
                    </Box>
                    <Divider sx={{ mb: 0 }} />
                    <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, height: 200 }}>
                      <Bar
                        plugins={[{
                          id: 'barLabels',
                          afterDatasetsDraw(chart) {
                            const { ctx } = chart;
                            chart.data.datasets[0].data.forEach((value, index) => {
                              const meta = chart.getDatasetMeta(0);
                              const bar = meta.data[index];
                              const { x, y } = bar.tooltipPosition();
                              ctx.save();
                              ctx.font = 'bold 11px sans-serif';
                              ctx.fillStyle = '#fff';
                              ctx.textBaseline = 'middle';
                              const label = `${value}%`;
                              const textWidth = ctx.measureText(label).width;
                              const barWidth = Math.abs(bar.width);
                              if (barWidth > textWidth + 8) {
                                ctx.textAlign = value < 0 ? 'left' : 'right';
                                const xPos = value < 0 ? bar.x + 6 : bar.x - 6;
                                ctx.fillText(label, xPos, y);
                              } else {
                                ctx.fillStyle = '#333';
                                ctx.textAlign = value < 0 ? 'right' : 'left';
                                const xPos = value < 0 ? bar.x - 4 : bar.x + 4;
                                ctx.fillText(label, xPos, y);
                              }
                              ctx.restore();
                            });
                          }
                        }, {
                          id: 'zeroLine',
                          afterDraw(chart) {
                            const { ctx, chartArea: { top, bottom }, scales: { x } } = chart;
                            const xPos = x.getPixelForValue(0);
                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(xPos, top);
                            ctx.lineTo(xPos, bottom);
                            ctx.strokeStyle = '#9e9e9e';
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.restore();
                          }
                        }]
                        }
                        data={{
                          labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                          datasets: [{
                            data: [-38.21, -24.18, -2.87, 16.23, 10.42, 17.85],
                            backgroundColor: (ctx) => {
                              const value = ctx.raw;
                              if (value < -25) return '#c62828';
                              if (value < 0) return '#e57373';
                              if (value < 12) return '#66bb6a';
                              if (value < 17) return '#43a047';
                              return '#2e7d32';
                            },
                            borderRadius: 4,
                            barThickness: 16,
                          }],
                        }}
                        options={{
                          indexAxis: 'y',
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false },
                            tooltip: {
                              callbacks: {
                                label: (ctx) => `${ctx.raw}%`,
                              },
                            },
                          },
                          scales: {
                            x: {
                              min: -50,
                              max: 50,
                              position: 'top',
                              grid: { display: false },
                              ticks: { display: false },
                              border: { display: false },
                            },
                            y: {
                              title: { display: false },
                              grid: { display: false },
                              border: { display: false },
                              ticks: {
                                font: { size: 13 },
                                crossAlign: 'center',
                              },
                            },
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ width: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 200, textAlign: 'right', py: '5px' }}>
                      {['6.2%', '37%', '75.7%', '40%', '72.1%', '79.2%'].map((val, i) => (
                        <Typography key={i} variant="body2">{val}</Typography>
                      ))}
                    </Box>
                    </Box>
                    {/* Gradient bar */}
                    <Box sx={{ ml: '50px', mr: '80px', display: 'flex', height: 6, mt: 0, borderRadius: 1, overflow: 'hidden' }}>
                      <Box sx={{ flex: 1, background: 'linear-gradient(to right, #c62828, #ef9a9a)' }} />
                      <Box sx={{ flex: 1, background: 'linear-gradient(to right, #a5d6a7, #1b5e20)' }} />
                    </Box>
                    <Box sx={{ ml: '50px', mr: '80px', display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">Under-indexing</Typography>
                      <Typography variant="caption" color="text.secondary">Over-indexing</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              )}

              {/* Gender */}
              {visibleDemographicSections.gender && (
              <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Gender</Typography>
                  <IconButton size="small"><MoreHorizIcon /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Box sx={{ width: 160, height: 160, position: 'relative' }}>
                    <Doughnut
                      data={{
                        labels: ['Male', 'Female'],
                        datasets: [{
                          data: [51.2, 48.8],
                          backgroundColor: ['#7b1fa2', '#ce93d8'],
                          borderWidth: 0,
                        }],
                      }}
                      options={{
                        cutout: '65%',
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: { legend: { display: false }, tooltip: { enabled: true } },
                      }}
                    />
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <Box sx={{ width: 12, height: 12, backgroundColor: '#7b1fa2', borderRadius: '2px' }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Male</Typography>
                        <Typography variant="body2"><strong>51.2%</strong> <Typography component="span" variant="caption" color="success.main">↑ 5.6%</Typography> <Typography component="span" variant="caption" color="text.secondary">vs Baseline</Typography></Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 12, height: 12, backgroundColor: '#ce93d8', borderRadius: '2px' }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Female</Typography>
                        <Typography variant="body2"><strong>49.8%</strong> <Typography component="span" variant="caption" color="error.main">↓ 3.2%</Typography> <Typography component="span" variant="caption" color="text.secondary">vs Baseline</Typography></Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'center', mt: 1 }} onClick={() => setGenderExpanded(prev => !prev)}>
                  <Typography variant="caption" color="primary" sx={{ cursor: 'pointer' }}>{genderExpanded ? 'Collapse ▴' : 'More info ▾'}</Typography>
                </Box>
                {genderExpanded && (
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Gender</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', flex: 1 }}>Performance Vs. Baseline</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', width: 80, textAlign: 'right' }}>% of accounts</Typography>
                    </Box>
                    <Divider sx={{ mb: 0 }} />
                    <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, height: 66 }}>
                      <Bar
                        plugins={[{
                          id: 'barLabels',
                          afterDatasetsDraw(chart) {
                            const { ctx } = chart;
                            chart.data.datasets[0].data.forEach((value, index) => {
                              const meta = chart.getDatasetMeta(0);
                              const bar = meta.data[index];
                              const { x, y } = bar.tooltipPosition();
                              ctx.save();
                              ctx.font = 'bold 11px sans-serif';
                              ctx.fillStyle = '#fff';
                              ctx.textBaseline = 'middle';
                              const label = `${value}%`;
                              const textWidth = ctx.measureText(label).width;
                              const barWidth = Math.abs(bar.width);
                              if (barWidth > textWidth + 8) {
                                ctx.textAlign = value < 0 ? 'left' : 'right';
                                const xPos = value < 0 ? bar.x + 6 : bar.x - 6;
                                ctx.fillText(label, xPos, y);
                              } else {
                                ctx.fillStyle = '#333';
                                ctx.textAlign = value < 0 ? 'right' : 'left';
                                const xPos = value < 0 ? bar.x - 4 : bar.x + 4;
                                ctx.fillText(label, xPos, y);
                              }
                              ctx.restore();
                            });
                          }
                        }, {
                          id: 'zeroLine',
                          afterDraw(chart) {
                            const { ctx, chartArea: { top, bottom }, scales: { x } } = chart;
                            const xPos = x.getPixelForValue(0);
                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(xPos, top);
                            ctx.lineTo(xPos, bottom);
                            ctx.strokeStyle = '#9e9e9e';
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.restore();
                          }
                        }]
                        }
                        data={{
                          labels: ['Male', 'Female'],
                          datasets: [{
                            data: [5.6, -3.2],
                            backgroundColor: (ctx) => {
                              const value = ctx.raw;
                              if (value < -25) return '#c62828';
                              if (value < 0) return '#e57373';
                              if (value < 12) return '#66bb6a';
                              if (value < 17) return '#43a047';
                              return '#2e7d32';
                            },
                            borderRadius: 4,
                            barThickness: 16,
                          }],
                        }}
                        options={{
                          indexAxis: 'y',
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false },
                            tooltip: {
                              callbacks: {
                                label: (ctx) => `${ctx.raw}%`,
                              },
                            },
                          },
                          scales: {
                            x: {
                              min: -50,
                              max: 50,
                              position: 'top',
                              grid: { display: false },
                              ticks: { display: false },
                              border: { display: false },
                            },
                            y: {
                              title: { display: false },
                              grid: { display: false },
                              border: { display: false },
                              ticks: {
                                font: { size: 13 },
                                crossAlign: 'center',
                              },
                            },
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ width: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 66, textAlign: 'right', py: '5px' }}>
                      {['51.2%', '48.8%'].map((val, i) => (
                        <Typography key={i} variant="body2">{val}</Typography>
                      ))}
                    </Box>
                    </Box>
                    {/* Gradient bar */}
                    <Box sx={{ ml: '50px', mr: '80px', display: 'flex', height: 6, mt: 0, borderRadius: 1, overflow: 'hidden' }}>
                      <Box sx={{ flex: 1, background: 'linear-gradient(to right, #c62828, #ef9a9a)' }} />
                      <Box sx={{ flex: 1, background: 'linear-gradient(to right, #a5d6a7, #1b5e20)' }} />
                    </Box>
                    <Box sx={{ ml: '50px', mr: '80px', display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">Under-indexing</Typography>
                      <Typography variant="caption" color="text.secondary">Over-indexing</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              )}

              {/* Marital Status */}
              {visibleDemographicSections.maritalStatus && (
              <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Marital Status</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <IconButton size="small" onClick={() => setShowMaritalInsight(prev => !prev)}><NotificationsActiveOutlinedIcon sx={{ color: '#7b1fa2' }} /></IconButton>
                    <IconButton size="small"><MoreHorizIcon /></IconButton>
                  </Box>
                </Box>
                {showMaritalInsight && (
                  <Box sx={{ mb: 2, p: 2, backgroundColor: '#f3e5f5', borderRadius: 1, border: '1px solid #ce93d8', display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <NotificationsActiveOutlinedIcon sx={{ color: '#7b1fa2', fontSize: 20, mt: 0.25 }} />
                    <Typography variant="body2" sx={{ color: '#7b1fa2' }}>
                      The overwhelming majority of this audience is married.
                    </Typography>
                  </Box>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  <Box sx={{ width: 160, height: 160, position: 'relative' }}>
                    <Doughnut
                      data={{
                        labels: ['Single', 'Married'],
                        datasets: [{
                          data: [36.6, 63.4],
                          backgroundColor: ['#ce93d8', '#7b1fa2'],
                          borderWidth: 0,
                        }],
                      }}
                      options={{
                        cutout: '65%',
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: { legend: { display: false }, tooltip: { enabled: true } },
                      }}
                    />
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <Box sx={{ width: 12, height: 12, backgroundColor: '#ce93d8', borderRadius: '2px' }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Single</Typography>
                        <Typography variant="body2"><strong>36.6%</strong> <Typography component="span" variant="caption" color="success.main">↑ 5%</Typography> <Typography component="span" variant="caption" color="text.secondary">vs Baseline</Typography></Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 12, height: 12, backgroundColor: '#7b1fa2', borderRadius: '2px' }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Married</Typography>
                        <Typography variant="body2"><strong>63.4%</strong> <Typography component="span" variant="caption" color="error.main">↓ 1.4%</Typography> <Typography component="span" variant="caption" color="text.secondary">vs Baseline</Typography></Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'center', mt: 1 }} onClick={() => setMaritalStatusExpanded(prev => !prev)}>
                  <Typography variant="caption" color="primary" sx={{ cursor: 'pointer' }}>{maritalStatusExpanded ? 'Collapse ▴' : 'More info ▾'}</Typography>
                </Box>
                {maritalStatusExpanded && (
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Marital status</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', flex: 1 }}>Performance Vs. Baseline</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', width: 80, textAlign: 'right' }}>% of accounts</Typography>
                    </Box>
                    <Divider sx={{ mb: 0 }} />
                    <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, height: 66 }}>
                      <Bar
                        plugins={[{
                          id: 'barLabels',
                          afterDatasetsDraw(chart) {
                            const { ctx } = chart;
                            chart.data.datasets[0].data.forEach((value, index) => {
                              const meta = chart.getDatasetMeta(0);
                              const bar = meta.data[index];
                              const { x, y } = bar.tooltipPosition();
                              ctx.save();
                              ctx.font = 'bold 11px sans-serif';
                              ctx.fillStyle = '#fff';
                              ctx.textBaseline = 'middle';
                              const label = `${value}%`;
                              const textWidth = ctx.measureText(label).width;
                              const barWidth = Math.abs(bar.width);
                              if (barWidth > textWidth + 8) {
                                ctx.textAlign = value < 0 ? 'left' : 'right';
                                const xPos = value < 0 ? bar.x + 6 : bar.x - 6;
                                ctx.fillText(label, xPos, y);
                              } else {
                                ctx.fillStyle = '#333';
                                ctx.textAlign = value < 0 ? 'right' : 'left';
                                const xPos = value < 0 ? bar.x - 4 : bar.x + 4;
                                ctx.fillText(label, xPos, y);
                              }
                              ctx.restore();
                            });
                          }
                        }, {
                          id: 'zeroLine',
                          afterDraw(chart) {
                            const { ctx, chartArea: { top, bottom }, scales: { x } } = chart;
                            const xPos = x.getPixelForValue(0);
                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(xPos, top);
                            ctx.lineTo(xPos, bottom);
                            ctx.strokeStyle = '#9e9e9e';
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.restore();
                          }
                        }]
                        }
                        data={{
                          labels: ['Single', 'Married'],
                          datasets: [{
                            data: [5.0, -1.4],
                            backgroundColor: (ctx) => {
                              const value = ctx.raw;
                              if (value < -25) return '#c62828';
                              if (value < 0) return '#e57373';
                              if (value < 12) return '#66bb6a';
                              if (value < 17) return '#43a047';
                              return '#2e7d32';
                            },
                            borderRadius: 4,
                            barThickness: 16,
                          }],
                        }}
                        options={{
                          indexAxis: 'y',
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false },
                            tooltip: {
                              callbacks: {
                                label: (ctx) => `${ctx.raw}%`,
                              },
                            },
                          },
                          scales: {
                            x: {
                              min: -50,
                              max: 50,
                              position: 'top',
                              grid: { display: false },
                              ticks: { display: false },
                              border: { display: false },
                            },
                            y: {
                              title: { display: false },
                              grid: { display: false },
                              border: { display: false },
                              ticks: {
                                font: { size: 13 },
                                crossAlign: 'center',
                              },
                            },
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ width: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 66, textAlign: 'right', py: '5px' }}>
                      {['36.6%', '63.4%'].map((val, i) => (
                        <Typography key={i} variant="body2">{val}</Typography>
                      ))}
                    </Box>
                    </Box>
                    {/* Gradient bar */}
                    <Box sx={{ ml: '50px', mr: '80px', display: 'flex', height: 6, mt: 0, borderRadius: 1, overflow: 'hidden' }}>
                      <Box sx={{ flex: 1, background: 'linear-gradient(to right, #c62828, #ef9a9a)' }} />
                      <Box sx={{ flex: 1, background: 'linear-gradient(to right, #a5d6a7, #1b5e20)' }} />
                    </Box>
                    <Box sx={{ ml: '50px', mr: '80px', display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">Under-indexing</Typography>
                      <Typography variant="caption" color="text.secondary">Over-indexing</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              )}

              {/* User Engagement */}
              {visibleDemographicSections.userEngagement && (
              <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>User Engagement</Typography>
                  <IconButton size="small"><MoreHorizIcon /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: '#7b1fa2', borderRadius: '2px' }} />
                    <Typography variant="caption">Metric</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: '#bdbdbd', borderRadius: '2px' }} />
                    <Typography variant="caption">Baseline</Typography>
                  </Box>
                </Box>
                <Box sx={{ height: 180 }}>
                  <Bar
                    data={{
                      labels: ['Average Hours Streamed', 'Average Days Streamed'],
                      datasets: [
                        {
                          label: 'Metric',
                          data: [85, 62],
                          backgroundColor: '#7b1fa2',
                          borderRadius: 2,
                          barPercentage: 0.5,
                          categoryPercentage: 0.6,
                        },
                        {
                          label: 'Baseline',
                          data: [70, 55],
                          backgroundColor: '#bdbdbd',
                          borderRadius: 2,
                          barPercentage: 0.5,
                          categoryPercentage: 0.6,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false }, tooltip: { enabled: true } },
                      scales: {
                        x: { grid: { display: false } },
                        y: {
                          ticks: { callback: (val) => val + '%' },
                          grid: { color: '#f0f0f0' },
                        },
                      },
                    }}
                  />
                </Box>
                <Box sx={{ textAlign: 'right', mt: 1 }}>
                  <Typography variant="caption" color="primary" sx={{ cursor: 'pointer' }}>More info ▾</Typography>
                </Box>
              </Box>
              )}
            </Box>
          </Box>
          )}

          {/* Top Over-Indexing Features Card */}
          {reportCardVisibility.topOverIndexingFeatures && (
          <Box sx={{ p: 3, mb: 4, backgroundColor: 'white', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)', borderRadius: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Top Over-Indexing Features</Typography>
              <IconButton size="small" onClick={(e) => setOverIndexMenuAnchor(e.currentTarget)}><MoreHorizIcon /></IconButton>
              <Menu
                anchorEl={overIndexMenuAnchor}
                open={Boolean(overIndexMenuAnchor)}
                onClose={() => setOverIndexMenuAnchor(null)}
              >
                <MenuItem onClick={() => handleOverIndexColumnToggle('metric')}>
                  <Checkbox checked={visibleOverIndexColumns.metric} />
                  <ListItemText primary="Metric" />
                </MenuItem>
                <MenuItem onClick={() => handleOverIndexColumnToggle('baseline')}>
                  <Checkbox checked={visibleOverIndexColumns.baseline} />
                  <ListItemText primary="Baseline" />
                </MenuItem>
                <MenuItem onClick={() => handleOverIndexColumnToggle('index')}>
                  <Checkbox checked={visibleOverIndexColumns.index} />
                  <ListItemText primary="Index" />
                </MenuItem>
              </Menu>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #7b1fa2' }}>Top Over-Indexing Features</TableCell>
                    {visibleOverIndexColumns.metric && <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #7b1fa2' }} align="right">Metric</TableCell>}
                    {visibleOverIndexColumns.baseline && <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #7b1fa2' }} align="right">Baseline</TableCell>}
                    {visibleOverIndexColumns.index && <TableCell sx={{ fontWeight: 'bold', borderBottom: '2px solid #7b1fa2', width: 180 }} align="right">Index</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { feature: 'Adult General Education Content', metric: '3.2%', baseline: '1.1%', index: 187.7, color: '#7b1fa2' },
                    { feature: 'Fitness & Wellness Content', metric: '4.8%', baseline: '3.4%', index: 141.3, color: '#8e24aa' },
                    { feature: 'Home & Garden (HGTV-like) Content', metric: '6.1%', baseline: '4.5%', index: 135.6, color: '#9c27b0' },
                    { feature: 'Natural Health/DIY Remedies Content', metric: '3.9%', baseline: '3.0%', index: 130.0, color: '#ab47bc' },
                    { feature: 'Cooking & Food Content', metric: '7.2%', baseline: '5.8%', index: 124.1, color: '#ba68c8' },
                    { feature: 'True Crime & Investigation Content', metric: '5.5%', baseline: '4.6%', index: 119.6, color: '#ce93d8' },
                    { feature: 'Family TV & Kids Programming', metric: '8.3%', baseline: '7.1%', index: 116.9, color: '#e040fb' },
                    { feature: 'Outdoor/Wildlife Content', metric: '4.1%', baseline: '3.6%', index: 113.9, color: '#e91e63' },
                    { feature: 'Drama/Thriller Content (premium)', metric: '9.7%', baseline: '8.6%', index: 112.8, color: '#f06292' },
                    { feature: 'Sci-Fi/Fantasy Content (premium)', metric: '6.4%', baseline: '5.9%', index: 108.5, color: '#f48fb1' },
                  ].map((row, index) => (
                    <TableRow key={index} sx={{ '&:last-child td': { borderBottom: 0 } }}>
                      <TableCell>{row.feature}</TableCell>
                      {visibleOverIndexColumns.metric && <TableCell align="right">{row.metric}</TableCell>}
                      {visibleOverIndexColumns.baseline && <TableCell align="right">{row.baseline}</TableCell>}
                      {visibleOverIndexColumns.index && (
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: 1, height: 18, position: 'relative' }}>
                            <Box sx={{ width: `${Math.min((row.index / 200) * 100, 100)}%`, height: '100%', backgroundColor: row.color, borderRadius: 1 }} />
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, minWidth: 40, textAlign: 'right' }}>{row.index}</Typography>
                        </Box>
                      </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="caption" color="primary" sx={{ cursor: 'pointer' }}>More info ▾</Typography>
            </Box>
          </Box>
          )}

          {/* Account Tenure Card */}
          {reportCardVisibility.accountTenure && (
          <Box sx={{ p: 3, mb: 4, backgroundColor: 'white', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)', borderRadius: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Account Tenure</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <IconButton size="small" onClick={() => setShowTenureInsight(prev => !prev)}><NotificationsActiveOutlinedIcon sx={{ color: '#7b1fa2' }} /></IconButton>
                <IconButton size="small"><MoreHorizIcon /></IconButton>
              </Box>
            </Box>
            {showTenureInsight && (
              <Box sx={{ mb: 3, p: 2, backgroundColor: '#f3e5f5', borderRadius: 1, border: '1px solid #ce93d8', display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <NotificationsActiveOutlinedIcon sx={{ color: '#7b1fa2', fontSize: 20, mt: 0.25 }} />
                <Typography variant="body2" sx={{ color: '#7b1fa2' }}>
                  This campaign's audience is heavily concentrated in long-tenured accounts, with most users on the platform for over 4 years and closely aligned with the baseline.
                </Typography>
              </Box>
            )}
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Tenure</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">Performance Vs. Baseline</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">% of Accounts</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { tenure: '0 to 1 month', performance: '0%', accounts: '0.1%' },
                    { tenure: '2 to 6 months', performance: '+35.5%', accounts: '3.9%' },
                    { tenure: '7 to 24 months', performance: '-6.1%', accounts: '14.8%' },
                    { tenure: '2 to 4 years', performance: '-1%', accounts: '20.6%' },
                    { tenure: '4+ years', performance: '-0.2%', accounts: '60.6%' },
                  ].map((row, index) => (
                    <TableRow key={index} sx={{ '&:last-child td': { borderBottom: 0 } }}>
                      <TableCell>{row.tenure}</TableCell>
                      <TableCell align="right">
                        {row.performance.startsWith('+') ? (
                          <Chip icon={<ShowChartIcon sx={{ fontSize: 16, color: '#2e7d32 !important' }} />} label={row.performance} size="small" sx={{ backgroundColor: '#e8f5e9', color: '#2e7d32', border: '1px solid #2e7d32', fontWeight: 600, fontSize: '0.75rem', borderRadius: '6px' }} />
                        ) : row.performance.startsWith('-') ? (
                          <Chip icon={<ShowChartIcon sx={{ fontSize: 16, color: '#d32f2f !important', transform: 'scaleY(-1)' }} />} label={row.performance} size="small" sx={{ backgroundColor: '#ffebee', color: '#d32f2f', border: '1px solid #d32f2f', fontWeight: 600, fontSize: '0.75rem', borderRadius: '6px' }} />
                        ) : (
                          <Chip icon={<ShowChartIcon sx={{ fontSize: 16, color: '#1565c0 !important', transform: 'rotate(0deg)' }} />} label={row.performance} size="small" sx={{ backgroundColor: '#e3f2fd', color: '#1565c0', border: '1px solid #1565c0', fontWeight: 600, fontSize: '0.75rem', borderRadius: '6px' }} />
                        )}
                      </TableCell>
                      <TableCell align="right">{row.accounts}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          )}

        </>
        )}

          {/* Channel & Content Transparency Tab Content */}
          {reportsSelectedTab === 1 && (
            <>
          {reportCardVisibility.rokuChannelDelivery && <RokuChannelDeliveryTile />}

          {/* Tables Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
            {/* Channel Report Table */}
            {reportCardVisibility.channelReport && (
            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                Channel report
              </Typography>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'white' }}>Channel</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'white' }} align="right">% of impressions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { channel: 'Netflix', percentage: 24.5 },
                      { channel: 'Hulu', percentage: 18.3 },
                      { channel: 'Disney+', percentage: 15.7 },
                      { channel: 'Prime Video', percentage: 12.4 },
                      { channel: 'HBO Max', percentage: 9.8 },
                      { channel: 'Peacock', percentage: 7.2 },
                      { channel: 'Paramount+', percentage: 5.6 },
                      { channel: 'Apple TV+', percentage: 3.4 },
                      { channel: 'Discovery+', percentage: 2.1 },
                      { channel: 'Showtime', percentage: 1.0 },
                    ].map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.channel}</TableCell>
                        <TableCell align="right">{item.percentage}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            )}

            {/* Top TRC Content Titles Table */}
            {reportCardVisibility.topTrcContentTitles && (
            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                Top TRC Content Titles
              </Typography>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'white' }}>Content title</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'white' }}>Type</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'white' }} align="right">% of impressions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array.from({ length: 50 }, (_, index) => {
                      const contentTitles = [
                        { title: 'The Roku Channel', type: 'Live channel' },
                        { title: 'Weird: The Al Yankovic Story', type: 'Movie' },
                        { title: 'Die Hard', type: 'Movie' },
                        { title: 'Home Alone', type: 'Movie' },
                        { title: 'The Office', type: 'TV show' },
                        { title: 'Parks and Recreation', type: 'TV show' },
                        { title: 'Brooklyn Nine-Nine', type: 'TV show' },
                        { title: 'Friends', type: 'TV show' },
                        { title: 'Seinfeld', type: 'TV show' },
                        { title: 'The Good Place', type: 'TV show' },
                        { title: 'NBC News NOW', type: 'Live channel' },
                        { title: 'ABC News Live', type: 'Live channel' },
                        { title: 'CBS News', type: 'Live channel' },
                        { title: 'The Walking Dead', type: 'TV show' },
                        { title: 'Breaking Bad', type: 'TV show' },
                        { title: 'Stranger Things', type: 'TV show' },
                        { title: 'The Crown', type: 'TV show' },
                        { title: 'Ozark', type: 'TV show' },
                        { title: 'Bridgerton', type: 'TV show' },
                        { title: 'The Mandalorian', type: 'TV show' },
                      ];
                      const content = contentTitles[index % contentTitles.length];
                      const percentage = (8 - (index * 0.15)).toFixed(2);
                      
                      return (
                        <TableRow key={index}>
                          <TableCell>{content.title}</TableCell>
                          <TableCell>{content.type}</TableCell>
                          <TableCell align="right">{percentage}%</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            )}
          </Box>

          {/* Live TV Channels Row */}
          {reportCardVisibility.liveTvChannels && (
          <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
            {/* Live TV Channels Table */}
            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                Live TV channels
              </Typography>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'white' }}>Live TV channels</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'white' }} align="right">% of impressions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { channel: 'ABC News Live', percentage: 18.5 },
                      { channel: 'NBC News NOW', percentage: 16.3 },
                      { channel: 'CBS News', percentage: 14.7 },
                      { channel: 'The Roku Channel', percentage: 12.4 },
                      { channel: 'FOX News', percentage: 10.8 },
                      { channel: 'CNN', percentage: 8.2 },
                      { channel: 'ESPN', percentage: 6.6 },
                      { channel: 'Weather Channel', percentage: 5.4 },
                      { channel: 'Bloomberg TV', percentage: 4.1 },
                      { channel: 'Newsy', percentage: 3.0 },
                    ].map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.channel}</TableCell>
                        <TableCell align="right">{item.percentage}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
          )}
            </>
          )}

          {/* Other Tiles - Only visible in tabs 0, 1, 2 */}
          {reportsSelectedTab !== 3 && (
            <>
          {/* Reports Content */}
          {reportsSelectedCampaigns.length > 0 && reportCardVisibility.adGroupOverview ? (
            <>
              {/* Render Ad Group Overview Tiles for selected campaigns */}
              {adGroupsData
                .filter(adGroup => {
                  // Filter ad groups by selected campaigns
                  const campaign = campaigns.find(c => c.campaign === adGroup.parentCampaign);
                  return campaign && reportsSelectedCampaigns.includes(campaign.id);
                })
                .map(adGroup => {
                  // Get creatives for this ad group
                  const adGroupCreatives = getCreativesForAdGroup(adGroup);
                  
                  // Get the campaign for this ad group
                  const campaign = campaigns.find(c => c.campaign === adGroup.parentCampaign);
                  
                  // Sample destination data for this ad group
                  const sampleDestinations = [
                    {
                      title: 'The Mandalorian',
                      type: 'TV Show',
                      impressions: '45,678',
                      ctr: '2.3%',
                      vcr: '85%',
                      reach: '12,345',
                      frequency: '3.7',
                      totalMinutesPerHousehold: '42.5'
                    },
                    {
                      title: 'Avengers: Endgame',
                      type: 'Movie',
                      impressions: '32,456',
                      ctr: '1.8%',
                      vcr: '92%',
                      reach: '9,876',
                      frequency: '3.3',
                      totalMinutesPerHousehold: '156.2'
                    },
                    {
                      title: 'Stranger Things',
                      type: 'TV Show',
                      impressions: '28,901',
                      ctr: '2.1%',
                      vcr: '88%',
                      reach: '8,234',
                      frequency: '3.5',
                      totalMinutesPerHousehold: '38.9'
                    }
                  ];

                  return (
                    <AdGroupOverviewTile
                      key={adGroup.id}
                      adGroup={adGroup}
                      campaign={campaign}
                      creatives={adGroupCreatives}
                      destinations={sampleDestinations}
                    />
                  );
                })}
            </>
          ) : null}
          
          {/* Frequency Report Tile */}
          {reportsSelectedTab !== 2 && reportCardVisibility.frequency && (
          <FrequencyReportTile 
            startDate={reportsStartDate}
            endDate={reportsEndDate}
          />
          )}
          
          {/* DAR Metrics Tile */}
          {reportsSelectedTab !== 2 && reportCardVisibility.darMetrics && (
          <DARMetricsTile />
          )}
          
          {/* Creatives Report Tile - Always visible */}
          {reportCardVisibility.creatives && (
          <CreativesReportTile 
            adGroups={adGroups} 
            campaigns={campaigns}
            selectedCampaignIds={reportsSelectedCampaigns}
          />
          )}
        </>
        )}
        </Container>

        {/* Bottom Toolbar for Reports Page */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 'none', mx: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton size="small" onClick={(e) => setReportsToolbarMenuAnchor(e.currentTarget)}>
                <MoreHorizIcon />
              </IconButton>
              <Menu
                anchorEl={reportsToolbarMenuAnchor}
                open={Boolean(reportsToolbarMenuAnchor)}
                onClose={() => setReportsToolbarMenuAnchor(null)}
              >
                <MenuItem onClick={() => setReportsToolbarMenuAnchor(null)}>
                  <ListItemText primary="Delete" />
                </MenuItem>
                <MenuItem onClick={() => setReportsToolbarMenuAnchor(null)}>
                  <ListItemText primary="Archive" />
                </MenuItem>
                <MenuItem onClick={() => setReportsToolbarMenuAnchor(null)}>
                  <ListItemText primary="Clone" />
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary" sx={{ mr: 2 }}>
                Last updated {new Date().toLocaleString()}
              </Typography>
              <Button variant="outlined" size="medium" onClick={() => { setEditDashboardTab(reportsSelectedTab); setSavedCardVisibility({ ...reportCardVisibility }); setSavedTabVisibility({ ...reportTabVisibility }); setEditDashboardDrawerOpen(true); }}>
                Customize view
              </Button>
              <Button variant="contained" color="primary" size="medium" onClick={() => setExportDrawerOpen(true)}>
                Export
              </Button>
            </Box>
          </Box>
        </Box>
        </>
      ) : currentView === 'details' && selectedCampaignForDetails ? (
        (() => {
          console.log('Rendering CampaignDetails - currentView:', currentView, 'selectedCampaignForDetails:', selectedCampaignForDetails);
          return (
            <CampaignDetails 
          campaign={selectedCampaignForDetails}
          selectedTimeSlots={getDayparting('campaign', selectedCampaignForDetails.id)}
          setSelectedTimeSlots={(timeSlots) => {
            setSelectedTimeSlots(timeSlots);
            saveDayparting('campaign', selectedCampaignForDetails.id, timeSlots);
          }}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          dragStart={dragStart}
          setDragStart={setDragStart}
          mouseDownCell={mouseDownCell}
          setMouseDownCell={setMouseDownCell}
          drawerContext={drawerContext}
          setDrawerContext={setDrawerContext}
          setDrawerOpen={setDrawerOpen}
          campaignEditDrawerOpen={campaignEditDrawerOpen}
          setCampaignEditDrawerOpen={setCampaignEditDrawerOpen}
          scheduleEditDrawerOpen={scheduleEditDrawerOpen}
          setScheduleEditDrawerOpen={setScheduleEditDrawerOpen}
          setTempDayparting={setTempDayparting}
          handleMultipleAdGroupsInfoDrawerOpen={handleMultipleAdGroupsInfoDrawerOpen}
          setSelectedCreativeType={setSelectedCreativeType}
          setCreativesDrawerOpen={setCreativesDrawerOpen}
          setSelectedAdGroupForCreatives={setSelectedAdGroupForCreatives}
          automaticPlacement={automaticPlacement}
          setAutomaticPlacement={setAutomaticPlacement}
          placementToggle={placementToggle}
          setPlacementToggle={setPlacementToggle}
          setCurrentView={setCurrentView}
          setReportsSelectedCampaigns={setReportsSelectedCampaigns}
          setReportsStartDate={setReportsStartDate}
          setReportsEndDate={setReportsEndDate}
        />
        );
      })()
      ) : currentView === 'details' && isLoadingAdGroupDetails ? (
        (() => {
          console.log('Rendering AdGroupDetailsSkeleton - currentView:', currentView, 'isLoadingAdGroupDetails:', isLoadingAdGroupDetails);
          return (
            <AdGroupDetailsSkeleton 
              adGroups={adGroups} 
              currentCampaign={selectedAdGroupForDetails?.parentCampaign || 'Holiday Sale 2024'}
              selectedAdGroupId={selectedAdGroupForDetails?.id}
              campaignGoal={selectedCampaignForDetails?.goal || 'Conversion'}
            />
          );
        })()
      ) : currentView === 'details' && selectedAdGroupForDetails ? (
        (() => {
          console.log('Rendering AdGroupDetails - currentView:', currentView, 'selectedAdGroupForDetails:', selectedAdGroupForDetails);
          return (
            <AdGroupDetails 
              adGroup={selectedAdGroupForDetails} 
              selectedTimeSlots={getDayparting('adGroup', selectedAdGroupForDetails.id)}
              setSelectedTimeSlots={(timeSlots) => {
            setSelectedTimeSlots(timeSlots);
              setSelectedTimeSlots(timeSlots);
              saveDayparting('adGroup', selectedAdGroupForDetails.id, timeSlots);
            }}
            setScheduleEditDrawerOpen={setScheduleEditDrawerOpen}
            setDrawerContext={setDrawerContext}
            setDrawerOpen={setDrawerOpen}
            setCurrentView={setCurrentView}
            setActiveNavItem={setActiveNavItem}
            automaticPlacement={automaticPlacement}
            setAutomaticPlacement={setAutomaticPlacement}
            placementToggle={placementToggle}
            setPlacementToggle={setPlacementToggle}
            setReportsSelectedCampaigns={setReportsSelectedCampaigns}
            setReportsStartDate={setReportsStartDate}
            setReportsEndDate={setReportsEndDate}
            campaignGoal={selectedCampaignForDetails?.goal || 'Conversion'}
          />
        );
      })()
    ) : (() => {
      console.log('No conditions met - currentView:', currentView, 'selectedCampaignForDetails:', selectedCampaignForDetails, 'selectedAdGroupForDetails:', selectedAdGroupForDetails, 'isLoadingAdGroupDetails:', isLoadingAdGroupDetails);
      return null;
    })()}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleRunReport}>Run report</MenuItem>
        {(() => {
          const campaign = campaigns.find(c => c.id === selectedCampaignId);
          if (!campaign) return null;
          const isArchived = campaign.status === 'Archived';
          return (
            <MenuItem 
              onClick={handleArchiveClick}
              disabled={!isArchived && campaign.status === 'Active'}
            >
              {isArchived ? 'Unarchive' : 'Archive'}
            </MenuItem>
          );
        })()}
      </Menu>

      {/* Archive Confirmation Dialog */}
      <Dialog
        open={archiveDialogOpen}
        onClose={() => setArchiveDialogOpen(false)}
      >
        <DialogTitle>
          {(() => {
            const campaign = campaigns.find(c => c.id === selectedCampaignId);
            return campaign?.status === 'Archived' ? 'Unarchive Campaign' : 'Archive Campaign';
          })()}
        </DialogTitle>
        <DialogContent>
          <Typography>
            {(() => {
              const campaign = campaigns.find(c => c.id === selectedCampaignId);
              return campaign?.status === 'Archived' 
                ? 'Are you sure you want to unarchive this campaign? All ad groups and creatives will be restored to their previous statuses.'
                : 'Are you sure you want to archive this campaign? All ad groups and assigned creatives will also be archived.';
            })()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setArchiveDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleArchiveConfirm} variant="contained" color="primary">
            {(() => {
              const campaign = campaigns.find(c => c.id === selectedCampaignId);
              return campaign?.status === 'Archived' ? 'Unarchive' : 'Archive';
            })()}
          </Button>
        </DialogActions>
      </Dialog>

      <Drawer
        anchor="right"
        open={editDashboardDrawerOpen}
        onClose={() => setEditDashboardDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '95vw',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2">
              Edit dashboard
            </Typography>
            <IconButton onClick={() => setEditDashboardDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Tabs
            value={editDashboardTab}
            onChange={(e, v) => setEditDashboardTab(v)}
            sx={{ borderBottom: 1, borderColor: 'divider', mb: 2, '& .MuiTab-root': { textTransform: 'none' } }}
          >
            <Tab label="Delivery & Engagement" />
            <Tab label="Channel & Content Transparency" />
            <Tab label="Native Ads & Sponsorship" />
            <Tab label="Audience insights" />
          </Tabs>
          {editDashboardTab === 0 && (
            <>
            <FormControlLabel control={<Switch checked={reportTabVisibility[0]} onChange={() => setReportTabVisibility(prev => ({ ...prev, 0: !prev[0] }))} />} label="Show tab" sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.summary ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.summary ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.summary} onChange={() => setReportCardVisibility(prev => ({ ...prev, summary: !prev.summary }))} />} label="Summary" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.dailyImpressionsSpend ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.dailyImpressionsSpend ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.dailyImpressionsSpend} onChange={() => setReportCardVisibility(prev => ({ ...prev, dailyImpressionsSpend: !prev.dailyImpressionsSpend }))} />} label="Daily Impressions/Spend" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.adGroupOverview ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.adGroupOverview ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.adGroupOverview} onChange={() => setReportCardVisibility(prev => ({ ...prev, adGroupOverview: !prev.adGroupOverview }))} />} label="Ad Group Overview" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.frequency ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.frequency ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.frequency} onChange={() => setReportCardVisibility(prev => ({ ...prev, frequency: !prev.frequency }))} />} label="Frequency" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.darMetrics ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.darMetrics ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.darMetrics} onChange={() => setReportCardVisibility(prev => ({ ...prev, darMetrics: !prev.darMetrics }))} />} label="DAR Metrics" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.creatives ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.creatives ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.creatives} onChange={() => setReportCardVisibility(prev => ({ ...prev, creatives: !prev.creatives }))} />} label="Creatives" />
            </Box>
            </>
          )}
          {editDashboardTab === 1 && (
            <>
            <FormControlLabel control={<Switch checked={reportTabVisibility[1]} onChange={() => setReportTabVisibility(prev => ({ ...prev, 1: !prev[1] }))} />} label="Show tab" sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.rokuChannelDelivery ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.rokuChannelDelivery ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.rokuChannelDelivery} onChange={() => setReportCardVisibility(prev => ({ ...prev, rokuChannelDelivery: !prev.rokuChannelDelivery }))} />} label="Roku Channel Delivery" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.channelReport ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.channelReport ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.channelReport} onChange={() => setReportCardVisibility(prev => ({ ...prev, channelReport: !prev.channelReport }))} />} label="Channel Report" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.topTrcContentTitles ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.topTrcContentTitles ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.topTrcContentTitles} onChange={() => setReportCardVisibility(prev => ({ ...prev, topTrcContentTitles: !prev.topTrcContentTitles }))} />} label="Top TRC Content Titles" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.liveTvChannels ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.liveTvChannels ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.liveTvChannels} onChange={() => setReportCardVisibility(prev => ({ ...prev, liveTvChannels: !prev.liveTvChannels }))} />} label="Live TV Channels" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.adGroupOverview ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.adGroupOverview ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.adGroupOverview} onChange={() => setReportCardVisibility(prev => ({ ...prev, adGroupOverview: !prev.adGroupOverview }))} />} label="Ad Group Overview" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.frequency ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.frequency ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.frequency} onChange={() => setReportCardVisibility(prev => ({ ...prev, frequency: !prev.frequency }))} />} label="Frequency" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.darMetrics ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.darMetrics ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.darMetrics} onChange={() => setReportCardVisibility(prev => ({ ...prev, darMetrics: !prev.darMetrics }))} />} label="DAR Metrics" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.creatives ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.creatives ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.creatives} onChange={() => setReportCardVisibility(prev => ({ ...prev, creatives: !prev.creatives }))} />} label="Creatives" />
            </Box>
            </>
          )}
          {editDashboardTab === 2 && (
            <>
            <FormControlLabel control={<Switch checked={reportTabVisibility[2]} onChange={() => setReportTabVisibility(prev => ({ ...prev, 2: !prev[2] }))} />} label="Show tab" sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.sponsorshipInsights ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.sponsorshipInsights ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.sponsorshipInsights} onChange={() => setReportCardVisibility(prev => ({ ...prev, sponsorshipInsights: !prev.sponsorshipInsights }))} />} label="Sponsorship Insights" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.adGroupOverview ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.adGroupOverview ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.adGroupOverview} onChange={() => setReportCardVisibility(prev => ({ ...prev, adGroupOverview: !prev.adGroupOverview }))} />} label="Ad Group Overview" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.creatives ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.creatives ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.creatives} onChange={() => setReportCardVisibility(prev => ({ ...prev, creatives: !prev.creatives }))} />} label="Creatives" />
            </Box>
            </>
          )}
          {editDashboardTab === 3 && (
            <>
            <FormControlLabel control={<Switch checked={reportTabVisibility[3]} onChange={() => setReportTabVisibility(prev => ({ ...prev, 3: !prev[3] }))} />} label="Show tab" sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.audienceInsights ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.audienceInsights ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.audienceInsights} onChange={() => setReportCardVisibility(prev => ({ ...prev, audienceInsights: !prev.audienceInsights }))} />} label="Audience Insights" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.demographic ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.demographic ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.demographic} onChange={() => setReportCardVisibility(prev => ({ ...prev, demographic: !prev.demographic }))} />} label="Demographic" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.topOverIndexingFeatures ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.topOverIndexingFeatures ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.topOverIndexingFeatures} onChange={() => setReportCardVisibility(prev => ({ ...prev, topOverIndexingFeatures: !prev.topOverIndexingFeatures }))} />} label="Top Over-Indexing Features" />
              <FormControlLabel sx={{ width: 300, height: 75, border: '1px solid', borderColor: reportCardVisibility.accountTenure ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: reportCardVisibility.accountTenure ? '#F6F1FE' : 'white', m: 0, px: 2 }} control={<Checkbox checked={reportCardVisibility.accountTenure} onChange={() => setReportCardVisibility(prev => ({ ...prev, accountTenure: !prev.accountTenure }))} />} label="Account Tenure" />
            </Box>
            </>
          )}
        </Box>
        <Box sx={{ position: 'sticky', bottom: 0, backgroundColor: 'white', borderTop: '1px solid #e0e0e0', p: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button variant="outlined" onClick={() => { if (savedCardVisibility) setReportCardVisibility(savedCardVisibility); if (savedTabVisibility) setReportTabVisibility(savedTabVisibility); setEditDashboardDrawerOpen(false); }}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={() => setEditDashboardDrawerOpen(false)}>Save</Button>
        </Box>
      </Drawer>

      <Drawer
        anchor="right"
        open={exportDrawerOpen}
        onClose={() => setExportDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 850,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h2">
              Export dashboard
            </Typography>
            <IconButton onClick={() => setExportDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Configure your export and once exported a download link will be emailed to you.
          </Typography>
          <RadioGroup
            row
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            sx={{ gap: 1, justifyContent: 'center' }}
          >
            <FormControlLabel
              value="powerpoint"
              control={<Radio />}
              sx={{ width: 300, height: 75, border: '1px solid', borderColor: exportFormat === 'powerpoint' ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: exportFormat === 'powerpoint' ? '#F6F1FE' : 'white', m: 0, px: 2 }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <SlideshowIcon sx={{ fontSize: 20 }} />
                  Export to PowerPoint
                </Box>
              }
            />
            <FormControlLabel
              value="csv"
              control={<Radio />}
              sx={{ width: 300, height: 75, border: '1px solid', borderColor: exportFormat === 'csv' ? '#7b1fa2' : '#e0e0e0', borderRadius: '6px', backgroundColor: exportFormat === 'csv' ? '#F6F1FE' : 'white', m: 0, px: 2 }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TableChartIcon sx={{ fontSize: 20 }} />
                  Export to CSV
                </Box>
              }
            />
          </RadioGroup>
        </Box>
      </Drawer>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 850,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2">
              {drawerContext === 'locations' ? 'Locations' : 'Create Campaign'}
            </Typography>
            <IconButton onClick={handleCloseDrawer} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          
          {drawerContext === 'locations' && (
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The United States is automatically set as your target area until you select a location type. You can only select 1 type to include and 1 to exclude, and they can be different types.
              </Typography>
              
              <Box sx={{ 
                boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
                p: 3,
                backgroundColor: 'white',
                mb: 3
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Typography variant="h2">
                    Location type
                  </Typography>
                  <Tooltip 
                    title={
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }} gutterBottom>
                          Target where your ad will and won't be shown
                        </Typography>
                        <Typography variant="body2">
                          Include or exclude states, postal/ZIP Code regions, and designated market areas. When you switch types, your previous selections will be cleared.
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
                          maxWidth: 300
                        }
                      },
                      arrow: {
                        sx: {
                          color: 'white',
                          '&::before': {
                            border: '1px solid #ccc'
                          }
                        }
                      }
                    }}
                  >
                    <HelpOutlineIcon fontSize="small" color="action" />
                  </Tooltip>
                </Box>
                
                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', gap: '6px' }}>
                    <FormControl size="small" sx={{ minWidth: 200 }}>
                      <Select
                        value={locationTargetType}
                        onChange={(e) => setLocationTargetType(e.target.value)}
                        displayEmpty
                        sx={{ 
                          '& .MuiSelect-select': { 
                            display: 'flex', 
                            alignItems: 'center',
                            gap: 1
                          }
                        }}
                      >
                        <MenuItem value="include">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircleOutlineIcon sx={{ color: 'green', fontSize: 20 }} />
                            <Typography>Include</Typography>
                          </Box>
                        </MenuItem>
                        <MenuItem value="exclude">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <RemoveCircleOutlineIcon sx={{ color: 'red', fontSize: 20 }} />
                            <Typography>Exclude</Typography>
                          </Box>
                        </MenuItem>
                      </Select>
                    </FormControl>
                    
                    <FormControl size="small" sx={{ flex: 1 }}>
                      <Select
                        value={selectedLocationType}
                        onChange={(e) => setSelectedLocationType(e.target.value)}
                        displayEmpty
                        renderValue={(selected) => {
                          if (!selected || selected === '') {
                            return <Typography color="text.secondary">Select location type</Typography>;
                          }
                          return selected;
                        }}
                      >
                        <MenuItem value="states">States</MenuItem>
                        <MenuItem value="dma">DMA</MenuItem>
                        <MenuItem value="postal">Postal/Zip codes</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          
          {drawerContext === 'campaign' && (
            <Typography variant="h5" sx={{ mb: 3 }}>
              What's your advertising objective?
            </Typography>
          )}
          
          {drawerContext === 'campaign' && (
            <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'center' }}>
              <TileComponent 
                image={Awareness}
                title="Awareness"
              description="An awareness ad campaign is a marketing effort designed to inform and educate your target audience about your brand, product, or cause to increase recognition."
              selected={selectedCampaignType === 'awareness'}
              onClick={() => {
                setSelectedCampaignType(selectedCampaignType === 'awareness' ? null : 'awareness');
                console.log('Awareness', selectedCampaignType === 'awareness' ? 'deselected' : 'selected');
                // Add navigation logic here
              }}
            />
            <TileComponent 
              image={Conversion}
              title="Conversion"
              description="A conversion ad campaign is designed to motivate your target audience to take a specific action, such as making a purchase, signing up, or downloading an app."
              selected={selectedCampaignType === 'conversion'}
              onClick={() => {
                setSelectedCampaignType(selectedCampaignType === 'conversion' ? null : 'conversion');
                console.log('Conversion', selectedCampaignType === 'conversion' ? 'deselected' : 'selected');
                // Add navigation logic here
              }}
            />
          </Box>
          )}
          
          {drawerContext === 'campaign' && selectedCampaignType === 'conversion' && (
            <>
              <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                Which conversion event do you want to track?
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Typography variant="body2" sx={{ color: 'grey', whiteSpace: 'nowrap', width: '140px', minWidth: '140px' }}>
                  Conversion event
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1 }}>
                  <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                    <InputLabel>Event</InputLabel>
                    <Select
                      value={selectedConversionEvent}
                      onChange={(e) => setSelectedConversionEvent(e.target.value)}
                      label="Event"
                      renderValue={(selected) => {
                        const eventData = {
                          'page_views': { label: 'Page views', icon: <PageviewIcon sx={{ fontSize: 20 }} /> },
                          'sign_ups': { label: 'Sign ups', icon: <PersonAddIcon sx={{ fontSize: 20 }} /> },
                          'leads': { label: 'Leads', icon: <LeadsIcon sx={{ fontSize: 20 }} /> },
                          'downloads': { label: 'Downloads', icon: <DownloadIcon sx={{ fontSize: 20 }} /> },
                          'purchases': { label: 'Purchases', icon: <ShoppingCartIcon sx={{ fontSize: 20 }} /> },
                          'app_installs': { label: 'App installs', icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} /> },
                          'subscriptions': { label: 'Subscriptions', icon: <SubscriptionsIcon sx={{ fontSize: 20 }} /> }
                        };
                        const selectedEvent = eventData[selected];
                        return selectedEvent ? (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {selectedEvent.icon}
                            <Typography variant="body2">{selectedEvent.label}</Typography>
                          </Box>
                        ) : 'Select';
                      }}
                    >
                      <MenuItem value="page_views">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PageviewIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Page views</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track when users visit specific pages</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="sign_ups">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PersonAddIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Sign ups</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track user registrations and account creation</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="leads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LeadsIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Leads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track form submissions and contact requests</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="downloads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DownloadIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Downloads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track file and content downloads</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="purchases">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <ShoppingCartIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Purchases</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track completed transactions and sales</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="app_installs">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PhoneAndroidIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">App installs</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track mobile app installations</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="subscriptions" disabled>
                        <Tooltip 
                          title={<StatusComponent status="Event not yet configured" />}
                          placement="right"
                          disableHoverListener={false}
                          disableInteractive={false}
                          enterDelay={0}
                          leaveDelay={200}
                          slotProps={{
                            tooltip: {
                              sx: {
                                bgcolor: 'white',
                                border: '1px solid #ccc',
                                color: 'black',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                '& .MuiChip-root': {
                                  backgroundColor: 'blue',
                                  color: 'white'
                                }
                              }
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', pointerEvents: 'auto' }}>
                            <SubscriptionsIcon sx={{ fontSize: 20 }} />
                            <Box>
                              <Typography variant="body2">Subscriptions</Typography>
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track recurring subscription signups</Typography>
                            </Box>
                          </Box>
                        </Tooltip>
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="body2" sx={{ color: 'grey' }}>
                    in
                  </Typography>
                  <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                    <InputLabel>Event group</InputLabel>
                    <Select
                      value={selectedEventGroup}
                      onChange={(e) => setSelectedEventGroup(e.target.value)}
                      label="Event group"
                    >
                      <MenuItem value="XDNEuttoJA">Default event group (XDNEuttoJA)</MenuItem>
                      <MenuItem value="ABCEuttoJA">Shopify connection (ABCEuttoJA)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </>
          )}
          
          <Collapse in={selectedCampaignType !== null} timeout={300}>
            <Box>
              <Typography variant="h5" sx={{ mt: 1, mb: 0.75 }}>
                Does your ad include special ad categories? (optional)
              </Typography>
              
              <Typography variant="body2" sx={{ color: 'grey', mb: 2 }}>
                These categories help to prevent discrimination in advertising. Check all that apply to expedite your ad approval. Learn more about special ad categories
              </Typography>
              
              <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 1, px: 12.5 }}>
                <CheckboxOptionCleanComponent
                  icon={<CreditCardIcon sx={{ fontSize: 24, color: 'black' }} />}
                  title="Credit"
                  description="This campaign promotes credit-related products or services"
                  selected={specialCategories.credit}
                  onClick={() => setSpecialCategories(prev => ({ ...prev, credit: !prev.credit }))}
                />
                <CheckboxOptionCleanComponent
                  icon={<WorkIcon sx={{ fontSize: 24, color: 'black' }} />}
                  title="Employment"
                  description="This campaign is related to employment opportunities or services"
                  selected={specialCategories.employment}
                  onClick={() => setSpecialCategories(prev => ({ ...prev, employment: !prev.employment }))}
                />
                <CheckboxOptionCleanComponent
                  icon={<HomeIcon sx={{ fontSize: 24, color: 'black' }} />}
                  title="Housing"
                  description="This campaign promotes housing-related products or services"
                  selected={specialCategories.housing}
                  onClick={() => setSpecialCategories(prev => ({ ...prev, housing: !prev.housing }))}
                />
              </Box>
              
              <TextField
                label="Campaign name"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mt: 3 }}
              />
            </Box>
          </Collapse>
        </Box>
        
        {/* Bottom Toolbar for Create Campaign Drawer */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: 850,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="medium"
              onClick={handleCloseDrawer}
            >
              Close
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={handleSaveCampaign}
              disabled={!campaignName.trim() || !selectedCampaignType}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Drawer
        anchor="right"
        open={adGroupsDrawerOpen}
        onClose={handleAdGroupsDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 850,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2">
              Add ad group
            </Typography>
            <IconButton size="small" onClick={handleAdGroupsDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Typography variant="h6" sx={{ mt: 2, mb: 0.5, fontSize: '13px', fontWeight: 'bold' }}>
            What's in a name?
          </Typography>
          
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            A good best practice for naming your ad groups is to include key targeting or creative details in the name. For example, you might use a hierarchy such as Creative → Location → Audience → Schedule. This approach makes it easy to understand the purpose of each ad group at a glance and helps streamline reporting.
          </Typography>
          
          <TextField
            label="Name"
            placeholder="{creative}-{location}-{audience}-{schedule}"
            variant="outlined"
            size="small"
            fullWidth
            value={newAdGroupName}
            onChange={(e) => setNewAdGroupName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleCreateAdGroup();
              }
            }}
            ref={adGroupNameFieldRef}
            autoFocus
            sx={{ mt: 0.5 }}
          />
        </Box>
        
        {/* Bottom Toolbar for Ad Groups Drawer */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: 850,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="medium"
              onClick={handleAdGroupsDrawerClose}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={handleCreateAdGroup}
              disabled={!newAdGroupName.trim()}
            >
              Create Ad Group
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Multiple Ad Groups Info Drawer */}
      <Drawer
        anchor="right"
        open={multipleAdGroupsInfoDrawerOpen}
        onClose={handleMultipleAdGroupsInfoDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 850,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2">
              Use multiple ad groups...
            </Typography>
            <IconButton size="small" onClick={handleMultipleAdGroupsInfoDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            What are ad groups?
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, gap: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 3 }}>
                Ad groups are a way to organize and structure your advertising campaigns. Here are some reasons you might want to add mutliple ad groups:
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ 
                    width: 8, 
                    height: 8, 
                    backgroundColor: 'primary.main', 
                    borderRadius: '50%', 
                    mt: 0.75,
                    mr: 2,
                    flexShrink: 0 
                  }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      You can structure you campaign to have different audience and location targeting, bidding, placement and creatives
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ 
                    width: 8, 
                    height: 8, 
                    backgroundColor: 'primary.main', 
                    borderRadius: '50%', 
                    mt: 0.75,
                    mr: 2,
                    flexShrink: 0 
                  }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Run A/B tests on different creatives or audiences within the same campaign.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ 
                    width: 8, 
                    height: 8, 
                    backgroundColor: 'primary.main', 
                    borderRadius: '50%', 
                    mt: 0.75,
                    mr: 2,
                    flexShrink: 0 
                  }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Break down results by audience, placement, or theme for sharper insights
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ 
                    width: 8, 
                    height: 8, 
                    backgroundColor: 'primary.main', 
                    borderRadius: '50%', 
                    mt: 0.75,
                    mr: 2,
                    flexShrink: 0 
                  }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Run standard video ads and also run ads native to the RokuOS
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ flexShrink: 0 }}>
              <img 
                src={AdGroup} 
                alt="Ad groups illustration" 
                style={{ 
                  maxWidth: '200px',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>
          </Box>
          
          <Typography variant="h6" sx={{ mb: 0.5, fontSize: '13px', fontWeight: 'bold' }}>
            What's in a name?
          </Typography>
          
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            A good best practice for naming your ad groups is to include key targeting or creative details in the name. For example, you might use a hierarchy such as Creative → Location → Audience → Schedule. This approach makes it easy to understand the purpose of each ad group at a glance and helps streamline reporting.
          </Typography>
          
          <TextField
            label="Name"
            placeholder="{creative}-{location}-{audience}-{schedule}"
            variant="outlined"
            size="small"
            fullWidth
            autoFocus
            error={multipleAdGroupNameError}
            helperText={multipleAdGroupNameError ? "A name is required" : ""}
            value={newAdGroupName}
            onChange={(e) => {
              setNewAdGroupName(e.target.value);
              // Clear error when user starts typing
              if (multipleAdGroupNameError && e.target.value.trim()) {
                setMultipleAdGroupNameError(false);
              }
            }}
            onBlur={() => {
              // Show error if field is empty when unfocused
              if (!newAdGroupName.trim()) {
                setMultipleAdGroupNameError(true);
              }
            }}
            onFocus={() => {
              // Clear error when field is focused
              setMultipleAdGroupNameError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                createMultipleAdGroup();
              }
            }}
            ref={multipleAdGroupsFieldRef}
            sx={{ mt: 0.5 }}
          />
        </Box>
        
        {/* Bottom Toolbar for Multiple Ad Groups Info Drawer */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: 850,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="medium"
              onClick={handleMultipleAdGroupsInfoDrawerClose}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              disabled={!newAdGroupName.trim()}
              onClick={createMultipleAdGroup}
            >
              Create multiple ad groups
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Add Creatives Drawer */}
      <Drawer
        anchor="right"
        open={creativesDrawerOpen}
        onClose={handleCreativesDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '95vw',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ p: 3, flex: 0, borderBottom: selectedCreativeType === 'in-content-video' && ['sms-email', 'shop-tv', 'microsite'].includes(selectedAction) ? 'none' : '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0 }}>
              <Typography variant="h2">
                {selectedCreativeType === 'in-content-video' 
                  ? 'Create In-content video creative' 
                  : `Add creatives to ${selectedAdGroupForCreatives?.campaign}`}
              </Typography>
            <IconButton size="small" onClick={handleCreativesDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          </Box>

          {/* Tabs for special actions */}
          {selectedCreativeType === 'in-content-video' && ['sms-email', 'shop-tv', 'microsite'].includes(selectedAction) && (
            <Box sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <Tabs value={creativeDrawerTab} onChange={(e, newValue) => setCreativeDrawerTab(newValue)}>
                <Tab label="Creative" sx={{ textTransform: 'none' }} />
                <Tab label="Call to action" sx={{ textTransform: 'none' }} />
                <Tab label="Destination" sx={{ textTransform: 'none' }} />
              </Tabs>
            </Box>
          )}
          
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            {selectedCreativeType === 'in-content-video' ? (
              // Two-column layout for In-content video
              <Box sx={{ display: 'flex', height: '100%' }}>
                {/* Column 1 - 2/3 width */}
                <Box sx={{ flex: 2, backgroundColor: '#f5f5f5', p: 3 }}>
                  <Box 
                    sx={{ p: 4, border: '1px dashed #ccc', borderRadius: 1, textAlign: 'center', mb: 0.75, backgroundColor: 'white', cursor: 'pointer', '&:hover': { backgroundColor: '#fafafa' }, transition: 'background-color 0.2s' }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.currentTarget.style.backgroundColor = '#f0f0f0';
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.currentTarget.style.backgroundColor = 'white';
                      const files = e.dataTransfer.files;
                      if (files && files.length > 0) {
                        setSelectedCreativeFile(files[0]);
                        console.log('File dropped:', files[0].name);
                      }
                    }}
                    onClick={() => document.getElementById('creative-file-input').click()}
                  >
                    {selectedCreativeFile ? (
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Box 
                          component="video"
                          src={URL.createObjectURL(selectedCreativeFile)}
                          sx={{
                            width: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            aspectRatio: '16/9',
                            objectFit: 'contain',
                            backgroundColor: '#000',
                            borderRadius: 1
                          }}
                          controls
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: '100%' }}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            ✓ {selectedCreativeFile.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {(selectedCreativeFile.size / (1024 * 1024)).toFixed(2)} MB
                          </Typography>
                          <Link href="#" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedCreativeFile(null);
                          }} sx={{ fontWeight: 'bold', mt: 1 }}>
                            Change file
                          </Link>
                        </Box>
                      </Box>
                    ) : (
                      <>
                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                          Drag and drop or <Link href="#" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            document.getElementById('creative-file-input').click();
                          }} sx={{ fontWeight: 'bold' }}>Choose file</Link> to upload
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                          Upload a single file<br />
                          Format: .mov or .mp4<br />
                          File name length: 170<br />
                          Duration: 6-92 seconds<br />
                          Max file size: 1 GB
                        </Typography>
                      </>
                    )}
                    <input
                      id="creative-file-input"
                      type="file"
                      accept="video/mp4,video/quicktime,.mov,.mp4"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedCreativeFile(file);
                          console.log('File selected:', file.name);
                        }
                      }}
                    />
                  </Box>

                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Before you upload, check <Link href="#" onClick={(e) => e.preventDefault()} sx={{ fontWeight: 'bold' }}>technical requirements</Link>, <Link href="#" onClick={(e) => e.preventDefault()} sx={{ fontWeight: 'bold' }}>Download specs</Link>
                  </Typography>
                </Box>
                
                {/* Column 2 - 1/3 width */}
                <Box sx={{ flex: 1, p: 3, borderLeft: '1px solid #e0e0e0', overflow: 'auto' }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Creative details
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    If your creative is in a different category than your business, change it here.
                  </Typography>
                  
                  {/* Business Category Select */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <FormControl sx={{ flex: 1 }} size="small">
                      <InputLabel>Business category</InputLabel>
                      <Select
                        label="Business category"
                        value="Automotive"
                      >
                        <MenuItem value="Automotive">Automotive</MenuItem>
                      </Select>
                    </FormControl>
                    <Tooltip title="This is the category your business is listed as with the Interactive Advertising Bureau (IAB)">
                      <HelpOutlineIcon sx={{ color: 'text.secondary', cursor: 'pointer' }} />
                    </Tooltip>
                  </Box>

                  {/* Language Select */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <FormControl sx={{ flex: 1 }} size="small">
                      <InputLabel>Language</InputLabel>
                      <Select
                        label="Language"
                        value="English"
                      >
                        <MenuItem value="English">English</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  {/* Destination Title */}
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Destination
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 3 }}>
                    This determines whether or not you would like this video ad to be actionable.
                  </Typography>

                  {/* Action Select */}
                  <FormControl sx={{ width: '100%', mb: 3 }} size="small">
                    <InputLabel>Action</InputLabel>
                    <Select
                      label="Action"
                      value={selectedAction}
                      onChange={(e) => setSelectedAction(e.target.value)}
                      renderValue={(selected) => {
                        if (!selected) return '';
                        const actionTexts = {
                          'none': 'None',
                          'landing-page': 'Landing page (URL)',
                          'sms-email': 'Send SMS/Email',
                          'shop-tv': 'Shop on TV',
                          'microsite': 'Microsite',
                        };
                        return actionTexts[selected] || '';
                      }}
                    >
                      <MenuItem value="none">
                        <Typography variant="body2">None</Typography>
                      </MenuItem>
                      <MenuItem value="landing-page">
                        <Box>
                          <Typography variant="body2">Landing page (URL)</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Link to to a URL (only when applicable)
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value="sms-email">
                        <Box>
                          <Typography variant="body2">Send SMS/Email</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Audience would have the option to get a text message and/or email about your advertisement.
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value="shop-tv">
                        <Box>
                          <Typography variant="body2">Shop on TV</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Audience would have the option to shop directly on their TV for your product.
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value="microsite">
                        <Box>
                          <Typography variant="body2">Microsite</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Create a microsite on to further engage your audience about your message.
                          </Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>

                  {/* Landing Page URL TextField - Only show when landing-page action is selected */}
                  {selectedAction === 'landing-page' && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                      <TextField
                        label="Landing page URL"
                        placeholder="(Optional)"
                        variant="outlined"
                        size="small"
                        sx={{ flex: 1 }}
                        InputLabelProps={{ shrink: true }}
                      />
                      <Tooltip title="The URL must match the brand in the creative. Note: URLs appear only in clickable environments (e.g., web, mobile).">
                        <HelpOutlineIcon sx={{ color: 'text.secondary', cursor: 'pointer' }} />
                      </Tooltip>
                    </Box>
                  )}

                  {/* Advanced Settings Accordion */}
                  <Accordion>
                    <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                      <Typography>Advanced settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ flexDirection: 'column', gap: 2 }}>
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        Does your ad include special ad categories? (optional)
                      </Typography>
                      
                      <Typography variant="caption" sx={{ color: 'grey', mb: 2 }}>
                        These categories help to prevent discrimination in advertising. Check all that apply to expedite your ad approval. Learn more about special ad categories
                      </Typography>
                      
                      <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <CheckboxOptionCleanComponent
                          icon={<CreditCardIcon sx={{ fontSize: 24, color: 'black' }} />}
                          title="Credit"
                          description="This campaign promotes credit-related products or services"
                          selected={specialCategories.credit}
                          onClick={() => setSpecialCategories(prev => ({ ...prev, credit: !prev.credit }))}
                        />
                        <CheckboxOptionCleanComponent
                          icon={<WorkIcon sx={{ fontSize: 24, color: 'black' }} />}
                          title="Employment"
                          description="This campaign is related to employment opportunities or services"
                          selected={specialCategories.employment}
                          onClick={() => setSpecialCategories(prev => ({ ...prev, employment: !prev.employment }))}
                        />
                        <CheckboxOptionCleanComponent
                          icon={<HomeIcon sx={{ fontSize: 24, color: 'black' }} />}
                          title="Housing"
                          description="This campaign promotes housing-related products or services"
                          selected={specialCategories.housing}
                          onClick={() => setSpecialCategories(prev => ({ ...prev, housing: !prev.housing }))}
                        />
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  {/* Tracking Settings Accordion */}
                  <Accordion>
                    <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                      <Typography>Tracking settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ flexDirection: 'column', gap: 2 }}>
                      <Typography variant="h5" sx={{ mb: 1 }}>
                        Do you have impression tags?
                      </Typography>
                      
                      <Typography variant="caption" sx={{ color: 'grey', mb: 4 }}>
                        Add your tags below. Note that only authorized vendors are permitted. Learn more about tag formatting and macros. Maximum 20 tags.
                      </Typography>

                      {impressionTags.map((tag, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <TextField
                            placeholder="Enter impression tag"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={tag}
                            onChange={(e) => {
                              const newTags = [...impressionTags];
                              newTags[index] = e.target.value;
                              setImpressionTags(newTags);
                            }}
                            sx={{ my: 0.75 }}
                          />
                          {impressionTags.length > 1 && (
                            <IconButton
                              size="small"
                              onClick={() => {
                                setImpressionTags(impressionTags.filter((_, i) => i !== index));
                              }}
                              sx={{ color: 'text.secondary' }}
                            >
                              <RemoveCircleOutlineIcon fontSize="small" />
                            </IconButton>
                          )}
                        </Box>
                      ))}

                      <Button
                        variant="text"
                        size="small"
                        startIcon={<AddIcon />}
                        onClick={() => setImpressionTags([...impressionTags, ''])}
                        sx={{ justifyContent: 'flex-start', pl: 0, mt: 2 }}
                      >
                        Add another impression tag
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            ) : (
              // Original tile selection layout
              <Box sx={{ p: 3 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Select the type of creative you want to add to this ad group.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3, justifyContent: 'center' }}>
                  <TileComponent
                    image={CreativeIncontent}
                    title="In-content video"
                    description="In-content ads are commercials that run directly in content, they can be either simple video ads or interactive action ads."
                    onClick={() => {
                      // Handle In-content video selection
                      setSelectedCreativeType('in-content-video');
                      console.log('Selected In-content video');
                    }}
                  />
                  <TileComponent
                    image={CreativeMarquee}
                    title="Marquee"
                    description="This premier ad is displayed on the Roku home screen, engaging users before they start streaming."
                    onClick={() => {
                      // Handle Marquee selection
                      console.log('Selected Marquee');
                    }}
                  />
                  <TileComponent
                    image={CreativeBillboard}
                    title="Billboard"
                    description="Banner creative in Roku City that reach your audiences whenever they are seeing Roku City."
                    onClick={() => {
                      // Handle Billboard selection
                      console.log('Selected Billboard');
                    }}
                  />
                  <Card 
                    sx={{ 
                      width: 280, 
                    height: 275, 
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    borderRadius: 0,
                    backgroundColor: '#FAFAFA',
                    boxShadow: 'none'
                  }}
                  onClick={() => {
                    setAssignCreativeDrawerOpen(true);
                    setCreativesDrawerOpen(false);
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: '100%',
                    p: 2
                  }}>
                    <Box sx={{ 
                      width: '100%', 
                      height: 140, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2
                    }}>
                      <ImageIcon sx={{ fontSize: 64, color: 'primary.main' }} />
                    </Box>
                    <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>
                      Select an existing creative from your creative library
                    </Typography>
                  </Box>
                </Card>
              </Box>
              </Box>
            )}
          </Box>
        </Box>
        
        {/* Bottom Toolbar for Creatives Drawer */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '95vw',
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="medium"
              onClick={handleCreativesDrawerClose}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={() => {
                // Handle creative upload logic here
                console.log('Upload creative for ad group:', selectedAdGroupForCreatives?.id);
                handleCreativesDrawerClose();
              }}
            >
              Submit for review
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Assign Creative Drawer */}
      <Drawer
        anchor="right"
        open={assignCreativeDrawerOpen}
        onClose={handleAssignCreativeDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '95vw',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ p: 3, flex: 1, overflow: 'auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h2">
                Assign creative to {selectedAdGroupForCreatives?.campaign}
              </Typography>
              <IconButton size="small" onClick={handleAssignCreativeDrawerClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          
          <Typography variant="body1" sx={{ mb: 2 }}>
            Select an existing creative from your library to assign to this ad group.
          </Typography>
          
            {/* Search and filter bar */}
            <Box sx={{ display: 'flex', gap: '6px', mb: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search creatives..."
                value={creativeSearchTerm}
                onChange={(event) => setCreativeSearchTerm(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: creativeSearchTerm && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setCreativeSearchTerm('')}
                        edge="end"
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel shrink>Creative Type</InputLabel>
                <Select
                  multiple
                  value={selectedCreativeTypes}
                  onChange={(event) => setSelectedCreativeTypes(event.target.value)}
                  label="Creative Type"
                  displayEmpty
                  renderValue={(selected) => selected.length === 0 ? 'All' : selected.join(', ')}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 224,
                        width: 250,
                      },
                    },
                  }}
                >
                  <MenuItem value="In-content video">
                    <Checkbox checked={selectedCreativeTypes.includes('In-content video')} />
                    <ListItemText primary="In-content video" />
                  </MenuItem>
                  <MenuItem value="Marquee">
                    <Checkbox checked={selectedCreativeTypes.includes('Marquee')} />
                    <ListItemText primary="Marquee" />
                  </MenuItem>
                  <MenuItem value="Billboard">
                    <Checkbox checked={selectedCreativeTypes.includes('Billboard')} />
                    <ListItemText primary="Billboard" />
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel shrink>Status</InputLabel>
                <Select
                  multiple
                  value={selectedCreativeStatuses}
                  onChange={(event) => setSelectedCreativeStatuses(event.target.value)}
                  label="Status"
                  displayEmpty
                  renderValue={(selected) => selected.length === 0 ? 'All' : selected.join(', ')}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 224,
                        width: 250,
                      },
                    },
                  }}
                >
                  <MenuItem value="Draft">
                    <Checkbox checked={selectedCreativeStatuses.includes('Draft')} />
                    <ListItemText primary="Draft" />
                  </MenuItem>
                  <MenuItem value="In review">
                    <Checkbox checked={selectedCreativeStatuses.includes('In review')} />
                    <ListItemText primary="In review" />
                  </MenuItem>
                  <MenuItem value="Approved">
                    <Checkbox checked={selectedCreativeStatuses.includes('Approved')} />
                    <ListItemText primary="Approved" />
                  </MenuItem>
                  <MenuItem value="Rejected">
                    <Checkbox checked={selectedCreativeStatuses.includes('Rejected')} />
                    <ListItemText primary="Rejected" />
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            {/* Creative library table */}
            <TableContainer component={Paper} sx={{ width: "100%", height: '100%', overflow: 'auto', borderRadius: "0px", boxShadow: "none" }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox" sx={{ backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
                      <Checkbox 
                        size="small"
                        indeterminate={selectedCreativesForAssignment.length > 0 && selectedCreativesForAssignment.length < adGroupsData.flatMap(adGroup => getCreativesForAdGroup(adGroup)).length}
                        checked={selectedCreativesForAssignment.length > 0 && selectedCreativesForAssignment.length === adGroupsData.flatMap(adGroup => getCreativesForAdGroup(adGroup)).length}
                        onChange={handleSelectAllCreatives}
                      />
                    </TableCell>
                    <TableCell sx={{ width: '175px', padding: '8px', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>Preview</TableCell>
                    <TableCell sx={{ width: '100%', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>Creative Name</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>Status</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>Type</TableCell>
                  </TableRow>
                </TableHead>
              <TableBody>
                {/* Group creatives by ad groups, similar to how ad groups are grouped by campaigns */}
                {adGroupsData.map((adGroup) => {
                  const creativesForAdGroup = getCreativesForAdGroup(adGroup)
                    .filter(creative => 
                      (selectedCreativeTypes.length === 0 || 
                       selectedCreativeTypes.includes(creative.type)) &&
                      (selectedCreativeStatuses.length === 0 || 
                       selectedCreativeStatuses.includes(creative.status)) &&
                      (creativeSearchTerm === '' ||
                       creative.name.toLowerCase().includes(creativeSearchTerm.toLowerCase()))
                    );
                  
                  // Show ad group header even if no creatives match the filter
                  // Only hide if there's an active search/filter that excludes all creatives AND the ad group has no creatives at all
                  const hasAnyCreatives = getCreativesForAdGroup(adGroup).length > 0;
                  if (creativesForAdGroup.length === 0 && hasAnyCreatives) {
                    return null;
                  }

                  return (
                    <React.Fragment key={adGroup.id}>
                      {/* Ad Group Header Row */}
                      <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell padding="checkbox" sx={{ backgroundColor: '#f5f5f5' }}>
                          <Checkbox
                            indeterminate={(() => {
                              const creativeIds = creativesForAdGroup.map(c => c.id);
                              const selectedCount = creativeIds.filter(id => selectedCreativesForAssignment.includes(id)).length;
                              return selectedCount > 0 && selectedCount < creativeIds.length;
                            })()}
                            checked={(() => {
                              const creativeIds = creativesForAdGroup.map(c => c.id);
                              return creativeIds.length > 0 && creativeIds.every(id => selectedCreativesForAssignment.includes(id));
                            })()}
                            onChange={() => {
                              const creativeIds = creativesForAdGroup.map(c => c.id);
                              const areAllSelected = creativeIds.every(id => selectedCreativesForAssignment.includes(id));
                              if (areAllSelected) {
                                // Deselect all creatives in this ad group
                                setSelectedCreativesForAssignment(prev => prev.filter(id => !creativeIds.includes(id)));
                              } else {
                                // Select all creatives in this ad group
                                setSelectedCreativesForAssignment(prev => [...new Set([...prev, ...creativeIds])]);
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell colSpan={4} sx={{ 
                          fontWeight: 'bold', 
                          fontSize: '0.9rem',
                          backgroundColor: '#f5f5f5',
                          borderTop: '2px solid #e0e0e0',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: '#eeeeee'
                          }
                        }}
                        onClick={() => toggleCampaignCollapse(adGroup.campaign)}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                              {collapsedCampaigns.has(adGroup.campaign) ? (
                                <ChevronRightIcon fontSize="small" />
                              ) : (
                                <KeyboardArrowDownIcon fontSize="small" />
                              )}
                              <span>{adGroup.campaign}</span>
                              <Chip 
                                label={creativesForAdGroup.length} 
                                variant="outlined" 
                                color="info" 
                                size="small"
                                sx={{ 
                                  ml: 0.5,
                                  '& .MuiChip-label': {
                                    fontWeight: 'normal'
                                  }
                                }}
                              />
                            </Box>
                            <Button 
                              variant="outlined" 
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedAdGroupForCreatives(adGroup);
                                setCreativesDrawerOpen(true);
                              }}
                              sx={{
                                textTransform: 'none'
                              }}
                            >
                              Add creatives
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                      
                      {/* Creative Rows - Only show if not collapsed */}
                      {!collapsedCampaigns.has(adGroup.campaign) && creativesForAdGroup.length > 0 && creativesForAdGroup.map((creative) => (
                        <TableRow key={creative.id}>
                          <TableCell padding="checkbox">
                            <Checkbox
                              size="small"
                              checked={selectedCreativesForAssignment.includes(creative.id)}
                              onChange={() => handleCreativeSelection(creative.id)}
                            />
                          </TableCell>
                          <TableCell sx={{ width: '175px', padding: '8px' }}>
                            {creative.type === 'In-content video' ? (
                              <Box
                                component="video"
                                src={IncontentVideo}
                                sx={{
                                  width: '175px',
                                  aspectRatio: '16/9',
                                  objectFit: 'cover',
                                  backgroundColor: '#f5f5f5'
                                }}
                                controls
                                muted
                              />
                            ) : creative.type === 'Marquee' ? (
                              <Box
                                component="img"
                                src={Marquee}
                                alt={creative.name}
                                sx={{
                                  width: '175px',
                                  aspectRatio: '16/9',
                                  objectFit: 'cover',
                                  backgroundColor: '#f5f5f5'
                                }}
                              />
                            ) : creative.type === 'Billboard' ? (
                              <Box
                                component="img"
                                src={Billboard}
                                alt={creative.name}
                                sx={{
                                  width: '175px',
                                  aspectRatio: '16/9',
                                  objectFit: 'cover',
                                  backgroundColor: '#f5f5f5'
                                }}
                              />
                            ) : (
                              <Box
                                component="img"
                                src={getImagePath("images/creative-placeholder.jpg")}
                                alt={creative.name}
                                sx={{
                                  width: '175px',
                                  aspectRatio: '16/9',
                                  objectFit: 'cover',
                                  backgroundColor: '#f5f5f5'
                                }}
                              />
                            )}
                          </TableCell>
                          <TableCell component="th" scope="row" sx={{ width: '100%' }}>
                            <Link 
                              href="#" 
                              underline="hover" 
                              color="primary"
                              onClick={(e) => {
                                e.preventDefault();
                                if (creative.type === 'In-content video') {
                                  handleEditCreativeDrawerOpen(creative);
                                }
                              }}
                              sx={{ cursor: 'pointer' }}
                            >
                              {creative.name}
                            </Link>
                          </TableCell>
                          <TableCell sx={{ whiteSpace: 'nowrap' }}>
                            <StatusComponent status={creative.status} />
                          </TableCell>
                          <TableCell sx={{ whiteSpace: 'nowrap' }}>{creative.type}</TableCell>
                        </TableRow>
                      ))}
                      
                      {/* Empty state when no creatives - show creative tiles */}
                      {!collapsedCampaigns.has(adGroup.campaign) && creativesForAdGroup.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={5} sx={{ padding: 3, backgroundColor: 'white' }}>
                            <EmptyCreativesState 
                              adGroup={adGroup}
                              onOpenCreativeDrawer={(ag) => {
                                setSelectedAdGroupForCreatives(ag);
                                setCreativesDrawerOpen(true);
                              }}
                              onSelectCreativeType={setSelectedCreativeType}
                              onOpenAssignCreativeDrawer={(ag) => {
                                setSelectedAdGroupForCreatives(ag);
                                setAssignCreativeDrawerOpen(true);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        
        {/* Footer bar */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '95vw',
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              disabled={selectedCreativesForAssignment.length === 0}
              onClick={() => {
                console.log('Assign creatives to ad group:', selectedAdGroupForCreatives?.id, 'Selected creatives:', selectedCreativesForAssignment);
                handleAssignCreativeDrawerClose();
              }}
            >
              Assign
            </Button>
          </Box>
        </Box>
      </Box>
      </Drawer>

      {/* Edit In-content Video Creative Drawer */}
      <Drawer
        anchor="right"
        open={editCreativeDrawerOpen}
        onClose={handleEditCreativeDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '95vw',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Header */}
          <Box sx={{ p: 3, flex: 0, borderBottom: '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                <StatusComponent status={selectedCreativeToEdit?.status || 'Active'} />
                <TextField
                  size="small"
                  variant="outlined"
                  value={selectedCreativeToEdit?.name || ''}
                  onChange={(e) => setSelectedCreativeToEdit({ ...selectedCreativeToEdit, name: e.target.value })}
                  sx={{ flex: 1 }}
                />
              </Box>
              <IconButton size="small" onClick={handleEditCreativeDrawerClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <Box sx={{ display: 'flex', height: '100%' }}>
              {/* Column 1 - 2/3 width */}
              <Box sx={{ flex: 2, backgroundColor: '#f5f5f5', p: 3 }}>
                <Box sx={{ borderRadius: 1, textAlign: 'center', mb: 0.75, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                  <Box
                    component="video"
                    src={IncontentVideo}
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      aspectRatio: '16/9',
                      objectFit: 'contain',
                      backgroundColor: '#000'
                    }}
                    controls
                    muted
                  />
                </Box>
              </Box>

              {/* Column 2 - 1/3 width */}
              <Box sx={{ flex: 1, p: 3, borderLeft: '1px solid #e0e0e0', overflow: 'auto' }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Creative details
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  If your creative is in a different category than your business, change it here.
                </Typography>

                {/* Business Category Select */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <FormControl sx={{ flex: 1 }} size="small">
                    <InputLabel>Business category</InputLabel>
                    <Select
                      label="Business category"
                      value="Automotive"
                    >
                      <MenuItem value="Automotive">Automotive</MenuItem>
                    </Select>
                  </FormControl>
                  <Tooltip title="This is the category your business is listed as with the Interactive Advertising Bureau (IAB)">
                    <HelpOutlineIcon sx={{ color: 'text.secondary', cursor: 'pointer' }} />
                  </Tooltip>
                </Box>

                {/* Language Select */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <FormControl sx={{ flex: 1 }} size="small">
                    <InputLabel>Language</InputLabel>
                    <Select
                      label="Language"
                      value="English"
                    >
                      <MenuItem value="English">English</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* Destination Title */}
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Destination
                </Typography>

                <Typography variant="body2" sx={{ mb: 3 }}>
                  This determines whether or not you would like this video ad to be actionable.
                </Typography>

                {/* Action Select */}
                <FormControl sx={{ width: '100%', mb: 3 }} size="small">
                  <InputLabel>Action</InputLabel>
                  <Select
                    label="Action"
                    value={selectedAction}
                    onChange={(e) => setSelectedAction(e.target.value)}
                    renderValue={(selected) => {
                      if (!selected) return '';
                      const actionTexts = {
                        'none': 'None',
                        'landing-page': 'Landing page (URL)',
                        'sms-email': 'Send SMS/Email',
                        'shop-tv': 'Shop on TV',
                        'microsite': 'Microsite',
                      };
                      return actionTexts[selected] || '';
                    }}
                  >
                    <MenuItem value="none">
                      <Typography variant="body2">None</Typography>
                    </MenuItem>
                    <MenuItem value="landing-page">
                      <Box>
                        <Typography variant="body2">Landing page (URL)</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Link to to a URL (only when applicable)
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value="sms-email">
                      <Box>
                        <Typography variant="body2">Send SMS/Email</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Audience would have the option to get a text message and/or email about your advertisement.
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value="shop-tv">
                      <Box>
                        <Typography variant="body2">Shop on TV</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Audience would have the option to shop directly on their TV for your product.
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value="microsite">
                      <Box>
                        <Typography variant="body2">Microsite</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Create a microsite on to further engage your audience about your message.
                        </Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Landing Page URL TextField - Only show when landing-page action is selected */}
                {selectedAction === 'landing-page' && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <TextField
                      label="Landing page URL"
                      placeholder="(Optional)"
                      variant="outlined"
                      size="small"
                      sx={{ flex: 1 }}
                      InputLabelProps={{ shrink: true }}
                    />
                    <Tooltip title="The URL must match the brand in the creative. Note: URLs appear only in clickable environments (e.g., web, mobile).">
                      <HelpOutlineIcon sx={{ color: 'text.secondary', cursor: 'pointer' }} />
                    </Tooltip>
                  </Box>
                )}

                {/* Advanced Settings Accordion */}
                <Accordion>
                  <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                    <Typography>Advanced settings</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      Does your ad include special ad categories? (optional)
                    </Typography>

                    <Typography variant="caption" sx={{ color: 'grey', mb: 2 }}>
                      These categories help to prevent discrimination in advertising. Check all that apply to expedite your ad approval. Learn more about special ad categories
                    </Typography>

                    <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <CheckboxOptionCleanComponent
                        icon={<CreditCardIcon sx={{ fontSize: 24, color: 'black' }} />}
                        title="Credit"
                        description="This campaign promotes credit-related products or services"
                        selected={specialCategories.credit}
                        onClick={() => setSpecialCategories(prev => ({ ...prev, credit: !prev.credit }))}
                      />
                      <CheckboxOptionCleanComponent
                        icon={<WorkIcon sx={{ fontSize: 24, color: 'black' }} />}
                        title="Employment"
                        description="This campaign is related to employment opportunities or services"
                        selected={specialCategories.employment}
                        onClick={() => setSpecialCategories(prev => ({ ...prev, employment: !prev.employment }))}
                      />
                      <CheckboxOptionCleanComponent
                        icon={<HomeIcon sx={{ fontSize: 24, color: 'black' }} />}
                        title="Housing"
                        description="This campaign promotes housing-related products or services"
                        selected={specialCategories.housing}
                        onClick={() => setSpecialCategories(prev => ({ ...prev, housing: !prev.housing }))}
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>

                {/* Tracking Settings Accordion */}
                <Accordion>
                  <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                    <Typography>Tracking settings</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      Do you have impression tags?
                    </Typography>

                    <Typography variant="caption" sx={{ color: 'grey', mb: 4 }}>
                      Add your tags below. Note that only authorized vendors are permitted. Learn more about tag formatting and macros. Maximum 20 tags.
                    </Typography>

                    {impressionTags.map((tag, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <TextField
                          placeholder="Enter impression tag"
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={tag}
                          onChange={(e) => {
                            const newTags = [...impressionTags];
                            newTags[index] = e.target.value;
                            setImpressionTags(newTags);
                          }}
                          sx={{ my: 0.75 }}
                        />
                        {impressionTags.length > 1 && (
                          <IconButton
                            size="small"
                            onClick={() => {
                              setImpressionTags(impressionTags.filter((_, i) => i !== index));
                            }}
                            sx={{ color: 'text.secondary' }}
                          >
                            <RemoveCircleOutlineIcon fontSize="small" />
                          </IconButton>
                        )}
                      </Box>
                    ))}

                    <Button
                      variant="text"
                      size="small"
                      startIcon={<AddIcon />}
                      onClick={() => setImpressionTags([...impressionTags, ''])}
                      sx={{ justifyContent: 'flex-start', pl: 0, mt: 2 }}
                    >
                      Add another impression tag
                    </Button>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Box>

          {/* Bottom Toolbar for Edit Creative Drawer */}
          <Box sx={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '95vw',
            backgroundColor: 'white',
            borderTop: '1px solid #e0e0e0',
            p: 2,
            boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1001
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
              <Button 
                variant="outlined" 
                color="primary" 
                size="medium"
                onClick={handleEditCreativeDrawerClose}
              >
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                size="medium"
                onClick={() => {
                  console.log('Update creative:', selectedCreativeToEdit?.id);
                  handleEditCreativeDrawerClose();
                }}
              >
                Save changes
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* Creative Grid Overlay */}
      {showCreativeGridOverlay && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 3,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography variant="h2">
              Creative grid for {selectedAdGroupForDetails?.parentCampaign || 'Holiday Sale 2024'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  // TODO: Implement import functionality
                  console.log('Import creatives clicked');
                }}
              >
                Import
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  // TODO: Implement export functionality for creative grid
                  console.log('Export creatives clicked');
                }}
              >
                Export
              </Button>
              <IconButton
                onClick={() => setShowCreativeGridOverlay(false)}
                size="large"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          
          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 3 }}>
            <Tabs 
              value={creativeGridActiveTab} 
              onChange={handleCreativeGridTabChange}
              aria-label="creative grid tabs"
            >
              <Tab label="Native" />
              <Tab label="In-content video" />
              <Tab label="Custom" />
            </Tabs>
          </Box>
          
          {/* Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
            }}
          >
            <TableContainer component={Paper} sx={{ borderRadius: "0px", boxShadow: "none", border: '1px solid #e0e0e0' }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 150 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'file'}
                        direction={creativeGridSortConfig.key === 'file' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('file')}
                      >
                        File
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 180 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'ctaMessage'}
                        direction={creativeGridSortConfig.key === 'ctaMessage' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('ctaMessage')}
                      >
                        CTA/Concept/Message
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 120 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'startDate'}
                        direction={creativeGridSortConfig.key === 'startDate' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('startDate')}
                      >
                        Start Date
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 120 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'endDate'}
                        direction={creativeGridSortConfig.key === 'endDate' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('endDate')}
                      >
                        End Date
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 100 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'daypart'}
                        direction={creativeGridSortConfig.key === 'daypart' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('daypart')}
                      >
                        Daypart
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 150 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'deeplink'}
                        direction={creativeGridSortConfig.key === 'deeplink' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('deeplink')}
                      >
                        Deeplink
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 100 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'pixel'}
                        direction={creativeGridSortConfig.key === 'pixel' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('pixel')}
                      >
                        1x1 pixel
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 100 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'rotation'}
                        direction={creativeGridSortConfig.key === 'rotation' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('rotation')}
                      >
                        Rotation
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 100 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'rotationPercent'}
                        direction={creativeGridSortConfig.key === 'rotationPercent' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('rotationPercent')}
                      >
                        Rotation %
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Display creatives assigned to this campaign, grouped by ad group */}
                  {(() => {
                    // Get the parent campaign name
                    const campaignName = selectedAdGroupForDetails?.parentCampaign || 'Holiday Sale 2024';
                    
                    // Get all ad groups for this campaign
                    const campaignAdGroups = adGroupsData.filter(ag => ag.parentCampaign === campaignName);
                    
                    // Group creatives by ad group
                    const groupedCreatives = {};
                    campaignAdGroups.forEach(adGroup => {
                      const creativesForAdGroup = getCreativesForAdGroup(adGroup);
                      groupedCreatives[adGroup.id] = {
                        adGroup: adGroup,
                        creatives: creativesForAdGroup
                      };
                    });

                    // Render grouped rows
                    return Object.entries(groupedCreatives).map(([adGroupId, { adGroup, creatives }]) => (
                      <React.Fragment key={adGroupId}>
                        {/* Ad Group Header Row */}
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                          <TableCell colSpan={9} sx={{ 
                            fontWeight: 'bold', 
                            fontSize: '0.9rem',
                            backgroundColor: '#f5f5f5',
                            border: '1px solid #e0e0e0',
                            py: 1
                          }}>
                            {adGroup.campaign} ({adGroupId})
                          </TableCell>
                        </TableRow>
                        
                        {/* Creative Rows for this Ad Group */}
                        {creatives.length > 0 ? (
                          creatives.map((creative, index) => (
                            <TableRow key={`${adGroupId}-creative-${index}`}>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  defaultValue={creative.name}
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  defaultValue={creative.type}
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  type="date"
                                  defaultValue=""
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  type="date"
                                  defaultValue=""
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  defaultValue="All Day"
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  defaultValue=""
                                  placeholder="Enter deeplink"
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  defaultValue=""
                                  placeholder="Enter pixel"
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  defaultValue="Sequential"
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  fullWidth
                                  defaultValue="100%"
                                  InputProps={{
                                    disableUnderline: true,
                                    sx: { 
                                      px: 1, 
                                      py: 0.5,
                                      fontSize: '0.8125rem',
                                      '& input': { 
                                        border: 'none',
                                        outline: 'none',
                                        '&:focus': {
                                          backgroundColor: '#f0f8ff'
                                        }
                                      }
                                    }
                                  }}
                                />
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          // Empty row for this ad group
                          <TableRow>
                            <TableCell colSpan={10} sx={{ border: '1px solid #e0e0e0', p: 0, textAlign: 'center', color: '#999' }}>
                              No creatives assigned
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    ));
                  })()}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}

      {/* Schedule Edit Drawer */}
      <Drawer
        anchor="right"
        open={scheduleEditDrawerOpen}
        onClose={() => setScheduleEditDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 850,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2">
              Ad scheduling
            </Typography>
            <IconButton onClick={() => setScheduleEditDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Choose when your ad should run. If you don't specify a schedule, the ad can run any time.
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '14px', fontWeight: 'bold' }}>
              Schedule
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography variant="body1" color="text.secondary" sx={{ width: '100px' }}>
                Dates
                <Typography component="span" sx={{ color: 'red', ml: 0.5 }}>
                  *
                </Typography>
              </Typography>
              <DateRangeField 
                startLabel="Start Date"
                endLabel="End Date"
                width="200px"
              />
            </Box>
          </Box>
          
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '14px', fontWeight: 'bold' }}>
              Dayparting
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Set a daypart to control what hours and days of week impressions will be served based on the local time zone of the impression. Dayparting defaults to all hours and days of week when nothing is selected.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Click and drag to schedule multiple days/times.
            </Typography>
            
            {/* Include the dayparting widget */}
            <Box 
              sx={{ 
                display: 'inline-block',
                borderRadius: '4px',
                overflow: 'visible',
                userSelect: 'none',
                position: 'relative',
                marginLeft: '60px'
              }}
              onMouseUp={() => {
                setIsDragging(false);
                setDragStart(null);
                setMouseDownCell(null);
              }}
              onMouseLeave={() => {
                setIsDragging(false);
                setDragStart(null);
                setMouseDownCell(null);
              }}
            >
              {/* Day labels */}
              <Box sx={{ position: 'absolute', left: '-60px', top: '0' }}>
                {[
                  { key: 0, shortLabel: 'Mon' },
                  { key: 1, shortLabel: 'Tue' },
                  { key: 2, shortLabel: 'Wed' },
                  { key: 3, shortLabel: 'Thu' },
                  { key: 4, shortLabel: 'Fri' },
                  { key: 5, shortLabel: 'Sat' },
                  { key: 6, shortLabel: 'Sun' }
                ].map(day => (
                  <Box key={day.key} sx={{ 
                    width: '55px', 
                    height: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '5px'
                  }}>
                    <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 'bold' }}>
                      {day.shortLabel}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              {/* Time grid */}
              <Box sx={{ border: '1px solid #e0e0e0', display: 'inline-block' }}>
                {[0, 1, 2, 3, 4, 5, 6].map(dayKey => (
                  <Box key={dayKey} sx={{ display: 'flex' }}>
                    {Array.from({ length: 24 }, (_, hour) => {
                      const cellKey = `${dayKey}-${hour}`;
                      const isSelected = tempDayparting.has(cellKey);
                      
                      return (
                        <Box
                          key={hour}
                          sx={{
                            width: '25px',
                            height: '25px',
                            borderRight: hour < 23 ? (hour === 11 ? '1px solid #666' : '1px solid #e0e0e0') : 'none',
                            borderBottom: dayKey < 6 ? '1px solid #e0e0e0' : 'none',
                            backgroundColor: isSelected ? '#1976d2' : 'white',
                            cursor: 'pointer',
                            transition: 'background-color 0.1s ease',
                            '&:hover': {
                              backgroundColor: isSelected ? '#1565c0' : '#f0f0f0'
                            }
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            setMouseDownCell({ day: dayKey, hour });
                            setDragStart({ day: dayKey, hour });
                            setIsDragging(false);
                          }}
                          onMouseEnter={() => {
                            if (mouseDownCell && (mouseDownCell.day !== dayKey || mouseDownCell.hour !== hour)) {
                              setIsDragging(true);
                              
                              if (dragStart) {
                                const startDay = Math.min(dragStart.day, dayKey);
                                const endDay = Math.max(dragStart.day, dayKey);
                                const startHour = Math.min(dragStart.hour, hour);
                                const endHour = Math.max(dragStart.hour, hour);
                                
                                setTempDayparting(prev => {
                                  const newSet = new Set(prev);
                                  for (let d = startDay; d <= endDay; d++) {
                                    for (let h = startHour; h <= endHour; h++) {
                                      newSet.add(`${d}-${h}`);
                                    }
                                  }
                                  return newSet;
                                });
                              }
                            }
                          }}
                          onMouseUp={() => {
                            if (!isDragging && mouseDownCell && mouseDownCell.day === dayKey && mouseDownCell.hour === hour) {
                              const cellKey = `${dayKey}-${hour}`;
                              setTempDayparting(prev => {
                                const newSet = new Set(prev);
                                if (newSet.has(cellKey)) {
                                  newSet.delete(cellKey);
                                } else {
                                  newSet.add(cellKey);
                                }
                                return newSet;
                              });
                            }
                            setIsDragging(false);
                            setDragStart(null);
                            setMouseDownCell(null);
                          }}
                        />
                      );
                    })}
                  </Box>
                ))}
              </Box>
              
              {/* Hour labels */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                {Array.from({ length: 24 }, (_, hour) => (
                  <Box
                    key={hour}
                    sx={{
                      width: '25px',
                      height: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography variant="caption" sx={{ fontSize: '8px' }}>
                      {hour === 0 ? '12' : hour <= 12 ? hour.toString() : (hour - 12).toString()}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              {/* AM/PM Labels */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.25 }}>
                <Box sx={{ 
                  width: '300px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 'bold', color: '#666' }}>
                    AM
                  </Typography>
                </Box>
                <Box sx={{ 
                  width: '300px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 'bold', color: '#666' }}>
                    PM
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1, marginLeft: '60px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ 
                      width: '12px', 
                      height: '12px', 
                      backgroundColor: '#1976d2', 
                      border: '1px solid #e0e0e0',
                      display: 'inline-block'
                    }} />
                    <Typography variant="caption" color="text.secondary">
                      Selected day/time
                    </Typography>
                  </Box>
                  {tempDayparting.size > 0 && (
                    <Typography variant="caption" color="text.secondary">
                      {tempDayparting.size} selected day/time slot{tempDayparting.size !== 1 ? 's' : ''}
                    </Typography>
                  )}
                </Box>
                {tempDayparting.size > 0 && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => setTempDayparting(new Set())}
                    sx={{ fontSize: '11px', py: 0.25, px: 1, minWidth: 'auto' }}
                  >
                    Reset
                  </Button>
                )}
              </Box>
              
              {/* Selected times table */}
              {tempDayparting.size > 0 && (
                <Box sx={{ mt: 3, marginLeft: '60px' }}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                    Dayparts
                  </Typography>
                  <TableContainer component={Paper} sx={{ maxHeight: 200, boxShadow: 'none', borderRadius: 0 }}>
                    <Table size="small" stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold', py: 0.25, px: 0.5 }}>Day</TableCell>
                          <TableCell sx={{ fontWeight: 'bold', py: 0.25, px: 0.5 }}>Time</TableCell>
                          <TableCell sx={{ width: '60px', py: 0.25, px: 0.5 }}></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {(() => {
                          // Group by day and create time ranges (same logic as main component)
                          const daysOfWeek = [
                            { key: 0, label: 'Monday' },
                            { key: 1, label: 'Tuesday' },
                            { key: 2, label: 'Wednesday' },
                            { key: 3, label: 'Thursday' },
                            { key: 4, label: 'Friday' },
                            { key: 5, label: 'Saturday' },
                            { key: 6, label: 'Sunday' }
                          ];
                          
                          const formatHour = (h) => {
                            if (h === 0) return '12AM';
                            if (h < 12) return `${h}AM`;
                            if (h === 12) return '12PM';
                            return `${h - 12}PM`;
                          };
                          
                          const dayGroups = {};
                          Array.from(tempDayparting).forEach(cellKey => {
                            const [dayKey, hour] = cellKey.split('-').map(Number);
                            if (!dayGroups[dayKey]) {
                              dayGroups[dayKey] = [];
                            }
                            dayGroups[dayKey].push(hour);
                          });

                          const result = [];
                          Object.keys(dayGroups).forEach(dayKey => {
                            const dayNum = parseInt(dayKey);
                            const day = daysOfWeek.find(d => d.key === dayNum);
                            const hours = dayGroups[dayKey].sort((a, b) => a - b);
                            
                            const ranges = [];
                            let rangeStart = hours[0];
                            let rangeEnd = hours[0];
                            
                            for (let i = 1; i < hours.length; i++) {
                              if (hours[i] === rangeEnd + 1) {
                                rangeEnd = hours[i];
                              } else {
                                ranges.push({ start: rangeStart, end: rangeEnd });
                                rangeStart = hours[i];
                                rangeEnd = hours[i];
                              }
                            }
                            ranges.push({ start: rangeStart, end: rangeEnd });
                            
                            const timeRangeText = ranges.map(range => {
                              if (range.start === range.end) {
                                return formatHour(range.start);
                              } else {
                                return `${formatHour(range.start)}-${formatHour(range.end)}`;
                              }
                            }).join(', ');
                            
                            result.push({
                              dayKey: dayNum,
                              dayName: day?.label || '',
                              timeDisplay: timeRangeText,
                              hours: hours
                            });
                          });
                          
                          return result.sort((a, b) => a.dayKey - b.dayKey).map(({ dayKey, dayName, timeDisplay, hours }) => (
                            <TableRow key={dayKey}>
                              <TableCell sx={{ py: 0.25, px: 0.5 }}>{dayName}</TableCell>
                              <TableCell sx={{ py: 0.25, px: 0.5 }}>{timeDisplay}</TableCell>
                              <TableCell sx={{ py: 0.25, px: 0.5 }}>
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    setSelectedTimeSlots(prev => {
                                      const newSet = new Set(prev);
                                      hours.forEach(hour => {
                                        newSet.delete(`${dayKey}-${hour}`);
                                      });
                                      return newSet;
                                    });
                                  }}
                                  sx={{ color: 'grey.500' }}
                                >
                                  <RemoveCircleOutlineIcon fontSize="small" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ));
                        })()}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        
        {/* Bottom Toolbar for Schedule Edit Drawer */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: 850,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="medium"
              onClick={() => setScheduleEditDrawerOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={() => {
                // Save the temporary dayparting to the campaign
                if (selectedCampaignForDetails) {
                  saveDayparting('campaign', selectedCampaignForDetails.id, tempDayparting);
                } else if (selectedAdGroupForDetails) {
                  saveDayparting('adGroup', selectedAdGroupForDetails.id, tempDayparting);
                }
                setScheduleEditDrawerOpen(false);
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Campaign Edit Drawer */}
      <Drawer
        anchor="right"
        open={campaignEditDrawerOpen}
        onClose={() => setCampaignEditDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 850,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2">
              Edit Campaign
            </Typography>
            <IconButton onClick={() => setCampaignEditDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Typography variant="h5" sx={{ mb: 3 }}>
            What's your advertising objective?
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'center' }}>
            <TileComponent 
              image={Awareness}
              title="Awareness"
              description="An awareness ad campaign is a marketing effort designed to inform and educate your target audience about your brand, product, or cause to increase recognition."
              selected={selectedCampaignForDetails?.goal === 'Awareness' || selectedCampaignType === 'awareness'}
              onClick={() => {
                if (selectedCampaignForDetails) {
                  setSelectedCampaignForDetails(prev => ({
                    ...prev,
                    goal: 'Awareness',
                    conversionEvent: null
                  }));
                  setCampaigns(prev => prev.map(c => 
                    c.id === selectedCampaignForDetails.id 
                      ? { ...c, goal: 'Awareness', conversionEvent: null }
                      : c
                  ));
                }
                setSelectedCampaignType(selectedCampaignType === 'awareness' ? null : 'awareness');
                console.log('Awareness', selectedCampaignType === 'awareness' ? 'deselected' : 'selected');
              }}
            />
            <TileComponent 
              image={Conversion}
              title="Conversion"
              description="A conversion ad campaign is designed to motivate your target audience to take a specific action, such as making a purchase, signing up, or downloading an app."
              selected={selectedCampaignForDetails?.goal === 'Conversion' || selectedCampaignType === 'conversion'}
              onClick={() => {
                if (selectedCampaignForDetails) {
                  setSelectedCampaignForDetails(prev => ({
                    ...prev,
                    goal: 'Conversion'
                  }));
                  setCampaigns(prev => prev.map(c => 
                    c.id === selectedCampaignForDetails.id 
                      ? { ...c, goal: 'Conversion' }
                      : c
                  ));
                }
                setSelectedCampaignType(selectedCampaignType === 'conversion' ? null : 'conversion');
                console.log('Conversion', selectedCampaignType === 'conversion' ? 'deselected' : 'selected');
              }}
            />
          </Box>
          
          {(selectedCampaignForDetails?.goal === 'Conversion' || selectedCampaignType === 'conversion') && (
            <>
              <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                Which conversion event do you want to track?
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Typography variant="body2" sx={{ color: 'grey', whiteSpace: 'nowrap', width: '140px', minWidth: '140px' }}>
                  Conversion event
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1 }}>
                  <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                    <InputLabel>Event</InputLabel>
                    <Select
                      value={selectedCampaignForDetails?.conversionEvent || selectedConversionEvent}
                      onChange={(e) => {
                        if (selectedCampaignForDetails) {
                          setSelectedCampaignForDetails(prev => ({
                            ...prev,
                            conversionEvent: e.target.value
                          }));
                          setCampaigns(prev => prev.map(c => 
                            c.id === selectedCampaignForDetails.id 
                              ? { ...c, conversionEvent: e.target.value }
                              : c
                          ));
                        }
                        setSelectedConversionEvent(e.target.value);
                      }}
                      label="Event"
                      renderValue={(selected) => {
                        const eventData = {
                          'page_views': { label: 'Page views', icon: <PageviewIcon sx={{ fontSize: 20 }} /> },
                          'sign_ups': { label: 'Sign ups', icon: <PersonAddIcon sx={{ fontSize: 20 }} /> },
                          'leads': { label: 'Leads', icon: <LeadsIcon sx={{ fontSize: 20 }} /> },
                          'downloads': { label: 'Downloads', icon: <DownloadIcon sx={{ fontSize: 20 }} /> },
                          'purchases': { label: 'Purchases', icon: <ShoppingCartIcon sx={{ fontSize: 20 }} /> },
                          'app_installs': { label: 'App installs', icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} /> },
                          'subscriptions': { label: 'Subscriptions', icon: <SubscriptionsIcon sx={{ fontSize: 20 }} /> }
                        };
                        const selectedEvent = eventData[selected];
                        return selectedEvent ? (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {selectedEvent.icon}
                            <Typography variant="body2">{selectedEvent.label}</Typography>
                          </Box>
                        ) : 'Select';
                      }}
                    >
                      <MenuItem value="page_views">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PageviewIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Page views</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track when users visit specific pages</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="sign_ups">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PersonAddIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Sign ups</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track user registrations and account creation</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="leads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LeadsIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Leads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track form submissions and contact requests</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="downloads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DownloadIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Downloads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track file downloads and resource access</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="purchases">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <ShoppingCartIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Purchases</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track completed transactions and sales</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="app_installs">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PhoneAndroidIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">App installs</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track mobile app downloads and installations</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="subscriptions">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <SubscriptionsIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Subscriptions</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Track recurring subscription sign-ups</Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="body2" sx={{ color: 'grey' }}>
                    in
                  </Typography>
                  <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
                    <InputLabel>Event group</InputLabel>
                    <Select
                      value={selectedCampaignForDetails?.eventGroup || ''}
                      onChange={(e) => {
                        if (selectedCampaignForDetails) {
                          setSelectedCampaignForDetails(prev => ({
                            ...prev,
                            eventGroup: e.target.value
                          }));
                          setCampaigns(prev => prev.map(c => 
                            c.id === selectedCampaignForDetails.id 
                              ? { ...c, eventGroup: e.target.value }
                              : c
                          ));
                        }
                      }}
                      label="Event group"
                    >
                      <MenuItem value="XDNEuttoJA">Default event group (XDNEuttoJA)</MenuItem>
                      <MenuItem value="ABCEuttoJA">Shopify connection (ABCEuttoJA)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </>
          )}
          
          <Collapse in={(selectedCampaignForDetails?.goal === 'Conversion' || selectedCampaignType === 'conversion') && (selectedCampaignForDetails?.conversionEvent || selectedConversionEvent)}>
            <Box>
              <Typography variant="h5" sx={{ mt: 1, mb: 0.75 }}>
                Does your ad include special ad categories? (optional)
              </Typography>
              
              <Typography variant="body2" sx={{ color: 'grey', mb: 2 }}>
                These categories help to prevent discrimination in advertising. Check all that apply to expedite your ad approval. Learn more about special ad categories
              </Typography>
              
              <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 1, px: 12.5 }}>
                <CheckboxOptionCleanComponent
                  icon={<CreditCardIcon sx={{ fontSize: 24, color: 'black' }} />}
                  title="Credit"
                  description="This campaign promotes credit-related products or services"
                  selected={specialCategories.credit}
                  onClick={() => setSpecialCategories(prev => ({ ...prev, credit: !prev.credit }))}
                />
                <CheckboxOptionCleanComponent
                  icon={<WorkIcon sx={{ fontSize: 24, color: 'black' }} />}
                  title="Employment"
                  description="This campaign is related to employment opportunities or services"
                  selected={specialCategories.employment}
                  onClick={() => setSpecialCategories(prev => ({ ...prev, employment: !prev.employment }))}
                />
                <CheckboxOptionCleanComponent
                  icon={<HomeIcon sx={{ fontSize: 24, color: 'black' }} />}
                  title="Housing"
                  description="This campaign promotes housing-related products or services"
                  selected={specialCategories.housing}
                  onClick={() => setSpecialCategories(prev => ({ ...prev, housing: !prev.housing }))}
                />
              </Box>
              
              {/* Campaign name field is hidden in edit mode */}
              {!selectedCampaignForDetails && (
                <TextField
                  label="Campaign name"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ mt: 3 }}
                />
              )}
            </Box>
          </Collapse>
        </Box>
        
        {/* Bottom Toolbar for Campaign Edit Drawer */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: 850,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="medium"
              onClick={() => setCampaignEditDrawerOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={() => {
                // Save changes and close drawer
                console.log('Saving campaign changes:', selectedCampaignForDetails);
                setCampaignEditDrawerOpen(false);
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Placement Edit Drawer */}
      <Drawer
        anchor="right"
        open={placementDrawerOpen}
        onClose={() => setPlacementDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '95%',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3, pb: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2">
              Edit Placement
            </Typography>
            <IconButton onClick={() => setPlacementDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          
          <PlacementCard
            automaticPlacement={automaticPlacement}
            setAutomaticPlacement={setAutomaticPlacement}
            placementToggle={placementToggle}
            setPlacementToggle={setPlacementToggle}
          />

          {/* Genre Placement Card */}
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white',
            mb: 3
          }}>
            <Typography variant="h2" sx={{ mb: 1 }}>
              Genre placement
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
              Lets you choose the genres that will show your ads. You can also exclude specific genres and content ratings.
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Checkbox
                checked={excludeMatureContent}
                onChange={(e) => setExcludeMatureContent(e.target.checked)}
                size="small"
              />
              <Typography variant="body1">
                Exclude unrated, TV-MA, and R-rated content
              </Typography>
            </Box>

            {/* Genre Tiles */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: 2,
              mt: 3
            }}>
              {[
                { name: 'Action & Adventure', image: ActionAdventure },
                { name: 'Comedy', image: Comedy },
                { name: 'Drama', image: Drama },
                { name: 'Education', image: Education },
                { name: 'Holiday', image: Holiday },
                { name: 'Lifestyle', image: Lifestyle },
                { name: 'Music', image: Music },
                { name: 'News', image: News },
                { name: 'Reality & Pop culture', image: RealityPopculture },
                { name: 'Romance', image: Romance },
                { name: 'Sci-Fi', image: SciFi },
                { name: 'Sports', image: Sports }
              ].map((genre) => (
                <Box 
                  key={genre.name}
                  sx={{ 
                    border: '1px solid #e0e0e0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box 
                    component="img" 
                    src={genre.image} 
                    alt={genre.name}
                    sx={{ 
                      width: '100%', 
                      height: '120px',
                      objectFit: 'cover'
                    }} 
                  />
                  <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                      {genre.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Switch
                        size="small"
                        checked={genrePlacements[genre.name] === 'include'}
                        onChange={(e) => {
                          setGenrePlacements(prev => ({
                            ...prev,
                            [genre.name]: e.target.checked ? 'include' : 'exclude'
                          }));
                        }}
                      />
                      <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                        {genrePlacements[genre.name] === 'include' ? 'Include' : 'Exclude'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom Toolbar for Placement Edit Drawer */}
        <Box sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '95%',
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          p: 2,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1001
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, maxWidth: 'none', mx: 'auto' }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="medium"
              onClick={() => setPlacementDrawerOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              size="medium"
              onClick={() => {
                // Save changes and close drawer
                console.log('Saving placement changes');
                setPlacementDrawerOpen(false);
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Toast notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        message={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleOutlineIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white' }}>{toastMessage}</Typography>
          </Box>
        }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'up' }}
        ContentProps={{
          sx: {
            backgroundColor: '#4caf50',
            color: 'white'
          }
        }}
      />

      {/* Switch Confirmation Dialog */}
      <Dialog
        open={switchConfirmDialogOpen}
        onClose={cancelSwitchChange}
        aria-labelledby="switch-confirm-dialog-title"
        aria-describedby="switch-confirm-dialog-description"
      >
        <DialogTitle id="switch-confirm-dialog-title">
          Turn off?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="switch-confirm-dialog-description">
            This will prevent this from spending
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelSwitchChange} color="primary">
            No keep on
          </Button>
          <Button onClick={confirmSwitchChange} color="primary" variant="contained" autoFocus>
            Yes turn off
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

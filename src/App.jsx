import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DateRangeField from "./components/DateRangeField";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
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
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import InputAdornment from "@mui/material/InputAdornment";
import Drawer from "@mui/material/Drawer";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
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
import Logo from "/images/Logo.svg";
import Conversion from "./images/Conversion.png";
import AdGroup from "/images/ad-group.png";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend
);

// Helper function to get the correct image path for both dev and production
const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const RokuLogo = () => (
  <Box
    component="img"
    src={getImagePath("images/Logo.svg")}
    alt="Roku"
    sx={{ height: 16, mr: "8px" }}
  />
);

const StatusComponent = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'Active':
        return { icon: <CheckCircleOutlineIcon />, color: '#3e7d32' };
      case 'Approved':
        return { icon: <CheckCircleOutlineIcon />, color: '#3e7d32' };
      case 'Archived':
        return { icon: <ArchiveIcon />, color: '#4caf50' };
      case 'Creative in review':
        return { icon: <ImageSearchIcon />, color: 'infoMain' };
      case 'In review':
        return { icon: <ImageSearchIcon />, color: 'infoMain' };
      case 'Creative needed':
        return { icon: <AddPhotoAlternateIcon />, color: '#f44336' };
      case 'Creatives required':
        return { icon: <InfoOutlinedIcon />, color: '#f44336' };
      case 'Deactivated':
        return { icon: <MotionPhotosOffIcon />, color: '#f44336' };
      case 'Draft':
        return { icon: <CircleOutlinedIcon />, color: 'infoMain' };
      case 'Ended':
        return { icon: <StopCircleIcon />, color: '#424242' };
      case 'Inactive':
        return { icon: <PauseIcon />, color: '#ff9800' };
      case 'Rejected':
        return { icon: <WarningIcon />, color: '#f44336' };
      case 'Scheduled':
        return { icon: <ScheduleIcon />, color: 'infoMain' };
      case 'Event not yet configured':
        return { icon: <InfoOutlinedIcon />, color: 'infoMain' };
      default:
        return { icon: <PlayArrowIcon />, color: '#757575' };
    }
  };

  const { icon, color } = getStatusConfig(status);

  return (
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

// Reusable Creatives Card Component
const CreativesCard = ({ adGroup, isSelected, handleCampaignCheckboxClick, onAddCreative, getCreativesForAdGroup }) => {
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
              image={getImagePath("images/Creatives/Creative-InContent-Video.png")}
              title="In-content video"
              description="Video ads that play within content feeds"
              isSelected={false}
              onClick={() => {
                onAddCreative(adGroup);
                console.log('In-content video selected');
              }}
            />
            <TileComponent
              image={getImagePath("images/Creatives/Creative-Marquee.png")}
              title="Marquee"
              description="Banner ads displayed at the top of content"
              isSelected={false}
              onClick={() => {
                onAddCreative(adGroup);
                console.log('Marquee selected');
              }}
            />
            <TileComponent
              image={getImagePath("images/Creatives/Creative-Billboard.png")}
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
                      src={getImagePath("images/Creatives/In-content_video.mp4")}
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
                      src={getImagePath("images/Creatives/Marquee.png")}
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
                      src={getImagePath("images/Creatives/Billboard.png")}
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
                  <StatusComponent status={creative.status} />
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
const AdGroupDetailsSkeleton = ({ adGroups, currentCampaign = 'Holiday Sale 2024', selectedAdGroupId }) => {
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
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: '14px',
            cursor: 'pointer'
          }}
          onClick={(e) => {
            e.preventDefault();
            // This would normally go back, but during loading we'll keep it static
          }}
        >
          <ArrowBackIcon fontSize="small" />
          Back to ad groups
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
                Conversion
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Optimization goal
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                App installs
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
    status: "Creative in review",
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
    status: "Creative needed",
    previousStatus: "Creative needed",
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
    status: "Draft",
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
    status: "Inactive",
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
    status: "Scheduled",
    previousStatus: "Scheduled",
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
      { id: 10001, name: "Vandelay Industries Banner 1", type: "Billboard", status: "Approved" },
      { id: 10002, name: "Radio Shack Video 1", type: "In-content video", status: "Approved" }
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
      { id: 101, name: "Desktop Banner 1", type: "Billboard", status: "Approved" },
      { id: 102, name: "Desktop Video 1", type: "In-content video", status: "Approved" }
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
      { id: 201, name: "Mobile Banner 1", type: "Marquee", status: "Approved" },
      { id: 202, name: "Mobile Video 1", type: "In-content video", status: "In review" },
      { id: 203, name: "Mobile Banner 2", type: "Billboard", status: "Draft" }
    ]
  },
  { 
    id: 3, 
    campaign: "Young Adults - Sports Interest", 
    parentCampaign: "Holiday Sale 2024", 
    status: "Active", 
    spend: "$2,345.67", 
    impressions: "67,890", 
    cpm: "$3.46", 
    goalActions: "234", 
    goalCpa: "$10.02",
    creatives: [
      { id: 301, name: "Sports Banner 1", type: "Billboard", status: "Approved" }
    ]
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
      { id: 401, name: "Howdy S3 Home Banner 1", type: "Billboard", status: "Approved" }
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
      { id: 501, name: "Electronics Video 1", type: "In-content video", status: "Approved" },
      { id: 502, name: "Electronics Banner 1", type: "Billboard", status: "Approved" },
      { id: 503, name: "Electronics Banner 2", type: "Marquee", status: "Approved" }
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
      { id: 601, name: "Fashion Video 1", type: "In-content video", status: "Rejected" },
      { id: 602, name: "Fashion Banner 1", type: "Billboard", status: "Approved" }
    ]
  },
  { id: 7, campaign: "High Income - Luxury Goods", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,678.90", impressions: "54,321", cpm: "$3.09", goalActions: "167", goalCpa: "$10.05", creatives: [{ id: 701, name: "Luxury Banner 1", type: "Billboard", status: "In review" }, { id: 702, name: "Luxury Video 1", type: "In-content video", status: "Draft" }] },
  { id: 8, campaign: "432264404_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_1 (TFL0277361)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$1,789.01", impressions: "58,765", cpm: "$3.04", goalActions: "178", goalCpa: "$10.06", creatives: [{ id: 801, name: "Brand Showcase Marquee 1", type: "Marquee", status: "Approved" }] },
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
  { id: 9060, campaign: "Video - TRC Targeted Base - LTL RK, PN BLFF (LR) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90060, name: "DeLorean DMC-12 Little Rock Pine Bluff 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9061, campaign: "Video - TRC Targeted Base - LUBBOCK(LUB) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90061, name: "DeLorean DMC-12 Lubbock 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9062, campaign: "Video - TRC Targeted Base - MERIDIAN (MER) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90062, name: "DeLorean DMC-12 Meridian 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9063, campaign: "Video - TRC Targeted Base - MONRO(MON) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Active", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90063, name: "DeLorean DMC-12 Monroe 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9064, campaign: "Video - TRC Targeted Base - ODESSA (ODS) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90064, name: "DeLorean DMC-12 Odessa 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9065, campaign: "Video - TRC Targeted Base - OK CITY (OKC) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90065, name: "DeLorean DMC-12 Oklahoma City 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9066, campaign: "Video - TRC Targeted Base - SAN ANGELO (SAG) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90066, name: "DeLorean DMC-12 San Angelo 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9067, campaign: "Video - TRC Targeted Base - San Antonio (SAN) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90067, name: "DeLorean DMC-12 San Antonio 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9068, campaign: "Video - TRC Targeted Base - SHRMN (SHM) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90068, name: "DeLorean DMC-12 Sherman 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9069, campaign: "Video - TRC Targeted Base - VICTORIA(VIC) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Scheduled", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90069, name: "DeLorean DMC-12 Victoria 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9070, campaign: "Video - TRC Targeted Base - SHREVEPORT (SHR) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Inactive", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90070, name: "DeLorean DMC-12 Shreveport 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9071, campaign: "Video - TRC Targeted Base - TULSA (TUL) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Inactive", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90071, name: "DeLorean DMC-12 Tulsa 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9072, campaign: "Video - TRC Targeted Base - TYLER, LONGVIEW (TYL) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Inactive", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90072, name: "DeLorean DMC-12 Tyler Longview 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9073, campaign: "Video - TRC Targeted Base - WCO, TMPL, KILN (WAC) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Inactive", budget: "$1,690.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90073, name: "DeLorean DMC-12 Waco Temple Killeen 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 9074, campaign: "Video - TRC Targeted Base - WCHT FLLS, LWTN (WIF) EQUIV 15s", parentCampaign: "Sterling Cooper US | DeLorean Regional/Local | DI | Gulf States DMC-12 Q3 25 GM", status: "Inactive", budget: "$1,630.00", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 90074, name: "DeLorean DMC-12 Wichita Falls Lawton 15s Video", type: "In-content video", status: "Draft" }] },
  { id: 10, campaign: "432264404_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_1 (TFL0277361)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Draft", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 1001, name: "Tech Banner 1", type: "Marquee", status: "Rejected" }, { id: 1002, name: "Tech Video 1", type: "In-content video", status: "In review" }, { id: 1003, name: "Tech Banner 2", type: "Billboard", status: "Draft" }] },
  { id: 11, campaign: "Cart Abandoners - Retarget", parentCampaign: "Paused Brand Campaign", status: "Active", spend: "$892.34", impressions: "29,876", cpm: "$2.99", goalActions: "89", goalCpa: "$10.03", creatives: [{ id: 1101, name: "Retarget Banner 1", type: "Billboard", status: "Approved" }, { id: 1102, name: "Retarget Video 1", type: "In-content video", status: "Approved" }] },
  { id: 12, campaign: "Website Visitors - Retarget", parentCampaign: "Paused Brand Campaign", status: "Active", spend: "$1,123.45", impressions: "38,901", cpm: "$2.89", goalActions: "112", goalCpa: "$10.03", creatives: [{ id: 1201, name: "Website Banner 1", type: "Marquee", status: "In review" }] },
  { id: 13, campaign: "High Value Customers - Lookalike", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,567.89", impressions: "49,234", cpm: "$3.18", goalActions: "156", goalCpa: "$10.05", creatives: [{ id: 1301, name: "Lookalike Banner 1", type: "Billboard", status: "Approved" }, { id: 1302, name: "Lookalike Video 1", type: "In-content video", status: "Approved" }, { id: 1303, name: "Lookalike Banner 2", type: "Marquee", status: "Draft" }] },
  { id: 14, campaign: "Frequent Buyers - Lookalike", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,345.67", impressions: "42,108", cpm: "$3.20", goalActions: "134", goalCpa: "$10.04", creatives: [{ id: 1401, name: "Buyers Banner 1", type: "Billboard", status: "Rejected" }, { id: 1402, name: "Buyers Video 1", type: "In-content video", status: "In review" }] },
  { id: 15, campaign: "Sports Fans - Weekend", parentCampaign: "Failed Campaign Test", status: "Inactive", spend: "$678.90", impressions: "21,567", cpm: "$3.15", goalActions: "67", goalCpa: "$10.13" },
  { id: 16, campaign: "ALL-ALL-US_RTG-S3LINE2_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277228)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$987.65", impressions: "31,234", cpm: "$3.16", goalActions: "98", goalCpa: "$10.08", creatives: [{ id: 1601, name: "Howdy S3 Home Banner 2", type: "Billboard", status: "Approved" }] },
  { id: 30, campaign: "ALL-ALL-US_RTG-S3LINE3_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277233)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3001, name: "Howdy S3 Home Banner 3", type: "Billboard", status: "Approved" }] },
  { id: 31, campaign: "ALL-ALL-US_RTG-S3LINE4_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277235)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3101, name: "Howdy S3 Home Banner 4", type: "Billboard", status: "Approved" }] },
  { id: 32, campaign: "ALL-ALL-US_RTG-S3LINE5_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277240)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3201, name: "Howdy S3 Home Banner 5", type: "Billboard", status: "Approved" }] },
  { id: 33, campaign: "ALL-ALL-US_RTG-S3LINE7_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277243)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3301, name: "Howdy S3 Home Banner 7", type: "Billboard", status: "Approved" }] },
  { id: 34, campaign: "ALL-ALL-US_RTG-S3LINE8_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277249)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3401, name: "Howdy S3 Home Banner 8", type: "Billboard", status: "Approved" }] },
  { id: 35, campaign: "ALL-ALL-US_RTG-S3LINE9_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277252)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3501, name: "Howdy S3 Home Banner 9", type: "Billboard", status: "Approved" }] },
  { id: 36, campaign: "ALL-ALL-US_RTG-S3LINE10_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277256)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3601, name: "Howdy S3 Home Banner 10 Nov", type: "Billboard", status: "Approved" }] },
  { id: 37, campaign: "ALL-ALL-US_RTG-S3LINE10_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - October (TFL0277257)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Scheduled", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3701, name: "Howdy S3 Home Banner 10 Oct", type: "Billboard", status: "Draft" }] },
  { id: 38, campaign: "ALL-ALL-US_RTG-S3LINE11_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - November (TFL0277259)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3801, name: "Howdy S3 Home Banner 11", type: "Billboard", status: "Approved" }] },
  { id: 39, campaign: "ALL-ALL-US_RTG-S3LINE12_CPM_HOME-BANNER_ALL_ROKU_NA_ROT-G_NA - October (TFL0277263)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Scheduled", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 3901, name: "Howdy S3 Home Banner 12 Oct", type: "Billboard", status: "Draft" }] },
  { id: 40, campaign: "ALL-ALL-US_RTG-S3LINE20_CPM_HOME-SPOTLIGHT_ALL_ROKU_NA_ROT-G_NA- November (TFL0277299)", parentCampaign: "Client Direct | Howdy | DI | Howdy S3 4Q 2025", status: "Active", spend: "$0.00", impressions: "0", cmp: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 4001, name: "Howdy S3 Home Spotlight", type: "Billboard", status: "Approved" }] },
  { id: 17, campaign: "Urban Areas - Commute Hours", parentCampaign: "Q3 Product Archive", status: "Active", spend: "$1,234.56", impressions: "39,876", cpm: "$3.10", goalActions: "123", goalCpa: "$10.04", creatives: [{ id: 1701, name: "Urban Video 1", type: "In-content video", status: "Approved" }, { id: 1702, name: "Urban Banner 1", type: "Billboard", status: "Draft" }, { id: 1703, name: "Urban Banner 2", type: "Marquee", status: "In review" }] },
  { id: 18, campaign: "Suburban Areas - Evening", parentCampaign: "Q3 Product Archive", status: "Active", spend: "$1,456.78", impressions: "46,543", cpm: "$3.13", goalActions: "145", goalCpa: "$10.05", creatives: [{ id: 1801, name: "Suburban Banner 1", type: "Billboard", status: "Approved" }] },
  { id: 19, campaign: "432015535_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_2 (TFL0277363)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Scheduled", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 1901, name: "Brand Showcase Marquee 2", type: "Marquee", status: "Draft" }] },
  { id: 25, campaign: "432015526_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_3 (TFL0277366)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2501, name: "Brand Showcase Marquee 3", type: "Marquee", status: "Approved" }] },
  { id: 26, campaign: "432603873_BILLABLE_Theme_BETA_Sponsorship Display_Theme (TFL0277386)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2601, name: "Theme Sponsorship Display", type: "Billboard", status: "In review" }] },
  { id: 27, campaign: "432015559_Season's Streamings_Native Ads (Marquee Ad Video)_TKO_Hourly_Primetime 7-11pm UTZ (TFL0288536)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2701, name: "Season's Streamings Marquee Video", type: "Marquee", status: "Approved" }] },
  { id: 28, campaign: "432604569_Season's Streamings_Season's Streaming_Native Ads (Marquee + Billboard) (TFL0288538)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Scheduled", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2801, name: "Season's Streamings Marquee + Billboard", type: "Billboard", status: "Draft" }] },
  { id: 29, campaign: "432262595_Season's Streamings_Season's Streaming_Premiere Tile_1A (TFL0288539)", parentCampaign: "Caldor Upfront Holiday 2025", status: "Active", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2901, name: "Season's Streamings Premiere Tile", type: "Billboard", status: "Approved" }] },
  { id: 21, campaign: "Electronics Cross-sell", parentCampaign: "Black Friday 2023", status: "Active", spend: "$789.01", impressions: "25,432", cpm: "$3.10", goalActions: "78", goalCpa: "$10.12", creatives: [{ id: 2101, name: "Electronics Banner 1", type: "Billboard", status: "Approved" }] },
  { id: 22, campaign: "Accessories Cross-sell", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$654.32", impressions: "21,098", cpm: "$3.10", goalActions: "65", goalCpa: "$10.07", creatives: [{ id: 2201, name: "Accessories Video 1", type: "In-content video", status: "In review" }, { id: 2202, name: "Accessories Banner 1", type: "Marquee", status: "Approved" }, { id: 2203, name: "Accessories Banner 2", type: "Billboard", status: "Draft" }, { id: 2204, name: "Accessories Video 2", type: "In-content video", status: "Rejected" }] },
  { id: 23, campaign: "Premium Products Upsell", parentCampaign: "Holiday Sale 2024", status: "Active", spend: "$1,098.76", impressions: "35,467", cpm: "$3.10", goalActions: "109", goalCpa: "$10.08", creatives: Array.from({length: 37}, (_, i) => ({ id: 2300 + i + 1, name: `Premium Creative ${i + 1}`, type: ['In-content video', 'Billboard', 'Marquee'][i % 3], status: ['Approved', 'In review', 'Draft', 'Rejected'][i % 4] })) },
  { id: 24, campaign: "432015535_Brand Showcase_Native Ads (Marquee)_50% SOVTakeover_2 (TFL0277363)", parentCampaign: "Kmart Upfront Holiday Total Plan 2025", status: "Creative in review", spend: "$0.00", impressions: "0", cpm: "$0.00", goalActions: "0", goalCpa: "$0.00", creatives: [{ id: 2401, name: "Brand Showcase Marquee 2", type: "Marquee", status: "In review" }] },
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
      { id: 101, name: "Holiday Banner 1", type: "Marquee", size: "728x90", status: "Approved" },
      { id: 102, name: "Holiday Video 1", type: "In-content video", size: "16:9", status: "Approved" },
      { id: 103, name: "Holiday Banner 2", type: "Billboard", size: "300x250", status: "In review" }
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
      { id: 201, name: "Black Friday Special", type: "Billboard", size: "970x250", status: "Rejected" },
      { id: 202, name: "BF Video Ad", type: "In-content video", size: "16:9", status: "Rejected" }
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
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('Performance');
  const [statusFilter, setStatusFilter] = useState([
    'Active', 
    'Creative in review', 
    'Creative needed', 
    'Deactivated', 
    'Draft', 
    'Ended', 
    'Inactive', 
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
  const [visibleFilters, setVisibleFilters] = useState(['status']);
  const [filterMenuAnchor, setFilterMenuAnchor] = useState(null);
  const [statusSelectOpen, setStatusSelectOpen] = useState(false);
  const [creativeTypeSelectOpen, setCreativeTypeSelectOpen] = useState(false);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'details', or 'reports'
  const [selectedCampaignForDetails, setSelectedCampaignForDetails] = useState(null);
  const [selectedAdGroupForDetails, setSelectedAdGroupForDetails] = useState(null);
  
  // Reports view state
  const [reportsSelectedCampaigns, setReportsSelectedCampaigns] = useState([]);
  const [reportsSelectedCreatives, setReportsSelectedCreatives] = useState([]);
  const [reportsStartDate, setReportsStartDate] = useState(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
  const [reportsEndDate, setReportsEndDate] = useState(new Date());
  const [reportsSelectedTab, setReportsSelectedTab] = useState(0); // 0: Ad account, 1: Location, 2: Creative, 3: Placement
  
  const [selectedTab, setSelectedTab] = useState(0); // 0: Campaigns, 1: Ad groups, 2: Creatives
  const [selectedCampaigns, setSelectedCampaigns] = useState({
    0: [], // Campaigns tab selections
    1: [], // Ad groups tab selections
    2: []  // Creatives tab selections
  });
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(true);
  const [isLoadingAdGroupDetails, setIsLoadingAdGroupDetails] = useState(false);
  const [creativesMenuAnchorEl, setCreativesMenuAnchorEl] = useState(null);
  const [showCreativeGridOverlay, setShowCreativeGridOverlay] = useState(false);
  const [creativeGridSortConfig, setCreativeGridSortConfig] = useState({ key: null, direction: 'asc' });
  const [creativeGridActiveTab, setCreativeGridActiveTab] = useState(0);
  const [selectedCreativeType, setSelectedCreativeType] = useState(null);
  const [selectedCampaignType, setSelectedCampaignType] = useState(null);
  const [specialCategories, setSpecialCategories] = useState({
    credit: false,
    employment: false,
    housing: false
  });
  const [selectedConversionEvent, setSelectedConversionEvent] = useState('');
  const [newAdGroupName, setNewAdGroupName] = useState('');
  const adGroupNameFieldRef = useRef(null);
  const multipleAdGroupsFieldRef = useRef(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
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
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const profileMenuOpen = Boolean(profileMenuAnchorEl);
  const [selectedProfileOption, setSelectedProfileOption] = useState('All');
  const [activeNavItem, setActiveNavItem] = useState('Campaigns'); // Default to Campaigns
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

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleViewChange = (event) => {
    const newViewMode = event.target.value;
    setViewMode(newViewMode);
    
    // Update status filter based on view mode
    if (newViewMode === 'Pre-launch') {
      setStatusFilter(['Draft', 'Creative in review', 'Creative needed', 'Scheduled']);
    } else if (newViewMode === 'Performance') {
      setStatusFilter(['Active', 'Creative in review', 'Creative needed', 'Deactivated', 'Draft', 'Ended', 'Inactive', 'Scheduled']);
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
    // Get all unique campaign names from ad groups data
    const allCampaignNames = [...new Set(adGroupsData.map(adGroup => adGroup.campaign))];
    setCollapsedCampaigns(new Set(allCampaignNames));
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
    setCampaigns(prevCampaigns => 
      prevCampaigns.map(campaign => {
        if (campaign.id === campaignId) {
          if (isChecked) {
            // Switch turned on - restore previous status
            return {
              ...campaign,
              status: campaign.previousStatus
            };
          } else {
            // Switch turned off - store current status and set to Inactive
            return {
              ...campaign,
              previousStatus: campaign.status !== 'Inactive' ? campaign.status : campaign.previousStatus,
              status: 'Inactive'
            };
          }
        }
        return campaign;
      })
    );
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

    // Show success message
    setToastMessage('Campaign created successfully');
    setToastOpen(true);

    // Close the drawer
    setDrawerOpen(false);

    // Navigate to campaign details
    setSelectedCampaignForDetails(newCampaign);
    setSelectedAdGroupForDetails(null);
    setCurrentView('details');

    // Reset form state
    setSelectedCampaignType(null);
    setSpecialCategories({
      credit: false,
      employment: false,
      housing: false
    });
    setSelectedConversionEvent('');
    setTempDayparting(new Set());
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
    
    // Close the info drawer and stay on the table view
    handleMultipleAdGroupsInfoDrawerClose();
    setSelectedCampaignForDetails(null);
    // Don't change the current view - stay on the table
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

  const handleCreativeSelection = (creativeId) => {
    setSelectedCreativesForAssignment(prev => 
      prev.includes(creativeId) 
        ? prev.filter(id => id !== creativeId)
        : [...prev, creativeId]
    );
  };

  const handleSelectAllCreatives = (event) => {
    const allVisibleCreatives = adGroupsData.flatMap(adGroup => 
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
    // Check if this campaign has multiple ad groups
    const campaignAdGroups = adGroups.filter(ag => ag.parentCampaign === campaign.campaign);
    console.log('Campaign ad groups found:', campaignAdGroups.length);
    
    if (campaignAdGroups.length > 1) {
      // If multiple ad groups, navigate to the first ad group details (with sidebar) with loading
      const firstAdGroup = campaignAdGroups[0];
      console.log('Multiple ad groups, navigating to first ad group:', firstAdGroup);
      setIsLoadingAdGroupDetails(true);
      setSelectedAdGroupForDetails(null);
      setSelectedCampaignForDetails(null);
      setCurrentView('details');
      
      // Simulate loading time (in real app, this would be an API call)
      setTimeout(() => {
        setSelectedAdGroupForDetails(firstAdGroup);
        setIsLoadingAdGroupDetails(false);
      }, 200);
    } else {
      // Single ad group or no ad groups, navigate to campaign details
      console.log('Single/no ad groups, navigating to campaign details:', campaign);
      setSelectedCampaignForDetails(campaign);
      setSelectedAdGroupForDetails(null);
      setCurrentView('details');
      console.log('Set currentView to details and selectedCampaignForDetails');
    }
  };

  const handleAdGroupClick = (adGroup) => {
    setIsLoadingAdGroupDetails(true);
    // Don't clear selectedAdGroupForDetails immediately - keep it for context
    setSelectedCampaignForDetails(null);
    setCurrentView('details');
    
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
      impressions: 0,
      cpm: 0,
      goalActions: 0,
      goalCPA: 0,
      lifetimeBudget: "$500",
      lastModified: new Date().toISOString()
    };
    
    // Add the new ad group to the top of the adGroups array
    setAdGroups(prev => [newAdGroup, ...prev]);
    
    // Clear the input field
    setNewAdGroupName('');
    
    // Show success toast
    setToastMessage('Your ad group has been created');
    setToastOpen(true);
    
    // Close the drawer and stay on the table view
    setAdGroupsDrawerOpen(false);
    // Clear the target campaign after creation
    setTargetCampaignForMultipleAdGroups(null);
    // Don't change the current view - stay on the table
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
    if (selectedTab === 0) {
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
    
    // Reset show selected only mode when no campaigns are selected
    if (selectedTab === 0 && newSelected.length === 0) {
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
    'Creative needed': 3,
    'Creative in review': 4,
    'Scheduled': 5,
    'Inactive': 6,
    'Deactivated': 7,
    'Ended': 8,
    'Archived': 9
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

  // Filter ad groups based on search term, selected statuses, and selected campaigns
  const filteredAdGroups = adGroups.filter(adGroup => {
    const matchesSearch = adGroup.campaign.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For Performance view, exclude Archived status regardless of status filter
    let matchesStatus = statusFilter.length === 0 || statusFilter.includes(adGroup.status);
    if (viewMode === 'Performance' && adGroup.status === 'Archived') {
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
      return matchesSearch && matchesStatus && matchesCreativeType && belongsToSelectedCampaign;
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
    handleMultipleAdGroupsInfoDrawerOpen
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

    const [campaignName, setCampaignName] = useState(campaign.campaign || '');
    const [lifetimeBudget, setLifetimeBudget] = useState(
      campaign.lifetimeBudget && typeof campaign.lifetimeBudget === 'string' 
        ? campaign.lifetimeBudget.replace('$', '') 
        : "500"
    );
    const [isSaving, setIsSaving] = useState(false);
    const [isBudgetSaving, setIsBudgetSaving] = useState(false);
    const [autoBid, setAutoBid] = useState(true);

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
      const value = event.target.value;
      // Only allow numbers (including decimals)
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        setLifetimeBudget(value);
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
          backgroundColor: 'white'
        }}>
          <Box>
            <Typography variant="caption" color="text.secondary">Goal</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{campaign.goal}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Spend</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{campaign.spend}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Impressions</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{campaign.impressions}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">CPM</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{campaign.cpm}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Goal Actions</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{campaign.goalActions}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Goal CPA</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{campaign.goalCpa}</Typography>
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
                Conversion
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Optimization goal
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                App installs
              </Typography>
            </Box>
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
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
          <Typography variant="body1" color="text.secondary" sx={{ width: '240px' }}>
            Lifetime budget
            <Typography component="span" sx={{ color: 'red', ml: 0.5 }}>
              *
            </Typography>
          </Typography>
          <TextField
            value={lifetimeBudget}
            onChange={handleLifetimeBudgetChange}
            onBlur={handleLifetimeBudgetBlur}
            onKeyPress={handleLifetimeBudgetKeyPress}
            variant="outlined"
            size="small"
            sx={{ width: '240px' }}
            placeholder="Enter amount"
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
        </Box>
        
        <Divider sx={{ mt: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="h2">
            Schedule
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setScheduleEditDrawerOpen(true)}
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
          <Button variant="outlined" size="small">
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
      
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h2">
            Placement
          </Typography>
          <Button variant="outlined" size="small">
            Edit
          </Button>
        </Box>
        
        <Typography variant="caption" color="text.secondary">
          Lets you select where your ads will be shown. <Link href="#" underline="hover" color="primary">Learn about ad placement.</Link>
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', width: '240px' }}>
            <Typography variant="body1" color="text.secondary">
              Automatic placement
            </Typography>
            <Tooltip 
              title={
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Automatic placement optimizes your ad delivery across all available placements to get the best results for your campaign.
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
          <Switch size="small" defaultChecked />
          <Typography variant="caption" color="text.secondary" sx={{ ml: '1px' }}>
            CPM estimate (all ad types): $8-$30
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', mt: 2 }}>
          <Box component="img" src={getImagePath("images/Channels/roku_chan.png")} alt="Roku Channel" sx={{ width: 50, height: 38 }} />
          <Box component="img" src={getImagePath("images/Channels/Disney.png")} alt="Disney" sx={{ width: 50, height: 38 }} />
          <Box component="img" src={getImagePath("images/Channels/hulu.png")} alt="Hulu" sx={{ width: 50, height: 38 }} />
          <Box component="img" src={getImagePath("images/Channels/hbo.png")} alt="HBO" sx={{ width: 50, height: 38 }} />
          <Box component="img" src={getImagePath("images/Channels/peacock.png")} alt="Peacock" sx={{ width: 50, height: 38 }} />
          <Box component="img" src={getImagePath("images/Channels/tubi.png")} alt="Tubi" sx={{ width: 50, height: 38 }} />
          <Box component="img" src={getImagePath("images/Channels/espn.png")} alt="ESPN" sx={{ width: 50, height: 38 }} />
        </Box>
        
        <Link href="#" underline="hover" color="primary" sx={{ mt: 1, display: 'inline-block' }}>
          See more
        </Link>
      </Box>

      {/* Delivery Card */}
      <Box sx={{ 
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'white',
        mb: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h2">
            Delivery
          </Typography>
          <Button variant="outlined" size="small">
            Edit
          </Button>
        </Box>
        
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
          <Switch size="small" checked={autoBid} onChange={(e) => setAutoBid(e.target.checked)} />
        </Box>
      </Box>

      {/* Creatives Card for Campaign */}
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
          const campaignAdGroups = adGroupsData.filter(adGroup => 
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
                  image={getImagePath("images/Creatives/Creative-InContent-Video.png")}
                  title="In-content video"
                  description="Video ads that play within content feeds"
                  isSelected={false}
                  onClick={() => {
                    console.log('In-content video selected for campaign');
                  }}
                />
                <TileComponent
                  image={getImagePath("images/Creatives/Creative-Marquee.png")}
                  title="Marquee"
                  description="Banner ads displayed at the top of content"
                  isSelected={false}
                  onClick={() => {
                    console.log('Marquee selected for campaign');
                  }}
                />
                <TileComponent
                  image={getImagePath("images/Creatives/Creative-Billboard.png")}
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
                            src={getImagePath("images/Creatives/In-content_video.mp4")}
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
                            src={getImagePath("images/Creatives/Marquee.png")}
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
                            src={getImagePath("images/Creatives/Billboard.png")}
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
          <Button variant="contained" color="primary" size="medium">
            Publish
          </Button>
        </Box>
      </Box>
    </Box>
    </>
    );
  };

  // Ad Group Details Component
  const AdGroupDetails = ({ adGroup, selectedTimeSlots, setSelectedTimeSlots, setScheduleEditDrawerOpen, setDrawerContext: setDrawerContextProp, setDrawerOpen: setDrawerOpenProp, setCurrentView, setActiveNavItem }) => {
    const [adGroupName, setAdGroupName] = useState(adGroup.campaign);
    const [lifetimeBudget, setLifetimeBudget] = useState(adGroup.lifetimeBudget?.replace('$', '') || "500");
    const [isSaving, setIsSaving] = useState(false);
    const [isBudgetSaving, setIsBudgetSaving] = useState(false);
    const [campaignDetailsExpanded, setCampaignDetailsExpanded] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(250);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [autoBid, setAutoBid] = useState(true);
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
      saveLifetimeBudget();
    };

    const handleLifetimeBudgetKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.target.blur(); // This will trigger the blur event and save
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
                Conversion
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Optimization goal
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                App installs
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
                    // Primary sort: by last modified date (most recent first) - if available
                    if (a.lastModified && b.lastModified) {
                      const dateA = new Date(a.lastModified);
                      const dateB = new Date(b.lastModified);
                      
                      if (dateA.getTime() !== dateB.getTime()) {
                        return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
                      }
                    }
                    
                    // Secondary sort: by status priority
                    const statusPriority = {
                      'Active': 1,
                      'Paused': 2,
                      'Approval required': 3,
                      'Stopped': 4
                    };
                    
                    const priorityA = statusPriority[a.status] || 999;
                    const priorityB = statusPriority[b.status] || 999;
                    
                    if (priorityA !== priorityB) {
                      return priorityA - priorityB;
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
                      borderRadius: selectedAdGroupForDetails?.id === ag.id ? 0 : 1,
                      cursor: 'pointer',
                      backgroundColor: selectedAdGroupForDetails?.id === ag.id ? '#EDE7F6' : 'transparent',
                      borderTop: selectedAdGroupForDetails?.id === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderRight: selectedAdGroupForDetails?.id === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderBottom: selectedAdGroupForDetails?.id === ag.id ? '1px solid #20004C' : '1px solid transparent',
                      borderLeft: selectedAdGroupForDetails?.id === ag.id ? '3px solid #20004C' : '1px solid transparent',
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
                <StatusComponent status={adGroup.status} />
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
              backgroundColor: 'white'
            }}>
              <Box>
                <Typography variant="caption" color="text.secondary">Impressions</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{adGroup.impressions}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">CPM</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{adGroup.cpm}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Goal Actions</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{adGroup.goalActions}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary">Goal CPA</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{adGroup.goalCpa}</Typography>
              </Box>
            </Box>
          )}
          
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white',
            mb: 3
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
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
                      $300 minimum required
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
              <Typography variant="body1" color="text.secondary" sx={{ width: '240px' }}>
                Lifetime budget
                <Typography component="span" sx={{ color: 'red', ml: 0.5 }}>
                  *
                </Typography>
              </Typography>
              <TextField
                value={lifetimeBudget}
                onChange={handleLifetimeBudgetChange}
                onBlur={handleLifetimeBudgetBlur}
                onKeyPress={handleLifetimeBudgetKeyPress}
                variant="outlined"
                size="small"
                sx={{ width: '240px' }}
                placeholder="Enter amount"
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
            </Box>
            
            <Divider sx={{ mt: 2 }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
              <Typography variant="h2">
                Schedule
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setScheduleEditDrawerOpen(true)}
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
              <Button variant="outlined" size="small">
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
          
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white',
            mb: 3
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h2">
                Placement
              </Typography>
              <Button variant="outlined" size="small">
                Edit
              </Button>
            </Box>
            
            <Typography variant="caption" color="text.secondary">
              Lets you select where your ads will be shown. <Link href="#" underline="hover" color="primary">Learn about ad placement.</Link>
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', width: '240px' }}>
                <Typography variant="body1" color="text.secondary">
                  Automatic placement
                </Typography>
                <Tooltip 
                  title={
                    <Box>
                      <Typography variant="body2" gutterBottom>
                        Automatic placement optimizes your ad delivery across all available placements to get the best results for your campaign.
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
              <Switch size="small" defaultChecked />
              <Typography variant="caption" color="text.secondary" sx={{ ml: '1px' }}>
                CPM estimate (all ad types): $8-$30
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', mt: 2 }}>
              <Box component="img" src={getImagePath("images/Channels/roku_chan.png")} alt="Roku Channel" sx={{ width: 50, height: 38 }} />
              <Box component="img" src={getImagePath("images/Channels/Disney.png")} alt="Disney" sx={{ width: 50, height: 38 }} />
              <Box component="img" src={getImagePath("images/Channels/hulu.png")} alt="Hulu" sx={{ width: 50, height: 38 }} />
              <Box component="img" src={getImagePath("images/Channels/hbo.png")} alt="HBO" sx={{ width: 50, height: 38 }} />
              <Box component="img" src={getImagePath("images/Channels/peacock.png")} alt="Peacock" sx={{ width: 50, height: 38 }} />
              <Box component="img" src={getImagePath("images/Channels/tubi.png")} alt="Tubi" sx={{ width: 50, height: 38 }} />
              <Box component="img" src={getImagePath("images/Channels/espn.png")} alt="ESPN" sx={{ width: 50, height: 38 }} />
            </Box>
            
            <Link href="#" underline="hover" color="primary" sx={{ mt: 1, display: 'inline-block' }}>
              See more
            </Link>
          </Box>

          {/* Delivery Card */}
          <Box sx={{ 
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            p: 3,
            backgroundColor: 'white',
            mb: 3
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h2">
                Delivery
              </Typography>
              <Button variant="outlined" size="small">
                Edit
              </Button>
            </Box>
            
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
              <Switch size="small" checked={autoBid} onChange={(e) => setAutoBid(e.target.checked)} />
            </Box>
          </Box>

          {/* Creatives Card */}
          <CreativesCard 
            adGroup={adGroup}
            isSelected={isSelected}
            handleCampaignCheckboxClick={handleCampaignCheckboxClick}
            onAddCreative={(selectedAdGroup) => {
              setSelectedAdGroupForCreatives(selectedAdGroup);
              setCreativesDrawerOpen(true);
            }}
            getCreativesForAdGroup={getCreativesForAdGroup}
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
          <StatusComponent status={adGroup.status} />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="caption" color="text.secondary" sx={{ alignSelf: 'center', mr: 2 }}>
            {isSaving || isBudgetSaving ? '✓ Saved' : `Last updated ${new Date().toLocaleString()}`}
          </Typography>
          {adGroup.status === 'Active' ? (
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
          ) : (
            <Button variant="contained" color="primary" size="medium">
              Publish
            </Button>
          )}
        </Box>
      </Box>
    </Box>
    </>
    );
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#20004c", height: "60px" }}>
        <Toolbar sx={{ height: "100%", minHeight: "60px" }}>
          <Box 
            onClick={handleBackToList}
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
            onClick={handleBackToList}
            sx={{ 
              mr: 2,
              cursor: 'pointer'
            }}
          >
            Ads Manager
          </Typography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value="campaigns"
              variant="outlined"
              sx={{ 
                color: 'white',
                backgroundColor: '#5D12B7',
                height: '36px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '& .MuiSvgIcon-root': {
                  color: 'white'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                }
              }}
            >
              <MenuItem value="campaigns">
                <Box>
                  <Typography variant="caption" sx={{ color: 'white', display: 'block', lineHeight: 1, mb: '-2px' }}>
                    Roku
                  </Typography>
                  <Typography sx={{ color: 'white' }}>
                    Wally's Windows
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem value="audiences">Audiences</MenuItem>
              <MenuItem value="reports">Reports</MenuItem>
            </Select>
          </FormControl>
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
              onClick={() => handleProfileMenuItemClick('All')}
              selected={selectedProfileOption === 'All'}
            >
              All
            </MenuItem>
            <MenuItem 
              onClick={() => handleProfileMenuItemClick('Self')}
              selected={selectedProfileOption === 'Self'}
            >
              Self
            </MenuItem>
            <MenuItem 
              onClick={() => handleProfileMenuItemClick('Managed')}
              selected={selectedProfileOption === 'Managed'}
            >
              Managed
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {currentView === 'list' ? (
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
                <MenuItem value="Creative in review">
                  <Checkbox checked={statusFilter.indexOf('Creative in review') > -1} />
                  <ListItemText primary="Creative in review" />
                </MenuItem>
                <MenuItem value="Creative needed">
                  <Checkbox checked={statusFilter.indexOf('Creative needed') > -1} />
                  <ListItemText primary="Creative needed" />
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
                <MenuItem value="Inactive">
                  <Checkbox checked={statusFilter.indexOf('Inactive') > -1} />
                  <ListItemText primary="Inactive" />
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, pl: "20px" }}>
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
            {selectedProfileOption !== 'Managed' && (
              <Button variant="contained" color="primary" sx={{ height: "40px", whiteSpace: "nowrap" }} onClick={handleCreateCampaign}>
                Create campaign
              </Button>
            )}
            </Box>
          </Box>
          
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
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
                    Creatives
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
          </Box>
          
          {/* Campaign Selection Toolbar */}
          {selectedTab === 0 && selectedCampaigns[0]?.length > 0 && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              p: 2, 
              backgroundColor: '#f5f5f5', 
              borderRadius: 1, 
              mb: 2 
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
          
          {selectedTab === 2 && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              alignItems: 'center', 
              mb: 2,
              gap: 1
            }}>
              {/* Expand/Collapse All Control */}
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  // Check if any groups are collapsed
                  const allCampaignNames = [...new Set(adGroupsData.map(adGroup => adGroup.campaign))];
                  const hasCollapsedGroups = allCampaignNames.some(campaign => collapsedCampaigns.has(campaign));
                  
                  if (hasCollapsedGroups) {
                    expandAllCreativeGroups();
                  } else {
                    collapseAllCreativeGroups();
                  }
                }}
                startIcon={(() => {
                  const allCampaignNames = [...new Set(adGroupsData.map(adGroup => adGroup.campaign))];
                  const hasCollapsedGroups = allCampaignNames.some(campaign => collapsedCampaigns.has(campaign));
                  return hasCollapsedGroups ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />;
                })()}
                sx={{ textTransform: 'none' }}
              >
                {(() => {
                  const allCampaignNames = [...new Set(adGroupsData.map(adGroup => adGroup.campaign))];
                  const hasCollapsedGroups = allCampaignNames.some(campaign => collapsedCampaigns.has(campaign));
                  return hasCollapsedGroups ? 'Expand all' : 'Collapse all';
                })()}
              </Button>

              {/* View Creatives Grid Control */}
              {selectedProfileOption !== 'Self' && (
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
              )}
              
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
            </Box>
          )}
          
          {selectedTab === 2 ? (
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
                    <TableCell sx={{ width: '175px', padding: '8px' }}>Preview</TableCell>
                    <TableCell sx={{ width: '100%' }}>Creative Name</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>Status</TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>Type</TableCell>
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
                    
                    // Don't render ad group header if no creatives match the filter
                    if (creativesForAdGroup.length === 0) {
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
                        {!collapsedCampaigns.has(adGroup.campaign) && creativesForAdGroup.map((creative) => (
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
                                  src={getImagePath("images/Creatives/In-content_video.mp4")}
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
                                  src={getImagePath("images/Creatives/Marquee.png")}
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
                                  src={getImagePath("images/Creatives/Billboard.png")}
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
                              <StatusComponent status={creative.status} />
                            </TableCell>
                            <TableCell sx={{ whiteSpace: 'nowrap' }}>{creative.type}</TableCell>
                          </TableRow>
                        ))}
                      </React.Fragment>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <>
              {selectedTab === 1 && (
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center', 
                  mb: 2,
                  p: selectedCampaigns[1].length > 0 ? 1.5 : 0,
                  backgroundColor: selectedCampaigns[1].length > 0 ? '#f5f5f5' : 'transparent',
                  borderRadius: '4px'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
                      </>
                    )}
                  </Box>
                  {/* Expand/Collapse All Control for Ad Groups */}
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      // Check if any groups are collapsed for Ad Groups
                      const allParentCampaigns = [...new Set(getFilteredData().map(adGroup => adGroup.parentCampaign))];
                      const hasCollapsedGroups = allParentCampaigns.some(campaign => collapsedCampaigns.has(campaign));
                      
                      if (hasCollapsedGroups) {
                        expandAllCreativeGroups();
                      } else {
                        collapseAllCreativeGroups();
                      }
                    }}
                    startIcon={(() => {
                      const allParentCampaigns = [...new Set(getFilteredData().map(adGroup => adGroup.parentCampaign))];
                      const hasCollapsedGroups = allParentCampaigns.some(campaign => collapsedCampaigns.has(campaign));
                      return hasCollapsedGroups ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />;
                    })()}
                    sx={{ textTransform: 'none' }}
                  >
                    {(() => {
                      const allParentCampaigns = [...new Set(getFilteredData().map(adGroup => adGroup.parentCampaign))];
                      const hasCollapsedGroups = allParentCampaigns.some(campaign => collapsedCampaigns.has(campaign));
                      return hasCollapsedGroups ? 'Expand all' : 'Collapse all';
                    })()}
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
                      indeterminate={selectedCampaigns[selectedTab]?.length > 0 && selectedCampaigns[selectedTab]?.length < getFilteredData().length}
                      checked={getFilteredData().length > 0 && selectedCampaigns[selectedTab]?.length === getFilteredData().length}
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    {selectedTab === 0 ? 'Campaign' : 'Ad group'}
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
                                          backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                          '& .MuiChip-label': {
                                            fontWeight: 'normal'
                                          }
                                        }}
                                      />
                                    </Box>
                                  ));
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
                        {!collapsedCampaigns.has(parentCampaign) && adGroups.map((item) => (
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
                              <StatusComponent status={item.status} />
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
                                  checked={item.status !== 'Inactive'}
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
                        ))}
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
                          checked={item.status !== 'Inactive'}
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
          </>
          )}
        </Container>
      ) : currentView === 'reports' ? (
        <Container maxWidth={false} sx={{ p: "20px" }}>
          {/* Reports Header */}
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
            Reports
          </Typography>
          
          {/* Filter Controls */}
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: 'wrap' }}>
            {/* Campaign Multi-select */}
            <FormControl sx={{ minWidth: 300 }} size="small">
              <InputLabel>Campaigns</InputLabel>
              <Select
                multiple
                size="small"
                value={reportsSelectedCampaigns}
                onChange={(event) => setReportsSelectedCampaigns(event.target.value)}
                label="Campaigns"
                renderValue={(selected) => 
                  selected.length === 0 
                    ? 'Select campaigns...' 
                    : `${selected.length} campaign${selected.length === 1 ? '' : 's'} selected`
                }
              >
                {campaigns.map((campaign) => (
                  <MenuItem key={campaign.id} value={campaign.id}>
                    <Checkbox checked={reportsSelectedCampaigns.indexOf(campaign.id) > -1} />
                    <ListItemText primary={campaign.campaign} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Date Range */}
            <DateRangeField 
              sx={{ gap: '6px' }}
              startDate={reportsStartDate ? reportsStartDate.toISOString().split('T')[0] : ''}
              endDate={reportsEndDate ? reportsEndDate.toISOString().split('T')[0] : ''}
              onStartDateChange={(dateString) => setReportsStartDate(dateString ? new Date(dateString) : null)}
              onEndDateChange={(dateString) => setReportsEndDate(dateString ? new Date(dateString) : null)}
            />

            {/* Creatives Multi-select */}
            <FormControl sx={{ minWidth: 300 }} size="small">
              <InputLabel>Creatives</InputLabel>
              <Select
                multiple
                size="small"
                value={reportsSelectedCreatives}
                onChange={(event) => setReportsSelectedCreatives(event.target.value)}
                label="Creatives"
                renderValue={(selected) => 
                  selected.length === 0 
                    ? 'Select creatives...' 
                    : `${selected.length} creative${selected.length === 1 ? '' : 's'} selected`
                }
              >
                {creatives.map((creative) => (
                  <MenuItem key={creative.id} value={creative.id}>
                    <Checkbox checked={reportsSelectedCreatives.indexOf(creative.id) > -1} />
                    <ListItemText primary={creative.campaign} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
              <Tab label="Ad account" />
              <Tab label="Location" />
              <Tab label="Creative" />
              <Tab label="Placement" />
            </Tabs>
          </Box>

          {/* Metrics Card */}
          <Box sx={{ 
            display: 'flex', 
            gap: 4, 
            p: 3,
            backgroundColor: 'white',
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: 1,
            mb: 4,
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">Spend</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>$12,345.67</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">Impressions</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>1,234,567</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">Goal Actions</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>8,912</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">Total Households Reached</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>345,678</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">Active Campaigns</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>12</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">CPM</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>$3.57</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">CPA</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>$1.39</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: '120px' }}>
              <Typography variant="caption" color="text.secondary">Cost per Unique Reach</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>$0.04</Typography>
            </Box>
          </Box>

          {/* Chart Card */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
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
                      position: 'top',
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

          {/* Reports Content */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Report Data
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {reportsSelectedCampaigns.length === 0 && reportsSelectedCreatives.length === 0
                ? 'Please select campaigns and/or creatives to view report data.'
                : `Showing data for ${reportsSelectedCampaigns.length} campaign${reportsSelectedCampaigns.length === 1 ? '' : 's'} and ${reportsSelectedCreatives.length} creative${reportsSelectedCreatives.length === 1 ? '' : 's'}.`
              }
            </Typography>
            {(reportsStartDate || reportsEndDate) && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Date range: {reportsStartDate ? reportsStartDate.toLocaleDateString() : 'Start date not set'} - {reportsEndDate ? reportsEndDate.toLocaleDateString() : 'End date not set'}
              </Typography>
            )}
          </Paper>
        </Container>
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
      </Menu>

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
                image={getImagePath("images/Awareness.png")}
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
              image={getImagePath("/images/Conversion.png")}
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
              
              <Box sx={{ display: 'flex', gap: '4px', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                  <Typography variant="body2" sx={{ color: 'grey', whiteSpace: 'nowrap' }}>
                    Within this
                  </Typography>
                  
                  <FormControl variant="outlined" size="small" sx={{ width: '100%', mr: '4px' }}>
                    <InputLabel>Event group</InputLabel>
                    <Select
                      label="Event group"
                      placeholder="Select"
                      size="small"
                    >
                      <MenuItem value="XDNEuttoJA">Default event group (XDNEuttoJA)</MenuItem>
                      <MenuItem value="ABCEuttoJA">Shopify connection (ABCEuttoJA)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                  <Typography variant="body2" sx={{ color: 'grey', whiteSpace: 'nowrap' }}>
                    optimize for this
                  </Typography>
                  
                  <FormControl variant="outlined" size="small" sx={{ width: '100%' }}>
                    <InputLabel>Conversion event</InputLabel>
                    <Select
                      value={selectedConversionEvent}
                      onChange={(e) => setSelectedConversionEvent(e.target.value)}
                      label="Conversion event"
                      placeholder="Select"
                      size="small"
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
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track when users visit specific pages
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="sign_ups">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PersonAddIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Sign ups</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track user registrations and account creation
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="leads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LeadsIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Leads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track form submissions and contact requests
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="downloads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DownloadIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Downloads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track file and content downloads
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="purchases">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <ShoppingCartIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Purchases</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track completed transactions and sales
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="app_installs">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PhoneAndroidIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">App installs</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track mobile app installations
                            </Typography>
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
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1, 
                            width: '100%',
                            pointerEvents: 'auto'
                          }}>
                            <SubscriptionsIcon sx={{ fontSize: 20 }} />
                            <Box>
                              <Typography variant="body2">Subscriptions</Typography>
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                Track recurring subscription signups
                              </Typography>
                            </Box>
                          </Box>
                        </Tooltip>
                      </MenuItem>
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
                src={getImagePath("images/ad-groups.png")} 
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
          <Box sx={{ p: 3, flex: 1, overflow: 'auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h2">
                {selectedCreativeType === 'in-content-video' 
                  ? 'Create In-content video creative' 
                  : `Add creatives to ${selectedAdGroupForCreatives?.campaign}`}
              </Typography>
            <IconButton size="small" onClick={handleCreativesDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          {selectedCreativeType === 'in-content-video' ? (
            // Two-column layout for In-content video
            <Box sx={{ display: 'flex', gap: 3, height: 'calc(100vh - 200px)' }}>
              {/* Column 1 - 2/3 width */}
              <Box sx={{ flex: 2, pr: 2, backgroundColor: 'grey-50', p: 2, borderRadius: 1 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  In-content Video Details
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Configure your in-content video creative settings.
                </Typography>
                {/* Add form fields or content here */}
                <Box sx={{ p: 4, border: '1px dashed #ccc', borderRadius: 1, textAlign: 'center', mb: 3, backgroundColor: 'white' }}>
                  <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                    Drag and drop or <Link href="#" onClick={(e) => e.preventDefault()} sx={{ fontWeight: 'bold' }}>Choose file</Link> to upload
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                    Upload a single file<br />
                    Format: .mov or .mp4<br />
                    File name length: 170<br />
                    Duration: 6-92 seconds<br />
                    Max file size: 1 GB
                  </Typography>
                </Box>
              </Box>
              
              {/* Column 2 - 1/3 width */}
              <Box sx={{ flex: 1, pl: 2, borderLeft: '1px solid #e0e0e0' }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Creative details
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  If your creative is in a different category than your business, change it here.
                </Typography>
                {/* Add settings content here */}
                <Box sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Settings panel - Content will go here
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            // Original tile selection layout
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Select the type of creative you want to add to this ad group.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3, justifyContent: 'center' }}>
                <TileComponent
                  image={getImagePath("images/Creatives/Creative-InContent-Video.png")}
                  title="In-content video"
                  description="In-content ads are commercials that run directly in content, they can be either simple video ads or interactive action ads."
                  onClick={() => {
                    // Handle In-content video selection
                    setSelectedCreativeType('in-content-video');
                    console.log('Selected In-content video');
                  }}
                />
                <TileComponent
                  image={getImagePath("images/Creatives/Creative-Marquee.png")}
                  title="Marquee"
                  description="This premier ad is displayed on the Roku home screen, engaging users before they start streaming."
                  onClick={() => {
                    // Handle Marquee selection
                    console.log('Selected Marquee');
                  }}
                />
                <TileComponent
                  image={getImagePath("images/Creatives/Creative-Billboard.png")}
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
            </>
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
              Upload Creative
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
                  
                  // Don't render ad group header if no creatives match the filter
                  if (creativesForAdGroup.length === 0) {
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
                      {!collapsedCampaigns.has(adGroup.campaign) && creativesForAdGroup.map((creative) => (
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
                                src={getImagePath("images/Creatives/In-content_video.mp4")}
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
                                src={getImagePath("images/Creatives/Marquee.png")}
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
                                src={getImagePath("images/Creatives/Billboard.png")}
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
                            <StatusComponent status={creative.status} />
                          </TableCell>
                          <TableCell sx={{ whiteSpace: 'nowrap' }}>{creative.type}</TableCell>
                        </TableRow>
                      ))}
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
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 100 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'status'}
                        direction={creativeGridSortConfig.key === 'status' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('status')}
                      >
                        Status
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', minWidth: 120 }}>
                      <TableSortLabel
                        active={creativeGridSortConfig.key === 'adGroupId'}
                        direction={creativeGridSortConfig.key === 'adGroupId' ? creativeGridSortConfig.direction : 'asc'}
                        onClick={() => handleCreativeGridSort('adGroupId')}
                      >
                        Ad group ID
                      </TableSortLabel>
                    </TableCell>
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
                  {/* Create sample data for sorting based on active tab */}
                  {(() => {
                    let sampleData = [];
                    
                    // Different data for each tab
                    if (creativeGridActiveTab === 0) { // Native
                      sampleData = [
                        { status: 'Active', adGroupId: 'AG001', file: 'native_banner.jpg', ctaMessage: 'Shop Now - Native Ad', startDate: '2024-11-01', endDate: '2024-12-31', daypart: 'All Day', deeplink: 'https://example.com/native', pixel: 'native_pixel.gif', rotation: 'Sequential', rotationPercent: '100%' },
                        { status: 'Draft', adGroupId: 'AG002', file: 'native_card.png', ctaMessage: 'Learn More - Native Content', startDate: '2024-11-15', endDate: '2024-12-15', daypart: 'Prime Time', deeplink: 'https://example.com/native-features', pixel: 'native_track.gif', rotation: 'Random', rotationPercent: '80%' },
                        { status: 'Paused', adGroupId: 'AG003', file: 'native_feed.jpg', ctaMessage: 'Discover Now - Native Feed', startDate: '2024-10-01', endDate: '2024-11-30', daypart: 'Morning', deeplink: 'https://example.com/native-discover', pixel: 'native_conversion.gif', rotation: 'Weighted', rotationPercent: '60%' },
                        { status: 'Active', adGroupId: 'AG004', file: 'native_story.png', ctaMessage: 'Read More - Native Story', startDate: '2024-11-01', endDate: '2025-01-31', daypart: 'Evening', deeplink: 'https://example.com/native-story', pixel: 'native_mobile.gif', rotation: 'Sequential', rotationPercent: '95%' },
                        { status: 'Ended', adGroupId: 'AG005', file: 'native_article.jpg', ctaMessage: 'View Article - Native Content', startDate: '2024-09-01', endDate: '2024-10-31', daypart: 'Weekend', deeplink: 'https://example.com/native-article', pixel: 'native_promo.gif', rotation: 'Random', rotationPercent: '40%' },
                      ];
                    } else if (creativeGridActiveTab === 1) { // In-content video
                      sampleData = [
                        { status: 'Active', adGroupId: 'VG001', file: 'video_15s_hd.mp4', ctaMessage: 'Watch Now - Product Demo', startDate: '2024-11-01', endDate: '2024-12-31', daypart: 'All Day', deeplink: 'https://example.com/video-demo', pixel: 'video_pixel.gif', rotation: 'Sequential', rotationPercent: '100%' },
                        { status: 'Draft', adGroupId: 'VG002', file: 'video_30s_story.mp4', ctaMessage: 'Play Video - Brand Story', startDate: '2024-11-15', endDate: '2024-12-15', daypart: 'Prime Time', deeplink: 'https://example.com/video-story', pixel: 'video_track.gif', rotation: 'Random', rotationPercent: '85%' },
                        { status: 'Paused', adGroupId: 'VG003', file: 'video_10s_teaser.mp4', ctaMessage: 'See Teaser - Coming Soon', startDate: '2024-10-01', endDate: '2024-11-30', daypart: 'Evening', deeplink: 'https://example.com/video-teaser', pixel: 'video_conversion.gif', rotation: 'Weighted', rotationPercent: '70%' },
                        { status: 'Active', adGroupId: 'VG004', file: 'video_20s_tutorial.mp4', ctaMessage: 'Learn How - Step by Step', startDate: '2024-11-01', endDate: '2025-01-31', daypart: 'Morning', deeplink: 'https://example.com/video-tutorial', pixel: 'video_mobile.gif', rotation: 'Sequential', rotationPercent: '90%' },
                        { status: 'Ended', adGroupId: 'VG005', file: 'video_45s_review.mp4', ctaMessage: 'Watch Review - Customer Stories', startDate: '2024-09-01', endDate: '2024-10-31', daypart: 'Weekend', deeplink: 'https://example.com/video-review', pixel: 'video_promo.gif', rotation: 'Random', rotationPercent: '55%' },
                      ];
                    } else { // Custom
                      sampleData = [
                        { status: 'Active', adGroupId: 'CG001', file: 'custom_interactive.html', ctaMessage: 'Interact Now - Dynamic Content', startDate: '2024-11-01', endDate: '2024-12-31', daypart: 'All Day', deeplink: 'https://example.com/custom-interactive', pixel: 'custom_pixel.gif', rotation: 'Sequential', rotationPercent: '100%' },
                        { status: 'Draft', adGroupId: 'CG002', file: 'custom_animation.css', ctaMessage: 'Animate - Custom Experience', startDate: '2024-11-15', endDate: '2024-12-15', daypart: 'Prime Time', deeplink: 'https://example.com/custom-animation', pixel: 'custom_track.gif', rotation: 'Random', rotationPercent: '75%' },
                        { status: 'Paused', adGroupId: 'CG003', file: 'custom_widget.js', ctaMessage: 'Try Widget - Interactive Tool', startDate: '2024-10-01', endDate: '2024-11-30', daypart: 'Evening', deeplink: 'https://example.com/custom-widget', pixel: 'custom_conversion.gif', rotation: 'Weighted', rotationPercent: '65%' },
                        { status: 'Active', adGroupId: 'CG004', file: 'custom_carousel.json', ctaMessage: 'Browse Carousel - Multi-Product', startDate: '2024-11-01', endDate: '2025-01-31', daypart: 'Morning', deeplink: 'https://example.com/custom-carousel', pixel: 'custom_mobile.gif', rotation: 'Sequential', rotationPercent: '88%' },
                        { status: 'Ended', adGroupId: 'CG005', file: 'custom_form.php', ctaMessage: 'Fill Form - Lead Generation', startDate: '2024-09-01', endDate: '2024-10-31', daypart: 'Weekend', deeplink: 'https://example.com/custom-form', pixel: 'custom_promo.gif', rotation: 'Random', rotationPercent: '45%' },
                      ];
                    }

                    // Add empty rows to reach 10 total
                    const emptyRows = Array.from({ length: 5 }, (_, index) => ({
                      status: '', adGroupId: '', file: '', ctaMessage: '', startDate: '', endDate: '', daypart: '', deeplink: '', pixel: '', rotation: '', rotationPercent: ''
                    }));
                    
                    const allData = [...sampleData, ...emptyRows];

                    // Sort data if sort is active
                    if (creativeGridSortConfig.key) {
                      allData.sort((a, b) => {
                        const aVal = a[creativeGridSortConfig.key] || '';
                        const bVal = b[creativeGridSortConfig.key] || '';
                        
                        if (creativeGridSortConfig.direction === 'asc') {
                          return aVal.localeCompare(bVal);
                        } else {
                          return bVal.localeCompare(aVal);
                        }
                      });
                    }

                    return allData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ border: '1px solid #e0e0e0', p: 0 }}>
                        <TextField
                          variant="standard"
                          size="small"
                          fullWidth
                          defaultValue={row.status}
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
                          defaultValue={row.adGroupId}
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
                          defaultValue={row.file}
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
                          defaultValue={row.ctaMessage}
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
                          defaultValue={row.startDate}
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
                          defaultValue={row.endDate}
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
                          defaultValue={row.daypart}
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
                          defaultValue={row.deeplink}
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
                          defaultValue={row.pixel}
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
                          defaultValue={row.rotation}
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
                          defaultValue={row.rotationPercent}
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
                  {selectedTimeSlots.size > 0 && (
                    <Typography variant="caption" color="text.secondary">
                      {selectedTimeSlots.size} selected day/time slot{selectedTimeSlots.size !== 1 ? 's' : ''}
                    </Typography>
                  )}
                </Box>
                {selectedTimeSlots.size > 0 && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => setSelectedTimeSlots(new Set())}
                    sx={{ fontSize: '11px', py: 0.25, px: 1, minWidth: 'auto' }}
                  >
                    Reset
                  </Button>
                )}
              </Box>
              
              {/* Selected times table */}
              {selectedTimeSlots.size > 0 && (
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
                          Array.from(selectedTimeSlots).forEach(cellKey => {
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
                console.log('Saving schedule changes:', {
                  selectedTimeSlots: Array.from(selectedTimeSlots)
                });
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
              image={getImagePath("images/Awareness.png")}
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
              image={getImagePath("images/Conversion.png")}
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
              
              <Box sx={{ display: 'flex', gap: '4px', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                  <Typography variant="body2" sx={{ color: 'grey', whiteSpace: 'nowrap' }}>
                    Within this
                  </Typography>
                  
                  <FormControl variant="outlined" size="small" sx={{ width: '100%', mr: '4px' }}>
                    <InputLabel>Event group</InputLabel>
                    <Select
                      label="Event group"
                      placeholder="Select"
                      size="small"
                    >
                      <MenuItem value="XDNEuttoJA">Default event group (XDNEuttoJA)</MenuItem>
                      <MenuItem value="ABCEuttoJA">Shopify connection (ABCEuttoJA)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                  <Typography variant="body2" sx={{ color: 'grey', whiteSpace: 'nowrap' }}>
                    optimize for this
                  </Typography>
                  
                  <FormControl variant="outlined" size="small" sx={{ width: '100%' }}>
                    <InputLabel>Conversion event</InputLabel>
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
                      label="Conversion event"
                      placeholder="Select"
                      size="small"
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
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track when users visit specific pages
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="sign_ups">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PersonAddIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Sign ups</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track user registrations and account creation
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="leads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LeadsIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Leads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track form submissions and contact requests
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="downloads">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DownloadIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Downloads</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track file downloads and resource access
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="purchases">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <ShoppingCartIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Purchases</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track completed transactions and sales
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="app_installs">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PhoneAndroidIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">App installs</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track mobile app downloads and installations
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem value="subscriptions">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <SubscriptionsIcon sx={{ fontSize: 20 }} />
                          <Box>
                            <Typography variant="body2">Subscriptions</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Track recurring subscription sign-ups
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
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
    </>
  );
}

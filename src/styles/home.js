/* ---------- Component Search Styles ---------- */
import { typographyCopyRight } from './home';

export const SearchFieldDesign = {
    width: '1200px',
    '& label.Mui-focused': {
      color: '#fc5185',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fc5185', 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fc5185',
      },
    '&:hover fieldset': {
      borderColor: '#fc5185',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fc5185',
    },
  },
}

export const SearchBtn = {
  marginLeft: '1rem',
  height: '3rem',
  width: '6rem',
}

/* ---------- Header Styles ---------- */

export const hAppBarStyles = {
  
}

export const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
}

export const typographyHeader = {
  flexGrow: 1,
}


/* ---------- Footer Styles ---------- */
export const footerStyles = {
  display: 'flex', 
  justifyContent: 'space-between',
}

export const fAppBarStyles = {
  top: 'auto',
  bottom: 0,
}

export const typographyCopyRight = {
  flexGrow: 1,
}

export const typographyLove = {
  marginRight: '1rem',
}
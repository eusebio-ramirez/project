import React, { useMemo } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useTheme } from '../../../context/ThemeContext';
import './DocumentTable.css';

export const DocumentTable = ({ documentData }) => {
  const { theme } = useTheme();

  const memoizedTable = useMemo(() => (
    <Table 
      bordered 
      className={`acordeonTabla text-center ${theme === 'dark' ? 'table-dark' : ''}`}
    >
      <tbody>
        {documentData.map((item, index) => (
          <React.Fragment key={index}>
            {item.title && !item.link && (
              <tr className="title-row">
                <td colSpan="3" className="title-cell">
                  <h3 className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-primary'}`}>
                    {item.title}
                  </h3>
                </td>
              </tr>
            )}
            {item.link && (
              <tr className="content-row">
                <td className="icon-cell">
                  {item.icon && <i className={`${item.icon} fa-2x`}></i>}
                </td>
                <td className="text-left title-cell">
                  <h3 className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-primary'}`}>
                    {item.title}
                  </h3>
                </td>
                <td className="button-cell">
                  <Button 
                    as="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={theme === 'dark' ? 'outline-light' : 'outline-primary'} 
                    size="sm"
                    className="custom-button"
                  >
                    {item.buttonText}
                  </Button>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  ), [documentData, theme]);

  return memoizedTable;
};
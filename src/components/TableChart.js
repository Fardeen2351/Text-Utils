import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TableCell, TableRow } from '@mui/material';
import Chart from './Chart';



export default function TableChart() {
    const handleSubmit=()=>{
      
        setsubmit((prevData)=>[...prevData,{subdata,finaldata}]);
        setSubData('');
        setFinalData('');

    };

    const [subdata, setSubData] = useState('');
    const [finaldata, setFinalData] = useState('');
    const [submit, setsubmit] = useState([]);
    
  return (
    <>
    

    <div className="container my-4">

    <Box
      component="form" id="myBox"
      sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
      <TextField className='getData mx-3' id="outlined-basic"  value={subdata} onChange={(e)=>setSubData(e.target.value)} label="EmpName" variant="outlined" />
      
      <TextField className='mydata mx-3' id="outlined-primary"  value={finaldata} onChange={(e)=>setFinalData(e.target.value)} label="Performance/10" variant="outlined" />
      <button className="btn btn-secondary my-3" onClick={(e)=>{e.preventDefault();
      handleSubmit(); console.log('submit data:', submit);}}>Add Emp</button>
    <div className="showItems">

    <table>
        <tbody>
            

            {submit.map((item,index)=>{
                return(
                    <TableRow key={index}>
                    <TableCell>{item.subdata}</TableCell>
                    <TableCell>{item.finaldata}</TableCell>
                </TableRow>
                )
            })}
            
        </tbody>
    </table>
            </div>
    </Box>
   
        </div>
        <br/>
        
        <Chart data={submit} />
        <br/>
        
           
            </>
  );
}

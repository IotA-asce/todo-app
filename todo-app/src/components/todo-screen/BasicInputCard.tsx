import React, { 
    Dispatch, 
    FC, 
    SetStateAction, 
    // useState 
} from 'react';
import { useFormik } from 'formik';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

type TodoObject = {
    text: string
    ScheduledTime: Date
};

interface IProps {
    setTodoList: Dispatch<SetStateAction<TodoObject[]>>;
}

const BasicInputCard: FC<IProps> = (props: IProps) => {

    const [value, setValue] = React.useState<Date | null>(null);
    const [isError, setIsError] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<string | null>("");

    const formik = useFormik({
        initialValues: {
            task: "",
            scheduledTime: new Date(),
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            if(values.task.length === 0){
                setIsError(true);
                setErrorMessage("Task cannot be empty");
            } else if ( !value || value < new Date()) {
                setIsError(true);
                setErrorMessage("please select a correct scheduled date");
            } else {
                
                // create todoObject to be added to list
                const tdObj: TodoObject = {
                    text: values.task,
                    ScheduledTime: value
                };

                // add item to list
                props.setTodoList(list => [...list, tdObj])

                // clear form
                values.task = "";
                setValue(null);
                setIsError(false);
                setErrorMessage("");
            }
        },
    });

    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: 400,
            margin: 5,
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    My tasks
                </Typography>
                <form onSubmit={formik.handleSubmit} >
                    <Typography variant="body2" sx={{ marginTop: 1, }}>
                        <TextField
                            id="standard-basic"
                            label="type in the task ... "
                            variant="standard"
                            name="task"
                            autoComplete='off'
                            onChange={formik.handleChange}
                            value={formik.values.task}
                        />
                        {/* <input type="text" id="task" name="task" onChange={formik.handleChange} value={formik.values.task}/> */}
                    </Typography>
                    <Typography variant='body2' sx={{ marginTop: 2, }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Scheduled date"
                                value={value}
                                onChange={newValue => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 2, }}>
                        <Button variant="contained" type='submit'>Add</Button>
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 2, }}>
                        {isError && <Alert severity="error">{errorMessage}</Alert>}
                    </Typography>
                </form>
            </CardContent>
        </Card>
    );
}

export default BasicInputCard;
import React from 'react';
import { Stack, TextField, Typography, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Contact = () => {


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            message: ""
        },
        validationSchema: yup.object({
            firstName: yup.string().required("First name is required"),
            lastName: yup.string().required("Last name required"),
            phone: yup.number().required("Phone number is required"),
            message: yup.string().required("Message is required")
        }),
        onSubmit: (values) => {
            console.log("Form Values ", values)
        }
    })

    return (
        <>
            <Typography variant="h3" mt={7} mb={5} sx={{ borderBottom: '1px solid black' }}>Contact Us</Typography>

            <Box component="form" onSubmit={formik.handleSubmit}>

                <Stack direction="row" sx={{ flexWrap: 'wrap', columnGap: '50px' }}>
                    <TextField
                        type="text"
                        variant='standard'
                        label='First Name'
                        sx={{ width: '350px', mb: 5 }}
                        name="firstName"
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        type="text"
                        variant='standard'
                        label='Last Name'
                        sx={{ width: '350px', mb: 5 }}
                        name="lastName"
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                    <TextField
                        type="number"
                        variant='standard'
                        label='Phone Number'
                        sx={{ width: '350px', mb: 5 }}
                        name="phone"
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Stack>

                <TextField
                    type="text"
                    variant='standard'
                    label='Messages'
                    fullWidth
                    sx={{ mb: 5 }}
                    multiline
                    minRows={1}
                    maxRows={5}
                    name="message"
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.message && formik.errors.message}
                />
                <Button variant="contained" type="submit" color="primary" sx={{ p: '7px 40px', mb: 4 }}>
                    Send
                </Button>

            </Box>
        </>
    )
}

export default Contact

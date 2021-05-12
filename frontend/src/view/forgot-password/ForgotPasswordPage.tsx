import { Fragment } from 'react';
import { Row } from 'antd'
import ForgotPasswordForm from '../../components/forms/forgot-password/ForgotPasswordForm'

const ForgotPasswordPage = ({ location }: any) => {
    return (
        <Fragment>
            <Row align="middle" justify="center" style={{ minHeight: '100vh' }}>
                <ForgotPasswordForm />
            </Row>
        </Fragment >
    )
}

export default ForgotPasswordPage

import { MetaTags, useMutation } from '@redwoodjs/web';
import { toast, Toaster } from '@redwoodjs/web/toast';
import {
	FieldError,
	Form,
	FormError,
	Label,
	Submit,
	SubmitHandler,
	TextAreaField,
	TextField,
	useForm,
} from '@redwoodjs/forms';

import { CreateContactMutation, CreateContactMutationVariables } from 'types/graphql';
import { styled, Text } from '@fluentui/react';

const CREATE_CONTACT = gql`
	mutation CreateContactMutation($input: CreateContactInput!) {
		createContact(input: $input) {
			id
		}
	}
`;

interface FormValues {
	name: string;
	email: string;
	message: string;
}

const ContactPage = () => {
	const formMethods = useForm();

	const [create, { loading, error }] = useMutation<CreateContactMutation, CreateContactMutationVariables>(CREATE_CONTACT, {
		onCompleted: () => {
			toast.success('Thank you for your submission!');
			formMethods.reset();
		},
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		create({ variables: { input: data } });
	};

	const Styles = {
		Global: `font-sans`,
		FormInputFieldError: `border-2 border-red-500 rounded width-full`,
		FormTextError: `block text-red-500 m-1`,
		FormInputField: `border-2 border-blue-700 rounded width-full`,
		FormText: `block text-inherit m-1`,
		FormButton:
			`bg-blue-700 border-2 text-white font-bold py-1 px-4 rounded my-1 ` +
			`hover:bg-white hover:border-blue-700 hover:text-blue-700`,
	};

	return (
		<>
			<main className={Styles.Global}>
				<MetaTags title='Contact' description='Contact page' />

				<Toaster />
				<Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error} formMethods={formMethods}>
					<FormError error={error} wrapperClassName={Styles.FormTextError} />

					<Label
						name='name'
						className={Styles.FormText}
						// errorClassName={Styles.FormTextError}
					>
						Name
					</Label>
					<TextField
						className={Styles.FormInputField}
						name='name'
						validation={{ required: true }}
						errorClassName={Styles.FormInputFieldError}
					/>
					<FieldError name='name' className={Styles.FormTextError} />

					<Label
						name='email'
						className={Styles.FormText}
						// errorClassName={Styles.FormTextError}
					>
						Email
					</Label>
					<TextField
						className={Styles.FormInputField}
						name='email'
						validation={{
							required: true,
							pattern: {
								value: /^[^@]+@[^.]+\..+$/,
								message: 'Please enter a valid email address',
							},
						}}
						errorClassName={Styles.FormInputFieldError}
					/>
					<FieldError name='email' className={Styles.FormTextError} />

					<Label
						name='message'
						className={Styles.FormText}
						// errorClassName={Styles.FormTextError}
					>
						Message
					</Label>
					<TextAreaField
						className={Styles.FormInputField}
						name='message'
						validation={{ required: true }}
						errorClassName={Styles.FormInputFieldError}
					/>
					<FieldError name='message' className={Styles.FormTextError} />
					<br></br>
					<Submit className={Styles.FormButton} disabled={loading}>
						Save
					</Submit>
				</Form>
			</main>
		</>
	);
};

export default ContactPage;

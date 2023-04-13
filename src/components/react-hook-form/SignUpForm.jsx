import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DevTool } from '@hookform/devtools'
import { forwardRef, useEffect, useImperativeHandle } from 'react'

const SignUpForm = forwardRef(({ onSubmit }, ref) => {
  const schema = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password and confirm password must be the same',
      path: ['confirmPassword'],
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm({ resolver: zodResolver(schema) })

  useImperativeHandle(
    ref,
    () => ({
      // eslint-disable-next-line no-shadow
      setErrors(errors) {
        Object.entries(errors).forEach(([key, value]) => setError(key, { message: value }))
      },
    }),
    [],
  )

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="firstname"> First Name:</label>
        <input type="text" id="firstname" {...register('firstName')} />
        {errors.firstName && <span>{errors.firstName.message}</span>}

        <label htmlFor="lastname"> Last Name:</label>
        <input type="text" id="lastname" {...register('lastName')} />
        {errors.lastName && <span>{errors.lastName.message}</span>}

        <label htmlFor="email"> Email:</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="age"> Age:</label>
        <input type="number" id="age" {...register('age', { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}

        <label htmlFor="password"> Password:</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor="confirm_password"> Confirm Password:</label>
        <input type="password" id="confirm_password" {...register('confirmPassword')} />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

        <input type="submit" />
      </form>
      <DevTool control={control} />
    </div>
  )
})

export default SignUpForm

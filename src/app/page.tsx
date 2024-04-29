import { DefaultForm } from '@/components/DefaultForm'
import { typeInput, specialInput } from '@/utils/planning'

const Home = () => {
	return (
		<main className='p-block-16 ds-flex flow-col-nw gap-3xl'>
			<section>
				<div className='container-sm'>
					<h1 className='text-align-center'>
						Ultimate Form Next.Js
					</h1>
				</div>
			</section>
			<section>
				<div className='container-sm'>
					<DefaultForm />
				</div>
			</section>
			<section>
				<div className='container-sm ds-flex flow-col-nw gap-lg'>
					<h3>Planning</h3>
					<div className='row align-stretch'>
						<div className='col ds-flex flow-col-nw gap-md'>
							<h4>Default input</h4>
							<ul className='ds-flex flow-col-nw gap-xs list-style-none p-0'>
								{typeInput.map((item, index) => (
									<li
										className='ds-inline-flex flow-row-nw align-center gap-xs'
										key={index}>
										<input
											type='checkbox'
											name={item.id}
											id={item.id}
											defaultChecked={item.check}
										/>
										<label htmlFor={item.id}>
											{item.label}
										</label>
									</li>
								))}
							</ul>
						</div>
						<div className='col ds-flex flow-col-nw gap-md'>
							<h4>Special input</h4>
							<ul className='ds-flex flow-col-nw gap-xs list-style-none p-0'>
								{specialInput.map((item, index) => (
									<li
										className='ds-inline-flex flow-row-nw align-center gap-xs'
										key={index}>
										<input
											type='checkbox'
											name={item.id}
											id={item.id}
											defaultChecked={item.check}
										/>
										<label htmlFor={item.id}>
											{item.label}
										</label>
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* <li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='text'
								id='text'
								defaultChecked={true}
								disabled
							/>
							<label htmlFor='text'>Text</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='email'
								id='email'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='email'>E-mail</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='password'
								id='password'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='password'>Password</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='mask'
								id='mask'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='mask'>Mask</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='select'
								id='select'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='select'>Select</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='checkbox'
								id='checkbox'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='checkbox'>Checkbox</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='radio'
								id='radio'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='radio'>Radio</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='textarea'
								id='textarea'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='textarea'>Textarea</label>
						</li>
						<li className='ds-inline-flex flow-row-nw align-center gap-xs'>
							<input
								type='checkbox'
								name='file'
								id='file'
								defaultChecked={false}
								disabled
							/>
							<label htmlFor='file'>File</label>
						</li> */}
				</div>
			</section>
		</main>
	)
}

export default Home

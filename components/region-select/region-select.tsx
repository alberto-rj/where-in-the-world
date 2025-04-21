import { forwardRef, ReactNode } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon } from 'lucide-react';

export const RegionSelect = () => {
	return (
		<Select.Root>
			<Select.Trigger
				className='
					border-none outline-none
					rounded-md
					shadow-lg 
					inline-flex items-center justify-between 
        	max-w-[12.5rem] w-full p-4 gap-2 
        	text-sm bg-neutral-100 
					ring-1 ring-neutral-2
        	focus:outline-none focus:ring-2 focus:ring-neutral-1  focus:border-neutral-1
				dark:bg-neutral-1
				dark:outline-neutral-300 
				dark:focus:ring-neutral-100
				text-neutral-300 dark:text-neutral-100 
				'
				aria-label='Region'
			>
				<Select.Value placeholder='Filter by Region' />
				<Select.Icon>
					<ChevronDownIcon
						size={16}
						className='text-neutral-300 dark:text-neutral-100'
					/>
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content
					position='popper'
					className='
						mt-1
            w-[12.5rem]
            bg-neutral-100 
            ring-1 ring-neutral-2
            rounded-md 
            shadow-lg 
            overflow-hidden
						dark:bg-neutral-1
          '
				>
					<Select.Viewport className='p-1'>
						<RegionSelectItem value='africa'>Africa</RegionSelectItem>
						<RegionSelectItem value='america'>America</RegionSelectItem>
						<RegionSelectItem value='asia'>Asia</RegionSelectItem>
						<RegionSelectItem value='europe'>Europe</RegionSelectItem>
						<RegionSelectItem value='oceania'>Oceania</RegionSelectItem>
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
};

interface RegionSelectItemProps
	extends React.ComponentPropsWithoutRef<typeof Select.Item> {
	children: ReactNode;
}

const RegionSelectItem = forwardRef<HTMLDivElement, RegionSelectItemProps>(
	({ children, ...props }, forwardedRef) => {
		return (
			<Select.Item
				{...props}
				ref={forwardedRef}
				className='
          relative 
					py-3 
					pl-8 pr-4 
          flex items-center 
          text-sm 
          rounded-md 
          select-none
					hover:bg-neutral-600 hover:text-neutral-100 
					focus:bg-neutral-600 focus:text-neutral-100 
					data-[state=checked]:bg-neutral-600 data-[state=checked]:text-neutral-100
          dark:hover:bg-neutral-200 dark:hover:text-neutral-600
          dark:focus:bg-neutral-200 dark:focus:text-neutral-600 focus:outline-none 
          dark:data-[state=checked]:bg-neutral-100 dark:data-[state=checked]:text-neutral-600
        '
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator
					className='
          absolute left-2 
          inline-flex items-center justify-center
        '
				>
					<CheckIcon
						size={16}
						className='text-neutral-100 dark:text-neutral-600'
					/>
				</Select.ItemIndicator>
			</Select.Item>
		);
	}
);

RegionSelectItem.displayName = 'RegionSelectItem';

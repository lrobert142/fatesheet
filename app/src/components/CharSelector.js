import React, { useState } from 'react'
import { FullCharsheet } from './FullCharsheet'
import { CharCard } from './CharCard'
import { Row } from '../elements/Row'
import { AllCharacterSummary } from './AllCharacterSummary'

export const CharSelector = ({characters}) => {

	const [current, setCurrent] = useState(null)

	const selectionList = characters.map( (c,i) =>
		<CharCard
			key={ i }
			character={ c }
			selected={ i===current }
			onSelect={ i===current ? ()=> setCurrent(null) : () => setCurrent(i) }
		/>
	)

	return <>
		<Row center>{selectionList}</Row>
		{ current === null ?
			<AllCharacterSummary characters={characters} />
		:
			<FullCharsheet character={characters[current]} />
		}
	</>
}
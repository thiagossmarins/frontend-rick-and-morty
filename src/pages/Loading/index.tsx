import { LoadingContainer, Image, Text } from './style'
import LoadingImage from '../../assets/img/loading.png'

export function Loading() {
  return (
    <LoadingContainer>
      <Image src={LoadingImage} />
      <Text>Loading</Text>
    </LoadingContainer>
  )
}
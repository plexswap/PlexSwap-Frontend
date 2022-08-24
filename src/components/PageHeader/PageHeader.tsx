import styled from 'styled-components'
import { Box } from '@plexswap/ui-plex'
import Container from '../Layout/Container'
import { PageHeaderProps } from './types'

const Outer = styled(Box)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradients.cloudyday};
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  position: relative;
`

const PageHeader: React.FC<React.PropsWithChildren<PageHeaderProps>> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader

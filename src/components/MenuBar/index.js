import React, { useState, useEffect } from 'react'

import { Home } from 'styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Seach } from 'styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb'
import { Grid } from 'styled-icons/boxicons-solid/Grid'
import { ThList as List } from 'styled-icons/typicons/ThList'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styles'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)

    setDisplay(window.__display)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to={'/'}
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title={'Voltar para home'}
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to={'/search'}
          title={'Pesquisar'}
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <S.MenuBarItem>
            <Seach />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar o visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar

import { IContainerThemeProps } from '../../interfaces/containerThemeProps';
import Grid from '../Grid/Grid';
import './style.css';

function ContainerTheme({ theme, title }: IContainerThemeProps) {
  return (
    <>
      <div className="container">
        <p className="container__theme">Tema - {title}</p>
        <Grid cards={theme} />
      </div>
    </>
  );
}

export default ContainerTheme;

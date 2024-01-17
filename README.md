<h1> gradient-react-component </h1>

gradient-react-component es una librería de componentes React que facilita la creación de elementos con gradientes. Incluye componentes como GradientCircle, GradientContent y GradientContain para ayudarte a diseñar interfaces de usuario atractivas con gradientes de manera sencilla.

<br/>

## Instalación

```
npm install gradient-react-component
```

o puedes usar yarn

```
yarn add gradient-react-component
```

<br/>

# Ejemplo de uso

![Alt text](https://raw.githubusercontent.com/fedeminatta/react-gradient-component/main/image.png)

```
import { GradientContain, GradientCircle, GradientContent } from 'gradient-react-component';

const MyComponent = () => (
	<GradientContain styles={{ margin: '100px', padding: '20px' }}>
		<GradientCircle
			color1="#7701cc"
			color2="#01a7cc"
			width="350px"
			height="350px"
		/>
		<GradientCircle
			color1="#eb540e"
			blur="50"
			color2="#cc0101"
			width="450px"
			height="450px"
		/>
		<GradientContent>
			<h2>Título de la sección</h2>
			<p>Texto genérico</p>
		</GradientContent>
	</GradientContain>
);
```

## Componentes

GradientCircle
El componente GradientCircle te permite crear círculos con gradientes personalizados.

```
import { GradientCircle } from 'gradient-react-component';

const MyComponent = () => (
	<GradientCircle
		color1="#7701cc"
		color2="#01a7cc"
		width="350px"
		height="350px"
	/>
);
```

| Propiedad | Descripción                           | Valor por Defecto |
| --------- | ------------------------------------- | ----------------- |
| color1    | Color del centro del círculo          | '#ED0101'         |
| color2    | Color del borde exterior del círculo  | '#CC2A01'         |
| width     | Ancho del círculo                     | '200px'           |
| height    | Altura del círculo                    | '200px'           |
| blur      | Intensidad del desenfoque del círculo | '80'              |

<br/>

## GradientContent

GradientContent se utiliza para envolver contenido dentro de un área con un fondo de gradiente.

```
import { GradientContent } from 'gradient-react-component';

const MyComponent = () => (
	<GradientContent>
		<h2>Título de la sección</h2>
		<p>Texto genérico</p>
	</GradientContent>
);
```

<br/>

## GradientContain

GradientContain es un contenedor que puede albergar varios componentes con gradientes.

```
import { GradientContain, GradientCircle, GradientContent } from 'gradient-react-component';

const MyComponent = () => (
	<GradientContain styles={{ margin: '100px', padding: '20px' }}>
		<GradientCircle
			color1="#7701cc"
			color2="#01a7cc"
			width="350px"
			height="350px"
		/>
		<GradientCircle
			color1="#eb540e"
			blur="50"
			color2="#cc0101"
			width="450px"
			height="450px"
		/>
		<GradientContent>
			<h2>Título de la sección</h2>
			<p>Texto genérico</p>
		</GradientContent>
	</GradientContain>
);
```

| Propiedad | Descripción                         | Valor por Defecto |
| --------- | ----------------------------------- | ----------------- |
| styles    | Estilos CSS aplicados al contenedor | {}                |

<br/>

## Contribuir

Si quieres contribuir a esta librería, ¡te damos la bienvenida!
<br/><br/><br/><br/>

<h1> gradient-react </h1>

[Website](https://gradient-react-web.vercel.app/)
[GIT](https://www.npmjs.com/package/gradient-react)

## English

gradient-react is a React component library that simplifies the creation of gradient elements. It includes components like GradientCircle, GradientContent, and GradientContain to help you design attractive user interfaces with gradients easily.

<br/>

## Installation

```bash
npm install gradient-react
```

or you can use yarn

```bash
yarn add gradient-react
```

<br/>

# Usage Example

![Example](https://raw.githubusercontent.com/fedeminatta/react-gradient-component/main/assets/image.png)

```jsx
import {
	GradientContain,
	GradientCircle,
	GradientContent,
} from 'gradient-react';

const MyComponent = () => (
	<GradientContain styles={{ margin: '100px', padding: '20px' }}>
		<GradientCircle
			color1='#7701cc'
			color2='#01a7cc'
			width='350px'
			height='350px'
		/>
		<GradientCircle
			color1='#eb540e'
			blur='50'
			color2='#cc0101'
			width='450px'
			height='450px'
		/>
		<GradientContent>
			<h2>Section title</h2>
			<p>Generic text</p>
		</GradientContent>
	</GradientContain>
);
```

## Components

### GradientCircle

The GradientCircle component allows you to create circles with custom gradients.

```jsx
import { GradientCircle } from 'gradient-react';

const MyComponent = () => (
	<GradientCircle
		color1='#7701cc'
		color2='#01a7cc'
		width='350px'
		height='350px'
		styles={{ left: '130px', top: '300px' }}
	/>
);
```

| Property | Description                          | Default Value |
| -------- | ------------------------------------ | ------------- |
| color1   | The color of the circle's center     | '#ED0101'     |
| color2   | The color of the circle's outer edge | '#CC2A01'     |
| width    | The width of the circle              | '200px'       |
| height   | The height of the circle             | '200px'       |
| blur     | The intensity of the circle's blur   | '80'          |
| styles   | CSS styles applied to the container  | {}            |

<br/>

## GradientContent

GradientContent is used to wrap content within an area with a gradient background.

```jsx
import { GradientContent } from 'gradient-react';

const MyComponent = () => (
	<GradientContent
		styles={{
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'center',
			justifyContent: 'center',
			width: '100%',
		}}
	>
		<h2>Section Title</h2> <p>Generic text</p>
	</GradientContent>
);
```

| Property | Description                         | Default Value |
| -------- | ----------------------------------- | ------------- |
| styles   | CSS styles applied to the container | {}            |

<br/>

## GradientContain

GradientContain is a container that can house multiple components with gradients.

```jsx
import {
	GradientContain,
	GradientCircle,
	GradientContent,
} from 'gradient-react';

const MyComponent = () => (
	<GradientContain styles={{ margin: '100px', padding: '20px' }}>
		<GradientCircle
			color1='#7701cc'
			color2='#01a7cc'
			width='350px'
			height='350px'
		/>
		<GradientCircle
			color1='#eb540e'
			blur='50'
			color2='#cc0101'
			width='450px'
			height='450px'
		/> <GradientContent>
			<h2>Section Title</h2> <p>Generic text</p>
		</GradientContent>
	</GradientContain>
);
```

| Property | Description                         | Default Value |
| -------- | ----------------------------------- | ------------- |
| styles   | CSS styles applied to the container | {}            |

<br/>

## Contributing

If you would like to contribute to this library, you're welcome!

## Spanish

gradient-react es una librería de componentes React que facilita la creación de elementos con gradientes. Incluye componentes como GradientCircle, GradientContent y GradientContain para ayudarte a diseñar interfaces de usuario atractivas con gradientes de manera sencilla.

<br/>

## Instalación

```bash
npm install gradient-react
```

o puedes usar yarn

```bash
yarn add gradient-react
```

<br/>

# Ejemplo de uso

![Example](https://raw.githubusercontent.com/fedeminatta/react-gradient-component/main/assets/image.png)

```jsx
import {
	GradientContain,
	GradientCircle,
	GradientContent,
} from 'gradient-react';

const MyComponent = () => (
	<GradientContain styles={{ margin: '100px', padding: '20px' }}>
		<GradientCircle
			color1='#7701cc'
			color2='#01a7cc'
			width='350px'
			height='350px'
		/>
		<GradientCircle
			color1='#eb540e'
			blur='50'
			color2='#cc0101'
			width='450px'
			height='450px'
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

```jsx
import { GradientCircle } from 'gradient-react';
import { GradientCircle } from 'gradient-react';

const MyComponent = () => (
	<GradientCircle
		color1='#7701cc'
		color2='#01a7cc'
		width='350px'
		height='350px'
		styles={{
			left: '130px',
			top: '300px',
		}}
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
| styles    | Estilos CSS aplicados al contenedor   | {}                |

<br/>

## GradientContent

GradientContent se utiliza para envolver contenido dentro de un área con un fondo de gradiente.

```jsx
import { GradientContent } from 'gradient-react';

const MyComponent = () => (
	<GradientContent
		styles={{
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'center',
			justifyContent: 'center',
			width: '100%',
		}}
	>
		<h2>Título de la sección</h2>
		<p>Texto genérico</p>
	</GradientContent>
);
```

| Propiedad | Descripción                         | Valor por Defecto |
| --------- | ----------------------------------- | ----------------- |
| styles    | Estilos CSS aplicados al contenedor | {}                |

<br/>

## GradientContain

GradientContain es un contenedor que puede albergar varios componentes con gradientes.

```jsx
import {
	GradientContain,
	GradientCircle,
	GradientContent,
} from 'gradient-react';

const MyComponent = () => (
	<GradientContain styles={{ margin: '100px', padding: '20px' }}>
		<GradientCircle
			color1='#7701cc'
			color2='#01a7cc'
			width='350px'
			height='350px'
		/>
		<GradientCircle
			color1='#eb540e'
			blur='50'
			color2='#cc0101'
			width='450px'
			height='450px'
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

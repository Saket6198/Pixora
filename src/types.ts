import { handlers } from '~/server/auth';
export type Color = {
    r: number;
    g: number;
    b: number;
}

export type Camera = {
    x: number;
    y: number;
    zoom: number;
}

export enum LayerType{
    Rectangle,
    Ellipse,
    Text,
    Path,
}

export type RectangleLayer = {
    type: LayerType.Rectangle,
    x: number,
    y: number,
    height: number,
    width: number,
    fill: Color,
    opacity: number,
    stroke: Color,
    cornerRadius?: number,
}


export type EllipseLayer = {
    type: LayerType.Ellipse,
    x: number,
    y: number,
    height: number,
    width: number,
    fill: Color,
    opacity: number,
    stroke: Color,
}

export type PathLayer = {
    type: LayerType.Path,
    x: number,
    y: number,
    height: number,
    width: number,
    fill: Color,
    stroke: Color,
    opacity: number,
    points: number[][],
}

export type TextLayer = {
    type: LayerType.Text,
    x: number,
    y: number,
    height: number,
    width: number,
    text: string,
    fontSize: number,
    fontWeight: number,
    fontFamily: string, 
    fill: Color,
    opacity: number,
    stroke: Color,
}

export type Layer = RectangleLayer | EllipseLayer | TextLayer | PathLayer;

export type Point = {
    x: number;
    y: number;
}


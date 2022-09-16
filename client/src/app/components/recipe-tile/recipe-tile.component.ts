import { Component, Input, OnInit } from '@angular/core';
import { ConversionHelper } from 'src/app/helpers/conversion-helper';

export enum Ingredient {
    paradicsom = "paradicsom",
    paprika = "paprika",
    vöröshagyma = "vörös hagyma",
    zöldborsó = "zöldborsó",
    liszt = "liszt",
    tej = "tej",
    cukkini = "cukkini",
    tojás = "tojás",
    fokhagyma = "fokhagyma",
    petrezselyem = "petrezselyem",
    sajt = "sajt",
    zsemlemorzsa = "zsemlemorzsa",
    olaj = "olaj",
    erőspista = "erős pista"
}

export enum QuantityType {
    db = 'db',
    tk = 'tk',
    ek = 'ek',
    g = 'g',
    ml = 'ml'
}

export interface IngredientItem {
    quantityType?: QuantityType,
    quantity?: number,
    ingredient: Ingredient
}

export interface IngredientItemRaw {
    quantityType?: string,
    quantity?: string,
    ingredient: string
}

export interface Recipe {
    title: string,
    description?: string,
    ingredients: IngredientItem[],
    href?: string
    image?:string
    vegeratian?:boolean
}

export interface RecipeRaw {
    title: string,
    description?: string,
    ingredients: IngredientItemRaw[],
    href?: string,
    image?:string
    vegeratian?:boolean
}

export interface RecipeJSON {
    recipes: RecipeRaw[]
}



@Component({
    selector: 'app-recipe-tile',
    templateUrl: './recipe-tile.component.html',
    styleUrls: ['./recipe-tile.component.scss']
})
export class RecipeTileComponent implements OnInit {

    

    @Input()
    recipesData: Recipe[] = [];
    

    constructor() {
        console.log();
    }

    ngOnInit(): void {

    }

}

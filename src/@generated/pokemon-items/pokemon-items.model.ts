import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { items } from '../items/items.model';
import { versions } from '../versions/versions.model';
import { pokemon } from '../pokemon/pokemon.model';

@ObjectType()
export class pokemon_items {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => items, {nullable:false})
    items?: items;

    @Field(() => versions, {nullable:false})
    versions?: versions;

    @Field(() => pokemon, {nullable:false})
    pokemon?: pokemon;
}

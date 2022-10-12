import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_colorsCount {

    @Field(() => Int, {nullable:false})
    pokemon_color_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species!: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokemon_colors } from '../pokemon-colors/pokemon-colors.model';

@ObjectType()
export class pokemon_color_names {

    @Field(() => Int, {nullable:false})
    pokemon_color_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokemon_colors, {nullable:false})
    pokemon_colors?: pokemon_colors;
}

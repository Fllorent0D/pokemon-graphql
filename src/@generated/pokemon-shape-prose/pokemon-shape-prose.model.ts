import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokemon_shapes } from '../pokemon-shapes/pokemon-shapes.model';

@ObjectType()
export class pokemon_shape_prose {

    @Field(() => Int, {nullable:false})
    pokemon_shape_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    awesome_name!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokemon_shapes, {nullable:false})
    pokemon_shapes?: pokemon_shapes;
}

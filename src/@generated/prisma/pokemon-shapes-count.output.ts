import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_shapesCount {

    @Field(() => Int, {nullable:false})
    pokemon_shape_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species!: number;
}

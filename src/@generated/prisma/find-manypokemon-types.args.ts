import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesWhereInput } from '../pokemon-types/pokemon-types-where.input';
import { Type } from 'class-transformer';
import { pokemon_typesOrderByWithRelationInput } from '../pokemon-types/pokemon-types-order-by-with-relation.input';
import { pokemon_typesWhereUniqueInput } from '../pokemon-types/pokemon-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_typesScalarFieldEnum } from './pokemon-types-scalar-field.enum';

@ArgsType()
export class FindManypokemonTypesArgs {

    @Field(() => pokemon_typesWhereInput, {nullable:true})
    @Type(() => pokemon_typesWhereInput)
    where?: pokemon_typesWhereInput;

    @Field(() => [pokemon_typesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_typesOrderByWithRelationInput>;

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_typesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_typesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_typesScalarFieldEnum>;
}

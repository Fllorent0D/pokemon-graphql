import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsWhereInput } from '../pokemon-forms/pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { pokemon_formsOrderByWithRelationInput } from '../pokemon-forms/pokemon-forms-order-by-with-relation.input';
import { pokemon_formsWhereUniqueInput } from '../pokemon-forms/pokemon-forms-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_formsScalarFieldEnum } from './pokemon-forms-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonFormsArgs {

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    @Type(() => pokemon_formsWhereInput)
    where?: pokemon_formsWhereInput;

    @Field(() => [pokemon_formsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_formsOrderByWithRelationInput>;

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_formsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_formsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_formsScalarFieldEnum>;
}

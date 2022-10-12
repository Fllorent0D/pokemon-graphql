import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_speciesWhereInput } from '../pokemon-species/pokemon-species-where.input';
import { Type } from 'class-transformer';
import { pokemon_speciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';
import { pokemon_speciesWhereUniqueInput } from '../pokemon-species/pokemon-species-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_speciesScalarFieldEnum } from './pokemon-species-scalar-field.enum';

@ArgsType()
export class FindManypokemonSpeciesArgs {

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    @Type(() => pokemon_speciesWhereInput)
    where?: pokemon_speciesWhereInput;

    @Field(() => [pokemon_speciesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_speciesOrderByWithRelationInput>;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_speciesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_speciesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_speciesScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereInput } from '../pokemon-abilities/pokemon-abilities-where.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesOrderByWithRelationInput } from '../pokemon-abilities/pokemon-abilities-order-by-with-relation.input';
import { pokemon_abilitiesWhereUniqueInput } from '../pokemon-abilities/pokemon-abilities-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_abilitiesScalarFieldEnum } from './pokemon-abilities-scalar-field.enum';

@ArgsType()
export class FindManypokemonAbilitiesArgs {

    @Field(() => pokemon_abilitiesWhereInput, {nullable:true})
    @Type(() => pokemon_abilitiesWhereInput)
    where?: pokemon_abilitiesWhereInput;

    @Field(() => [pokemon_abilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_abilitiesOrderByWithRelationInput>;

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_abilitiesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_abilitiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_abilitiesScalarFieldEnum>;
}

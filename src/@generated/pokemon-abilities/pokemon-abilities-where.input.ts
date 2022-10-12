import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AbilitiesRelationFilter } from '../prisma/abilities-relation-filter.input';
import { PokemonRelationFilter } from '../prisma/pokemon-relation-filter.input';

@InputType()
export class pokemon_abilitiesWhereInput {

    @Field(() => [pokemon_abilitiesWhereInput], {nullable:true})
    AND?: Array<pokemon_abilitiesWhereInput>;

    @Field(() => [pokemon_abilitiesWhereInput], {nullable:true})
    OR?: Array<pokemon_abilitiesWhereInput>;

    @Field(() => [pokemon_abilitiesWhereInput], {nullable:true})
    NOT?: Array<pokemon_abilitiesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_dream?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;

    @Field(() => AbilitiesRelationFilter, {nullable:true})
    abilities?: AbilitiesRelationFilter;

    @Field(() => PokemonRelationFilter, {nullable:true})
    pokemon?: PokemonRelationFilter;
}

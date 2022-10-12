import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';
import { EncountersListRelationFilter } from '../prisma/encounters-list-relation-filter.input';
import { Pokemon_abilitiesListRelationFilter } from '../prisma/pokemon-abilities-list-relation-filter.input';
import { Pokemon_formsListRelationFilter } from '../prisma/pokemon-forms-list-relation-filter.input';
import { Pokemon_game_indicesListRelationFilter } from '../prisma/pokemon-game-indices-list-relation-filter.input';
import { Pokemon_itemsListRelationFilter } from '../prisma/pokemon-items-list-relation-filter.input';
import { Pokemon_statsListRelationFilter } from '../prisma/pokemon-stats-list-relation-filter.input';
import { Pokemon_typesListRelationFilter } from '../prisma/pokemon-types-list-relation-filter.input';

@InputType()
export class pokemonWhereInput {

    @Field(() => [pokemonWhereInput], {nullable:true})
    AND?: Array<pokemonWhereInput>;

    @Field(() => [pokemonWhereInput], {nullable:true})
    OR?: Array<pokemonWhereInput>;

    @Field(() => [pokemonWhereInput], {nullable:true})
    NOT?: Array<pokemonWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    species_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    height?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    weight?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_experience?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_default?: BoolFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;

    @Field(() => Pokemon_abilitiesListRelationFilter, {nullable:true})
    pokemon_abilities?: Pokemon_abilitiesListRelationFilter;

    @Field(() => Pokemon_formsListRelationFilter, {nullable:true})
    pokemon_forms?: Pokemon_formsListRelationFilter;

    @Field(() => Pokemon_game_indicesListRelationFilter, {nullable:true})
    pokemon_game_indices?: Pokemon_game_indicesListRelationFilter;

    @Field(() => Pokemon_itemsListRelationFilter, {nullable:true})
    pokemon_items?: Pokemon_itemsListRelationFilter;

    @Field(() => Pokemon_statsListRelationFilter, {nullable:true})
    pokemon_stats?: Pokemon_statsListRelationFilter;

    @Field(() => Pokemon_typesListRelationFilter, {nullable:true})
    pokemon_types?: Pokemon_typesListRelationFilter;
}

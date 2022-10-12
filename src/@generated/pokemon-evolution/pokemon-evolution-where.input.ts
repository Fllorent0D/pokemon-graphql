import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';
import { LocationsRelationFilter } from '../prisma/locations-relation-filter.input';
import { Evolution_triggersRelationFilter } from '../prisma/evolution-triggers-relation-filter.input';

@InputType()
export class pokemon_evolutionWhereInput {

    @Field(() => [pokemon_evolutionWhereInput], {nullable:true})
    AND?: Array<pokemon_evolutionWhereInput>;

    @Field(() => [pokemon_evolutionWhereInput], {nullable:true})
    OR?: Array<pokemon_evolutionWhereInput>;

    @Field(() => [pokemon_evolutionWhereInput], {nullable:true})
    NOT?: Array<pokemon_evolutionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolved_species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trigger_item_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_level?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gender?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    location_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    held_item_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    time_of_day?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    known_move_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_happiness?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_beauty?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    relative_physical_stats?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    party_species_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trade_species_id?: IntNullableFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species_pokemon_evolution_trade_species_idTopokemon_species?: Pokemon_speciesRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species_pokemon_evolution_party_species_idTopokemon_species?: Pokemon_speciesRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves?: MovesRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items_itemsTopokemon_evolution_held_item_id?: ItemsRelationFilter;

    @Field(() => LocationsRelationFilter, {nullable:true})
    locations?: LocationsRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items_itemsTopokemon_evolution_trigger_item_id?: ItemsRelationFilter;

    @Field(() => Evolution_triggersRelationFilter, {nullable:true})
    evolution_triggers?: Evolution_triggersRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species_pokemon_evolution_evolved_species_idTopokemon_species?: Pokemon_speciesRelationFilter;
}

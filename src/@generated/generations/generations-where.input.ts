import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokedexesRelationFilter } from '../prisma/pokedexes-relation-filter.input';
import { RegionsRelationFilter } from '../prisma/regions-relation-filter.input';
import { AbilitiesListRelationFilter } from '../prisma/abilities-list-relation-filter.input';
import { Generation_namesListRelationFilter } from '../prisma/generation-names-list-relation-filter.input';
import { Item_game_indicesListRelationFilter } from '../prisma/item-game-indices-list-relation-filter.input';
import { Location_game_indicesListRelationFilter } from '../prisma/location-game-indices-list-relation-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';
import { Pokemon_game_indicesListRelationFilter } from '../prisma/pokemon-game-indices-list-relation-filter.input';
import { Pokemon_speciesListRelationFilter } from '../prisma/pokemon-species-list-relation-filter.input';
import { TypesListRelationFilter } from '../prisma/types-list-relation-filter.input';
import { Version_groupsListRelationFilter } from '../prisma/version-groups-list-relation-filter.input';

@InputType()
export class generationsWhereInput {

    @Field(() => [generationsWhereInput], {nullable:true})
    AND?: Array<generationsWhereInput>;

    @Field(() => [generationsWhereInput], {nullable:true})
    OR?: Array<generationsWhereInput>;

    @Field(() => [generationsWhereInput], {nullable:true})
    NOT?: Array<generationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    main_region_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    canonical_pokedex_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokedexesRelationFilter, {nullable:true})
    pokedexes?: PokedexesRelationFilter;

    @Field(() => RegionsRelationFilter, {nullable:true})
    regions?: RegionsRelationFilter;

    @Field(() => AbilitiesListRelationFilter, {nullable:true})
    abilities?: AbilitiesListRelationFilter;

    @Field(() => Generation_namesListRelationFilter, {nullable:true})
    generation_names?: Generation_namesListRelationFilter;

    @Field(() => Item_game_indicesListRelationFilter, {nullable:true})
    item_game_indices?: Item_game_indicesListRelationFilter;

    @Field(() => Location_game_indicesListRelationFilter, {nullable:true})
    location_game_indices?: Location_game_indicesListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => Pokemon_game_indicesListRelationFilter, {nullable:true})
    pokemon_game_indices?: Pokemon_game_indicesListRelationFilter;

    @Field(() => Pokemon_speciesListRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesListRelationFilter;

    @Field(() => TypesListRelationFilter, {nullable:true})
    types?: TypesListRelationFilter;

    @Field(() => Version_groupsListRelationFilter, {nullable:true})
    version_groups?: Version_groupsListRelationFilter;
}

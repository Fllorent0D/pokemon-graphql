import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokedexes } from '../pokedexes/pokedexes.model';
import { generations } from '../generations/generations.model';
import { ability_changelog } from '../ability-changelog/ability-changelog.model';
import { ability_flavor_text } from '../ability-flavor-text/ability-flavor-text.model';
import { encounter_slots } from '../encounter-slots/encounter-slots.model';
import { item_flavor_text } from '../item-flavor-text/item-flavor-text.model';
import { machines } from '../machines/machines.model';
import { move_changelog } from '../move-changelog/move-changelog.model';
import { move_effect_changelog } from '../move-effect-changelog/move-effect-changelog.model';
import { move_flavor_text } from '../move-flavor-text/move-flavor-text.model';
import { pokemon_forms } from '../pokemon-forms/pokemon-forms.model';
import { version_group_regions } from '../version-group-regions/version-group-regions.model';
import { versions } from '../versions/versions.model';
import { Version_groupsCount } from '../prisma/version-groups-count.output';

@ObjectType()
export class version_groups {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => pokedexes, {nullable:false})
    pokedexes?: pokedexes;

    @Field(() => generations, {nullable:false})
    generations?: generations;

    @Field(() => [ability_changelog], {nullable:true})
    ability_changelog?: Array<ability_changelog>;

    @Field(() => [ability_flavor_text], {nullable:true})
    ability_flavor_text?: Array<ability_flavor_text>;

    @Field(() => [encounter_slots], {nullable:true})
    encounter_slots?: Array<encounter_slots>;

    @Field(() => [item_flavor_text], {nullable:true})
    item_flavor_text?: Array<item_flavor_text>;

    @Field(() => [machines], {nullable:true})
    machines?: Array<machines>;

    @Field(() => [move_changelog], {nullable:true})
    move_changelog?: Array<move_changelog>;

    @Field(() => [move_effect_changelog], {nullable:true})
    move_effect_changelog?: Array<move_effect_changelog>;

    @Field(() => [move_flavor_text], {nullable:true})
    move_flavor_text?: Array<move_flavor_text>;

    @Field(() => [pokemon_forms], {nullable:true})
    pokemon_forms?: Array<pokemon_forms>;

    @Field(() => [version_group_regions], {nullable:true})
    version_group_regions?: Array<version_group_regions>;

    @Field(() => [versions], {nullable:true})
    versions?: Array<versions>;

    @Field(() => Version_groupsCount, {nullable:false})
    _count?: Version_groupsCount;
}

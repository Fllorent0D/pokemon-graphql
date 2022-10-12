import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokedexesRelationFilter } from '../prisma/pokedexes-relation-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { Ability_changelogListRelationFilter } from '../prisma/ability-changelog-list-relation-filter.input';
import { Ability_flavor_textListRelationFilter } from '../prisma/ability-flavor-text-list-relation-filter.input';
import { Encounter_slotsListRelationFilter } from '../prisma/encounter-slots-list-relation-filter.input';
import { Item_flavor_textListRelationFilter } from '../prisma/item-flavor-text-list-relation-filter.input';
import { MachinesListRelationFilter } from '../prisma/machines-list-relation-filter.input';
import { Move_changelogListRelationFilter } from '../prisma/move-changelog-list-relation-filter.input';
import { Move_effect_changelogListRelationFilter } from '../prisma/move-effect-changelog-list-relation-filter.input';
import { Move_flavor_textListRelationFilter } from '../prisma/move-flavor-text-list-relation-filter.input';
import { Pokemon_formsListRelationFilter } from '../prisma/pokemon-forms-list-relation-filter.input';
import { Version_group_regionsListRelationFilter } from '../prisma/version-group-regions-list-relation-filter.input';
import { VersionsListRelationFilter } from '../prisma/versions-list-relation-filter.input';

@InputType()
export class version_groupsWhereInput {

    @Field(() => [version_groupsWhereInput], {nullable:true})
    AND?: Array<version_groupsWhereInput>;

    @Field(() => [version_groupsWhereInput], {nullable:true})
    OR?: Array<version_groupsWhereInput>;

    @Field(() => [version_groupsWhereInput], {nullable:true})
    NOT?: Array<version_groupsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => PokedexesRelationFilter, {nullable:true})
    pokedexes?: PokedexesRelationFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => Ability_changelogListRelationFilter, {nullable:true})
    ability_changelog?: Ability_changelogListRelationFilter;

    @Field(() => Ability_flavor_textListRelationFilter, {nullable:true})
    ability_flavor_text?: Ability_flavor_textListRelationFilter;

    @Field(() => Encounter_slotsListRelationFilter, {nullable:true})
    encounter_slots?: Encounter_slotsListRelationFilter;

    @Field(() => Item_flavor_textListRelationFilter, {nullable:true})
    item_flavor_text?: Item_flavor_textListRelationFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @Field(() => Move_changelogListRelationFilter, {nullable:true})
    move_changelog?: Move_changelogListRelationFilter;

    @Field(() => Move_effect_changelogListRelationFilter, {nullable:true})
    move_effect_changelog?: Move_effect_changelogListRelationFilter;

    @Field(() => Move_flavor_textListRelationFilter, {nullable:true})
    move_flavor_text?: Move_flavor_textListRelationFilter;

    @Field(() => Pokemon_formsListRelationFilter, {nullable:true})
    pokemon_forms?: Pokemon_formsListRelationFilter;

    @Field(() => Version_group_regionsListRelationFilter, {nullable:true})
    version_group_regions?: Version_group_regionsListRelationFilter;

    @Field(() => VersionsListRelationFilter, {nullable:true})
    versions?: VersionsListRelationFilter;
}

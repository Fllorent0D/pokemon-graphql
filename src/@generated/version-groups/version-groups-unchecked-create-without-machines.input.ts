import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ability_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../ability-changelog/ability-changelog-unchecked-create-nested-many-without-version-groups.input';
import { ability_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../ability-flavor-text/ability-flavor-text-unchecked-create-nested-many-without-version-groups.input';
import { encounter_slotsUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../encounter-slots/encounter-slots-unchecked-create-nested-many-without-version-groups.input';
import { item_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../item-flavor-text/item-flavor-text-unchecked-create-nested-many-without-version-groups.input';
import { move_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../move-changelog/move-changelog-unchecked-create-nested-many-without-version-groups.input';
import { move_effect_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../move-effect-changelog/move-effect-changelog-unchecked-create-nested-many-without-version-groups.input';
import { move_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../move-flavor-text/move-flavor-text-unchecked-create-nested-many-without-version-groups.input';
import { pokemon_formsUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../pokemon-forms/pokemon-forms-unchecked-create-nested-many-without-version-groups.input';
import { version_group_regionsUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../version-group-regions/version-group-regions-unchecked-create-nested-many-without-version-groups.input';
import { versionsUncheckedCreateNestedManyWithoutVersion_groupsInput } from '../versions/versions-unchecked-create-nested-many-without-version-groups.input';

@InputType()
export class version_groupsUncheckedCreateWithoutMachinesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => ability_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    ability_changelog?: ability_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => ability_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => encounter_slotsUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    encounter_slots?: encounter_slotsUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => item_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    item_flavor_text?: item_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => move_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    move_changelog?: move_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => move_effect_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => move_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    move_flavor_text?: move_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => pokemon_formsUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    pokemon_forms?: pokemon_formsUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => version_group_regionsUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    version_group_regions?: version_group_regionsUncheckedCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => versionsUncheckedCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    versions?: versionsUncheckedCreateNestedManyWithoutVersion_groupsInput;
}

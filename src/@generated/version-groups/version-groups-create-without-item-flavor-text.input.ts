import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateNestedOneWithoutVersion_groupsInput } from '../pokedexes/pokedexes-create-nested-one-without-version-groups.input';
import { generationsCreateNestedOneWithoutVersion_groupsInput } from '../generations/generations-create-nested-one-without-version-groups.input';
import { ability_changelogCreateNestedManyWithoutVersion_groupsInput } from '../ability-changelog/ability-changelog-create-nested-many-without-version-groups.input';
import { ability_flavor_textCreateNestedManyWithoutVersion_groupsInput } from '../ability-flavor-text/ability-flavor-text-create-nested-many-without-version-groups.input';
import { encounter_slotsCreateNestedManyWithoutVersion_groupsInput } from '../encounter-slots/encounter-slots-create-nested-many-without-version-groups.input';
import { machinesCreateNestedManyWithoutVersion_groupsInput } from '../machines/machines-create-nested-many-without-version-groups.input';
import { move_changelogCreateNestedManyWithoutVersion_groupsInput } from '../move-changelog/move-changelog-create-nested-many-without-version-groups.input';
import { move_effect_changelogCreateNestedManyWithoutVersion_groupsInput } from '../move-effect-changelog/move-effect-changelog-create-nested-many-without-version-groups.input';
import { move_flavor_textCreateNestedManyWithoutVersion_groupsInput } from '../move-flavor-text/move-flavor-text-create-nested-many-without-version-groups.input';
import { pokemon_formsCreateNestedManyWithoutVersion_groupsInput } from '../pokemon-forms/pokemon-forms-create-nested-many-without-version-groups.input';
import { version_group_regionsCreateNestedManyWithoutVersion_groupsInput } from '../version-group-regions/version-group-regions-create-nested-many-without-version-groups.input';
import { versionsCreateNestedManyWithoutVersion_groupsInput } from '../versions/versions-create-nested-many-without-version-groups.input';

@InputType()
export class version_groupsCreateWithoutItem_flavor_textInput {

    @Field(() => pokedexesCreateNestedOneWithoutVersion_groupsInput, {nullable:false})
    pokedexes!: pokedexesCreateNestedOneWithoutVersion_groupsInput;

    @Field(() => generationsCreateNestedOneWithoutVersion_groupsInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutVersion_groupsInput;

    @Field(() => ability_changelogCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    ability_changelog?: ability_changelogCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => ability_flavor_textCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => encounter_slotsCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    encounter_slots?: encounter_slotsCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => machinesCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    machines?: machinesCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => move_changelogCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    move_changelog?: move_changelogCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => move_effect_changelogCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => move_flavor_textCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    move_flavor_text?: move_flavor_textCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => pokemon_formsCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    pokemon_forms?: pokemon_formsCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => version_group_regionsCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    version_group_regions?: version_group_regionsCreateNestedManyWithoutVersion_groupsInput;

    @Field(() => versionsCreateNestedManyWithoutVersion_groupsInput, {nullable:true})
    versions?: versionsCreateNestedManyWithoutVersion_groupsInput;
}

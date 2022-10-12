import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesUpdateOneRequiredWithoutVersion_groupsNestedInput } from '../pokedexes/pokedexes-update-one-required-without-version-groups-nested.input';
import { generationsUpdateOneRequiredWithoutVersion_groupsNestedInput } from '../generations/generations-update-one-required-without-version-groups-nested.input';
import { ability_changelogUpdateManyWithoutVersion_groupsNestedInput } from '../ability-changelog/ability-changelog-update-many-without-version-groups-nested.input';
import { ability_flavor_textUpdateManyWithoutVersion_groupsNestedInput } from '../ability-flavor-text/ability-flavor-text-update-many-without-version-groups-nested.input';
import { encounter_slotsUpdateManyWithoutVersion_groupsNestedInput } from '../encounter-slots/encounter-slots-update-many-without-version-groups-nested.input';
import { item_flavor_textUpdateManyWithoutVersion_groupsNestedInput } from '../item-flavor-text/item-flavor-text-update-many-without-version-groups-nested.input';
import { machinesUpdateManyWithoutVersion_groupsNestedInput } from '../machines/machines-update-many-without-version-groups-nested.input';
import { move_changelogUpdateManyWithoutVersion_groupsNestedInput } from '../move-changelog/move-changelog-update-many-without-version-groups-nested.input';
import { move_effect_changelogUpdateManyWithoutVersion_groupsNestedInput } from '../move-effect-changelog/move-effect-changelog-update-many-without-version-groups-nested.input';
import { move_flavor_textUpdateManyWithoutVersion_groupsNestedInput } from '../move-flavor-text/move-flavor-text-update-many-without-version-groups-nested.input';
import { version_group_regionsUpdateManyWithoutVersion_groupsNestedInput } from '../version-group-regions/version-group-regions-update-many-without-version-groups-nested.input';
import { versionsUpdateManyWithoutVersion_groupsNestedInput } from '../versions/versions-update-many-without-version-groups-nested.input';

@InputType()
export class version_groupsUpdateWithoutPokemon_formsInput {

    @Field(() => pokedexesUpdateOneRequiredWithoutVersion_groupsNestedInput, {nullable:true})
    pokedexes?: pokedexesUpdateOneRequiredWithoutVersion_groupsNestedInput;

    @Field(() => generationsUpdateOneRequiredWithoutVersion_groupsNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutVersion_groupsNestedInput;

    @Field(() => ability_changelogUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    ability_changelog?: ability_changelogUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => ability_flavor_textUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => encounter_slotsUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    encounter_slots?: encounter_slotsUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => item_flavor_textUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    item_flavor_text?: item_flavor_textUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => machinesUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    machines?: machinesUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => move_changelogUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    move_changelog?: move_changelogUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => move_effect_changelogUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => move_flavor_textUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    move_flavor_text?: move_flavor_textUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => version_group_regionsUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    version_group_regions?: version_group_regionsUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => versionsUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    versions?: versionsUpdateManyWithoutVersion_groupsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ability_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../ability-changelog/ability-changelog-unchecked-update-many-without-version-groups-nested.input';
import { ability_flavor_textUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../ability-flavor-text/ability-flavor-text-unchecked-update-many-without-version-groups-nested.input';
import { encounter_slotsUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-version-groups-nested.input';
import { item_flavor_textUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../item-flavor-text/item-flavor-text-unchecked-update-many-without-version-groups-nested.input';
import { machinesUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../machines/machines-unchecked-update-many-without-version-groups-nested.input';
import { move_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../move-changelog/move-changelog-unchecked-update-many-without-version-groups-nested.input';
import { move_effect_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../move-effect-changelog/move-effect-changelog-unchecked-update-many-without-version-groups-nested.input';
import { pokemon_formsUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../pokemon-forms/pokemon-forms-unchecked-update-many-without-version-groups-nested.input';
import { version_group_regionsUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-version-groups-nested.input';
import { versionsUncheckedUpdateManyWithoutVersion_groupsNestedInput } from '../versions/versions-unchecked-update-many-without-version-groups-nested.input';

@InputType()
export class version_groupsUncheckedUpdateWithoutMove_flavor_textInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_id?: IntFieldUpdateOperationsInput;

    @Field(() => ability_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    ability_changelog?: ability_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => ability_flavor_textUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => encounter_slotsUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    encounter_slots?: encounter_slotsUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => item_flavor_textUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    item_flavor_text?: item_flavor_textUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => machinesUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    machines?: machinesUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => move_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    move_changelog?: move_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => move_effect_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => pokemon_formsUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    pokemon_forms?: pokemon_formsUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => version_group_regionsUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    version_group_regions?: version_group_regionsUncheckedUpdateManyWithoutVersion_groupsNestedInput;

    @Field(() => versionsUncheckedUpdateManyWithoutVersion_groupsNestedInput, {nullable:true})
    versions?: versionsUncheckedUpdateManyWithoutVersion_groupsNestedInput;
}

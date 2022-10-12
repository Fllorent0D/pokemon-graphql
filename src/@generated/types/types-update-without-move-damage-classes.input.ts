import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { generationsUpdateOneRequiredWithoutTypesNestedInput } from '../generations/generations-update-one-required-without-types-nested.input';
import { berriesUpdateManyWithoutTypesNestedInput } from '../berries/berries-update-many-without-types-nested.input';
import { move_changelogUpdateManyWithoutTypesNestedInput } from '../move-changelog/move-changelog-update-many-without-types-nested.input';
import { movesUpdateManyWithoutTypesNestedInput } from '../moves/moves-update-many-without-types-nested.input';
import { pokemon_typesUpdateManyWithoutTypesNestedInput } from '../pokemon-types/pokemon-types-update-many-without-types-nested.input';
import { type_efficacyUpdateManyWithoutTypes_type_efficacy_target_type_idTotypesNestedInput } from '../type-efficacy/type-efficacy-update-many-without-types-type-efficacy-target-type-id-totypes-nested.input';
import { type_efficacyUpdateManyWithoutTypes_type_efficacy_damage_type_idTotypesNestedInput } from '../type-efficacy/type-efficacy-update-many-without-types-type-efficacy-damage-type-id-totypes-nested.input';
import { type_namesUpdateManyWithoutTypesNestedInput } from '../type-names/type-names-update-many-without-types-nested.input';

@InputType()
export class typesUpdateWithoutMove_damage_classesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => generationsUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutTypesNestedInput;

    @Field(() => berriesUpdateManyWithoutTypesNestedInput, {nullable:true})
    berries?: berriesUpdateManyWithoutTypesNestedInput;

    @Field(() => move_changelogUpdateManyWithoutTypesNestedInput, {nullable:true})
    move_changelog?: move_changelogUpdateManyWithoutTypesNestedInput;

    @Field(() => movesUpdateManyWithoutTypesNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutTypesNestedInput;

    @Field(() => pokemon_typesUpdateManyWithoutTypesNestedInput, {nullable:true})
    pokemon_types?: pokemon_typesUpdateManyWithoutTypesNestedInput;

    @Field(() => type_efficacyUpdateManyWithoutTypes_type_efficacy_target_type_idTotypesNestedInput, {nullable:true})
    type_efficacy_type_efficacy_target_type_idTotypes?: type_efficacyUpdateManyWithoutTypes_type_efficacy_target_type_idTotypesNestedInput;

    @Field(() => type_efficacyUpdateManyWithoutTypes_type_efficacy_damage_type_idTotypesNestedInput, {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: type_efficacyUpdateManyWithoutTypes_type_efficacy_damage_type_idTotypesNestedInput;

    @Field(() => type_namesUpdateManyWithoutTypesNestedInput, {nullable:true})
    type_names?: type_namesUpdateManyWithoutTypesNestedInput;
}

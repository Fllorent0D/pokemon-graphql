import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { berriesUncheckedUpdateManyWithoutTypesNestedInput } from '../berries/berries-unchecked-update-many-without-types-nested.input';
import { move_changelogUncheckedUpdateManyWithoutTypesNestedInput } from '../move-changelog/move-changelog-unchecked-update-many-without-types-nested.input';
import { movesUncheckedUpdateManyWithoutTypesNestedInput } from '../moves/moves-unchecked-update-many-without-types-nested.input';
import { pokemon_typesUncheckedUpdateManyWithoutTypesNestedInput } from '../pokemon-types/pokemon-types-unchecked-update-many-without-types-nested.input';
import { type_efficacyUncheckedUpdateManyWithoutTypes_type_efficacy_damage_type_idTotypesNestedInput } from '../type-efficacy/type-efficacy-unchecked-update-many-without-types-type-efficacy-damage-type-id-totypes-nested.input';
import { type_namesUncheckedUpdateManyWithoutTypesNestedInput } from '../type-names/type-names-unchecked-update-many-without-types-nested.input';

@InputType()
export class typesUncheckedUpdateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    damage_class_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => berriesUncheckedUpdateManyWithoutTypesNestedInput, {nullable:true})
    berries?: berriesUncheckedUpdateManyWithoutTypesNestedInput;

    @Field(() => move_changelogUncheckedUpdateManyWithoutTypesNestedInput, {nullable:true})
    move_changelog?: move_changelogUncheckedUpdateManyWithoutTypesNestedInput;

    @Field(() => movesUncheckedUpdateManyWithoutTypesNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutTypesNestedInput;

    @Field(() => pokemon_typesUncheckedUpdateManyWithoutTypesNestedInput, {nullable:true})
    pokemon_types?: pokemon_typesUncheckedUpdateManyWithoutTypesNestedInput;

    @Field(() => type_efficacyUncheckedUpdateManyWithoutTypes_type_efficacy_damage_type_idTotypesNestedInput, {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: type_efficacyUncheckedUpdateManyWithoutTypes_type_efficacy_damage_type_idTotypesNestedInput;

    @Field(() => type_namesUncheckedUpdateManyWithoutTypesNestedInput, {nullable:true})
    type_names?: type_namesUncheckedUpdateManyWithoutTypesNestedInput;
}

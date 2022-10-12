import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berriesUncheckedCreateNestedManyWithoutTypesInput } from '../berries/berries-unchecked-create-nested-many-without-types.input';
import { move_changelogUncheckedCreateNestedManyWithoutTypesInput } from '../move-changelog/move-changelog-unchecked-create-nested-many-without-types.input';
import { movesUncheckedCreateNestedManyWithoutTypesInput } from '../moves/moves-unchecked-create-nested-many-without-types.input';
import { type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput } from '../type-efficacy/type-efficacy-unchecked-create-nested-many-without-types-type-efficacy-target-type-id-totypes.input';
import { type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput } from '../type-efficacy/type-efficacy-unchecked-create-nested-many-without-types-type-efficacy-damage-type-id-totypes.input';
import { type_namesUncheckedCreateNestedManyWithoutTypesInput } from '../type-names/type-names-unchecked-create-nested-many-without-types.input';

@InputType()
export class typesUncheckedCreateWithoutPokemon_typesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => berriesUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    berries?: berriesUncheckedCreateNestedManyWithoutTypesInput;

    @Field(() => move_changelogUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    move_changelog?: move_changelogUncheckedCreateNestedManyWithoutTypesInput;

    @Field(() => movesUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    moves?: movesUncheckedCreateNestedManyWithoutTypesInput;

    @Field(() => type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput, {nullable:true})
    type_efficacy_type_efficacy_target_type_idTotypes?: type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput;

    @Field(() => type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput, {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput;

    @Field(() => type_namesUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    type_names?: type_namesUncheckedCreateNestedManyWithoutTypesInput;
}

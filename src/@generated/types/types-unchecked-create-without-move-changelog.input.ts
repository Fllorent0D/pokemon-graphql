import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berriesUncheckedCreateNestedManyWithoutTypesInput } from '../berries/berries-unchecked-create-nested-many-without-types.input';
import { movesUncheckedCreateNestedManyWithoutTypesInput } from '../moves/moves-unchecked-create-nested-many-without-types.input';
import { pokemon_typesUncheckedCreateNestedManyWithoutTypesInput } from '../pokemon-types/pokemon-types-unchecked-create-nested-many-without-types.input';
import { type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput } from '../type-efficacy/type-efficacy-unchecked-create-nested-many-without-types-type-efficacy-target-type-id-totypes.input';
import { type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput } from '../type-efficacy/type-efficacy-unchecked-create-nested-many-without-types-type-efficacy-damage-type-id-totypes.input';
import { type_namesUncheckedCreateNestedManyWithoutTypesInput } from '../type-names/type-names-unchecked-create-nested-many-without-types.input';

@InputType()
export class typesUncheckedCreateWithoutMove_changelogInput {

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

    @Field(() => movesUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    moves?: movesUncheckedCreateNestedManyWithoutTypesInput;

    @Field(() => pokemon_typesUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    pokemon_types?: pokemon_typesUncheckedCreateNestedManyWithoutTypesInput;

    @Field(() => type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput, {nullable:true})
    type_efficacy_type_efficacy_target_type_idTotypes?: type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput;

    @Field(() => type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput, {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput;

    @Field(() => type_namesUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    type_names?: type_namesUncheckedCreateNestedManyWithoutTypesInput;
}

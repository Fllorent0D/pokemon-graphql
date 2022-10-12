import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { typesCreateNestedOneWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from '../types/types-create-nested-one-without-type-efficacy-type-efficacy-target-type-id-totypes.input';

@InputType()
export class type_efficacyCreateWithoutTypes_type_efficacy_damage_type_idTotypesInput {

    @Field(() => Int, {nullable:false})
    damage_factor!: number;

    @Field(() => typesCreateNestedOneWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:false})
    types_type_efficacy_target_type_idTotypes!: typesCreateNestedOneWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;
}

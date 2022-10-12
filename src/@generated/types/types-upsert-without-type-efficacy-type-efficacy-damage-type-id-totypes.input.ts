import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesUpdateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput } from './types-update-without-type-efficacy-type-efficacy-damage-type-id-totypes.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput } from './types-create-without-type-efficacy-type-efficacy-damage-type-id-totypes.input';

@InputType()
export class typesUpsertWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput {

    @Field(() => typesUpdateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput, {nullable:false})
    @Type(() => typesUpdateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput)
    update!: typesUpdateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput;

    @Field(() => typesCreateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput, {nullable:false})
    @Type(() => typesCreateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput)
    create!: typesCreateWithoutType_efficacy_type_efficacy_damage_type_idTotypesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_efficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { Type } from 'class-transformer';
import { type_efficacyUpdateWithoutTypes_type_efficacy_damage_type_idTotypesInput } from './type-efficacy-update-without-types-type-efficacy-damage-type-id-totypes.input';

@InputType()
export class type_efficacyUpdateWithWhereUniqueWithoutTypes_type_efficacy_damage_type_idTotypesInput {

    @Field(() => type_efficacyWhereUniqueInput, {nullable:false})
    @Type(() => type_efficacyWhereUniqueInput)
    where!: type_efficacyWhereUniqueInput;

    @Field(() => type_efficacyUpdateWithoutTypes_type_efficacy_damage_type_idTotypesInput, {nullable:false})
    @Type(() => type_efficacyUpdateWithoutTypes_type_efficacy_damage_type_idTotypesInput)
    data!: type_efficacyUpdateWithoutTypes_type_efficacy_damage_type_idTotypesInput;
}

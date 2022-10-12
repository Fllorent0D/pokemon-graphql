import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from './types-create-without-type-efficacy-type-efficacy-target-type-id-totypes.input';

@InputType()
export class typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:false})
    @Type(() => typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput)
    create!: typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;
}

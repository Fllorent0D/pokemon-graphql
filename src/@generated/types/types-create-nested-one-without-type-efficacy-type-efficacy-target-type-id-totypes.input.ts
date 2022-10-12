import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from './types-create-without-type-efficacy-type-efficacy-target-type-id-totypes.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from './types-create-or-connect-without-type-efficacy-type-efficacy-target-type-id-totypes.input';
import { typesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class typesCreateNestedOneWithoutType_efficacy_type_efficacy_target_type_idTotypesInput {

    @Field(() => typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:true})
    @Type(() => typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput)
    create?: typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;

    @Field(() => typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput)
    connectOrCreate?: typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;
}

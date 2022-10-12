import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from './types-create-without-type-efficacy-type-efficacy-target-type-id-totypes.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from './types-create-or-connect-without-type-efficacy-type-efficacy-target-type-id-totypes.input';
import { typesUpsertWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from './types-upsert-without-type-efficacy-type-efficacy-target-type-id-totypes.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput } from './types-update-without-type-efficacy-type-efficacy-target-type-id-totypes.input';

@InputType()
export class typesUpdateOneRequiredWithoutType_efficacy_type_efficacy_target_type_idTotypesNestedInput {

    @Field(() => typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:true})
    @Type(() => typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput)
    create?: typesCreateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;

    @Field(() => typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput)
    connectOrCreate?: typesCreateOrConnectWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;

    @Field(() => typesUpsertWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:true})
    @Type(() => typesUpsertWithoutType_efficacy_type_efficacy_target_type_idTotypesInput)
    upsert?: typesUpsertWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput, {nullable:true})
    @Type(() => typesUpdateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput)
    update?: typesUpdateWithoutType_efficacy_type_efficacy_target_type_idTotypesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_efficacyCreateWithoutTypes_type_efficacy_target_type_idTotypesInput } from './type-efficacy-create-without-types-type-efficacy-target-type-id-totypes.input';
import { Type } from 'class-transformer';
import { type_efficacyCreateOrConnectWithoutTypes_type_efficacy_target_type_idTotypesInput } from './type-efficacy-create-or-connect-without-types-type-efficacy-target-type-id-totypes.input';
import { type_efficacyUpsertWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput } from './type-efficacy-upsert-with-where-unique-without-types-type-efficacy-target-type-id-totypes.input';
import { type_efficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { type_efficacyUpdateWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput } from './type-efficacy-update-with-where-unique-without-types-type-efficacy-target-type-id-totypes.input';
import { type_efficacyUpdateManyWithWhereWithoutTypes_type_efficacy_target_type_idTotypesInput } from './type-efficacy-update-many-with-where-without-types-type-efficacy-target-type-id-totypes.input';
import { type_efficacyScalarWhereInput } from './type-efficacy-scalar-where.input';

@InputType()
export class type_efficacyUncheckedUpdateManyWithoutTypes_type_efficacy_target_type_idTotypesNestedInput {

    @Field(() => [type_efficacyCreateWithoutTypes_type_efficacy_target_type_idTotypesInput], {nullable:true})
    @Type(() => type_efficacyCreateWithoutTypes_type_efficacy_target_type_idTotypesInput)
    create?: Array<type_efficacyCreateWithoutTypes_type_efficacy_target_type_idTotypesInput>;

    @Field(() => [type_efficacyCreateOrConnectWithoutTypes_type_efficacy_target_type_idTotypesInput], {nullable:true})
    @Type(() => type_efficacyCreateOrConnectWithoutTypes_type_efficacy_target_type_idTotypesInput)
    connectOrCreate?: Array<type_efficacyCreateOrConnectWithoutTypes_type_efficacy_target_type_idTotypesInput>;

    @Field(() => [type_efficacyUpsertWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput], {nullable:true})
    @Type(() => type_efficacyUpsertWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput)
    upsert?: Array<type_efficacyUpsertWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput>;

    @Field(() => [type_efficacyWhereUniqueInput], {nullable:true})
    @Type(() => type_efficacyWhereUniqueInput)
    set?: Array<type_efficacyWhereUniqueInput>;

    @Field(() => [type_efficacyWhereUniqueInput], {nullable:true})
    @Type(() => type_efficacyWhereUniqueInput)
    disconnect?: Array<type_efficacyWhereUniqueInput>;

    @Field(() => [type_efficacyWhereUniqueInput], {nullable:true})
    @Type(() => type_efficacyWhereUniqueInput)
    delete?: Array<type_efficacyWhereUniqueInput>;

    @Field(() => [type_efficacyWhereUniqueInput], {nullable:true})
    @Type(() => type_efficacyWhereUniqueInput)
    connect?: Array<type_efficacyWhereUniqueInput>;

    @Field(() => [type_efficacyUpdateWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput], {nullable:true})
    @Type(() => type_efficacyUpdateWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput)
    update?: Array<type_efficacyUpdateWithWhereUniqueWithoutTypes_type_efficacy_target_type_idTotypesInput>;

    @Field(() => [type_efficacyUpdateManyWithWhereWithoutTypes_type_efficacy_target_type_idTotypesInput], {nullable:true})
    @Type(() => type_efficacyUpdateManyWithWhereWithoutTypes_type_efficacy_target_type_idTotypesInput)
    updateMany?: Array<type_efficacyUpdateManyWithWhereWithoutTypes_type_efficacy_target_type_idTotypesInput>;

    @Field(() => [type_efficacyScalarWhereInput], {nullable:true})
    @Type(() => type_efficacyScalarWhereInput)
    deleteMany?: Array<type_efficacyScalarWhereInput>;
}

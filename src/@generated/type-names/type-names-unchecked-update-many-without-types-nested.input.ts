import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesCreateWithoutTypesInput } from './type-names-create-without-types.input';
import { Type } from 'class-transformer';
import { type_namesCreateOrConnectWithoutTypesInput } from './type-names-create-or-connect-without-types.input';
import { type_namesUpsertWithWhereUniqueWithoutTypesInput } from './type-names-upsert-with-where-unique-without-types.input';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';
import { type_namesUpdateWithWhereUniqueWithoutTypesInput } from './type-names-update-with-where-unique-without-types.input';
import { type_namesUpdateManyWithWhereWithoutTypesInput } from './type-names-update-many-with-where-without-types.input';
import { type_namesScalarWhereInput } from './type-names-scalar-where.input';

@InputType()
export class type_namesUncheckedUpdateManyWithoutTypesNestedInput {

    @Field(() => [type_namesCreateWithoutTypesInput], {nullable:true})
    @Type(() => type_namesCreateWithoutTypesInput)
    create?: Array<type_namesCreateWithoutTypesInput>;

    @Field(() => [type_namesCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => type_namesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<type_namesCreateOrConnectWithoutTypesInput>;

    @Field(() => [type_namesUpsertWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => type_namesUpsertWithWhereUniqueWithoutTypesInput)
    upsert?: Array<type_namesUpsertWithWhereUniqueWithoutTypesInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    set?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    disconnect?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    delete?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    connect?: Array<type_namesWhereUniqueInput>;

    @Field(() => [type_namesUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => type_namesUpdateWithWhereUniqueWithoutTypesInput)
    update?: Array<type_namesUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [type_namesUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    @Type(() => type_namesUpdateManyWithWhereWithoutTypesInput)
    updateMany?: Array<type_namesUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [type_namesScalarWhereInput], {nullable:true})
    @Type(() => type_namesScalarWhereInput)
    deleteMany?: Array<type_namesScalarWhereInput>;
}

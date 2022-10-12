import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesCreateWithoutContest_typesInput } from './contest-type-names-create-without-contest-types.input';
import { Type } from 'class-transformer';
import { contest_type_namesCreateOrConnectWithoutContest_typesInput } from './contest-type-names-create-or-connect-without-contest-types.input';
import { contest_type_namesUpsertWithWhereUniqueWithoutContest_typesInput } from './contest-type-names-upsert-with-where-unique-without-contest-types.input';
import { contest_type_namesWhereUniqueInput } from './contest-type-names-where-unique.input';
import { contest_type_namesUpdateWithWhereUniqueWithoutContest_typesInput } from './contest-type-names-update-with-where-unique-without-contest-types.input';
import { contest_type_namesUpdateManyWithWhereWithoutContest_typesInput } from './contest-type-names-update-many-with-where-without-contest-types.input';
import { contest_type_namesScalarWhereInput } from './contest-type-names-scalar-where.input';

@InputType()
export class contest_type_namesUpdateManyWithoutContest_typesNestedInput {

    @Field(() => [contest_type_namesCreateWithoutContest_typesInput], {nullable:true})
    @Type(() => contest_type_namesCreateWithoutContest_typesInput)
    create?: Array<contest_type_namesCreateWithoutContest_typesInput>;

    @Field(() => [contest_type_namesCreateOrConnectWithoutContest_typesInput], {nullable:true})
    @Type(() => contest_type_namesCreateOrConnectWithoutContest_typesInput)
    connectOrCreate?: Array<contest_type_namesCreateOrConnectWithoutContest_typesInput>;

    @Field(() => [contest_type_namesUpsertWithWhereUniqueWithoutContest_typesInput], {nullable:true})
    @Type(() => contest_type_namesUpsertWithWhereUniqueWithoutContest_typesInput)
    upsert?: Array<contest_type_namesUpsertWithWhereUniqueWithoutContest_typesInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    set?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    disconnect?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    delete?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    connect?: Array<contest_type_namesWhereUniqueInput>;

    @Field(() => [contest_type_namesUpdateWithWhereUniqueWithoutContest_typesInput], {nullable:true})
    @Type(() => contest_type_namesUpdateWithWhereUniqueWithoutContest_typesInput)
    update?: Array<contest_type_namesUpdateWithWhereUniqueWithoutContest_typesInput>;

    @Field(() => [contest_type_namesUpdateManyWithWhereWithoutContest_typesInput], {nullable:true})
    @Type(() => contest_type_namesUpdateManyWithWhereWithoutContest_typesInput)
    updateMany?: Array<contest_type_namesUpdateManyWithWhereWithoutContest_typesInput>;

    @Field(() => [contest_type_namesScalarWhereInput], {nullable:true})
    @Type(() => contest_type_namesScalarWhereInput)
    deleteMany?: Array<contest_type_namesScalarWhereInput>;
}

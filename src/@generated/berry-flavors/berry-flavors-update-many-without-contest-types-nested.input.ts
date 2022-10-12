import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsCreateWithoutContest_typesInput } from './berry-flavors-create-without-contest-types.input';
import { Type } from 'class-transformer';
import { berry_flavorsCreateOrConnectWithoutContest_typesInput } from './berry-flavors-create-or-connect-without-contest-types.input';
import { berry_flavorsUpsertWithWhereUniqueWithoutContest_typesInput } from './berry-flavors-upsert-with-where-unique-without-contest-types.input';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { berry_flavorsUpdateWithWhereUniqueWithoutContest_typesInput } from './berry-flavors-update-with-where-unique-without-contest-types.input';
import { berry_flavorsUpdateManyWithWhereWithoutContest_typesInput } from './berry-flavors-update-many-with-where-without-contest-types.input';
import { berry_flavorsScalarWhereInput } from './berry-flavors-scalar-where.input';

@InputType()
export class berry_flavorsUpdateManyWithoutContest_typesNestedInput {

    @Field(() => [berry_flavorsCreateWithoutContest_typesInput], {nullable:true})
    @Type(() => berry_flavorsCreateWithoutContest_typesInput)
    create?: Array<berry_flavorsCreateWithoutContest_typesInput>;

    @Field(() => [berry_flavorsCreateOrConnectWithoutContest_typesInput], {nullable:true})
    @Type(() => berry_flavorsCreateOrConnectWithoutContest_typesInput)
    connectOrCreate?: Array<berry_flavorsCreateOrConnectWithoutContest_typesInput>;

    @Field(() => [berry_flavorsUpsertWithWhereUniqueWithoutContest_typesInput], {nullable:true})
    @Type(() => berry_flavorsUpsertWithWhereUniqueWithoutContest_typesInput)
    upsert?: Array<berry_flavorsUpsertWithWhereUniqueWithoutContest_typesInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    set?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    disconnect?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    delete?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    connect?: Array<berry_flavorsWhereUniqueInput>;

    @Field(() => [berry_flavorsUpdateWithWhereUniqueWithoutContest_typesInput], {nullable:true})
    @Type(() => berry_flavorsUpdateWithWhereUniqueWithoutContest_typesInput)
    update?: Array<berry_flavorsUpdateWithWhereUniqueWithoutContest_typesInput>;

    @Field(() => [berry_flavorsUpdateManyWithWhereWithoutContest_typesInput], {nullable:true})
    @Type(() => berry_flavorsUpdateManyWithWhereWithoutContest_typesInput)
    updateMany?: Array<berry_flavorsUpdateManyWithWhereWithoutContest_typesInput>;

    @Field(() => [berry_flavorsScalarWhereInput], {nullable:true})
    @Type(() => berry_flavorsScalarWhereInput)
    deleteMany?: Array<berry_flavorsScalarWhereInput>;
}

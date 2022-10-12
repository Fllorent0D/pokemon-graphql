import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsCreateWithoutContest_typesInput } from './berry-flavors-create-without-contest-types.input';
import { Type } from 'class-transformer';
import { berry_flavorsCreateOrConnectWithoutContest_typesInput } from './berry-flavors-create-or-connect-without-contest-types.input';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';

@InputType()
export class berry_flavorsUncheckedCreateNestedManyWithoutContest_typesInput {

    @Field(() => [berry_flavorsCreateWithoutContest_typesInput], {nullable:true})
    @Type(() => berry_flavorsCreateWithoutContest_typesInput)
    create?: Array<berry_flavorsCreateWithoutContest_typesInput>;

    @Field(() => [berry_flavorsCreateOrConnectWithoutContest_typesInput], {nullable:true})
    @Type(() => berry_flavorsCreateOrConnectWithoutContest_typesInput)
    connectOrCreate?: Array<berry_flavorsCreateOrConnectWithoutContest_typesInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    connect?: Array<berry_flavorsWhereUniqueInput>;
}

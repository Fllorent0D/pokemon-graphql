import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesCreateWithoutContest_typesInput } from './contest-type-names-create-without-contest-types.input';
import { Type } from 'class-transformer';
import { contest_type_namesCreateOrConnectWithoutContest_typesInput } from './contest-type-names-create-or-connect-without-contest-types.input';
import { contest_type_namesWhereUniqueInput } from './contest-type-names-where-unique.input';

@InputType()
export class contest_type_namesUncheckedCreateNestedManyWithoutContest_typesInput {

    @Field(() => [contest_type_namesCreateWithoutContest_typesInput], {nullable:true})
    @Type(() => contest_type_namesCreateWithoutContest_typesInput)
    create?: Array<contest_type_namesCreateWithoutContest_typesInput>;

    @Field(() => [contest_type_namesCreateOrConnectWithoutContest_typesInput], {nullable:true})
    @Type(() => contest_type_namesCreateOrConnectWithoutContest_typesInput)
    connectOrCreate?: Array<contest_type_namesCreateOrConnectWithoutContest_typesInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    connect?: Array<contest_type_namesWhereUniqueInput>;
}

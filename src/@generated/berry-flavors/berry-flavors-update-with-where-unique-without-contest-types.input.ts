import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { berry_flavorsUpdateWithoutContest_typesInput } from './berry-flavors-update-without-contest-types.input';

@InputType()
export class berry_flavorsUpdateWithWhereUniqueWithoutContest_typesInput {

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:false})
    @Type(() => berry_flavorsWhereUniqueInput)
    where!: berry_flavorsWhereUniqueInput;

    @Field(() => berry_flavorsUpdateWithoutContest_typesInput, {nullable:false})
    @Type(() => berry_flavorsUpdateWithoutContest_typesInput)
    data!: berry_flavorsUpdateWithoutContest_typesInput;
}

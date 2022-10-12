import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { berry_flavorsUpdateWithoutContest_typesInput } from './berry-flavors-update-without-contest-types.input';
import { berry_flavorsCreateWithoutContest_typesInput } from './berry-flavors-create-without-contest-types.input';

@InputType()
export class berry_flavorsUpsertWithWhereUniqueWithoutContest_typesInput {

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:false})
    @Type(() => berry_flavorsWhereUniqueInput)
    where!: berry_flavorsWhereUniqueInput;

    @Field(() => berry_flavorsUpdateWithoutContest_typesInput, {nullable:false})
    @Type(() => berry_flavorsUpdateWithoutContest_typesInput)
    update!: berry_flavorsUpdateWithoutContest_typesInput;

    @Field(() => berry_flavorsCreateWithoutContest_typesInput, {nullable:false})
    @Type(() => berry_flavorsCreateWithoutContest_typesInput)
    create!: berry_flavorsCreateWithoutContest_typesInput;
}

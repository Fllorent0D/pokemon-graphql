import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutBerry_flavorsInput } from './contest-types-create-without-berry-flavors.input';

@InputType()
export class contest_typesCreateOrConnectWithoutBerry_flavorsInput {

    @Field(() => contest_typesWhereUniqueInput, {nullable:false})
    @Type(() => contest_typesWhereUniqueInput)
    where!: contest_typesWhereUniqueInput;

    @Field(() => contest_typesCreateWithoutBerry_flavorsInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutBerry_flavorsInput)
    create!: contest_typesCreateWithoutBerry_flavorsInput;
}

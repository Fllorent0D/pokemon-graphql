import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesUpdateWithoutBerry_flavorsInput } from './contest-types-update-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutBerry_flavorsInput } from './contest-types-create-without-berry-flavors.input';

@InputType()
export class contest_typesUpsertWithoutBerry_flavorsInput {

    @Field(() => contest_typesUpdateWithoutBerry_flavorsInput, {nullable:false})
    @Type(() => contest_typesUpdateWithoutBerry_flavorsInput)
    update!: contest_typesUpdateWithoutBerry_flavorsInput;

    @Field(() => contest_typesCreateWithoutBerry_flavorsInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutBerry_flavorsInput)
    create!: contest_typesCreateWithoutBerry_flavorsInput;
}

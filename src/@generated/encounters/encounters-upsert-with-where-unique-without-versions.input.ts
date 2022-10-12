import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersUpdateWithoutVersionsInput } from './encounters-update-without-versions.input';
import { encountersCreateWithoutVersionsInput } from './encounters-create-without-versions.input';

@InputType()
export class encountersUpsertWithWhereUniqueWithoutVersionsInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => encountersUpdateWithoutVersionsInput)
    update!: encountersUpdateWithoutVersionsInput;

    @Field(() => encountersCreateWithoutVersionsInput, {nullable:false})
    @Type(() => encountersCreateWithoutVersionsInput)
    create!: encountersCreateWithoutVersionsInput;
}

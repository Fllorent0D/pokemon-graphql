import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersUpdateWithoutVersionsInput } from './encounters-update-without-versions.input';

@InputType()
export class encountersUpdateWithWhereUniqueWithoutVersionsInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => encountersUpdateWithoutVersionsInput)
    data!: encountersUpdateWithoutVersionsInput;
}

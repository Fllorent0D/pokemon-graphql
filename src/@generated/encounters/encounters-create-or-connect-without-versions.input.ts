import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersCreateWithoutVersionsInput } from './encounters-create-without-versions.input';

@InputType()
export class encountersCreateOrConnectWithoutVersionsInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersCreateWithoutVersionsInput, {nullable:false})
    @Type(() => encountersCreateWithoutVersionsInput)
    create!: encountersCreateWithoutVersionsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';
import { Type } from 'class-transformer';
import { version_namesCreateWithoutVersionsInput } from './version-names-create-without-versions.input';

@InputType()
export class version_namesCreateOrConnectWithoutVersionsInput {

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;

    @Field(() => version_namesCreateWithoutVersionsInput, {nullable:false})
    @Type(() => version_namesCreateWithoutVersionsInput)
    create!: version_namesCreateWithoutVersionsInput;
}

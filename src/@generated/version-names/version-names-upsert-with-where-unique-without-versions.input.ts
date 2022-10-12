import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';
import { Type } from 'class-transformer';
import { version_namesUpdateWithoutVersionsInput } from './version-names-update-without-versions.input';
import { version_namesCreateWithoutVersionsInput } from './version-names-create-without-versions.input';

@InputType()
export class version_namesUpsertWithWhereUniqueWithoutVersionsInput {

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;

    @Field(() => version_namesUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => version_namesUpdateWithoutVersionsInput)
    update!: version_namesUpdateWithoutVersionsInput;

    @Field(() => version_namesCreateWithoutVersionsInput, {nullable:false})
    @Type(() => version_namesCreateWithoutVersionsInput)
    create!: version_namesCreateWithoutVersionsInput;
}

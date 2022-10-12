import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';
import { Type } from 'class-transformer';
import { version_namesUpdateWithoutVersionsInput } from './version-names-update-without-versions.input';

@InputType()
export class version_namesUpdateWithWhereUniqueWithoutVersionsInput {

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;

    @Field(() => version_namesUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => version_namesUpdateWithoutVersionsInput)
    data!: version_namesUpdateWithoutVersionsInput;
}

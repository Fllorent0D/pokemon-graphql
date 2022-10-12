import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesCreateWithoutVersionsInput } from './version-names-create-without-versions.input';
import { Type } from 'class-transformer';
import { version_namesCreateOrConnectWithoutVersionsInput } from './version-names-create-or-connect-without-versions.input';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';

@InputType()
export class version_namesUncheckedCreateNestedManyWithoutVersionsInput {

    @Field(() => [version_namesCreateWithoutVersionsInput], {nullable:true})
    @Type(() => version_namesCreateWithoutVersionsInput)
    create?: Array<version_namesCreateWithoutVersionsInput>;

    @Field(() => [version_namesCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => version_namesCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<version_namesCreateOrConnectWithoutVersionsInput>;

    @Field(() => [version_namesWhereUniqueInput], {nullable:true})
    @Type(() => version_namesWhereUniqueInput)
    connect?: Array<version_namesWhereUniqueInput>;
}

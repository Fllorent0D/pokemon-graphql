import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesCreateWithoutVersionsInput } from './version-names-create-without-versions.input';
import { Type } from 'class-transformer';
import { version_namesCreateOrConnectWithoutVersionsInput } from './version-names-create-or-connect-without-versions.input';
import { version_namesUpsertWithWhereUniqueWithoutVersionsInput } from './version-names-upsert-with-where-unique-without-versions.input';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';
import { version_namesUpdateWithWhereUniqueWithoutVersionsInput } from './version-names-update-with-where-unique-without-versions.input';
import { version_namesUpdateManyWithWhereWithoutVersionsInput } from './version-names-update-many-with-where-without-versions.input';
import { version_namesScalarWhereInput } from './version-names-scalar-where.input';

@InputType()
export class version_namesUpdateManyWithoutVersionsNestedInput {

    @Field(() => [version_namesCreateWithoutVersionsInput], {nullable:true})
    @Type(() => version_namesCreateWithoutVersionsInput)
    create?: Array<version_namesCreateWithoutVersionsInput>;

    @Field(() => [version_namesCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => version_namesCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<version_namesCreateOrConnectWithoutVersionsInput>;

    @Field(() => [version_namesUpsertWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => version_namesUpsertWithWhereUniqueWithoutVersionsInput)
    upsert?: Array<version_namesUpsertWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [version_namesWhereUniqueInput], {nullable:true})
    @Type(() => version_namesWhereUniqueInput)
    set?: Array<version_namesWhereUniqueInput>;

    @Field(() => [version_namesWhereUniqueInput], {nullable:true})
    @Type(() => version_namesWhereUniqueInput)
    disconnect?: Array<version_namesWhereUniqueInput>;

    @Field(() => [version_namesWhereUniqueInput], {nullable:true})
    @Type(() => version_namesWhereUniqueInput)
    delete?: Array<version_namesWhereUniqueInput>;

    @Field(() => [version_namesWhereUniqueInput], {nullable:true})
    @Type(() => version_namesWhereUniqueInput)
    connect?: Array<version_namesWhereUniqueInput>;

    @Field(() => [version_namesUpdateWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => version_namesUpdateWithWhereUniqueWithoutVersionsInput)
    update?: Array<version_namesUpdateWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [version_namesUpdateManyWithWhereWithoutVersionsInput], {nullable:true})
    @Type(() => version_namesUpdateManyWithWhereWithoutVersionsInput)
    updateMany?: Array<version_namesUpdateManyWithWhereWithoutVersionsInput>;

    @Field(() => [version_namesScalarWhereInput], {nullable:true})
    @Type(() => version_namesScalarWhereInput)
    deleteMany?: Array<version_namesScalarWhereInput>;
}

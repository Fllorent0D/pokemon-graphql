import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesCreateWithoutLanguagesInput } from './version-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { version_namesCreateOrConnectWithoutLanguagesInput } from './version-names-create-or-connect-without-languages.input';
import { version_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './version-names-upsert-with-where-unique-without-languages.input';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';
import { version_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './version-names-update-with-where-unique-without-languages.input';
import { version_namesUpdateManyWithWhereWithoutLanguagesInput } from './version-names-update-many-with-where-without-languages.input';
import { version_namesScalarWhereInput } from './version-names-scalar-where.input';

@InputType()
export class version_namesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [version_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => version_namesCreateWithoutLanguagesInput)
    create?: Array<version_namesCreateWithoutLanguagesInput>;

    @Field(() => [version_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => version_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<version_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [version_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => version_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<version_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

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

    @Field(() => [version_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => version_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<version_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [version_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => version_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<version_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [version_namesScalarWhereInput], {nullable:true})
    @Type(() => version_namesScalarWhereInput)
    deleteMany?: Array<version_namesScalarWhereInput>;
}

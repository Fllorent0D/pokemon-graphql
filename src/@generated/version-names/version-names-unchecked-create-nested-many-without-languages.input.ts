import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesCreateWithoutLanguagesInput } from './version-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { version_namesCreateOrConnectWithoutLanguagesInput } from './version-names-create-or-connect-without-languages.input';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';

@InputType()
export class version_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [version_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => version_namesCreateWithoutLanguagesInput)
    create?: Array<version_namesCreateWithoutLanguagesInput>;

    @Field(() => [version_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => version_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<version_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [version_namesWhereUniqueInput], {nullable:true})
    @Type(() => version_namesWhereUniqueInput)
    connect?: Array<version_namesWhereUniqueInput>;
}

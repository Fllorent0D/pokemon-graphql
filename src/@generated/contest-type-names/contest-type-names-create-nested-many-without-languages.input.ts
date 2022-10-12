import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesCreateWithoutLanguagesInput } from './contest-type-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { contest_type_namesCreateOrConnectWithoutLanguagesInput } from './contest-type-names-create-or-connect-without-languages.input';
import { contest_type_namesWhereUniqueInput } from './contest-type-names-where-unique.input';

@InputType()
export class contest_type_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [contest_type_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_type_namesCreateWithoutLanguagesInput)
    create?: Array<contest_type_namesCreateWithoutLanguagesInput>;

    @Field(() => [contest_type_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => contest_type_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<contest_type_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [contest_type_namesWhereUniqueInput], {nullable:true})
    @Type(() => contest_type_namesWhereUniqueInput)
    connect?: Array<contest_type_namesWhereUniqueInput>;
}

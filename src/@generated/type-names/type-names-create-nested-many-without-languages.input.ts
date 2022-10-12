import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesCreateWithoutLanguagesInput } from './type-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { type_namesCreateOrConnectWithoutLanguagesInput } from './type-names-create-or-connect-without-languages.input';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';

@InputType()
export class type_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [type_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => type_namesCreateWithoutLanguagesInput)
    create?: Array<type_namesCreateWithoutLanguagesInput>;

    @Field(() => [type_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => type_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<type_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [type_namesWhereUniqueInput], {nullable:true})
    @Type(() => type_namesWhereUniqueInput)
    connect?: Array<type_namesWhereUniqueInput>;
}

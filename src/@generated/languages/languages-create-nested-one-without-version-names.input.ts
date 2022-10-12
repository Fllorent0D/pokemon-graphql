import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutVersion_namesInput } from './languages-create-without-version-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutVersion_namesInput } from './languages-create-or-connect-without-version-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutVersion_namesInput {

    @Field(() => languagesCreateWithoutVersion_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutVersion_namesInput)
    create?: languagesCreateWithoutVersion_namesInput;

    @Field(() => languagesCreateOrConnectWithoutVersion_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutVersion_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutVersion_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}

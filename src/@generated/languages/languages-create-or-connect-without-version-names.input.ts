import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutVersion_namesInput } from './languages-create-without-version-names.input';

@InputType()
export class languagesCreateOrConnectWithoutVersion_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutVersion_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutVersion_namesInput)
    create!: languagesCreateWithoutVersion_namesInput;
}
